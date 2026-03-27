import { describe, it, expect } from "vitest";

describe("Shopify Admin API Token", () => {
  const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;

  it("should have SHOPIFY_ADMIN_TOKEN set", () => {
    expect(SHOPIFY_ADMIN_TOKEN).toBeDefined();
    expect(SHOPIFY_ADMIN_TOKEN).not.toBe("");
    expect(SHOPIFY_ADMIN_TOKEN!.startsWith("shpat_")).toBe(true);
  });

  it("should successfully authenticate with Shopify Admin API", async () => {
    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2024-01/shop.json`;

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN!,
        "Content-Type": "application/json",
      },
    });

    expect(response.ok).toBe(true);
    const data = await response.json();
    expect(data.shop).toBeDefined();
    expect(data.shop.name).toBeDefined();
    console.log("Shop name:", data.shop.name);
  });
});
