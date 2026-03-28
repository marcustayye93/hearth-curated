# Hearth Curated — TODO

## Completed
- [x] Basic homepage layout
- [x] Navigation menu
- [x] Collection pages (GATHER, ADORN, BLOOM, NOURISH)
- [x] Product detail pages (34 products with full copy)
- [x] Footer (4-column layout)
- [x] CRO audit — rewrite all product names, descriptions, prices
- [x] Cart system with drawer, free shipping bar, cross-sells
- [x] Product page redesign (above-fold CTA, variant selectors, trust signals)
- [x] Collection page redesign (hook lines, quick add)
- [x] Email capture popup
- [x] Custom product images for all 35 available products
- [x] About page (editorial brand story)
- [x] Shipping & Returns page with FAQ accordion
- [x] Upgrade project to full-stack (web-db-user)

## Shopify Storefront API Integration
- [x] Fix Home.tsx TypeScript error from template merge
- [x] Add Shopify secrets (store domain, storefront access token)
- [x] Build backend Shopify proxy API routes (products, collections, cart, checkout)
- [x] Build CartContext with Shopify-backed cart (create, add, update, remove, checkout)
- [x] Map static product slugs to Shopify variant GIDs (shopifyMap.ts)
- [x] Enrich static products with Shopify variant IDs for cart operations
- [x] CartDrawer shows editorial names/images via reverse handle lookup
- [x] Home, Collection, Product pages use getShopifyVariantGid for addItem
- [x] Cross-sell recommendations in cart drawer with Shopify add-to-cart
- [x] Real Shopify checkout redirect via checkoutUrl
- [x] Loading states in cart operations (spinner on checkout button)
- [x] Remove quantityAvailable field (token lacks inventory scope)
- [x] Write vitest tests for Shopify integration (10 tests passing)
- [x] Add SEO meta tags for all pages (Home, Collection, Product, About, Shipping)
- [ ] Add inventory awareness once Storefront token gets inventory scope

## Mobile Responsiveness Optimization
- [x] Audit all pages on mobile viewport (Home, Collection, Product, CartDrawer, Nav, Footer, About, Shipping)
- [x] Quick Add buttons visible on touch devices (hc-quick-add class + @media hover:none)
- [x] Hero section responsive (smaller font, bottom gradient for mobile text legibility)
- [x] Brand manifesto & editorial split headings responsive (text-2xl sm:text-3xl)
- [x] Collection hero responsive (shorter minHeight, responsive heading)
- [x] Product page heading responsive + sticky bar spacer + safe-area padding
- [x] Cart quantity buttons enlarged for touch targets (32px → 40px)
- [x] Shipping rates table horizontal scroll on mobile (overflow-x-auto)
- [x] ManusDialog responsive width (max-w-[400px] instead of fixed w-[400px])
- [x] Footer policy links wrap gracefully (flex-wrap)
- [x] EmailCapture form stacks on narrow screens (flex-col sm:flex-row)
- [x] Editorial split images shorter on mobile (minHeight 300px)
- [x] viewport-fit=cover for notched phones
- [x] Global overflow-x: hidden to prevent horizontal scroll
- [x] All 10 tests passing after mobile fixes

## Bug Fixes
- [x] Fix scroll-to-top when navigating between collection pages (Nourish, Bloom, Adorn, Gather)
- [x] Build reusable SEO Head component (title, description, OG, Twitter Card, JSON-LD)
- [x] Add SEO meta tags to Home page
- [x] Add SEO meta tags to Collection pages (dynamic per collection)
- [x] Add SEO meta tags to Product pages (dynamic per product + JSON-LD structured data)
- [x] Add SEO meta tags to About page
- [x] Add SEO meta tags to Shipping & Returns page
- [x] Build UTM parameter tracking utility (capture, persist, pass to checkout)
- [x] Add canonical URLs to all pages
- [x] Add default OG/Twitter meta tags to index.html for crawlers
- [x] UTM params appended to Shopify checkout URL for attribution

## Product Expansion (March 27, 2026)
- [x] Add 14 new products to products.ts (3 GATHER, 3 ADORN, 5 BLOOM, 3 NOURISH)
- [x] Generate editorial product photos for all 14 new products
- [x] Upload product photos to CDN
- [x] Add Shopify variant mappings to shopifyMap.ts for all 14 new products
- [x] Resolve duplicate key conflicts (silence-figurine, acacia-salt-pepper-mill)
- [x] Verify BLOOM collection shows 9 products (4 existing + 5 new)
- [x] Verify GATHER collection shows 13 products (10 existing + 3 new: Linen Napkins, Spoon Rest, Sake Set)
- [x] Verify ADORN collection shows 12 products (10 existing + Cushion Cover, Silence Figurine; Wall Hooks unavailable in Shopify)
- [x] Verify NOURISH collection shows 13 products (11 existing + Linen Apron, Salt & Pepper Mill; Pour-Over Dripper unavailable in Shopify)
- [x] Write vitest tests for new product entries (13 tests passing)
- [x] Set old nourish-14 (acacia-salt-pepper-mill-v1) to unavailable (replaced by new import)
- [ ] Fix Brass Wall Hooks (adorn-15) — Shopify inventory needs to be set (all variants unavailable)
- [ ] Fix Ceramic Pour-Over Dripper (nourish-17) — Shopify inventory needs to be set (all variants unavailable)

