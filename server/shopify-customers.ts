/**
 * Shopify Admin API — Customer Management
 * Creates customers from newsletter signups via the REST Admin API.
 * Uses auto-refreshing token manager for reliable authentication.
 */

import { getAdminToken } from "./shopify-admin-token";

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN ?? "";
const API_VERSION = "2024-01";

interface ShopifyCustomer {
  id: number;
  email: string;
  created_at: string;
  tags: string;
  email_marketing_consent?: {
    state: string;
    opt_in_level: string;
    consent_updated_at: string;
  };
}

interface ShopifyCustomerResponse {
  customer: ShopifyCustomer;
}

interface ShopifyCustomerSearchResponse {
  customers: ShopifyCustomer[];
}

interface ShopifyError {
  errors: Record<string, string[]> | string;
}

/**
 * Search for an existing customer by email
 */
export async function findCustomerByEmail(email: string): Promise<ShopifyCustomer | null> {
  const token = await getAdminToken();
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers/search.json?query=email:${encodeURIComponent(email)}`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
  });

  if (!response.ok) {
    throw new Error(`Shopify Admin API error: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as ShopifyCustomerSearchResponse;
  return json.customers?.[0] ?? null;
}

/**
 * Create a new customer in Shopify from a newsletter signup.
 * If the customer already exists, updates their tags to include 'newsletter'.
 *
 * Uses email_marketing_consent to mark them as subscribed.
 */
export async function createNewsletterCustomer(email: string): Promise<{
  success: boolean;
  isNew: boolean;
  customerId?: number;
  error?: string;
}> {
  try {
    // Check if customer already exists
    const existing = await findCustomerByEmail(email);

    if (existing) {
      // Customer exists — ensure they have the newsletter tag
      const currentTags = existing.tags ? existing.tags.split(", ") : [];
      if (!currentTags.includes("newsletter")) {
        currentTags.push("newsletter");
        await updateCustomerTags(existing.id, currentTags.join(", "));
      }
      return { success: true, isNew: false, customerId: existing.id };
    }

    // Create new customer
    const token = await getAdminToken();
    const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers.json`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({
        customer: {
          email,
          tags: "newsletter",
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

    if (!response.ok) {
      const errorBody = (await response.json()) as ShopifyError;
      const errorMsg =
        typeof errorBody.errors === "string"
          ? errorBody.errors
          : Object.entries(errorBody.errors)
              .map(([field, msgs]) => `${field}: ${msgs.join(", ")}`)
              .join("; ");

      // If the error is "email has already been taken", treat as existing
      if (errorMsg.includes("has already been taken")) {
        return { success: true, isNew: false };
      }

      return { success: false, isNew: false, error: errorMsg };
    }

    const json = (await response.json()) as ShopifyCustomerResponse;
    return { success: true, isNew: true, customerId: json.customer.id };
  } catch (err) {
    return {
      success: false,
      isNew: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Update a customer's tags
 */
async function updateCustomerTags(customerId: number, tags: string): Promise<void> {
  const token = await getAdminToken();
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers/${customerId}.json`;

  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    body: JSON.stringify({
      customer: { id: customerId, tags },
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update customer tags: ${response.status}`);
  }
}
