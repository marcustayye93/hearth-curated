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
- [ ] Add SEO meta tags for product/collection pages
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
