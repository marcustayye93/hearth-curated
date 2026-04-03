import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";

/**
 * Tests to verify variant image fixes and CRO improvements.
 * These validate the data layer changes made to products.ts.
 */

// Read products.ts content for validation
const productsPath = path.resolve(process.cwd(), "client/src/lib/products.ts");
const productsContent = fs.readFileSync(productsPath, "utf-8");

describe("Variant Image Fixes", () => {
  describe("Japanese Matcha Ceremony Set", () => {
    it("should have 3 unique variant images (Black, Brown, Green)", () => {
      // Extract matcha variant images
      const matchaSection = productsContent.slice(
        productsContent.indexOf('"japanese-matcha-ceremony-set"'),
        productsContent.indexOf('"japanese-matcha-ceremony-set"') + 2000
      );
      
      // Find all image URLs in variants
      const imageMatches = [...matchaSection.matchAll(/image:\s*"([^"]+)"/g)];
      const images = imageMatches.map(m => m[1]);
      
      // Should have at least 3 images (main + 3 variants, but main may overlap with Black)
      expect(images.length).toBeGreaterThanOrEqual(3);
      
      // Extract just variant images (after the main image)
      const variantImages = images.slice(1); // Skip main product image
      
      // All variant images should be unique
      const uniqueVariantImages = new Set(variantImages);
      expect(uniqueVariantImages.size).toBe(variantImages.length);
    });

    it("should not have matcha variants sharing the same image URL", () => {
      const matchaSection = productsContent.slice(
        productsContent.indexOf('"matcha-set-7pieces-black"'),
        productsContent.indexOf('"matcha-set-7pieces-black"') + 1500
      );
      
      const imageMatches = [...matchaSection.matchAll(/image:\s*"([^"]+)"/g)];
      const variantImages = imageMatches.map(m => m[1]);
      
      // Each variant should have a unique image
      const uniqueImages = new Set(variantImages);
      expect(uniqueImages.size).toBe(variantImages.length);
    });
  });

  describe("Stoneware Travel Tea Set", () => {
    it("should have 3 unique variant images", () => {
      const teaSection = productsContent.slice(
        productsContent.indexOf('"stoneware-travel-tea-set-one-pot-one-cup-with"'),
        productsContent.indexOf('"stoneware-travel-tea-set-one-pot-one-cup-with"') + 1500
      );
      
      const imageMatches = [...teaSection.matchAll(/image:\s*"([^"]+)"/g)];
      const variantImages = imageMatches.map(m => m[1]);
      
      expect(variantImages.length).toBe(3);
      
      // All variant images should be unique
      const uniqueImages = new Set(variantImages);
      expect(uniqueImages.size).toBe(3);
    });

    it("capsule bag variant should have capsule-specific image", () => {
      const capsuleMatch = productsContent.match(
        /stoneware-travel-tea-set-capsule-bag.*?image:\s*"([^"]+)"/
      );
      expect(capsuleMatch).not.toBeNull();
      expect(capsuleMatch![1]).toContain("tea-set-capsule");
    });

    it("travel bag variant should have travel-bag-specific image", () => {
      const travelMatch = productsContent.match(
        /stoneware-travel-tea-set-travel-bag.*?image:\s*"([^"]+)"/
      );
      expect(travelMatch).not.toBeNull();
      expect(travelMatch![1]).toContain("tea-set-travel-bag");
    });
  });

  describe("Japanese Ceramic Spoon Set", () => {
    it("Purplish Blue variant should NOT use matcha ceremony set image", () => {
      const spoonMatch = productsContent.match(
        /japanese-ceramic-spoon-purplish-blue.*?image:\s*"([^"]+)"/
      );
      expect(spoonMatch).not.toBeNull();
      // Should NOT contain "matcha" in the image URL
      expect(spoonMatch![1]).not.toContain("matcha");
      // Should contain "spoon" or "ceramic-spoon" in the image URL
      expect(spoonMatch![1]).toContain("ceramic-spoon-purplish-blue");
    });

    it("should be mapped to correct Shopify product", () => {
      // Check shopifyMap
      const shopifyMapPath = path.resolve(process.cwd(), "client/src/lib/shopifyMap.ts");
      const shopifyMapContent = fs.readFileSync(shopifyMapPath, "utf-8");
      
      expect(shopifyMapContent).toContain('"japanese-ceramic-spoon-set"');
      expect(shopifyMapContent).toContain("15738951565393");
    });
  });
});

describe("CRO Features", () => {
  it("useRecentlyViewed hook file should exist", () => {
    const hookPath = path.resolve(process.cwd(), "client/src/hooks/useRecentlyViewed.ts");
    expect(fs.existsSync(hookPath)).toBe(true);
    
    const content = fs.readFileSync(hookPath, "utf-8");
    expect(content).toContain("localStorage");
    expect(content).toContain("hc-recently-viewed");
    expect(content).toContain("useRecentlyViewed");
  });

  it("Product page should import useRecentlyViewed", () => {
    const productPath = path.resolve(process.cwd(), "client/src/pages/Product.tsx");
    const content = fs.readFileSync(productPath, "utf-8");
    expect(content).toContain("useRecentlyViewed");
    expect(content).toContain("Recently Viewed");
  });

  it("BackToTop component should exist", () => {
    const backToTopPath = path.resolve(process.cwd(), "client/src/components/BackToTop.tsx");
    expect(fs.existsSync(backToTopPath)).toBe(true);
    
    const content = fs.readFileSync(backToTopPath, "utf-8");
    expect(content).toContain("scrollToTop");
    expect(content).toContain("Back to top");
  });

  it("App.tsx should include BackToTop component", () => {
    const appPath = path.resolve(process.cwd(), "client/src/App.tsx");
    const content = fs.readFileSync(appPath, "utf-8");
    expect(content).toContain("BackToTop");
  });
});
