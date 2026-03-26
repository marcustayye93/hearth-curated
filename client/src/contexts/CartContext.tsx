// HEARTH CURATED — Cart Context
// Design: Full cart state management with free shipping threshold tracking,
// cross-sell recommendations, and persistence via localStorage.

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import {
  FREE_SHIPPING_THRESHOLD,
  getThresholdNudgeItems,
  getCrossSells,
  getProductBySlug,
  type Product,
  type Variant,
} from "@/lib/products";

export interface CartItem {
  productId: string;
  productSlug: string;
  name: string;
  image: string;
  price: number;
  variantId?: string;
  variantLabel?: string;
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
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, variant?: Variant, quantity?: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  clearCart: () => void;
  nudgeItems: Product[];
  getCartCrossSells: () => Product[];
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "hearth-curated-cart";

function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // silent fail
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  // Persist to localStorage on change
  useEffect(() => {
    saveCart(items);
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const nudgeItems = amountToFreeShipping > 0 ? getThresholdNudgeItems(subtotal) : [];

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addItem = useCallback(
    (product: Product, variant?: Variant, quantity = 1) => {
      setItems((prev) => {
        const key = variant ? `${product.id}__${variant.id}` : product.id;
        const existing = prev.find(
          (item) =>
            item.productId === product.id &&
            (variant ? item.variantId === variant.id : !item.variantId)
        );

        if (existing) {
          return prev.map((item) =>
            item.productId === product.id &&
            (variant ? item.variantId === variant.id : !item.variantId)
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [
          ...prev,
          {
            productId: product.id,
            productSlug: product.slug,
            name: product.name,
            image: product.image,
            price: variant?.price ?? product.price,
            variantId: variant?.id,
            variantLabel: variant?.label,
            quantity,
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, variantId?: string) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(
              item.productId === productId &&
              (variantId ? item.variantId === variantId : !item.variantId)
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, variantId: string | undefined, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, variantId);
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.productId === productId &&
          (variantId ? item.variantId === variantId : !item.variantId)
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const getCartCrossSells = useCallback((): Product[] => {
    const cartProductIds = new Set(items.map((i) => i.productId));
    const seen = new Set<string>();
    const results: Product[] = [];

    for (const item of items) {
      const product = getProductBySlug(item.productSlug);
      if (!product) continue;
      const cross = getCrossSells(product);
      for (const p of cross) {
        if (!cartProductIds.has(p.id) && !seen.has(p.id)) {
          seen.add(p.id);
          results.push(p);
        }
      }
    }
    return results.slice(0, 4);
  }, [items]);

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
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        nudgeItems,
        getCartCrossSells,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
