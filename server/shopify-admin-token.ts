/**
 * Shopify Admin API Token Manager
 * Automatically refreshes the Admin API access token using client credentials.
 * Tokens expire every 24 hours, so we refresh proactively with a buffer.
 */

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN ?? "";
const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID ?? "";
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET ?? "";

// Buffer: refresh 1 hour before expiry
const REFRESH_BUFFER_MS = 60 * 60 * 1000;

let cachedToken: string = process.env.SHOPIFY_ADMIN_TOKEN ?? "";
let tokenExpiresAt: number = 0; // 0 means unknown — will refresh on first use

interface TokenResponse {
  access_token: string;
  scope: string;
  expires_in: number;
}

/**
 * Fetch a fresh Admin API token using client credentials grant.
 */
async function refreshToken(): Promise<string> {
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

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to refresh Shopify Admin token: ${response.status} ${text}`);
  }

  const data = (await response.json()) as TokenResponse;
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000 - REFRESH_BUFFER_MS;

  // Also update the process env so other modules pick it up
  process.env.SHOPIFY_ADMIN_TOKEN = cachedToken;

  console.log(
    `[Shopify] Admin token refreshed, expires in ${Math.round(data.expires_in / 3600)}h, scopes: ${data.scope}`
  );

  return cachedToken;
}

/**
 * Get a valid Admin API token. Refreshes automatically if expired or about to expire.
 */
export async function getAdminToken(): Promise<string> {
  // If we have client credentials, manage token lifecycle
  if (SHOPIFY_CLIENT_ID && SHOPIFY_CLIENT_SECRET) {
    const needsRefresh = !cachedToken || !tokenExpiresAt || Date.now() >= tokenExpiresAt;
    if (needsRefresh) {
      return refreshToken();
    }
  }

  return cachedToken;
}
