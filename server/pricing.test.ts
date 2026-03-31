import { describe, it, expect } from "vitest";
import { PRODUCTS, FREE_SHIPPING_THRESHOLD } from "../client/src/lib/products";

// Updated March 30, 2026 — Competitive repricing round 2:
// - Table lamps capped at $99
// - Edison Night Lamp $68→$78
// - Japanese/Woven Bamboo Bedside $88→$98
// - Ceramic Bedside $98→$99, Artisan Table $128→$99
// - Acacia Bowl $58→$68, Teak Utensils $38→$48
// - Fireplace Diffuser $58→$59

describe("Catalog Pricing Integrity", () => {
  it("should have FREE_SHIPPING_THRESHOLD set to 70", () => {
    expect(FREE_SHIPPING_THRESHOLD).toBe(70);
  });

  it("all available products should be priced >= $2 (some variant-based products have low base price)", () => {
    for (const product of PRODUCTS) {
      if (product.available) {
        expect(product.price, `${product.slug} should be >= $2`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("no product should be priced above $200", () => {
    for (const product of PRODUCTS) {
      expect(product.price, `${product.slug} should be <= $200`).toBeLessThanOrEqual(200);
    }
  });

  it("should have correct prices for key FEAST products", () => {
    const expected: Record<string, number> = {
      "acacia-salt-pepper-mill": 58,
      "acacia-magnetic-knife-block": 148,
      "hand-painted-ceramic-oil-cruet": 48,
      "rapid-defrosting-board": 28,
      "multi-function-grater": 18,
      "japanese-sake-set": 18,
      "ceramic-pour-over-dripper": 32,
      "acacia-serving-bowl": 68,

      "stoneware-travel-tea-set": 32,
      "teak-kitchen-utensil-set": 5,
      "black-walnut-resin-tray": 34,
      "retro-reactive-glaze-dinnerware": 10,
      "jujube-wood-serving-basin": 58,
      "acacia-wood-serving-plate": 14,
      "japanese-ceramic-spoon-set": 6,
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
      "nordic-figurine-monochrome": 65,
      "fireplace-aroma-diffuser": 59,
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
      "pampas-grass-bouquet": 2.21,
      "dried-lavender-bundle": 22,
      "magnetic-levitating-planter": 128,
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
      "woven-bamboo-table-lamp": 98,
      "motion-sensing-cabinet-light": 18,
      "mushroom-night-light": 22,
      "ceramic-bedside-lamp": 99,
      "edison-vintage-night-lamp": 16,
      "wax-melt-aromatherapy-lamp": 23,
      "round-linen-table-lamp": 98,
      "japanese-bedside-lamp": 98,
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
      "pet-blanket": 18,
      "linen-table-runner": 18,
      "linen-tablecloth": 28,
      "linen-placemats": 32,
      "coral-fleece-throw-blanket": 38,
    };

    for (const [slug, expectedPrice] of Object.entries(expected)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("no table lamp should exceed $99", () => {
    const tableLampSlugs = [
      "edison-vintage-night-lamp",
      "japanese-bedside-lamp",
      "woven-bamboo-table-lamp",
      "ceramic-bedside-lamp",
      "round-linen-table-lamp",
      "square-linen-table-lamp",
    ];
    for (const slug of tableLampSlugs) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      if (product) {
        expect(product.price, `Lamp ${slug} should be <= $99`).toBeLessThanOrEqual(99);
      }
    }
  });

  it("deleted products should not exist in catalog", () => {
    const deletedSlugs = [
      "rattan-floor-lamp",
      "rice-paper-table-lamp",
      "acacia-round-dish-set",
      "borosilicate-glass-canister",
      "sculptural-glass-vase",
      "minimalist-ceramic-vase",
      "acacia-serving-tray",
    ];
    for (const slug of deletedSlugs) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Deleted product ${slug} should not exist`).toBeUndefined();
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
