# Shopify Integration — Hearth Curated

## Phase 1: Credentials & Planning
- [ ] Get Shopify store domain from user
- [ ] Get Shopify Storefront API access token from user
- [ ] Confirm product/collection structure in Shopify

## Phase 2: Upgrade & Backend
- [ ] Upgrade project to web-db-user
- [ ] Add backend proxy route for Shopify Storefront API
- [ ] Store Shopify credentials as secrets

## Phase 3: Storefront API Integration
- [ ] Build GraphQL queries for products, collections, cart
- [ ] Create Shopify API client utility
- [ ] Add product fetching endpoints

## Phase 4: Frontend Data Migration
- [ ] Replace static products.ts with live Shopify data
- [ ] Update Home, Collection, Product pages to use API
- [ ] Handle loading/error states

## Phase 5: Cart & Checkout
- [ ] Implement cart context (add, remove, update quantity)
- [ ] Build cart drawer/sidebar UI
- [ ] Add item count badge to nav cart icon
- [ ] Wire checkout button to Shopify checkout URL
- [ ] Add "You may also like" recommendations

## Phase 6: Testing & Delivery
- [ ] Test full flow: browse → add to cart → checkout
- [ ] Save checkpoint and publish
