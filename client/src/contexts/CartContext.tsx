// HEARTH CURATED — Cart Context (Shopify-backed)
// Uses Shopify Storefront API via tRPC for real cart management.
// Falls back to local-only mode if API is unavailable.

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { trpc } from "@/lib/trpc";
import { PRODUCTS } from "@/lib/products";
import { shopifyMap } from "@/lib/shopifyMap";

// Build a reverse lookup: Shopify handle → static product
const handleToStaticProduct = new Map<string, typeof PRODUCTS[0]>();
for (const product of PRODUCTS) {
  const info = shopifyMap[product.slug];
  if (info) handleToStaticProduct.set(info.handle, product);
}

const FREE_SHIPPING_THRESHOLD = 75;

// ── Types ────────────────────────────────────────────────────────────

export interface CartItem {
  lineId: string;
  variantId: string;
  productId: string;
  productHandle: string;
  name: string;
  variantLabel: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  amountToFreeShipping: number;
  hasFreeShipping: boolean;
  isOpen: boolean;
  checkoutUrl: string | null;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  goToCheckout: () => void;
  // Legacy cross-sell helpers using static product data
  nudgeItems: typeof PRODUCTS;
  getCartCrossSells: () => typeof PRODUCTS;
}

// Use globalThis to keep a stable context reference across HMR updates
const CART_CONTEXT_KEY = "__HEARTH_CART_CTX__" as const;
const globalRef = globalThis as unknown as Record<
  string,
  ReturnType<typeof createContext<CartContextValue | null>>
>;
if (!globalRef[CART_CONTEXT_KEY]) {
  globalRef[CART_CONTEXT_KEY] = createContext<CartContextValue | null>(null);
}
const CartContext = globalRef[CART_CONTEXT_KEY];

const CART_ID_KEY = "hearth-curated-cart-id";

function getStoredCartId(): string | null {
  try {
    return localStorage.getItem(CART_ID_KEY);
  } catch {
    return null;
  }
}

function storeCartId(id: string | null) {
  try {
    if (id) {
      localStorage.setItem(CART_ID_KEY, id);
    } else {
      localStorage.removeItem(CART_ID_KEY);
    }
  } catch {
    // silent
  }
}

// ── Provider ─────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(getStoredCartId);
  const [items, setItems] = useState<CartItem[]>([]);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createCartMutation = trpc.shopify.cartCreate.useMutation();
  const addToCartMutation = trpc.shopify.cartAdd.useMutation();
  const updateCartMutation = trpc.shopify.cartUpdate.useMutation();
  const removeFromCartMutation = trpc.shopify.cartRemove.useMutation();

  // Sync cart state from Shopify response
  const syncCart = useCallback(
    (cart: {
      id: string;
      checkoutUrl: string;
      lines: Array<{
        id: string;
        quantity: number;
        totalAmount: number;
        variant: {
          id: string;
          title: string;
          price: number;
          selectedOptions: Array<{ name: string; value: string }>;
          image: { url: string; altText: string | null } | null;
        };
        product: {
          id: string;
          handle: string;
          title: string;
          image: { url: string; altText: string | null } | null;
        };
      }>;
    }) => {
      setCartId(cart.id);
      storeCartId(cart.id);
      setCheckoutUrl(cart.checkoutUrl);
      setItems(
        cart.lines.map((line) => {
          // Map back to editorial data if available
          const staticProduct = handleToStaticProduct.get(line.product.handle);
          // Find matching static variant by index (Shopify variant GID → static variant)
          const staticVariant = staticProduct?.variants?.find(
            (v) => v.shopifyVariantId === line.variant.id
          );

          return {
            lineId: line.id,
            variantId: line.variant.id,
            productId: line.product.id,
            productHandle: staticProduct?.slug || line.product.handle,
            name: staticProduct?.name || line.product.title,
            variantLabel: staticVariant?.label
              || (line.variant.title !== "Default Title" ? line.variant.title : ""),
            image: staticProduct?.image
              || line.variant.image?.url
              || line.product.image?.url
              || "",
            price: line.variant.price,
            quantity: line.quantity,
          };
        })
      );
    },
    []
  );

  // Derived values
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  // ── Cart Operations ──────────────────────────────────────────────

  const ensureCart = useCallback(async (): Promise<string> => {
    if (cartId) return cartId;
    const cart = await createCartMutation.mutateAsync({});
    syncCart(cart);
    return cart.id;
  }, [cartId, createCartMutation, syncCart]);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      setIsLoading(true);
      try {
        const currentCartId = await ensureCart();
        const cart = await addToCartMutation.mutateAsync({
          cartId: currentCartId,
          lines: [{ merchandiseId: variantId, quantity }],
        });
        syncCart(cart);
        setIsOpen(true);
      } catch (err) {
        console.error("Failed to add to cart:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [ensureCart, addToCartMutation, syncCart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cartId) return;
      setIsLoading(true);
      try {
        const cart = await removeFromCartMutation.mutateAsync({
          cartId,
          lineIds: [lineId],
        });
        syncCart(cart);
      } catch (err) {
        console.error("Failed to remove from cart:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [cartId, removeFromCartMutation, syncCart]
  );

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cartId) return;
      if (quantity <= 0) {
        return removeItem(lineId);
      }
      setIsLoading(true);
      try {
        const cart = await updateCartMutation.mutateAsync({
          cartId,
          lines: [{ id: lineId, quantity }],
        });
        syncCart(cart);
      } catch (err) {
        console.error("Failed to update cart:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [cartId, updateCartMutation, syncCart, removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    setCartId(null);
    setCheckoutUrl(null);
    storeCartId(null);
  }, []);

  const goToCheckout = useCallback(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  // Legacy cross-sell helpers using static data
  const nudgeItems = PRODUCTS.filter(
    (p) => p.available && p.price <= amountToFreeShipping + 5 && p.price >= 9
  )
    .sort((a, b) => Math.abs(a.price - amountToFreeShipping) - Math.abs(b.price - amountToFreeShipping))
    .slice(0, 3);

  const getCartCrossSells = () => {
    const cartHandles = new Set(items.map((i) => i.productHandle));
    return PRODUCTS.filter((p) => p.available && !cartHandles.has(p.slug)).slice(0, 4);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountToFreeShipping,
        hasFreeShipping,
        isOpen,
        checkoutUrl,
        isLoading,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        goToCheckout,
        nudgeItems,
        getCartCrossSells,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    // During HMR, context may briefly be null — return a safe no-op fallback
    return {
      items: [],
      itemCount: 0,
      subtotal: 0,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
      amountToFreeShipping: FREE_SHIPPING_THRESHOLD,
      hasFreeShipping: false,
      isOpen: false,
      checkoutUrl: null,
      isLoading: false,
      openCart: () => {},
      closeCart: () => {},
      toggleCart: () => {},
      addItem: async () => {},
      removeItem: async () => {},
      updateQuantity: async () => {},
      clearCart: () => {},
      goToCheckout: () => {},
      nudgeItems: [],
      getCartCrossSells: () => [],
    };
  }
  return context;
}