## Pricing Audit (March 27, 2026)
- [x] Audit all 14 new product prices — check if AliExpress "welcome offer" prices were used instead of regular prices
- [x] Compare catalog prices vs Shopify prices vs actual AliExpress regular prices
- [x] Recalculate retail prices based on corrected COGS if needed
- [x] Design CRO-driven pricing strategy with 4 product roles (Gateway, Hero, Workhorse, Anchor)

## CRO Pricing Implementation (March 27, 2026)
- [x] Apply CRO-driven pricing to all 52 products in products.ts
- [x] Unlist Microwave Steamer Cover (already set available: false)
- [x] Update free shipping threshold from $75 to $60 SGD in products.ts
- [x] Update free shipping threshold in CartContext.tsx
- [x] Update free shipping threshold in Nav.tsx, Product.tsx, Home.tsx, ShippingReturns.tsx
- [x] Fix variant pricing outliers (Acacia Bowl, Magnetic Spice Tins, Brass Hooks, etc.)
- [x] Run tests and verify all changes (35/35 passed)

## Shipping Policy Redesign (March 27, 2026)
- [x] Update Nav.tsx announcement bar to "Complimentary worldwide shipping on orders over $60"
- [x] Update Product.tsx trust signals to "Free worldwide shipping over $60"
- [x] Rewrite ShippingReturns.tsx — remove 4-zone table, replace with 2-tier (Asia-Pacific / International), honest delivery times, remove express
- [x] Update Home.tsx SEO description
- [x] Update FAQs — honest delivery times, remove express shipping references, update return policy
- [x] Run tests and verify (35/35 passed)

## Legal Pages (March 27, 2026)
- [x] Create Privacy Policy page (/privacy-policy) — GDPR, CCPA, PDPA compliant
- [x] Create Terms of Service page (/terms-of-service) — e-commerce worldwide standard
- [x] Create Refund Policy page (/refund-policy) — aligned with actual shipping/returns policy
- [x] Register all three routes in App.tsx
- [x] Update Footer.tsx — replaced all placeholder # links with real routes
- [x] Removed placeholder links: Order Tracking, Sustainability, Press, Careers
- [x] Added SEOHead to all three pages via LegalPageLayout component
- [x] Verify TypeScript compiles and tests pass (35/35)

## About Page Rewrite (March 27, 2026)
- [x] Rewrite About page — removed fictional artisan sourcing narrative
- [x] Focus on real curation process: searching, comparing, reviewing, testing
- [x] Maintained editorial design quality and Aesop/Kinfolk aesthetic
- [x] Kept all existing images and layout structure
- [x] Updated hero headline, origin story, three principles, curation process, and promise sections
- [x] All 35 tests passing

## Shopify Price Sync (March 27, 2026)
- [x] Attempted Admin API sync — token lacks read_products/write_products scopes
- [x] Generated Shopify-compatible CSV for bulk import (54 products, 157 variant rows)
- [ ] User to import CSV via Shopify Admin → Products → Import

## UI Updates (March 27, 2026)
- [x] Change 'The Problem' to 'The Mission' on About page
- [x] Fix 'View All Objects' button — now links to /shop (Shop All page)
- [x] Add 'Shop All' to main navigation menu and side/mobile menu

## Email & Branding Updates (March 27, 2026)
- [x] Connect email capture (footer + popup) to Shopify Customers API
- [x] Design custom HC logo for Hearth Curated
- [x] Set HC logo as browser favicon/thumbnail

## Performance Optimization (March 28, 2026)
- [x] Audit all image URLs and sizes (CDN originals vs compressed)
- [x] Switch all 57 images to compressed WebP (total: 3.8MB vs ~300MB before = 99% reduction)
- [x] Add lazy loading (loading="lazy") to all below-fold images
- [x] Add width/height attributes to prevent layout shift
- [x] Resized product images to 800px, hero/collection to 1600px (from 2048px originals)
- [x] Reduce hero image size (113KB → 54KB WebP)
- [x] Added fetchPriority="high" to hero images, decoding="async" to all images
- [x] aspectRatio containers prevent layout shift while images load
