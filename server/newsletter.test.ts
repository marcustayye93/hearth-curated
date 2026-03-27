import { describe, it, expect } from "vitest";

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN ?? "";
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN ?? "";
const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID ?? "";
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET ?? "";
const API_VERSION = "2024-01";

describe("Shopify Newsletter / Customer Creation", () => {
  it("should have Shopify Admin API credentials configured", () => {
    expect(SHOPIFY_STORE_DOMAIN).toBeTruthy();
    expect(SHOPIFY_ADMIN_TOKEN).toBeTruthy();
    expect(SHOPIFY_ADMIN_TOKEN.startsWith("shpat_")).toBe(true);
  });

  it("should have client credentials for token refresh", () => {
    expect(SHOPIFY_CLIENT_ID).toBeTruthy();
    expect(SHOPIFY_CLIENT_SECRET).toBeTruthy();
    expect(SHOPIFY_CLIENT_SECRET.startsWith("shpss_")).toBe(true);
  });

  it("should obtain a fresh admin token via client credentials", async () => {
    const storeName = SHOPIFY_STORE_DOMAIN.replace(".myshopify.com", "");
    const endpoint = `https://${storeName}.myshopify.com/admin/oauth/access_token`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: SHOPIFY_CLIENT_ID,
        client_secret: SHOPIFY_CLIENT_SECRET,
      }),
    });

    expect(response.ok).toBe(true);
    const data = await response.json();
    expect(data.access_token).toBeTruthy();
    expect(data.access_token.startsWith("shpat_")).toBe(true);
    expect(data.scope).toContain("write_customers");
  });

  it("should create or find a customer via the Admin API", async () => {
    const testEmail = `hc-test-${Date.now()}@example.com`;

    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers.json`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
      },
      body: JSON.stringify({
        customer: {
          email: testEmail,
          tags: "newsletter, test",
          email_marketing_consent: {
            state: "subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: new Date().toISOString(),
          },
          accepts_marketing: true,
          verified_email: true,
          send_email_welcome: false,
        },
      }),
    });

    expect(response.ok).toBe(true);

    const json = await response.json();
    expect(json.customer).toBeDefined();
    expect(json.customer.email).toBe(testEmail);
    expect(json.customer.tags).toContain("newsletter");

    // Clean up — delete the test customer
    const customerId = json.customer.id;
    const deleteEndpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers/${customerId}.json`;
    const deleteResponse = await fetch(deleteEndpoint, {
      method: "DELETE",
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
      },
    });
    expect(deleteResponse.ok).toBe(true);
  });

  it("should search for customers by email", async () => {
    // Search for a non-existent email should return empty
    const fakeEmail = `nonexistent-${Date.now()}@example.com`;
    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers/search.json?query=email:${encodeURIComponent(fakeEmail)}`;

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN,
      },
    });

    expect(response.ok).toBe(true);
    const json = await response.json();
    expect(json.customers).toBeDefined();
    expect(Array.isArray(json.customers)).toBe(true);
    expect(json.customers.length).toBe(0);
  });
});
