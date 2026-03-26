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
