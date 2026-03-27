import { describe, it, expect } from "vitest";
import { PRODUCTS, FREE_SHIPPING_THRESHOLD } from "../client/src/lib/products";

describe("CRO Pricing Strategy v2", () => {
  it("should have FREE_SHIPPING_THRESHOLD set to 60", () => {
    expect(FREE_SHIPPING_THRESHOLD).toBe(60);
  });

  it("should have correct base prices for GATEWAY products", () => {
    const gateways: Record<string, number> = {
      "dried-cotton-stem": 9,
      "ceramic-incense-holder": 14,
      "moroccan-decorative-wall-plate": 18,
      "rapid-defrosting-board": 22,
      "ceramic-spoon-rest": 22,
      "moroccan-mandorla-coaster-set": 24,
    };

    for (const [slug, expectedPrice] of Object.entries(gateways)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct base prices for HERO products", () => {
    const heroes: Record<string, number> = {
      "faux-olive-branch": 24,
      "faux-daisy-arrangement": 28,
      "silence-figurine": 28,
      "faux-eucalyptus-garland": 28,
      "dried-lavender-bundle": 36,
      "glass-propagation-vases": 36,
      "nordic-ceramic-vase": 38,
      "cedar-wreath": 38,
      "japanese-sake-set": 56,
    };

    for (const [slug, expectedPrice] of Object.entries(heroes)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct base prices for WORKHORSE products", () => {
    const workhorses: Record<string, number> = {
      "airtight-pantry-container": 28,
      "motion-sensing-cabinet-light": 36,
      "waffle-weave-cotton-dish-cloths": 36,
      "pampas-grass-bouquet": 38,
      "linen-table-napkins": 38,
      "linen-cushion-cover": 38,
      "japanese-linen-apron": 42,
      "faux-fiddle-leaf-fig": 48,
      "vacuum-sealed-glass-canister": 48,
      "acacia-salt-pepper-mill": 48,
      "borosilicate-vacuum-canister": 48,
      "nordic-espresso-cup-saucer": 48,
      "vintage-japanese-ceramic-mug": 48,
      "rechargeable-ambient-table-lamp": 48,
    };

    for (const [slug, expectedPrice] of Object.entries(workhorses)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have correct base prices for ANCHOR products", () => {
    const anchors: Record<string, number> = {
      "compartment-meal-container": 52,
      "cherry-stone-fruit-pitter": 58,
      "japanese-stoneware-mug": 62,
      "hand-painted-ceramic-oil-cruet": 65,
      "wabi-sabi-ceramic-dispenser": 72,
      "wooden-serving-tray": 72,
      "thinker-sculpture": 78,
      "handmade-soy-wax-ceramic-candle": 78,
      "stainless-steel-chopping-board": 98,
      "acacia-wooden-utensil-set": 98,
      "woven-bamboo-table-lamp": 108,
      "acacia-magnetic-knife-block": 128,
      "teak-carving-board": 158,
    };

    for (const [slug, expectedPrice] of Object.entries(anchors)) {
      const product = PRODUCTS.find((p) => p.slug === slug);
      expect(product, `Product ${slug} should exist`).toBeDefined();
      expect(product!.price).toBe(expectedPrice);
    }
  });

  it("should have microwave-steamer-cover set to unavailable", () => {
    const steamer = PRODUCTS.find((p) => p.slug === "microwave-steamer-cover");
    expect(steamer).toBeDefined();
    expect(steamer!.available).toBe(false);
  });

  it("should have no product priced below $9 (except variant singles)", () => {
    for (const product of PRODUCTS) {
      if (product.available) {
        expect(product.price).toBeGreaterThanOrEqual(9);
      }
    }
  });

  it("should have magnetic-spice-tins base price at $12 (single tin)", () => {
    const spiceTins = PRODUCTS.find((p) => p.slug === "magnetic-spice-tins");
    expect(spiceTins).toBeDefined();
    expect(spiceTins!.price).toBe(12);
    // Set variant should be $62
    const setVariant = spiceTins!.variants?.find((v) => v.id === "nourish-13-set");
    expect(setVariant).toBeDefined();
    expect(setVariant!.price).toBe(62);
  });

  it("should have acacia-serving-bowl base price at $58 (small)", () => {
    const bowl = PRODUCTS.find((p) => p.slug === "acacia-serving-bowl");
    expect(bowl).toBeDefined();
    expect(bowl!.price).toBe(58);
    // Statement variant should be $118
    const statementVariant = bowl!.variants?.find((v) => v.id === "gather-2-xxl");
    expect(statementVariant).toBeDefined();
    expect(statementVariant!.price).toBe(118);
  });

  it("should have brass-wall-hooks base price at $12 (single)", () => {
    const hooks = PRODUCTS.find((p) => p.slug === "brass-wall-hooks");
    expect(hooks).toBeDefined();
    expect(hooks!.price).toBe(12);
    // Set of 5 should be $42
    const setVariant = hooks!.variants?.find((v) => v.id === "adorn-15-bk5");
    expect(setVariant).toBeDefined();
    expect(setVariant!.price).toBe(42);
  });
});
