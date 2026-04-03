# Hearth Curated — TODO

> Last cleaned: Apr 3, 2026

---

## Standing Principles

- PRIORITISE 100% IMAGE LIKENESS TO THE ORIGINAL PRODUCT. AI-generated editorial images must match the actual CJ product the customer receives. Always use original CJ/supplier product photos as references when generating images.
- Every AI image MUST use the actual CJ/supplier product photo as a reference image. Prompts must describe exact materials, shapes, handle styles, glaze finishes, number of pieces, dimensions.
- Present images in small batches for user QC before committing. Flag any products where AI likeness is insufficient.
- Always challenge user assumptions where appropriate — push back with reasoning when something doesn't add up.

---

## Truly Remaining Tasks

### Shopify Inventory (Requires User Action)
- [ ] Fix Brass Wall Hooks (adorn-15) — Shopify inventory needs to be set (all variants currently unavailable)
- [ ] Fix Ceramic Pour-Over Dripper (nourish-17) — Shopify inventory needs to be set (all variants currently unavailable)
- [ ] Import Shopify price sync CSV via Shopify Admin → Products → Import (CSV was generated Mar 27)

### Shopify Product Mapping (Requires User Input)
- [ ] User to provide correct Shopify listings for: Artisan Table Lamp, Edison Vintage Night Lamp, Wax Melt Aromatherapy Lamp, Motion-Sensing Cabinet Light (do NOT delete — user will supply correct mappings later)
- [ ] Investigate missing Artisan Table Lamp and Japanese Bedside Lamp Shopify listings
- [ ] Confirm gold figurine product — is it a decorative figurine or half-body planter pot?

### Shopify Storefront Name Sync
- [ ] Fetch all product names from Shopify Storefront API
- [ ] Map each Shopify storefront name to the corresponding product in products.ts
- [ ] Rename all 82 products to match exact Shopify storefront names
- [ ] Update shopifyMap.ts product names to match storefront names
- [ ] Verify slugs still work after renaming

### CRO Pricing v2 (Pending User Review)
- [ ] Adjust prices where inconsistencies are found (CRO Pricing Audit v2 report was delivered Mar 30)
- [ ] Update products.ts with corrected prices after user approval

### User-Reported Product Fixes (Mar 30 — Partially Addressed)
- [ ] Teak Kitchen Utensil Set: photos/prices don't change across variants, some variant names in Chinese
- [ ] Japanese Ceramic Spoon Set: remap to correct Shopify product (15738951565393)
- [ ] Japanese Matcha Ceremony Set: brown and green 7-piece sets highlight simultaneously
- [ ] Stoneware Travel Tea Set: picture doesn't update when variants selected
- [ ] Black Walnut Serving Tray: variant names misleading (transparent, blue, blue plate)
- [ ] Japanese Irregular Dinner Plate: pictures don't update; all variant prices same
- [ ] Acacia Serving Bowl: verify colour matches Shopify photo
- [ ] Jujube Wood Serving Basin: measurements "16 TO" and "20 TO" unclear
- [ ] Whole Wood Log Snack Plate: entire product rendered wrongly — replace with correct Shopify product data

### Variant Image Fixes
- [ ] Fix acacia magnetic knife block variant images — should be plain natural wood, no prints
- [ ] Fix kungfu tea set variant images — all 3 variants should show same design, different glaze colours only
- [ ] Regenerate 2 remaining duplicate images (rattan serving tray, velvet cushion cover)
- [ ] Generate dimension overlay photos for 21 size-variant products (pending user confirmation on which to prioritize)

### CJ Dropshipping Full Catalog Migration (Superseded by Full Catalog Rebuild — likely stale)
- [ ] Inventory all ~85 new CJ products from user screenshots
- [ ] Map ~27 CJ products to existing catalog entries
- [ ] Identify ~55 genuinely new products needing new photos and descriptions
- [ ] Generate AI product images for new products
- [ ] Write editorial descriptions for new products
- [ ] Rewrite products.ts with full new catalog
- [ ] Update shopifyMap.ts with placeholder entries
- [ ] Run tests and verify site

### Miscellaneous
- [ ] Consider increasing free shipping threshold marginally (currently $70)
- [ ] Resolve 8 shared-source product pairs — all plug-variant lamps: keep plug variants in same listing

---

## Completed (Archive)

### Core Site Build (Mar 2026)
- [x] Homepage, navigation, footer, collection pages, product detail pages
- [x] Cart system with drawer, free shipping bar, cross-sells
- [x] Product page redesign (above-fold CTA, variant selectors, trust signals)
- [x] Collection page redesign (hook lines, quick add)
- [x] Email capture popup with WELCOME10 discount code
- [x] About page (editorial brand story, rewritten to remove fictional narrative)
- [x] Shipping & Returns page with FAQ accordion
- [x] Privacy Policy, Terms of Service, Refund Policy pages
- [x] Mobile responsiveness optimization (all pages audited and fixed)
- [x] Upgrade project to full-stack (web-db-user)

