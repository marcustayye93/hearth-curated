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
  "abstract-figurine": {
    handle: "creative-abstract-character-ornament",
    shopifyId: "gid://shopify/Product/15739019067473",
    variants: [
      { id: "gid://shopify/ProductVariant/59251305644113", title: "1Style", price: 5.27, available: true },
      { id: "gid://shopify/ProductVariant/59251305676881", title: "Gold 1Style", price: 5.27, available: true },
      { id: "gid://shopify/ProductVariant/59251305709649", title: "Gold 2Style", price: 5.27, available: true },
      { id: "gid://shopify/ProductVariant/59251305742417", title: "Gold 3Style", price: 5.27, available: true },
      { id: "gid://shopify/ProductVariant/59251305775185", title: "2Style", price: 5.27, available: true },
      { id: "gid://shopify/ProductVariant/59251305807953", title: "3Style", price: 5.27, available: true },
    ],
  },
  "acacia-magnetic-knife-block": {
    handle: "magnetic-knife-holder-solid-wood-multifunctional-creative-magnetic-knife-holder",
    shopifyId: "gid://shopify/Product/15738954416209",
    variants: [
      { id: "gid://shopify/ProductVariant/59250914951249", title: "Yellow", price: 28.54, available: true },
    ],
  },
  "acacia-salt-pepper-mill": {
    handle: "salt-and-pepper-grinder-acacia-wooden-spice-pepper-mill-with-strong-adjustable-ceramic-grinder-kitchen-cooking-tools-1",
    shopifyId: "gid://shopify/Product/15735272112209",
    variants: [
      { id: "gid://shopify/ProductVariant/59243760877649", title: "Wooden Base 1Pcs", price: 11.03, available: true },
      { id: "gid://shopify/ProductVariant/59243760943185", title: "6 Inch 1Pcs", price: 19.57, available: true },
      { id: "gid://shopify/ProductVariant/59243760910417", title: "8 Inch 1Pcs", price: 22.84, available: true },
      { id: "gid://shopify/ProductVariant/59243760975953", title: "10 Inch 1Pcs", price: 25.12, available: true },
    ],
  },
  "acacia-salt-pepper-mill-old": {
    handle: "salt-and-pepper-grinder-acacia-wooden-spice-pepper-mill-with-strong-adjustable-ceramic-grinder-kitchen-cooking-tools",
    shopifyId: "gid://shopify/Product/15734963994705",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559031889", title: "Wooden Base 1Pcs", price: 10.62, available: true },
      { id: "gid://shopify/ProductVariant/59241559064657", title: "8 Inch 1Pcs", price: 21.99, available: true },
      { id: "gid://shopify/ProductVariant/59241559097425", title: "10 Inch 1Pcs", price: 24.47, available: true },
      { id: "gid://shopify/ProductVariant/59241559130193", title: "6 Inch 1Pcs", price: 18.03, available: true },
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
  "acacia-serving-tray": {
    handle: "serving-tray-17x12-2-inch-acacia-food-serving-table-laptop-desk-with-handles",
    shopifyId: "gid://shopify/Product/15738954612817",
    variants: [
      { id: "gid://shopify/ProductVariant/59250915573841", title: "Pallet", price: 30.9, available: true },
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
  "airtight-pantry-container": {
    handle: "airtight-pantry-container-2-5l-moisture-proof",
    shopifyId: "gid://shopify/Product/15737818677329",
    variants: [
      { id: "gid://shopify/ProductVariant/59248122265681", title: "Default Title", price: 28, available: true },
    ],
  },
  "autumn-harvest-garland": {
    handle: "halloween-thanksgiving-autumn-frost-leaf-pumpkin-simulation-garland-props-home-decor",
    shopifyId: "gid://shopify/Product/15739020214353",
    variants: [
      { id: "gid://shopify/ProductVariant/59251310788689", title: "Pumpkin Wreath / 35X35Cm", price: 9.79, available: false },
      { id: "gid://shopify/ProductVariant/59251310821457", title: "Pumpkin Wreath / 40X40Cm", price: 10.86, available: false },
      { id: "gid://shopify/ProductVariant/59251310854225", title: "Pumpkin Wreath / 45X45Cm", price: 12.18, available: false },
    ],
  },
  "black-walnut-cutting-board": {
    handle: "black-walnut-wood-cutting-board-creative-whole-tray-fruit-chopping-cutting-board-wood-chopping-blocks-for-kitchen",
    shopifyId: "gid://shopify/Product/15739020116049",
    variants: [
      { id: "gid://shopify/ProductVariant/59251310592081", title: "Round", price: 21.28, available: true },
      { id: "gid://shopify/ProductVariant/59251310624849", title: "Rectangula L", price: 27.27, available: true },
      { id: "gid://shopify/ProductVariant/59251310657617", title: "Rectangular S", price: 20.54, available: true },
    ],
  },
  "black-walnut-serving-tray": {
    handle: "black-walnut-resin-rectangular-household-fruit-solid-wood-small-tea-table-tray",
    shopifyId: "gid://shopify/Product/15738951794769",
    variants: [
      { id: "gid://shopify/ProductVariant/59250901057617", title: "Walnut Transparent Square 29Cm", price: 33.5, available: true },
      { id: "gid://shopify/ProductVariant/59250901090385", title: "Walnut Blue Square 29Cm", price: 35.93, available: true },
      { id: "gid://shopify/ProductVariant/59250901123153", title: "Walnut Blue Square 36Cm", price: 53.74, available: true },
      { id: "gid://shopify/ProductVariant/59250901155921", title: "Walnut Blue Square Plate", price: 24.48, available: true },
    ],
  },
  "bohemian-area-rug": {
    handle: "new-style-wholesale-nordic-bohemian-living-room-rugs-sample-room-living-room-coffee-table-nordic-carpet-customization",
    shopifyId: "gid://shopify/Product/15738951598161",
    variants: [
      { id: "gid://shopify/ProductVariant/59250897125457", title: "4Style / 60X90Cm", price: 3.91, available: true },
      { id: "gid://shopify/ProductVariant/59250897158225", title: "4Style / 80X160Cm", price: 7.92, available: true },
      { id: "gid://shopify/ProductVariant/59250897190993", title: "4Style / 80X120Cm", price: 6.1, available: true },
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
  "boucle-sphere-cushion": {
    handle: "sofa-living-room-spherical-lamb-wool-bedside-cushion",
    shopifyId: "gid://shopify/Product/15739019231313",
    variants: [
      { id: "gid://shopify/ProductVariant/59251306594385", title: "Creamy White / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251306627153", title: "Light Brown / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251306659921", title: "Lilac Grey / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251306692689", title: "Misty Rose / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251306725457", title: "Creamy White / 28Cm", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251306758225", title: "Light Brown / 28Cm", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251306790993", title: "Lilac Grey / 28Cm", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251306823761", title: "Misty Rose / 28Cm", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251306856529", title: "Black / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251306889297", title: "Black / 28Cm", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251306922065", title: "Navy Blue / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251306954833", title: "Navy Blue / 28Cm", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251306987601", title: "Beige / 22Cm", price: 4.8, available: true },
      { id: "gid://shopify/ProductVariant/59251307020369", title: "Beige / 28Cm", price: 6.48, available: true },
    ],
  },
  "brass-wall-hooks": {
    handle: "1-5pcs-towel-hooks-matte-wall-hook-for-home-decorative-hook-bathroom-accessories-wall-hooks-wholesale",
    shopifyId: "gid://shopify/Product/15735271915601",
    variants: [
      { id: "gid://shopify/ProductVariant/59243759829073", title: "1 Pc Matte Black", price: 7.15, available: false },
      { id: "gid://shopify/ProductVariant/59243759927377", title: "1 Pc Matte Gold", price: 7.56, available: false },
      { id: "gid://shopify/ProductVariant/59243759960145", title: "1 Pc Matte Silver", price: 7.48, available: false },
      { id: "gid://shopify/ProductVariant/59243759861841", title: "5 Pcs Matte Gold", price: 22.45, available: false },
      { id: "gid://shopify/ProductVariant/59243759894609", title: "5 Pcs Matte Black", price: 22.91, available: false },
      { id: "gid://shopify/ProductVariant/59243759992913", title: "5 Pcs Matte Silver", price: 22.76, available: false },
    ],
  },
  "cedar-wreath": {
    handle: "sia-flower-cedar-artificial-flower-ring-pe-material-cedar-grass-ring-artificial-plants-garden-decor-home-decor",
    shopifyId: "gid://shopify/Product/15734964224081",
    variants: [
      { id: "gid://shopify/ProductVariant/59241559588945", title: "Cedar Leaf / 40Cm 15.75Inch", price: 16.55, available: true },
    ],
  },
  "ceramic-bud-vase": {
    handle: "ceramic-vase-living-room-tv-cabinet-flower-stand",
    shopifyId: "gid://shopify/Product/15739019198545",
    variants: [
      { id: "gid://shopify/ProductVariant/59251306463313", title: "Brown", price: 5.32, available: false },
      { id: "gid://shopify/ProductVariant/59251306496081", title: "Black", price: 5.32, available: false },
      { id: "gid://shopify/ProductVariant/59251306528849", title: "Green", price: 5.32, available: false },
      { id: "gid://shopify/ProductVariant/59251306561617", title: "Orange", price: 5.32, available: false },
    ],
  },
  "ceramic-butter-dish": {
    handle: "creative-ceramic-butter-box-european-cutlery-storage-box-with-lid",
    shopifyId: "gid://shopify/Product/15739020181585",
    variants: [
      { id: "gid://shopify/ProductVariant/59251310723153", title: "Blue", price: 13.86, available: false },
      { id: "gid://shopify/ProductVariant/59251310755921", title: "White", price: 10.34, available: false },
    ],
  },
  "ceramic-incense-holder": {
    handle: "household-ceramic-incense-stick-backflow-incense-burner",
    shopifyId: "gid://shopify/Product/15739018936401",
    variants: [
      { id: "gid://shopify/ProductVariant/59251305349201", title: "Incense Stick And Backflow Inc", price: 8.16, available: true },
      { id: "gid://shopify/ProductVariant/59251305381969", title: "Incense Stick", price: 6.27, available: true },
    ],
  },
  "ceramic-pour-over-dripper": {
    handle: "ceramic-coffee-three-hole-drip-filter-cup",
    shopifyId: "gid://shopify/Product/15739019296849",
    variants: [
      { id: "gid://shopify/ProductVariant/59251307249745", title: "Black / 1 To 2 Servings", price: 3.92, available: true },
      { id: "gid://shopify/ProductVariant/59251307282513", title: "White / 1 To 2 Servings", price: 3.92, available: true },
    ],
  },
  "ceramic-seasoning-pot-set": {
    handle: "kitchen-seasoning-pot-ceramic-three-piece-suit-simple-salt-pot-acacia-wood-tray-with-cover",
    shopifyId: "gid://shopify/Product/15738951368785",
    variants: [
      { id: "gid://shopify/ProductVariant/59250895978577", title: "A", price: 6.98, available: true },
      { id: "gid://shopify/ProductVariant/59250896011345", title: "B", price: 16.46, available: true },
      { id: "gid://shopify/ProductVariant/59250896044113", title: "C", price: 24.7, available: true },
    ],
  },
  "ceramic-spoon-rest": {
    handle: "ravioli-ceramic-spoon-rest-for-stove-top-and-kitchen-counter-large-and-dishwasher-safe",
    shopifyId: "gid://shopify/Product/15735272177745",
    variants: [
      { id: "gid://shopify/ProductVariant/59243760386129", title: "Light Yellow", price: 12.98, available: true },
    ],
  },
  "cherry-stone-fruit-pitter": {
    handle: "cherry-stone-fruit-pitter-single-press-with-splash-guard",
    shopifyId: "gid://shopify/Product/15737818644561",
    variants: [
      { id: "gid://shopify/ProductVariant/59248122232913", title: "Default Title", price: 58, available: true },
    ],
  },
  "chunky-knit-cushion-cover": {
    handle: "thick-wool-knitted-pillowcase",
    shopifyId: "gid://shopify/Product/15739019165777",
    variants: [
      { id: "gid://shopify/ProductVariant/59251306266705", title: "Yellow", price: 7.3, available: false },
      { id: "gid://shopify/ProductVariant/59251306299473", title: "Grey", price: 7.52, available: false },
      { id: "gid://shopify/ProductVariant/59251306332241", title: "Dark Brown", price: 7.52, available: false },
      { id: "gid://shopify/ProductVariant/59251306365009", title: "Light Brown", price: 7.52, available: false },
      { id: "gid://shopify/ProductVariant/59251306397777", title: "White", price: 7.52, available: false },
      { id: "gid://shopify/ProductVariant/59251306430545", title: "Beige", price: 7.3, available: false },
    ],
  },
  "compartment-meal-container": {
    handle: "compartment-meal-container-leak-proof-design",
    shopifyId: "gid://shopify/Product/15737818611793",
    variants: [
      { id: "gid://shopify/ProductVariant/59248122200145", title: "Default Title", price: 52, available: true },
    ],
  },
  "diatomite-bath-mat": {
    handle: "diatomite-household-quick-drying-non-slip-mat",
    shopifyId: "gid://shopify/Product/15738951401553",
    variants: [
      { id: "gid://shopify/ProductVariant/59250896175185", title: "Grey / 40X30Cm", price: 7.06, available: true },
    ],
  },
  "dried-cotton-stem": {
    handle: "dried-cotton-stem-natural-botanical-accent",
    shopifyId: "gid://shopify/Product/15737818579025",
    variants: [
      { id: "gid://shopify/ProductVariant/59248122167377", title: "Default Title", price: 9.0, available: true },
    ],
  },
  "dried-lavender-bundle": {
    handle: "lavender-dried-flowers-bouquet-domestic-ornaments",
    shopifyId: "gid://shopify/Product/15738954285137",
    variants: [
      { id: "gid://shopify/ProductVariant/59250914263121", title: "White", price: 5.03, available: true },
      { id: "gid://shopify/ProductVariant/59250914295889", title: "Pink", price: 5.03, available: true },
    ],
  },
  "dried-reed-arrangement": {
    handle: "simulation-floral-decoration-living-room-fake-flowers-dried-flower-bouquet-vase-table-flower-arrangement",
    shopifyId: "gid://shopify/Product/15739020312657",
    variants: [
      { id: "gid://shopify/ProductVariant/59251311050833", title: "Pink Fron", price: 19.92, available: true },
      { id: "gid://shopify/ProductVariant/59251311083601", title: "Black Beans", price: 19.92, available: true },
      { id: "gid://shopify/ProductVariant/59251311116369", title: "Sunflower", price: 21.92, available: true },
      { id: "gid://shopify/ProductVariant/59251311149137", title: "Pink Franca Black Beans", price: 38.93, available: true },
      { id: "gid://shopify/ProductVariant/59251311181905", title: "Pink Franca Sunflower", price: 39.73, available: true },
      { id: "gid://shopify/ProductVariant/59251311214673", title: "Powder Franca Sunflower With B", price: 59.53, available: true },
    ],
  },
  "ebony-cutting-board": {
    handle: "ebony-cutting-board-solid-wood-household-cutting-board",
    shopifyId: "gid://shopify/Product/15739020574801",
    variants: [
      { id: "gid://shopify/ProductVariant/59251311837265", title: "Ebony Cutting Board / 28X18X2.5Cm", price: 9.04, available: true },
      { id: "gid://shopify/ProductVariant/59251311870033", title: "Ebony Cutting Board / 33X22X2.5Cm", price: 11.5, available: true },
      { id: "gid://shopify/ProductVariant/59251311902801", title: "Ebony Cutting Board / 36X24X2.5Cm", price: 14.4, available: true },
      { id: "gid://shopify/ProductVariant/59251311935569", title: "Ebony Cutting Board / 38X26X2.5Cm", price: 16.99, available: true },
      { id: "gid://shopify/ProductVariant/59251311968337", title: "Ebony Cutting Board / 40X28X2.5Cm", price: 19.37, available: true },
      { id: "gid://shopify/ProductVariant/59251312001105", title: "Ebony Cutting Board / 45X30X2.5Cm", price: 22.51, available: true },
    ],
  },
  "edison-vintage-night-lamp": {
    handle: "edison-vintage-bulb-small-night-lamp-japanese-atmosphere",
    shopifyId: "gid://shopify/Product/15738951434321",
    variants: [
      { id: "gid://shopify/ProductVariant/59250896207953", title: "G95 Spiral Bulb / Cn", price: 15.77, available: false },
      { id: "gid://shopify/ProductVariant/59250896240721", title: "G95 Spiral Bulb / With Adapter Plug", price: 17.79, available: false },
    ],
  },
  "faux-banyan-tree": {
    handle: "70-135cm-large-artificial-ficus-tree-fake-rubber-plants-branch-plastic-fiddle-leaf-fig-tree",
    shopifyId: "gid://shopify/Product/15735782735953",
    variants: [
      { id: "gid://shopify/ProductVariant/59244810436689", title: "70Cm", price: 48.0, available: true },
      { id: "gid://shopify/ProductVariant/59244810469457", title: "70Cm And105Cm", price: 68.0, available: true },
      { id: "gid://shopify/ProductVariant/59244810502225", title: "135Cm 3Forks", price: 78.0, available: true },
      { id: "gid://shopify/ProductVariant/59244810534993", title: "140Cm 3Forks", price: 88.0, available: true },
    ],
  },
  "faux-daisy-arrangement": {
    handle: "faux-daisy-arrangement-silk-garland-pair",
    shopifyId: "gid://shopify/Product/15737819299921",
    variants: [
      { id: "gid://shopify/ProductVariant/59248124788817", title: "Red-Purple", price: 28, available: true },
      { id: "gid://shopify/ProductVariant/59248124821585", title: "Pink-Rose", price: 28, available: true },
      { id: "gid://shopify/ProductVariant/59248124854353", title: "Yellow-Orange", price: 28, available: true },
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
  "faux-eucalyptus-garland": {
    handle: "180cm-1pc-artificial-eucalyptus-leaves-greenery-garland-faux-plant-spring-vine-with-white-flowers-berries-for-wedding-home-decor",
    shopifyId: "gid://shopify/Product/15735271948369",
    variants: [
      { id: "gid://shopify/ProductVariant/59243760025681", title: "1Pcs", price: 8.62, available: true },
    ],
  },
  "faux-fiddle-leaf-fig": {
    handle: "faux-fiddle-leaf-fig-realistic-artificial-branch",
    shopifyId: "gid://shopify/Product/15737819267153",
    variants: [
      { id: "gid://shopify/ProductVariant/59248124657745", title: "Single Branch (70cm)", price: 48, available: true },
      { id: "gid://shopify/ProductVariant/59248124690513", title: "Pair (70cm + 105cm)", price: 68, available: true },
      { id: "gid://shopify/ProductVariant/59248124723281", title: "Tall (135cm, 3 forks)", price: 78, available: true },
      { id: "gid://shopify/ProductVariant/59248124756049", title: "Grand (140cm, 3 forks)", price: 88, available: true },
    ],
  },
  "faux-olive-branch": {
    handle: "artificial-olive-branch-with-realistic-faux-leaves-fake-plants-for-room-wedding-decor-arched-flower-wreath-christmas-outdoor",
    shopifyId: "gid://shopify/Product/15734963765329",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558048849", title: "Green", price: 10.07, available: true },
    ],
  },
  "fireplace-aroma-diffuser": {
    handle: "new-flame-aromatherapy-machine-colorful-essential-oil-diffuser-home-large-fog-volume-flame-humidifier-3d-flame-fireplace-machine",
    shopifyId: "gid://shopify/Product/15739019001937",
    variants: [
      { id: "gid://shopify/ProductVariant/59251305545809", title: "Black Gift Remote Control / 1Pcs", price: 31.61, available: true },
      { id: "gid://shopify/ProductVariant/59251305578577", title: "White Gift Remote Control / 1Pcs", price: 31.61, available: true },
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
  "glass-propagation-vases": {
    handle: "glass-propagation-vases-bulb-shaped-on-wooden-stand",
    shopifyId: "gid://shopify/Product/15737819201617",
    variants: [
      { id: "gid://shopify/ProductVariant/59248124330065", title: "Style A (3 bulbs)", price: 36, available: true },
      { id: "gid://shopify/ProductVariant/59248124362833", title: "Style B (5 bulbs)", price: 42, available: true },
      { id: "gid://shopify/ProductVariant/59248124395601", title: "Style C (single)", price: 32, available: true },
    ],
  },
  "hand-crank-pasta-maker": {
    handle: "pasta-maker-roller-machine-fettuccine-noodle-maker",
    shopifyId: "gid://shopify/Product/15739019591761",
    variants: [
      { id: "gid://shopify/ProductVariant/59251307872337", title: "Silver", price: 48.71, available: true },
    ],
  },
  "hand-painted-ceramic-oil-cruet": {
    handle: "underglaze-ceramic-bottle-olive-oil-bottle-oil-vinegar-bottle-kitchen-seasoning-bottle-drainage-bottle",
    shopifyId: "gid://shopify/Product/15738954580049",
    variants: [
      { id: "gid://shopify/ProductVariant/59250915541073", title: "Olive Green", price: 13.04, available: true },
    ],
  },
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
  "handmade-wooden-cup": {
    handle: "handmade-solid-wood-wooden-water-cup-coffee-beer-glass-milkteacup-handle",
    shopifyId: "gid://shopify/Product/15738954317905",
    variants: [
      { id: "gid://shopify/ProductVariant/59250914328657", title: "Wooden Cup", price: 3.09, available: false },
    ],
  },
  "japanese-ceramic-spoon-set": {
    handle: "ravioli-ceramic-spoon-rest-for-stove-top-and-kitchen-counter-large-and-dishwasher-safe",
    shopifyId: "gid://shopify/Product/15735782441041",
    variants: [
      { id: "gid://shopify/ProductVariant/59244860997713", title: "Default Title", price: 22.0, available: false },
    ],
  },
  "japanese-irregular-dinner-plate": {
    handle: "retro-bowls-and-plates",
    shopifyId: "gid://shopify/Product/15737946800209",
    variants: [
      { id: "gid://shopify/ProductVariant/59248630890577", title: "Big Flat 4Pcs", price: 42.53, available: true },
      { id: "gid://shopify/ProductVariant/59248630923345", title: "Bowl 4Pcs", price: 27.63, available: true },
      { id: "gid://shopify/ProductVariant/59248630956113", title: "Mug 4Pcs", price: 24.36, available: true },
      { id: "gid://shopify/ProductVariant/59248630988881", title: "Small Plate 4Pcs", price: 27.63, available: true },
      { id: "gid://shopify/ProductVariant/59248631021649", title: "4Pcs Set", price: 30.54, available: true },
      { id: "gid://shopify/ProductVariant/59248631054417", title: "Bowl", price: 7.14, available: true },
      { id: "gid://shopify/ProductVariant/59248631087185", title: "Mug", price: 8.29, available: true },
      { id: "gid://shopify/ProductVariant/59248631119953", title: "Big Flat", price: 10.86, available: true },
      { id: "gid://shopify/ProductVariant/59248631152721", title: "Small Plate", price: 7.14, available: true },
    ],
  },
  "japanese-linen-apron": {
    handle: "2022-new-japanese-linen-aprons-for-women-with-pockets-cross-back-cute-apron-dress",
    shopifyId: "gid://shopify/Product/15735272013905",
    variants: [
      { id: "gid://shopify/ProductVariant/59243760156753", title: "Style A1", price: 15.4, available: true },
      { id: "gid://shopify/ProductVariant/59243760091217", title: "Style A2", price: 15.59, available: true },
      { id: "gid://shopify/ProductVariant/59243760189521", title: "Style B2", price: 16.39, available: true },
      { id: "gid://shopify/ProductVariant/59243760058449", title: "Style C2", price: 13.57, available: true },
      { id: "gid://shopify/ProductVariant/59243760353361", title: "Style C1", price: 13.97, available: true },
    ],
  },
  "japanese-matcha-ceremony-set": {
    handle: "matcha-bowl-japanese-matcha-tea-set-matcha-brush",
    shopifyId: "gid://shopify/Product/15737946832977",
    variants: [
      { id: "gid://shopify/ProductVariant/59248631316561", title: "Clear Glaze / 7Pieces Black", price: 21.8, available: true },
      { id: "gid://shopify/ProductVariant/59248631349329", title: "Clear Glaze / 7Piece Set Painted In Brown", price: 21.8, available: true },
      { id: "gid://shopify/ProductVariant/59248631414865", title: "Clear Glaze / 7Piece Set Green", price: 21.8, available: true },
    ],
  },
  "japanese-sake-set": {
    handle: "retro-ceramic-wineware-sake-pot-set-warm-sake-pot",
    shopifyId: "gid://shopify/Product/15739018805329",
    variants: [
      { id: "gid://shopify/ProductVariant/59251304759377", title: "Black Gold Jug", price: 1.8, available: true },
      { id: "gid://shopify/ProductVariant/59251304792145", title: "Black Gin Wine Cup", price: 0.63, available: true },
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
  "japanese-wooden-coaster-set": {
    handle: "japanese-style-wooden-coaster-set",
    shopifyId: "gid://shopify/Product/15738954645585",
    variants: [
      { id: "gid://shopify/ProductVariant/59250915606609", title: "Beech / 6 Piece Set", price: 9.14, available: true },
      { id: "gid://shopify/ProductVariant/59250915934289", title: "Walnut / Coaster Set A", price: 12.27, available: true },
      { id: "gid://shopify/ProductVariant/59250916065361", title: "Walnut / 6 Piece Set", price: 12.45, available: true },
    ],
  },
  "jujube-wood-serving-basin": {
    handle: "solid-wood-fruit-plate-salad-wooden-basin-creative-modern-living-room",
    shopifyId: "gid://shopify/Product/15738954121297",
    variants: [
      { id: "gid://shopify/ProductVariant/59250913411153", title: "16To20Cm", price: 8.23, available: true },
      { id: "gid://shopify/ProductVariant/59250913443921", title: "20To24Cm", price: 9.94, available: true },
    ],
  },
  "kitchen-shears-magnetic-case": {
    handle: "stainless-steel-kitchen-scissors-powerful-multifunctional-household-scissors-for-meat-poultry-free-magnetic-scissors-cover",
    shopifyId: "gid://shopify/Product/15733069217873",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889438289", title: "Kitchen Shears", price: 24.09, available: true },
    ],
  },
  "knit-nap-blanket": {
    handle: "small-blanket-nap-blanket",
    shopifyId: "gid://shopify/Product/15739019853905",
    variants: [
      { id: "gid://shopify/ProductVariant/59251309215825", title: "Khaki", price: 10.86, available: true },
      { id: "gid://shopify/ProductVariant/59251309248593", title: "Dark Grey", price: 11.39, available: true },
      { id: "gid://shopify/ProductVariant/59251309281361", title: "Light Grey", price: 10.86, available: true },
    ],
  },
  "lavender-sachet": {
    handle: "a-variety-of-xinjiang-lavender-fragrant-lavender-sachet-toy-filled-with-dried-flower-particles",
    shopifyId: "gid://shopify/Product/15738954154065",
    variants: [
      { id: "gid://shopify/ProductVariant/59250913476689", title: "A", price: 7.11, available: true },
      { id: "gid://shopify/ProductVariant/59250913509457", title: "B", price: 6.31, available: true },
      { id: "gid://shopify/ProductVariant/59250913542225", title: "C", price: 5.51, available: true },
      { id: "gid://shopify/ProductVariant/59250913574993", title: "D", price: 5.51, available: true },
      { id: "gid://shopify/ProductVariant/59250913607761", title: "E", price: 4.92, available: true },
      { id: "gid://shopify/ProductVariant/59250913640529", title: "F", price: 4.36, available: true },
      { id: "gid://shopify/ProductVariant/59250913673297", title: "G", price: 3.81, available: true },
    ],
  },
  "led-aroma-diffuser": {
    handle: "led-essential-oil-diffuser",
    shopifyId: "gid://shopify/Product/15738951729233",
    variants: [
      { id: "gid://shopify/ProductVariant/59250900271185", title: "Set 1 / Usb", price: 16.91, available: true },
      { id: "gid://shopify/ProductVariant/59250900303953", title: "Shallow Wood Grain / Usb", price: 8.55, available: true },
      { id: "gid://shopify/ProductVariant/59250900336721", title: "Set 6 / Usb", price: 28.27, available: true },
      { id: "gid://shopify/ProductVariant/59250900369489", title: "Deep Wood Grain / Usb", price: 8.55, available: true },
      { id: "gid://shopify/ProductVariant/59250900402257", title: "Set 2 / Usb", price: 16.91, available: true },
      { id: "gid://shopify/ProductVariant/59250900435025", title: "Set 3 / Usb", price: 10.29, available: true },
      { id: "gid://shopify/ProductVariant/59250900467793", title: "Set 4 / Usb", price: 10.29, available: true },
      { id: "gid://shopify/ProductVariant/59250900500561", title: "Set 5 / Usb", price: 28.27, available: true },
    ],
  },
  "linen-cushion-cover": {
    handle: "solid-pillow-case-cotton-linen-cushion-cover-45x45cm-55x55cm-beige-black-red-grey",
    shopifyId: "gid://shopify/Product/15735272702033",
    variants: [
      { id: "gid://shopify/ProductVariant/59243761172561", title: "Natural Linen / 45X45Cm", price: 15.52, available: true },
      { id: "gid://shopify/ProductVariant/59243761205329", title: "Natural Linen / 55X55Cm", price: 18.57, available: true },
      { id: "gid://shopify/ProductVariant/59243761139793", title: "Grey / 45X45Cm", price: 15.52, available: true },
      { id: "gid://shopify/ProductVariant/59243761074257", title: "Grey / 55X55Cm", price: 18.57, available: true },
      { id: "gid://shopify/ProductVariant/59243761238097", title: "Coffee / 45X45Cm", price: 15.52, available: true },
      { id: "gid://shopify/ProductVariant/59243761270865", title: "Coffee / 55X55Cm", price: 18.57, available: true },
      { id: "gid://shopify/ProductVariant/59243761008721", title: "Black / 45X45Cm", price: 15.52, available: true },
      { id: "gid://shopify/ProductVariant/59243761041489", title: "Black / 55X55Cm", price: 18.57, available: true },
      { id: "gid://shopify/ProductVariant/59243761106985", title: "Red / 45X45Cm", price: 15.52, available: true },
      { id: "gid://shopify/ProductVariant/59243760976977", title: "Red / 55X55Cm", price: 18.57, available: true },
    ],
  },
  "linen-placemats": {
    handle: "multicolor-linen-napkins-nordic-pastoral-style-cotton-and-linen-fabric-western-placemats",
    shopifyId: "gid://shopify/Product/15738954252369",
    variants: [
      { id: "gid://shopify/ProductVariant/59250914361425", title: "Original Hemp Color / 32X44Cm", price: 3.99, available: true },
      { id: "gid://shopify/ProductVariant/59250914394193", title: "White / 32X44Cm", price: 3.99, available: true },
      { id: "gid://shopify/ProductVariant/59250914492497", title: "Caramel Colour / 32X44Cm", price: 3.99, available: true },
      { id: "gid://shopify/ProductVariant/59250914525265", title: "Grey Blue / 32X44Cm", price: 3.99, available: true },
    ],
  },
  "linen-table-napkins": {
    handle: "4-pieces-linen-napkins-hemstitch-napkin-natural-linen-dinner-napkins-custom-table-napkins-for-party-wedding",
    shopifyId: "gid://shopify/Product/15735272079441",
    variants: [
      { id: "gid://shopify/ProductVariant/59243760648273", title: "Linen Grey 20X20Cm", price: 12.59, available: true },
      { id: "gid://shopify/ProductVariant/59243760812113", title: "White Cotton 20X20Cm", price: 13.3, available: true },
      { id: "gid://shopify/ProductVariant/59243760844881", title: "Linen Grey 35X50Cm", price: 17.03, available: true },
      { id: "gid://shopify/ProductVariant/59243760746577", title: "White Cotton 35X50Cm", price: 17.17, available: true },
      { id: "gid://shopify/ProductVariant/59243760713809", title: "Linen Grey 50X50Cm", price: 18.79, available: true },
      { id: "gid://shopify/ProductVariant/59243760681041", title: "White Cotton 50X50Cm", price: 19.01, available: true },
      { id: "gid://shopify/ProductVariant/59243760779345", title: "White Cotton 45X45Cm", price: 17.55, available: true },
    ],
  },
  "linen-table-runner": {
    handle: "home-leisure-style-linen-table-runner",
    shopifyId: "gid://shopify/Product/15739020083281",
    variants: [
      { id: "gid://shopify/ProductVariant/59251309707345", title: "Light Enjoy Brown / 30X50", price: 1.91, available: false },
      { id: "gid://shopify/ProductVariant/59251309740113", title: "Light Enjoy Brown / 30X120", price: 3.06, available: false },
      { id: "gid://shopify/ProductVariant/59251309772881", title: "Light Enjoy Brown / 30X160", price: 3.68, available: false },
      { id: "gid://shopify/ProductVariant/59251309805649", title: "Light Enjoy Brown / 30X180", price: 4.1, available: false },
      { id: "gid://shopify/ProductVariant/59251309838417", title: "Light Enjoy Brown / 30X200", price: 4.52, available: false },
      { id: "gid://shopify/ProductVariant/59251309871185", title: "Light Enjoy Brown / 30X220", price: 4.95, available: false },
      { id: "gid://shopify/ProductVariant/59251309903953", title: "Light Enjoy Brown / 30X240", price: 5.14, available: false },
      { id: "gid://shopify/ProductVariant/59251309936721", title: "Light Enjoy Brown / 30X260", price: 5.54, available: false },
      { id: "gid://shopify/ProductVariant/59251309969489", title: "Light Enjoy Brown / 30X300", price: 6.21, available: false },
      { id: "gid://shopify/ProductVariant/59251310002257", title: "Light Gray / 30X50", price: 1.91, available: false },
      { id: "gid://shopify/ProductVariant/59251310035025", title: "Light Gray / 30X120", price: 3.06, available: false },
      { id: "gid://shopify/ProductVariant/59251310067793", title: "Light Gray / 30X160", price: 3.68, available: false },
      { id: "gid://shopify/ProductVariant/59251310100561", title: "Light Gray / 30X180", price: 4.1, available: false },
      { id: "gid://shopify/ProductVariant/59251310133329", title: "Light Gray / 30X200", price: 4.52, available: false },
      { id: "gid://shopify/ProductVariant/59251310166097", title: "Light Gray / 30X220", price: 4.95, available: false },
      { id: "gid://shopify/ProductVariant/59251310198865", title: "Light Gray / 30X240", price: 5.14, available: false },
      { id: "gid://shopify/ProductVariant/59251310231633", title: "Light Gray / 30X260", price: 5.54, available: false },
      { id: "gid://shopify/ProductVariant/59251310264401", title: "Light Gray / 30X300", price: 6.21, available: false },
      { id: "gid://shopify/ProductVariant/59251310297169", title: "Enjoy The Navy Blue / 30X50", price: 1.91, available: false },
      { id: "gid://shopify/ProductVariant/59251310329937", title: "Enjoy The Navy Blue / 30X120", price: 3.06, available: false },
      { id: "gid://shopify/ProductVariant/59251310362705", title: "Enjoy The Navy Blue / 30X160", price: 3.68, available: false },
      { id: "gid://shopify/ProductVariant/59251310395473", title: "Enjoy The Navy Blue / 30X180", price: 4.1, available: false },
      { id: "gid://shopify/ProductVariant/59251310428241", title: "Enjoy The Navy Blue / 30X200", price: 4.52, available: false },
      { id: "gid://shopify/ProductVariant/59251310461009", title: "Enjoy The Navy Blue / 30X220", price: 4.95, available: false },
      { id: "gid://shopify/ProductVariant/59251310493777", title: "Enjoy The Navy Blue / 30X240", price: 5.14, available: false },
      { id: "gid://shopify/ProductVariant/59251310526545", title: "Enjoy The Navy Blue / 30X260", price: 5.54, available: false },
      { id: "gid://shopify/ProductVariant/59251310559313", title: "Enjoy The Navy Blue / 30X300", price: 6.21, available: false },
    ],
  },
  "linen-tablecloth": {
    handle: "cotton-linen-dining-table-long-tablecloth",
    shopifyId: "gid://shopify/Product/15739019624529",
    variants: [
      { id: "gid://shopify/ProductVariant/59251307905105", title: "Royal Gray / 35X120", price: 3.84, available: false },
      { id: "gid://shopify/ProductVariant/59251307937873", title: "Royal Gray / 35X160", price: 4.74, available: false },
      { id: "gid://shopify/ProductVariant/59251307970641", title: "Royal Gray / 35X180", price: 5.09, available: false },
      { id: "gid://shopify/ProductVariant/59251308003409", title: "Royal Gray / 35X210", price: 5.67, available: false },
      { id: "gid://shopify/ProductVariant/59251308036177", title: "Royal Gray / 35X240", price: 5.94, available: false },
      { id: "gid://shopify/ProductVariant/59251308068945", title: "Royal Gray / 35X270", price: 6.5, available: false },
      { id: "gid://shopify/ProductVariant/59251308101713", title: "Royal Gray / 35X300", price: 7.09, available: false },
      { id: "gid://shopify/ProductVariant/59251308134481", title: "Royal Gray / 35X350", price: 7.91, available: false },
      { id: "gid://shopify/ProductVariant/59251308167249", title: "Farrow Coffee / 35X120", price: 3.84, available: false },
      { id: "gid://shopify/ProductVariant/59251308200017", title: "Farrow Coffee / 35X160", price: 4.74, available: false },
      { id: "gid://shopify/ProductVariant/59251308232785", title: "Farrow Coffee / 35X180", price: 5.09, available: false },
      { id: "gid://shopify/ProductVariant/59251308265553", title: "Farrow Coffee / 35X210", price: 5.67, available: false },
      { id: "gid://shopify/ProductVariant/59251308298321", title: "Farrow Coffee / 35X240", price: 5.94, available: false },
      { id: "gid://shopify/ProductVariant/59251308331089", title: "Farrow Coffee / 35X270", price: 6.5, available: false },
      { id: "gid://shopify/ProductVariant/59251308363857", title: "Farrow Coffee / 35X300", price: 7.09, available: false },
      { id: "gid://shopify/ProductVariant/59251308396625", title: "Farrow Coffee / 35X350", price: 7.91, available: false },
    ],
  },
  "macrame-wall-hanging": {
    handle: "hand-woven-pendant-macrame-wall-hanging-boho-woven-tapestry-bohemian-crafts-room-decoration-gorgeous-tapestry-for-home-decor",
    shopifyId: "gid://shopify/Product/15739019690065",
    variants: [
      { id: "gid://shopify/ProductVariant/59251308560465", title: "Beige", price: 10.43, available: false },
    ],
  },
  "magnetic-levitating-planter": {
    handle: "plants-float-in-air",
    shopifyId: "gid://shopify/Product/15739018969169",
    variants: [
      { id: "gid://shopify/ProductVariant/59251305414737", title: "Image / Uk", price: 73.4, available: true },
      { id: "gid://shopify/ProductVariant/59251305447505", title: "Image / Au", price: 73.4, available: true },
      { id: "gid://shopify/ProductVariant/59251305480273", title: "Image / Eu", price: 73.4, available: true },
      { id: "gid://shopify/ProductVariant/59251305513041", title: "Image / Us", price: 73.4, available: true },
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
  "midnight-marine-eau-de-parfum": {
    handle: "ycz-midnight-marine-eau-de-parfum-50ml-unisex-aromatic-aquatic-ocean-fresh-woody-perfume-with-bergamot-coconut-amber-long-lasting-luxury-arabian-fragrance-for-men-women-premium-gift",
    shopifyId: "gid://shopify/Product/15733070037073",
    variants: [
      { id: "gid://shopify/ProductVariant/59232893010001", title: "Default", price: 24.35, available: false },
    ],
  },
  "mixed-dried-flower-bouquet": {
    handle: "pastoral-simulation-retro-fake-dried-flowers",
    shopifyId: "gid://shopify/Product/15739019821137",
    variants: [
      { id: "gid://shopify/ProductVariant/59251309019217", title: "Champagne", price: 2.39, available: true },
      { id: "gid://shopify/ProductVariant/59251309051985", title: "Orange", price: 2.31, available: true },
      { id: "gid://shopify/ProductVariant/59251309084753", title: "Pink", price: 2.5, available: true },
      { id: "gid://shopify/ProductVariant/59251309117521", title: "White", price: 2.39, available: true },
      { id: "gid://shopify/ProductVariant/59251309150289", title: "Mix Colors 4Pcs", price: 8.66, available: true },
      { id: "gid://shopify/ProductVariant/59251309183057", title: "Orange 2Pcs", price: 4.31, available: true },
    ],
  },
  "moroccan-decorative-wall-plate": {
    handle: "2d-flat-moroccan-style-decorative-plate-aluminum-metal-wall-art-with-exquisite-floral-and-geometric-patterns-vibrant-blue-gre",
    shopifyId: "gid://shopify/Product/15733069381713",
    variants: [
      { id: "gid://shopify/ProductVariant/59232889995345", title: "Round 20X20Cm", price: 9.99, available: true },
    ],
  },
  "moroccan-mandorla-coaster-set": {
    handle: "8pcs-moroccan-mandorla-2d-wooden-coasters-set-artistic-circular-beverage-markers-for-coffee-tea-home-dining-table-decoration",
    shopifyId: "gid://shopify/Product/15733069480017",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890224721", title: "8Pcs / 10Cm / Round", price: 13.61, available: true },
    ],
  },
  "motion-sensing-cabinet-light": {
    handle: "led-wireless-self-adhesive-inductive-charging-shoe-cabinet-cabinet-light-strip",
    shopifyId: "gid://shopify/Product/15738951827537",
    variants: [
      { id: "gid://shopify/ProductVariant/59250901188689", title: "Silver Tricolor Light / 20Cm", price: 8.95, available: true },
      { id: "gid://shopify/ProductVariant/59250901221457", title: "Silver Tricolor Light / 30Cm", price: 11.71, available: true },
      { id: "gid://shopify/ProductVariant/59250901254225", title: "Silver Tricolor Light / 40Cm", price: 14.58, available: true },
      { id: "gid://shopify/ProductVariant/59250901286993", title: "Silver Tricolor Light / 60Cm", price: 20.32, available: true },
      { id: "gid://shopify/ProductVariant/59250901319761", title: "Black Tricolor Light / 20Cm", price: 8.95, available: true },
      { id: "gid://shopify/ProductVariant/59250901352529", title: "Black Tricolor Light / 30Cm", price: 11.71, available: true },
      { id: "gid://shopify/ProductVariant/59250901385297", title: "Black Tricolor Light / 40Cm", price: 14.58, available: true },
      { id: "gid://shopify/ProductVariant/59250901418065", title: "Black Tricolor Light / 60Cm", price: 20.32, available: true },
      { id: "gid://shopify/ProductVariant/59250901549137", title: "Black Tricolor Light / 80Cm", price: 26.04, available: true },
    ],
  },
  "multi-function-grater": {
    handle: "stainless-steel-cheese-grater-kitchen-tools-gadgets",
    shopifyId: "gid://shopify/Product/15739020279889",
    variants: [
      { id: "gid://shopify/ProductVariant/59251310919761", title: "Bagged", price: 4.5, available: true },
      { id: "gid://shopify/ProductVariant/59251310952529", title: "Two Cheese Grates Boxed", price: 8.56, available: true },
      { id: "gid://shopify/ProductVariant/59251310985297", title: "Single Cheese Planer Set Boxe", price: 7.91, available: true },
      { id: "gid://shopify/ProductVariant/59251311018065", title: "Boxed", price: 4.8, available: true },
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
  "nordic-decorative-figurine": {
    handle: "household-nordic-creative-furnishings-decoration",
    shopifyId: "gid://shopify/Product/15739019919441",
    variants: [
      { id: "gid://shopify/ProductVariant/59251309379665", title: "White Black Spot High", price: 10.13, available: false },
      { id: "gid://shopify/ProductVariant/59251309412433", title: "White Black Dot Round Style", price: 10.13, available: false },
      { id: "gid://shopify/ProductVariant/59251309445201", title: "Yellow Black Dot High Style", price: 10.13, available: false },
      { id: "gid://shopify/ProductVariant/59251309477969", title: "Yellow Black Dot Round Style", price: 10.13, available: false },
      { id: "gid://shopify/ProductVariant/59251309510737", title: "White Red Dot High Style", price: 10.13, available: false },
      { id: "gid://shopify/ProductVariant/59251309543505", title: "White Red Dot Round Style", price: 10.13, available: false },
    ],
  },
  "nordic-espresso-cup-saucer": {
    handle: "nordic-style-classic-coffee-cup-set-ceramic-high-end-mug",
    shopifyId: "gid://shopify/Product/15739019264081",
    variants: [
      { id: "gid://shopify/ProductVariant/59251307053137", title: "A", price: 21.42, available: true },
      { id: "gid://shopify/ProductVariant/59251307085905", title: "B", price: 21.42, available: true },
      { id: "gid://shopify/ProductVariant/59251307118673", title: "C", price: 11.09, available: true },
      { id: "gid://shopify/ProductVariant/59251307151441", title: "D", price: 11.09, available: true },
      { id: "gid://shopify/ProductVariant/59251307184209", title: "E", price: 7.86, available: true },
      { id: "gid://shopify/ProductVariant/59251307216977", title: "F", price: 7.86, available: true },
    ],
  },
  "nylon-kitchen-utensil": {
    handle: "nylon-strainer-large-scoop-colander-kitchen-appliances-spoon-shovel-soup-spoon-filter-cooking-tools-home-kitchen-accessories",
    shopifyId: "gid://shopify/Product/15738951467089",
    variants: [
      { id: "gid://shopify/ProductVariant/59250896339025", title: "Black", price: 1.08, available: false },
    ],
  },
  "pampas-grass-bouquet": {
    handle: "pampas-bohemian-decorative-dried-flowers-bouquet-natural-white-pampas-grass-fluffy-for-home-boho-decor-wedding-flower-arrangement",
    shopifyId: "gid://shopify/Product/15739022049361",
    variants: [
      { id: "gid://shopify/ProductVariant/59251312164945", title: "Combination 1 20Pcs", price: 2.48, available: true },
      { id: "gid://shopify/ProductVariant/59251312197713", title: "Combination 2 60Pcs", price: 4.66, available: true },
      { id: "gid://shopify/ProductVariant/59251312230481", title: "Combination 3 43Pcs", price: 4.52, available: true },
      { id: "gid://shopify/ProductVariant/59251312263249", title: "Combination 4 58Pcs", price: 5.09, available: true },
      { id: "gid://shopify/ProductVariant/59251312296017", title: "Combination 5 75Pcs", price: 5.14, available: true },
      { id: "gid://shopify/ProductVariant/59251312328785", title: "Combination 6 64Pcs", price: 4.24, available: true },
      { id: "gid://shopify/ProductVariant/59251312361553", title: "Combination 7 100Pcs", price: 5.54, available: true },
      { id: "gid://shopify/ProductVariant/59251312394321", title: "Combination 8 95Pcs", price: 5.94, available: true },
      { id: "gid://shopify/ProductVariant/59251312427089", title: "Combination 9 95Pcs", price: 5.41, available: true },
      { id: "gid://shopify/ProductVariant/59251312459857", title: "Combination 10 95Pcs", price: 3.96, available: true },
      { id: "gid://shopify/ProductVariant/59251312492625", title: "Combination 11 100Pcs", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251312525393", title: "Combination 12 12Pcs", price: 2.21, available: true },
      { id: "gid://shopify/ProductVariant/59251312558161", title: "Combination 13 96Pcs", price: 5.94, available: true },
      { id: "gid://shopify/ProductVariant/59251312590929", title: "Combination 14 110Pcs", price: 6.48, available: true },
      { id: "gid://shopify/ProductVariant/59251312623697", title: "Combination 15 67Pcs", price: 4.52, available: true },
      { id: "gid://shopify/ProductVariant/59251312656465", title: "Combination 16 120Pcs", price: 6.21, available: true },
      { id: "gid://shopify/ProductVariant/59251312689233", title: "Combination 17 100Pcs", price: 7.83, available: true },
      { id: "gid://shopify/ProductVariant/59251312722001", title: "Combination 18 50Pcs", price: 3.68, available: true },
      { id: "gid://shopify/ProductVariant/59251312754769", title: "Combination 19 80Pcs", price: 6.21, available: true },
      { id: "gid://shopify/ProductVariant/59251312787537", title: "Combination 20 64Pcs", price: 4.24, available: true },
      { id: "gid://shopify/ProductVariant/59251312820305", title: "Combination 21 100Pcs", price: 4.80, available: true },
      { id: "gid://shopify/ProductVariant/59251312853073", title: "Combination 22 80Pcs", price: 4.24, available: true },
      { id: "gid://shopify/ProductVariant/59251312885841", title: "Combination 23 100Pcs", price: 5.14, available: true },
      { id: "gid://shopify/ProductVariant/59251312918609", title: "Combination 24 30Pcs", price: 5.09, available: true },
    ],
  },
  "pet-blanket": {
    handle: "pet-quilt-blanket-winter-thick-coral-fleece-pet-winter-blanket-cushion-nest",
    shopifyId: "gid://shopify/Product/15739019886673",
    variants: [
      { id: "gid://shopify/ProductVariant/59251309314129", title: "Random Color / Small 50X70Cm", price: 2.07, available: true },
      { id: "gid://shopify/ProductVariant/59251309346897", title: "Random Color / Large 100X70Cm", price: 2.52, available: true },
    ],
  },
  "plush-round-rug": {
    handle: "hair-plush-carpet-floor-mats-household-floor-mats-wool-round-bedroom-carpets",
    shopifyId: "gid://shopify/Product/15739018739793",
    variants: [
      { id: "gid://shopify/ProductVariant/59251304071249", title: "White / 35*35Cm", price: 3.68, available: false },
      { id: "gid://shopify/ProductVariant/59251304104017", title: "Hite Brown Tip / 35*35Cm", price: 2.55, available: false },
      { id: "gid://shopify/ProductVariant/59251304136785", title: "Black / 35*35Cm", price: 2.63, available: false },
      { id: "gid://shopify/ProductVariant/59251304169553", title: "Lotus Root Pink / 35*35Cm", price: 2.55, available: false },
      { id: "gid://shopify/ProductVariant/59251304202321", title: "Light Gray / 35*35Cm", price: 2.55, available: false },
      { id: "gid://shopify/ProductVariant/59251304235089", title: "Black / 50X50Cm", price: 4.56, available: false },
      { id: "gid://shopify/ProductVariant/59251304267857", title: "Black / 60X60Cm", price: 6.4, available: false },
      { id: "gid://shopify/ProductVariant/59251304300625", title: "Light Gray / 50X50Cm", price: 4.56, available: false },
      { id: "gid://shopify/ProductVariant/59251304333393", title: "Light Gray / 60X60Cm", price: 6.4, available: false },
      { id: "gid://shopify/ProductVariant/59251304366161", title: "White / 50X50Cm", price: 3.68, available: false },
      { id: "gid://shopify/ProductVariant/59251304398929", title: "White / 60X60Cm", price: 3.68, available: false },
      { id: "gid://shopify/ProductVariant/59251304431697", title: "Hite Brown Tip / 50X50Cm", price: 4.56, available: false },
      { id: "gid://shopify/ProductVariant/59251304464465", title: "Hite Brown Tip / 60X60Cm", price: 6.21, available: false },
      { id: "gid://shopify/ProductVariant/59251304497233", title: "Lotus Root Pink / 50X50Cm", price: 4.56, available: false },
      { id: "gid://shopify/ProductVariant/59251304530001", title: "Lotus Root Pink / 60X60Cm", price: 6.21, available: false },
      { id: "gid://shopify/ProductVariant/59251304562769", title: "Black / 40X40Cm", price: 3.01, available: false },
      { id: "gid://shopify/ProductVariant/59251304595537", title: "White / 40X40Cm", price: 3.68, available: false },
    ],
  },
  "plush-shag-rug": {
    handle: "living-room-rug-area-solid-carpet-fluffy-soft-home-decor-white-plush-carpet-bedroom-carpet-kitchen-floor-mats-white-rug-tapete",
    shopifyId: "gid://shopify/Product/15738951696465",
    variants: [
      { id: "gid://shopify/ProductVariant/59250898763857", title: "Beige / 120X160Cm", price: 9.68, available: true },
      { id: "gid://shopify/ProductVariant/59250898829393", title: "White / 100X160Cm", price: 8.23, available: true },
      { id: "gid://shopify/ProductVariant/59250899058769", title: "Beige / 50X80Cm", price: 2.64, available: true },
      { id: "gid://shopify/ProductVariant/59250899517521", title: "White / 50X80Cm", price: 2.64, available: true },
      { id: "gid://shopify/ProductVariant/59250899648593", title: "White / 120X160Cm", price: 9.68, available: true },
      { id: "gid://shopify/ProductVariant/59250899681361", title: "Beige / 100X160Cm", price: 8.23, available: true },
      { id: "gid://shopify/ProductVariant/59250899714129", title: "White / 80X160Cm", price: 6.63, available: true },
      { id: "gid://shopify/ProductVariant/59250899746897", title: "White / 40X60Cm", price: 1.8, available: true },
      { id: "gid://shopify/ProductVariant/59250900074577", title: "Beige / 80X160Cm", price: 6.63, available: true },
      { id: "gid://shopify/ProductVariant/59250900107345", title: "Beige / 40X60Cm", price: 1.8, available: true },
    ],
  },
  "rapid-defrosting-board": {
    handle: "rapid-defrosting-board-aluminium-thawing-plate",
    shopifyId: "gid://shopify/Product/15737818710097",
    variants: [
      { id: "gid://shopify/ProductVariant/59248122298449", title: "Default Title", price: 22.0, available: true },
    ],
  },
  "rattan-serving-tray": {
    handle: "rattan-tray-8-7-inch-round-woven-serving-basket-with-handles-decorative-tray-for-coffee-table-bread-fruit-vegetables-restaurant-home-use",
    shopifyId: "gid://shopify/Product/15738954711121",
    variants: [
      { id: "gid://shopify/ProductVariant/59250916098129", title: "Brown", price: 24.75, available: true },
    ],
  },
  "rechargeable-ambient-table-lamp": {
    handle: "rechargeable-led-table-lamp-touch-switch-3-levels-dimmable-desk-lights-bar-club-dinner-creative-decorative-ambient-lighting",
    shopifyId: "gid://shopify/Product/15733069512785",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890191953", title: "White", price: 22.6, available: true },
    ],
  },
  "round-linen-table-lamp": {
    handle: "simple-round-linen-table-lamp",
    shopifyId: "gid://shopify/Product/15738954481745",
    variants: [
      { id: "gid://shopify/ProductVariant/59250915082321", title: "Uk", price: 11.65, available: true },
      { id: "gid://shopify/ProductVariant/59250915115089", title: "Us", price: 11.65, available: true },
      { id: "gid://shopify/ProductVariant/59250915147857", title: "Eu", price: 11.65, available: true },
    ],
  },
  "sculptural-glass-vase": {
    handle: "shape-creative-glass-vase-decoration-living-room-vase",
    shopifyId: "gid://shopify/Product/15739019558993",
    variants: [
      { id: "gid://shopify/ProductVariant/59251307774033", title: "Light Blue", price: 15.06, available: false },
      { id: "gid://shopify/ProductVariant/59251307806801", title: "Dark Blue", price: 7.86, available: false },
      { id: "gid://shopify/ProductVariant/59251307839569", title: "Yellow", price: 7.86, available: false },
    ],
  },
  "silence-figurine": {
    handle: "mask-gesture-ornament-finger-lip-sculpture-secret-keeping-home-decor-office-desk-decoration",
    shopifyId: "gid://shopify/Product/15735272210513",
    variants: [
      { id: "gid://shopify/ProductVariant/59243760418897", title: "Black", price: 8.72, available: true },
      { id: "gid://shopify/ProductVariant/59243760451665", title: "White", price: 8.86, available: true },
    ],
  },
  "silence-figurine-old": {
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
  "solar-garden-torch": {
    handle: "led-waterproof-solar-torch-light-lamp-outdoor-landscape-decoration-garden-lawn-light",
    shopifyId: "gid://shopify/Product/15739019722833",
    variants: [
      { id: "gid://shopify/ProductVariant/59251308593233", title: "96Led / 1Pcs", price: 7.7, available: true },
      { id: "gid://shopify/ProductVariant/59251308626001", title: "51Led / 4Pc", price: 21.31, available: true },
      { id: "gid://shopify/ProductVariant/59251308658769", title: "96Led / 4Pc", price: 29.48, available: true },
      { id: "gid://shopify/ProductVariant/59251308691537", title: "51Led / 1Pcs", price: 5.62, available: true },
    ],
  },
  "solar-pathway-light": {
    handle: "solar-garden-pathway-lights-lawn-lamp-for-garden-lantern-decoration-outdoor-path-light-wireless-waterproof-night-led-solar-lamp",
    shopifyId: "gid://shopify/Product/15738951762001",
    variants: [
      { id: "gid://shopify/ProductVariant/59250900631633", title: "Warm White 3Pcs", price: 3.25, available: true },
      { id: "gid://shopify/ProductVariant/59250900664401", title: "White Light 3Pcs", price: 3.25, available: true },
      { id: "gid://shopify/ProductVariant/59250900729937", title: "10 Pcs White Light", price: 9.59, available: true },
      { id: "gid://shopify/ProductVariant/59250900959313", title: "10 Pcs Warm White", price: 9.59, available: true },
    ],
  },
  "square-linen-table-lamp": {
    handle: "table-lamp-linen-square-table-lamp-study-bedside-table-lamp",
    shopifyId: "gid://shopify/Product/15738954547281",
    variants: [
      { id: "gid://shopify/ProductVariant/59250915442769", title: "Photo Color / Uk", price: 23.18, available: true },
      { id: "gid://shopify/ProductVariant/59250915475537", title: "Photo Color / Eu", price: 23.18, available: true },
      { id: "gid://shopify/ProductVariant/59250915508305", title: "Photo Color / Us", price: 23.18, available: true },
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
  "stainless-steel-peeler": {
    handle: "stainless-steel-peeling-knife-peeling-artifact-household-fruit-peeler-potato-apple-peeler-kitchen-vegetable-tool",
    shopifyId: "gid://shopify/Product/15733069414481",
    variants: [
      { id: "gid://shopify/ProductVariant/59232890028113", title: "B", price: 9.18, available: false },
      { id: "gid://shopify/ProductVariant/59232890060881", title: "A", price: 7.63, available: false },
    ],
  },
  "stoneware-travel-tea-set": {
    handle: "simple-stoneware-convenient-tea-cup-set-one-pot-one-cup-1-person-japanese-style-travel-portable-office-kung-fu-tea-set-teapot-souvenirs",
    shopifyId: "gid://shopify/Product/15738951630929",
    variants: [
      { id: "gid://shopify/ProductVariant/59250898141265", title: "One Pot One Cup With Cover", price: 2.61, available: true },
      { id: "gid://shopify/ProductVariant/59250898174033", title: "Capsule Bag", price: 4.47, available: true },
      { id: "gid://shopify/ProductVariant/59250898206801", title: "Travel Bag", price: 4.47, available: true },
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
  "teak-kitchen-utensil-set": {
    handle: "thailand-teak-natural-wood-tableware-spoon-ladle-turner-long-rice-colander-soup-skimmer-cooking-spoons-scoop-kitchen-tool-set",
    shopifyId: "gid://shopify/Product/15738951532625",
    variants: [
      { id: "gid://shopify/ProductVariant/59250897223761", title: "2Style", price: 3.54, available: true },
      { id: "gid://shopify/ProductVariant/59250897256529", title: "7Style", price: 2.63, available: true },
      { id: "gid://shopify/ProductVariant/59250897289297", title: "2Pc Set", price: 5.14, available: true },
      { id: "gid://shopify/ProductVariant/59250897322065", title: "4Pcset", price: 10.51, available: true },
      { id: "gid://shopify/ProductVariant/59250897354833", title: "Set1", price: 6.9, available: true },
      { id: "gid://shopify/ProductVariant/59250897387601", title: "8Pcsset2Pcs", price: 42.21, available: true },
      { id: "gid://shopify/ProductVariant/59250897420369", title: "Eight Piece Set", price: 14.5, available: true },
      { id: "gid://shopify/ProductVariant/59250897453137", title: "9Set", price: 16.91, available: true },
      { id: "gid://shopify/ProductVariant/59250897485905", title: "Lao Shao San Xian", price: 2.72, available: true },
      { id: "gid://shopify/ProductVariant/59250897518673", title: "4Set", price: 9.28, available: true },
      { id: "gid://shopify/ProductVariant/59250897551441", title: "A Soup Spoon", price: 2.98, available: true },
      { id: "gid://shopify/ProductVariant/59250897584209", title: "Fishing Spoon", price: 2.72, available: true },
      { id: "gid://shopify/ProductVariant/59250897616977", title: "Pot Shovel", price: 2.63, available: true },
      { id: "gid://shopify/ProductVariant/59250897649745", title: "Fangguo Shovel", price: 3.09, available: true },
      { id: "gid://shopify/ProductVariant/59250897682513", title: "Threeline Shovel", price: 2.63, available: true },
      { id: "gid://shopify/ProductVariant/59250897715281", title: "Set2", price: 20.37, available: true },
      { id: "gid://shopify/ProductVariant/59250897748049", title: "5Piece Set", price: 14.9, available: true },
      { id: "gid://shopify/ProductVariant/59250897780817", title: "10 Piece Set", price: 24.11, available: true },
      { id: "gid://shopify/ProductVariant/59250897813585", title: "4 Set", price: 11.58, available: true },
      { id: "gid://shopify/ProductVariant/59250897846353", title: "7 Set", price: 15.17, available: true },
      { id: "gid://shopify/ProductVariant/59250897879121", title: "3Style", price: 8.23, available: true },
      { id: "gid://shopify/ProductVariant/59250897911889", title: "Set", price: 17.55, available: true },
      { id: "gid://shopify/ProductVariant/59250897944657", title: "1Style", price: 3.25, available: true },
      { id: "gid://shopify/ProductVariant/59250897977425", title: "5Style", price: 2.63, available: true },
      { id: "gid://shopify/ProductVariant/59250898010193", title: "6Style", price: 3.96, available: true },
      { id: "gid://shopify/ProductVariant/59250898042961", title: "4Style", price: 2.21, available: true },
      { id: "gid://shopify/ProductVariant/59250898075729", title: "8 Pcs Set", price: 22.96, available: true },
      { id: "gid://shopify/ProductVariant/59250898108497", title: "8Style", price: 3.67, available: true },
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
  "tufted-tassel-cushion": {
    handle: "home-furnishing-tufted-throw-pillow-with-tassels-sofa-pillow-cushion",
    shopifyId: "gid://shopify/Product/15739018707025",
    variants: [
      { id: "gid://shopify/ProductVariant/59251303809105", title: "Beige Square Pillow / Pillowcase", price: 9.79, available: true },
      { id: "gid://shopify/ProductVariant/59251303841873", title: "Beige Square Pillow / Pillowcase And Pillow Core", price: 13.04, available: true },
      { id: "gid://shopify/ProductVariant/59251303874641", title: "Beige Waist Pillow / Pillowcase", price: 8.98, available: true },
      { id: "gid://shopify/ProductVariant/59251303907409", title: "Beige Waist Pillow / Pillowcase And Pillow Core", price: 12.1, available: true },
      { id: "gid://shopify/ProductVariant/59251303940177", title: "Yellow Square Pillow / Pillowcase", price: 9.79, available: true },
      { id: "gid://shopify/ProductVariant/59251303972945", title: "Yellow Square Pillow / Pillowcase And Pillow Core", price: 13.04, available: true },
      { id: "gid://shopify/ProductVariant/59251304005713", title: "Yellow Waist Pillow / Pillowcase", price: 8.98, available: true },
      { id: "gid://shopify/ProductVariant/59251304038481", title: "Yellow Waist Pillow / Pillowcase And Pillow Core", price: 12.1, available: true },
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
  "velvet-stripe-cushion-cover": {
    handle: "simple-luxury-striped-velvet-pillow-cover-pillow-cushion-cover-pillow-case-covers-for-sofa-flannel-velvet-sofa-cushion-cover",
    shopifyId: "gid://shopify/Product/15739018838097",
    variants: [
      { id: "gid://shopify/ProductVariant/59251304824913", title: "White", price: 3.51, available: true },
      { id: "gid://shopify/ProductVariant/59251304857681", title: "Silver Gray", price: 3.51, available: true },
      { id: "gid://shopify/ProductVariant/59251304890449", title: "Yellow", price: 3.51, available: true },
      { id: "gid://shopify/ProductVariant/59251304923217", title: "Black", price: 3.51, available: true },
      { id: "gid://shopify/ProductVariant/59251304955985", title: "Wine Red", price: 3.51, available: true },
      { id: "gid://shopify/ProductVariant/59251304988753", title: "Blue", price: 3.51, available: true },
      { id: "gid://shopify/ProductVariant/59251305021521", title: "White And Pink Towel Set", price: 7.67, available: true },
    ],
  },
  "vintage-japanese-ceramic-mug": {
    handle: "vintage-japanese-ceramic-coffee-mug-elegant-breakfast-milk-mug-for-your-morning-latte-stylish-water-cup-for-the-office",
    shopifyId: "gid://shopify/Product/15734964584529",
    variants: [
      { id: "gid://shopify/ProductVariant/59241560014929", title: "Cup / 200Ml", price: 28.79, available: true },
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
  "waffle-weave-cotton-dish-cloths": {
    handle: "100-cotton-waffle-weave-kitchen-dish-cloths-ultra-soft-absorbent-quick-drying-dish-towels-household-tableware-towels-3-pack",
    shopifyId: "gid://shopify/Product/15734963863633",
    variants: [
      { id: "gid://shopify/ProductVariant/59241558638673", title: "Grey / 3Pcs", price: 17.83, available: true },
      { id: "gid://shopify/ProductVariant/59241558671441", title: "Green / 3Pcs", price: 18.05, available: true },
      { id: "gid://shopify/ProductVariant/59241558704209", title: "Pink / 3Pcs", price: 17.94, available: true },
    ],
  },
  "wax-melt-aromatherapy-lamp": {
    handle: "japanese-style-melting-wax-lamp-decoration-bedroom-creative-personality-aromatherapy-light",
    shopifyId: "gid://shopify/Product/15738951958609",
    variants: [
      { id: "gid://shopify/ProductVariant/59250903875665", title: "White Cover Dimmer Switch / Mainland 220V2 Light Sources", price: 22.86, available: true },
      { id: "gid://shopify/ProductVariant/59250903908433", title: "White Cover Dimmer Switch / Taiwan 110V2 Light Sources", price: 22.86, available: true },
      { id: "gid://shopify/ProductVariant/59250903941201", title: "White Cover Dimmer Switch / Hong Kong And Macao Version Of", price: 22.86, available: true },
      { id: "gid://shopify/ProductVariant/59250903973969", title: "White Cover Dimmer Switch / American And Japanese Version", price: 22.86, available: true },
      { id: "gid://shopify/ProductVariant/59250904006737", title: "White Cover Dimmer Switch / Europeankorean Conversion Hea", price: 22.86, available: true },
    ],
  },
  "whole-wood-log-snack-plate": {
    handle: "whole-wood-log-snack-plate",
    shopifyId: "gid://shopify/Product/15738954186833",
    variants: [
      { id: "gid://shopify/ProductVariant/59250913706065", title: "C", price: 11.09, available: true },
      { id: "gid://shopify/ProductVariant/59250913738833", title: "E", price: 8.85, available: true },
      { id: "gid://shopify/ProductVariant/59250913771601", title: "D", price: 14.56, available: true },
      { id: "gid://shopify/ProductVariant/59250913804369", title: "B", price: 11.09, available: true },
      { id: "gid://shopify/ProductVariant/59250913837137", title: "A", price: 8.85, available: true },
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
  "woven-bamboo-table-lamp": {
    handle: "bamboo-woven-table-lamp-japanese-style-zen-bedroom-living-room",
    shopifyId: "gid://shopify/Product/15739018870865",
    variants: [
      { id: "gid://shopify/ProductVariant/59251305054289", title: "18X40Cm / Us", price: 29.31, available: true },
      { id: "gid://shopify/ProductVariant/59251305087057", title: "18X40Cm / Eu", price: 29.31, available: true },
      { id: "gid://shopify/ProductVariant/59251305119825", title: "18X40Cm / Uk", price: 29.31, available: true },
      { id: "gid://shopify/ProductVariant/59251305152593", title: "18X40Cm / Au", price: 29.31, available: true },
      { id: "gid://shopify/ProductVariant/59251305185361", title: "23X36Cm / Us", price: 26.68, available: true },
      { id: "gid://shopify/ProductVariant/59251305218129", title: "23X36Cm / Eu", price: 26.68, available: true },
      { id: "gid://shopify/ProductVariant/59251305250897", title: "23X36Cm / Uk", price: 26.68, available: true },
      { id: "gid://shopify/ProductVariant/59251305283665", title: "23X36Cm / Au", price: 26.68, available: true },
    ],
  },
  "woven-hanging-planter": {
    handle: "straw-hanging-baskets-flower-baskets-woven-flower-pots-rattan-baskets-chlorophytum-potted-plants-flower-baskets-flower-pots-bamboo-baskets-flower-baskets",
    shopifyId: "gid://shopify/Product/15739019329617",
    variants: [
      { id: "gid://shopify/ProductVariant/59251307315281", title: "Grey", price: 3.88, available: true },
      { id: "gid://shopify/ProductVariant/59251307348049", title: "Coffee", price: 3.88, available: true },
      { id: "gid://shopify/ProductVariant/59251307380817", title: "Yellow", price: 3.88, available: true },
    ],
  },
  "mushroom-night-light": {
    handle: "ins-wooden-cute-mushroom-led-night-light-with-touch-switch-bedside-table-lamp-for-bedroom-childrens-room-sleeping-night-lamps-home-decor",
    shopifyId: "gid://shopify/Product/15738951008337",
    variants: [
      { id: "gid://shopify/ProductVariant/59250893684817", title: "A / Walnut Color / 2.4W", price: 18.37, available: true },
      { id: "gid://shopify/ProductVariant/59250893717585", title: "A / Beech / 2.4W", price: 18.37, available: true },
      { id: "gid://shopify/ProductVariant/59250893750353", title: "B / Walnut Color / 2.4W", price: 18.37, available: true },
      { id: "gid://shopify/ProductVariant/59250893783121", title: "B / Beech / 2.4W", price: 18.37, available: true },
      { id: "gid://shopify/ProductVariant/59250893815889", title: "C / Walnut Color / 2.4W", price: 15.79, available: true },
      { id: "gid://shopify/ProductVariant/59250893848657", title: "C / Beech / 2.4W", price: 15.79, available: true },
      { id: "gid://shopify/ProductVariant/59250893881425", title: "D / Walnut Color / 2.4W", price: 15.79, available: true },
      { id: "gid://shopify/ProductVariant/59250893914193", title: "D / Beech / 2.4W", price: 15.79, available: true },
    ],
  }
};
