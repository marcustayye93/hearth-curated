import { describe, it, expect } from "vitest";

/**
 * Tests for the "What's in the Box" feature
 * Validates that all products have includes data and it's well-formed
 */

// We need to import the products data
// Since products.ts is a client-side file with TypeScript, we read it as text
import { readFileSync } from "fs";
import { resolve } from "path";

describe("What's in the Box — includes data", () => {
  const productsContent = readFileSync(
    resolve(__dirname, "../client/src/lib/products.ts"),
    "utf-8"
  );

  // Extract all product slugs (excluding collection entries)
  const collectionSlugs = ["feast", "adorn", "bloom", "glow", "dwell"];
  const slugMatches = [...productsContent.matchAll(/slug:\s*"([^"]+)"/g)];
  const productSlugs = slugMatches
    .map((m) => m[1])
    .filter((s) => !collectionSlugs.includes(s));

  // Extract all includes arrays
  const includesMatches = [
    ...productsContent.matchAll(/includes:\s*\[([^\]]*)\]/g),
  ];

  it("should have includes data for all 82 products", () => {
    expect(productSlugs.length).toBe(82);
    expect(includesMatches.length).toBe(82);
  });

  it("every includes array should have at least one item", () => {
    for (const match of includesMatches) {
      const items = match[1]
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
      expect(items.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('every includes item should follow the "N × Description" format', () => {
    for (const match of includesMatches) {
      const items = match[1]
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
      for (const item of items) {
        // Should match pattern like "1 × Item name" or "2 × Item name"
        expect(item).toMatch(/^\d+\s*×\s*.+/);
      }
    }
  });

  it("Product interface should have includes field defined", () => {
    expect(productsContent).toContain("includes?: string[]");
  });

  it("specific products should have correct includes", () => {
    // Ceramic Seasoning Pot Set should include pot, lid, and spoon
    const ceramicPotSection = productsContent.substring(
      productsContent.indexOf('slug: "ceramic-seasoning-pot-set"'),
      productsContent.indexOf(
        'slug: "',
        productsContent.indexOf('slug: "ceramic-seasoning-pot-set"') + 40
      )
    );
    expect(ceramicPotSection).toContain("Ceramic pot");
    expect(ceramicPotSection).toContain("Bamboo lid");
    expect(ceramicPotSection).toContain("Ceramic spoon");

    // Magnetic Levitating Planter should include base, pot, plant, cable, adapter
    const planterSection = productsContent.substring(
      productsContent.indexOf('slug: "magnetic-levitating-planter"'),
      productsContent.indexOf(
        'slug: "',
        productsContent.indexOf('slug: "magnetic-levitating-planter"') + 40
      )
    );
    expect(planterSection).toContain("Volcanic rock resin base");
    expect(planterSection).toContain("Floating pot");
    expect(planterSection).toContain("Asparagus fern plant");
    expect(planterSection).toContain("USB power cable");
    expect(planterSection).toContain("Power adapter");
  });
});
