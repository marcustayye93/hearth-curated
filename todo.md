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

## Bug Fixes
- [x] Fix Shopify checkout 404 — rewrite checkout URL from hearthcurated.com to csjqgg-7e.myshopify.com (domain conflict: hearthcurated.com points to Manus site, not Shopify)

## Welcome Email & Bug Fix (March 28, 2026)
- [x] Fix double thank-you message — shared subscription state between popup and footer via sessionStorage + custom event
- [x] Set up welcome flow: created WELCOME10 discount code in Shopify (10% off, once per customer), shown in popup + footer thank-you messages, owner notification on each signup

## Price Sync
- [x] Sync CRO-optimized prices to Shopify Admin API: 144 variants updated successfully, 8 skipped (products deleted from Shopify: dried-cotton-stem, compartment-meal-container, cherry-stone-fruit-pitter, airtight-pantry-container, rapid-defrosting-board, glass-propagation-vases, faux-fiddle-leaf-fig, faux-daisy-arrangement)

## Re-add Deleted Products to Shopify (March 28, 2026)
- [x] Created 8 deleted products in Shopify via Admin API (all 8 created successfully)
- [x] Updated shopifyMap.ts with new Shopify variant IDs for all 8 products
- [x] CRO-optimized prices set during product creation (no separate sync needed)
- [x] All 40 tests passing, dev server healthy

## Image Audit (March 28, 2026)
- [ ] Compare all AI-generated product images against original Shopify photos
- [ ] Identify products where generated image has lost likeness to original
- [ ] Compile report with findings

## Image Regeneration (March 28, 2026)
- [ ] Document key characteristics of 15 original Shopify products (13 POOR + 2 MODERATE)
- [ ] Regenerate product images with brand guidelines matching original product features
- [ ] Create side-by-side comparisons for user review
- [ ] Replace approved images on the site

## Image Fixes & Dimension Photos (March 28, 2026)
- [x] Regenerate Ceramic Scented Candle to better match original
- [x] Regenerate Faux Olive Branch with longer stem
- [x] Identify all products with dimensions listed (15 products)
- [x] Generate dimension photos for 15 products with dimensions
- [x] Replace updated images on the site
- [x] Add dimension photos as additional product images
- [x] Build image gallery with thumbnail navigation on Product page

## New Product Expansion — CJ Dropshipping (March 28, 2026)
- [x] Add new product: Japanese Matcha Ceremony Set (6-piece)
- [x] Add new product: Bamboo Matcha Whisk (Chasen)
- [x] Add new product: Ceramic Matcha Bowl (Chawan)
- [x] Add new product: Handmade Stoneware Espresso Cup
- [x] Add new product: Vintage Stoneware Coffee Mug
- [x] Add new product: Round Acacia Serving Plate — 20cm
- [x] Add new product: Round Acacia Serving Plate — 25cm
- [x] Add new product: Acacia Wood Snack Board with Compartments
- [x] Generate product images for all 8 new products
- [x] Write product descriptions and copy for all 8 new products
- [x] Add all 8 products to products.ts with pricing and collection assignment
- [x] Add null entries to shopifyMap.ts (CJ Dropshipping not yet connected)
- [x] Verify all 8 products display correctly on GATHER collection page (21 objects)
- [x] Verify product detail pages render correctly with images, descriptions, and cross-sells

## New AutoDS Products — CJ Dropshipping (March 28, 2026)
- [x] Add new product: Kitchen Natural Wooden Bowl (Fruit/Salad Bowl)
- [x] Add new product: Household Dinner Exquisite Snack Kimchi Serving Dishes (Ceramic Plates)
- [x] Add new product: Retro Bowls and Plates (Ceramic)
- [x] Add new product: Matcha Bowl Japanese Matcha Tea Set Matcha Brush
- [x] Add new product: Nordic Chunky Knit Throw Blanket (Waffle Embossed)
- [x] Generate AI product images for all 5 new products
- [x] Write editorial product descriptions for all 5 new products
- [x] Upload images to CDN
- [x] Add all 5 products to products.ts with pricing and collection assignment
- [x] Add entries to shopifyMap.ts
- [x] Verify products display correctly on collection pages (TypeScript compiles, 40 tests pass)
- [x] Run tests and save checkpoint (40/40 tests passing)
