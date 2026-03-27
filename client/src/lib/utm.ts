/**
 * UTM Parameter Tracking
 *
 * Captures UTM parameters from the URL on first visit, persists them in
 * sessionStorage, and provides helpers to:
 * - Read current UTM params
 * - Append UTM params to outbound links (e.g. Shopify checkout)
 * - Generate UTM-tagged URLs for sharing/campaigns
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_KEYS: (keyof UTMParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const STORAGE_KEY = "hc_utm_params";
const LANDING_PAGE_KEY = "hc_landing_page";
const REFERRER_KEY = "hc_referrer";

/**
 * Capture UTM parameters from the current URL and store them in sessionStorage.
 * Only captures on the first page load that contains UTM params — subsequent
 * navigations within the session preserve the original attribution.
 */
export function captureUTMParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmFromUrl: UTMParams = {};
  let hasUtm = false;

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      utmFromUrl[key] = value;
      hasUtm = true;
    }
  }

  // Only overwrite stored UTM if the current URL has UTM params
  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmFromUrl));
  }

  // Always capture landing page and referrer on first visit
  if (!sessionStorage.getItem(LANDING_PAGE_KEY)) {
    sessionStorage.setItem(LANDING_PAGE_KEY, window.location.pathname);
  }
  if (!sessionStorage.getItem(REFERRER_KEY)) {
    sessionStorage.setItem(REFERRER_KEY, document.referrer || "direct");
  }
}

/**
 * Get stored UTM parameters from sessionStorage.
 */
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Get the landing page path from sessionStorage.
 */
export function getLandingPage(): string {
  if (typeof window === "undefined") return "/";
  return sessionStorage.getItem(LANDING_PAGE_KEY) || "/";
}

/**
 * Get the referrer from sessionStorage.
 */
export function getReferrer(): string {
  if (typeof window === "undefined") return "direct";
  return sessionStorage.getItem(REFERRER_KEY) || "direct";
}

/**
 * Append stored UTM parameters to a URL (e.g. Shopify checkout URL).
 * This ensures attribution is preserved through the checkout flow.
 */
export function appendUTMToUrl(url: string): string {
  const utm = getUTMParams();
  const hasParams = Object.values(utm).some(Boolean);
  if (!hasParams) return url;

  try {
    const urlObj = new URL(url);
    for (const [key, value] of Object.entries(utm)) {
      if (value) {
        urlObj.searchParams.set(key, value);
      }
    }
    return urlObj.toString();
  } catch {
    // If URL parsing fails, return original
    return url;
  }
}

/**
 * Generate a UTM-tagged URL for campaigns/sharing.
 */
export function buildUTMUrl(
  path: string,
  params: UTMParams
): string {
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.hearthcurated.com";

  const url = new URL(path, baseUrl);
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url.searchParams.set(key, value);
    }
  }
  return url.toString();
}

/**
 * Get a summary of the current session's attribution data.
 * Useful for passing to analytics or backend.
 */
export function getAttributionData() {
  return {
    utm: getUTMParams(),
    landingPage: getLandingPage(),
    referrer: getReferrer(),
  };
}
