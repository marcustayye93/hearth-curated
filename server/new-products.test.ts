import { describe, it, expect } from "vitest";

// Tests for the full 82-product catalog across 5 collections
// Updated March 30, 2026 — CJ Dropshipping catalog rebuild

describe("Full Product Catalog (5 Collections)", () => {
  let PRODUCTS: any[];
  let COLLECTIONS: any[];
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

  it("should contain exactly 82 products", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    expect(PRODUCTS.length).toBe(82);
  });

  it("should have 5 collections: FEAST, ADORN, BLOOM, GLOW, DWELL", async () => {
    const mod = await import("../client/src/lib/products");
    COLLECTIONS = mod.COLLECTIONS;
    const slugs = COLLECTIONS.map((c: any) => c.slug);
    expect(slugs).toEqual(["feast", "adorn", "bloom", "glow", "dwell"]);
  });

  it("FEAST collection should have 31 products", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const feastProducts = PRODUCTS.filter((p) => p.collectionSlug === "feast");
    expect(feastProducts.length).toBe(31);
  });

  it("ADORN collection should have 9 products", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const adornProducts = PRODUCTS.filter((p) => p.collectionSlug === "adorn");
    expect(adornProducts.length).toBe(9);
  });

  it("BLOOM collection should have 14 products", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const bloomProducts = PRODUCTS.filter((p) => p.collectionSlug === "bloom");
    expect(bloomProducts.length).toBe(14);
  });

  it("GLOW collection should have 14 products", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const glowProducts = PRODUCTS.filter((p) => p.collectionSlug === "glow");
    expect(glowProducts.length).toBe(14);
  });

  it("DWELL collection should have 14 products", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const dwellProducts = PRODUCTS.filter((p) => p.collectionSlug === "dwell");
    expect(dwellProducts.length).toBe(14);
  });

  it("every product should have required fields", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    for (const product of PRODUCTS) {
      expect(product.id).toBeTruthy();
      expect(product.slug).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(product.headline).toBeTruthy();
      expect(product.description).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);
      expect(product.collection).toBeTruthy();
      expect(product.collectionSlug).toBeTruthy();
      expect(product.image).toMatch(/^https:\/\//);
      expect(product.tags.length).toBeGreaterThan(0);
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

  it("product IDs should match their collection slug prefix", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    for (const product of PRODUCTS) {
      const prefix = product.id.split("-")[0];
      expect(prefix).toBe(product.collectionSlug);
    }
  });

  it("pet-blanket should be in DWELL collection", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const petBlanket = PRODUCTS.find((p) => p.slug === "pet-blanket");
    expect(petBlanket).toBeDefined();
    expect(petBlanket.collection).toBe("DWELL");
    expect(petBlanket.collectionSlug).toBe("dwell");
  });

  it("magnetic-levitating-planter should be in BLOOM collection", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    const planter = PRODUCTS.find((p) => p.slug === "magnetic-levitating-planter");
    expect(planter).toBeDefined();
    expect(planter.collection).toBe("BLOOM");
    expect(planter.collectionSlug).toBe("bloom");
  });

  it("no product should have an empty image URL", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    for (const product of PRODUCTS) {
      expect(product.image).not.toBe("");
      expect(product.image.length).toBeGreaterThan(10);
    }
  });

  it("all available products should be priced >= $9", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    for (const product of PRODUCTS) {
      if (product.available) {
        expect(product.price).toBeGreaterThanOrEqual(9);
      }
    }
  });

  it("no NOURISH, GATHER, or HEARTH collection should exist", async () => {
    const mod = await import("../client/src/lib/products");
    PRODUCTS = mod.PRODUCTS;
    COLLECTIONS = mod.COLLECTIONS;
    const collectionSlugs = COLLECTIONS.map((c: any) => c.slug);
    expect(collectionSlugs).not.toContain("nourish");
    expect(collectionSlugs).not.toContain("gather");
    expect(collectionSlugs).not.toContain("hearth");
    // No product should reference old collections
    for (const product of PRODUCTS) {
      expect(product.collectionSlug).not.toBe("nourish");
      expect(product.collectionSlug).not.toBe("gather");
      expect(product.collectionSlug).not.toBe("hearth");
    }
  });
});
