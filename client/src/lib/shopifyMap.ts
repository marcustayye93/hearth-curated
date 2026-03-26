// AUTO-GENERATED: Maps static product slugs to Shopify product/variant GIDs
// This allows the static editorial catalog to add items to a real Shopify cart.

export interface ShopifyVariantInfo {
  id: string; // Shopify variant GID
  title: string;
  price: number;
  available: boolean;
}

export interface ShopifyProductInfo {
  handle: string;
  shopifyId: string;
  variants: ShopifyVariantInfo[];
}

// slug → Shopify product info (null = not in Shopify)
export const shopifyMap: Record<string, ShopifyProductInfo | null> = {
  "moroccan-mandorla-coaster-set": {
    handle: "8pcs-moroccan-mandorla-2d-wooden-coasters-set-artistic-circular-beverage-markers-for-coffee-tea-home-dining-table-decoration",
    shopifyId: "gid://shopify/Product/15733069480017",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890224721", title: "8Pcs / 10Cm / Round", price: 13.61, available: true },
    ],
  },
  "acacia-serving-bowl": {
    handle: "acacia-wooden-bowl-japanese-style-wooden-tableware-household-and-basin-fruit-plate-salad-bowl-whole-wooden-soup-bowl-wooden-bowl",
    shopifyId: "gid://shopify/Product/15734963699793",
    variants: [
      { id: "gid://shopify/ProductVariant/59241557721169", title: "12X6Cm", price: 20.5, available: true },
      { id: "gid://shopify/ProductVariant/59241557753937", title: "16X7.5Cm", price: 32.31, available: true },
      { id: "gid://shopify/ProductVariant/59241557786705", title: "18X7.5Cm", price: 40.27, available: true },
      { id: "gid://shopify/ProductVariant/59241557819473", title: "20X7.5Cm", price: 43.79, available: true },
      { id: "gid://shopify/ProductVariant/59241557852241", title: "24X8Cm", price: 61.69, available: true },
      { id: "gid://shopify/ProductVariant/59241557885009", title: "14X7.5Cm", price: 27, available: true },
    ],
  },
  "acacia-wooden-utensil-set": {
    handle: "best-wooden-spoons-for-cooking-acacia-wooden-kitchen-utensils-set-smooth-non-toxic-wood-cooking-spatula-turner-serving-spoon",
    shopifyId: "gid://shopify/Product/15734964060241",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559261265", title: "5 Pieces", price: 34.23, available: true },
      { id: "gid://shopify/ProductVariant/59241559294033", title: "7 Pieces", price: 38.43, available: true },
      { id: "gid://shopify/ProductVariant/59241559326801", title: "6 Pieces", price: 35.55, available: true },
      { id: "gid://shopify/ProductVariant/59241559359569", title: "10 Pieces", price: 57.34, available: true },
      { id: "gid://shopify/ProductVariant/59241559392337", title: "9 Pieces", price: 55.49, available: true },
    ],
  },
  "hand-painted-ceramic-oil-cruet": {
    handle: "hand-painted-ceramic-oil-bottle-kitchen-storage-nordic-vinegar-oil-dispenser-cooking-utensil-for-home-use-kitchen-seasoning-jar",
    shopifyId: "gid://shopify/Product/15734964027473",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559162961", title: "Black", price: 37.36, available: true },
      { id: "gid://shopify/ProductVariant/59241559195729", title: "Green", price: 37.36, available: true },
      { id: "gid://shopify/ProductVariant/59241559228497", title: "Red", price: 37.36, available: true },
    ],
  },
  "teak-carving-board": {
    handle: "large-size-high-quality-teak-wood-cutting-board-16-5-11-8-inch-13-3-9-5-inch-1-inch-thick-suitable-for-christmas-halloween",
    shopifyId: "gid://shopify/Product/15733069774929",
    variants: [
      { id: "gid://shopify/ProductVariant/59232891043921", title: "S", price: 75.51, available: true },
      { id: "gid://shopify/ProductVariant/59232891076689", title: "L", price: 93.48, available: true },
    ],
  },
  "stainless-steel-chopping-board": {
    handle: "1pcs-stainless-steel-cutting-board-double-sided-chopping-board-for-kitchen-scratch-resistant-anti-slip-silicone-edges",
    shopifyId: "gid://shopify/Product/15733069709393",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890847313", title: "1Pcs", price: 38.65, available: true },
      { id: "gid://shopify/ProductVariant/59232890880081", title: "1Pcs Thicken", price: 60.27, available: true },
    ],
  },
  "acacia-salt-pepper-mill": {
    handle: "salt-and-pepper-grinder-acacia-wooden-spice-pepper-mill-with-strong-adjustable-ceramic-grinder-kitchen-cooking-tools",
    shopifyId: "gid://shopify/Product/15734963994705",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559031889", title: "Wooden Base 1Pcs", price: 10.62, available: true },
      { id: "gid://shopify/ProductVariant/59241559064657", title: "8 Inch 1Pcs", price: 21.99, available: true },
      { id: "gid://shopify/ProductVariant/59241559097425", title: "10 Inch 1Pcs", price: 24.47, available: true },
      { id: "gid://shopify/ProductVariant/59241559130193", title: "6 Inch 1Pcs", price: 18.03, available: true },
    ],
  },
  "kitchen-shears-magnetic-case": {
    handle: "stainless-steel-kitchen-scissors-powerful-multifunctional-household-scissors-for-meat-poultry-free-magnetic-scissors-cover",
    shopifyId: "gid://shopify/Product/15733069217873",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889438289", title: "Kitchen Shears", price: 24.09, available: true },
    ],
  },
  "cherry-stone-fruit-pitter": {
    handle: "joie-cherry-pitter-fruit-corer-kitchen-tools-cooking-tools-fruit-core-remove-tool-kitchen-gadget",
    shopifyId: "gid://shopify/Product/15733069545553",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890257489", title: "Cherry Pitter", price: 35.35, available: true },
    ],
  },
  "multi-function-grater": {
    handle: "grater-for-vegetables-vegetable-and-fruit-peeling-knife-kitchen-gadgets-multifunction-stainless-steel-peeler-tools-household-use",
    shopifyId: "gid://shopify/Product/15733069447249",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890093649", title: "Style B 1Pc", price: 7, available: false },
      { id: "gid://shopify/ProductVariant/59232890126417", title: "Mix 2Pcs", price: 10.27, available: false },
      { id: "gid://shopify/ProductVariant/59232890159185", title: "Style A 1Pc", price: 7.05, available: false },
    ],
  },
  "stainless-steel-peeler": {
    handle: "stainless-steel-peeling-knife-peeling-artifact-household-fruit-peeler-potato-apple-peeler-kitchen-vegetable-tool",
    shopifyId: "gid://shopify/Product/15733069414481",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890028113", title: "B", price: 9.18, available: false },
      { id: "gid://shopify/ProductVariant/59232890060881", title: "A", price: 7.63, available: false },
    ],
  },
  "microwave-steamer-cover": {
    handle: "uforu-microwave-splatter-cover-with-water-steamer-10-inch-clear-microwave-plate-cover-lid-for-food-kitchen-gadgets-accessories-for-microwave-oven-kitchenware-utensils",
    shopifyId: "gid://shopify/Product/15733069742161",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890912849", title: "Green-Round", price: 24.35, available: false },
      { id: "gid://shopify/ProductVariant/59232890945617", title: "Gray-Round", price: 24.35, available: false },
      { id: "gid://shopify/ProductVariant/59232890978385", title: "Green-Rhombus", price: 24.35, available: false },
      { id: "gid://shopify/ProductVariant/59232891011153", title: "Gray-Rhombus", price: 24.35, available: false },
    ],
  },
  "rapid-defrosting-board": {
    handle: "defrosting-tray-fast-defrost-tray-thaw-tray-metal-aluminum-fast-food-meat-defrosting-thawing-tray-plate-home-kitchen-gadget",
    shopifyId: "gid://shopify/Product/15733069840465",
    variants: [
      { id: "gid://shopify/ProductVariant/59232891109457", title: "1Pcs", price: 13.02, available: true },
    ],
  },
  "electronic-precision-measuring-spoon": null,
  "collapsible-silicone-containers": null,
  "handmade-soy-wax-ceramic-candle": {
    handle: "220g-handmade-soy-wax-pure-white-ceramic-candle-luxury-home-decoration-candle-vela-ceramica-vela-de-aromaterapia-velas-aesthetic",
    shopifyId: "gid://shopify/Product/15734963732561",
    variants: [
      { id: "gid://shopify/ProductVariant/59241557917777", title: "Camellia", price: 45.18, available: true },
      { id: "gid://shopify/ProductVariant/59241557950545", title: "Jade Dragon Tea", price: 45.18, available: true },
      { id: "gid://shopify/ProductVariant/59241557983313", title: "Sandalwood", price: 45.18, available: true },
      { id: "gid://shopify/ProductVariant/59241558016081", title: "Peach", price: 45.18, available: true },
    ],
  },
  "ceramic-incense-holder": {
    handle: "ceramic-incense-burner-for-stick-home-decor-porcelain-incense-holder-ash-catcher-tray-patio-hallway-small-accent-piece",
    shopifyId: "gid://shopify/Product/15734963634257",
    variants: [
      { id: "gid://shopify/ProductVariant/59241557557329", title: "Incense Holder (200003699)", price: 6.21, available: true },
      { id: "gid://shopify/ProductVariant/59241557590097", title: "Incense Holder (193)", price: 6.21, available: true },
      { id: "gid://shopify/ProductVariant/59241557622865", title: "Incense Holder (173)", price: 6.21, available: true },
      { id: "gid://shopify/ProductVariant/59241557655633", title: "Incense Holder (366)", price: 6.21, available: true },
    ],
  },
  "fireplace-aroma-diffuser": {
    handle: "vissko-creative-fireplace-air-humidifier-waterless-auto-off-aroma-essential-oil-diffuser-with-led-light-remote-control-for-gift",
    shopifyId: "gid://shopify/Product/15733069119569",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889045073", title: "Black", price: 42.53, available: true },
      { id: "gid://shopify/ProductVariant/59232889077841", title: "White", price: 42.62, available: true },
    ],
  },
  "nordic-ceramic-vase": {
    handle: "nordic-vases-decorative-tabletop-vases-arrangement-ceramic-vase-for-mantelpiece",
    shopifyId: "gid://shopify/Product/15734963896401",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558736977", title: "10Cmx7Cm", price: 14.24, available: true },
      { id: "gid://shopify/ProductVariant/59241558769745", title: "9Cmx7Cm", price: 17.97, available: true },
      { id: "gid://shopify/ProductVariant/59241558802513", title: "8.3Cmx7.5Cm", price: 17.26, available: true },
    ],
  },
  "moroccan-decorative-wall-plate": {
    handle: "2d-flat-moroccan-style-decorative-plate-aluminum-metal-wall-art-with-exquisite-floral-and-geometric-patterns-vibrant-blue-gre",
    shopifyId: "gid://shopify/Product/15733069381713",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889995345", title: "Round 20X20Cm", price: 9.99, available: true },
    ],
  },
  "silence-figurine": {
    handle: "new-creative-abstract-silence-is-gold-abstract-figurine-resin-hand-face-men-statue-sculpture-home-office-living-room-desk-decor",
    shopifyId: "gid://shopify/Product/15733069283409",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889503825", title: "Gold B", price: 10.57, available: false },
      { id: "gid://shopify/ProductVariant/59232889536593", title: "Sandstone Set", price: 30.02, available: false },
      { id: "gid://shopify/ProductVariant/59232889569361", title: "Gold Set", price: 30.02, available: false },
      { id: "gid://shopify/ProductVariant/59232889602129", title: "Sandstone C", price: 10.57, available: false },
      { id: "gid://shopify/ProductVariant/59232889634897", title: "Gold A", price: 10.57, available: false },
      { id: "gid://shopify/ProductVariant/59232889667665", title: "Silver C", price: 10.26, available: false },
      { id: "gid://shopify/ProductVariant/59232889700433", title: "Silver B", price: 10.57, available: false },
      { id: "gid://shopify/ProductVariant/59232889733201", title: "Silver A", price: 10.57, available: false },
      { id: "gid://shopify/ProductVariant/59232889765969", title: "Black Set", price: 30.02, available: false },
      { id: "gid://shopify/ProductVariant/59232889798737", title: "Gold C", price: 10.26, available: false },
      { id: "gid://shopify/ProductVariant/59232889831505", title: "Silver Set", price: 30.02, available: false },
    ],
  },
  "thinker-sculpture": {
    handle: "nordic-minimalist-thinker-statue-resin-sandstone-finish-office-decor-mindfulness-gift-for-philosophy-lovers",
    shopifyId: "gid://shopify/Product/15733069316177",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889864273", title: "3", price: 41.1, available: true },
      { id: "gid://shopify/ProductVariant/59232889897041", title: "1", price: 42.96, available: true },
      { id: "gid://shopify/ProductVariant/59232889929809", title: "2", price: 44.19, available: true },
    ],
  },
  "wabi-sabi-ceramic-dispenser": {
    handle: "wabi-sabi-ceramic-lotion-bottle-450ml-squeeze-bottle-soap-dispenser-shampoo-lotion-conditioner-bottle-bathroom-accessories",
    shopifyId: "gid://shopify/Product/15734964093009",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559425105", title: "1Pc", price: 25.29, available: true },
      { id: "gid://shopify/ProductVariant/59241559457873", title: "2Pcs", price: 42.04, available: true },
    ],
  },
  "rechargeable-ambient-table-lamp": {
    handle: "rechargeable-led-table-lamp-touch-switch-3-levels-dimmable-desk-lights-bar-club-dinner-creative-decorative-ambient-lighting",
    shopifyId: "gid://shopify/Product/15733069512785",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890191953", title: "White", price: 22.6, available: true },
    ],
  },
  "frameless-mirror-panel": {
    handle: "self-adhesive-mirror-sticker-with-backing-tape-20-40-inch-soft-glass-mirror-for-self-service-glass-doors-home-use-full-length-mirror-instagram-style-bedroom-reflective-film",
    shopifyId: "gid://shopify/Product/15733069938769",
    variants: [
      { id: "gid://shopify/ProductVariant/59232892813393", title: "1 Pcs(20 × 40 Inch)", price: 14.99, available: false },
      { id: "gid://shopify/ProductVariant/59232892846161", title: "2 Pcs(20 × 40 Inch)", price: 25.25, available: false },
    ],
  },
  "motion-sensing-cabinet-light": {
    handle: "led-cabinet-light-usb-type-c-rechargeable-motion-sensor-led-lamp-for-kitchen-wardrobe-cabinet-lighting-20cm-30cm-40cm-50cm-60cm",
    shopifyId: "gid://shopify/Product/15733069676625",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890519633", title: "Silvery 10Cm", price: 10.05, available: true },
      { id: "gid://shopify/ProductVariant/59232890552401", title: "Silvery 30Cm", price: 15.01, available: true },
      { id: "gid://shopify/ProductVariant/59232890585169", title: "Silvery 20Cm", price: 11.82, available: true },
      { id: "gid://shopify/ProductVariant/59232890617937", title: "Silvery 40Cm", price: 16.69, available: true },
      { id: "gid://shopify/ProductVariant/59232890650705", title: "Black 50Cm", price: 18.3, available: true },
      { id: "gid://shopify/ProductVariant/59232890683473", title: "Black 40Cm", price: 16.5, available: true },
      { id: "gid://shopify/ProductVariant/59232890716241", title: "Black 30Cm", price: 14.97, available: true },
      { id: "gid://shopify/ProductVariant/59232890749009", title: "Black 20Cm", price: 11.54, available: true },
      { id: "gid://shopify/ProductVariant/59232890781777", title: "Black 10Cm", price: 10.14, available: true },
      { id: "gid://shopify/ProductVariant/59232890814545", title: "Silvery 50Cm", price: 18.4, available: true },
    ],
  },
  "woven-bamboo-table-lamp": {
    handle: "bamboe-handwerk-weven-slaapkamer-studie-nachtkastje-lamp-bar-tafel-woonkamer-decoratie-warme-bamboe-lamp",
    shopifyId: "gid://shopify/Product/15733069054033",
    variants: [
      { id: "gid://shopify/ProductVariant/59232888815697", title: "Eu Plus / Short D23Xh36Cm", price: 57.61, available: true },
      { id: "gid://shopify/ProductVariant/59232888848465", title: "Us Plus / Long D18Xh48Cm", price: 60.81, available: true },
      { id: "gid://shopify/ProductVariant/59232888881233", title: "Us Plus / Short D23Xh36Cm", price: 59.13, available: true },
      { id: "gid://shopify/ProductVariant/59232888914001", title: "Eu Plus / Long D18Xh48Cm", price: 61.36, available: true },
    ],
  },
  "faux-olive-branch": {
    handle: "artificial-olive-branch-with-realistic-faux-leaves-fake-plants-for-room-wedding-decor-arched-flower-wreath-christmas-outdoor",
    shopifyId: "gid://shopify/Product/15734963765329",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558048849", title: "Green", price: 10.07, available: true },
    ],
  },
  "faux-daisy-eucalyptus-arrangement": {
    handle: "artificial-flowers-for-outdoor-indoor-garden-home-decoration-plastic-faux-flowers-faux-flower-daisy-with-eucalyptus-leaves-fake-plants-greenery-boxwood-porch-patio",
    shopifyId: "gid://shopify/Product/15733069971537",
    variants: [
      { id: "gid://shopify/ProductVariant/59232892878929", title: "Colorful", price: 18.98, available: false },
      { id: "gid://shopify/ProductVariant/59232892911697", title: "Deep Autumn Colors", price: 18.98, available: false },
      { id: "gid://shopify/ProductVariant/59232892944465", title: "Orange", price: 18.98, available: false },
    ],
  },
  "cedar-wreath": {
    handle: "sia-flower-cedar-artificial-flower-ring-pe-material-cedar-grass-ring-artificial-plants-garden-decor-home-decor",
    shopifyId: "gid://shopify/Product/15734964224081",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559588945", title: "Cedar Leaf / 40Cm 15.75Inch", price: 16.55, available: true },
    ],
  },
  "pampas-grass-bouquet": {
    handle: "natural-pampas-dried-flowers-bouquet-for-boho-home-vase-decor-bunny-rabbit-tails-grass-artifical-flower-wedding-party-decoration",
    shopifyId: "gid://shopify/Product/15734963798097",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558081617", title: "O-100Pcs", price: 13.7, available: true },
      { id: "gid://shopify/ProductVariant/59241558114385", title: "E-60Pcs", price: 16.75, available: true },
      { id: "gid://shopify/ProductVariant/59241558147153", title: "D-85Pcs", price: 17.72, available: true },
      { id: "gid://shopify/ProductVariant/59241558179921", title: "G-53Pcs", price: 16.33, available: true },
      { id: "gid://shopify/ProductVariant/59241558212689", title: "F-70Pcs", price: 14.54, available: true },
      { id: "gid://shopify/ProductVariant/59241558245457", title: "I-105Pcs", price: 18.15, available: true },
      { id: "gid://shopify/ProductVariant/59241558278225", title: "H-100Pcs", price: 18.7, available: true },
      { id: "gid://shopify/ProductVariant/59241558310993", title: "K-80Pcs", price: 19.79, available: true },
      { id: "gid://shopify/ProductVariant/59241558343761", title: "J-120Pcs", price: 18.41, available: true },
      { id: "gid://shopify/ProductVariant/59241558376529", title: "A-100Pcs", price: 17.45, available: true },
      { id: "gid://shopify/ProductVariant/59241558409297", title: "C-100Pcs", price: 16.75, available: true },
      { id: "gid://shopify/ProductVariant/59241558442065", title: "B-80Pcs", price: 19.09, available: true },
      { id: "gid://shopify/ProductVariant/59241558474833", title: "M-30Pcs", price: 14.81, available: true },
      { id: "gid://shopify/ProductVariant/59241558507601", title: "L-80Pcs", price: 17.72, available: true },
      { id: "gid://shopify/ProductVariant/59241558540369", title: "N-30Pcs", price: 14.81, available: true },
    ],
  },
  "dried-cotton-stem": {
    handle: "handmade-home-decor-fake-flower-floral-branch-cotton-stem-dried-cotton-flower-artificial-plants",
    shopifyId: "gid://shopify/Product/15734963667025",
    variants: [
      { id: "gid://shopify/ProductVariant/59241557688401", title: "White", price: 3.68, available: true },
    ],
  },
  "midnight-marine-eau-de-parfum": {
    handle: "ycz-midnight-marine-eau-de-parfum-50ml-unisex-aromatic-aquatic-ocean-fresh-woody-perfume-with-bergamot-coconut-amber-long-lasting-luxury-arabian-fragrance-for-men-women-premium-gift",
    shopifyId: "gid://shopify/Product/15733070037073",
    variants: [
      { id: "gid://shopify/ProductVariant/59232893010001", title: "Default", price: 24.35, available: false },
    ],
  },
  "nordic-espresso-cup-saucer": {
    handle: "nordic-vintage-ceramic-cup-saucer-modern-art-espresso-cup-latte-american-coffee-cups-tableware-breakfast-milk-oat-beverage-mug",
    shopifyId: "gid://shopify/Product/15734963929169",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558835281", title: "A / 220", price: 20.72, available: true },
      { id: "gid://shopify/ProductVariant/59241558868049", title: "B / 220", price: 28.36, available: true },
    ],
  },
  "japanese-stoneware-mug": {
    handle: "300-600ml-japanese-stoneware-retro-coffee-mug-breakfast-milk-oatmeal-cups-office-couple-water-mug-design-style-mug-birthday-gift",
    shopifyId: "gid://shopify/Product/15734963961937",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558900817", title: "Grey-S / 264-574Ml", price: 32.01, available: true },
      { id: "gid://shopify/ProductVariant/59241558933585", title: "Grey-L / 264-574Ml", price: 36.98, available: true },
      { id: "gid://shopify/ProductVariant/59241558966353", title: "Spricot-L / 264-574Ml", price: 36.98, available: true },
      { id: "gid://shopify/ProductVariant/59241558999121", title: "Spricot-S / 264-574Ml", price: 32.01, available: true },
    ],
  },
  "vintage-japanese-ceramic-mug": {
    handle: "vintage-japanese-ceramic-coffee-mug-elegant-breakfast-milk-mug-for-your-morning-latte-stylish-water-cup-for-the-office",
    shopifyId: "gid://shopify/Product/15734964584529",
    variants: [
      { id: "gid://shopify/ProductVariant/59241560014929", title: "Cup / 200Ml", price: 28.79, available: true },
    ],
  },
  "waffle-weave-cotton-dish-cloths": {
    handle: "100-cotton-waffle-weave-kitchen-dish-cloths-ultra-soft-absorbent-quick-drying-dish-towels-household-tableware-towels-3-pack",
    shopifyId: "gid://shopify/Product/15734963863633",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558638673", title: "Grey / 3Pcs", price: 17.83, available: true },
      { id: "gid://shopify/ProductVariant/59241558671441", title: "Green / 3Pcs", price: 18.05, available: true },
      { id: "gid://shopify/ProductVariant/59241558704209", title: "Pink / 3Pcs", price: 17.94, available: true },
    ],
  },
  "magnetic-spice-tins": {
    handle: "magnetic-spice-jars-set-plastic-spice-tins-seasoning-pepper-spice-storage-jars-tins-pepper-seasoning-sprays-kitchen-supplies",
    shopifyId: "gid://shopify/Product/15734963830865",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558573137", title: "1Pcs", price: 10.46, available: true },
      { id: "gid://shopify/ProductVariant/59241558605905", title: "6Pcs With Iron Sheet", price: 36.14, available: true },
    ],
  },
  "airtight-pantry-container": {
    handle: "2-5l-covered-moisture-proof-sealed-storage-container-used-for-grain-nut-flour-rice-food-storage-boxes",
    shopifyId: "gid://shopify/Product/15733069578321",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890290257", title: "White", price: 14.71, available: true },
    ],
  },
  "borosilicate-vacuum-canister": {
    handle: "vacuum-coffee-canisters-with-airtight-lids-for-coffee-borosilicate-glass-mason-jars-vacuum-sealer-kit-for-tea-beans-sugar",
    shopifyId: "gid://shopify/Product/15733070823505",
    variants: [
      { id: "gid://shopify/ProductVariant/59232896221265", title: "500Ml", price: 21.2, available: true },
      { id: "gid://shopify/ProductVariant/59232896254033", title: "1800Ml", price: 28.34, available: true },
      { id: "gid://shopify/ProductVariant/59232896286801", title: "1200Ml", price: 25.23, available: true },
      { id: "gid://shopify/ProductVariant/59232896319569", title: "900Ml", price: 22.59, available: true },
    ],
  },
  "vacuum-sealed-glass-canister": {
    handle: "vacuum-coffee-canisters-with-airtight-lids-for-coffee-borosilicate-glass-mason-jars-vacuum-sealer-kit-for-tea-beans-sugar",
    shopifyId: "gid://shopify/Product/15733070823505",
    variants: [
      { id: "gid://shopify/ProductVariant/59232896221265", title: "500Ml", price: 21.2, available: true },
      { id: "gid://shopify/ProductVariant/59232896254033", title: "1800Ml", price: 28.34, available: true },
      { id: "gid://shopify/ProductVariant/59232896286801", title: "1200Ml", price: 25.23, available: true },
      { id: "gid://shopify/ProductVariant/59232896319569", title: "900Ml", price: 22.59, available: true },
    ],
  },
  "wooden-serving-tray": {
    handle: "wooden-tea-tray-with-handles-multi-purpose-serving-platter-for-snacks-fruits-teaware-decoration-table-decoration-accessories",
    shopifyId: "gid://shopify/Product/15734963601489",
    variants: [
      { id: "gid://shopify/ProductVariant/59241557459025", title: "33X22X5 Cm", price: 39.7, available: true },
      { id: "gid://shopify/ProductVariant/59241557491793", title: "43X33X5Cm", price: 43.27, available: true },
      { id: "gid://shopify/ProductVariant/59241557524561", title: "40X28X5 Cm", price: 41.14, available: true },
    ],
  },
  "acacia-magnetic-knife-block": {
    handle: "new-acacia-wood-home-kitchen-magnetic-knife-block-holder-rack-magnetic-stands-with-strong-enhanced-magnets",
    shopifyId: "gid://shopify/Product/15733070004305",
    variants: [
      { id: "gid://shopify/ProductVariant/59232892977233", title: "Default Title", price: 71.97, available: false },
    ],
  },
  "compartment-meal-container": {
    handle: "food-grade-pet-portable-salad-box-leak-proof-condiment-compartment-food-storage-box-light-meal-lunch-box-for-office-workers",
    shopifyId: "gid://shopify/Product/15733069250641",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889471057", title: "As Shown", price: 30.13, available: true },
    ],
  },
};

/**
 * Given a static product slug and optional static variant ID,
 * return the corresponding Shopify variant GID for cart operations.
 * Falls back to the first available variant if no match is found.
 */
export function getShopifyVariantId(
  productSlug: string,
  staticVariantIndex?: number
): string | null {
  const product = shopifyMap[productSlug];
  if (!product || product.variants.length === 0) return null;

  // If a variant index is provided and valid, use it
  if (staticVariantIndex !== undefined && staticVariantIndex < product.variants.length) {
    const v = product.variants[staticVariantIndex];
    if (v.available) return v.id;
  }

  // Fall back to first available variant
  const available = product.variants.find(v => v.available);
  return available?.id ?? null;
}
