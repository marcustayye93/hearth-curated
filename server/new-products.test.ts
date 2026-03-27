import { describe, it, expect } from "vitest";

// We test the product catalog and shopify map integrity for the 14 new products
// added on March 27, 2026

const NEW_PRODUCT_SLUGS = [
  "linen-table-napkins",
  "ceramic-spoon-rest",
  "japanese-sake-set",
  "linen-cushion-cover",
  "brass-wall-hooks",
  "silence-figurine",
  "faux-eucalyptus-garland",
  "glass-propagation-vases",
  "dried-lavender-bundle",
  "faux-fiddle-leaf-fig",
  "faux-daisy-arrangement",
  "ceramic-pour-over-dripper",
  "japanese-linen-apron",
  "acacia-salt-pepper-mill",
];

const NEW_PRODUCT_IDS = [
  "gather-11",
  "gather-12",
  "gather-13",
  "adorn-14",
  "adorn-15",
  "adorn-16",
  "bloom-6",
  "bloom-7",
  "bloom-8",
  "bloom-9",
  "bloom-10",
  "nourish-17",
  "nourish-18",
  "nourish-19",
];

describe("New Products (March 27, 2026)", () => {
  let PRODUCTS: any[];
  let shopifyMap: Record<string, any>;

  it("should load products.ts without errors", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    expect(PRODUCTS).toBeDefined();
    expect(Array.isArray(PRODUCTS)).toBe(true);
  });

  it("should load shopifyMap.ts without errors", async () => {
    const mod = await import("../client/src/lib/shopifyMap");
    shopifyMap = mod.shopifyMap;
    expect(shopifyMap).toBeDefined();
    expect(typeof shopifyMap).toBe("object");
  });

  it("should contain all 14 new product IDs in PRODUCTS", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const productIds = PRODUCTS.map((p) => p.id);
    for (const id of NEW_PRODUCT_IDS) {
      expect(productIds).toContain(id);
    }
  });

  it("should contain all 14 new product slugs in PRODUCTS", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const productSlugs = PRODUCTS.map((p) => p.slug);
    for (const slug of NEW_PRODUCT_SLUGS) {
      expect(productSlugs).toContain(slug);
    }
  });

  it("should have shopifyMap entries for all 14 new products", async () => {
    const mod = await import("../client/src/lib/shopifyMap");
    shopifyMap = mod.shopifyMap;
    for (const slug of NEW_PRODUCT_SLUGS) {
      expect(shopifyMap[slug]).toBeDefined();
      expect(shopifyMap[slug].handle).toBeTruthy();
      expect(shopifyMap[slug].shopifyId).toBeTruthy();
      expect(shopifyMap[slug].variants.length).toBeGreaterThan(0);
    }
  });

  it("each new product should have required fields", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    for (const id of NEW_PRODUCT_IDS) {
      const product = PRODUCTS.find((p) => p.id === id);
      expect(product).toBeDefined();
      expect(product.name).toBeTruthy();
      expect(product.slug).toBeTruthy();
      expect(product.headline).toBeTruthy();
      expect(product.description).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);
      expect(product.collection).toBeTruthy();
      expect(product.collectionSlug).toBeTruthy();
      expect(product.image).toMatch(/^https:\/\//);
      expect(product.tags.length).toBeGreaterThan(0);
    }
  });

  it("new GATHER products should be in gather collection", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const gatherIds = ["gather-11", "gather-12", "gather-13"];
    for (const id of gatherIds) {
      const product = PRODUCTS.find((p) => p.id === id);
      expect(product.collection).toBe("GATHER");
      expect(product.collectionSlug).toBe("gather");
    }
  });

  it("new BLOOM products should be in bloom collection", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const bloomIds = ["bloom-6", "bloom-7", "bloom-8", "bloom-9", "bloom-10"];
    for (const id of bloomIds) {
      const product = PRODUCTS.find((p) => p.id === id);
      expect(product.collection).toBe("BLOOM");
      expect(product.collectionSlug).toBe("bloom");
    }
  });

  it("new ADORN products should be in adorn collection", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const adornIds = ["adorn-14", "adorn-15", "adorn-16"];
    for (const id of adornIds) {
      const product = PRODUCTS.find((p) => p.id === id);
      expect(product.collection).toBe("ADORN");
      expect(product.collectionSlug).toBe("adorn");
    }
  });

  it("new NOURISH products should be in nourish collection", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const nourishIds = ["nourish-17", "nourish-18", "nourish-19"];
    for (const id of nourishIds) {
      const product = PRODUCTS.find((p) => p.id === id);
      expect(product.collection).toBe("NOURISH");
      expect(product.collectionSlug).toBe("nourish");
    }
  });

  it("shopify variant IDs should be valid Shopify GIDs", async () => {
    const mod = await import("../client/src/lib/shopifyMap");
    shopifyMap = mod.shopifyMap;
    for (const slug of NEW_PRODUCT_SLUGS) {
      const entry = shopifyMap[slug];
      expect(entry.shopifyId).toMatch(/^gid:\/\/shopify\/Product\/\d+$/);
      for (const variant of entry.variants) {
        expect(variant.id).toMatch(/^gid:\/\/shopify\/ProductVariant\/\d+$/);
        expect(typeof variant.price).toBe("number");
        expect(typeof variant.available).toBe("boolean");
      }
    }
  });

  it("no duplicate product IDs in PRODUCTS array", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const ids = PRODUCTS.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  it("no duplicate slugs in PRODUCTS array", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const slugs = PRODUCTS.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });
});
