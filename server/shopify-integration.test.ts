import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

/**
 * Shopify Storefront API integration tests.
 *
 * These tests hit the real Shopify API (not mocked) to verify:
 * 1. Product queries return normalized data
 * 2. Cart lifecycle: create → add → update → remove
 * 3. Data shapes match our NormalizedProduct / NormalizedCart contracts
 */

// Create a public (unauthenticated) caller — Shopify routes are all public
function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as unknown as TrpcContext["res"],
  };
}

// Known product handle from the Shopify store (Rapid Defrosting Board)
const KNOWN_HANDLE =
  "rapid-defrosting-board-aluminium-thawing-plate";

describe("Shopify Product Queries", () => {
  const caller = appRouter.createCaller(createPublicContext());

  it("should fetch a list of products with normalized shape", async () => {
    const result = await caller.shopify.products({ first: 5 });

    expect(result).toBeDefined();
    expect(result.products).toBeInstanceOf(Array);
    expect(result.products.length).toBeGreaterThan(0);
    expect(result.pageInfo).toBeDefined();

    // Verify normalized product shape
    const product = result.products[0];
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("handle");
    expect(product).toHaveProperty("title");
    expect(product).toHaveProperty("availableForSale");
    expect(product).toHaveProperty("priceRange");
    expect(product.priceRange).toHaveProperty("min");
    expect(product.priceRange).toHaveProperty("max");
    expect(typeof product.priceRange.min).toBe("number");
    expect(product).toHaveProperty("variants");
    expect(product.variants.length).toBeGreaterThan(0);

    // Verify variant shape
    const variant = product.variants[0];
    expect(variant).toHaveProperty("id");
    expect(variant).toHaveProperty("title");
    expect(variant).toHaveProperty("price");
    expect(typeof variant.price).toBe("number");
    expect(variant).toHaveProperty("availableForSale");
  });

  it("should fetch a product by handle", async () => {
    const product = await caller.shopify.productByHandle({
      handle: KNOWN_HANDLE,
    });

    expect(product).not.toBeNull();
    expect(product!.handle).toBe(KNOWN_HANDLE);
    expect(product!.title).toBeTruthy();
    expect(product!.variants.length).toBeGreaterThan(0);
    // Some products may not have images uploaded yet
    expect(product!.images).toBeDefined();
  });

  it("should return null for a non-existent handle", async () => {
    const product = await caller.shopify.productByHandle({
      handle: "this-product-definitely-does-not-exist-12345",
    });

    expect(product).toBeNull();
  });
});

describe("Shopify Cart Lifecycle", () => {
  const caller = appRouter.createCaller(createPublicContext());

  // Use a known variant GID from the store
  const VARIANT_GID = "gid://shopify/ProductVariant/59248122298449"; // Rapid Defrosting Board

  it("should perform a full cart lifecycle: create → add → update → remove", { timeout: 15000 }, async () => {
    // Step 1: Create an empty cart
    const emptyCart = await caller.shopify.cartCreate();
    expect(emptyCart).toBeDefined();
    expect(emptyCart.id).toBeTruthy();
    expect(emptyCart.checkoutUrl).toBeTruthy();
    // Checkout URL may use custom domain or myshopify.com
    expect(emptyCart.checkoutUrl).toMatch(/https:\/\/.+\/cart/);
    expect(emptyCart.totalQuantity).toBe(0);
    expect(emptyCart.lines).toHaveLength(0);

    const cartId = emptyCart.id;

    // Step 2: Add a line item
    const addedCart = await caller.shopify.cartAdd({
      cartId,
      lines: [{ merchandiseId: VARIANT_GID, quantity: 1 }],
    });
    expect(addedCart.totalQuantity).toBe(1);
    expect(addedCart.lines).toHaveLength(1);

    const line = addedCart.lines[0];
    expect(line.variant.id).toBe(VARIANT_GID);
    expect(line.quantity).toBe(1);
    expect(typeof line.variant.price).toBe("number");
    expect(line.variant.price).toBeGreaterThan(0);
    expect(line.product.handle).toBeTruthy();

    const lineId = line.id;

    // Step 3: Update quantity
    const updatedCart = await caller.shopify.cartUpdate({
      cartId,
      lines: [{ id: lineId, quantity: 3 }],
    });
    expect(updatedCart.totalQuantity).toBe(3);
    expect(updatedCart.lines).toHaveLength(1);
    expect(updatedCart.lines[0].quantity).toBe(3);

    // Step 4: Remove the line item
    const removedCart = await caller.shopify.cartRemove({
      cartId,
      lineIds: [lineId],
    });
    expect(removedCart.totalQuantity).toBe(0);
    expect(removedCart.lines).toHaveLength(0);
  });

  it("should create a cart with initial lines", async () => {
    const cart = await caller.shopify.cartCreate({
      lines: [{ merchandiseId: VARIANT_GID, quantity: 2 }],
    });

    expect(cart.id).toBeTruthy();
    expect(cart.totalQuantity).toBe(2);
    expect(cart.lines).toHaveLength(1);
    expect(cart.lines[0].quantity).toBe(2);
    expect(cart.checkoutUrl).toMatch(/https:\/\/.+\/cart/);
  });
});

describe("Shopify Cart - Normalized Data Shape", () => {
  const caller = appRouter.createCaller(createPublicContext());

  it("should return a fully normalized cart with cost breakdown", async () => {
    const VARIANT_GID = "gid://shopify/ProductVariant/59248122298449"; // Rapid Defrosting Board

    const cart = await caller.shopify.cartCreate({
      lines: [{ merchandiseId: VARIANT_GID, quantity: 1 }],
    });

    // Cost structure
    expect(cart.cost).toBeDefined();
    expect(typeof cart.cost.total).toBe("number");
    expect(typeof cart.cost.subtotal).toBe("number");
    expect(typeof cart.cost.tax).toBe("number");
    expect(cart.cost.currencyCode).toBeTruthy();

    // Line item structure
    const line = cart.lines[0];
    expect(line).toHaveProperty("id");
    expect(line).toHaveProperty("quantity");
    expect(line).toHaveProperty("totalAmount");
    expect(typeof line.totalAmount).toBe("number");

    // Variant in line
    expect(line.variant).toHaveProperty("id");
    expect(line.variant).toHaveProperty("title");
    expect(line.variant).toHaveProperty("price");
    expect(line.variant).toHaveProperty("selectedOptions");

    // Product in line
    expect(line.product).toHaveProperty("id");
    expect(line.product).toHaveProperty("handle");
    expect(line.product).toHaveProperty("title");
  });
});
