import { describe, expect, it } from "vitest";

describe("Shopify Inventory API", () => {
  const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;

  it("should fetch quantityAvailable from Storefront API", async () => {
    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;
    const query = `{
      products(first: 1) {
        edges {
          node {
            handle
            variants(first: 2) {
              edges {
                node {
                  id
                  quantityAvailable
                }
              }
            }
          }
        }
      }
    }`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query }),
    });

    expect(response.ok).toBe(true);
    const json = await response.json();
    expect(json.data.products.edges.length).toBeGreaterThan(0);

    const firstVariant = json.data.products.edges[0].node.variants.edges[0].node;
    expect(firstVariant).toHaveProperty("id");
    expect(firstVariant).toHaveProperty("quantityAvailable");
    // quantityAvailable should be a number (could be 0 or positive)
    expect(typeof firstVariant.quantityAvailable).toBe("number");
  });

  it("should return inventory for a specific product handle", async () => {
    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;
    // Use a known product handle from the catalog
    const handle = "ebony-cutting-board-solid-wood-household-cutting-board";
    const query = `{
      productByHandle(handle: "${handle}") {
        variants(first: 10) {
          edges {
            node {
              id
              title
              quantityAvailable
            }
          }
        }
      }
    }`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query }),
    });

    expect(response.ok).toBe(true);
    const json = await response.json();
    expect(json.data.productByHandle).not.toBeNull();

    const variants = json.data.productByHandle.variants.edges;
    expect(variants.length).toBeGreaterThan(0);

    for (const v of variants) {
      expect(v.node.id).toMatch(/^gid:\/\/shopify\/ProductVariant\//);
      expect(typeof v.node.quantityAvailable).toBe("number");
    }
  });
});

describe("SEO Features", () => {
  it("robots.txt should be accessible at /robots.txt", async () => {
    // This tests the static file in client/public/robots.txt
    const fs = await import("fs");
    const path = await import("path");
    const robotsPath = path.resolve(process.cwd(), "client/public/robots.txt");
    expect(fs.existsSync(robotsPath)).toBe(true);

    const content = fs.readFileSync(robotsPath, "utf-8");
    expect(content).toContain("User-agent:");
    expect(content).toContain("Sitemap:");
    expect(content).toContain("Disallow: /api/");
  });

  it("sitemap route should exist in server", async () => {
    const fs = await import("fs");
    const path = await import("path");
    // Verify the sitemap module exists
    const sitemapPath = path.resolve(process.cwd(), "server/sitemap.ts");
    expect(fs.existsSync(sitemapPath)).toBe(true);
    const content = fs.readFileSync(sitemapPath, "utf-8");
    expect(content).toContain("sitemap.xml");
    expect(content).toContain("urlset");
  });

  it("collection page should have structured data builder", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const collectionPath = path.resolve(process.cwd(), "client/src/pages/Collection.tsx");
    const content = fs.readFileSync(collectionPath, "utf-8");
    expect(content).toContain("CollectionPage");
    expect(content).toContain("ItemList");
    expect(content).toContain("jsonLd");
  });
});