### Shopify Integration (Mar 2026)
- [x] Shopify Storefront API integration (products, collections, cart, checkout)
- [x] CartContext with Shopify-backed cart (create, add, update, remove, checkout)
- [x] shopifyMap.ts with variant GIDs for all products
- [x] Real Shopify checkout redirect via checkoutUrl
- [x] Inventory awareness via Storefront API (quantityAvailable, low stock indicator)
- [x] Fix Shopify checkout 404 (domain conflict resolution)
- [x] Welcome email flow with WELCOME10 discount
- [x] Price sync to Shopify Admin API (144 variants + 7 threshold closers)
- [x] Re-add 8 deleted products to Shopify
- [x] Restore 4 incorrectly-deleted Shopify mappings
- [x] Full variant sync from Shopify (93 products, 318 variants)

### SEO & Technical (Mar 2026)
- [x] SEO meta tags for all pages (Home, Collection, Product, About, Shipping, Legal)
- [x] robots.txt and dynamic sitemap.xml
- [x] Collection page structured data (JSON-LD CollectionPage + ItemList)
- [x] UTM parameter tracking (capture, persist, pass to checkout)
- [x] Canonical URLs on all pages
- [x] Multi-currency selector (USD, SGD, EUR, GBP, AUD, JPY, CAD)
- [x] Search functionality (SearchDialog with Cmd+K shortcut)

### Product Catalog (Mar-Apr 2026)
- [x] Full catalog rebuild — CJ migration (82 products, 5 collections: FEAST, ADORN, BLOOM, GLOW, DWELL)
- [x] 14 new products added (Mar 27)
- [x] 8 new CJ products added (Mar 28)
- [x] 5 new AutoDS products added (Mar 28)
- [x] 7 threshold closer products added (Mar 31)
- [x] Product description audit — 59 products enriched from Shopify source data
- [x] "What's in the Box" section added to all 82 products
- [x] Dried Xinjiang Lavender variant comparison table
- [x] Cotton Lavender Sachet cross-sell with Dried Xinjiang Lavender
- [x] Sold out product styling (diagonal ribbon, greyed-out thumbnails)

### Pricing & CRO (Mar 2026)
- [x] CRO-driven pricing strategy (Gateway/Hero/Workhorse/Anchor roles)
- [x] CRO pricing applied to all 82 products
- [x] Free shipping threshold updated ($75 → $60 → $70)
- [x] Shipping policy redesign (2-tier: Asia-Pacific / International)
- [x] Competitive repricing round 2 (user-approved lamp + acacia adjustments)
- [x] Variant pricing differentiation (size-based, bundle-based)

### E-Commerce Audit Fixes (Mar 31)
- [x] 6 unpurchasable products set to available=false
- [x] Missing shopifyVariantIds added
- [x] JSON-LD priceCurrency fixed (USD → SGD)
- [x] Cart drawer shows variant image
- [x] Variant state reset on cross-sell navigation
- [x] Quick Add for multi-variant products (navigates to PDP)
- [x] Sorting on Collection and Shop All pages
- [x] CrossSells rebuilt (70 old ID refs → slugs)
- [x] Mushroom Night Light 2-tier variant selection
- [x] Pampas Grass Bouquet consolidated (24 variants from Shopify)
- [x] Mug variant alignment (Vintage Japanese + Japanese Stoneware)

### Image Work (Mar-Apr 2026)
- [x] Performance optimization — all images via CloudFront CDN, WebP compressed, lazy loading
- [x] Custom product images for all products (multiple regeneration rounds)
- [x] 49 Shopify stock photos regenerated in editorial AI style (Mar 31)
- [x] Full catalog audit — 69 products audited (Apr 2)
- [x] 8 critical mismatches fixed (wrong product type)
- [x] 38 major mismatches fixed (wrong color/shape/pattern)
- [x] 9 minor mismatches fixed
- [x] 45 products re-regenerated with Shopify reference photos (v3)
- [x] Priority variant image refresh — 115 unique color variant images generated
- [x] Full visual audit v3 vs Shopify originals — 30 failures regenerated to v4
- [x] Final v5 fix for retro-reactive-glaze-dinnerware
- [x] Variant image switching implemented on Product detail page
- [x] 132 Shopify variant images injected into 19 products
- [x] 10 dimension overlay images created for size-variant products
- [x] Magnetic Levitating Planter image corrected (volcanic rock resin base)
- [x] Dried Lavender Bundle variant images corrected
- [x] Acacia Magnetic Knife Block editorial AI images
- [x] Sakura Dish image sourced from CJ Dropshipping

### Deletions & Unlisting (Mar 2026)
- [x] Rattan Floor Lamp deleted (CJ shipping too expensive)
- [x] Rice Paper Table Lamp deleted (CJ shipping too expensive)
- [x] Acacia Round Dish Set deleted (same CJ source as Serving Tray, negative margin)
- [x] Borosilicate Glass Canister deleted
- [x] Sculptural Glass Vase deleted (user deleted from Shopify)
- [x] Minimalist Ceramic Vase deleted
- [x] Acacia Serving Tray unlisted (shows different brand name)
- [x] Artisan Table Lamp removed from catalog
- [x] Newsletter signup removed from footer

### Bug Fixes (Mar-Apr 2026)
- [x] Scroll-to-top on collection navigation
- [x] Double thank-you message (shared subscription state)
- [x] Fix unmapped product Shopify handles (15 products)
- [x] Ceramic Butter Dish Shopify link verified
