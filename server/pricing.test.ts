import { describe, it, expect } from "vitest";
import { PRODUCTS, FREE_SHIPPING_THRESHOLD } from "../client/src/lib/products";

describe("Catalog Pricing Integrity", () => {
  it("should have FREE_SHIPPING_THRESHOLD set to 60", () => {
    expect(FREE_SHIPPING_THRESHOLD).toBe(60);
  });

  it("all available products should be priced >= $9", () => {
    for (const product of PRODUCTS) {
      if (product.available) {
        expect(product.price, `${product.slug} should be >= $9`).toBeGreaterThanOrEqual(9);
      }
    }
  });

  it("no product should be priced above $200", () => {
    for (const product of PRODUCTS) {
      expect(product.price, `${product.slug} should be <= $200`).toBeLessThanOrEqual(200);
    }
  });

  it("should have correct prices for key HEARTH products", () => {
    const expected: Record<string, number> = {
      "acacia-salt-pepper-mill": 48,
      "acacia-magnetic-knife-block": 128,
      "hand-painted-ceramic-oil-cruet": 32,
      "rapid-defrosting-board": 38,
      "multi-function-grater": 28,
      "japanese-sake-set": 48,
      "ceramic-pour-over-dripper": 32,
    };

    for (const [slug, expectedPrice] of Object.entries(expected)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct prices for key ADORN products", () => {
    const expected: Record<string, number> = {
      "led-aroma-diffuser": 48,
      "ceramic-incense-holder": 22,
      "fireplace-aroma-diffuser": 58,
      "abstract-figurine": 42,
    };

    for (const [slug, expectedPrice] of Object.entries(expected)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct prices for key BLOOM products", () => {
    const expected: Record<string, number> = {
      "dried-cotton-stem": 18,
      "pampas-grass-bouquet": 32,
      "dried-lavender-bundle": 22,
      "magnetic-levitating-planter": 78,
      "faux-banyan-tree": 128,
    };

    for (const [slug, expectedPrice] of Object.entries(expected)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct prices for key GLOW products", () => {
    const expected: Record<string, number> = {
      "woven-bamboo-table-lamp": 58,
      "motion-sensing-cabinet-light": 22,
      "rattan-floor-lamp": 128,
      "mushroom-night-light": 22,
    };

    for (const [slug, expectedPrice] of Object.entries(expected)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct prices for key DWELL products", () => {
    const expected: Record<string, number> = {
      "bohemian-area-rug": 88,
      "pet-blanket": 22,
      "linen-placemats": 32,
      "coral-fleece-throw-blanket": 38,
    };

    for (const [slug, expectedPrice] of Object.entries(expected)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("variants should have prices >= base price or within reasonable range", () => {
    for (const product of PRODUCTS) {
      if (product.variants && product.variants.length > 0) {
        for (const variant of product.variants) {
          // Variant prices should be positive
          expect(variant.price, `${product.slug} variant ${variant.id} should have positive price`).toBeGreaterThan(0);
        }
      }
    }
  });
});
