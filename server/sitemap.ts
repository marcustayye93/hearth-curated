import { Express } from "express";
import { PRODUCTS } from "../client/src/lib/products";

const BASE_URL = "https://www.hearthcurated.com";

// Static pages with their priorities and change frequencies
const STATIC_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/shop", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.5", changefreq: "monthly" },
  { path: "/shipping-returns", priority: "0.3", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.2", changefreq: "yearly" },
  { path: "/refund-policy", priority: "0.2", changefreq: "yearly" },
];

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Static pages
  for (const page of STATIC_PAGES) {
    xml += `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }

  // Collection pages
  const collectionSlugs = ["feast", "adorn", "bloom", "glow", "dwell"];
  for (const slug of collectionSlugs) {
    xml += `  <url>
    <loc>${BASE_URL}/collections/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  // Product pages (only available products)
  for (const product of PRODUCTS) {
    if (!product.available) continue;
    xml += `  <url>
    <loc>${BASE_URL}/products/${product.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  xml += `</urlset>`;
  return xml;
}

export function registerSitemapRoute(app: Express) {
  app.get("/sitemap.xml", (_req, res) => {
    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=3600"); // Cache for 1 hour
    res.send(generateSitemap());
  });
}
