// HEARTH CURATED — Product Catalog
// 79 CJ Dropshipping products across 5 collections
// Currency: SGD. All prices end in .00

export interface Variant {
  id: string;
  label: string;
  price: number;
  available: boolean;
  shopifyVariantId?: string;
  image?: string;
  designGroup?: string; // For 2-tier variants: groups variants by design (e.g., "Design A")
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  price: number;
  collection: string;
  collectionSlug: string;
  image: string;
  tags: string[];
  notes?: string;
  variants?: Variant[];
  crossSells?: string[];
  available: boolean;
  hookLine?: string;
  images?: string[];
  shopifyHandle?: string;
  shopifyVariantId?: string;
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: Product[];
}

const FREE_SHIPPING_THRESHOLD = 70;
export { FREE_SHIPPING_THRESHOLD };

export const PRODUCTS: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // FEAST — The Ritual Meal
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "feast-1",
    slug: "ceramic-seasoning-pot-set",
    name: "Ceramic Seasoning Pot Set",
    headline: "The Considered Counter",
    hookLine: "Three ceramic pots with bamboo lids on an acacia tray — for salt, sugar, and spice.",
    description:
      "A set of three white ceramic seasoning pots with bamboo lids, arranged on an acacia wood tray. The kind of quiet upgrade that transforms a kitchen counter from functional to considered. Each pot is sized for daily-use condiments — salt, sugar, pepper — and the bamboo lids seal with a satisfying click that keeps moisture out and freshness in.",
    price: 38.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-seasoning-pot-set_ca07ef7c.jpg",
    tags: ["seasoning", "ceramic", "bamboo", "kitchen", "storage"],
    notes: "3 pots · Bamboo lids · Acacia tray included",
    available: true,
    crossSells: ["feast-14", "feast-2", "feast-19"],
      variants: [
        { id: "ceramic-seasoning-pot-set-a", label: "Classic White", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250895978577", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/seasoning-pot-white-SbuJsUDGvhJ6sNhHsWy5Zc.webp" },
        { id: "ceramic-seasoning-pot-set-b", label: "Matte Grey", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896011345", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/seasoning-pot-grey-P7VPzDJny3JvXjdTJPmonN.webp" },
        { id: "ceramic-seasoning-pot-set-c", label: "Sage Green", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896044113", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/seasoning-pot-sage-cDMmL7Bb8gEiV9turTSrr3.webp" }
      ]
  },
  {
    id: "feast-2",
    slug: "teak-kitchen-utensil-set",
    name: "Teak Kitchen Utensil Set",
    headline: "The Natural Kitchen",
    hookLine: "Hand-finished teak utensils — spoon, ladle, turner, spatula — that never scratch non-stick.",
    description:
      "A set of hand-finished teak wood cooking utensils — spoon, ladle, turner, and spatula — each one carved from natural teak with the density and oil content that makes this wood the material of choice for serious kitchens. Teak is naturally antimicrobial, heat-resistant, and develops a rich patina over years of use.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc.jpg",
    tags: ["utensils", "teak", "wood", "cooking", "natural"],
    notes: "Teak wood · Antimicrobial · Heat-resistant",
    available: true,
    variants: [
        { id: "teak-kitchen-utensil-set-2style", label: "2Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897223761" },
        { id: "teak-kitchen-utensil-set-7style", label: "7Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897256529" },
        { id: "teak-kitchen-utensil-set-2pc-set", label: "2Pc Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897289297" },
        { id: "teak-kitchen-utensil-set-4pcset", label: "4Pcset", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897322065" },
        { id: "teak-kitchen-utensil-set-set1", label: "Set1", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897354833" },
        { id: "teak-kitchen-utensil-set-8pcsset2pcs", label: "8Pcsset2Pcs", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897387601" },
        { id: "teak-kitchen-utensil-set-eight-piece-set", label: "Eight Piece Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897420369" },
        { id: "teak-kitchen-utensil-set-9set", label: "9Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897453137" },
        { id: "teak-kitchen-utensil-set-lao-shao-san-xian", label: "Lao Shao San Xian", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897485905" },
        { id: "teak-kitchen-utensil-set-4set", label: "4Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897518673" },
        { id: "teak-kitchen-utensil-set-a-soup-spoon", label: "A Soup Spoon", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897551441" },
        { id: "teak-kitchen-utensil-set-fishing-spoon", label: "Fishing Spoon", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897584209" },
        { id: "teak-kitchen-utensil-set-pot-shovel", label: "Pot Shovel", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897616977" },
        { id: "teak-kitchen-utensil-set-fangguo-shovel", label: "Fangguo Shovel", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897649745" },
        { id: "teak-kitchen-utensil-set-threeline-shovel", label: "Threeline Shovel", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897682513" },
        { id: "teak-kitchen-utensil-set-set2", label: "Set2", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897715281" },
        { id: "teak-kitchen-utensil-set-5piece-set", label: "5Piece Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897748049" },
        { id: "teak-kitchen-utensil-set-10-piece-set", label: "10 Piece Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897780817" },
        { id: "teak-kitchen-utensil-set-4-set", label: "4 Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897813585" },
        { id: "teak-kitchen-utensil-set-7-set", label: "7 Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897846353" },
        { id: "teak-kitchen-utensil-set-3style", label: "3Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897879121" },
        { id: "teak-kitchen-utensil-set-set", label: "Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897911889" },
        { id: "teak-kitchen-utensil-set-1style", label: "1Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897944657" },
        { id: "teak-kitchen-utensil-set-5style", label: "5Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897977425" },
        { id: "teak-kitchen-utensil-set-6style", label: "6Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898010193" },
        { id: "teak-kitchen-utensil-set-4style", label: "4Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898042961" },
        { id: "teak-kitchen-utensil-set-8-pcs-set", label: "8 Pcs Set", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898075729" },
        { id: "teak-kitchen-utensil-set-8style", label: "8Style", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898108497" }
      ],
    crossSells: ["feast-21", "feast-22", "feast-1"],
  },
  {
    id: "feast-3",
    slug: "japanese-ceramic-spoon-set",
    name: "Japanese Ceramic Spoon Set",
    headline: "The Small Ritual",
    hookLine: "Decorative ceramic spoons in varied glazes — for condiments, tasting, and quiet beauty.",
    description:
      "A set of small ceramic spoons in varied glazes — white, blue, earth tones — designed for condiments, tasting, and the small rituals of the table. Each spoon has a slightly different character due to the reactive glazing process, making every set unique.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712.jpg",
    tags: ["spoon", "ceramic", "japanese", "condiment", "tabletop"],
    notes: "Reactive glaze · Set of 4 · Dishwasher safe",
    available: true,
    variants: [
        { id: "japanese-ceramic-spoon-set-1", label: "Default Title", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59244860997713" }
      ],
    crossSells: ["feast-6", "feast-5", "feast-27"],
  },
  {
    id: "feast-4",
    slug: "japanese-matcha-ceremony-set",
    name: "Japanese Matcha Ceremony Set",
    headline: "The Complete Ritual",
    hookLine: "A six-piece matcha set — bowl, whisk, holder, scoop, sieve, and spoon.",
    description:
      "A complete matcha ceremony set in six pieces — everything you need to transform a morning cup of green tea into a meditative ritual. The bamboo chasen (whisk) has 80 fine tines for a perfect froth, the ceramic chawan (bowl) has a smooth matte finish and pouring spout, and the bamboo scoop and spoon are carved from a single piece.",
    price: 52.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/matcha-ceremony-set-YzUfx6sWuYvgwA4dBTVmrq.webp",
    tags: ["matcha", "tea", "ceremony", "bamboo", "whisk", "ceramic", "bowl", "japanese"],
    notes: "6 pieces: bowl, whisk, holder, scoop, sieve, spoon · Gift box included",
    available: true,
    variants: [
        { id: "japanese-matcha-ceremony-set-clear-glaze-7pieces", label: "Clear Glaze / 7Pieces Black", price: 52.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631316561" },
        { id: "japanese-matcha-ceremony-set-clear-glaze-7piece-s", label: "Clear Glaze / 7Piece Set Painted In Brown", price: 52.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631349329" },
        { id: "japanese-matcha-ceremony-set-clear-glaze-7piece-s", label: "Clear Glaze / 7Piece Set Green", price: 52.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631414865" }
      ],
    crossSells: ["feast-5", "feast-29", "feast-30"],
  },
  {
    id: "feast-5",
    slug: "stoneware-travel-tea-set",
    name: "Stoneware Travel Tea Set",
    headline: "The Portable Ceremony",
    hookLine: "Compact stoneware teapot with one cup — ritual wherever you go.",
    description:
      "A compact stoneware tea set — one teapot and one cup — designed for the person who refuses to compromise on their tea ritual, even on the move. The teapot nests perfectly inside the cup for travel, and the matte glaze has the tactile warmth of traditional Japanese pottery.",
    price: 42.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kungfu-tea-black_5dfadd01.jpg",
    tags: ["tea", "stoneware", "travel", "japanese", "portable"],
    notes: "Stoneware · Nesting design · Matte glaze",
    available: true,
    variants: [
        { id: "stoneware-travel-tea-set-one-pot-one-cup-with", label: "One Pot One Cup With Cover", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898141265" },
        { id: "stoneware-travel-tea-set-capsule-bag", label: "Capsule Bag", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898174033" },
        { id: "stoneware-travel-tea-set-travel-bag", label: "Travel Bag", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898206801" }
      ],
    crossSells: ["feast-4", "feast-29", "feast-30"],
  },
  {
    id: "feast-6",
    slug: "japanese-irregular-dinner-plate",
    name: "Japanese Irregular Dinner Plate",
    headline: "The Imperfect Surface",
    hookLine: "Organic-shaped ceramic plates with reactive glaze — no two alike.",
    description:
      "A ceramic dinner plate with organic, irregular edges and a reactive glaze that creates unique earth-tone patterns on every piece. The deliberate imperfection is the point — each plate is a one-of-a-kind surface that makes even a simple meal feel like an occasion.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0.png",
    tags: ["plate", "ceramic", "japanese", "irregular", "reactive-glaze"],
    notes: "Reactive glaze · Organic edges · Dishwasher safe",
    available: true,
    variants: [
        { id: "japanese-irregular-dinner-plate-big-flat-4pcs", label: "Big Flat 4Pcs", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248630890577" },
        { id: "japanese-irregular-dinner-plate-bowl-4pcs", label: "Bowl 4Pcs", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248630923345" },
        { id: "japanese-irregular-dinner-plate-mug-4pcs", label: "Mug 4Pcs", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248630956113" },
        { id: "japanese-irregular-dinner-plate-small-plate-4pcs", label: "Small Plate 4Pcs", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248630988881" },
        { id: "japanese-irregular-dinner-plate-4pcs-set", label: "4Pcs Set", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631021649" },
        { id: "japanese-irregular-dinner-plate-bowl", label: "Bowl", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631054417" },
        { id: "japanese-irregular-dinner-plate-mug", label: "Mug", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631087185" },
        { id: "japanese-irregular-dinner-plate-big-flat", label: "Big Flat", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631119953" },
        { id: "japanese-irregular-dinner-plate-small-plate", label: "Small Plate", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248631152721" }
      ],
    crossSells: ["feast-3", "feast-27", "feast-29"],
  },
  {
    id: "feast-7",
    slug: "black-walnut-serving-tray",
    name: "Black Walnut Serving Tray",
    headline: "The Dark Surface",
    hookLine: "Rectangular dark walnut tray with resin accents — for serving or display.",
    description:
      "A rectangular serving tray in black walnut wood with subtle resin accents — the kind of surface that makes everything placed on it look more intentional. The dark grain of walnut has a depth and warmth that lighter woods cannot match.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_h5yR1lOBdACYrN0JjtB3NO_1774801355643_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFja193YWxudXRfc2VydmluZ190cmF5_b3f7bd20.png",
    tags: ["tray", "walnut", "wood", "serving", "resin"],
    notes: "Black walnut · Resin accents · Food-safe finish",
    available: true,
    crossSells: ["feast-8", "feast-9", "feast-10"],
      variants: [
        { id: "black-walnut-serving-tray-walnut-transparent-s", label: "Transparent 29cm", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901057617" },
        { id: "black-walnut-serving-tray-walnut-blue-square-2", label: "Blue 29cm", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901090385" },
        { id: "black-walnut-serving-tray-walnut-blue-square-3", label: "Blue 36cm", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901123153" },
        { id: "black-walnut-serving-tray-walnut-blue-square-p", label: "Blue Plate", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901155921" }
      ]
  },
  {
    id: "feast-8",
    slug: "acacia-serving-bowl",
    name: "Acacia Serving Bowl",
    headline: "The Honest Vessel",
    hookLine: "A hand-finished wooden bowl for fruit, salad, or simply being beautiful.",
    description:
      "A natural wooden bowl with the kind of quiet presence that makes you want to fill it with something beautiful — or leave it empty and let the grain speak for itself. Hand-finished from a single piece of solid acacia wood.",
    price: 68.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wooden-bowl-natural-TkYrmhoM7fEfyQSxASBKHJ.webp",
    tags: ["bowl", "acacia", "wood", "serving", "fruit"],
    notes: "Solid acacia · Hand-finished · Multiple sizes",
    available: true,
    variants: [
      { id: "feast-8-s", label: "Small (12×6cm)", price: 28.00, available: true },
      { id: "feast-8-m", label: "Medium (18×7.5cm)", price: 48.00, available: true },
      { id: "feast-8-l", label: "Large (24×8cm)", price: 68.00, available: true },
    ],
    crossSells: ["feast-9", "feast-10", "feast-8"],
  },
  {
    id: "feast-9",
    slug: "jujube-wood-serving-basin",
    name: "Jujube Wood Serving Basin",
    headline: "The Generous Bowl",
    hookLine: "A deep basin carved from jujube wood — for salads, fruit, or centrepiece arrangements.",
    description:
      "A large, deep serving basin carved from jujube wood — a dense, fine-grained hardwood prized in East Asian woodworking for its durability and beautiful reddish-brown colour.",
    price: 68.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/6_oWQNG9GJH3EqBrrdX5CaOs_1774801319016_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qdWp1YmVfd29vZF9zZXJ2aW5nX2Jhc2lu_7101675f.png",
    tags: ["basin", "jujube", "wood", "serving", "large"],
    notes: "Jujube wood · Hand-carved · Food-safe finish",
    available: true,
    variants: [
        { id: "jujube-wood-serving-basin-16to20cm", label: "16To", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913411153" },
        { id: "jujube-wood-serving-basin-20to24cm", label: "20To", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913443921" }
      ],
    crossSells: ["feast-8", "feast-10", "feast-7"],
  },
  {
    id: "feast-10",
    slug: "whole-wood-log-snack-plate",
    name: "Whole Wood Log Snack Plate",
    headline: "The Found Object",
    hookLine: "A cross-section of natural log with bark edge — for cheese, bread, or display.",
    description:
      "A small wooden plate made from a cross-section of natural log, with the bark edge preserved — the kind of object that looks like it was found on a forest walk rather than purchased.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/7_cYtwWWqJZM8E12sp1BLDSO_1774801329804_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ydXN0aWNfbG9nX3NuYWNrX3BsYXRl_3d20143b.jpg",
    tags: ["plate", "log", "rustic", "bark", "natural"],
    notes: "Whole log cross-section · Natural bark edge · Food-safe finish",
    available: true,
    variants: [
        { id: "whole-wood-log-snack-plate-c", label: "Style C", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913706065" },
        { id: "whole-wood-log-snack-plate-e", label: "Style E", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913738833" },
        { id: "whole-wood-log-snack-plate-d", label: "Style D", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913771601" },
        { id: "whole-wood-log-snack-plate-b", label: "Style B", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913804369" },
        { id: "whole-wood-log-snack-plate-a", label: "Style A", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913837137" }
      ],
    crossSells: ["feast-8", "feast-7", "feast-17"],
  },
  {
    id: "feast-11",
    slug: "handmade-wooden-cup",
    name: "Handmade Wooden Cup",
    headline: "The Warm Vessel",
    hookLine: "A solid wood drinking cup, handmade with visible grain — warm to the touch.",
    description:
      "A single solid wood drinking cup, handmade with visible grain and a warm honey tone. The kind of vessel that changes the way you drink — the wood is warm to the touch, the weight is reassuring, and the natural grain makes each cup a unique object.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wooden-water-cup-fix_5431b50a.jpg",
    tags: ["cup", "wood", "handmade", "natural", "drinking"],
    notes: "Solid wood · Handmade · Food-safe lacquer",
    available: true,
    crossSells: ["feast-5", "feast-10", "feast-8"],
      variants: [
        { id: "handmade-wooden-cup-wooden-cup", label: "Natural Wood", price: 22.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59250914328657" }
      ]
  },
  {
    id: "feast-12",
    slug: "bamboo-glass-storage-container",
    name: "Bamboo & Glass Storage Container",
    headline: "The Visible Pantry",
    hookLine: "Glass containers with bamboo lids — see what you have, keep it fresh.",
    description:
      "A glass food storage container with a bamboo and wood lid that seals airtight. The transparency of glass means you always know what you have and how much is left, while the bamboo lid adds warmth to what could otherwise be a clinical kitchen object.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/9_uPuVsVxCLyyvnnhGI2ZDy0_1774801308305_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9iYW1ib29fZ2xhc3Nfc3RvcmFnZV9jb250YWluZXI_55add6b1.png",
    tags: ["container", "glass", "bamboo", "storage", "airtight"],
    notes: "Borosilicate glass · Bamboo lid · Airtight seal",
    available: true,
    variants: [
      { id: "feast-12-s", label: "Small (500ml)", price: 22.00, available: true },
      { id: "feast-12-m", label: "Medium (1L)", price: 28.00, available: true },
      { id: "feast-12-l", label: "Large (1.5L)", price: 34.00, available: true },
    ],
    crossSells: ["feast-1", "feast-14", "feast-28"],
  },

  {
    id: "feast-14",
    slug: "acacia-salt-pepper-mill",
    name: "Acacia Salt & Pepper Mill",
    headline: "The Grind That Matters",
    hookLine: "Acacia wood mills with adjustable ceramic grinders — from fine dust to coarse crack.",
    description:
      "A salt and pepper mill in acacia wood with an adjustable ceramic grinding mechanism — the kind of kitchen tool that earns its place on the counter rather than hiding in a drawer.",
    price: 58.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/13_O8zsgqgOENs4nD9bd9DMpM_1774599066542_na1fn_L2hvbWUvdWJ1bnR1L2FjYWNpYV9zYWx0X3BlcHBlcl9taWxs_154712be_141f7ec5.webp",
    tags: ["salt", "pepper", "mill", "grinder", "acacia", "wood"],
    notes: "Acacia wood · Ceramic grinder · Adjustable coarseness",
    available: true,
    variants: [
      { id: "feast-14-base", label: "Wooden Display Base", price: 38.00, available: true },
      { id: "feast-14-6", label: "6-Inch Mill", price: 58.00, available: true },
      { id: "feast-14-8", label: "8-Inch Mill", price: 68.00, available: true },
      { id: "feast-14-10", label: "10-Inch Mill", price: 78.00, available: true },
    ],
    crossSells: ["feast-1", "feast-2", "feast-15"],
  },
  {
    id: "feast-15",
    slug: "acacia-magnetic-knife-block",
    name: "Acacia Magnetic Knife Block",
    headline: "Blades on Display",
    hookLine: "Solid acacia with rare-earth magnets for a full knife set.",
    description:
      "A magnetic knife block carved from solid acacia wood, with embedded rare-earth magnets strong enough to hold a full set of kitchen knives. The open design keeps blades visible, accessible, and properly aired.",
    price: 148.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knife-block-main_b9237421.jpg",
    tags: ["knife-block", "acacia", "magnetic", "kitchen"],
    notes: "Solid acacia · Rare-earth magnets · Holds full set",
    available: true,
    crossSells: ["feast-21", "feast-2", "feast-14"],
      variants: [
        { id: "acacia-magnetic-knife-block-yellow", label: "Natural Acacia", price: 148.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914951249" }
      ]
  },
  {
    id: "feast-16",
    slug: "hand-painted-ceramic-oil-cruet",
    name: "Hand-Painted Ceramic Oil Cruet",
    headline: "The Daily Pour",
    hookLine: "A ceramic cruet with a drip-free spout — hand-painted in the tradition of Mediterranean pottery.",
    description:
      "A ceramic oil cruet with a drip-free spout, hand-painted in the tradition of Mediterranean pottery. The kind of object that makes you reach for the olive oil more often.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-7_d51e71cc_5c98de32.webp",
    tags: ["oil", "cruet", "ceramic", "hand-painted", "kitchen"],
    notes: "Ceramic · Drip-free spout · Hand-painted",
    available: true,
    variants: [
        { id: "hand-painted-ceramic-oil-cruet-olive-green", label: "Olive Green", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915541073" }
      ],
    crossSells: ["feast-1", "feast-14", "feast-6"],
  },
  {
    id: "feast-17",
    slug: "rattan-serving-tray",
    name: "Rattan Serving Tray",
    headline: "The Woven Surface",
    hookLine: "Hand-woven rattan tray with handles — for breakfast in bed or afternoon tea.",
    description:
      "A hand-woven rattan serving tray with sturdy handles — the kind of surface that transforms a cup of tea and a biscuit into a ritual. The natural rattan is lightweight yet strong, and develops a beautiful golden patina over time.",
    price: 38.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-3_62131da8_b12fb5bf.webp",
    tags: ["tray", "rattan", "woven", "serving", "natural"],
    notes: "Hand-woven rattan · Sturdy handles · Multiple sizes",
    available: true,
    variants: [
        { id: "rattan-serving-tray-brown", label: "Brown", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250916098129" }
      ],
    crossSells: ["feast-7", "feast-18", "feast-8"],
  },
  {
    id: "feast-18",
    slug: "acacia-serving-tray",
    name: "Acacia Serving Tray",
    headline: "The Honest Tray",
    hookLine: "Solid acacia wood tray with raised edges — for serving, display, or organisation.",
    description:
      "A solid acacia wood serving tray with gently raised edges and a smooth, food-safe finish. The natural grain patterns make each tray unique, and the generous proportions make it equally at home on a dining table or a coffee table.",
    price: 58.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-snack-board-JsRznA9VJK3iezhSZ3Kvvv.webp",
    tags: ["tray", "acacia", "wood", "serving"],
    notes: "Solid acacia · Food-safe finish · Raised edges",
    available: true,
    crossSells: ["feast-7", "feast-17", "feast-8"],
      variants: [
        { id: "acacia-serving-tray-pallet", label: "Natural Acacia", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915573841" }
      ]
  },
  {
    id: "feast-19",
    slug: "japanese-wooden-coaster-set",
    name: "Japanese Wooden Coaster Set",
    headline: "The Small Detail",
    hookLine: "Minimalist wooden coasters with a holder — the detail that completes a table.",
    description:
      "A set of six wooden coasters in a matching holder — minimalist, warm, and precisely the kind of small detail that separates a considered home from a merely furnished one. Each coaster is sanded smooth with bevelled edges that prevent cups from sliding.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-wooden-coaster-set_1dab6171.jpg",
    tags: ["coaster", "wood", "japanese", "minimalist", "set"],
    notes: "Set of 6 · Wooden holder included · Bevelled edges",
    available: true,
    crossSells: ["feast-11", "feast-10", "feast-5"],
      variants: [
        { id: "japanese-wooden-coaster-set-beech-6-piece-set", label: "Beech 6-Piece Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915606609" },
        { id: "japanese-wooden-coaster-set-walnut-coaster-set-a", label: "Walnut Coaster Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915934289" },
        { id: "japanese-wooden-coaster-set-walnut-6-piece-set", label: "Walnut 6-Piece Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250916065361" }
      ]
  },
  {
    id: "feast-20",
    slug: "rapid-defrosting-board",
    name: "Rapid Defrosting Board",
    headline: "The Practical Slab",
    hookLine: "Aluminium alloy board that defrosts food 5× faster than a countertop — no electricity needed.",
    description:
      "A heavy aluminium alloy board that uses thermal conductivity to defrost frozen food up to five times faster than leaving it on a countertop. No electricity, no microwave, no compromise on food texture. The board works by rapidly transferring ambient heat into the frozen food.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-9_ab4ca976_2615d612.webp",
    tags: ["defrosting", "aluminium", "kitchen", "practical"],
    notes: "Aluminium alloy · No electricity · Dishwasher safe",
    available: true,
    crossSells: ["feast-21", "feast-22", "feast-2"],
      variants: [
        { id: "rapid-defrosting-board-1", label: "Standard", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248122298449" }
      ]
  },
  {
    id: "feast-21",
    slug: "ebony-cutting-board",
    name: "Ebony Cutting Board",
    headline: "The Dark Edge",
    hookLine: "Dense ebony wood cutting board — naturally antimicrobial, dramatically dark.",
    description:
      "A cutting board in ebony wood — one of the densest, hardest woods available. The dramatic dark colour and fine grain make it as much a display piece as a kitchen tool. Ebony is naturally antimicrobial and resists knife marks better than softer woods.",
    price: 68.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ebony-cutting-board_e694c163.jpg",
    tags: ["cutting-board", "ebony", "wood", "kitchen"],
    notes: "Ebony wood · Naturally antimicrobial · Dense grain",
    available: true,
    variants: [
        { id: "ebony-cutting-board-ebony-cutting-board", label: "Ebony Cutting Board / 28X18X2.", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311837265" },
        { id: "ebony-cutting-board-ebony-cutting-board", label: "Ebony Cutting Board / 33X22X2.", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311870033" },
        { id: "ebony-cutting-board-ebony-cutting-board", label: "Ebony Cutting Board / 36X24X2.", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311902801" },
        { id: "ebony-cutting-board-ebony-cutting-board", label: "Ebony Cutting Board / 38X26X2.", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311935569" },
        { id: "ebony-cutting-board-ebony-cutting-board", label: "Ebony Cutting Board / 40X28X2.", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311968337" },
        { id: "ebony-cutting-board-ebony-cutting-board", label: "Ebony Cutting Board / 45X30X2.", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312001105" }
      ],
    crossSells: ["feast-22", "feast-2", "feast-7"],
  },
  {
    id: "feast-22",
    slug: "black-walnut-cutting-board",
    name: "Black Walnut Cutting Board",
    headline: "The Workhorse",
    hookLine: "Thick black walnut board with juice groove — the board you reach for every day.",
    description:
      "A thick black walnut cutting board with a juice groove and generous proportions — the kind of board that becomes the centre of your kitchen. Black walnut is self-healing, meaning light knife marks close over time, and the deep chocolate colour hides stains gracefully.",
    price: 58.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/13_YNbiGfSvxxxG7ygySVfRs7_1774801324944_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFjay13YWxudXQtY3V0dGluZy1ib2FyZA_cba0bb79.jpg",
    tags: ["cutting-board", "walnut", "wood", "kitchen"],
    notes: "Black walnut · Juice groove · Self-healing surface",
    available: true,
    variants: [
        { id: "black-walnut-cutting-board-round", label: "Round", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251310592081" },
        { id: "black-walnut-cutting-board-rectangula-l", label: "Rectangula L", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251310624849" },
        { id: "black-walnut-cutting-board-rectangular-s", label: "Rectangular S", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251310657617" }
      ],
    crossSells: ["feast-21", "feast-7", "feast-2"],
  },
  {
    id: "feast-23",
    slug: "ceramic-butter-dish",
    name: "Ceramic Butter Dish",
    headline: "The Soft Keeper",
    hookLine: "A ceramic dish with bamboo lid — keeps butter at the perfect spreadable temperature.",
    description:
      "A ceramic butter dish with a bamboo lid that keeps butter at room temperature — soft, spreadable, and ready for toast. The ceramic base is heavy enough to stay put, and the bamboo lid adds warmth to a simple kitchen essential.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-butter-dish_f1e41069.jpg",
    tags: ["butter", "dish", "ceramic", "bamboo", "kitchen"],
    notes: "Ceramic · Bamboo lid · Room temperature storage",
        variants: [
        { id: "ceramic-butter-dish-blue", label: "Blue", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310723153" },
        { id: "ceramic-butter-dish-white", label: "Classic White", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310755921", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-23-white-hRVkMYyVFg4GvAceYvPGWD.webp" }
      ],
    available: true,
    crossSells: ["feast-1", "feast-16", "feast-6"],
  },
  {
    id: "feast-24",
    slug: "multi-function-grater",
    name: "Multi-Function Grater",
    headline: "The Sharp Edge",
    hookLine: "Stainless steel grater with four surfaces — fine, medium, coarse, and slicer.",
    description:
      "A stainless steel box grater with four distinct surfaces — fine for hard cheese and nutmeg, medium for soft cheese and vegetables, coarse for potatoes and cabbage, and a slicer for clean, even cuts. The non-slip base and comfortable handle make it stable during use.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-10_651b26cd_f80d2ee7.webp",
    tags: ["grater", "stainless-steel", "kitchen", "multi-function"],
    notes: "Stainless steel · 4 surfaces · Non-slip base",
    available: true,
    crossSells: ["feast-25", "feast-2", "feast-20"],
      variants: [
        { id: "multi-function-grater-bagged", label: "Basic Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251310919761" },
        { id: "multi-function-grater-two-cheese-grates-bo", label: "Double Grater Box Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251310952529" },
        { id: "multi-function-grater-single-cheese-planer", label: "Planer Box Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251310985297" },
        { id: "multi-function-grater-boxed", label: "Premium Box Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311018065" }
      ]
  },
  {
    id: "feast-25",
    slug: "hand-crank-pasta-maker",
    name: "Hand-Crank Pasta Maker",
    headline: "The Slow Meal",
    hookLine: "Chrome-plated pasta machine with adjustable thickness — fresh pasta in minutes.",
    description:
      "A chrome-plated hand-crank pasta maker with adjustable thickness settings — from paper-thin angel hair to thick pappardelle. The heavy base clamps securely to any countertop, and the smooth rollers produce consistent, restaurant-quality pasta sheets every time.",
    price: 68.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hand-crank-pasta-maker_28d0f9c6.jpg",
    tags: ["pasta", "maker", "hand-crank", "kitchen", "cooking"],
    notes: "Chrome-plated · Adjustable thickness · Table clamp included",
    available: true,
    crossSells: ["feast-2", "feast-24", "feast-6"],
      variants: [
        { id: "hand-crank-pasta-maker-silver", label: "Classic Silver", price: 68.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307872337" }
      ]
  },
  {
    id: "feast-26",
    slug: "ceramic-pour-over-dripper",
    name: "Ceramic Pour-Over Dripper",
    headline: "The Morning Ritual",
    hookLine: "A ceramic dripper for single-cup pour-over coffee — slow, deliberate, perfect.",
    description:
      "A ceramic pour-over coffee dripper designed for the person who believes that the best cup of coffee is the one you make yourself, slowly and deliberately. The spiral ridges inside the cone create air channels that allow the coffee to bloom properly.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/11_MnEFKNQg3FIQnVUCz7yM2I_1774599101341_na1fn_L2hvbWUvdWJ1bnR1L2NlcmFtaWNfcG91cl9vdmVyX2NvZmZlZV9kcmlwcGVy_f962c605_509b90d0.webp",
    tags: ["coffee", "pour-over", "ceramic", "dripper", "brewing"],
    notes: "Ceramic · Spiral ridges · Fits standard filters",
    available: true,
    variants: [
        { id: "ceramic-pour-over-dripper-black-1-to-2-serving", label: "Matte Black", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307249745", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-26-black-cLjEFo7asMgcJRYweaSRyQ.webp" },
        { id: "ceramic-pour-over-dripper-white-1-to-2-serving", label: "Classic White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307282513", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-26-white-ncvqphMEYXGttHZV4sAyY8.webp" }
      ],
    crossSells: ["feast-29", "feast-30", "feast-31"],
  },
  {
    id: "feast-27",
    slug: "japanese-sake-set",
    name: "Japanese Sake Set",
    headline: "The Evening Ritual",
    hookLine: "A ceramic tokkuri and four ochoko cups — for warm sake and quiet evenings.",
    description:
      "A traditional Japanese sake set — one tokkuri (pouring vessel) and four ochoko (cups) — in a matte ceramic glaze that feels warm in the hand. The tokkuri is designed for warming sake in a hot water bath, and the small cups encourage the Japanese practice of pouring for others.",
    price: 52.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_umcPIyWr84IjxiTRZVEqhg_1774599070451_na1fn_L2hvbWUvdWJ1bnR1L2phcGFuZXNlX3Nha2Vfc2V0_f12fd4f3_ecdeb8da.webp",
    tags: ["sake", "japanese", "ceramic", "set", "drinking"],
    notes: "Ceramic · 1 tokkuri + 4 cups · Microwave safe",
    available: true,
    crossSells: ["feast-4", "feast-5", "feast-6"],
      variants: [
        { id: "japanese-sake-set-black-gold-jug", label: "Black Gold Jug", price: 52.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304759377" },
        { id: "japanese-sake-set-black-gin-wine-cup", label: "Black Gin Wine Cup", price: 52.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304792145" }
      ]
  },
  {
    id: "feast-28",
    slug: "borosilicate-glass-canister",
    name: "Borosilicate Glass Canister",
    headline: "The Clear Store",
    hookLine: "Heat-resistant glass canisters with bamboo lids — for tea, coffee, grains, and spices.",
    description:
      "A borosilicate glass canister with a bamboo lid and silicone seal — the kind of storage that makes a pantry look curated rather than cluttered. The glass is heat-resistant and won't absorb odours, and the bamboo lid adds warmth.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-8_bb5b97aa_b5fcb2b9.webp",
    tags: ["canister", "glass", "borosilicate", "bamboo", "storage"],
    notes: "Borosilicate glass · Bamboo lid · Silicone seal",
    available: true,
    variants: [
      { id: "feast-28-s", label: "Small (500ml)", price: 18.00, available: true },
      { id: "feast-28-m", label: "Medium (1L)", price: 22.00, available: true },
      { id: "feast-28-l", label: "Large (1.5L)", price: 28.00, available: true },
    ],
    crossSells: ["feast-12", "feast-1", "feast-14"],
  },
  {
    id: "feast-29",
    slug: "vintage-japanese-ceramic-mug",
    name: "Vintage Japanese Ceramic Mug",
    headline: "The Character Cup",
    hookLine: "A rough-textured ceramic mug with reactive glaze — each one develops unique character.",
    description:
      "A ceramic mug with a deliberately rough, textured exterior and a smooth interior glaze — the kind of cup that feels like it has a history even when it is new. The reactive glaze creates unique colour variations on every piece.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-6_7c8d1cb6_756ad08a.webp",
    tags: ["mug", "ceramic", "japanese", "vintage", "reactive-glaze"],
    notes: "Reactive glaze · 350ml · Microwave safe",
    available: true,
    variants: [
      { id: "vintage-japanese-ceramic-coffee-mug-cup-200ml", label: "Cup · 200ml", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59241560014929" },
    ],
    crossSells: ["feast-30", "feast-31", "feast-26"],
  },
  {
    id: "feast-30",
    slug: "japanese-stoneware-mug",
    name: "Japanese Stoneware Mug",
    headline: "The Quiet Cup",
    hookLine: "A thick-walled stoneware mug that keeps drinks warm longer — and looks better with age.",
    description:
      "A thick-walled stoneware mug with a matte exterior and glossy interior — designed to keep drinks warm longer and to look better with every use. The generous handle is comfortable for large hands, and the weight of the mug gives it a reassuring presence.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-fix_8403f171.jpg",
    tags: ["mug", "stoneware", "japanese", "thick-walled"],
    notes: "Stoneware · 400ml · Keeps drinks warm",
    available: true,
    variants: [
      { id: "japanese-stoneware-mug-grey-s", label: "Grey · Small", price: 26.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59241558900817", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-mug-grey-4ENLh5QRKKR8kMyaPRzm46.webp" },
      { id: "japanese-stoneware-mug-grey-l", label: "Grey · Large", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59241558933585", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-mug-grey-4ENLh5QRKKR8kMyaPRzm46.webp" },
      { id: "japanese-stoneware-mug-apricot-s", label: "Apricot · Small", price: 26.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59241558999121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-mug-apricot-WxVP3BxcsUwfTm25k3bVsJ.webp" },
      { id: "japanese-stoneware-mug-apricot-l", label: "Apricot · Large", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59241558966353", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-mug-apricot-WxVP3BxcsUwfTm25k3bVsJ.webp" },
    ],
    crossSells: ["feast-29", "feast-31", "feast-26"],
  },
  {
    id: "feast-31",
    slug: "nordic-espresso-cup-saucer",
    name: "Nordic Espresso Cup & Saucer",
    headline: "The Small Pleasure",
    hookLine: "A ceramic espresso cup with matching saucer — for the person who takes their coffee seriously.",
    description:
      "A ceramic espresso cup with a matching saucer in a matte Nordic glaze — the kind of set that makes a single shot of espresso feel like an event. The cup is sized for a proper double shot (80ml), and the saucer has a subtle indent that keeps the cup centred.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp",
    tags: ["espresso", "cup", "saucer", "ceramic", "nordic"],
    notes: "Ceramic · 80ml · Cup + saucer set",
    available: true,
    variants: [
        { id: "nordic-espresso-cup-saucer-a", label: "Style A", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307053137" },
        { id: "nordic-espresso-cup-saucer-b", label: "Style B", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307085905" },
        { id: "nordic-espresso-cup-saucer-c", label: "Style C", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307118673" },
        { id: "nordic-espresso-cup-saucer-d", label: "Style D", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307151441" },
        { id: "nordic-espresso-cup-saucer-e", label: "Style E", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307184209" },
        { id: "nordic-espresso-cup-saucer-f", label: "Style F", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307216977" }
      ],
    crossSells: ["feast-29", "feast-30", "feast-26"],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // ADORN — Objects of Intention
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "adorn-1",
    slug: "led-aroma-diffuser",
    name: "LED Aroma Diffuser",
    headline: "The Atmosphere Machine",
    hookLine: "Ultrasonic diffuser with warm LED glow — transforms any room with scent and light.",
    description:
      "An ultrasonic aroma diffuser with a warm LED glow that transforms any room into a sanctuary. The ceramic-finish exterior looks like a decorative object rather than an appliance, and the whisper-quiet operation means you forget it is there — until you notice how much better the room feels.",
    price: 48.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser_545cee70.jpg",
    tags: ["diffuser", "aroma", "led", "ultrasonic", "home-fragrance"],
    notes: "Ultrasonic · Warm LED · 300ml capacity · Auto shut-off",
    available: true,
    crossSells: ["adorn-9", "adorn-7", "bloom-1"],
      variants: [
        { id: "led-aroma-diffuser-set-1-usb", label: "Set 1 / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900271185", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-set1-RaGC44VtLuLyWaHaXURDJq.webp" },
        { id: "led-aroma-diffuser-shallow-wood-grain-u", label: "Shallow Wood Grain / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900303953", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-shallow-wood-RGnqHBjbvVaJ3J5kQE8Qid.webp" },
        { id: "led-aroma-diffuser-set-6-usb", label: "Set 6 / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900336721", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-set6-SUyyyWtAYLWfhmXHwifG8W.webp" },
        { id: "led-aroma-diffuser-deep-wood-grain-usb", label: "Deep Wood Grain / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900369489", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-deep-wood-2ff2PNR85XDWXPSYcj73yJ.webp" },
        { id: "led-aroma-diffuser-set-2-usb", label: "Set 2 / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900402257", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-set2-mXfagbkaJNmPSD6rSvv9Ud.webp" },
        { id: "led-aroma-diffuser-set-3-usb", label: "Set 3 / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900435025", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-set3-HproJLzWb4D7qPUtmVdW9Q.webp" },
        { id: "led-aroma-diffuser-set-4-usb", label: "Set 4 / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900467793", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-set4-jY498KmEheipnPzzadSPHc.webp" },
        { id: "led-aroma-diffuser-set-5-usb", label: "Set 5 / Usb", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900500561", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diffuser-set5-2fdzHmbQh3yKpGpyyxYRZg.webp" }
      ]
  },
  {
    id: "adorn-2",
    slug: "nordic-decorative-figurine",
    name: "Nordic Decorative Figurine",
    headline: "The Quiet Companion",
    hookLine: "Minimalist resin figurines in matte finishes — for shelves, mantels, and quiet corners.",
    description:
      "A minimalist decorative figurine in matte resin — the kind of object that adds personality to a shelf or mantel without demanding attention. The clean lines and neutral tones make it versatile enough for any interior, while the weight and finish give it a reassuring solidity.",
    price: 38.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc.jpg",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist"],
    notes: "Matte resin · Multiple poses available",
        variants: [
        { id: "nordic-decorative-figurine-white-black-spot-hig", label: "White Black Spot High", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309379665", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-2-white-SJkGzuH9NiHi7dTAVMii2B.webp" },
        { id: "nordic-decorative-figurine-white-black-dot-roun", label: "White Black Dot Round Style", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309412433", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-2-white-SJkGzuH9NiHi7dTAVMii2B.webp" },
        { id: "nordic-decorative-figurine-yellow-black-dot-hig", label: "Yellow Black Dot High Style", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309445201" },
        { id: "nordic-decorative-figurine-yellow-black-dot-rou", label: "Yellow Black Dot Round Style", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309477969" },
        { id: "nordic-decorative-figurine-white-red-dot-high-s", label: "White Red Dot High Style", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309510737", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-2-white-SJkGzuH9NiHi7dTAVMii2B.webp" },
        { id: "nordic-decorative-figurine-white-red-dot-round", label: "White Red Dot Round Style", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309543505", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-2-white-SJkGzuH9NiHi7dTAVMii2B.webp" }
      ],
    available: true,
    crossSells: ["adorn-8", "adorn-3", "adorn-5"],
  },
  {
    id: "adorn-3",
    slug: "sculptural-glass-vase",
    name: "Sculptural Glass Vase",
    headline: "The Light Catcher",
    hookLine: "Hand-blown glass vase with organic curves — beautiful empty or filled.",
    description:
      "A hand-blown glass vase with organic, sculptural curves that catch and refract light. The kind of object that is equally beautiful empty — as a pure form — or filled with a single stem. The thick glass base gives it stability and a satisfying weight.",
    price: 58.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/sculptural-glass-vase_2d1cc214.jpg",
    tags: ["vase", "glass", "sculptural", "hand-blown", "decorative"],
    notes: "Hand-blown glass · Thick base · Multiple colours",
    available: true,
    variants: [
        { id: "sculptural-glass-vase-light-blue", label: "Light Blue", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251307774033", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glass-vase-light-blue-CCf7fRhF9xy9cNxX8MjNjw.webp" },
        { id: "sculptural-glass-vase-dark-blue", label: "Dark Blue", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251307806801", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glass-vase-dark-blue-6L7AxSu9Yw6V8WFFBxETXK.webp" },
        { id: "sculptural-glass-vase-yellow", label: "Yellow", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251307839569", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glass-vase-yellow-HQaqzwev5TubyfHvTyFc7H.webp" }
      ],
    crossSells: ["adorn-5", "adorn-6", "bloom-5"],
  },
  {
    id: "adorn-4",
    slug: "macrame-wall-hanging",
    name: "Macrame Wall Hanging",
    headline: "The Textile Wall",
    hookLine: "Hand-knotted cotton macrame — adds texture and warmth to any wall.",
    description:
      "A hand-knotted cotton macrame wall hanging that adds texture, warmth, and visual interest to any wall. The natural cotton cord has a soft, organic quality that softens hard surfaces and adds a bohemian elegance to both modern and traditional interiors.",
    price: 48.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/19_D3IdJqGKNigmvANciogXFl_1774801330247_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9tYWNyYW1lLXdhbGwtaGFuZ2luZw_0a1f430f.png",
    tags: ["macrame", "wall-hanging", "cotton", "textile", "bohemian"],
    notes: "Hand-knotted cotton · Wooden dowel · Multiple sizes",
    available: true,
    variants: [
        { id: "macrame-wall-hanging-beige", label: "Beige", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308560465" }
      ],
    crossSells: ["dwell-9", "dwell-11", "adorn-2"],
  },
  {
    id: "adorn-5",
    slug: "ceramic-bud-vase",
    name: "Ceramic Bud Vase",
    headline: "The Single Stem",
    hookLine: "A small ceramic vase designed for one or two stems — the art of less.",
    description:
      "A small ceramic bud vase designed for one or two stems — the art of less. The narrow opening holds stems upright without a frog or foam, and the matte glaze has a tactile quality that invites touch. Perfect for a bedside table, a bathroom shelf, or a windowsill.",
    price: 18.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/20_culZmmwAa0oXGnliXCigNL_1774801403133_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9jZXJhbWljX2J1ZF92YXNl_f935a947.png",
    tags: ["vase", "ceramic", "bud", "minimalist", "small"],
    notes: "Ceramic · Matte glaze · Multiple colours",
    available: true,
    variants: [
        { id: "ceramic-bud-vase-brown", label: "Earth Brown", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306463313" },
        { id: "ceramic-bud-vase-black", label: "Matte Black", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306496081" },
        { id: "ceramic-bud-vase-green", label: "Sage Green", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306528849", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-5-black-dNf5rN69tQ33zABp5DJ5LM.webp" },
        { id: "ceramic-bud-vase-orange", label: "Burnt Orange", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306561617" }
      ],
    crossSells: ["adorn-6", "adorn-3", "bloom-5"],
  },
  {
    id: "adorn-6",
    slug: "minimalist-ceramic-vase",
    name: "Minimalist Ceramic Vase",
    headline: "The Quiet Form",
    hookLine: "A tall ceramic vase with clean lines — statement piece for dried or fresh arrangements.",
    description:
      "A tall ceramic vase with clean, architectural lines — the kind of object that makes a statement without saying a word. The matte finish and neutral tones make it a versatile canvas for dried grasses, fresh flowers, or nothing at all.",
    price: 42.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/minimalist-ceramic-vase_74358e82.png",
    tags: ["vase", "ceramic", "minimalist", "tall", "decorative"],
    notes: "Ceramic · Matte finish · 30cm tall",
    available: true,
    crossSells: ["adorn-5", "adorn-3", "bloom-3"],
  },
  {
    id: "adorn-7",
    slug: "ceramic-incense-holder",
    name: "Ceramic Incense Holder",
    headline: "The Slow Burn",
    hookLine: "A ceramic holder for incense sticks and cones — minimalist, functional, beautiful.",
    description:
      "A ceramic incense holder designed for both sticks and cones — minimalist in form, functional in use, and beautiful as an object. The ash tray catches residue cleanly, and the matte glaze complements any interior.",
    price: 22.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-8_c0b37044_a301959d.webp",
    tags: ["incense", "holder", "ceramic", "minimalist", "home-fragrance"],
    notes: "Ceramic · Fits sticks and cones · Ash tray",
    available: true,
    crossSells: ["adorn-1", "adorn-9", "bloom-1"],
      variants: [
        { id: "ceramic-incense-holder-incense-stick-and-ba", label: "Stick & Backflow Set", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305349201" },
        { id: "ceramic-incense-holder-incense-stick", label: "Stick Holder Only", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305381969" }
      ]
  },
  {
    id: "adorn-8",
    slug: "abstract-figurine",
    name: "Abstract Figurine",
    headline: "The Conversation Piece",
    hookLine: "A resin figurine with abstract human form — art for the shelf.",
    description:
      "An abstract figurine in matte resin — a stylised human form that sits comfortably between art and decoration. The kind of object that starts conversations and adds a layer of personality to a bookshelf or mantel.",
    price: 42.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp",
    tags: ["figurine", "abstract", "resin", "art", "decorative"],
    notes: "Matte resin · Abstract form · 20cm tall",
        variants: [
        { id: "abstract-figurine-1style", label: "1Style", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305644113" },
        { id: "abstract-figurine-gold-1style", label: "Gold 1Style", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305676881" },
        { id: "abstract-figurine-gold-2style", label: "Gold 2Style", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305709649" },
        { id: "abstract-figurine-gold-3style", label: "Gold 3Style", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305742417" },
        { id: "abstract-figurine-2style", label: "2Style", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305775185" },
        { id: "abstract-figurine-3style", label: "3Style", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305807953" }
      ],
    available: true,
    crossSells: ["adorn-2", "adorn-4", "adorn-6"],
  },
  {
    id: "adorn-9",
    slug: "fireplace-aroma-diffuser",
    name: "Fireplace Aroma Diffuser",
    headline: "The Flame Without Fire",
    hookLine: "A ceramic diffuser shaped like a miniature fireplace — warm light and scent without a flame.",
    description:
      "A ceramic aroma diffuser shaped like a miniature fireplace — complete with a warm LED glow that simulates flickering flames. The combination of warm light and essential oil diffusion creates an atmosphere of comfort and calm without any open flame.",
    price: 59.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-2_e58fdd57_f59ad19d.webp",
    tags: ["diffuser", "fireplace", "ceramic", "led", "aroma"],
    notes: "Ceramic · LED flame effect · Essential oil compatible",
    available: true,
    crossSells: ["adorn-1", "adorn-7", "glow-5"],
      variants: [
        { id: "fireplace-aroma-diffuser-black-gift-remote-co", label: "Black", price: 59.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305545809", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/fireplace-diffuser-black-CpQb9YNG4VkG6X4JZdBMtX.webp" },
        { id: "fireplace-aroma-diffuser-white-gift-remote-co", label: "White", price: 59.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305578577", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/fireplace-diffuser-white-6EponoFw9eAe6vQucefci7.webp" }
      ]
  },
  // ═══════════════════════════════════════════════════════════════════════
  // BLOOM — Everlasting Greenery
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "bloom-1",
    slug: "lavender-sachet",
    name: "Lavender Sachet",
    headline: "The Quiet Scent",
    hookLine: "Dried lavender in linen sachets — for drawers, pillows, and quiet moments.",
    description:
      "A set of dried lavender sachets in natural linen pouches — the kind of small, thoughtful object that transforms a drawer or a pillow into something that smells like a Provençal summer. The lavender is sourced from high-altitude farms where the essential oil concentration is highest.",
    price: 18.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet_a97f9ce5.png",
    tags: ["lavender", "sachet", "linen", "dried", "fragrance"],
    notes: "Set of 4 · Natural linen · Lasts 6-12 months",
    available: true,
    crossSells: ["bloom-2", "adorn-7", "adorn-1"],
      variants: [
        { id: "lavender-sachet-a", label: "A", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913476689" },
        { id: "lavender-sachet-b", label: "B", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913509457" },
        { id: "lavender-sachet-c", label: "C", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913542225" },
        { id: "lavender-sachet-d", label: "D", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913574993" },
        { id: "lavender-sachet-e", label: "E", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913607761" },
        { id: "lavender-sachet-f", label: "F", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913640529" },
        { id: "lavender-sachet-g", label: "G", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250913673297" }
      ]
  },
  {
    id: "bloom-2",
    slug: "dried-lavender-bundle",
    name: "Dried Lavender Bundle",
    headline: "The Purple Calm",
    hookLine: "A generous bundle of dried lavender stems — for vases, wreaths, or simply the scent.",
    description:
      "A generous bundle of dried lavender stems — the kind of object that fills a room with calm before you even notice it. The stems are dried naturally to preserve both colour and fragrance, and the bundle is tied with natural twine.",
    price: 22.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/8_NNuHRXV7PHupFuXRWHQu2C_1774599052593_na1fn_L2hvbWUvdWJ1bnR1L2RyaWVkX2xhdmVuZGVyX2J1bmRsZQ_b807e823_7527a82d.webp",
    tags: ["lavender", "dried", "bundle", "stems", "fragrance"],
    notes: "Naturally dried · Tied with twine · Fragrance lasts months",
    available: true,
    crossSells: ["bloom-1", "bloom-5", "adorn-6"],
      variants: [
        { id: "dried-lavender-bundle-white", label: "White", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914263121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-white-K9rHcG9dsSMAYmSMWt9a38.webp" },
        { id: "dried-lavender-bundle-pink", label: "Pink", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914295889", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-pink-SuXpfeRpfycgyj3BxoMTuT.webp" }
      ]
  },
  {
    id: "bloom-3",
    slug: "pampas-grass-bouquet",
    name: "Pampas Grass Bouquet",
    headline: "The Soft Cloud",
    hookLine: "Fluffy pampas grass stems — the effortless centrepiece that lasts forever.",
    description:
      "A bohemian bouquet of dried pampas grass, bunny tails, reeds, and natural grasses — 24 curated combinations ranging from delicate 12-piece accents to lush 120-piece arrangements. Each combination is a different mix of textures, colours, and stem types, chosen for its ability to transform any vase into an effortless centrepiece. The stems are treated to prevent shedding and maintain their soft, cloud-like appearance.",
    price: 2.21,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-hero-fkcYBpcuibBQvUqN6UELQo.webp",
    tags: ["pampas", "grass", "dried", "bouquet", "natural", "bohemian", "bunny-tail", "reed"],
    notes: "Treated to prevent shedding · Natural tones · 24 curated combinations",
    available: true,
    variants: [
      { id: "pampas-combo-1", label: "Combo 1 · 20 Pcs", price: 2.48, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312164945", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo1-oH7MPSvuficVcw5kgRtCTg.webp" },
      { id: "pampas-combo-2", label: "Combo 2 · 60 Pcs", price: 4.66, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312197713", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo2-Ta6xFESypaBHhVoLwD8sLp.webp" },
      { id: "pampas-combo-3", label: "Combo 3 · 43 Pcs", price: 4.52, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312230481", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo3-hqJwH7KZ58Fa7VDCFsuGvH.webp" },
      { id: "pampas-combo-4", label: "Combo 4 · 58 Pcs", price: 5.09, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312263249", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo4-9uyujDHwq6T6Kvn6pHUD4r.webp" },
      { id: "pampas-combo-5", label: "Combo 5 · 75 Pcs", price: 5.14, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312296017", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo5-UygueJ36JFaFN8rLYgmj3w.webp" },
      { id: "pampas-combo-6", label: "Combo 6 · 64 Pcs", price: 4.24, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312328785", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo6-FuFf9JAvv2dKGJqGuNVVry.webp" },
      { id: "pampas-combo-7", label: "Combo 7 · 100 Pcs", price: 5.54, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312361553", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo7-HhT3J2HpCCtrs8rq8CpWEc.webp" },
      { id: "pampas-combo-8", label: "Combo 8 · 95 Pcs", price: 5.94, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312394321", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo8-fE3JFcpQUbVtgZd2tpGHL7.webp" },
      { id: "pampas-combo-9", label: "Combo 9 · 95 Pcs", price: 5.41, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312427089", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo9-A7HJxG33WHQjjJanKKYsUJ.webp" },
      { id: "pampas-combo-10", label: "Combo 10 · 95 Pcs", price: 3.96, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312459857", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo10-93cFQ7mRzrrtun2x6USr4C.webp" },
      { id: "pampas-combo-11", label: "Combo 11 · 100 Pcs", price: 6.48, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312492625", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo11-HiT6bNdL9qGq5zAzeTFBnP.webp" },
      { id: "pampas-combo-12", label: "Combo 12 · 12 Pcs", price: 2.21, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312525393", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo12-mgyQ2bBFmvN8Xxv5kkL2d9.webp" },
      { id: "pampas-combo-13", label: "Combo 13 · 96 Pcs", price: 5.94, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312558161", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo13-2utPWCvZo3UVkzgEBkDDkS.webp" },
      { id: "pampas-combo-14", label: "Combo 14 · 110 Pcs", price: 6.48, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312590929", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo14-kSkd2bQsvug3LZ4uPWcYBR.webp" },
      { id: "pampas-combo-15", label: "Combo 15 · 67 Pcs", price: 4.52, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312623697", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo15-dxSyMwo4WfSp8HuGmMBvcG.webp" },
      { id: "pampas-combo-16", label: "Combo 16 · 120 Pcs", price: 6.21, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312656465", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo16-icgwZFx9PAnLacHFKWEDWe.webp" },
      { id: "pampas-combo-17", label: "Combo 17 · 100 Pcs", price: 7.83, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312689233", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo17-ej2eqHxSERrMQ6Df4s4zXV.webp" },
      { id: "pampas-combo-18", label: "Combo 18 · 50 Pcs", price: 3.68, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312722001", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo18-hL6MozyMMhWAaH2v8DtDhk.webp" },
      { id: "pampas-combo-19", label: "Combo 19 · 80 Pcs", price: 6.21, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312754769", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo19-D9EtHKfHL7htaKgPZuzPy9.webp" },
      { id: "pampas-combo-20", label: "Combo 20 · 64 Pcs", price: 4.24, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312787537", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo20-EMRFamReeRTmLoyj3PoNvk.webp" },
      { id: "pampas-combo-21", label: "Combo 21 · 100 Pcs", price: 4.80, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312820305", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-combo21-editorial-4Kq3VhNAXTN3xjzqVdCRgR.webp" },
      { id: "pampas-combo-22", label: "Combo 22 · 80 Pcs", price: 4.24, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312853073", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo22-TfagWVcijaW3b8sKFezDzs.webp" },
      { id: "pampas-combo-23", label: "Combo 23 · 100 Pcs", price: 5.14, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312885841", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo23-SsaKErAFj9ifAEZLvMyahZ.webp" },
      { id: "pampas-combo-24", label: "Combo 24 · 30 Pcs", price: 5.09, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312918609", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo24-B2U9WyFHYknBRMkZWFjpDL.webp" },
    ],
    crossSells: ["bloom-5", "bloom-8", "adorn-6"],
  },
  {
    id: "bloom-5",
    slug: "mixed-dried-flower-bouquet",
    name: "Mixed Dried Flower Bouquet",
    headline: "The Gathered Bouquet",
    hookLine: "A curated mix of dried flowers — roses, daisies, grasses, and seed pods.",
    description:
      "A curated bouquet of mixed dried flowers — roses, daisies, grasses, and seed pods — arranged with the kind of casual elegance that looks like you gathered them on a country walk. Each bouquet is slightly different, reflecting the natural variation of dried botanicals.",
    price: 42.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet_ac1959d8.png",
    tags: ["dried", "flowers", "bouquet", "mixed", "natural"],
    notes: "Naturally dried · Mixed varieties · Each bouquet unique",
    available: true,
    crossSells: ["bloom-2", "bloom-3", "adorn-5"],
      variants: [
        { id: "mixed-dried-flower-bouquet-champagne", label: "Champagne", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309019217", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-champagne-WLEvAkUf9H3Sa5sNN385HZ.webp" },
        { id: "mixed-dried-flower-bouquet-orange", label: "Orange", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309051985", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-orange-g2DRHJHKLe3cCC3ZDZpFAn.webp" },
        { id: "mixed-dried-flower-bouquet-pink", label: "Pink", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309084753", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-pink-3UaasXeGFqkyLSmdkxGH9V.webp" },
        { id: "mixed-dried-flower-bouquet-white", label: "White", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309117521", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-white-cmU2qMTZK62XFXxWBbgoxb.webp" },
        { id: "mixed-dried-flower-bouquet-mix-colors-4pcs", label: "Mix Colors 4Pcs", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309150289", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-mix-colors-RnmRMnbo5Ac9uCWrRZP2mf.webp" },
        { id: "mixed-dried-flower-bouquet-orange-2pcs", label: "Orange 2Pcs", price: 42.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309183057", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-orange-2pcs-DovV5aJMfrbBoprAG2VC2w.webp" }
      ]
  },
  {
    id: "bloom-6",
    slug: "dried-cotton-stem",
    name: "Dried Cotton Stem",
    headline: "The Soft Sculpture",
    hookLine: "Natural dried cotton stems — sculptural, soft, and endlessly photogenic.",
    description:
      "Natural dried cotton stems with fluffy white bolls — the kind of botanical that looks like a sculpture and photographs beautifully in any light. The stems are naturally dried and preserved, maintaining their soft, cloud-like appearance indefinitely.",
    price: 18.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-2_683cc3a4_78d26145.webp",
    tags: ["cotton", "dried", "stem", "natural", "sculptural"],
    notes: "Naturally dried · 3-5 bolls per stem · 60cm tall",
    available: true,
    variants: [
        { id: "dried-cotton-stem-1", label: "Default Title", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59248122167377" }
      ],
    crossSells: ["bloom-3", "bloom-5", "adorn-5"],
  },
  {
    id: "bloom-7",
    slug: "autumn-harvest-garland",
    name: "Autumn Harvest Garland",
    headline: "The Seasonal Drape",
    hookLine: "A faux garland of autumn leaves, berries, and seed pods — for mantels, tables, and doorways.",
    description:
      "A faux garland of autumn leaves, berries, and seed pods — the kind of seasonal decoration that transforms a mantel, a table centre, or a doorway into something that feels like a harvest celebration. The colours are rich and warm without being garish.",
    price: 38.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-harvest-garland_09548486.jpg",
    tags: ["garland", "autumn", "faux", "leaves", "seasonal"],
    notes: "Faux · 180cm length · Flexible wire base",
    available: true,
    crossSells: ["bloom-10", "bloom-13", "adorn-4"],
      variants: [
        { id: "autumn-harvest-garland-pumpkin-wreath-35x35", label: "Pumpkin Wreath / 35X35Cm", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310788689" },
        { id: "autumn-harvest-garland-pumpkin-wreath-40x40", label: "Pumpkin Wreath / 40X40Cm", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310821457" },
        { id: "autumn-harvest-garland-pumpkin-wreath-45x45", label: "Pumpkin Wreath / 45X45Cm", price: 38.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310854225" }
      ]
  },
  {
    id: "bloom-8",
    slug: "dried-reed-arrangement",
    name: "Dried Reed Arrangement",
    headline: "The Tall Whisper",
    hookLine: "Tall dried reeds in natural tones — architectural height for any corner.",
    description:
      "A bundle of tall dried reeds in natural tones — the kind of arrangement that adds architectural height and movement to a corner, an entryway, or beside a fireplace. The reeds sway gently in air currents, adding a living quality to a dried arrangement.",
    price: 28.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement_b5a53838.png",
    tags: ["reed", "dried", "tall", "natural", "architectural"],
    notes: "Naturally dried · 100-120cm tall · Bundle of 10",
    available: true,
    crossSells: ["bloom-3", "bloom-5", "adorn-6"],
      variants: [
        { id: "dried-reed-arrangement-pink-fron", label: "Pink Fron", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311050833", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-pink-fron-MeoutcqMSZi6EWacRsR7bR.webp" },
        { id: "dried-reed-arrangement-black-beans", label: "Black Beans", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311083601", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-black-beans-XfoRwMVz9TDCaZPzmioHUg.webp" },
        { id: "dried-reed-arrangement-sunflower", label: "Sunflower", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311116369", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-sunflower-fA7uKtuc64sytM4HvTbEhh.webp" },
        { id: "dried-reed-arrangement-pink-franca-black-be", label: "Pink Franca Black Beans", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311149137", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-pink-black-Hmoapxhc36fcGNfCTBgVZT.webp" },
        { id: "dried-reed-arrangement-pink-franca-sunflowe", label: "Pink Franca Sunflower", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311181905", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-pink-sunflower-AYaUv77qpnm3nhhRxDbZCh.webp" },
        { id: "dried-reed-arrangement-powder-franca-sunflo", label: "Powder Franca Sunflower With B", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311214673", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-powder-sunflower-TSAkh2TUDvAhgNK2vb8b28.webp" }
      ]
  },
  {
    id: "bloom-9",
    slug: "magnetic-levitating-planter",
    name: "Magnetic Levitating Planter",
    headline: "The Floating Garden",
    hookLine: "A planter that floats and rotates in mid-air — science meets nature.",
    description:
      "A magnetic levitating planter that suspends a small plant pot in mid-air, rotating slowly and silently above its base. The electromagnetic system is hidden inside a minimalist wooden base, and the floating pot can hold small succulents, air plants, or herbs. It is part science experiment, part living sculpture.",
    price: 128.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter_32662aeb.jpg",
    tags: ["planter", "magnetic", "levitating", "floating", "modern"],
    notes: "Electromagnetic base · Rotating · Includes pot · USB powered",
    available: true,
    variants: [
        { id: "magnetic-levitating-planter-image-uk", label: "UK Plug", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305414737" },
        { id: "magnetic-levitating-planter-image-au", label: "AU Plug", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305447505" },
        { id: "magnetic-levitating-planter-image-eu", label: "EU Plug", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305480273" },
        { id: "magnetic-levitating-planter-image-us", label: "US Plug", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305513041" }
      ],
    crossSells: ["bloom-11", "bloom-13", "glow-13"],
  },
  {
    id: "bloom-10",
    slug: "autumn-faux-flower-bouquet",
    name: "Autumn Faux Flower Bouquet",
    headline: "The Eternal Autumn",
    hookLine: "Faux autumn flowers in warm tones — sunflowers, dahlias, and berries that never fade.",
    description:
      "A faux flower bouquet in warm autumn tones — sunflowers, dahlias, berries, and foliage — that captures the richness of the season without the impermanence. The stems are flexible and can be arranged to suit any vase or container.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-faux-flower-bouquet_e0c7ebe8.png",
    tags: ["faux", "flowers", "autumn", "bouquet", "warm-tones"],
    notes: "High-quality faux · Flexible stems · Warm palette",
    available: true,
    crossSells: ["bloom-7", "bloom-5", "adorn-3"],
  },
  {
    id: "bloom-11",
    slug: "minimalist-ceramic-planter",
    name: "Minimalist Ceramic Planter",
    headline: "The Clean Pot",
    hookLine: "A matte ceramic planter with drainage hole and saucer — clean lines for any plant.",
    description:
      "A matte ceramic planter with clean, cylindrical lines, a drainage hole, and a matching saucer. The kind of pot that lets the plant be the star while providing a considered, architectural frame.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/minimalist-ceramic-planter_e69a2f89.jpg",
    tags: ["planter", "ceramic", "minimalist", "matte", "drainage"],
    notes: "Ceramic · Drainage hole · Saucer included",
    available: true,
    variants: [
      { id: "bloom-11-s", label: "Small (12cm)", price: 22.00, available: true },
      { id: "bloom-11-m", label: "Medium (16cm)", price: 32.00, available: true },
      { id: "bloom-11-l", label: "Large (20cm)", price: 42.00, available: true },
    ],
    crossSells: ["bloom-12", "bloom-9", "bloom-13"],
  },
  {
    id: "bloom-12",
    slug: "woven-hanging-planter",
    name: "Woven Hanging Planter",
    headline: "The Suspended Garden",
    hookLine: "A hand-woven hanging planter in natural jute — brings greenery to eye level.",
    description:
      "A hand-woven hanging planter in natural jute rope — the kind of object that transforms a bare corner or window into a suspended garden. The macrame-style weave creates a decorative cradle for any standard pot, and the adjustable hanging cord fits any ceiling height.",
    price: 28.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-hanging-planter_c4b82362.png",
    tags: ["planter", "hanging", "woven", "jute", "macrame"],
    notes: "Natural jute · Adjustable cord · Fits pots up to 18cm",
    available: true,
    crossSells: ["bloom-11", "adorn-4", "bloom-13"],
      variants: [
        { id: "woven-hanging-planter-grey", label: "Grey", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307315281", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hanging-planter-grey-aHocnvaiGDNRiVJK4Cjh6U.webp" },
        { id: "woven-hanging-planter-coffee", label: "Coffee", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307348049", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hanging-planter-coffee-6nFfdsxnELfytx9LjzNvDp.webp" },
        { id: "woven-hanging-planter-yellow", label: "Yellow", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307380817", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hanging-planter-yellow-TdKiKJCrjtbTymXNaNP6iK.webp" }
      ]
  },
  {
    id: "bloom-13",
    slug: "faux-potted-arrangement",
    name: "Faux Potted Arrangement",
    headline: "The Zero-Maintenance Garden",
    hookLine: "A complete faux plant in a ceramic pot — greenery without guilt.",
    description:
      "A complete faux plant arrangement in a ceramic pot — the kind of greenery that looks real, requires zero maintenance, and never judges you for forgetting to water it. The arrangement includes a mix of faux succulents and trailing vines in a matte ceramic pot.",
    price: 38.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-potted-arrangement_28bc1a8e.png",
    tags: ["faux", "potted", "arrangement", "succulents", "ceramic"],
    notes: "Faux succulents · Ceramic pot included · Ready to display",
    available: true,
    crossSells: ["bloom-14", "bloom-11", "bloom-9"],
  },
  {
    id: "bloom-14",
    slug: "faux-banyan-tree",
    name: "Faux Banyan Tree",
    headline: "The Statement Tree",
    hookLine: "A large faux banyan tree — instant architectural greenery for any room.",
    description:
      "A large faux banyan tree with realistic leaves and a textured trunk — the kind of statement piece that transforms a room instantly. The tree comes in a simple black nursery pot (designed to be placed inside a decorative planter) and the branches can be shaped to suit your space.",
    price: 128.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree_5145e5a4.jpg",
    tags: ["faux", "banyan", "tree", "large", "statement"],
    notes: "Realistic leaves · Shapeable branches · 120cm tall",
    available: true,
    variants: [
        { id: "faux-banyan-tree-70cm", label: "70cm", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59244810436689" },
        { id: "faux-banyan-tree-70cm-and105cm", label: "70cm + 105cm Set", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59244810469457" },
        { id: "faux-banyan-tree-135cm-3forks", label: "135cm — 3 Forks", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59244810502225" },
        { id: "faux-banyan-tree-140cm-3forks", label: "140cm — 3 Forks", price: 128.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59244810534993" }
      ],
    crossSells: ["bloom-13", "bloom-11", "bloom-9"],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // GLOW — The Light Within
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "glow-1",
    slug: "edison-vintage-night-lamp",
    name: "Edison Vintage Night Lamp",
    headline: "The Warm Filament",
    hookLine: "A hand-finished Edison bulb on a reclaimed wooden base — warm amber glow sourced from artisan workshops.",
    description:
      "A vintage-style Edison bulb lamp on a hand-finished reclaimed wooden base — the kind of light that makes a room feel like a library in a country house. Each base is individually selected for its grain character and hand-sanded to a silken finish. The exposed filament produces a warm amber glow that is gentle on the eyes and creates a cosy atmosphere.",
    price: 78.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-vintage-night-lamp_6fa91aea.jpg",
    tags: ["lamp", "edison", "vintage", "night-light", "warm"],
    notes: "Wooden base · Edison bulb included · Dimmer switch",
        variants: [
        { id: "edison-vintage-night-lamp-g95-spiral-bulb-cn", label: "G95 Spiral Bulb / Cn", price: 78.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59250896207953" },
        { id: "edison-vintage-night-lamp-g95-spiral-bulb-with", label: "G95 Spiral Bulb / With Adapter Plug", price: 78.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59250896240721" }
      ],
    available: true,
    crossSells: ["glow-5", "glow-12", "glow-13"],
  },

  {
    id: "glow-3",
    slug: "wax-melt-aromatherapy-lamp",
    name: "Wax Melt Aromatherapy Lamp",
    headline: "The Scented Light",
    hookLine: "A handcrafted ceramic lamp that melts wax from above — artisan-made, warm light and fragrance in one.",
    description:
      "A handcrafted ceramic aromatherapy lamp that melts scented wax from above using a halogen bulb — combining warm, ambient light with home fragrance in a single beautiful object. Each piece is hand-thrown and finished by artisan ceramicists, giving every lamp subtle variations in glaze and form. The top-down heating method releases fragrance more evenly than traditional candle warmers.",
    price: 78.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp_a6d3abc6.png",
    tags: ["lamp", "wax-melt", "aromatherapy", "ceramic", "fragrance"],
    notes: "Ceramic · Halogen bulb · Dimmer control · Wax dish included",
        variants: [
        { id: "wax-melt-aromatherapy-lamp-white-cover-dimmer-s", label: "220V (Asia)", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250903875665" },
        { id: "wax-melt-aromatherapy-lamp-white-cover-dimmer-s", label: "110V (Taiwan)", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250903908433" },
        { id: "wax-melt-aromatherapy-lamp-white-cover-dimmer-s", label: "220V (HK/Macau)", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250903941201" },
        { id: "wax-melt-aromatherapy-lamp-white-cover-dimmer-s", label: "110V (US/Japan)", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250903973969" },
        { id: "wax-melt-aromatherapy-lamp-white-cover-dimmer-s", label: "220V (EU/Korea)", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250904006737" }
      ],
    available: true,
    crossSells: ["adorn-1", "adorn-7", "glow-1"],
  },
  {
    id: "glow-4",
    slug: "solar-garden-torch",
    name: "Solar Garden Torch",
    headline: "The Evening Path",
    hookLine: "Solar-powered garden torches with flickering flame effect — no wiring, no batteries.",
    description:
      "Solar-powered garden torches with a realistic flickering flame effect — the kind of outdoor lighting that transforms a garden path or patio into something magical after sunset. The solar panel charges during the day and provides 8-10 hours of warm, dancing light.",
    price: 58.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch_9241f670.jpg",
    tags: ["solar", "garden", "torch", "outdoor", "flame-effect"],
    notes: "Solar powered · Flickering flame effect · 8-10hr runtime",
    available: true,
    variants: [
        { id: "solar-garden-torch-96led-1pcs", label: "96 LED — Single", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251308593233" },
        { id: "solar-garden-torch-51led-4pc", label: "51 LED — 4 Pack", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251308626001" },
        { id: "solar-garden-torch-96led-4pc", label: "96 LED — 4 Pack", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251308658769" },
        { id: "solar-garden-torch-51led-1pcs", label: "51 LED — Single", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251308691537" }
      ],
    crossSells: ["glow-6", "bloom-7", "bloom-9"],
  },
  {
    id: "glow-5",
    slug: "japanese-bedside-lamp",
    name: "Japanese Bedside Lamp",
    headline: "The Quiet Light",
    hookLine: "A handcrafted wooden lamp with fabric shade — artisan-made, warm quiet light for the bedside.",
    description:
      "A minimalist bedside lamp with a hand-turned solid wood base and a hand-sewn fabric shade — the kind of light that makes a bedroom feel calm and considered. Each base is individually turned on a lathe by skilled woodworkers, giving every piece its own subtle character. The warm-toned shade filters the light into a soft glow that is perfect for reading or winding down.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp_1fe34f7a.png",
    tags: ["lamp", "bedside", "japanese", "wood", "fabric"],
    notes: "Solid wood base · Fabric shade · Touch dimmer",
    available: true,
    crossSells: ["glow-1", "glow-12", "glow-5"],
  },
  {
    id: "glow-6",
    slug: "solar-pathway-light",
    name: "Solar Pathway Light",
    headline: "The Garden Guide",
    hookLine: "Solar-powered pathway lights in warm white — line a path, edge a border, light a garden.",
    description:
      "Solar-powered pathway lights that provide a warm white glow along garden paths, borders, and driveways. The stainless steel and glass construction is weather-resistant, and the solar panel provides reliable illumination from dusk to dawn.",
    price: 48.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-pathway-light_b9935389.png",
    tags: ["solar", "pathway", "light", "garden", "outdoor"],
    notes: "Solar powered · Stainless steel · Warm white",
    available: true,
    variants: [
        { id: "solar-pathway-light-warm-white-3pcs", label: "Warm White — 3 Pack", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900631633" },
        { id: "solar-pathway-light-white-light-3pcs", label: "Cool White — 3 Pack", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900664401" },
        { id: "solar-pathway-light-10-pcs-white-light", label: "Cool White — 10 Pack", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900729937" },
        { id: "solar-pathway-light-10-pcs-warm-white", label: "Warm White — 10 Pack", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900959313" }
      ],
    crossSells: ["glow-4", "bloom-7", "bloom-9"],
  },
  {
    id: "glow-7",
    slug: "motion-sensing-cabinet-light",
    name: "Motion-Sensing Cabinet Light",
    headline: "The Invisible Helper",
    hookLine: "Rechargeable LED strips that turn on when you open a door — for wardrobes, pantries, and drawers.",
    description:
      "Rechargeable LED light strips with a built-in motion sensor — they turn on automatically when you open a wardrobe, pantry, or drawer, and turn off when you close it. The warm white light is bright enough to see clearly without being harsh.",
    price: 32.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-7_a6d7867e_421146b9.webp",
    tags: ["led", "motion-sensor", "cabinet", "rechargeable", "practical"],
    notes: "Rechargeable USB-C · Motion sensor · Warm white · Magnetic mount",
    available: true,
    variants: [
        { id: "motion-sensing-cabinet-light-silver-tricolor-ligh", label: "Silver Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901188689" },
        { id: "motion-sensing-cabinet-light-silver-tricolor-ligh", label: "Silver Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901221457" },
        { id: "motion-sensing-cabinet-light-silver-tricolor-ligh", label: "Silver Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901254225" },
        { id: "motion-sensing-cabinet-light-silver-tricolor-ligh", label: "Silver Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901286993" },
        { id: "motion-sensing-cabinet-light-black-tricolor-light", label: "Black Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901319761" },
        { id: "motion-sensing-cabinet-light-black-tricolor-light", label: "Black Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901352529" },
        { id: "motion-sensing-cabinet-light-black-tricolor-light", label: "Black Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901385297" },
        { id: "motion-sensing-cabinet-light-black-tricolor-light", label: "Black Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901418065" },
        { id: "motion-sensing-cabinet-light-black-tricolor-light", label: "Black Tricolor Light", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250901549137" }
      ],
    crossSells: ["glow-13", "glow-1", "feast-12"],
  },
  {
    id: "glow-8",
    slug: "round-linen-table-lamp",
    name: "Round Linen Table Lamp",
    headline: "The Soft Sphere",
    hookLine: "A hand-shaped linen sphere on an artisan ceramic base — soft, diffused light for any room.",
    description:
      "A table lamp with a hand-shaped round linen shade on a hand-thrown ceramic base — the sphere shape creates an even, diffused glow that softens any room. Each ceramic base is individually crafted, with subtle variations in form and glaze that mark it as a genuine artisan piece. The natural linen texture adds warmth and visual interest.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp_03ddd497.jpg",
    tags: ["lamp", "linen", "round", "table", "ceramic"],
    notes: "Linen shade · Ceramic base · E27 bulb compatible",
    available: true,
    crossSells: ["glow-9", "glow-5", "glow-12"],
      variants: [
        { id: "round-linen-table-lamp-uk", label: "Uk", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915082321" },
        { id: "round-linen-table-lamp-us", label: "Us", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915115089" },
        { id: "round-linen-table-lamp-eu", label: "Eu", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915147857" }
      ]
  },
  {
    id: "glow-9",
    slug: "square-linen-table-lamp",
    name: "Square Linen Table Lamp",
    headline: "The Architectural Light",
    hookLine: "A hand-tailored linen shade on a hand-turned wooden base — structured artisan light.",
    description:
      "A table lamp with a hand-tailored square linen shade on a hand-turned solid wooden base — the geometric shape creates a more structured, architectural light than its round counterpart. The base is individually turned from sustainably sourced hardwood, and the linen shade is cut and sewn by hand, giving each lamp the quiet authority of a handmade object.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp_90a4a291.jpg",
    tags: ["lamp", "linen", "square", "table", "wood"],
    notes: "Linen shade · Wooden base · E27 bulb compatible",
    available: true,
    crossSells: ["glow-8", "glow-5", "glow-12"],
      variants: [
        { id: "square-linen-table-lamp-photo-color-uk", label: "UK Plug", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915442769" },
        { id: "square-linen-table-lamp-photo-color-eu", label: "EU Plug", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915475537" },
        { id: "square-linen-table-lamp-photo-color-us", label: "US Plug", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915508305" }
      ]
  },
  {
    id: "glow-10",
    slug: "woven-bamboo-table-lamp",
    name: "Woven Bamboo Table Lamp",
    headline: "The Woven Light",
    hookLine: "A hand-woven bamboo shade by traditional artisans — intricate shadow patterns on walls and ceiling.",
    description:
      "A table lamp with a hand-woven bamboo shade crafted by traditional artisans using techniques passed down through generations. The shade casts beautiful, intricate shadow patterns on surrounding walls and ceiling. The natural bamboo has a warm golden tone, and each weave pattern is unique to the artisan who made it — transforming any room into a gallery of light and shadow.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-1_4c56282f_81e8dad6.webp",
    tags: ["lamp", "bamboo", "woven", "table", "shadow-pattern"],
    notes: "Hand-woven bamboo · Shadow patterns · E27 bulb compatible",
    available: true,
    crossSells: ["glow-8", "glow-12", "glow-5"],
      variants: [
        { id: "woven-bamboo-table-lamp-18x40cm-us", label: "18X40Cm / Us", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305054289" },
        { id: "woven-bamboo-table-lamp-18x40cm-eu", label: "18X40Cm / Eu", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305087057" },
        { id: "woven-bamboo-table-lamp-18x40cm-uk", label: "18X40Cm / Uk", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305119825" },
        { id: "woven-bamboo-table-lamp-18x40cm-au", label: "18X40Cm / Au", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305152593" },
        { id: "woven-bamboo-table-lamp-23x36cm-us", label: "23X36Cm / Us", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305185361" },
        { id: "woven-bamboo-table-lamp-23x36cm-eu", label: "23X36Cm / Eu", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305218129" },
        { id: "woven-bamboo-table-lamp-23x36cm-uk", label: "23X36Cm / Uk", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305250897" },
        { id: "woven-bamboo-table-lamp-23x36cm-au", label: "23X36Cm / Au", price: 98.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305283665" }
      ]
  },

  {
    id: "glow-12",
    slug: "ceramic-bedside-lamp",
    name: "Ceramic Bedside Lamp",
    headline: "The Glazed Glow",
    hookLine: "A hand-glazed ceramic lamp — each one unique, artisan-crafted warm light for the bedside.",
    description:
      "A ceramic bedside lamp with a hand-applied reactive glaze that creates unique colour variations on every piece — no two are exactly alike. Each base is individually thrown, glazed, and kiln-fired by skilled ceramicists, making every lamp a one-of-a-kind artisan piece. The linen shade softens the light into a warm glow, and the ceramic base has a satisfying weight that keeps it stable.",
    price: 99.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp_4d19a161.png",
    tags: ["lamp", "ceramic", "bedside", "reactive-glaze", "unique"],
    notes: "Reactive glaze · Linen shade · Each piece unique",
    available: true,
    variants: [
      { id: "glow-12-snd", label: "Sand", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-12-sand-39PFucBomL5XbcAYMrdjT6.webp" },
      { id: "glow-12-sge", label: "Sage", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-12-sage-aP76kxwRt2VafGZqM2gmUd.webp" },
      { id: "glow-12-blu", label: "Ocean Blue", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-12-blue-B7USbMnm4GshmkWquj2aFq.webp" },
    ],
    crossSells: ["glow-5", "glow-1", "glow-8"],
  },
  {
    id: "glow-13",
    slug: "mushroom-night-light",
    name: "Mushroom Night Light",
    headline: "The Forest Glow",
    hookLine: "A whimsical mushroom-shaped night light in four distinct designs — choose your silhouette, then your wood tone.",
    description:
      "A whimsical mushroom-shaped night light carved from solid wood with a soft LED glow — the kind of object that makes a hallway, a bathroom, or a child's room feel magical. Available in four distinct mushroom silhouettes (A through D), each in your choice of dark Walnut or light Beech wood. The warm light is gentle enough to sleep by, with touch-activated brightness control and USB-C rechargeable battery lasting 6–8 hours.",
    price: 22.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-a-walnut-LqSZMeWNdBamHHmbp9B85z.webp",
    tags: ["night-light", "mushroom", "led", "whimsical", "soft", "wooden", "rechargeable"],
    notes: "Solid wood · USB-C rechargeable · Touch on/off · 3 brightness levels · 6–8 hour battery",
    available: true,
    crossSells: ["glow-1", "glow-7", "bloom-9"],
    variants: [
      { id: "mushroom-a-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design A", shopifyVariantId: "gid://shopify/ProductVariant/59250893684817", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-a-walnut-LqSZMeWNdBamHHmbp9B85z.webp" },
      { id: "mushroom-a-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design A", shopifyVariantId: "gid://shopify/ProductVariant/59250893717585", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-a-beech-kqgZSWReF5cUEXWLo6VzUk.webp" },
      { id: "mushroom-b-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design B", shopifyVariantId: "gid://shopify/ProductVariant/59250893750353", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-b-walnut-5GmbcxoWXW5MVCXgAkgc58.webp" },
      { id: "mushroom-b-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design B", shopifyVariantId: "gid://shopify/ProductVariant/59250893783121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-b-beech-52v4HQEb3Qf8so4fgmAttj.webp" },
      { id: "mushroom-c-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design C", shopifyVariantId: "gid://shopify/ProductVariant/59250893815889", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-c-walnut-WQ8iRqRFZCguEKWz4QzyRH.webp" },
      { id: "mushroom-c-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design C", shopifyVariantId: "gid://shopify/ProductVariant/59250893848657", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-c-beech-MmZnefoqwiP2GxwL7rH5ks.webp" },
      { id: "mushroom-d-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design D", shopifyVariantId: "gid://shopify/ProductVariant/59250893881425", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-d-walnut-MKXfDgxbuck7ztnvgjCLXx.webp" },
      { id: "mushroom-d-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design D", shopifyVariantId: "gid://shopify/ProductVariant/59250893914193", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-d-beech-ga6kpMdEGFAKzTguriw4gY.webp" },
    ],
  },
  {
    id: "glow-14",
    slug: "artisan-table-lamp",
    name: "Artisan Table Lamp",
    headline: "The Handmade Light",
    hookLine: "A handmade ceramic and linen lamp — crafted by artisan potters, warm ambient light.",
    description:
      "A handmade table lamp with a textured ceramic base and a natural linen shade — crafted by artisan potters in small-batch studio production. Each base is hand-thrown and hand-textured, with surface variations that catch light in interesting ways and mark it unmistakably as a handmade object. The linen shade creates a warm, even glow that transforms any corner into something considered.",
    price: 99.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/artisan-table-lamp_f4fa5e6f.png",
    tags: ["lamp", "artisan", "ceramic", "handmade", "linen"],
    notes: "Handmade ceramic · Linen shade · E27 bulb compatible",
    available: true,
    crossSells: ["glow-12", "glow-8", "glow-5"],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // DWELL — The Fabric of Home
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "dwell-1",
    slug: "bohemian-area-rug",
    name: "Bohemian Area Rug",
    headline: "The Grounding Layer",
    hookLine: "A woven area rug with bohemian patterns — warmth and character underfoot.",
    description:
      "A woven area rug with bohemian-inspired geometric patterns in warm, earthy tones — the kind of rug that grounds a room and gives it character. The flat-weave construction is durable enough for high-traffic areas and easy to clean.",
    price: 88.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bohemian-area-rug_de8776fb.png",
    tags: ["rug", "bohemian", "woven", "area", "geometric"],
    notes: "Flat-weave · Machine washable · Multiple sizes",
    available: true,
    variants: [
        { id: "bohemian-area-rug-4style-60x90cm", label: "60×90cm", price: 88.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897125457" },
        { id: "bohemian-area-rug-4style-80x160cm", label: "80×160cm", price: 88.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897158225" },
        { id: "bohemian-area-rug-4style-80x120cm", label: "80×120cm", price: 88.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250897190993" }
      ],
    crossSells: ["dwell-12", "dwell-2", "dwell-9"],
  },
  {
    id: "dwell-2",
    slug: "plush-shag-rug",
    name: "Plush Shag Rug",
    headline: "The Soft Landing",
    hookLine: "A deep-pile shag rug — the kind of surface you want to sink your feet into.",
    description:
      "A deep-pile shag rug with a luxuriously soft texture — the kind of surface that makes you want to walk barefoot. The dense pile provides cushioning and warmth underfoot, and the neutral tones complement any interior.",
    price: 78.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d.png",
    tags: ["rug", "shag", "plush", "soft", "deep-pile"],
    notes: "Deep pile · Non-slip backing · Multiple sizes",
    available: true,
    variants: [
        { id: "plush-shag-rug-beige-120x160cm", label: "Beige / 120X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898763857" },
        { id: "plush-shag-rug-white-100x160cm", label: "White / 100X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250898829393" },
        { id: "plush-shag-rug-beige-50x80cm", label: "Beige / 50X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250899058769" },
        { id: "plush-shag-rug-white-50x80cm", label: "White / 50X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250899517521" },
        { id: "plush-shag-rug-white-120x160cm", label: "White / 120X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250899648593" },
        { id: "plush-shag-rug-beige-100x160cm", label: "Beige / 100X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250899681361" },
        { id: "plush-shag-rug-white-80x160cm", label: "White / 80X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250899714129" },
        { id: "plush-shag-rug-white-40x60cm", label: "White / 40X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250899746897" },
        { id: "plush-shag-rug-beige-80x160cm", label: "Beige / 80X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900074577" },
        { id: "plush-shag-rug-beige-40x60cm", label: "Beige / 40X", price: 78.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250900107345" }
      ],
    crossSells: ["dwell-1", "dwell-12", "dwell-10"],
  },
  {
    id: "dwell-3",
    slug: "diatomite-bath-mat",
    name: "Diatomite Bath Mat",
    headline: "The Instant Dry",
    hookLine: "A stone bath mat that absorbs water instantly and dries in minutes — no more soggy towels.",
    description:
      "A diatomite stone bath mat that absorbs water on contact and dries within minutes — the kind of bathroom upgrade that makes you wonder why you ever used a fabric mat. The natural diatomite earth is antimicrobial, non-slip, and easy to clean.",
    price: 48.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diatomite-bath-mat_70379962.jpg",
    tags: ["bath-mat", "diatomite", "stone", "quick-dry", "antimicrobial"],
    notes: "Diatomite earth · Quick-dry · Antimicrobial · Non-slip",
        variants: [
        { id: "diatomite-bath-mat-grey-40x30cm", label: "Grey / 40X", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896175185" }
      ],
    available: true,
    crossSells: ["dwell-1", "dwell-2", "feast-12"],
  },
  {
    id: "dwell-4",
    slug: "linen-placemats",
    name: "Linen Placemats",
    headline: "The Table Foundation",
    hookLine: "Washed linen placemats with frayed edges — the base layer of a considered table.",
    description:
      "A set of washed linen placemats with naturally frayed edges — the kind of table foundation that makes even a simple weeknight dinner feel intentional. The pre-washed linen has a soft, lived-in quality from the first use.",
    price: 32.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/3_peZFc31SZBd42XjBrRwPaY_1774599125668_na1fn_L2hvbWUvdWJ1bnR1L2xpbmVuX2N1c2hpb25fY292ZXI_acc2473b_348a64ab.webp",
    tags: ["placemats", "linen", "washed", "frayed", "table"],
    notes: "Washed linen · Set of 4 · Machine washable",
    available: true,
    variants: [
        { id: "linen-placemats-original-hemp-color", label: "Natural Hemp", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914361425", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-4-natural-kY8wtKLGtykFAvApg3ewiq.webp" },
        { id: "linen-placemats-white-32x44cm", label: "White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914394193" },
        { id: "linen-placemats-caramel-colour-32x44", label: "Caramel", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914492497" },
        { id: "linen-placemats-grey-blue-32x44cm", label: "Grey Blue", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914525265", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-4-grey-jEJyQbd9cmY6DCFXCZxNDz.webp" }
      ],
    crossSells: ["dwell-5", "dwell-6", "feast-6"],
  },
  {
    id: "dwell-5",
    slug: "linen-tablecloth",
    name: "Linen Tablecloth",
    headline: "The Gathered Table",
    hookLine: "A washed linen tablecloth that drapes beautifully — the foundation of a considered table.",
    description:
      "A washed linen tablecloth that drapes with the kind of casual elegance that makes a table look like it belongs in a French farmhouse. The pre-washed linen is soft from the first use and develops more character with every wash.",
    price: 58.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a.png",
    tags: ["tablecloth", "linen", "washed", "table", "dining"],
    notes: "Washed linen · Machine washable · Multiple sizes",
    available: true,
    variants: [
        { id: "linen-tablecloth-royal-gray-35x120", label: "Royal Gray / 35X120", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251307905105" },
        { id: "linen-tablecloth-royal-gray-35x160", label: "Royal Gray / 35X160", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251307937873" },
        { id: "linen-tablecloth-royal-gray-35x180", label: "Royal Gray / 35X180", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251307970641" },
        { id: "linen-tablecloth-royal-gray-35x210", label: "Royal Gray / 35X210", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308003409" },
        { id: "linen-tablecloth-royal-gray-35x240", label: "Royal Gray / 35X240", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308036177" },
        { id: "linen-tablecloth-royal-gray-35x270", label: "Royal Gray / 35X270", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308068945" },
        { id: "linen-tablecloth-royal-gray-35x300", label: "Royal Gray / 35X300", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308101713" },
        { id: "linen-tablecloth-royal-gray-35x350", label: "Royal Gray / 35X350", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308134481" },
        { id: "linen-tablecloth-farrow-coffee-35x120", label: "Farrow Coffee / 35X120", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308167249" },
        { id: "linen-tablecloth-farrow-coffee-35x160", label: "Farrow Coffee / 35X160", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308200017" },
        { id: "linen-tablecloth-farrow-coffee-35x180", label: "Farrow Coffee / 35X180", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308232785" },
        { id: "linen-tablecloth-farrow-coffee-35x210", label: "Farrow Coffee / 35X210", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308265553" },
        { id: "linen-tablecloth-farrow-coffee-35x240", label: "Farrow Coffee / 35X240", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308298321" },
        { id: "linen-tablecloth-farrow-coffee-35x270", label: "Farrow Coffee / 35X270", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308331089" },
        { id: "linen-tablecloth-farrow-coffee-35x300", label: "Farrow Coffee / 35X300", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308363857" },
        { id: "linen-tablecloth-farrow-coffee-35x350", label: "Farrow Coffee / 35X350", price: 58.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251308396625" }
      ],
    crossSells: ["dwell-4", "dwell-6", "feast-6"],
  },
  {
    id: "dwell-6",
    slug: "linen-table-runner",
    name: "Linen Table Runner",
    headline: "The Centre Line",
    hookLine: "A washed linen table runner — the simplest way to make a table feel dressed.",
    description:
      "A washed linen table runner — the simplest, most effective way to make a dining table feel dressed and considered. The natural linen has a beautiful drape and the frayed edges add a relaxed, lived-in quality.",
    price: 32.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner_cc2c966a.jpg",
    tags: ["table-runner", "linen", "washed", "dining", "natural"],
    notes: "Washed linen · Machine washable · 40×180cm",
        variants: [
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X50", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309707345" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X120", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309740113" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X160", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309772881" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X180", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309805649" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X200", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309838417" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X220", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309871185" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X240", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309903953" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X260", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309936721" },
        { id: "linen-table-runner-light-enjoy-brown-30", label: "Light Enjoy Brown / 30X300", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251309969489" },
        { id: "linen-table-runner-light-gray-30x50", label: "Light Gray / 30X50", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310002257" },
        { id: "linen-table-runner-light-gray-30x120", label: "Light Gray / 30X120", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310035025" },
        { id: "linen-table-runner-light-gray-30x160", label: "Light Gray / 30X160", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310067793" },
        { id: "linen-table-runner-light-gray-30x180", label: "Light Gray / 30X180", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310100561" },
        { id: "linen-table-runner-light-gray-30x200", label: "Light Gray / 30X200", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310133329" },
        { id: "linen-table-runner-light-gray-30x220", label: "Light Gray / 30X220", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310166097" },
        { id: "linen-table-runner-light-gray-30x240", label: "Light Gray / 30X240", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310198865" },
        { id: "linen-table-runner-light-gray-30x260", label: "Light Gray / 30X260", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310231633" },
        { id: "linen-table-runner-light-gray-30x300", label: "Light Gray / 30X300", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310264401" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X50", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310297169" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X120", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310329937" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X160", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310362705" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X180", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310395473" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X200", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310428241" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X220", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310461009" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X240", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310493777" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X260", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310526545" },
        { id: "linen-table-runner-enjoy-the-navy-blue", label: "Enjoy The Navy Blue / 30X300", price: 32.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251310559313" }
      ],
    available: true,
    crossSells: ["dwell-5", "dwell-4", "feast-6"],
  },
  {
    id: "dwell-7",
    slug: "coral-fleece-throw-blanket",
    name: "Coral Fleece Throw Blanket",
    headline: "The Warm Wrap",
    hookLine: "Ultra-soft coral fleece throw — lightweight warmth for sofas, beds, and reading chairs.",
    description:
      "An ultra-soft coral fleece throw blanket — the kind of blanket that makes you want to curl up on the sofa with a book and a cup of tea. The coral fleece is lightweight yet warm, and the generous proportions make it perfect for sharing.",
    price: 38.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket_597daf8f.jpg",
    tags: ["blanket", "throw", "fleece", "coral", "soft"],
    notes: "Coral fleece · 150×200cm · Machine washable",
    available: true,
    variants: [
      { id: "dwell-7-crm", label: "Cream", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-7-cream-b9wX7dhnGgyPapEDi2QSeC.webp" },
      { id: "dwell-7-gry", label: "Grey", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-7-grey-FsZrVWkUD4TSfZA4EFw8Wt.webp" },
      { id: "dwell-7-sge", label: "Sage", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-7-sage-BPYwbLwCrTbx9eBXk4x5Xh.webp" },
    ],
    crossSells: ["dwell-8", "dwell-9", "dwell-10"],
  },
  {
    id: "dwell-8",
    slug: "knit-nap-blanket",
    name: "Knit Nap Blanket",
    headline: "The Afternoon Layer",
    hookLine: "A chunky knit blanket for naps, reading, and slow afternoons.",
    description:
      "A chunky knit blanket designed for naps, reading, and slow afternoons — the kind of blanket that becomes your favourite possession. The open knit provides warmth without weight, and the textured pattern adds visual interest to any sofa or bed.",
    price: 48.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-nap-blanket_b575cb1e.png",
    tags: ["blanket", "knit", "chunky", "nap", "textured"],
    notes: "Chunky knit · 130×170cm · Machine washable",
    available: true,
    variants: [
        { id: "knit-nap-blanket-khaki", label: "Khaki", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309215825", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-blanket-khaki-8AfvwHjXGKinttmQbqziQh.webp" },
        { id: "knit-nap-blanket-dark-grey", label: "Dark Grey", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309248593", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-blanket-dark-grey-m8w6JACVjLFfhrFBTG9TxK.webp" },
        { id: "knit-nap-blanket-light-grey", label: "Light Grey", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309281361", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-blanket-light-grey-U2okFj6tsHro4FXFxeJ49b.webp" }
      ],
    crossSells: ["dwell-7", "dwell-9", "dwell-10"],
  },
  {
    id: "dwell-9",
    slug: "chunky-knit-cushion-cover",
    name: "Chunky Knit Cushion Cover",
    headline: "The Textured Touch",
    hookLine: "A hand-knit cushion cover in chunky yarn — instant texture for any sofa.",
    description:
      "A hand-knit cushion cover in chunky yarn — the kind of texture that makes a sofa look and feel more inviting. The oversized cable knit pattern adds visual depth, and the natural cotton yarn is soft against the skin.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-cover_8caea939.png",
    tags: ["cushion", "cover", "knit", "chunky", "textured"],
    notes: "Cotton yarn · 45×45cm · Hidden zip · Insert not included",
    available: true,
    variants: [
        { id: "chunky-knit-cushion-cover-yellow", label: "Mustard Yellow", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306266705" },
        { id: "chunky-knit-cushion-cover-grey", label: "Charcoal Grey", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306299473", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9-grey-gJqKDqLHQ7MjDiqgE2oC9N.webp" },
        { id: "chunky-knit-cushion-cover-dark-brown", label: "Dark Brown", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306332241" },
        { id: "chunky-knit-cushion-cover-light-brown", label: "Light Brown", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306365009" },
        { id: "chunky-knit-cushion-cover-white", label: "Cream White", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306397777", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9-cream-TMdkwyocoBL2XAiHc3L7Xt.webp" },
        { id: "chunky-knit-cushion-cover-beige", label: "Natural Beige", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306430545" }
      ],
    crossSells: ["dwell-10", "dwell-11", "dwell-13"],
  },
  {
    id: "dwell-10",
    slug: "boucle-sphere-cushion",
    name: "Boucle Sphere Cushion",
    headline: "The Soft Sphere",
    hookLine: "A round boucle cushion — playful, tactile, and irresistibly soft.",
    description:
      "A round boucle cushion with a playful sphere shape — the kind of object that adds personality and texture to a sofa or bed. The boucle fabric is irresistibly soft to the touch, and the sphere shape makes it a conversation piece.",
    price: 32.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8.png",
    tags: ["cushion", "boucle", "sphere", "round", "soft"],
    notes: "Boucle fabric · 35cm diameter · Filled",
    available: true,
    variants: [
        { id: "boucle-sphere-cushion-creamy-white-22cm", label: "Creamy White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306594385", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-10-cream-jDjVShooeVXkPZBneoGvqL.webp" },
        { id: "boucle-sphere-cushion-light-brown-22cm", label: "Light Brown", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306627153" },
        { id: "boucle-sphere-cushion-lilac-grey-22cm", label: "Lilac Grey", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306659921" },
        { id: "boucle-sphere-cushion-misty-rose-22cm", label: "Misty Rose", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306692689" },
        { id: "boucle-sphere-cushion-creamy-white-28cm", label: "Creamy White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306725457", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-10-cream-jDjVShooeVXkPZBneoGvqL.webp" },
        { id: "boucle-sphere-cushion-light-brown-28cm", label: "Light Brown", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306758225" },
        { id: "boucle-sphere-cushion-lilac-grey-28cm", label: "Lilac Grey", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306790993" },
        { id: "boucle-sphere-cushion-misty-rose-28cm", label: "Misty Rose", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306823761" },
        { id: "boucle-sphere-cushion-black-22cm", label: "Black", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306856529" },
        { id: "boucle-sphere-cushion-black-28cm", label: "Black", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306889297" },
        { id: "boucle-sphere-cushion-navy-blue-22cm", label: "Navy Blue", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306922065" },
        { id: "boucle-sphere-cushion-navy-blue-28cm", label: "Navy Blue", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306954833" },
        { id: "boucle-sphere-cushion-beige-22cm", label: "Beige", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306987601" },
        { id: "boucle-sphere-cushion-beige-28cm", label: "Beige", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307020369" }
      ],
    crossSells: ["dwell-9", "dwell-11", "dwell-7"],
  },
  {
    id: "dwell-11",
    slug: "tufted-tassel-cushion",
    name: "Tufted Tassel Cushion",
    headline: "The Artisan Pillow",
    hookLine: "A tufted cushion with corner tassels — handcraft details for the sofa.",
    description:
      "A tufted cushion cover with decorative corner tassels — the kind of handcraft detail that adds warmth and character to any sofa or bed. The tufted texture creates a raised pattern that catches light beautifully.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion_cbe1a4f2.png",
    tags: ["cushion", "tufted", "tassel", "artisan", "decorative"],
    notes: "Cotton · Tufted · Corner tassels · 45×45cm · Insert not included",
    available: true,
    crossSells: ["dwell-9", "dwell-10", "dwell-13"],
      variants: [
        { id: "tufted-tassel-cushion-beige-square-pillow", label: "Beige Square Pillow / Pillowcase", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251303809105" },
        { id: "tufted-tassel-cushion-beige-square-pillow", label: "Beige Square Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251303841873" },
        { id: "tufted-tassel-cushion-beige-waist-pillow-p", label: "Beige Waist Pillow / Pillowcase", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251303874641" },
        { id: "tufted-tassel-cushion-beige-waist-pillow-p", label: "Beige Waist Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251303907409" },
        { id: "tufted-tassel-cushion-yellow-square-pillow", label: "Yellow Square Pillow / Pillowcase", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251303940177" },
        { id: "tufted-tassel-cushion-yellow-square-pillow", label: "Yellow Square Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251303972945" },
        { id: "tufted-tassel-cushion-yellow-waist-pillow", label: "Yellow Waist Pillow / Pillowcase", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304005713" },
        { id: "tufted-tassel-cushion-yellow-waist-pillow", label: "Yellow Waist Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304038481" }
      ]
  },
  {
    id: "dwell-12",
    slug: "plush-round-rug",
    name: "Plush Round Rug",
    headline: "The Soft Circle",
    hookLine: "A round plush rug — soft underfoot, perfect for bedrooms and reading nooks.",
    description:
      "A round plush rug with a deep, soft pile — the kind of surface that defines a space within a room. Perfect beside a bed, under a reading chair, or in a nursery. The non-slip backing keeps it in place on hard floors.",
    price: 48.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd.png",
    tags: ["rug", "round", "plush", "soft", "bedroom"],
    notes: "Deep pile · Non-slip backing · 100cm diameter",
    available: true,
    variants: [
        { id: "plush-round-rug-white-35-35cm", label: "White / 35*", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304071249" },
        { id: "plush-round-rug-hite-brown-tip-35-35", label: "Hite Brown Tip / 35*", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304104017" },
        { id: "plush-round-rug-black-35-35cm", label: "Black / 35*", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304136785" },
        { id: "plush-round-rug-lotus-root-pink-35-3", label: "Lotus Root Pink / 35*", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304169553" },
        { id: "plush-round-rug-light-gray-35-35cm", label: "Light Gray / 35*", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304202321" },
        { id: "plush-round-rug-black-50x50cm", label: "Black / 50X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304235089" },
        { id: "plush-round-rug-black-60x60cm", label: "Black / 60X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304267857" },
        { id: "plush-round-rug-light-gray-50x50cm", label: "Light Gray / 50X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304300625" },
        { id: "plush-round-rug-light-gray-60x60cm", label: "Light Gray / 60X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304333393" },
        { id: "plush-round-rug-white-50x50cm", label: "White / 50X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304366161" },
        { id: "plush-round-rug-white-60x60cm", label: "White / 60X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304398929" },
        { id: "plush-round-rug-hite-brown-tip-50x50", label: "Hite Brown Tip / 50X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304431697" },
        { id: "plush-round-rug-hite-brown-tip-60x60", label: "Hite Brown Tip / 60X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304464465" },
        { id: "plush-round-rug-lotus-root-pink-50x5", label: "Lotus Root Pink / 50X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304497233" },
        { id: "plush-round-rug-lotus-root-pink-60x6", label: "Lotus Root Pink / 60X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304530001" },
        { id: "plush-round-rug-black-40x40cm", label: "Black / 40X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304562769" },
        { id: "plush-round-rug-white-40x40cm", label: "White / 40X", price: 48.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251304595537" }
      ],
    crossSells: ["dwell-1", "dwell-2", "dwell-3"],
  },
  {
    id: "dwell-13",
    slug: "velvet-stripe-cushion-cover",
    name: "Velvet Stripe Cushion Cover",
    headline: "The Luxe Touch",
    hookLine: "A velvet cushion cover with tonal stripes — subtle luxury for the sofa.",
    description:
      "A velvet cushion cover with tonal stripes that catch the light differently depending on the angle — the kind of subtle luxury that elevates a sofa without being ostentatious. The velvet is soft and durable, and the hidden zip keeps the closure invisible.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-cover_58155c0e.png",
    tags: ["cushion", "cover", "velvet", "stripe", "luxe"],
    notes: "Velvet · Tonal stripes · 45×45cm · Hidden zip · Insert not included",
    available: true,
    variants: [
        { id: "velvet-stripe-cushion-cover-white", label: "Ivory White", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304824913", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-ivory-white-d5iEgp94Y2FG3VModWqDXj.webp" },
        { id: "velvet-stripe-cushion-cover-silver-gray", label: "Silver Grey", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304857681", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-silver-grey-RxTWphjdFomUTHZbTN5PD4.webp" },
        { id: "velvet-stripe-cushion-cover-yellow", label: "Mustard Yellow", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304890449", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-mustard-yellow-gNnQVd92YVoSEfnzsT3j6E.webp" },
        { id: "velvet-stripe-cushion-cover-black", label: "Charcoal Black", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304923217", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-charcoal-black-a4v7HfH2PpSTLU3WJ6zfVv.webp" },
        { id: "velvet-stripe-cushion-cover-wine-red", label: "Wine Red", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304955985", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-wine-red-9UT7dnuPihYuYFwXbq9wvh.webp" },
        { id: "velvet-stripe-cushion-cover-blue", label: "Navy Blue", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304988753", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-navy-blue-fYMRURuxaDzaJT4jDFAqEM.webp" },
        { id: "velvet-stripe-cushion-cover-white-and-pink-towel", label: "White & Pink Set", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305021521", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-white-pink-set-AdYgYaVB9tsUedSnpJjzTa.webp" }
      ],
    crossSells: ["dwell-9", "dwell-11", "dwell-10"],
  },
  {
    id: "dwell-14",
    slug: "pet-blanket",
    name: "Pet Blanket",
    headline: "The Companion's Comfort",
    hookLine: "A soft fleece blanket sized for pets — for beds, crates, and favourite spots.",
    description:
      "A soft fleece blanket sized and designed for pets — the kind of considered object that shows the same care for your companion's comfort as your own. The fleece is machine-washable, quick-drying, and resistant to pet hair clinging.",
    price: 22.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pet-blanket_2643de40.jpg",
    tags: ["blanket", "pet", "fleece", "soft", "washable"],
    notes: "Fleece · 80×120cm · Machine washable · Pet-hair resistant",
    available: true,
    variants: [
        { id: "pet-blanket-random-color-small-5", label: "Small (50×70cm)", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309314129" },
        { id: "pet-blanket-random-color-large-1", label: "Large (100×70cm)", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309346897" }
      ],
    crossSells: ["dwell-7", "dwell-8", "dwell-12"],
  },
];

// ═══════════════════════════════════════════════════════════════════════
// COLLECTIONS
// ═══════════════════════════════════════════════════════════════════════

export const COLLECTIONS: Collection[] = [
  {
    slug: "feast",
    name: "FEAST",
    tagline: "The Ritual Meal",
    description:
      "Kitchen tools, tabletop accessories, and drinkware for the intentional cook and host. These are the objects you reach for when you cook and when you gather — each one chosen for its quiet utility and considered design.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-gather_87a9bb21_7f1ded38.webp",
    products: [],
  },
  {
    slug: "adorn",
    name: "ADORN",
    tagline: "Objects of Intention",
    description:
      "Decorative objects, vases, wall art, and home fragrance. These are the objects that make a space feel considered — purely objects that transform the atmosphere of a room through scent, form, or visual presence.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-adorn_18502690_c51d6d47.webp",
    products: [],
  },
  {
    slug: "bloom",
    name: "BLOOM",
    tagline: "Everlasting Greenery",
    description:
      "Botanicals, dried flowers, faux plants, garlands, and planters. Living and living-adjacent objects that bring the outside in — every product in this collection relates to plants, flowers, or the vessels that hold them.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-bloom_bb15969d_44bea310.webp",
    products: [],
  },
  {
    slug: "glow",
    name: "GLOW",
    tagline: "The Light Within",
    description:
      "Lamps, lanterns, solar lights, and ambient lighting. Every product in this collection is about light — the warm glow that transforms a house into a home after dark.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-glow-hero-mH4gEPXfSW96T3wniYQnFc.webp",
    products: [],
  },
  {
    slug: "dwell",
    name: "DWELL",
    tagline: "The Fabric of Home",
    description:
      "Rugs, blankets, cushions, table linens, and soft furnishings. The textiles and surfaces that make a home feel warm, layered, and lived-in.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-dwell-hero-c5XLa39hG9yv5HoqPXHuY7.webp",
    products: [],
  },
];

// Populate collection products (only available products shown by default)
COLLECTIONS.forEach((col) => {
  col.products = PRODUCTS.filter(
    (p) => p.collectionSlug === col.slug && p.available
  );
});

// Helper: get all products including unavailable (for admin/debug)
export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getAvailableProducts(): Product[] {
  return PRODUCTS.filter((p) => p.available);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

// Cross-sell helper: get recommended products for a given product
export function getCrossSells(product: Product): Product[] {
  if (!product.crossSells) return [];
  return product.crossSells
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined && p.available);
}

// Cart cross-sell: recommend items that push cart toward free shipping
export function getThresholdNudgeItems(cartTotal: number): Product[] {
  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal;
  if (remaining <= 0) return [];
  return PRODUCTS.filter(
    (p) => p.available && p.price <= remaining + 5 && p.price >= 9
  )
    .sort((a, b) => Math.abs(a.price - remaining) - Math.abs(b.price - remaining))
    .slice(0, 3);
}

// ── Shopify Variant Enrichment ──────────────────────────────────────
// Enrich static products with Shopify variant GIDs for real cart operations
import { shopifyMap } from "./shopifyMap";

(function enrichWithShopifyIds() {
  for (const product of PRODUCTS) {
    const shopifyInfo = shopifyMap[product.slug];
    if (!shopifyInfo) continue;

    product.shopifyHandle = shopifyInfo.handle;

    if (product.variants && product.variants.length > 0) {
      // Map static variants to Shopify variants by index
      product.variants.forEach((v, i) => {
        if (i < shopifyInfo.variants.length) {
          v.shopifyVariantId = shopifyInfo.variants[i].id;
        }
      });
    } else {
      // Single-variant product: store the first Shopify variant GID
      const firstAvailable = shopifyInfo.variants.find(v => v.available);
      if (firstAvailable) {
        product.shopifyVariantId = firstAvailable.id;
      }
    }
  }
})();

/**
 * Get the Shopify variant GID for a product (for cart operations).
 * For multi-variant products, pass the static variant.
 * For single-variant products, returns the default Shopify variant.
 */
export function getShopifyVariantGid(
  product: Product,
  variant?: Variant
): string | null {
  if (variant?.shopifyVariantId) return variant.shopifyVariantId;
  if (product.shopifyVariantId) return product.shopifyVariantId;

  // Fallback: look up from the map
  const info = shopifyMap[product.slug];
  if (!info) return null;
  const available = info.variants.find(v => v.available);
  return available?.id ?? null;
}
