import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/collections/feast"
  ogType?: "website" | "product" | "article";
  ogImage?: string;
  ogImageAlt?: string;
  productPrice?: number;
  productCurrency?: string;
  productAvailability?: "in stock" | "out of stock";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "Hearth Curated";
const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/hero-banner-v2-WGnoQge2ivaCcYKVnDSYX9.webp";

function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://www.hearthcurated.com";
}

/**
 * SEOHead — sets <title>, meta description, Open Graph, Twitter Card,
 * canonical URL, and optional product structured data via meta tags.
 *
 * Uses useEffect to manipulate document.head directly since we're in a SPA.
 */
export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogType = "website",
  ogImage,
  ogImageAlt,
  productPrice,
  productCurrency = "SGD",
  productAvailability,
  noIndex = false,
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    const baseUrl = getBaseUrl();
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonicalPath
      ? `${baseUrl}${canonicalPath}`
      : baseUrl + window.location.pathname;
    const image = ogImage || DEFAULT_OG_IMAGE;
    const imageAlt = ogImageAlt || title;

    // Title
    document.title = fullTitle;

    // Helper to set or create a meta tag
    const setMeta = (
      attr: "name" | "property",
      key: string,
      content: string
    ) => {
      let el = document.querySelector(
        `meta[${attr}="${key}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set or create a link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Basic meta
    setMeta("name", "description", description);

    // Canonical
    setLink("canonical", canonicalUrl);

    // Robots
    if (noIndex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      // Remove noindex if previously set
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", imageAlt);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_SG");

    // Product-specific OG tags
    if (ogType === "product" && productPrice !== undefined) {
      setMeta("property", "product:price:amount", productPrice.toFixed(2));
      setMeta("property", "product:price:currency", productCurrency);
      if (productAvailability) {
        setMeta("property", "product:availability", productAvailability);
      }
    }

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", imageAlt);

    // Cleanup: remove product tags if not a product page
    if (ogType !== "product") {
      [
        'meta[property="product:price:amount"]',
        'meta[property="product:price:currency"]',
        'meta[property="product:availability"]',
      ].forEach((sel) => {
        const el = document.querySelector(sel);
        if (el) el.remove();
      });
    }

    // JSON-LD structured data
    const jsonLdId = "seo-json-ld";
    let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = jsonLdId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [
    title,
    description,
    canonicalPath,
    ogType,
    ogImage,
    ogImageAlt,
    productPrice,
    productCurrency,
    productAvailability,
    noIndex,
    jsonLd,
  ]);

  return null;
}
