import { describe, expect, it } from "vitest";

describe("Shopify Storefront API credentials", () => {
  const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;

  it("should have SHOPIFY_STORE_DOMAIN set", () => {
    expect(SHOPIFY_STORE_DOMAIN).toBeDefined();
    expect(SHOPIFY_STORE_DOMAIN).not.toBe("");
    expect(SHOPIFY_STORE_DOMAIN).toContain("myshopify.com");
  });

  it("should have SHOPIFY_STOREFRONT_TOKEN set", () => {
    expect(SHOPIFY_STOREFRONT_TOKEN).toBeDefined();
    expect(SHOPIFY_STOREFRONT_TOKEN).not.toBe("");
    expect(SHOPIFY_STOREFRONT_TOKEN!.length).toBeGreaterThanOrEqual(20);
  });

  it("should successfully query the Shopify Storefront API", async () => {
    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({
        query: `{ shop { name } }`,
      }),
    });

    expect(response.ok).toBe(true);

    const json = await response.json();
    expect(json.data).toBeDefined();
    expect(json.data.shop).toBeDefined();
    expect(json.data.shop.name).toBeTruthy();
  });
});
