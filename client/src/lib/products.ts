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
  additionalImages?: string[];
  tags: string[];
  notes?: string;
  variants?: Variant[];
  crossSells?: string[];
  available: boolean;
  hookLine?: string;
  images?: string[];
  shopifyHandle?: string;
  shopifyVariantId?: string;
  variantGuide?: string; // HTML string for variant comparison tables (rendered on PDP)
  includes?: string[]; // "What's in the Box" — list of items included with purchase
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
      "A collection of white ceramic seasoning pots with bamboo lids, thoughtfully arranged to bring a quiet, Japanese-inspired aesthetic to your kitchen counter. Available in versatile configurations to perfectly suit your culinary space, this elegantly retro-styled collection transforms a simple cooking area from purely functional to deeply considered. Each vessel is crafted to hold your essential salts, sugars, and beloved spices while maintaining a serene visual harmony in your home. The substantial two-kilogram weight of the complete set ensures steadfast stability during your daily cooking rituals, making every pinch of seasoning feel like a deliberate, mindful act.",
    price: 38.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-seasoning-pot-set-v4-mdSh8wc9q8LZ9W5bmQTsKc.webp",
    tags: ["seasoning", "ceramic", "bamboo", "kitchen", "storage"],
    notes: "Material: Ceramic and bamboo · Style: Japanese retro · Weight: 2kg",
    available: true,
    includes: ["1 × Ceramic pot", "1 × Bamboo lid", "1 × Ceramic spoon"],
    crossSells: ["acacia-salt-pepper-mill", "teak-kitchen-utensil-set", "japanese-wooden-coaster-set"],
      variants: [
        { id: "ceramic-seasoning-pot-set-a", label: "Classic White", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250895978577", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-seasoning-pot-set-classic-white-v3-JmZYkNKGwiLEw3fmS5eBYR.webp" },
        { id: "ceramic-seasoning-pot-set-b", label: "Matte Grey", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896011345", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-seasoning-pot-set-matte-grey-v3-7BnAPK3jcHpjooya54c42R.webp" },
        { id: "ceramic-seasoning-pot-set-c", label: "Sage Green", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896044113", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-seasoning-pot-set-sage-green-v3-fGMGKXSAo59vmSH6DxpaVE.webp" }
      ]
  },
  {
    id: "feast-2",
    slug: "teak-kitchen-utensil-set",
    name: "Teak Kitchen Utensil Set",
    headline: "The Natural Kitchen",
    hookLine: "Hand-finished teak utensils — spoons, ladles, turners, and spatulas — that never scratch non-stick.",
    description:
      "A collection of hand-finished Thailand teak wood cooking utensils — each one carved from natural teak with the density and oil content that makes this wood the material of choice for serious kitchens. Designed to be lightweight and rust-free, these beautifully shaped tools feature long handles for a delicate, comfortable grasp. Safe for use on hot surfaces and all cooking pans, including non-stick, they bring both ecological mindfulness and lasting function to your daily culinary rituals.",
    price: 5.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp",
    tags: ["utensils", "teak", "wood", "cooking", "natural"],
    notes: "Material: Natural teak wood · Care: Hand wash with mild soap and water, store in a dry place · Heat-resistant and safe for non-stick surfaces",
    available: true,
    variants: [
        { id: "teak-utensil-soup-ladle", label: "Soup Ladle", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897223761" },
        { id: "teak-utensil-slotted-turner", label: "Slotted Turner", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897256529" },
        { id: "teak-utensil-2pc-set", label: "2-Piece Set", price: 8.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897289297" },
        { id: "teak-utensil-4pc-set", label: "4-Piece Set", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897322065" },
        { id: "teak-utensil-3pc-set-a", label: "3-Piece Set A", price: 10.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897354833" },
        { id: "teak-utensil-8pc-set-double", label: "8-Piece Set (2 of each)", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897387601" },
        { id: "teak-utensil-8pc-set", label: "8-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897420369" },
        { id: "teak-utensil-9pc-set", label: "9-Piece Set", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897453137" },
        { id: "teak-utensil-skimmer", label: "Skimmer Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897485905" },
        { id: "teak-utensil-4pc-set-b", label: "4-Piece Set B", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897518673" },
        { id: "teak-utensil-soup-spoon", label: "Soup Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897551441" },
        { id: "teak-utensil-strainer-spoon", label: "Strainer Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897584209" },
        { id: "teak-utensil-wok-spatula", label: "Wok Spatula", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897616977" },
        { id: "teak-utensil-flat-spatula", label: "Flat Spatula", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897649745" },
        { id: "teak-utensil-pasta-fork", label: "Pasta Fork", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897682513" },
        { id: "teak-utensil-5pc-set-b", label: "5-Piece Set B", price: 30.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897715281" },
        { id: "teak-utensil-5pc-set", label: "5-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897748049" },
        { id: "teak-utensil-10pc-set", label: "10-Piece Set", price: 36.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897780817" },
        { id: "teak-utensil-4pc-set-c", label: "4-Piece Set C", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897813585" },
        { id: "teak-utensil-7pc-set", label: "7-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897846353" },
        { id: "teak-utensil-3pc-set-b", label: "3-Piece Set B", price: 12.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897879121" },
        { id: "teak-utensil-complete-set", label: "Complete Set", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897911889" },
        { id: "teak-utensil-rice-paddle", label: "Rice Paddle", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897944657" },
        { id: "teak-utensil-serving-spoon", label: "Serving Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897977425" },
        { id: "teak-utensil-mixing-spoon", label: "Mixing Spoon", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898010193" },
        { id: "teak-utensil-cooking-spoon", label: "Cooking Spoon", price: 4.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898042961" },
        { id: "teak-utensil-8pc-set-c", label: "8-Piece Set C", price: 34.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898075729" },
        { id: "teak-utensil-salad-server", label: "Salad Server", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/teak-kitchen-utensil-set-v3-P8oAFW9E2T9rHWXyanLrcp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898108497" }
      ],
    includes: ["1 × Teak kitchen utensil set"],
    crossSells: ["ebony-cutting-board", "black-walnut-cutting-board", "ceramic-seasoning-pot-set"],
  },
  {
    id: "feast-3",
    slug: "japanese-ceramic-spoon-set",
    name: "Japanese Ceramic Spoon Set",
    headline: "The Small Ritual",
    hookLine: "Hand-glazed ceramic spoons in five artisan finishes — for condiments, tasting, and quiet beauty.",
    description:
      "A collection of Japanese-style ceramic spoons, each finished in a distinctive reactive glaze that speaks to the artistry of traditional craftsmanship. From the deep Purplish Blue to the ethereal Sky and the grounded Black Rhyme, every piece carries subtle imperfections that make it entirely unique. Designed with a retro sensibility suitable for both intimate home dining and bustling commercial spaces, these spoons bring quiet beauty to condiments, tasting menus, and daily rituals. Each ceramic spoon is sold individually, allowing you to curate your own eclectic set or gather a uniform collection for your table.",
    price: 6.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-ceramic-spoon-set-v3-bgNd5RiWuVXXpvA2bRBijc.webp",
    tags: ["spoon", "ceramic", "japanese", "condiment", "tabletop"],
    notes: "Material: Ceramic · Finish: Reactive glaze · Sold individually · Dishwasher safe",
    available: true,
    shopifyHandle: "japanese-style-creative-ceramic-spoon-small-kitchen-restaurant",
    variants: [
        { id: "japanese-ceramic-spoon-purplish-blue", label: "Purplish Blue", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-matcha-ceremony-set-v3-Uf3Yfg6xdqoAWXpXvqXVGF.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250896830545" },
        { id: "japanese-ceramic-spoon-lunar-december", label: "Lunar December", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-spoon-lunar-december-v3-FRjzZ7K89VhWBd9bQJsEui.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250896896081" },
        { id: "japanese-ceramic-spoon-sky", label: "Sky", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-spoon-sky-v3-hwiEDXpqMyBiLJST7ahmrw.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250896961617" },
        { id: "japanese-ceramic-spoon-black-rhyme", label: "Black Rhyme", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-spoon-follow-the-fate-v3-78Bm5VdSiKqpiBK7FirFiA.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897059921" },
        { id: "japanese-ceramic-spoon-follow-the-fate", label: "Follow The Fate", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-ceramic-spoon-set-v3-bgNd5RiWuVXXpvA2bRBijc.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897092689" }],
    includes: ["4 × Japanese ceramic spoons", "1 × Wooden presentation box"],
    crossSells: ["retro-reactive-glaze-dinnerware", "stoneware-travel-tea-set", "japanese-sake-set"],
  },
  {
    id: "feast-4",
    slug: "japanese-matcha-ceremony-set",
    name: "Japanese Matcha Ceremony Set",
    headline: "The Complete Ritual",
    hookLine: "A seven-piece matcha set — bowl, whisk, holder, scoop, sieve, spoon, and caddy.",
    description:
      "A complete matcha ceremony set  —  everything you need to transform a morning cup of green tea into a meditative ritual. Crafted from heat-resistant ceramic with a distinctive colored glaze, the collection is designed to withstand high temperatures while remaining comfortably cool to the touch. The essential bamboo chasen features eighty fine tines, meticulously carved to ensure a perfectly frothed bowl of matcha every time. Thoughtfully considered for both daily use and travel, this elegantly portable set invites you to pause and cultivate tranquility wherever you are.",
    price: 52.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-matcha-ceremony-set-v3-nXemFUgeuT6LDiFyELmK2y.webp",
    tags: ["matcha", "tea", "ceremony", "bamboo", "whisk", "ceramic", "bowl", "japanese"],
    notes: "Material: Ceramic · Finish: Colored glaze · Features: Heat-resistant, anti-scald, portable",
    available: true,
    variants: [
        { id: "matcha-set-7pieces-black", label: "7-Piece Black", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-matcha-ceremony-set-v3-nXemFUgeuT6LDiFyELmK2y.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631316561" },
        { id: "matcha-set-7piece-painted-brown", label: "7-Piece Painted Brown", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-matcha-ceremony-set-v3-nXemFUgeuT6LDiFyELmK2y.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631349329" },
        { id: "matcha-set-7piece-green", label: "7-Piece Green", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-matcha-ceremony-set-v3-nXemFUgeuT6LDiFyELmK2y.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631414865" }
      ],
    includes: ["1 × Japanese Matcha Ceremony Set"],
    crossSells: ["stoneware-travel-tea-set", "japanese-stoneware-mug", "retro-reactive-glaze-dinnerware"],
  },
  {
    id: "feast-5",
    slug: "stoneware-travel-tea-set",
    name: "Stoneware Travel Tea Set",
    headline: "The Portable Ceremony",
    hookLine: "Compact stoneware teapot with one cup — ritual wherever you go.",
    description:
      "A compact stoneware tea set, featuring one teapot and one matching cup, designed for the person who refuses to compromise on their daily tea ritual even while on the move. Expertly crafted from coarse ceramic with a tactile antique pottery finish, the teapot nests perfectly inside the cup for effortless and secure travel. Suitable for brewing a mindful serving for one to two people, this modern yet remarkably simple set ensures a moment of grounded tranquility wherever your journey may take you. The thoughtful nesting design speaks to a philosophy of minimalism, allowing you to carry the comforts of home across any distance.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-travel-tea-set-v4-XYVMFoUbPUiTRiBgEtWuH2.webp",
    tags: ["tea", "stoneware", "travel", "japanese", "portable"],
    notes: "Material: Coarse ceramic · Capacity: 1-2 people · Finish: Antique pottery · Design: Nesting",
    available: true,
    variants: [
        { id: "stoneware-travel-tea-set-one-pot-one-cup-with", label: "Tea Set Only (Pot + Cup + Lid)", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-travel-tea-set-v4-XYVMFoUbPUiTRiBgEtWuH2.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898141265" },
        { id: "stoneware-travel-tea-set-capsule-bag", label: "Tea Set + Capsule Carry Case", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-travel-tea-set-v4-XYVMFoUbPUiTRiBgEtWuH2.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898174033" },
        { id: "stoneware-travel-tea-set-travel-bag", label: "Tea Set + Padded Travel Bag", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/stoneware-travel-tea-set-v4-XYVMFoUbPUiTRiBgEtWuH2.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898206801" }
      ],
    includes: ["1 × Teapot", "2 × Tea cups", "1 × Travel bag"],
    crossSells: ["japanese-matcha-ceremony-set", "japanese-stoneware-mug", "multi-function-grater"],
  },
  {
    id: "feast-6",
    slug: "retro-reactive-glaze-dinnerware",
    name: "Retro Reactive Glaze Dinnerware",
    headline: "The Imperfect Surface",
    hookLine: "Teal kiln-change ceramic dinnerware — plates, bowls, and mugs in a stunning reactive glaze.",
    description:
      "A complete set of reactive-glazed porcelain dinnerware — plates, bowls, and mugs — where each piece emerges from the kiln with its own unique pattern of colour and depth. The European-style round forms are crafted from high-quality porcelain with an underglaze technique that ensures lasting beauty through daily use. Microwave-safe and designed for adults who appreciate the quiet pleasure of a well-set table, this collection transforms an ordinary meal into a considered ritual. Choose from individual sets of four or a complete place setting.",
    price: 10.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp",
    tags: ["plate", "bowl", "mug", "ceramic", "reactive-glaze", "dinnerware", "teal"],
    notes: "Material: Porcelain · Technique: Underglaze · Microwave safe · European round style · Sets of 4",
    available: true,
    variants: [
        { id: "retro-dinnerware-dinner-plate-4pcs", label: "Dinner Plate × 4", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248630890577" },
        { id: "retro-dinnerware-bowl-4pcs", label: "Bowl × 4", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248630923345" },
        { id: "retro-dinnerware-mug-4pcs", label: "Mug × 4", price: 34.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248630956113" },
        { id: "retro-dinnerware-side-plate-4pcs", label: "Side Plate × 4", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248630988881" },
        { id: "retro-dinnerware-4pcs-set", label: "4-Piece Place Setting", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631021649" },
        { id: "retro-dinnerware-bowl-single", label: "Bowl (Single)", price: 10.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631054417" },
        { id: "retro-dinnerware-mug-single", label: "Mug (Single)", price: 12.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631087185" },
        { id: "retro-dinnerware-dinner-plate-single", label: "Dinner Plate (Single)", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631119953" },
        { id: "retro-dinnerware-side-plate-single", label: "Side Plate (Single)", price: 10.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/retro-reactive-glaze-dinnerware-v5-BqFQhPrQuSPNd3F5NkiLnC.webp", shopifyVariantId: "gid://shopify/ProductVariant/59248631152721" }
      ],
    includes: ["4 × Dinnerware pieces"],
    crossSells: ["japanese-ceramic-spoon-set", "japanese-sake-set", "jujube-wood-serving-basin"],
  },
  {
    id: "feast-7",
    slug: "black-walnut-resin-tray",
    name: "Black Walnut Resin River Tray",
    headline: "The Dark Surface",
    hookLine: "Handcrafted walnut tray with a river of resin running through its centre — a functional work of art.",
    description:
      "A striking serving tray where rich black walnut wood meets translucent resin in a seamless river design — each piece a unique collaboration between nature and craft. Available in both transparent and blue resin finishes, and in two generous sizes, this mild-luxury retro-styled tray brings an artisan quality to your table. The solid walnut provides a warm, natural frame while the resin centre creates a luminous focal point, perfect for presenting cheeses, fruits, or simply as a statement piece on your coffee table.",
    price: 34.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-resin-tray-v4-ATAMBpCjhy22aB86wijp22.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-7-dimensions_04dfdf6e.jpg"],
    tags: ["tray", "walnut", "wood", "serving", "resin", "river", "epoxy"],
    notes: "Material: Black walnut wood and resin · Style: Mild luxury retro · Sizes: 29cm and 36cm",
    available: true,
    includes: ["1 × Resin river tray"],
    crossSells: ["acacia-serving-bowl", "jujube-wood-serving-basin", "acacia-wood-serving-plate"],
      variants: [
        { id: "walnut-resin-tray-transparent-29cm", label: "Clear Resin — 29cm", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-resin-tray-clear-resin-v3-7ozs8EshYuLJb8mVgsZw7Q.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901057617" },
        { id: "walnut-resin-tray-blue-29cm", label: "Blue Resin — 29cm", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-resin-tray-blue-resin-v3-X6hAgSNjxFLUariDCYePDz.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901090385" },
        { id: "walnut-resin-tray-blue-36cm", label: "Blue Resin — 36cm", price: 72.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-resin-tray-blue-36cm-v3-KRobD3QL5QvWLYakWeV4Vu.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901123153" },
        { id: "walnut-resin-tray-blue-plate", label: "Blue Resin Plate", price: 34.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-resin-tray-blue-plate-v3-X6AUib3NU8zG6w9mHZ7VEo.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901155921" }
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
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-serving-bowl-v3-e6imSQBiJT2s2NsHrjYd6X.webp",
    tags: ["bowl", "acacia", "wood", "serving", "fruit"],
    notes: "Solid acacia · Hand-finished · Dark walnut grain · Multiple sizes",
    available: true,
    variants: [
      { id: "feast-8-s", label: "Small (12×6cm)", price: 28.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59248630562897"},
      { id: "feast-8-m", label: "Medium (18×7.5cm)", price: 48.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59248630366289"},
      { id: "feast-8-l", label: "Large (24×8cm)", price: 68.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59248630431825"}],
    includes: ["1 × Acacia serving bowl"],
    crossSells: ["jujube-wood-serving-basin", "acacia-wood-serving-plate", "black-walnut-resin-tray"],
  },
  {
    id: "feast-9",
    slug: "jujube-wood-serving-basin",
    name: "Jujube Wood Serving Basin",
    headline: "The Generous Bowl",
    hookLine: "A deep basin carved from solid wood — for salads, fruit, or centrepiece arrangements.",
    description:
      "A generous serving basin hand-carved from solid natural wood, ensuring that each piece remains entirely unique in its shape, size, and intricate grain pattern. Crafted carefully from cedar root, its warm, organic form is perfectly suited for serving vibrant salads, fresh fruits, or acting as a striking centrepiece in your home. Available in two versatile size ranges to accommodate different culinary needs, these bowls vary naturally, meaning no two are exactly alike. This durable, eco-friendly vessel brings an earthy elegance to any table setting, making it a wonderful addition to your daily rituals or a thoughtful gift for loved ones.",
    price: 58.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/jujube-wood-serving-basin-v4-RPbK4wpiqABakbJCNx3xvo.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-9-dimensions_a981c7ad.jpg"],
    tags: ["basin", "jujube", "wood", "serving", "large"],
    notes: "Material: Cedar root wood · Dimensions: 16-20cm or 20-24cm diameter · Hand-carved",
    available: true,
    variants: [
        { id: "jujube-wood-serving-basin-small", label: "Small (16–20cm diameter)", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/jujube-wood-serving-basin-v4-RPbK4wpiqABakbJCNx3xvo.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913411153" },
        { id: "jujube-wood-serving-basin-large", label: "Large (20–24cm diameter)", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/jujube-wood-serving-basin-v4-RPbK4wpiqABakbJCNx3xvo.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913443921" }
      ],
    includes: ["1 × Serving basin"],
    crossSells: ["acacia-serving-bowl", "acacia-wood-serving-plate", "black-walnut-resin-tray"],
  },
  {
    id: "feast-10",
    slug: "acacia-wood-serving-plate",
    name: "Acacia Wood Serving Plate",
    headline: "The Quiet Surface",
    hookLine: "Hand-polished Philippine acacia plates in five shapes — for snacks, cheese, or everyday serving.",
    description:
      "Carved from solid Philippine acacia and hand-polished to a smooth, satin finish, these serving plates bring a touch of organic warmth to any table setting. Each plate showcases the wood's natural grain, featuring rich swirls of honey and walnut tones that ensure no two pieces are exactly alike. Designed as versatile flat plates for tea tableware, they are equally suited for presenting a carefully curated dinner, an assortment of snacks, or your favorite cheeses. Available in five distinct shapes, they invite you to mix and match, creating a personalized and inviting presentation for everyday dining or special gatherings.",
    price: 14.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-wood-serving-plate-v4-55hpBkmSsK7BrCYGBXBTCp.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10-dimensions_1b0a7738.jpg"],
    tags: ["plate", "acacia", "wood", "serving", "snack"],
    notes: "Material: Philippine acacia · Finish: Hand-polished · Application: Dinner, snacks, and tea tableware",
    available: true,
    variants: [
        { id: "acacia-plate-rectangle-25cm", label: "Rectangle (25 × 12.5cm)", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-wood-serving-plate-v4-55hpBkmSsK7BrCYGBXBTCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913706065" },
        { id: "acacia-plate-small-square", label: "Small Square (12.5cm)", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-wood-serving-plate-v4-55hpBkmSsK7BrCYGBXBTCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913738833" },
        { id: "acacia-plate-large-rectangle", label: "Large Rectangle (30 × 15cm)", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-wood-serving-plate-v4-55hpBkmSsK7BrCYGBXBTCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913771601" },
        { id: "acacia-plate-medium-rectangle", label: "Medium Rectangle (20 × 12cm)", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-wood-serving-plate-v4-55hpBkmSsK7BrCYGBXBTCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913804369" },
        { id: "acacia-plate-small-rectangle", label: "Small Rectangle (15 × 10cm)", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-wood-serving-plate-v4-55hpBkmSsK7BrCYGBXBTCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913837137" }
      ],
    includes: ["1 × Acacia wood serving plate"],
    crossSells: ["acacia-serving-bowl", "black-walnut-resin-tray", "rattan-serving-tray"],
  },
  {
    id: "feast-11",
    slug: "handmade-wooden-cup",
    name: "Handmade Wooden Cup",
    headline: "The Warm Vessel",
    hookLine: "A solid wood drinking cup, handmade with visible grain — warm to the touch.",
    description:
      "A single solid wood drinking cup, handmade with visible grain and a warm honey tone that deepens beautifully over time. The kind of vessel that completely changes the way you experience your daily rituals, as the natural wood is inherently warm to the touch and the gentle weight is incredibly reassuring in the hand. Available in an array of thoughtful silhouettes and capacities ranging from 150ml to 340ml, each piece is designed to bring an earthy, tactile joy to your everyday life. Whether you are enjoying a quiet morning coffee or sharing a comforting evening tea, this meticulously crafted cup transforms an ordinary moment into something truly special.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/handmade-wooden-cup-v3-eFf4ab8xKs9d9DTSaEnCTY.webp",
    tags: ["cup", "wood", "handmade", "natural", "drinking"],
    notes: "Material: Solid wood · Dimensions: Various sizes from 7.5x6.8cm to 8.5x11cm · Capacities: 150ml to 340ml · Care: Hand wash only",
    available: false,
    includes: ["1 × Handmade wooden cup"],
    crossSells: ["stoneware-travel-tea-set", "acacia-wood-serving-plate", "acacia-serving-bowl"],
      variants: [
        { id: "handmade-wooden-cup-wooden-cup", label: "Natural Wood", price: 22.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/handmade-wooden-cup-v3-eFf4ab8xKs9d9DTSaEnCTY.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914328657" }
      ]
  },
  {
    id: "feast-12",
    slug: "bamboo-glass-storage-container",
    name: "Bamboo & Glass Storage Container",
    headline: "The Visible Pantry",
    hookLine: "Glass containers with bamboo lids — see what you have, keep it fresh.",
    description:
      "A set of tempered glass storage containers with elegant bamboo lids — the kind of kitchen essential that is as beautiful on the counter as it is practical in the refrigerator. Each container is crafted from durable tempered glass that is safe for dishwashers and disinfection cabinets, with a natural bamboo lid that adds warmth and a secure seal. Available in three sizes from compact to generous, or as a complete set, these versatile containers work equally well as fresh-keeping boxes, bento boxes, or pantry storage.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bamboo-glass-storage-container-v3-L6crUJetdF9n4dvDZL5tXc.webp",
    tags: ["container", "glass", "bamboo", "storage", "airtight"],
    notes: "Material: Tempered glass with bamboo lid · Sizes: S (6×14×10cm), M (6.5×16.5×11.5cm), L · Dishwasher safe",
    available: true,
    variants: [
      { id: "bamboo-glass-crisper-s", label: "Small", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bamboo-glass-storage-container-v3-L6crUJetdF9n4dvDZL5tXc.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914820177" },
      { id: "bamboo-glass-crisper-m", label: "Medium", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bamboo-glass-storage-container-v3-L6crUJetdF9n4dvDZL5tXc.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914918481" },
      { id: "bamboo-glass-crisper-l", label: "Large", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bamboo-glass-storage-container-v3-L6crUJetdF9n4dvDZL5tXc.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914885713" },
      { id: "bamboo-glass-crisper-set", label: "Complete Set", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bamboo-glass-storage-container-v3-L6crUJetdF9n4dvDZL5tXc.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914852945" }],
    includes: ["1 × Glass container", "1 × Bamboo lid"],
    crossSells: ["ceramic-seasoning-pot-set", "acacia-salt-pepper-mill", "acacia-wood-serving-plate"],
  },

  {
    id: "feast-14",
    slug: "acacia-salt-pepper-mill",
    name: "Acacia Salt & Pepper Mill",
    headline: "The Grind That Matters",
    hookLine: "Acacia wood mills with adjustable ceramic grinders — from fine dust to coarse crack.",
    description:
      "A salt and pepper mill in acacia wood with an adjustable ceramic grinding mechanism — the kind of kitchen tool that earns its place on the counter rather than hiding in a drawer.",
    price: 38.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-salt-pepper-mill-v3-jKVmNPeVvyWK5JMvH3wGUk.webp",
    tags: ["salt", "pepper", "mill", "grinder", "acacia", "wood"],
    notes: "Acacia wood · Ceramic grinder · Adjustable coarseness",
    available: true,
    variants: [
      { id: "feast-14-6", label: "6-Inch Mill (170g)", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914984017" },
      { id: "feast-14-8", label: "8-Inch Mill (190g)", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915016785" },
      { id: "feast-14-10", label: "10-Inch Mill (275g)", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250915049553" }],
    includes: ["1 × Salt grinder", "1 × Pepper grinder", "1 × Cleaning brush"],
    crossSells: ["ceramic-seasoning-pot-set", "teak-kitchen-utensil-set", "acacia-magnetic-knife-block"],
  },
  {
    id: "feast-15",
    slug: "acacia-magnetic-knife-block",
    name: "Acacia Magnetic Knife Block",
    headline: "Blades on Display",
    hookLine: "Freestanding A-frame acacia block with rare-earth magnets — holds a full knife set on both sides.",
    description:
      "A freestanding magnetic knife block in solid acacia wood with an A-frame easel design. Embedded rare-earth magnets hold a full set of kitchen knives securely on both sides. The open design keeps blades visible, accessible, and properly aired — far more elegant than a drawer or a slotted block.",
    price: 148.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-magnetic-knife-block-v3-Vt3i9aVG8MnPZxjcywC7Aq.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knife-block-with-knives-cpkFQCBwT2D94gCu6eFu7w.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knife-block-detail-nfWZV97qbXBbtrezAKDgx9.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knife-block-lifestyle-YFz5uoUiuRvfGQ9KTPMPLU.webp"
    ],
    tags: ["knife-block", "acacia", "magnetic", "kitchen"],
    notes: "Solid acacia · Rare-earth magnets · Holds full set",
    available: true,
    includes: ["1 × Acacia magnetic knife block"],
    crossSells: ["ebony-cutting-board", "teak-kitchen-utensil-set", "acacia-salt-pepper-mill"],
      variants: [
        { id: "acacia-magnetic-knife-block-yellow", label: "Natural Acacia", price: 148.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-magnetic-knife-block-v3-Vt3i9aVG8MnPZxjcywC7Aq.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914951249" }
      ]
  },
  {
    id: "feast-16",
    slug: "hand-painted-ceramic-oil-cruet",
    name: "Hand-Painted Ceramic Oil Cruet",
    headline: "The Daily Pour",
    hookLine: "A ceramic cruet with a drip-free spout — hand-painted in the tradition of Mediterranean pottery.",
    description:
      "A ceramic oil cruet with a thoughtfully designed drip-free spout, hand-painted in the timeless tradition of Mediterranean pottery and finished in a deep, rich olive green hue. This beautifully considered vessel brings an element of rustic elegance to your kitchen counter, seamlessly blending practical utility with artisanal charm to ensure your favorite oils are poured with grace. It is the kind of object that makes you reach for the olive oil more often, transforming a simple ingredient into a celebrated part of your daily culinary rituals. Whether dressing a vibrant salad or finishing a warm loaf of bread, this single cruet elevates the everyday act of cooking into a moment of mindful appreciation.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hand-painted-ceramic-oil-cruet-v3-WhmyiVZCfkwtKwByoPVrvL.webp",
    tags: ["oil", "cruet", "ceramic", "hand-painted", "kitchen"],
    notes: "Material: Ceramic · Color: Olive green · Drip-free spout · Hand-painted",
    available: true,
    variants: [
        { id: "hand-painted-ceramic-oil-cruet-olive-green", label: "Olive Green", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hand-painted-ceramic-oil-cruet-v3-WhmyiVZCfkwtKwByoPVrvL.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915541073" }
      ],
    includes: ["1 × Ceramic oil cruet"],
    crossSells: ["ceramic-seasoning-pot-set", "acacia-salt-pepper-mill", "retro-reactive-glaze-dinnerware"],
  },
  {
    id: "feast-17",
    slug: "rattan-serving-tray",
    name: "Rattan Serving Tray",
    headline: "The Woven Surface",
    hookLine: "Hand-woven rattan tray with handles — for breakfast in bed or afternoon tea.",
    description:
      "A hand-woven round rattan serving tray with sturdy handles, thoughtfully designed to transform a simple cup of tea and a biscuit into a considered daily ritual. Crafted from high-quality natural rattan, this lightweight yet remarkably durable piece is perfectly suited for both indoor gatherings and relaxed outdoor entertaining. Measuring 8.7 inches in diameter with a subtle 1.4-inch depth, it offers an elegant foundation for morning coffees or afternoon desserts while bringing a warm, tactile presence to your coffee table, desk, or ottoman.",
    price: 38.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/rattan-serving-tray-v3-nqBPxLFBZQmR5qZj4yzP8w.webp",
    tags: ["tray", "rattan", "woven", "serving", "natural"],
    notes: "Material: Natural rattan · Dimensions: 8.7x1.4 inches (2.6 inches with handles) · Shape: Round",
    available: true,
    variants: [
        { id: "rattan-serving-tray-brown", label: "Brown", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/rattan-serving-tray-v3-nqBPxLFBZQmR5qZj4yzP8w.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250916098129" }
      ],
    includes: ["1 × Rattan tray", "2 × Coasters"],
    crossSells: ["black-walnut-resin-tray", "acacia-serving-bowl", "acacia-salt-pepper-mill"],
  },
  {
    id: "feast-19",
    slug: "japanese-wooden-coaster-set",
    name: "Japanese Wooden Coaster Set",
    headline: "The Small Detail",
    hookLine: "Minimalist wooden coasters with a holder — the detail that completes a table.",
    description:
      "A set of six wooden coasters in a matching holder  —  minimalist, warm, and precisely the kind of small detail that separates a considered home from a merely furnished one. Available in your choice of light beech or rich black walnut, each 9cm coaster is sanded smooth and finished with a subtle protective coating to beautifully highlight the natural wood grain. These tactile pieces offer an elegant, enduring resting place for your morning coffee or evening wine, effortlessly preserving your tabletops while bringing a touch of organic serenity to your daily rituals.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-wooden-coaster-set-v4-YJdytHzaw4ueYw22XGFJTV.webp",
    tags: ["coaster", "wood", "japanese", "minimalist", "set"],
    notes: "Material: Beech or Black Walnut · Dimensions: 9cm diameter · Set of 6 with matching holder · Waterproof finish",
    available: true,
    includes: ["6 × Wooden coasters", "1 × Matching holder"],
    crossSells: ["acacia-wood-serving-plate", "stoneware-travel-tea-set", "multi-function-grater"],
      variants: [
        { id: "japanese-wooden-coaster-set-beech-6-piece-set", label: "Beech 6-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-wooden-coaster-set-beech-v3-b2cXZ3z7CoEQ4Qi3KQH6Rr.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915606609" },
        { id: "japanese-wooden-coaster-set-walnut-coaster-set-a", label: "Walnut Coaster Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-wooden-coaster-set-walnut-v3-WWWZUnGh2uVA7TZpSkNTcY.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915934289" },
        { id: "japanese-wooden-coaster-set-walnut-6-piece-set", label: "Walnut 6-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-wooden-coaster-set-walnut-v3-WWWZUnGh2uVA7TZpSkNTcY.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250916065361" }
      ]
  },
  {
    id: "feast-20",
    slug: "rapid-defrosting-board",
    name: "Rapid Defrosting Board",
    headline: "The Practical Slab",
    hookLine: "Aluminium alloy board that defrosts food 5× faster than a countertop — no electricity needed.",
    description:
      "Crafted from a heavy aluminum alloy and thoughtfully finished with silica gel, this board harnesses natural thermal conductivity to defrost frozen provisions up to five times faster than traditional countertop thawing. By entirely eliminating the need for electricity, microwaves, or hot water baths, it meticulously preserves the delicate texture, flavor, and cellular integrity of your ingredients. Available in an array of carefully considered dimensions and thicknesses to suit any culinary endeavor, this minimalist tool seamlessly integrates into the modern kitchen, offering a quiet, efficient, and natural approach to meal preparation.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/rapid-defrosting-board-v3-EhxFSUvkJLYMUZFzTXWqxn.webp",
    tags: ["defrosting", "aluminium", "kitchen", "practical"],
    notes: "Material: Aluminum and silica gel · Dimensions: Multiple sizes available · Care: Dishwasher safe · Power: No electricity required",
    available: true,
    includes: ["1 × Rapid defrosting board"],
    crossSells: ["ebony-cutting-board", "black-walnut-cutting-board", "teak-kitchen-utensil-set"],
      variants: [
        { id: "rapid-defrosting-board-1", label: "Standard (35.5 × 20.5 cm)", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/rapid-defrosting-board-v3-EhxFSUvkJLYMUZFzTXWqxn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59256196563025" }
      ]
  },
  {
    id: "feast-21",
    slug: "ebony-cutting-board",
    name: "Ebony Cutting Board",
    headline: "The Dark Edge",
    hookLine: "Dense ebony wood cutting board with handle — naturally antimicrobial, dramatically dark.",
    description:
      "Crafted from one of the densest and hardest woods available, this exceptional ebony cutting board with an integrated handle features a dramatic dark hue and fine grain. It serves beautifully as both an essential kitchen tool and an elegant display piece for your home. Naturally antimicrobial and inherently durable, the thick wooden construction provides a resilient surface for all your daily culinary preparations. The more compact boards offer a clean, seamless surface, while the larger dimensions thoughtfully incorporate a perimeter groove to catch juices during carving.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-handle_b115d5db.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-detail_ecb6fb8e.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-sizes_d1960837.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-lifestyle_6ba64234.jpg", "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21-dimensions_486cb492.jpg"],
    tags: ["cutting-board", "ebony", "wood", "kitchen"],
    notes: "Material: Ebony wood · Thickness: 2.5cm · Features: Integrated handle · Care: Naturally antimicrobial",
    available: true,
    variants: [
        { id: "ebony-cutting-board-28x18", label: "28 × 18 cm", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251311837265" },
        { id: "ebony-cutting-board-33x22", label: "33 × 22 cm", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251311870033" },
        { id: "ebony-cutting-board-36x24", label: "36 × 24 cm", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251311902801" },
        { id: "ebony-cutting-board-38x26", label: "38 × 26 cm", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251311935569" },
        { id: "ebony-cutting-board-40x28", label: "40 × 28 cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251311968337" },
        { id: "ebony-cutting-board-45x30", label: "45 × 30 cm", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312001105" }
      ],
    includes: ["1 × Ebony cutting board"],
    crossSells: ["black-walnut-cutting-board", "teak-kitchen-utensil-set", "black-walnut-resin-tray"],
  },
  {
    id: "feast-22",
    slug: "black-walnut-cutting-board",
    name: "Black Walnut Cutting Board",
    headline: "The Workhorse",
    hookLine: "Thick black walnut board with juice groove — the board you reach for every day.",
    description:
      "A substantial North American black walnut cutting board with a thoughtful juice groove and generous proportions, designed to become the enduring centre of your kitchen. The self-healing solid wood surface gracefully absorbs light knife marks while remaining remarkably durable for carving, shredding, or presenting charcuterie. Crafted with a double-sided design and seamlessly engraved side handles, this versatile piece transitions effortlessly from a heavy-duty preparation block to an elegant serving tray. Regular oil maintenance will preserve the unique natural grain patterns of each board, ensuring it remains a steadfast companion for your daily culinary rituals.",
    price: 42.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-22-dimensions_01f029fc.jpg"],
    tags: ["cutting-board", "walnut", "wood", "kitchen"],
    notes: "Material: North American black walnut · Dimensions: Round 28cm, Rectangular S 33x22.8cm, Rectangular L 40x28cm · Features: Double-sided, side handles, juice groove · Care: Regular oil maintenance",
    available: true,
    variants: [
        { id: "black-walnut-cutting-board-round", label: "Round", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310592081" },
        { id: "black-walnut-cutting-board-rectangular-l", label: "Rectangular Large", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310624849" },
        { id: "black-walnut-cutting-board-rectangular-s", label: "Rectangular Small", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/black-walnut-cutting-board-v4-EKzhBNjgZj2XukmYpACUtD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310657617" }
      ],
    includes: ["1 × Black walnut cutting board"],
    crossSells: ["ebony-cutting-board", "black-walnut-resin-tray", "teak-kitchen-utensil-set"],
  },
  {
    id: "feast-23",
    slug: "ceramic-butter-dish",
    name: "European Ceramic Butter Dish",
    headline: "The Soft Keeper",
    hookLine: "Hand-painted ceramic butter dish with lid — European in-glaze colour artistry for your table.",
    description:
      "A hand-decorated ceramic butter dish with lid in a charming European style — the kind of tabletop detail that elevates breakfast from routine to ritual. Crafted from fine pottery with an in-glaze colour technique, each dish features delicate botanical patterns that bring a touch of small-fresh elegance to your table. The rectangular form holds a standard block of butter perfectly, while the fitted lid keeps it fresh and protected. Available in Green Polka, Bird and Flower, and Peony Flower patterns.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-butter-dish-v4-WGUDyRXcPteEKRvev4VzXe.webp",
    tags: ["butter", "dish", "ceramic", "european", "kitchen", "in-glaze"],
    notes: "Material: Pottery · Technique: In-glaze colour · Weight: 0.63kg · Style: European botanical · Rectangular with lid",
        variants: [
        { id: "ceramic-butter-dish-green-polka", label: "Green Polka", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-butter-dish-v4-WGUDyRXcPteEKRvev4VzXe.webp", shopifyVariantId: "gid://shopify/ProductVariant/59256195940433" }
      ],
    available: true,
    includes: ["1 × Ceramic butter dish", "1 × Ceramic lid"],
    crossSells: ["ceramic-seasoning-pot-set", "hand-painted-ceramic-oil-cruet", "retro-reactive-glaze-dinnerware"],
  },
  {
    id: "feast-24",
    slug: "multi-function-grater",
    name: "Multi-Function Grater",
    headline: "The Sharp Edge",
    hookLine: "Stainless steel grater with four surfaces — fine, medium, coarse, and slicer.",
    description:
      "Crafted from premium 304 stainless steel, this multi-function box grater is an essential instrument for the thoughtful kitchen. It features four distinct grating surfaces meticulously designed to handle a variety of culinary tasks with ease and precision. Utilize the fine surface for delicate shavings of hard cheeses and nutmeg, the medium for softer cheeses and tender vegetables, the coarse for robust root vegetables like potatoes, and the dedicated slicer for clean, even cuts. The collection accommodates different kitchen needs by offering various configurations, ranging from simple bagged or boxed standalone graters to comprehensive sets that include additional cheese planers for the dedicated home chef.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/multi-function-grater-v3-7n83eZxnvwonw4JXpLFnej.webp",
    tags: ["grater", "stainless-steel", "kitchen", "multi-function"],
    notes: "Material: 304 Stainless steel · Features: 4 grating surfaces · Base: Non-slip",
    available: true,
    includes: ["1 × Multi-function grater"],
    crossSells: ["hand-crank-pasta-maker", "teak-kitchen-utensil-set", "rapid-defrosting-board"],
      variants: [
        { id: "multi-function-grater-bagged", label: "Basic Set", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/multi-function-grater-v3-7n83eZxnvwonw4JXpLFnej.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310919761" },
        { id: "multi-function-grater-two-cheese-grates-bo", label: "Double Grater Box Set", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/multi-function-grater-v3-7n83eZxnvwonw4JXpLFnej.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310952529" },
        { id: "multi-function-grater-single-cheese-planer", label: "Planer Box Set", price: 24.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/multi-function-grater-v3-7n83eZxnvwonw4JXpLFnej.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310985297" },
        { id: "multi-function-grater-boxed", label: "Premium Box Set", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/multi-function-grater-v3-7n83eZxnvwonw4JXpLFnej.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251311018065" }
      ]
  },
  {
    id: "feast-25",
    slug: "hand-crank-pasta-maker",
    name: "Hand-Crank Pasta Maker",
    headline: "The Slow Meal",
    hookLine: "Chrome-plated pasta machine with adjustable thickness — fresh pasta in minutes.",
    description:
      "Crafted from durable 410 stainless steel, this classic hand-crank pasta maker brings the authentic Italian kitchen experience directly to your home. The sturdy machine features adjustable thickness settings ranging from a delicate 0.3mm to a hearty 5mm, allowing you to create everything from paper-thin angel hair to robust pappardelle with ease. Designed for both novice cooks and seasoned chefs, it includes precise cutting rollers that perfectly slice your dough into 2mm or 4mm widths. Weighing a substantial 2.2kg and measuring 21 by 20 centimeters, the heavy base clamps securely to any countertop, ensuring smooth and effortless rolling every time you prepare fresh pasta.",
    price: 68.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hand-crank-pasta-maker-v3-DStcxNS27HuiV2WYgruhzR.webp",
    tags: ["pasta", "maker", "hand-crank", "kitchen", "cooking"],
    notes: "Material: 410 Stainless Steel · Dimensions: 21x20x13cm · Weight: 2.2kg · Adjustable thickness: 0.3-5mm",
    available: true,
    includes: ["1 × Hand-crank pasta maker"],
    crossSells: ["teak-kitchen-utensil-set", "multi-function-grater", "retro-reactive-glaze-dinnerware"],
      variants: [
        { id: "hand-crank-pasta-maker-silver", label: "Classic Silver", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-pour-over-dripper-v3-oWCUwMVwBqfvxcbhEZrqyS.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251307872337" }
      ]
  },
  {
    id: "feast-26",
    slug: "ceramic-pour-over-dripper",
    name: "Ceramic Pour-Over Dripper",
    headline: "The Morning Ritual",
    hookLine: "A ceramic dripper for single-cup pour-over coffee — slow, deliberate, perfect.",
    description:
      "A ceramic pour-over coffee dripper designed for the person who believes that the best cup of coffee is the one you make yourself, slowly and deliberately. Crafted from premium ceramic, this elegant dripper features internal spiral ridges that allow for optimal airflow and an even extraction of your favorite roast. Perfectly sized to brew one to two servings, it transforms your morning routine into a quiet, meditative ritual. The dripper is microwave safe for gentle warming and arrives thoughtfully packaged, ready to pair with standard filters for your daily brew.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-pour-over-dripper-v3-aWTu6aNuuiufmYFrHqL3D7.webp",
    tags: ["coffee", "pour-over", "ceramic", "dripper", "brewing"],
    notes: "Material: Premium ceramic · Capacity: 1-2 servings · Care: Microwave safe · Includes: 1 dripper · Compatibility: Fits standard filters",
    available: true,
    variants: [
        { id: "ceramic-pour-over-dripper-black-1-to-2-serving", label: "Matte Black", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307249745", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-pour-over-dripper-matte-black-v3-nTWW42g6kumy98fhWRhkUC.webp" },
        { id: "ceramic-pour-over-dripper-white-1-to-2-serving", label: "Classic White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307282513", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-pour-over-dripper-classic-white-v3-JvMqvDSaJ6WZ44fALP3LNU.webp" }
      ],
    includes: ["1 × Ceramic dripper"],
    crossSells: ["japanese-stoneware-mug", "nordic-espresso-cup-saucer", "acacia-magnetic-knife-block"],
  },
  {
    id: "feast-27",
    slug: "japanese-sake-set",
    name: "Japanese Sake Set",
    headline: "The Evening Ritual",
    hookLine: "A ceramic tokkuri and ochoko cups — for warm sake and quiet evenings.",
    description:
      "A traditional Japanese sake set crafted in a matte ceramic glaze that feels inherently warm and grounding in the hand. The tokkuri pouring vessel, which holds up to 250ml, is thoughtfully designed for gently warming your favorite sake in a hot water bath before serving. Accompanying the vessel are the small, delicately proportioned ochoko cups that encourage slow, deliberate sipping and meaningful conversation during quiet evenings. Each piece features a striking black and gold finish that elevates the ritual of drinking. The jug measures 13.8 by 7 centimeters, while the cups stand at a modest 3.4 by 5.2 centimeters, making them an elegant addition to any curated table setting.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-sake-set-v4-KKyMo6yUo6oxdA6uhbgyPw.webp",
    tags: ["sake", "japanese", "ceramic", "set", "drinking"],
    notes: "Material: Ceramic · Jug Capacity: 250ml · Jug Dimensions: 13.8x7cm · Cup Dimensions: 3.4x5.2cm · Microwave safe",
    available: true,
    includes: ["1 × Sake jug", "4 × Sake cups"],
    crossSells: ["japanese-matcha-ceremony-set", "stoneware-travel-tea-set", "retro-reactive-glaze-dinnerware"],
      variants: [
        { id: "japanese-sake-set-black-gold-jug", label: "Black & Gold Sake Jug", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-sake-set-black-gold-v3-n2p7wLm3kwg4vHq2pN2Jac.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304759377" },
        { id: "japanese-sake-set-black-gin-wine-cup", label: "Black Sake Cup", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-sake-set-v4-KKyMo6yUo6oxdA6uhbgyPw.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304792145" }
      ]
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/vintage-japanese-ceramic-mug-v3-YTdokpKVN5gBntxfyikFxH.webp",
    tags: ["mug", "ceramic", "japanese", "vintage", "reactive-glaze"],
    notes: "Reactive glaze · 200ml cup / 350ml mug · Microwave safe",
    available: true,
    variants: [
      { id: "vintage-japanese-ceramic-mug-a", label: "Style A — Cup & Saucer", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307053137" },
      { id: "vintage-japanese-ceramic-mug-b", label: "Style B — Cup & Saucer", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307085905" },
      { id: "vintage-japanese-ceramic-mug-c", label: "Style C — Mug", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307118673" },
      { id: "vintage-japanese-ceramic-mug-d", label: "Style D — Mug", price: 18.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307151441" },
      { id: "vintage-japanese-ceramic-mug-e", label: "Style E — Small Cup", price: 12.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307184209" },
      { id: "vintage-japanese-ceramic-mug-f", label: "Style F — Small Cup", price: 12.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307216977" }],
    includes: ["1 × Ceramic mug"],
    crossSells: ["japanese-stoneware-mug", "nordic-espresso-cup-saucer", "ceramic-pour-over-dripper"],
  },
  {
    id: "feast-30",
    slug: "japanese-stoneware-mug",
    name: "Japanese Stoneware Mug",
    headline: "The Quiet Cup",
    hookLine: "A thick-walled stoneware mug that keeps drinks warm longer — and looks better with age.",
    description:
      "A thick-walled stoneware mug with a matte exterior and glossy interior — designed to keep drinks warm longer and to look better with every use. The generous handle is comfortable for large hands, and the weight of the mug gives it a reassuring presence.",
    price: 26.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-v4-XcFChdgs6sBRqH48QXARrW.webp",
    tags: ["mug", "stoneware", "japanese", "thick-walled"],
    notes: "Stoneware · 400ml · Keeps drinks warm",
    available: true,
    variants: [
        { id: "stoneware-mug-yellow", label: "Yellow", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-yellow-v3-4VdT5NjGg5WHAN3zsJyEus.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304628305" },
        { id: "stoneware-mug-green", label: "Green", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-green-v3-QsYeX3wPZwZgFeZVKyT3md.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304661073" },
        { id: "stoneware-mug-khaki", label: "Khaki", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-khaki-v3-TDXCVRxKSCBf26uct4CJLF.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304693841" },
        { id: "stoneware-mug-set", label: "Set of Three", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-v4-XcFChdgs6sBRqH48QXARrW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304726609" }
      ],
    includes: ["1 × Japanese stoneware mug"],
    crossSells: ["nordic-espresso-cup-saucer", "ceramic-pour-over-dripper", "bamboo-glass-storage-container"],
  },
  {
    id: "feast-31",
    slug: "nordic-espresso-cup-saucer",
    name: "Nordic Espresso Cup & Saucer",
    headline: "The Small Pleasure",
    hookLine: "A ceramic espresso cup with matching saucer — for the person who takes their coffee seriously.",
    description:
      "A porcelain espresso cup in a matte Nordic glaze — the kind of considered piece that makes a single shot feel like a deliberate event rather than a rushed habit. Sized perfectly for a proper double shot at 80ml, this durable porcelain is designed to withstand the rigors of daily rituals. It is fully safe for the dishwasher, microwave, and oven, ensuring your focus remains on the coffee itself. Available in warm honey pomelo or earthy olive green, these cups invite you to slow down and savor the morning.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-saucer-v3-hYkJb8WgpMBCnLDeD8PDm4.webp",
    tags: ["espresso", "cup", "saucer", "ceramic", "nordic"],
    notes: "Material: Porcelain · Capacity: 80ml · Care: Dishwasher, microwave, and oven safe",
    available: true,
    variants: [
        { id: "nordic-espresso-honey-pomelo-full", label: "Honey Pomelo — Cup, Saucer & Spoon", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-honey-pomelo-v3-5WbpqmkEpihBrc88mHNSna.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312164945" },
        { id: "nordic-espresso-olive-green-full", label: "Olive Green — Cup, Saucer & Spoon", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-olive-green-v3-JV95E2vZ5edvQXaL6cFhyM.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312197713" },
        { id: "nordic-espresso-honey-pomelo-spoon", label: "Honey Pomelo — Cup & Spoon", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-honey-pomelo-v3-5WbpqmkEpihBrc88mHNSna.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312230481" },
        { id: "nordic-espresso-olive-green-spoon", label: "Olive Green — Cup & Spoon", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-olive-green-v3-JV95E2vZ5edvQXaL6cFhyM.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312263249" },
        { id: "nordic-espresso-honey-pomelo-cup", label: "Honey Pomelo — Single Cup", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-honey-pomelo-v3-5WbpqmkEpihBrc88mHNSna.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312296017" },
        { id: "nordic-espresso-olive-green-cup", label: "Olive Green — Single Cup", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-espresso-cup-olive-green-v3-JV95E2vZ5edvQXaL6cFhyM.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312328785" }
      ],
    includes: ["1 × Espresso cup", "1 × Saucer"],
    crossSells: ["japanese-stoneware-mug", "ceramic-pour-over-dripper", "black-walnut-resin-tray"],
  },
  // ── Threshold Closers (FEAST) ──────────────────────────────────────
  {
    id: "feast-32",
    slug: "japanese-sakura-dipping-dish",
    name: "Japanese Sakura Dipping Dish (One Piece)",
    headline: "The Petal Plate",
    hookLine: "Pour in soy sauce and a hidden sakura blossom appears — a white ceramic dish with a secret.",
    description:
      "A small white ceramic dipping dish with a hidden sakura secret — pour in soy sauce and watch a cherry blossom appear. The interior features subtle petal-shaped ridges radiating from the centre that remain invisible when empty, but when dark soy sauce or ponzu pools between the raised contours, a perfect five-petal sakura silhouette materialises in the bowl. It is the kind of quiet, considered detail that transforms an ordinary meal into something ceremonial. Perfectly sized for soy sauce, ponzu, chilli oil, or a small serving of pickled ginger, each dish is sold individually so you can collect exactly the number you need.",
    price: 8.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/sakura-dish-v2-ksBRSvhkzxAv2P6EetqYWk.webp",
    tags: ["dipping-dish", "sakura", "ceramic", "japanese", "tableware", "threshold-closer"],
    notes: "Material: Ceramic · Style: Japanese Zakka · Size: Approx. 8cm diameter · Sold individually · Dishwasher safe",
    available: true,
    shopifyHandle: "zakka-creative-japanese-sakura-soy-sauce-dipping-dish-snack-dish-vinegar-dish-tableware-small-dish-small-dish",
    shopifyVariantId: "gid://shopify/ProductVariant/59258095698001",
    includes: ["1 × Japanese Sakura dipping dish"],
    crossSells: ["brass-crescent-chopstick-rest", "ceramic-seasoning-pot-set", "japanese-wooden-coaster-set"],
  },
  {
    id: "feast-33",
    slug: "brass-crescent-chopstick-rest",
    name: "Brass Crescent Chopstick Rest",
    headline: "The Quiet Crescent",
    hookLine: "A solid brass crescent-moon chopstick rest — anti-oxidation finish, weighty and warm.",
    description:
      "A solid brass chopstick rest shaped like a crescent moon — small enough to disappear into the rhythm of a meal, substantial enough to feel like a considered object. The anti-oxidation coating preserves the warm gold finish over time, while the weighted base keeps it firmly in place on the table. Each rest is precision-cast with a smooth, polished surface and subtle feet that lift it just above the tablecloth. A small gesture of intention that elevates the everyday act of setting a table.",
    price: 7.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/brass-chopstick-rest-h9MjmjGf3seArrPKSt44ki.webp",
    tags: ["chopstick-rest", "brass", "gold", "tableware", "japanese", "threshold-closer"],
    notes: "Material: Brass with anti-oxidation coating · Finish: Polished gold · Dimensions: Approx. 4×3cm · Weight: Solid brass, pleasingly heavy",
    available: true,
    shopifyHandle: "crescent-shaped-anti-oxidation-brass-rest-304-stainless-steel-chopsticks-pillow",
    shopifyVariantId: "gid://shopify/ProductVariant/59258098090065",
    includes: ["1 × Brass crescent chopstick rest"],
    crossSells: ["japanese-sakura-dipping-dish", "ceramic-seasoning-pot-set", "teak-kitchen-utensil-set"],
  },
  {
    id: "feast-34",
    slug: "natural-loofah-kitchen-sponge",
    name: "Natural Loofah Kitchen Sponge (One Piece)",
    headline: "The Honest Scrub",
    hookLine: "A dual-layer carbon-black loofah sponge — firm scrubbing face, soft cleaning face.",
    description:
      "A thickened dual-layer kitchen sponge with a dark carbon-black scouring face and a soft white cleaning face — designed to handle both stubborn residue and delicate surfaces without switching tools. The loofah-derived material provides natural antibacterial properties and excellent water absorption, while the compressed construction ensures it holds its shape through weeks of daily use. Sold individually so you can replace only what you need, when you need it. A small, practical upgrade that makes the kitchen sink feel a little more intentional.",
    price: 4.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/loofah-sponge-E2eX9dXTBNnsDB94Nz8y2H.webp",
    tags: ["sponge", "loofah", "kitchen", "cleaning", "natural", "threshold-closer"],
    notes: "Material: Natural loofah fibre (carbon black) · Dual-layer: Scouring + soft cleaning · Sold individually · Replace every 2–4 weeks",
    available: true,
    shopifyHandle: "loofah-sponge-brush-bowl-thickened-kitchen-cleaning",
    shopifyVariantId: "gid://shopify/ProductVariant/59258095861841",
    includes: ["1 × Natural loofah kitchen sponge"],
    crossSells: ["natural-loofah-dish-scrubber", "teak-kitchen-utensil-set", "ceramic-seasoning-pot-set"],
  },
  {
    id: "feast-35",
    slug: "natural-loofah-dish-scrubber",
    name: "Natural Loofah Dish Scrubber",
    headline: "The Kitchen Workhorse",
    hookLine: "A corded natural loofah scrubber — biodegradable, absorbent, and built for daily dishwashing.",
    description:
      "A natural loofah dish scrubber with a woven cord loop for hanging — the kind of unpretentious kitchen tool that quietly replaces synthetic sponges without any compromise on performance. Cut from mature loofah gourd, the dense fibrous structure provides excellent scrubbing power for pots, pans, and dishes while remaining gentle enough for non-stick surfaces. Naturally antibacterial and highly absorbent, it dries quickly between uses to resist odour. Fully biodegradable at end of life — simply compost it. Sold individually in its natural, unbleached state.",
    price: 8.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/loofah-scrubber-mju9JedDNgD3Jm6uxVQiCm.webp",
    tags: ["scrubber", "loofah", "kitchen", "cleaning", "natural", "biodegradable", "threshold-closer"],
    notes: "Material: Natural loofah gourd · Features: Cotton cord loop, quick-drying, antibacterial · Biodegradable · Replace every 4–6 weeks",
    available: true,
    shopifyHandle: "household-cleaning-loofah-sponge-dish-cloth-absorbent-old-loofah-wipes",
    shopifyVariantId: "gid://shopify/ProductVariant/59258095730769",
    includes: ["1 × Natural loofah dish scrubber"],
    crossSells: ["natural-loofah-kitchen-sponge", "teak-kitchen-utensil-set", "japanese-sakura-dipping-dish"],
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
      "An ultrasonic aroma diffuser with a warm LED glow that transforms any room into a tranquil sanctuary. Crafted from durable, fire-resistant materials in your choice of a shallow or deep wood grain finish, its sculptural exterior looks like a decorative object rather than an appliance. The whisper-quiet misting technology softens dry air while enveloping your surroundings in pleasant aromas, creating a spa-like feeling at home. Weighing just over two hundred grams, this compact piece is easily maintained by periodically cleansing the atomizer plate and replacing the internal cotton swabs.",
    price: 48.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser-v4-5FEjE62p7u8mNRdc8ozJ3T.webp",
    tags: ["diffuser", "aroma", "led", "ultrasonic", "home-fragrance"],
    notes: "Material: ABS and PP · Dimensions: 12x11cm · Weight: 205g · Care: Clean atomizer with alcohol and replace cotton swabs",
    available: true,
    includes: ["1 × Aroma diffuser", "1 × Power adapter", "1 × Measuring cup", "1 × User manual"],
    crossSells: ["fireplace-aroma-diffuser", "ceramic-incense-holder", "dried-xinjiang-lavender"],
      variants: [
        { id: "led-aroma-diffuser-light-oak", label: "Light Oak", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser-light-oak-v3-763GoBJGyCbHhfXTDHGhTh.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305218129" },
        { id: "led-aroma-diffuser-dark-walnut", label: "Dark Walnut", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser-dark-walnut-v3-LcbqK75psVjJBAjqRbkPF3.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305250897" }
      ]
  },
  {
    id: "adorn-2",
    slug: "nordic-figurine-monochrome",
    name: "Nordic Figurine — Monochrome",
    headline: "The Quiet Companion",
    hookLine: "White resin figurine with black spots — minimalist, sculptural, and quietly bold.",
    description:
      "A minimalist decorative figurine crafted from durable resin, featuring striking spotted detailing that naturally draws the eye. This European-inspired sculptural object adds quiet personality to a curated shelf, desktop, or mantel without demanding undue attention. Available in elegantly tall or pleasingly round silhouettes, the collection includes charming pumpkin and owl motifs that bring a touch of playful sophistication to your living spaces. Whether you select the classic monochrome palette or opt for warm yellow and vibrant red accents, each piece serves as a thoughtful conversation starter that perfectly complements a modern, considered home aesthetic.",
    price: 65.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-monochrome-v3-W4PWUEBS8vqL9vcZfrHMSB.webp",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist", "monochrome"],
    notes: "Material: Resin · Variations: Tall and round silhouettes · Motifs: Pumpkin and owl designs",
    variants: [
        { id: "nordic-figurine-mono-high", label: "Tall Silhouette", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-golden-v4-a8u8zQNxLhkZeaskd2Qwk7.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309379665" },
        { id: "nordic-figurine-mono-round", label: "Round Form", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-blush-v4-RPGWXNPwvExNTse64rxGmK.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309412433" }
      ],
    available: true,
    includes: ["1 × Nordic figurine"],
    crossSells: ["abstract-figurine", "fireplace-aroma-diffuser", "ceramic-incense-holder"],
  },
  {
    id: "adorn-2b",
    slug: "nordic-figurine-golden",
    name: "Nordic Figurine — Golden",
    headline: "The Warm Accent",
    hookLine: "Yellow resin figurine with black dot accents — a warm, playful statement piece.",
    description:
      "A minimalist decorative figurine crafted from solid resin, offering a warm, playful, and quietly bold statement for any space. Available in a tall, elegant silhouette or a rounded, compact form, these sculptural pieces come in versatile white or yellow finishes with striking black or red dot accents. Whether you are drawn to the abstract pumpkin shapes or the whimsical art owl motifs, each carefully cast decoration brings a touch of modern European charm to your curated home. The smooth, matte finish and substantial weight make it a perfect standalone accent or part of a thoughtful vignette.",
    price: 65.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-golden-v4-a8u8zQNxLhkZeaskd2Qwk7.webp",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist", "golden"],
    notes: "Material: Resin · Styles: Tall or Round · Accents: Black or Red dots · Includes: 1 figurine",
    variants: [
        { id: "nordic-figurine-gold-high", label: "Tall Silhouette", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-golden-v4-a8u8zQNxLhkZeaskd2Qwk7.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309445201" },
        { id: "nordic-figurine-gold-round", label: "Round Form", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-golden-v4-a8u8zQNxLhkZeaskd2Qwk7.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309477969" }
      ],
    available: true,
    includes: ["1 × Golden figurine", "1 × Display stand", "1 × Cleaning cloth"],
    crossSells: ["abstract-figurine", "led-aroma-diffuser", "macrame-wall-hanging"],
  },
  {
    id: "adorn-2c",
    slug: "nordic-figurine-blush",
    name: "Nordic Figurine — Blush",
    headline: "The Soft Statement",
    hookLine: "White resin figurine with red dot accents — soft, feminine, and subtly striking.",
    description:
      "A minimalist decorative figurine cast in smooth resin, defined by its playful dotted accents and European-inspired artistry. Available in a selection of refined palettes — including classic white or warm yellow with contrasting spots — each piece feels soft, feminine, and subtly striking. Choose between a tall, elegant silhouette or a rounded, compact form to bring a touch of considered whimsy to your curated spaces.",
    price: 65.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-blush-v4-RPGWXNPwvExNTse64rxGmK.webp",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist", "blush"],
    notes: "Material: Resin · Styles: Tall or Round · Includes: 1 Figurine",
    variants: [
        { id: "nordic-figurine-blush-high", label: "Tall Silhouette", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-blush-v4-RPGWXNPwvExNTse64rxGmK.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309510737" },
        { id: "nordic-figurine-blush-round", label: "Round Form", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-figurine-blush-v4-RPGWXNPwvExNTse64rxGmK.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309543505" }
      ],
    available: true,
    includes: ["1 × Nordic Figurine"],
    crossSells: ["abstract-figurine", "macrame-wall-hanging", "ceramic-incense-holder"],
  },
  {
    id: "adorn-4",
    slug: "macrame-wall-hanging",
    name: "Macrame Wall Hanging",
    headline: "The Textile Wall",
    hookLine: "Hand-knotted cotton macrame — adds texture and warmth to any wall.",
    description:
      "A hand-knotted cotton macrame wall hanging that brings inviting texture, warmth, and visual interest to any living room or bedroom. Carefully crafted from durable natural cotton with subtle polyester fibers, this artisanal piece offers a soft, organic quality that effortlessly softens hard surfaces and infuses your space with a considered bohemian spirit. Measuring 55 by 70 centimeters, it serves as a striking yet minimalist focal point above a bed, desk, or mantel. To maintain its pristine appearance over time, simply dust it regularly with a gentle breeze or hand wash delicately without rubbing.",
    price: 48.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/macrame-wall-hanging-v3-ipcVUDuPy27W7ixLoNzsNv.webp",
    tags: ["macrame", "wall-hanging", "cotton", "textile", "bohemian"],
    notes: "Material: Cotton and polyester · Dimensions: 55x70cm · Hand wash only",
    available: true,
    variants: [
        { id: "macrame-wall-hanging-beige", label: "Beige", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bud-vase-v4-TKGrfSMq5PoDo62uTmJLQc.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308560465" }
      ],
    includes: ["1 × Macrame hanging", "1 × Wooden dowel", "1 × Hanging cord", "2 × Screws", "2 × Anchors"],
    crossSells: ["chunky-knit-cushion-cover", "tufted-tassel-cushion", "led-aroma-diffuser"],
  },
  {
    id: "adorn-5",
    slug: "ceramic-bud-vase",
    name: "Ceramic Bud Vase",
    headline: "The Single Stem",
    hookLine: "A small ceramic vase designed for one or two stems — the art of less.",
    description:
      "A small ceramic bud vase designed for one or two stems, celebrating the art of less. The narrow opening gracefully holds stems upright without the need for a frog or foam, while the matte glaze offers a tactile quality that invites touch. Available in a curated palette of Nordic-inspired hues, each vase features a unique silhouette to complement your space, with the brown and black vessels offering taller profiles up to 16cm, and the green and orange variations presenting a more grounded, stout form. Whether displayed individually or as a thoughtful collection, these pieces bring a quiet, sculptural elegance to any surface.",
    price: 18.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bud-vase-v4-TKGrfSMq5PoDo62uTmJLQc.webp",
    tags: ["vase", "ceramic", "bud", "minimalist", "small"],
    notes: "Material: Ceramic · Dimensions: 7-16cm height depending on variant · Style: Nordic · Finish: Matte glaze",
    available: false,
    variants: [
        { id: "ceramic-bud-vase-brown", label: "Earth Brown", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bud-vase-earth-brown-v3-duzKKn7swV5UFcDDBuTPPY.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306463313" },
        { id: "ceramic-bud-vase-black", label: "Matte Black", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bud-vase-matte-black-v3-hDBo7kvBnfTXmNrfNKHXk5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306496081" },
        { id: "ceramic-bud-vase-green", label: "Sage Green", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306528849", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bud-vase-burnt-orange-v3-2Nd4cHSNY9KRZ2fJgNm8Pa.webp" },
        { id: "ceramic-bud-vase-orange", label: "Burnt Orange", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bud-vase-burnt-orange-v3-2Nd4cHSNY9KRZ2fJgNm8Pa.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306561617" }],
    includes: ["1 × Ceramic bud vase", "1 × Wooden stand"],
    crossSells: ["mixed-dried-flower-bouquet", "ceramic-incense-holder", "fireplace-aroma-diffuser"],
  },
  {
    id: "adorn-7",
    slug: "ceramic-incense-holder",
    name: "Ceramic Incense Holder",
    headline: "The Slow Burn",
    hookLine: "A ceramic holder for incense sticks and cones — minimalist, functional, beautiful.",
    description:
      "A considered ceramic incense holder designed to anchor your living space in tranquility, merging quiet aesthetics with everyday utility. Minimalist in form and beautiful as an object, it functions seamlessly to catch ash residue while its matte glaze complements any interior setting. Available in two distinct silhouettes, this piece accommodates either traditional incense sticks or a combination of sticks and mesmerizing backflow cones. Whether placed in a living room or a dedicated meditation corner, this solitary burner invites a moment of quiet reflection into your daily ritual.",
    price: 22.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-incense-holder-v3-QdnBjfCK3JqPKXBjqXVjMn.webp",
    tags: ["incense", "holder", "ceramic", "minimalist", "home-fragrance"],
    notes: "Material: Ceramic · Dimensions: 11.8x11.8x4cm (Backflow) or 10.7x10.7x3.8cm (Stick) · Includes: 1 incense burner",
    available: true,
    includes: ["1 × Incense burner"],
    crossSells: ["led-aroma-diffuser", "fireplace-aroma-diffuser", "dried-xinjiang-lavender"],
      variants: [
        { id: "ceramic-incense-holder-incense-stick-and-ba", label: "Stick & Backflow Set", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-incense-holder-v3-QdnBjfCK3JqPKXBjqXVjMn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305349201" },
        { id: "ceramic-incense-holder-incense-stick", label: "Stick Holder Only", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-incense-holder-v3-QdnBjfCK3JqPKXBjqXVjMn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305381969" }
      ]
  },
  {
    id: "adorn-8",
    slug: "abstract-figurine",
    name: "Abstract Figurine",
    headline: "The Conversation Piece",
    hookLine: "A resin figurine with abstract human form — art for the shelf.",
    description:
      "An abstract figurine crafted from a thoughtful blend of matte resin and sandstone, presenting a stylized human form that sits comfortably between art and decoration. Each piece is finished by hand using traditional crafting techniques, lending it an artisanal texture and unique character that starts conversations and adds a distinct layer of personality to any bookshelf or mantelpiece. It is the kind of considered object that brings quiet sophistication to your living space, inviting contemplation while seamlessly integrating into a modern aesthetic.",
    price: 42.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-v3-hiBS3AoS5fgzTMcEVMRDSv.webp",
    tags: ["figurine", "abstract", "resin", "art", "decorative"],
    notes: "Material: Resin and sandstone · Dimensions: 20cm tall · Handcrafted finish",
        variants: [
        { id: "abstract-figurine-1style", label: "Thinker — Matte White", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-thinker-white-v3-Cp7e9tTc7iGKstJgLFLBwf.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305644113" },
        { id: "abstract-figurine-gold-1style", label: "Thinker — Gold", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-thinker-gold-v3-YrNjJCGd9tSYccoAZw5jX5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305676881" },
        { id: "abstract-figurine-gold-2style", label: "Reader — Gold", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-reader-gold-v3-ejtgf3f5rtZ85fp7Xyj3Ah.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305709649" },
        { id: "abstract-figurine-gold-3style", label: "Dreamer — Gold", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-dreamer-gold-v3-nQe7rSEKzTNwHPEW2tKpoU.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305742417" },
        { id: "abstract-figurine-2style", label: "Reader — Matte White", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-reader-white-v3-nCxG6CbsUFMzLgZRFNUCcV.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305775185" },
        { id: "abstract-figurine-3style", label: "Dreamer — Matte White", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/abstract-figurine-dreamer-white-v3-HnDivEZbkUuT9uWUdU7aHt.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305807953" }
      ],
    available: false,
    includes: ["1 × Abstract figurine"],
    crossSells: ["macrame-wall-hanging", "fireplace-aroma-diffuser", "led-aroma-diffuser"],
  },
  {
    id: "adorn-9",
    slug: "fireplace-aroma-diffuser",
    name: "Fireplace Aroma Diffuser",
    headline: "The Flame Without Fire",
    hookLine: "A ceramic diffuser shaped like a miniature fireplace — warm light and scent without a flame.",
    description:
      "Evoke the comforting ambiance of a hearth in any room with this ceramic aroma diffuser, thoughtfully shaped like a miniature fireplace. A built-in LED casts a realistic, flickering glow across the mist, while seven ambient color settings allow you to tailor the mood to your exact preference. Designed for effortless tranquility, it features a generous 150ml water tank, three timer presets, and an automatic shut-off function for complete peace of mind. Simply use the included remote control to adjust the mist and lighting, allowing the gentle diffusion of your favorite essential oils to transform your space into a serene sanctuary.",
    price: 59.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/fireplace-aroma-diffuser-v3-FBvqJJqjXNjRNKHCjYoVRn.webp",
    tags: ["diffuser", "fireplace", "ceramic", "led", "aroma"],
    notes: "Material: Ceramic · Capacity: 150ml · Features: 7-color LED, 3 timer settings, Auto shut-off · Includes: Diffuser, remote control, USB-C cable",
    available: true,
    includes: ["1 × Diffuser", "1 × Remote control", "1 × USB-C cable"],
    crossSells: ["led-aroma-diffuser", "ceramic-incense-holder", "japanese-bedside-lamp"],
      variants: [
        { id: "fireplace-aroma-diffuser-black-gift-remote-co", label: "Black", price: 59.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305545809", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/fireplace-aroma-diffuser-black-v3-WYEnUYRsCzAXvZsHq4idF3.webp" },
        { id: "fireplace-aroma-diffuser-white-gift-remote-co", label: "White", price: 59.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305578577", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/fireplace-aroma-diffuser-white-v3-PSrhBdLBDLyBCLAWLXThYy.webp" }
      ]
  },
  // ── Threshold Closer (ADORN) ──────────────────────────────────────
  {
    id: "adorn-10",
    slug: "hollow-glass-votive-candle",
    name: "Hollow Glass Votive Candle (10cm)",
    headline: "The Quiet Glow",
    hookLine: "A round hollow glass votive holder — European-style, for tealights or small candles.",
    description:
      "A round, hollow glass votive candle holder in the European style — the kind of object that transforms a room simply by being lit. The spherical form creates a gentle magnification effect, amplifying the warm glow of a single tealight into something atmospheric and enveloping. The open top allows easy placement and removal of standard tealight candles, while the weighted base provides stability on any surface. At 10cm diameter, it is perfectly proportioned for a bedside table, a dining centrepiece, or a bathroom shelf. Tealight candle not included.",
    price: 12.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glass-candle-DCWMzrYmME7WmVrBacdSSA.webp",
    tags: ["candle-holder", "glass", "votive", "tealight", "european", "threshold-closer"],
    notes: "Material: Clear glass · Diameter: 10cm · Style: European round hollow · Tealight candle not included",
    available: true,
    shopifyHandle: "europe-style-round-hollow-glass-candle",
    shopifyVariantId: "gid://shopify/ProductVariant/59258098122833",
    includes: ["1 × Hollow glass votive candle"],
    crossSells: ["fireplace-aroma-diffuser", "ceramic-incense-holder", "led-aroma-diffuser"],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // BLOOM — Everlasting Greenery
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "bloom-1",
    slug: "dried-xinjiang-lavender",
    name: "Dried Xinjiang Lavender",
    headline: "The Quiet Scent",
    hookLine: "500g of dried Xinjiang lavender buds — six grades from premium sachet-fill to everyday aromatherapy.",
    description:
      "Pure dried lavender buds harvested in the high altitudes of Xinjiang's Yili Valley, China's celebrated lavender heartland where the unique climate produces some of the most intensely aromatic botanicals in the world. Offering a long-lasting natural fragrance, these loose buds are wonderfully versatile and perfectly suited for crafting bespoke pillow sachets or elevating your daily aromatherapy rituals. Available in an array of meticulously graded varieties, you can select the perfect botanical profile for your needs, ranging from the exceptionally pure Supreme French Blue to robust selections cultivated specifically for extracting rich essential oils.",
    price: 12.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-xinjiang-lavender-v3-WnwgcRUiKnBar8xigR3h47.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-pile_6101d1f1.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-hand_738c8b27.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-detail3_d34e6124.jpg"
    ],
    tags: ["lavender", "xinjiang", "dried", "buds", "fragrance", "aromatherapy", "sachet-fill"],
    notes: "Material: Dried lavender buds · Origin: Xinjiang Yili Valley · Weight: 500g · Use: Aromatherapy and filling",
    variantGuide: `<div class="variant-guide">
<h4>Lavender Grade Guide</h4>
<p>Each grade is harvested from the same Xinjiang Yili Valley fields but sorted to different purity and bud-size standards. Choose the grade that best suits your intended use.</p>
<table>
<thead><tr><th>Grade</th><th>Purity</th><th>Character</th><th>Best For</th></tr></thead>
<tbody>
<tr><td><strong>Supreme French Blue</strong></td><td>≤ 2% impurity</td><td>Largest, most intact buds with the deepest violet-blue colour and strongest floral aroma</td><td>Display sachets, wedding favours, premium gifting</td></tr>
<tr><td><strong>5A French Blue</strong></td><td>≤ 7% impurity</td><td>Excellent bud integrity with rich, consistent colour</td><td>Pillow sachets, drawer liners, decorative bowls</td></tr>
<tr><td><strong>Super British Blue</strong></td><td>Luzhou-flavour type</td><td>Bold, camphoraceous aromatic profile — stronger scent throw than French varieties</td><td>Room fragrance, large-space aromatherapy, potpourri</td></tr>
<tr><td><strong>4A French Blue</strong></td><td>Mid-grade</td><td>High essential-oil content with slightly smaller buds</td><td>Extracting essential oils and hydrosol (pure dew)</td></tr>
<tr><td><strong>3A French Blue</strong></td><td>Standard</td><td>Good fragrance at an accessible price point</td><td>Bulk pillow filling, sleep sachets, everyday aromatherapy</td></tr>
<tr><td><strong>A French Blue</strong></td><td>≤ 16% impurity</td><td>Smaller buds with a lighter, gentler scent</td><td>Bulk aromatherapy, craft projects, bath soaks</td></tr>
</tbody>
</table>
</div>`,
    available: true,
    includes: ["1 × 500g Dried lavender buds"],
    crossSells: ["cotton-lavender-sachet-bag", "dried-lavender-bundle", "ceramic-incense-holder"],
      variants: [
        { id: "lavender-sachet-a", label: "Supreme French Blue", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-xinjiang-lavender-v3-WnwgcRUiKnBar8xigR3h47.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913476689" },
        { id: "lavender-sachet-b", label: "5A French Blue", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-xinjiang-lavender-v3-WnwgcRUiKnBar8xigR3h47.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913509457" },
        { id: "lavender-sachet-c", label: "Super British Blue", price: 20.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-xinjiang-lavender-v3-WnwgcRUiKnBar8xigR3h47.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913542225" },
        { id: "lavender-sachet-d", label: "4A French Blue", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-xinjiang-lavender-v3-WnwgcRUiKnBar8xigR3h47.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913574993" },
        { id: "lavender-sachet-e", label: "3A French Blue", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-xinjiang-lavender-v3-WnwgcRUiKnBar8xigR3h47.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913607761" },
        { id: "lavender-sachet-f", label: "A French Blue", price: 12.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-bundle-main-v3-ad63Mt6yTAjGZHosGBtgYU.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250913640529" }
      ]
  },
  {
    id: "bloom-2",
    slug: "dried-lavender-bundle",
    name: "Dried Lavender Bundle",
    headline: "The Purple Calm",
    hookLine: "A generous bundle of dried lavender stems — for vases, wreaths, or simply the scent.",
    description:
      "A lush mixed dried flower bouquet featuring lavender stems alongside complementary dried blooms — the kind of arrangement that fills a room with calm before you even notice it. The White variant pairs white dried roses, daisies, and baby’s breath with soft grey-blue lavender stems for a light, romantic palette. The Pink variant brings together rich purple-blue lavender stems with delicate pink strawflowers and white baby’s breath — a warmer, more vibrant composition where the lavender’s natural purple hue takes centre stage alongside soft pink accents. Each bouquet reaches an elegant length of forty-three centimeters and requires no water or maintenance — simply place in your favourite vase and enjoy their quiet presence for months.",
    price: 22.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-bundle-white-v3-6uWEvN4kFydAjgeZRtmrhr.webp",
    tags: ["lavender", "dried", "bundle", "stems", "fragrance"],
    notes: "Material: Naturally dried flower · Dimensions: 43cm length · Includes: 1 bundle · Fragrance lasts months",
    available: true,
    includes: ["1 × Dried lavender bundle"],
    crossSells: ["dried-xinjiang-lavender", "mixed-dried-flower-bouquet", "magnetic-levitating-planter"],
      variants: [
        { id: "dried-lavender-bundle-white", label: "White", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914263121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-bundle-pink-v3-6s29SuPKkbL3Eskoxm7WiA.webp" },
        { id: "dried-lavender-bundle-pink", label: "Pink", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914295889", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-bundle-pink-v3-6s29SuPKkbL3Eskoxm7WiA.webp" }
      ]
  },
  {
    id: "bloom-3",
    slug: "pampas-grass-bouquet",
    name: "Pampas Grass Bouquet",
    headline: "The Soft Cloud",
    hookLine: "Fluffy pampas grass stems — the effortless centrepiece that lasts forever.",
    description:
      "A curated bouquet of dried pampas grass, rabbit tails, and mixed bohemian botanicals — the kind of arrangement that transforms a corner of your home with effortless, lasting beauty. Each combination is thoughtfully composed from a selection of natural dried grasses and seed heads, chosen for their complementary textures and tones. Available in a wide range of compositions from a simple twenty-piece bundle to a generous hundred-piece arrangement, these versatile botanicals require no water, no maintenance, and no replacement — simply place them in your favourite vase and enjoy their quiet presence for months to come.",
    price: 2.21,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-hero-fkcYBpcuibBQvUqN6UELQo.webp",
    tags: ["pampas", "grass", "dried", "bouquet", "natural", "bohemian", "bunny-tail", "reed"],
    notes: "Material: Natural dried grasses and botanicals · Combinations from 20 to 100+ pieces · No water needed · Lasts months",
    available: true,
    variants: [
      { id: "pampas-combo-1", label: "Combo 1 · 20 Pcs", price: 2.48, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312164945", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo1-oH7MPSvuficVcw5kgRtCTg.webp" },
      { id: "pampas-combo-2", label: "Combo 2 · 60 Pcs", price: 4.66, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312197713", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo2-Ta6xFESypaBHhVoLwD8sLp.webp" },
      { id: "pampas-combo-3", label: "Combo 3 · 43 Pcs", price: 4.52, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312230481", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo3-hqJwH7KZ58Fa7VDCFsuGvH.webp" },
      { id: "pampas-combo-4", label: "Combo 4 · 58 Pcs", price: 5.09, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312263249", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo4-9uyujDHwq6T6Kvn6pHUD4r_0ba00c04.jpg" },
      { id: "pampas-combo-5", label: "Combo 5 · 75 Pcs", price: 5.14, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312296017", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo5-UygueJ36JFaFN8rLYgmj3w.webp" },
      { id: "pampas-combo-6", label: "Combo 6 · 64 Pcs", price: 4.24, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312328785", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo6-FuFf9JAvv2dKGJqGuNVVry_6e9199c6.jpg" },
      { id: "pampas-combo-7", label: "Combo 7 · 100 Pcs", price: 5.54, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312361553", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo7-HhT3J2HpCCtrs8rq8CpWEc_341f2ff6.jpg" },
      { id: "pampas-combo-8", label: "Combo 8 · 95 Pcs", price: 5.94, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312394321", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo8-fE3JFcpQUbVtgZd2tpGHL7.webp" },
      { id: "pampas-combo-9", label: "Combo 9 · 95 Pcs", price: 5.41, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312427089", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo9-A7HJxG33WHQjjJanKKYsUJ_d55403f6.jpg" },
      { id: "pampas-combo-10", label: "Combo 10 · 95 Pcs", price: 3.96, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312459857", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo10-93cFQ7mRzrrtun2x6USr4C_10598c0f.jpg" },
      { id: "pampas-combo-11", label: "Combo 11 · 100 Pcs", price: 6.48, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312492625", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo11-HiT6bNdL9qGq5zAzeTFBnP.webp" },
      { id: "pampas-combo-12", label: "Combo 12 · 12 Pcs", price: 2.21, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312525393", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo12-mgyQ2bBFmvN8Xxv5kkL2d9.webp" },
      { id: "pampas-combo-13", label: "Combo 13 · 96 Pcs", price: 5.94, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312558161", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo13-2utPWCvZo3UVkzgEBkDDkS.webp" },
      { id: "pampas-combo-14", label: "Combo 14 · 110 Pcs", price: 6.48, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312590929", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo14-kSkd2bQsvug3LZ4uPWcYBR_0dbf49cb.jpg" },
      { id: "pampas-combo-15", label: "Combo 15 · 67 Pcs", price: 4.52, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312623697", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo15-dxSyMwo4WfSp8HuGmMBvcG.webp" },
      { id: "pampas-combo-16", label: "Combo 16 · 120 Pcs", price: 6.21, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312656465", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo16-icgwZFx9PAnLacHFKWEDWe_92ce7b66.jpg" },
      { id: "pampas-combo-17", label: "Combo 17 · 100 Pcs", price: 7.83, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312689233", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo17-ej2eqHxSERrMQ6Df4s4zXV_12669b50.jpg" },
      { id: "pampas-combo-18", label: "Combo 18 · 50 Pcs", price: 3.68, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312722001", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo18-hL6MozyMMhWAaH2v8DtDhk.webp" },
      { id: "pampas-combo-19", label: "Combo 19 · 80 Pcs", price: 6.21, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312754769", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo19-D9EtHKfHL7htaKgPZuzPy9_13036bd0.jpg" },
      { id: "pampas-combo-20", label: "Combo 20 · 64 Pcs", price: 4.24, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312787537", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo20-EMRFamReeRTmLoyj3PoNvk_314863eb.jpg" },
      { id: "pampas-combo-21", label: "Combo 21 · 100 Pcs", price: 4.80, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312820305", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-combo21-editorial-4Kq3VhNAXTN3xjzqVdCRgR.webp" },
      { id: "pampas-combo-22", label: "Combo 22 · 80 Pcs", price: 4.24, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312853073", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo22-TfagWVcijaW3b8sKFezDzs_065b824d.jpg" },
      { id: "pampas-combo-23", label: "Combo 23 · 100 Pcs", price: 5.14, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312885841", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo23-SsaKErAFj9ifAEZLvMyahZ_382b0eca.jpg" },
      { id: "pampas-combo-24", label: "Combo 24 · 30 Pcs", price: 5.09, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251312918609", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pampas-v2-combo24-B2U9WyFHYknBRMkZWFjpDL_da35d29c.jpg" }],
    includes: ["1 × Pampas grass bouquet"],
    crossSells: ["mixed-dried-flower-bouquet", "faux-potted-arrangement", "autumn-faux-flower-bouquet"],
  },
  {
    id: "bloom-5",
    slug: "mixed-dried-flower-bouquet",
    name: "Mixed Dried Flower Bouquet",
    headline: "The Gathered Bouquet",
    hookLine: "A curated mix of dried flowers — roses, daisies, grasses, and seed pods.",
    description:
      "A curated bouquet of mixed dried flowers  —  roses, daisies, grasses, and seed pods  —  arranged with the kind of casual elegance that looks like you gathered them on a country walk. Available in an array of considered hues, including champagne, vibrant orange, soft pink, and classic white, these naturally dried blooms offer enduring beauty without the need for maintenance. Each delicate bundle is slightly unique, reflecting the natural variations of the botanical elements. They are perfect for styling individually in a favorite slender vessel, or grouping together into a more abundant, textured display that brings a touch of the outdoors into your living space.",
    price: 36.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp",
    tags: ["dried", "flowers", "bouquet", "mixed", "natural"],
    notes: "Material: Naturally dried flowers · Options: Single bundle, 2-piece, or 4-piece sets · Mixed varieties · Each bouquet unique",
    available: true,
    includes: ["1 × Mixed dried flower bouquet"],
    crossSells: ["dried-lavender-bundle", "pampas-grass-bouquet", "dried-xinjiang-lavender"],
      variants: [
        { id: "mixed-dried-flower-bouquet-champagne", label: "Champagne", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309019217", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp" },
        { id: "mixed-dried-flower-bouquet-orange", label: "Orange", price: 36.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309051985", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp" },
        { id: "mixed-dried-flower-bouquet-pink", label: "Pink", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309084753", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp" },
        { id: "mixed-dried-flower-bouquet-white", label: "White", price: 36.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309117521", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp" },
        { id: "mixed-dried-flower-bouquet-mix-colors-4pcs", label: "Mix Colors 4Pcs", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309150289", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp" },
        { id: "mixed-dried-flower-bouquet-orange-2pcs", label: "Orange 2Pcs", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309183057", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet-v3-2EnGGorUALGwYdicQM2CLE.webp" }
      ]
  },
  {
    id: "bloom-6",
    slug: "dried-cotton-stem",
    name: "Dried Cotton Stem",
    headline: "The Soft Sculpture",
    hookLine: "Natural dried cotton stems — sculptural, soft, and endlessly photogenic.",
    description:
      "Natural dried cotton stems with fluffy white bolls offer a sculptural, botanical element that photographs beautifully in any light, bringing an understated elegance to your space. Each stem features approximately ten generously sized cotton heads, naturally dried and preserved to maintain their soft texture and organic shape. Measuring over half a meter in length, these botanicals provide striking vertical interest whether displayed as a solitary minimalist accent or woven into a larger seasonal arrangement. Upon arrival, these delicate stems may require a moment of gentle arranging to restore their full, voluminous appearance and naturally shed any loose botanical elements, ensuring they look perfect in your favorite vase.",
    price: 18.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-cotton-stem-v3-BriQp5zeVFJzFUmWoZPS7v.webp",
    tags: ["cotton", "dried", "stem", "natural", "sculptural"],
    notes: "Material: Natural dried cotton · Dimensions: 52cm length, 5cm bolls · Features: 10 bolls per stem · Care: Gently arrange upon arrival",
    available: true,
    variants: [
        { id: "dried-cotton-stem-1", label: "Single Stem", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-harvest-wreath-v4-Qu53CbCNBDeiXx75tfLFVu.webp", shopifyVariantId: "gid://shopify/ProductVariant/59256239325265" }
      ],
    includes: ["1 × Dried cotton stem"],
    crossSells: ["pampas-grass-bouquet", "mixed-dried-flower-bouquet", "magnetic-levitating-planter"],
  },
  {
    id: "bloom-7",
    slug: "autumn-harvest-wreath",
    name: "Autumn Harvest Wreath",
    headline: "The Seasonal Circle",
    hookLine: "A circular autumn wreath of leaves, berries, pumpkins, and seed pods — for doors, walls, and mantels.",
    description:
      "Welcome the changing seasons with our Autumn Harvest Wreath, a thoughtfully crafted circular arrangement featuring a lush gathering of faux leaves, berries, and seed pods. This inviting piece is beautifully accented by European-style resin ornaments, including intricately modeled dotted pumpkins and whimsical art owls woven throughout the flexible wire base. Whether displayed on a front door to greet guests, hung above a mantelpiece, or positioned as a striking wall feature, it transforms your home into a cozy autumnal retreat. The durable resin construction of the decorative elements ensures they remain vibrant and pristine, offering a timeless seasonal decoration you can return to year after year.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-harvest-wreath-v4-Qu53CbCNBDeiXx75tfLFVu.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-2_e22145e4.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-3_c6e748f2.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-detail_fc5dccfd.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-close_f53b88d6.jpg", "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-7-dimensions_3b8d2fd8.jpg"],
    tags: ["wreath", "autumn", "faux", "leaves", "seasonal"],
    notes: "Material: Resin and faux foliage · Style: European-inspired · Base: Flexible wire · Includes: 1 Wreath",
    available: false,
    includes: ["1 × Autumn Harvest Wreath"],
    crossSells: ["autumn-faux-flower-bouquet", "faux-potted-arrangement", "macrame-wall-hanging"],
      variants: [
        { id: "autumn-harvest-garland-pumpkin-wreath-35x35", label: "Small (35 cm)", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-harvest-wreath-v4-Qu53CbCNBDeiXx75tfLFVu.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310788689" },
        { id: "autumn-harvest-garland-pumpkin-wreath-40x40", label: "Medium (40 cm)", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-harvest-wreath-v4-Qu53CbCNBDeiXx75tfLFVu.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310821457" },
        { id: "autumn-harvest-garland-pumpkin-wreath-45x45", label: "Large (45 cm)", price: 44.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-harvest-wreath-v4-Qu53CbCNBDeiXx75tfLFVu.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310854225" }
      ]
  },
  {
    id: "bloom-8",
    slug: "dried-reed-arrangement",
    name: "Dried Reed Arrangement",
    headline: "The Tall Whisper",
    hookLine: "Tall dried reeds in natural tones — architectural height for any corner.",
    description:
      "A thoughtfully composed artificial floral arrangement that brings enduring architectural movement to a corner, an entryway, or beside a fireplace. Crafted from delicate silk to capture the essence of natural blooms, each piece is thoughtfully paired with a complementary vase for effortless styling. The resilient stems offer the everlasting beauty of botanical forms without the need for maintenance, gracefully swaying in the gentle air currents of your curated home. Whether you select a single vibrant hue or a complex medley of botanical textures, this arrangement serves as a quiet yet captivating focal point in any room.",
    price: 22.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-v4-D3vnVVRCpdoF3v6wJxMUGr.webp",
    tags: ["reed", "dried", "tall", "natural", "architectural"],
    notes: "Material: Silk artificial flowers and vase · Dimensions: 12x14x28cm · Includes: 1 artificial arrangement with vase",
    available: false,
    includes: ["15 × Dried reeds", "1 × Ceramic vase", "1 × Decorative ribbon"],
    crossSells: ["pampas-grass-bouquet", "mixed-dried-flower-bouquet", "faux-potted-arrangement"],
      variants: [
        { id: "dried-reed-arrangement-pink-fron", label: "Pink Fron", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311050833", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-pink-fron-v3-GwqxQ4Nza3aevraSz8D5VX.webp" },
        { id: "dried-reed-arrangement-black-beans", label: "Black Beans", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311083601", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-black-beans-v3-boLZAYxFk7dGyEgv5QpiQZ.webp" },
        { id: "dried-reed-arrangement-sunflower", label: "Sunflower", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311116369", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-sunflower-v3-J8GJUvLDLmSVfNmvHCHZvm.webp" },
        { id: "dried-reed-arrangement-pink-franca-black-be", label: "Pink Franca Black Beans", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311149137", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-black-beans-v3-boLZAYxFk7dGyEgv5QpiQZ.webp" },
        { id: "dried-reed-arrangement-pink-franca-sunflowe", label: "Pink Franca Sunflower", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311181905", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-sunflower-v3-J8GJUvLDLmSVfNmvHCHZvm.webp" },
        { id: "dried-reed-arrangement-powder-franca-sunflo", label: "Powder Franca Sunflower With B", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311214673", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement-sunflower-v3-J8GJUvLDLmSVfNmvHCHZvm.webp" }
      ]
  },
  {
    id: "bloom-9",
    slug: "magnetic-levitating-planter",
    name: "Magnetic Levitating Planter",
    headline: "The Floating Garden",
    hookLine: "A planter that floats and rotates in mid-air — science meets nature.",
    description:
      "A magnetic levitating planter that suspends a plant pot in mid-air, rotating slowly and silently above its base to create a captivating focal point in any room. Both the base and floating pot are crafted from volcanic rock resin with a rough, craggy bark-like texture in dark brown tones with amber-gold veins running through natural fissures. The electromagnetic system is concealed within the wide 21 by 6 centimeter irregular base. Comes complete with an asparagus fern plant, so it arrives ready to display. Available with various international power adapters, this piece effortlessly blends modern science with natural beauty.",
    price: 128.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter-v3-WgNfNLmTRBasQJJNrMHUof.webp",
    tags: ["planter", "magnetic", "levitating", "floating", "modern"],
    notes: "Material: Volcanic rock resin base & floating pot with rough bark-like texture · Dimensions: 21x6cm base · Includes asparagus fern plant & floating pot · USB powered · Available with international power adapters",
    available: true,
    variants: [
        { id: "magnetic-levitating-planter-image-uk", label: "UK Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter-v3-WgNfNLmTRBasQJJNrMHUof.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305414737" },
        { id: "magnetic-levitating-planter-image-au", label: "AU Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter-v3-WgNfNLmTRBasQJJNrMHUof.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305447505" },
        { id: "magnetic-levitating-planter-image-eu", label: "EU Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter-v3-WgNfNLmTRBasQJJNrMHUof.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305480273" },
        { id: "magnetic-levitating-planter-image-us", label: "US Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter-v3-WgNfNLmTRBasQJJNrMHUof.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305513041" }
      ],
    includes: ["1 × Volcanic rock resin base", "1 × Floating pot", "1 × Asparagus fern plant", "1 × USB power cable", "1 × Power adapter"],
    crossSells: ["minimalist-ceramic-planter", "faux-potted-arrangement", "mushroom-night-light"],
  },
  {
    id: "bloom-10",
    slug: "autumn-faux-flower-bouquet",
    name: "Autumn Faux Flower Bouquet",
    headline: "The Eternal Autumn",
    hookLine: "Faux autumn flowers in warm tones — sunflowers, dahlias, and berries that never fade.",
    description:
      "A lush arrangement of premium faux autumn flowers — burnt orange chrysanthemums, deep burgundy dahlias, golden sunflowers, dried wheat stalks, and russet oak leaves — designed to capture the warmth and richness of the harvest season year-round. Each stem is crafted from high-quality silk and polyester with realistic detailing: natural-looking petal textures, authentic colour gradients, and flexible stems that allow you to shape the arrangement to suit your space. No watering, no wilting, no seasonal replacement. Simply place in your favourite vase and enjoy the enduring beauty of autumn on your mantel, dining table, or entryway console.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-faux-flower-bouquet-v3-Fwn5FnpYmgEjFPVXnXNfDp.webp",
    tags: ["faux", "flowers", "autumn", "bouquet", "warm-tones"],
    notes: "Material: Silk and polyester · Style: Faux flower bouquet · Includes: Mixed autumn stems · Vase not included",
    available: true,
    includes: ["1 × Mixed autumn stems"],
    crossSells: ["mixed-dried-flower-bouquet", "minimalist-ceramic-planter", "pampas-grass-bouquet"],
  },
  {
    id: "bloom-11",
    slug: "minimalist-ceramic-planter",
    name: "Minimalist Ceramic Planter",
    headline: "The Clean Pot",
    hookLine: "A matte ceramic planter with drainage hole and saucer — clean lines for any plant.",
    description:
      "A clean-lined ceramic planter with a smooth matte finish — the kind of understated vessel that lets your plants take centre stage. The cylindrical form is crafted from high-fired ceramic with a drainage hole and matching saucer to promote healthy root growth while protecting your surfaces. Available in three considered sizes to accommodate everything from a small succulent to a statement fiddle-leaf fig. The neutral matte white glaze complements any interior palette, from warm Scandinavian minimalism to earthy bohemian spaces.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/minimalist-ceramic-planter-v4-S2GdmHAhUn7wjy2KJbDcCU.webp",
    tags: ["planter", "ceramic", "minimalist", "matte", "drainage"],
    notes: "Material: High-fired ceramic · Finish: Matte white · Includes: Drainage hole and saucer · Sizes: Small (12cm), Medium (16cm), Large (20cm)",
    available: true,
    variants: [
      { id: "bloom-11-s", label: "Small (12cm)", price: 22.00, available: true },
      { id: "bloom-11-m", label: "Medium (16cm)", price: 32.00, available: true },
      { id: "bloom-11-l", label: "Large (20cm)", price: 42.00, available: true }],
    includes: ["1 × Ceramic planter", "1 × Matching saucer"],
    crossSells: ["magnetic-levitating-planter", "faux-potted-arrangement", "pampas-grass-bouquet"],
  },
  {
    id: "bloom-12",
    slug: "woven-hanging-planter",
    name: "Woven Hanging Planter",
    headline: "The Suspended Garden",
    hookLine: "A hand-woven hanging planter in natural jute — brings greenery to eye level.",
    description:
      "A purely hand-woven hanging planter crafted from natural grass, this piece effortlessly transforms a bare corner or sunlit window into a suspended indoor garden. The intricate macrame-style weave creates a secure and decorative cradle for your favorite botanicals, offering a beautiful way to bring vibrant greenery up to eye level. Each package includes one meticulously woven grass basket that adds a touch of organic texture to your home, available in a selection of grounding, earthy tones to complement any interior space.",
    price: 28.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-hanging-planter-v4-jgcgQ8jHsyXowN3LNHNPNU.webp",
    tags: ["planter", "hanging", "woven", "jute", "macrame"],
    notes: "Material: Woven grass · Includes: 1 hanging basket · Adjustable cord · Fits pots up to 18cm",
    available: false,
    includes: ["1 × Hanging basket"],
    crossSells: ["minimalist-ceramic-planter", "macrame-wall-hanging", "faux-potted-arrangement"],
      variants: [
        { id: "woven-hanging-planter-grey", label: "Grey", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307315281", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-hanging-planter-coffee-v3-K9z8fwmgcfJJYuU8GsMkFV.webp" },
        { id: "woven-hanging-planter-coffee", label: "Coffee", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307348049", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-hanging-planter-yellow-v3-QikoKYAWCpcsBBJwYFzr5W.webp" },
        { id: "woven-hanging-planter-yellow", label: "Yellow", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251307380817", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-hanging-planter-yellow-v3-QikoKYAWCpcsBBJwYFzr5W.webp" }
      ]
  },
  {
    id: "bloom-13",
    slug: "faux-potted-arrangement",
    name: "Faux Potted Arrangement",
    headline: "The Zero-Maintenance Garden",
    hookLine: "A complete faux plant in a ceramic pot — greenery without guilt.",
    description:
      "A lifelike artificial fiddle leaf fig tree that brings the lush beauty of tropical greenery into your home without the watering schedule. Available in four heights from a compact seventy centimeters to a statement one-hundred-and-forty centimeters, each tree features realistically textured leaves and a natural-looking trunk that can fool even the most discerning plant lover. Perfect for filling an empty corner, flanking a doorway, or adding life to a room that does not get enough natural light.",
    price: 38.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-potted-arrangement-v3-o7ESAm4y5W7ppJpA2KeyVC.webp",
    tags: ["faux", "potted", "arrangement", "succulents", "ceramic"],
    notes: "Material: Plastic with realistic texture · Heights: 70cm, 105cm, 135cm, 140cm · No maintenance required",
    available: true,
    includes: ["1 × Faux potted arrangement"],
    crossSells: ["faux-banyan-tree", "minimalist-ceramic-planter", "magnetic-levitating-planter"],
  },
  {
    id: "bloom-14",
    slug: "faux-banyan-tree",
    name: "Faux Banyan Tree",
    headline: "The Statement Tree",
    hookLine: "A large faux banyan tree — instant architectural greenery for any room.",
    description:
      "A striking faux banyan tree with meticulously detailed leaves and a textured trunk, offering the kind of architectural presence that transforms a room instantly. Arriving in a simple black nursery pot designed to be placed within your favorite decorative planter, it brings enduring vitality to any corner without the demands of watering or precise sunlight. Available in an array of heights and configurations — ranging from a single compact silhouette to fuller, multi-trunked statements — this botanical accent allows you to cultivate a lush, considered atmosphere with effortless grace.",
    price: 128.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree-v3-UUKUnF8yyu7PgmsDyiiHyX.webp",
    tags: ["faux", "banyan", "tree", "large", "statement"],
    notes: "Faux botanical · Black nursery pot included · Multiple height options · Shapeable branches",
    available: true,
    variants: [
        { id: "faux-banyan-tree-70cm", label: "70cm", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree-v3-UUKUnF8yyu7PgmsDyiiHyX.webp", shopifyVariantId: "gid://shopify/ProductVariant/59244810436689" },
        { id: "faux-banyan-tree-70cm-and105cm", label: "70cm + 105cm Set", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree-v3-UUKUnF8yyu7PgmsDyiiHyX.webp", shopifyVariantId: "gid://shopify/ProductVariant/59244810469457" },
        { id: "faux-banyan-tree-135cm-3forks", label: "135cm — 3 Forks", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree-v3-UUKUnF8yyu7PgmsDyiiHyX.webp", shopifyVariantId: "gid://shopify/ProductVariant/59244810502225" },
        { id: "faux-banyan-tree-140cm-3forks", label: "140cm — 3 Forks", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree-v3-UUKUnF8yyu7PgmsDyiiHyX.webp", shopifyVariantId: "gid://shopify/ProductVariant/59244810534993" }
      ],
    includes: ["1 × Faux banyan tree", "1 × Black nursery pot"],
    crossSells: ["faux-potted-arrangement", "minimalist-ceramic-planter", "magnetic-levitating-planter"],
  },
  // ── Threshold Closer (BLOOM) ──────────────────────────────────────
  {
    id: "bloom-15",
    slug: "cotton-lavender-sachet-bag",
    name: "Cotton Lavender Sachet Bag",
    headline: "The Empty Vessel",
    hookLine: "A natural cotton drawstring sachet bag — fill with dried lavender, herbs, or potpourri. Bag only.",
    description:
      "A simple, unbleached cotton drawstring bag designed to hold dried lavender, herbs, or potpourri — the kind of small, practical object that bridges the gap between a beautiful botanical and a functional home fragrance. The 10×12cm size is perfectly proportioned for a drawer, wardrobe, or linen closet. The natural cotton canvas is breathable, allowing scent to permeate gently while keeping contents contained. Please note: this listing is for the bag only — dried lavender is not included. For the perfect pairing, add our Dried Xinjiang Lavender to your order.",
    price: 4.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cotton-lavender-sachet-bag-v3-AzFCGsrJEENALK337tq2ec.webp",
    tags: ["sachet", "cotton", "bag", "lavender", "drawstring", "threshold-closer"],
    notes: "Material: Natural unbleached cotton canvas · Size: 10×12cm · Closure: Drawstring · BAG ONLY — dried lavender not included",
    available: true,
    shopifyHandle: "cotton-drawstring-canvas-bag",
    shopifyVariantId: "gid://shopify/ProductVariant/59258095894609",
    includes: ["1 × Cotton sachet bag", "1 × Decorative ribbon tie"],
    crossSells: ["dried-xinjiang-lavender", "dried-lavender-bundle", "mixed-dried-flower-bouquet"],
  },
  // ═══════════════════════════════════════════════════════════════════════
  // GLOW — The Light Within
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "glow-1",
    slug: "edison-vintage-night-lamp",
    name: "Edison Vintage Night Lamp",
    headline: "The Warm Filament",
    hookLine: "A vintage Edison G95 spiral bulb on a geometric wooden base — warm amber glow, retro-industrial charm.",
    description:
      "A vintage-style Edison G95 spiral filament bulb rests upon a hand-cut geometric wooden base, casting a warm amber glow that transforms any room into a quiet country library. Each faceted base is individually crafted to cradle the retro-industrial bulb, offering an enduring aesthetic that feels both nostalgic and deeply comforting. The thoughtful design features a flat plug and a diamond dimming lamp holder, allowing you to perfectly adjust the mood of your evening retreat. Choose between the standalone lamp for standard setups, or select the option that thoughtfully includes an adapter plug for seamless integration into your curated space.",
    price: 16.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-lamp-main_e7d146bb.jpg",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-lamp-main_e7d146bb.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-lamp-dimensions_b5e74761.jpg"
    ],
    tags: ["lamp", "edison", "vintage", "night-light", "warm", "geometric", "wood"],
    notes: "Material: Wood · Bulb: G95 spiral · Voltage: 220V · Power: 40W warm yellow",
    shopifyHandle: "70-135cm-large-artificial-ficus-tree-fake-rubber-plants-branch-plastic-fiddle-leaf-fig-tree",
        variants: [
        { id: "edison-vintage-night-lamp-g95-spiral-bulb-cn", label: "CN Plug", price: 16.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-1_G95-Spiral-Bulb-_-Cn_d27ea6d6.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896207953" },
        { id: "edison-vintage-night-lamp-g95-spiral-bulb-with", label: "With Adapter Plug", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-1_G95-Spiral-Bulb-_-With-Adapter-Plug_cadc7d40.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896240721" }
      ],
    available: false,
    includes: ["1 × Edison Vintage Night Lamp", "1 × G95 spiral bulb"],
    crossSells: ["japanese-bedside-lamp", "ceramic-bedside-lamp", "mushroom-night-light"],
  },

  {
    id: "glow-3",
    slug: "wax-melt-aromatherapy-lamp",
    name: "Wax Melt Aromatherapy Lamp",
    headline: "The Scented Light",
    hookLine: "A Japanese-style bamboo wood candle warmer — melts wax from above for warm light and fragrance in one.",
    description:
      "A Japanese-style wax melt aromatherapy lamp crafted with a natural bamboo wood frame and a minimalist white conical shade — combining warm, ambient light with home fragrance in a single beautiful object. The gently curved, inverted J-shape design suspends the warming bulb perfectly over your favorite wax melts, safely releasing their soothing scent without the need for an open flame. Complete with an adjustable dimmer switch to control both light intensity and fragrance release, this elegant piece arrives with two included light sources to seamlessly illuminate and scent your sanctuary.",
    price: 23.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp-v3-BnXb4dNXeKyFzcuyiDACNG.webp",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-lamp-main_b7e76183.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-lamp-dimensions_d77a16f2.jpg"
    ],
    tags: ["lamp", "wax-melt", "aromatherapy", "bamboo", "fragrance", "japanese"],
    notes: "Material: Bamboo wood · Features: Dimmer switch · Includes: 2 light sources",
    shopifyHandle: "japanese-style-melting-wax-lamp-decoration-bedroom-creative-personality-aromatherapy-light",
        variants: [
        { id: "wax-melt-lamp-220v-asia", label: "220V (Asia)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp-v3-BnXb4dNXeKyFzcuyiDACNG.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250903875665" },
        { id: "wax-melt-lamp-110v-taiwan", label: "110V (Taiwan)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp-v3-BnXb4dNXeKyFzcuyiDACNG.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250903908433" },
        { id: "wax-melt-lamp-220v-hk-macau", label: "220V (HK/Macau)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp-v3-BnXb4dNXeKyFzcuyiDACNG.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250903941201" },
        { id: "wax-melt-lamp-110v-us-japan", label: "110V (US/Japan)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp-v3-BnXb4dNXeKyFzcuyiDACNG.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250903973969" },
        { id: "wax-melt-lamp-220v-eu-korea", label: "220V (EU/Korea)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch-v4-5ir6LpTK4geAB2g7tSKXCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250904006737" }
      ],
    available: false,
    includes: ["1 × Aromatherapy lamp", "2 × Light sources"],
    crossSells: ["led-aroma-diffuser", "ceramic-incense-holder", "ceramic-bedside-lamp"],
  },
  {
    id: "glow-4",
    slug: "solar-garden-torch",
    name: "Solar Garden Torch",
    headline: "The Evening Path",
    hookLine: "Solar-powered garden torches with flickering flame effect — no wiring, no batteries.",
    description:
      "Solar-powered garden torches with a realistic flickering flame effect — the kind of outdoor lighting that transforms a garden path or patio into something magical after sunset. Crafted from durable, IP65 waterproof ABS and PS plastic, these torches withstand the elements while providing enchanting illumination throughout the seasons. The intelligent solar panel charges efficiently by day, delivering up to 10 hours of warm, ambient light on summer evenings and 7 hours during winter. With no wiring required, simply stake the 32cm lamp into your lawn or walkway for an instant, captivating glow that automatically illuminates at dusk.",
    price: 58.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch-v4-5ir6LpTK4geAB2g7tSKXCp.webp",
    tags: ["solar", "garden", "torch", "outdoor", "flame-effect"],
    notes: "Material: ABS and PS plastic · Dimensions: 32cm lamp, 30cm tube, 20cm stake · Waterproof: IP65 · Runtime: 7-10 hours",
    available: true,
    variants: [
        { id: "solar-garden-torch-96led-1pcs", label: "96 LED — Single", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch-v4-5ir6LpTK4geAB2g7tSKXCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308593233" },
        { id: "solar-garden-torch-51led-4pc", label: "51 LED — 4 Pack", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch-v4-5ir6LpTK4geAB2g7tSKXCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308626001" },
        { id: "solar-garden-torch-96led-4pc", label: "96 LED — 4 Pack", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch-v4-5ir6LpTK4geAB2g7tSKXCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308658769" },
        { id: "solar-garden-torch-51led-1pcs", label: "51 LED — Single", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch-v4-5ir6LpTK4geAB2g7tSKXCp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308691537" }
      ],
    includes: ["1 × Solar Garden Torch", "1 × Tube", "1 × Stake"],
    crossSells: ["solar-pathway-light", "magnetic-levitating-planter", "japanese-bedside-lamp"],
  },
  {
    id: "glow-5",
    slug: "japanese-bedside-lamp",
    name: "Japanese Bedside Lamp",
    headline: "The Quiet Light",
    hookLine: "A handcrafted wooden lamp with fabric shade — artisan-made, warm quiet light for the bedside.",
    description:
      "A handcrafted Japanese-style table lamp with a natural bamboo shade and solid wood base — the kind of light that makes a bedroom feel calm and considered. The bamboo shade is hand-woven, filtering the light from the E27 bulb into a warm, dappled glow that creates an atmosphere of quiet serenity. Each base is individually turned on a lathe by skilled woodworkers, giving every piece its own subtle character. Available with an EU plug, this artisan lamp brings a touch of wabi-sabi beauty to your bedside.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp-v4-hYEP2TF9v3txiwWGaCokjn.webp",
    tags: ["lamp", "bedside", "japanese", "wood", "fabric"],
    notes: "Material: Bamboo shade, wood base · Craft: Handmade · Bulb: E27 · Plug: EU",
    available: true,
    includes: ["1 × Bamboo shade", "1 × Wood base"],
    crossSells: ["ceramic-bedside-lamp", "mushroom-night-light", "solar-garden-torch"],
  },
  {
    id: "glow-6",
    slug: "solar-pathway-light",
    name: "Solar Pathway Light",
    headline: "The Garden Guide",
    hookLine: "Solar-powered pathway lights in warm white — line a path, edge a border, light a garden.",
    description:
      "Cast a gentle, enchanting glow across your garden paths and borders with our elegantly hollow-carved solar pathway lights. Crafted from durable, weather-resistant premium plastic, these understated luminaries are thoughtfully designed to withstand rain, snow, and frost while seamlessly blending into the quiet of the night. Each light harnesses the sun's energy by day, utilizing a built-in waterproof solar panel to offer up to eight hours of soft illumination after dusk without the need for cumbersome wires or complicated installation. Simply stake them directly into the soft earth to guide your evening strolls with a welcoming, ambient radiance.",
    price: 48.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-pathway-light-v4-HXtMdgu5ZvtnjDseJxZEzP.webp",
    tags: ["solar", "pathway", "light", "garden", "outdoor"],
    notes: "Material: Premium plastic · Dimensions: 6 × 6 × 28.5 cm · Working time: 4-8 hours · Solar powered",
    available: true,
    variants: [
        { id: "solar-pathway-light-warm-white-3pcs", label: "Warm White — 3 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp-v4-hYEP2TF9v3txiwWGaCokjn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250900631633" },
        { id: "solar-pathway-light-white-light-3pcs", label: "Cool White — 3 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp-v4-hYEP2TF9v3txiwWGaCokjn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250900664401" },
        { id: "solar-pathway-light-10-pcs-white-light", label: "Cool White — 10 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp-v4-hYEP2TF9v3txiwWGaCokjn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250900729937" },
        { id: "solar-pathway-light-10-pcs-warm-white", label: "Warm White — 10 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp-v4-hYEP2TF9v3txiwWGaCokjn.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250900959313" }
      ],
    includes: ["1 × Solar Pathway Light"],
    crossSells: ["solar-garden-torch", "magnetic-levitating-planter", "ceramic-bedside-lamp"],
  },
  {
    id: "glow-7",
    slug: "motion-sensing-cabinet-light",
    name: "Motion-Sensing Cabinet Light",
    headline: "The Invisible Helper",
    hookLine: "Rechargeable LED strips that turn on when you open a door — for wardrobes, pantries, and drawers.",
    description:
      "Cast a thoughtful glow over your daily rituals with our rechargeable LED light strips, crafted from sleek aluminum. Featuring a built-in motion sensor, they illuminate wardrobes, pantries, and drawers automatically upon opening, while offering three adjustable color temperatures to suit your space. The ultra-thin profile mounts effortlessly via a magnetic backing and adhesive, requiring no tools for installation. With an impressive battery life that lasts up to 60 days on sensor mode, these elegant strips ensure your darkest corners are always welcomingly lit.",
    price: 18.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-v3-FMBhHJWxJfQPqJTjVGHYjK.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7-dimensions_a24d5f8f.jpg"],
    tags: ["led", "motion-sensor", "cabinet", "rechargeable", "practical"],
    notes: "Material: Aluminum · Installation: Magnetic mount with 3M adhesive · Color Temperature: Adjustable (3000K/4000K/6000K) · Battery Life: Up to 60 days (sensor mode) · Power: Rechargeable USB-C",
    available: true,
    variants: [
        { id: "cabinet-light-silver-20cm", label: "Silver — 20cm", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-silver-v3-BT8GmVR6iHnSfS4FpcnQgd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901188689" },
        { id: "cabinet-light-silver-30cm", label: "Silver — 30cm", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-silver-v3-BT8GmVR6iHnSfS4FpcnQgd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901221457" },
        { id: "cabinet-light-silver-40cm", label: "Silver — 40cm", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-silver-v3-BT8GmVR6iHnSfS4FpcnQgd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901254225" },
        { id: "cabinet-light-silver-50cm", label: "Silver — 50cm", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-silver-v3-BT8GmVR6iHnSfS4FpcnQgd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901286993" },
        { id: "cabinet-light-black-20cm", label: "Black — 20cm", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-black-v3-kGq8jCJAwYFb49XTj7Pbqp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901319761" },
        { id: "cabinet-light-black-30cm", label: "Black — 30cm", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-black-v3-kGq8jCJAwYFb49XTj7Pbqp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901352529" },
        { id: "cabinet-light-black-40cm", label: "Black — 40cm", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-black-v3-kGq8jCJAwYFb49XTj7Pbqp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901385297" },
        { id: "cabinet-light-black-50cm", label: "Black — 50cm", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-black-v3-kGq8jCJAwYFb49XTj7Pbqp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901418065" },
        { id: "cabinet-light-black-60cm", label: "Black — 60cm", price: 36.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/motion-sensing-cabinet-light-black-v3-kGq8jCJAwYFb49XTj7Pbqp.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250901549137" }
      ],
    includes: ["1 × Motion-Sensing Cabinet Light", "1 × Magnetic mount", "1 × 3M adhesive", "1 × USB-C charging cable"],
    crossSells: ["mushroom-night-light", "bamboo-glass-storage-container", "solar-garden-torch"],
  },
  {
    id: "glow-8",
    slug: "round-linen-table-lamp",
    name: "Round Linen Table Lamp",
    headline: "The Soft Sphere",
    hookLine: "A hand-shaped linen sphere on an artisan ceramic base — soft, diffused light for any room.",
    description:
      "A table lamp featuring a hand-shaped round linen shade resting gracefully upon an artisan-crafted bamboo and solid wood base. The sphere shape creates an even, diffused glow that softens the atmosphere of any room, operating reliably on a standard 220V to provide consistent, ambient illumination. Available in tailored plug variants to seamlessly suit UK, US, or EU outlets, each lamp is thoughtfully designed to bring enduring warmth, quiet elegance, and a considered aesthetic to your carefully curated home.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp-v3-5iqvgkbQXJYqJyqFjVJFnz.webp",
    tags: ["lamp", "linen", "round", "table", "ceramic"],
    notes: "Material: Linen, bamboo, and solid wood · Voltage: 220V · Plug Options: UK, US, EU",
    available: true,
    includes: ["1 × Round Linen Table Lamp"],
    crossSells: ["square-linen-table-lamp", "japanese-bedside-lamp", "ceramic-bedside-lamp"],
      variants: [
        { id: "round-linen-table-lamp-uk", label: "UK Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp-v3-5iqvgkbQXJYqJyqFjVJFnz.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915082321" },
        { id: "round-linen-table-lamp-us", label: "US Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp-v3-5iqvgkbQXJYqJyqFjVJFnz.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915115089" },
        { id: "round-linen-table-lamp-eu", label: "EU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp-v3-5iqvgkbQXJYqJyqFjVJFnz.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915147857" }
      ]
  },
  {
    id: "glow-9",
    slug: "square-linen-table-lamp",
    name: "Square Linen Table Lamp",
    headline: "The Architectural Light",
    hookLine: "A hand-tailored linen shade on a hand-turned wooden base — structured artisan light.",
    description:
      "A table lamp with a hand-tailored square linen shade on a hand-turned solid wooden base, offering a structured, architectural light that brings a quiet sophistication to any room. Standing at fourteen inches high, the geometric form is thoughtfully designed with a classic pull-wire switch and a modern USB charging port, seamlessly blending timeless aesthetics with everyday utility. Choose from UK, EU, or US plug configurations to ensure effortless integration into your home, illuminating your space with a warm, inviting glow.",
    price: 98.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp-v4-Sp8cEn92FHuzcGJbXs6ugo.webp",
    tags: ["lamp", "linen", "square", "table", "wood"],
    notes: "Material: Linen and wood · Dimensions: 135mm width, 14 inches high · Features: Pull-wire switch, USB charging port",
    available: true,
    includes: ["1 × Square Linen Table Lamp"],
    crossSells: ["round-linen-table-lamp", "japanese-bedside-lamp", "ceramic-bedside-lamp"],
      variants: [
        { id: "square-linen-table-lamp-photo-color-uk", label: "UK Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp-v4-Sp8cEn92FHuzcGJbXs6ugo.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915442769" },
        { id: "square-linen-table-lamp-photo-color-eu", label: "EU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp-v4-Sp8cEn92FHuzcGJbXs6ugo.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915475537" },
        { id: "square-linen-table-lamp-photo-color-us", label: "US Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp-v4-Sp8cEn92FHuzcGJbXs6ugo.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250915508305" }
      ]
  },
  {
    id: "glow-10",
    slug: "woven-bamboo-table-lamp",
    name: "Woven Bamboo Table Lamp",
    headline: "The Woven Light",
    hookLine: "A hand-woven bamboo shade by traditional artisans — intricate shadow patterns on walls and ceiling.",
    description:
      "Illuminate your living space with a thoughtfully designed table lamp featuring a hand-woven bamboo wood shade, meticulously crafted by traditional artisans using techniques passed down through generations. The intricate weave casts beautiful, mesmerizing shadow patterns on surrounding walls and ceilings, transforming any room into a tranquil sanctuary of warmth and texture. Designed to suit diverse aesthetic preferences and functional requirements, the lamp is available with either a dimmable wooden base for customizable ambiance or a sturdy, non-dimmable metal base. This versatile luminaire seamlessly adapts to your daily lighting needs while supporting a broad 111V to 240V voltage range, ensuring reliable and elegant illumination across the globe.",
    price: 88.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp",
    tags: ["lamp", "bamboo", "woven", "table", "shadow-pattern"],
    notes: "Material: Bamboo wood shade with wooden or metal base · Dimensions: 18x40cm or 23x36cm · Voltage: 111V-240V · Includes: 1 Lamp",
    available: true,
    includes: ["1 × Lamp"],
    crossSells: ["round-linen-table-lamp", "ceramic-bedside-lamp", "japanese-bedside-lamp"],
      variants: [
        { id: "woven-bamboo-table-lamp-18x40cm-us", label: "Tall (18×40cm) / US Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305054289" },
        { id: "woven-bamboo-table-lamp-18x40cm-eu", label: "Tall (18×40cm) / EU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305087057" },
        { id: "woven-bamboo-table-lamp-18x40cm-uk", label: "Tall (18×40cm) / UK Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305119825" },
        { id: "woven-bamboo-table-lamp-18x40cm-au", label: "Tall (18×40cm) / AU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305152593" },
        { id: "woven-bamboo-table-lamp-23x36cm-us", label: "Wide (23×36cm) / US Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305185361" },
        { id: "woven-bamboo-table-lamp-23x36cm-eu", label: "Wide (23×36cm) / EU Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305218129" },
        { id: "woven-bamboo-table-lamp-23x36cm-uk", label: "Wide (23×36cm) / UK Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305250897" },
        { id: "woven-bamboo-table-lamp-23x36cm-au", label: "Wide (23×36cm) / AU Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-bamboo-table-lamp-v3-VjNxqVDDHXbRVvEUJFLqCJ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305283665" }
      ]
  },

  {
    id: "glow-12",
    slug: "ceramic-bedside-lamp",
    name: "Ceramic Bedside Lamp",
    headline: "The Glazed Glow",
    hookLine: "A hand-glazed ceramic lamp — each one unique, artisan-crafted warm light for the bedside.",
    description:
      "A hand-glazed ceramic table lamp with a reactive glaze finish that creates unique colour variations on every piece — no two are exactly alike. Available in three distinctive designs — Dark Green Water Drop, Light Water Drops, and Tower-Shaped — each with a choice of UK, US, or EU plug compatibility. The dimmer switch allows you to adjust the warm glow from a soft ambient light to a bright reading lamp, while the ceramic base has a satisfying weight that keeps it stable. The voltage range of 111V to 240V ensures worldwide compatibility.",
    price: 99.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp-main-v3-EaSJJDEf9Hxqp7n8Kr6kHL.webp",
    tags: ["lamp", "ceramic", "bedside", "reactive-glaze", "unique"],
    notes: "Material: Ceramic with reactive glaze · Switch: Dimmer · Voltage: 111-240V · Plug: UK/US/EU · 3 designs available",
    available: true,
    variants: [
      { id: "glow-12-snd", label: "Sand", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp-sage-v3-4BoRkQUtsEU6jUnxW83LPQ.webp" },
      { id: "glow-12-sge", label: "Sage", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp-ocean-blue-v3-hpL6tCxfLdeoa6JeCnhsve.webp" },
      { id: "glow-12-blu", label: "Ocean Blue", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp-ocean-blue-v3-hpL6tCxfLdeoa6JeCnhsve.webp" }],
    includes: ["1 × Ceramic bedside lamp"],
    crossSells: ["japanese-bedside-lamp", "round-linen-table-lamp", "woven-bamboo-table-lamp"],
  },
  {
    id: "glow-13",
    slug: "mushroom-night-light",
    name: "Mushroom Night Light",
    headline: "The Forest Glow",
    hookLine: "A whimsical mushroom-shaped night light in four distinct designs — choose your silhouette, then your wood tone.",
    description:
      "A whimsical mushroom-shaped night light carved from solid beech or rubber wood with a soft LED glow, the kind of object that makes a hallway, a bathroom, or a childs room feel instantly magical. Available in four distinct cap silhouettes and your choice of a rich walnut or natural beech finish, each lamp measures a compact 16.5 by 10 centimeters. Emitting a gentle 2.4-watt illumination, this charming, artful piece invites a slow, comfortable, and warm atmosphere into any corner of your home.",
    price: 22.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-walnut-v3-BwnQdtUTCqNhwEDfaRptvo.webp",
    tags: ["night-light", "mushroom", "led", "whimsical", "soft", "wooden", "rechargeable"],
    notes: "Material: Beech or rubber wood · Dimensions: 16.5x10cm · Power: 2.4W · USB-C rechargeable · Touch on/off · 3 brightness levels · 6 – 8 hour battery",
    available: true,
    includes: ["1 × Mushroom night light", "1 × USB-C charging cable"],
    crossSells: ["motion-sensing-cabinet-light", "magnetic-levitating-planter", "solar-garden-torch"],
    variants: [
      { id: "mushroom-a-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design A", shopifyVariantId: "gid://shopify/ProductVariant/59250893684817", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-beech-v3-GoEnFaTK3RZBWqUmvtLdTr.webp" },
      { id: "mushroom-a-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design A", shopifyVariantId: "gid://shopify/ProductVariant/59250893717585", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-beech-v3-GoEnFaTK3RZBWqUmvtLdTr.webp" },
      { id: "mushroom-b-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design B", shopifyVariantId: "gid://shopify/ProductVariant/59250893750353", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-walnut-v3-BwnQdtUTCqNhwEDfaRptvo.webp" },
      { id: "mushroom-b-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design B", shopifyVariantId: "gid://shopify/ProductVariant/59250893783121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-beech-v3-GoEnFaTK3RZBWqUmvtLdTr.webp" },
      { id: "mushroom-c-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design C", shopifyVariantId: "gid://shopify/ProductVariant/59250893815889", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-walnut-v3-BwnQdtUTCqNhwEDfaRptvo.webp" },
      { id: "mushroom-c-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design C", shopifyVariantId: "gid://shopify/ProductVariant/59250893848657", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-beech-v3-GoEnFaTK3RZBWqUmvtLdTr.webp" },
      { id: "mushroom-d-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design D", shopifyVariantId: "gid://shopify/ProductVariant/59250893881425", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-walnut-v3-BwnQdtUTCqNhwEDfaRptvo.webp" },
      { id: "mushroom-d-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design D", shopifyVariantId: "gid://shopify/ProductVariant/59250893914193", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light-beech-v3-GoEnFaTK3RZBWqUmvtLdTr.webp" }],
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
      "A woven area rug featuring bohemian-inspired geometric patterns in warm, earthy tones — the kind of foundational piece that effortlessly grounds a room and imbues it with enduring character. Crafted from durable polyester fiber through a precise machine-weaving process, this rectangular flat-weave design is exceptionally resilient and perfectly suited for high-traffic spaces such as the living room or dining room. Whether anchoring a cozy seating arrangement or adding warmth to a dining area, its robust construction ensures it remains a steadfast presence in your home. It seamlessly marries artistic expression with everyday practicality, offering both tactile comfort and lasting visual appeal.",
    price: 88.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bohemian-area-rug-v4-Uwr77xvzJZhqq5Z5y4DsvT.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-1-dimensions_8d5095a2.jpg"],
    tags: ["rug", "bohemian", "woven", "area", "geometric"],
    notes: "Material: Polyester fiber · Dimensions: 60x90cm, 80x120cm, 80x160cm · Process: Machine woven · Care: Machine washable",
    available: true,
    variants: [
        { id: "bohemian-area-rug-4style-60x90cm", label: "60×90cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bohemian-area-rug-v4-Uwr77xvzJZhqq5Z5y4DsvT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897125457" },
        { id: "bohemian-area-rug-4style-80x160cm", label: "80×160cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bohemian-area-rug-v4-Uwr77xvzJZhqq5Z5y4DsvT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897158225" },
        { id: "bohemian-area-rug-4style-80x120cm", label: "80×120cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bohemian-area-rug-v4-Uwr77xvzJZhqq5Z5y4DsvT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250897190993" }
      ],
    includes: ["1 × Bohemian area rug"],
    crossSells: ["plush-round-rug", "plush-shag-rug", "chunky-knit-cushion-cover"],
  },
  {
    id: "dwell-2",
    slug: "plush-shag-rug",
    name: "Plush Shag Rug",
    headline: "The Soft Landing",
    hookLine: "A deep-pile shag rug — the kind of surface you want to sink your feet into.",
    description:
      "A deep-pile shag rug with a luxuriously soft texture, crafted with a velvety cashmere-like surface that invites you to walk barefoot and sink into its warmth. Designed for ultimate comfort and stability, its thoughtful three-layer construction features a supportive sponge core for cushioning and a dotted, non-slip backing to ensure it stays perfectly in place on your floors. Available in an array of versatile sizes to beautifully suit any room, this lightweight piece is best cared for with a gentle hand wash to maintain its plush elegance and inviting feel for years to come.",
    price: 78.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp",
    tags: ["rug", "shag", "plush", "soft", "deep-pile"],
    notes: "Material: Cashmere-feel fabric, sponge core, dotted non-slip backing · Sizes: 40x60cm to 120x160cm · Weight: 0.5kg · Care: Hand wash only",
    available: true,
    variants: [
        { id: "plush-shag-rug-beige-120x160cm", label: "Beige / 120X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diatomite-bath-mat-v4-Gz4EjLNnNpfKmvZqRbThgz.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898763857" },
        { id: "plush-shag-rug-white-100x160cm", label: "White / 100X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250898829393" },
        { id: "plush-shag-rug-beige-50x80cm", label: "Beige / 50X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250899058769" },
        { id: "plush-shag-rug-white-50x80cm", label: "White / 50X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250899517521" },
        { id: "plush-shag-rug-white-120x160cm", label: "White / 120X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250899648593" },
        { id: "plush-shag-rug-beige-100x160cm", label: "Beige / 100X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250899681361" },
        { id: "plush-shag-rug-white-80x160cm", label: "White / 80X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250899714129" },
        { id: "plush-shag-rug-white-40x60cm", label: "White / 40X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250899746897" },
        { id: "plush-shag-rug-beige-80x160cm", label: "Beige / 80X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250900074577" },
        { id: "plush-shag-rug-beige-40x60cm", label: "Beige / 40X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug-v3-o8LBWShVEYhZci58Gf9hyy.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250900107345" }
      ],
    includes: ["1 × Plush shag rug"],
    crossSells: ["bohemian-area-rug", "plush-round-rug", "boucle-sphere-cushion"],
  },
  {
    id: "dwell-3",
    slug: "diatomite-bath-mat",
    name: "Diatomite Bath Mat",
    headline: "The Instant Dry",
    hookLine: "A stone bath mat that absorbs water instantly and dries in minutes — no more soggy towels.",
    description:
      "A diatomite stone bath mat that absorbs water on contact and dries within minutes — the kind of bathroom upgrade that makes you wonder why you ever used a fabric mat. Crafted from natural diatomite earth, this porous stone quickly draws moisture away from your feet, preventing slips and resisting bacteria growth. Measuring 40 by 30 centimeters, its minimalist Nordic-inspired profile sits elegantly on your bathroom floor while effortlessly maintaining a dry, clean environment. The inherently antimicrobial surface requires minimal upkeep, ensuring your space remains fresh and thoughtfully considered.",
    price: 48.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diatomite-bath-mat-v4-Gz4EjLNnNpfKmvZqRbThgz.webp",
    tags: ["bath-mat", "diatomite", "stone", "quick-dry", "antimicrobial"],
    notes: "Material: Natural diatomite earth · Dimensions: 40x30cm · Features: Quick-dry, antimicrobial, non-slip",
        variants: [
        { id: "diatomite-bath-mat-grey-40x30cm", label: "Grey / 40X", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diatomite-bath-mat-v4-Gz4EjLNnNpfKmvZqRbThgz.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250896175185" }
      ],
    available: true,
    includes: ["1 × Diatomite Bath Mat"],
    crossSells: ["bohemian-area-rug", "plush-shag-rug", "bamboo-glass-storage-container"],
  },
  {
    id: "dwell-4",
    slug: "linen-placemats",
    name: "Linen Placemats",
    headline: "The Table Foundation",
    hookLine: "Washed linen placemats with frayed edges — the base layer of a considered table.",
    description:
      "A single washed linen placemat with naturally frayed edges  —  the kind of table foundation that makes even a simple weeknight dinner feel intentional. Measuring a generous 32 by 44 centimeters, the pre-washed pure linen has a soft, lived-in quality that offers an earthy, tactile texture which only grows more inviting with time. Whether hosting a formal gathering or enjoying a quiet morning coffee, this versatile layer sets a beautifully considered tone. Sold individually to encourage creative expression, it invites you to effortlessly mix and match our nature-inspired hues to curate a personalized tablescape.",
    price: 32.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-placemats-v3-NuJ7oBw5UApwbnP5Fyk9Jd.webp",
    tags: ["placemats", "linen", "washed", "frayed", "table"],
    notes: "Material: 99% Linen · Dimensions: 32x44cm · Sold individually",
    available: false,
    variants: [
        { id: "linen-placemats-original-hemp-color", label: "Natural Hemp", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914361425", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-placemats-v3-NuJ7oBw5UApwbnP5Fyk9Jd.webp" },
        { id: "linen-placemats-white-32x44cm", label: "White", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-placemats-v3-NuJ7oBw5UApwbnP5Fyk9Jd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914394193" },
        { id: "linen-placemats-caramel-colour-32x44", label: "Caramel", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-placemats-v3-NuJ7oBw5UApwbnP5Fyk9Jd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59250914492497" },
        { id: "linen-placemats-grey-blue-32x44cm", label: "Grey Blue", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914525265", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-placemats-v3-NuJ7oBw5UApwbnP5Fyk9Jd.webp" }
      ],
    includes: ["1 × Linen placemat"],
    crossSells: ["retro-reactive-glaze-dinnerware", "coral-fleece-throw-blanket", "plush-round-rug"],
  },
  {
    id: "dwell-5",
    slug: "linen-tablecloth",
    name: "Linen Tablecloth",
    headline: "The Gathered Table",
    hookLine: "A washed linen tablecloth that drapes beautifully — the foundation of a considered table.",
    description:
      "A washed linen blend tablecloth that drapes with the kind of casual elegance that makes a dining space feel effortlessly gathered, reminiscent of a rustic French farmhouse. Woven from a durable yet soft blend of linen and polyester, it features a subtle botanical pattern that adds quiet texture to your setting. Its considered 35cm width allows it to function beautifully as a versatile table runner, while the extensive range of lengths from 120cm to 350cm ensures a perfect, graceful drape for any occasion.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-5-dimensions_e660391c.jpg"],
    tags: ["tablecloth", "linen", "washed", "table", "dining"],
    notes: "Material: Linen and polyester blend · Dimensions: 35cm width, lengths from 120cm to 350cm · Pattern: Botanical · Machine washable",
    available: false,
    variants: [
        { id: "linen-tablecloth-royal-gray-35x120", label: "Royal Grey / 35X120", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-KhPHnPbqh3LnPvPwWqvwrP.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251307905105" },
        { id: "linen-tablecloth-royal-gray-35x160", label: "Royal Grey / 35X160", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251307937873" },
        { id: "linen-tablecloth-royal-gray-35x180", label: "Royal Grey / 35X180", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251307970641" },
        { id: "linen-tablecloth-royal-gray-35x210", label: "Royal Grey / 35X210", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308003409" },
        { id: "linen-tablecloth-royal-gray-35x240", label: "Royal Grey / 35X240", price: 44.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308036177" },
        { id: "linen-tablecloth-royal-gray-35x270", label: "Royal Grey / 35X270", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308068945" },
        { id: "linen-tablecloth-royal-gray-35x300", label: "Royal Grey / 35X300", price: 52.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308101713" },
        { id: "linen-tablecloth-royal-gray-35x350", label: "Royal Grey / 35X350", price: 58.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308134481" },
        { id: "linen-tablecloth-farrow-coffee-35x120", label: "Farrow Coffee / 35X120", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308167249" },
        { id: "linen-tablecloth-farrow-coffee-35x160", label: "Farrow Coffee / 35X160", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308200017" },
        { id: "linen-tablecloth-farrow-coffee-35x180", label: "Farrow Coffee / 35X180", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308232785" },
        { id: "linen-tablecloth-farrow-coffee-35x210", label: "Farrow Coffee / 35X210", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308265553" },
        { id: "linen-tablecloth-farrow-coffee-35x240", label: "Farrow Coffee / 35X240", price: 44.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308298321" },
        { id: "linen-tablecloth-farrow-coffee-35x270", label: "Farrow Coffee / 35X270", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308331089" },
        { id: "linen-tablecloth-farrow-coffee-35x300", label: "Farrow Coffee / 35X300", price: 52.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308363857" },
        { id: "linen-tablecloth-farrow-coffee-35x350", label: "Farrow Coffee / 35X350", price: 58.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth-v4-R93RcxDkoC8zF8bLddVKa5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251308396625" }
      ],
    includes: ["1 × Linen tablecloth"],
    crossSells: ["retro-reactive-glaze-dinnerware", "boucle-sphere-cushion", "bohemian-area-rug"],
  },
  {
    id: "dwell-6",
    slug: "linen-table-runner",
    name: "Linen Table Runner",
    headline: "The Centre Line",
    hookLine: "A washed linen table runner — the simplest way to make a table feel dressed.",
    description:
      "The simplest, most effective way to make a dining table feel dressed and considered, this versatile runner instantly elevates your space. Woven from soft, durable cotton that mimics the beautiful drape of natural linen, it features subtle stripes and relaxed edges for a warm, lived-in aesthetic. Whether you are hosting an intimate dinner party or enjoying a quiet morning coffee, the varied lengths and earthy color palettes ensure a perfect fit for any table. It effortlessly anchors your tablescape, bringing a touch of understated elegance to both everyday meals and special gatherings.",
    price: 18.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6-dimensions_19905399.jpg"],
    tags: ["table-runner", "linen", "washed", "dining", "natural"],
    notes: "Material: Cotton · Dimensions: 30cm wide, lengths from 50cm to 300cm · Pattern: Striped · Care: Machine washable",
        variants: [
        { id: "linen-runner-brown-30x50", label: "Warm Brown / 30X50", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309707345" },
        { id: "linen-runner-brown-30x120", label: "Warm Brown / 30X120", price: 24.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309740113" },
        { id: "linen-runner-brown-30x160", label: "Warm Brown / 30X160", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309772881" },
        { id: "linen-runner-brown-30x180", label: "Warm Brown / 30X180", price: 30.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309805649" },
        { id: "linen-runner-brown-30x200", label: "Warm Brown / 30X200", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309838417" },
        { id: "linen-runner-brown-30x220", label: "Warm Brown / 30X220", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309871185" },
        { id: "linen-runner-brown-30x240", label: "Warm Brown / 30X240", price: 36.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309903953" },
        { id: "linen-runner-brown-30x260", label: "Warm Brown / 30X260", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309936721" },
        { id: "linen-runner-brown-30x300", label: "Warm Brown / 30X300", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309969489" },
        { id: "linen-runner-gray-30x50", label: "Light Grey / 30X50", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310002257" },
        { id: "linen-runner-gray-30x120", label: "Light Grey / 30X120", price: 24.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310035025" },
        { id: "linen-runner-gray-30x160", label: "Light Grey / 30X160", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310067793" },
        { id: "linen-runner-gray-30x180", label: "Light Grey / 30X180", price: 30.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310100561" },
        { id: "linen-runner-gray-30x200", label: "Light Grey / 30X200", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310133329" },
        { id: "linen-runner-gray-30x220", label: "Light Grey / 30X220", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310166097" },
        { id: "linen-runner-gray-30x240", label: "Light Grey / 30X240", price: 36.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310198865" },
        { id: "linen-runner-gray-30x260", label: "Light Grey / 30X260", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310231633" },
        { id: "linen-runner-gray-30x300", label: "Light Grey / 30X300", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310264401" },
        { id: "linen-runner-navy-30x50", label: "Navy Blue / 30X50", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310297169" },
        { id: "linen-runner-navy-30x120", label: "Navy Blue / 30X120", price: 24.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310329937" },
        { id: "linen-runner-navy-30x160", label: "Navy Blue / 30X160", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310362705" },
        { id: "linen-runner-navy-30x180", label: "Navy Blue / 30X180", price: 30.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310395473" },
        { id: "linen-runner-navy-30x200", label: "Navy Blue / 30X200", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310428241" },
        { id: "linen-runner-navy-30x220", label: "Navy Blue / 30X220", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310461009" },
        { id: "linen-runner-navy-30x240", label: "Navy Blue / 30X240", price: 36.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310493777" },
        { id: "linen-runner-navy-30x260", label: "Navy Blue / 30X260", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310526545" },
        { id: "linen-runner-navy-30x300", label: "Navy Blue / 30X300", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner-v3-GXD5Xhb6nXLwWcuMBSXqM5.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251310559313" }
      ],
    available: true,
    includes: ["1 × Linen table runner"],
    crossSells: ["retro-reactive-glaze-dinnerware", "coral-fleece-throw-blanket", "knit-nap-blanket"],
  },
  {
    id: "dwell-7",
    slug: "coral-fleece-throw-blanket",
    name: "Coral Fleece Throw Blanket",
    headline: "The Warm Wrap",
    hookLine: "Ultra-soft coral fleece throw — lightweight warmth for sofas, beds, and reading chairs.",
    description:
      "An ultra-soft coral fleece throw blanket in a generous flannel weave — the kind of blanket that makes you want to curl up on the sofa with a book and a cup of tea. The flannel fabric is exquisitely soft against the skin, lightweight yet warm, and suitable for all seasons. Available in two sizes — a compact fifty-by-seventy centimeters for a personal wrap, or a generous hundred-by-seventy centimeters for sharing — this versatile blanket works equally well on the sofa, the bed, or draped over a reading chair.",
    price: 38.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket-v3-9aVa6smb4pLoHwbcLtckPZ.webp",
    tags: ["blanket", "throw", "fleece", "coral", "soft"],
    notes: "Material: Flannel coral fleece · Sizes: 50×70cm (Small), 100×70cm (Large) · All-season · Machine washable",
    available: true,
    variants: [
      { id: "dwell-7-crm", label: "Cream", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket-v3-9aVa6smb4pLoHwbcLtckPZ.webp" },
      { id: "dwell-7-gry", label: "Grey", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket-v3-9aVa6smb4pLoHwbcLtckPZ.webp" },
      { id: "dwell-7-sge", label: "Sage", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket-v3-9aVa6smb4pLoHwbcLtckPZ.webp" }],
    includes: ["1 × Coral fleece throw blanket"],
    crossSells: ["knit-nap-blanket", "chunky-knit-cushion-cover", "boucle-sphere-cushion"],
  },
  {
    id: "dwell-8",
    slug: "knit-nap-blanket",
    name: "Knit Nap Blanket",
    headline: "The Afternoon Layer",
    hookLine: "A chunky knit blanket for naps, reading, and slow afternoons.",
    description:
      "A chunky knit blanket thoughtfully designed for naps, reading, and slow afternoons — the kind of piece that effortlessly becomes your most treasured possession. Expertly crafted from soft, durable polyester fiber, the open knit provides comforting warmth without unnecessary weight, while the beautifully textured pattern adds a tactile richness to your living space. Measuring a generous 127 by 170 centimeters, it is perfectly sized to envelop you in comfort, inviting you to pause, unwind, and embrace moments of quiet reflection.",
    price: 48.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-nap-blanket-v3-VHBxmqGxJKjKhH2MqYZAoK.webp",
    tags: ["blanket", "knit", "chunky", "nap", "textured"],
    notes: "Material: Polyester fiber · Dimensions: 127x170cm · Machine washable",
    available: true,
    variants: [
        { id: "knit-nap-blanket-khaki", label: "Khaki", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309215825", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-nap-blanket-v3-VHBxmqGxJKjKhH2MqYZAoK.webp" },
        { id: "knit-nap-blanket-dark-grey", label: "Dark Grey", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309248593", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-nap-blanket-v3-VHBxmqGxJKjKhH2MqYZAoK.webp" },
        { id: "knit-nap-blanket-light-grey", label: "Light Grey", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309281361", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-nap-blanket-v3-VHBxmqGxJKjKhH2MqYZAoK.webp" }
      ],
    includes: ["1 × Knit Nap Blanket"],
    crossSells: ["coral-fleece-throw-blanket", "chunky-knit-cushion-cover", "boucle-sphere-cushion"],
  },
  {
    id: "dwell-9",
    slug: "chunky-knit-cushion-cover",
    name: "Chunky Knit Cushion Cover",
    headline: "The Textured Touch",
    hookLine: "A hand-knit cushion cover in chunky yarn — instant texture for any sofa.",
    description:
      "A hand-knit cushion cover in chunky yarn offers the kind of texture that makes any sofa look and feel instantly more inviting. The oversized cable knit pattern adds profound visual depth, creating a warm, tactile focal point in your living space. Crafted from a soft and durable acrylic blend, this piece provides both enduring comfort and effortless style for your daily lounging. Designed to perfectly accommodate standard 45x45cm inserts, it effortlessly elevates your home decor with a touch of cozy, considered craftsmanship.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-cover-v4-KRPkxX7asn3yRneEubfdRY.webp",
    tags: ["cushion", "cover", "knit", "chunky", "textured"],
    notes: "Material: Acrylic blend · Dimensions: 45x45cm · Insert not included",
    available: true,
    variants: [
        { id: "chunky-knit-cushion-cover-yellow", label: "Mustard Yellow", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-mustard-v3-SKJxXAyXnPehX6YLREhaXX.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306266705" },
        { id: "chunky-knit-cushion-cover-grey", label: "Charcoal Grey", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306299473", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-charcoal-v3-gkVCXKGnBrWjVC9jsz9bti.webp" },
        { id: "chunky-knit-cushion-cover-dark-brown", label: "Dark Brown", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-dark-brown-v3-ZcwyEyWVcRUsUQVFtZTcmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306332241" },
        { id: "chunky-knit-cushion-cover-light-brown", label: "Light Brown", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-light-brown-v3-kKjv8Eg5eyvy7aojVb6pBM.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306365009" },
        { id: "chunky-knit-cushion-cover-white", label: "Cream White", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306397777", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-beige-v3-bfB44WNfdpNkud8vVTickZ.webp" },
        { id: "chunky-knit-cushion-cover-beige", label: "Natural Beige", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-beige-v3-bfB44WNfdpNkud8vVTickZ.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306430545" }
      ],
    includes: ["1 × Chunky knit cushion cover"],
    crossSells: ["boucle-sphere-cushion", "tufted-tassel-cushion", "pet-blanket"],
  },
  {
    id: "dwell-10",
    slug: "boucle-sphere-cushion",
    name: "Boucle Sphere Cushion",
    headline: "The Soft Sphere",
    hookLine: "A round boucle cushion — playful, tactile, and irresistibly soft.",
    description:
      "A round boucle cushion with a playful sphere shape — the kind of object that effortlessly adds personality and texture to a sofa or bed. Crafted from soft lamb wool in an intricate knotted rope design, its tactile fabric is irresistibly soft to the touch, inviting moments of quiet comfort. The Nordic-inspired spherical form breaks up the traditional lines of your furniture, bringing warmth, dimension, and a modern sculptural element to your living space. Available in two versatile sizes, it serves as a perfect standalone statement piece or a cozy companion to your existing decor collection.",
    price: 32.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp",
    tags: ["cushion", "boucle", "sphere", "round", "soft"],
    notes: "Material: Lamb wool · Dimensions: 22cm or 28cm diameter · Style: Nordic knot design",
    available: true,
    variants: [
        { id: "boucle-sphere-cushion-creamy-white-22cm", label: "Creamy White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306594385", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-cream-v3-QB3vvJJLDohV7u9dikW7V3.webp" },
        { id: "boucle-sphere-cushion-light-brown-22cm", label: "Light Brown", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-light-brown-v3-ZiACAv4tVBmv6YG6he9237.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306627153" },
        { id: "boucle-sphere-cushion-lilac-grey-22cm", label: "Lilac Grey", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-lilac-grey-v3-ar2JpoFFty6DNpL3PSg4NY.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306659921" },
        { id: "boucle-sphere-cushion-misty-rose-22cm", label: "Misty Rose", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-misty-rose-v3-ECdD3YWhapG7P2wtb2McZD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306692689" },
        { id: "boucle-sphere-cushion-creamy-white-28cm", label: "Creamy White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306725457", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-cream-v3-QB3vvJJLDohV7u9dikW7V3.webp" },
        { id: "boucle-sphere-cushion-light-brown-28cm", label: "Light Brown", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-light-brown-v3-ZiACAv4tVBmv6YG6he9237.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306758225" },
        { id: "boucle-sphere-cushion-lilac-grey-28cm", label: "Lilac Grey", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-lilac-grey-v3-ar2JpoFFty6DNpL3PSg4NY.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306790993" },
        { id: "boucle-sphere-cushion-misty-rose-28cm", label: "Misty Rose", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-misty-rose-v3-ECdD3YWhapG7P2wtb2McZD.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306823761" },
        { id: "boucle-sphere-cushion-black-22cm", label: "Black", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306856529" },
        { id: "boucle-sphere-cushion-black-28cm", label: "Black", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306889297" },
        { id: "boucle-sphere-cushion-navy-blue-22cm", label: "Navy Blue", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306922065" },
        { id: "boucle-sphere-cushion-navy-blue-28cm", label: "Navy Blue", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306954833" },
        { id: "boucle-sphere-cushion-beige-22cm", label: "Beige", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251306987601" },
        { id: "boucle-sphere-cushion-beige-28cm", label: "Beige", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion-v3-ceChE2r7ZSR8wywAsTUE3F.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251307020369" }
      ],
    includes: ["1 × Boucle sphere cushion"],
    crossSells: ["chunky-knit-cushion-cover", "tufted-tassel-cushion", "coral-fleece-throw-blanket"],
  },
  {
    id: "dwell-11",
    slug: "tufted-tassel-cushion",
    name: "Tufted Tassel Cushion",
    headline: "The Artisan Pillow",
    hookLine: "A tufted cushion with corner tassels — handcraft details for the sofa.",
    description:
      "A tufted cotton canvas cushion cover with decorative corner tassels — the kind of handcraft detail that adds warmth and character to any sofa or bed. The tufted texture creates a raised pattern that catches the light beautifully, bringing a tactile dimension to your living space. Woven from durable yet breathable cotton canvas, it offers both visual intrigue and everyday comfort. Available in versatile square or elongated lumbar profiles, this piece adapts effortlessly to your styling needs. It can be selected as a standalone cover to refresh your existing decor, or complete with a plush PP cotton insert for immediate, sink-in comfort.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-v4-cJ2zXpczcMu7uGr4iq96FL.webp",
    tags: ["cushion", "tufted", "tassel", "artisan", "decorative"],
    notes: "Material: Cotton canvas cover · Optional PP cotton insert · Tufted texture with corner tassels · Available in square and lumbar shapes",
    available: true,
    includes: ["1 × Cushion cover", "1 × Cushion insert"],
    crossSells: ["chunky-knit-cushion-cover", "boucle-sphere-cushion", "plush-round-rug"],
      variants: [
        { id: "tufted-tassel-cushion-beige-square-pillow", label: "Beige Square Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-beige-square-v3-ZJgEzbx7St7pDCVbwK9JNF.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251303809105" },
        { id: "tufted-tassel-cushion-beige-square-pillow", label: "Beige Square Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-beige-square-v3-ZJgEzbx7St7pDCVbwK9JNF.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251303841873" },
        { id: "tufted-tassel-cushion-beige-waist-pillow-p", label: "Beige Waist Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-beige-waist-v3-ERKAXUuNyhEe33tSQkgfhT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251303874641" },
        { id: "tufted-tassel-cushion-beige-waist-pillow-p", label: "Beige Waist Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-beige-waist-v3-ERKAXUuNyhEe33tSQkgfhT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251303907409" },
        { id: "tufted-tassel-cushion-yellow-square-pillow", label: "Yellow Square Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-yellow-square-v3-cKwLbTYoeq4RBmNczdnhPE.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251303940177" },
        { id: "tufted-tassel-cushion-yellow-square-pillow", label: "Yellow Square Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-yellow-square-v3-cKwLbTYoeq4RBmNczdnhPE.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251303972945" },
        { id: "tufted-tassel-cushion-yellow-waist-pillow", label: "Yellow Waist Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-yellow-waist-v3-MoyKatRGGxwnrpYKLhfESt.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304005713" },
        { id: "tufted-tassel-cushion-yellow-waist-pillow", label: "Yellow Waist Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion-yellow-waist-v3-MoyKatRGGxwnrpYKLhfESt.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304038481" }
      ]
  },
  {
    id: "dwell-12",
    slug: "plush-round-rug",
    name: "Plush Round Rug",
    headline: "The Soft Circle",
    hookLine: "A round plush rug — soft underfoot, perfect for bedrooms and reading nooks.",
    description:
      "A round plush rug featuring a deep, exceptionally soft pile  —  the kind of tactile surface that beautifully defines an intimate space within any room. Machine-woven from durable, high-quality acrylic fibers, this piece is perfectly suited for placement beside a bed, tucked under a favorite reading chair, or anchoring a nursery. The reliable non-slip backing keeps it securely positioned, while the hand-washable design ensures effortless everyday maintenance. Available in multiple versatile sizes to seamlessly complement any corner of your curated home.",
    price: 48.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp",
    tags: ["rug", "round", "plush", "soft", "bedroom"],
    notes: "Material: Acrylic plush · Care: Hand wash only · Backing: Non-slip · Sizes: 35cm to 60cm diameter",
    available: true,
    variants: [
        { id: "plush-round-rug-white-35-35cm", label: "White / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304071249" },
        { id: "plush-round-rug-hite-brown-tip-35-35", label: "Hite Brown Tip / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304104017" },
        { id: "plush-round-rug-black-35-35cm", label: "Black / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304136785" },
        { id: "plush-round-rug-lotus-root-pink-35-3", label: "Lotus Root Pink / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304169553" },
        { id: "plush-round-rug-light-gray-35-35cm", label: "Light Gray / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304202321" },
        { id: "plush-round-rug-black-50x50cm", label: "Black / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304235089" },
        { id: "plush-round-rug-black-60x60cm", label: "Black / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304267857" },
        { id: "plush-round-rug-light-gray-50x50cm", label: "Light Gray / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304300625" },
        { id: "plush-round-rug-light-gray-60x60cm", label: "Light Gray / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304333393" },
        { id: "plush-round-rug-white-50x50cm", label: "White / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304366161" },
        { id: "plush-round-rug-white-60x60cm", label: "White / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304398929" },
        { id: "plush-round-rug-hite-brown-tip-50x50", label: "Hite Brown Tip / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304431697" },
        { id: "plush-round-rug-hite-brown-tip-60x60", label: "Hite Brown Tip / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304464465" },
        { id: "plush-round-rug-lotus-root-pink-50x5", label: "Lotus Root Pink / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304497233" },
        { id: "plush-round-rug-lotus-root-pink-60x6", label: "Lotus Root Pink / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304530001" },
        { id: "plush-round-rug-black-40x40cm", label: "Black / 40X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304562769" },
        { id: "plush-round-rug-white-40x40cm", label: "White / 40X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug-v3-bYzoPGScBxmkBPJZQsgxmW.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251304595537" }
      ],
    includes: ["1 × Plush round rug"],
    crossSells: ["bohemian-area-rug", "plush-shag-rug", "diatomite-bath-mat"],
  },
  {
    id: "dwell-13",
    slug: "velvet-stripe-cushion-cover",
    name: "Velvet Stripe Cushion Cover",
    headline: "The Luxe Touch",
    hookLine: "A velvet cushion cover with tonal stripes — subtle luxury for the sofa.",
    description:
      "A velvet cushion cover with tonal stripes that catch the light differently depending on the angle, offering the kind of subtle luxury that elevates a sofa without being ostentatious. The plush velvet material is soft and durable, creating a warm, considered atmosphere in any living space. Available in an array of classic shades, each cover measures 45 by 45 centimeters and features a clean, plain pattern that seamlessly integrates with your existing decor.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-cover-v4-JWeikAFfwaHpZzmPHwuWF7.webp",
    tags: ["cushion", "cover", "velvet", "stripe", "luxe"],
    notes: "Material: Plush velvet · Dimensions: 45x45cm · Pattern: Plain · Insert not included",
    available: false,
    variants: [
        { id: "velvet-stripe-cushion-cover-white", label: "Ivory White", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304824913", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-ivory-v3-bRkXzCSAtWq6vNy7F2rkUV.webp" },
        { id: "velvet-stripe-cushion-cover-silver-gray", label: "Silver Grey", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304857681", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-silver-grey-v3-JpKebxtavEYsgcsnxhdsU6.webp" },
        { id: "velvet-stripe-cushion-cover-yellow", label: "Mustard Yellow", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304890449", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-mustard-v3-6h3q8K9UgiyQrkJYFs2SMB.webp" },
        { id: "velvet-stripe-cushion-cover-black", label: "Charcoal Black", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304923217", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-charcoal-v3-VTmm2ENf7q3qtjXLnQttKR.webp" },
        { id: "velvet-stripe-cushion-cover-wine-red", label: "Wine Red", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304955985", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-wine-red-v3-afUz7DyPPdQCFiqSnGwEux.webp" },
        { id: "velvet-stripe-cushion-cover-blue", label: "Navy Blue", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304988753", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-navy-v3-TM3bRYDDXu743b6f682jgw.webp" },
        { id: "velvet-stripe-cushion-cover-white-and-pink-towel", label: "White & Pink Set", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305021521", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-white-pink-set-v3-j2xKEtgXKPvjhNJCDbfjgQ.webp" }
      ],
    includes: ["1 × Cushion cover"],
    crossSells: ["chunky-knit-cushion-cover", "tufted-tassel-cushion", "boucle-sphere-cushion"],
  },
  {
    id: "dwell-14",
    slug: "pet-blanket",
    name: "Pet Blanket",
    headline: "The Companion's Comfort",
    hookLine: "A soft fleece blanket sized for pets — for beds, crates, and favourite spots.",
    description:
      "A soft flannel fleece blanket thoughtfully sized and designed for pets, offering a considered touch that shows the same care for your companions comfort as your own. Crafted from a breathable, lightweight fabric, it provides a gentle layer of warmth that remains comfortable across all seasons, from cool summer evenings to brisk winter nights. Whether draped over a favorite armchair, laid across the foot of your bed, or tucked neatly into a crate, this versatile piece integrates seamlessly into your shared living spaces. The durable material is machine-washable and quick-drying, ensuring that maintaining a clean, inviting resting spot for your pet is as effortless as it is elegant.",
    price: 18.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pet-blanket-v4-YZecLyerM5tZiyUBETv8jT.webp",
    tags: ["blanket", "pet", "fleece", "soft", "washable"],
    notes: "Material: Flannel · Dimensions: Small 50x70cm, Large 100x70cm · Care: Machine washable · Features: All-season breathability",
    available: true,
    variants: [
        { id: "pet-blanket-random-color-small-5", label: "Small (50×70cm)", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pet-blanket-v4-YZecLyerM5tZiyUBETv8jT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309314129" },
        { id: "pet-blanket-random-color-large-1", label: "Large (100×70cm)", price: 24.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pet-blanket-v4-YZecLyerM5tZiyUBETv8jT.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251309346897" }
      ],
    includes: ["1 × Pet blanket"],
    crossSells: ["coral-fleece-throw-blanket", "knit-nap-blanket", "plush-round-rug"],
  },
  // ── Threshold Closer (DWELL) ──────────────────────────────────────
  {
    id: "dwell-15",
    slug: "organic-wool-dryer-ball",
    name: "Organic Wool Dryer Ball",
    headline: "The Laundry Ritual",
    hookLine: "Reusable organic wool dryer balls — soften fabric, reduce drying time, replace chemical softeners.",
    description:
      "Reusable organic wool dryer balls that shorten drying time, soften fabric naturally, and reduce static — a quiet replacement for chemical-laden dryer sheets and liquid fabric softener. Each ball is hand-felted from 100% organic New Zealand wool, dense enough to last over a thousand cycles. As they tumble, they separate layers of fabric, improving air circulation and cutting drying time by up to 25%. Add a few drops of essential oil (lavender, lemon, eucalyptus) to infuse your laundry with a gentle, natural fragrance. Usage guide: 3 balls for a small load, 5–6 for a full load. Diameter approximately 7cm each.",
    price: 3.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wool-dryer-ball-CRvuBFxNTtWb2Ukekoohwq.webp",
    tags: ["dryer-ball", "wool", "organic", "laundry", "natural", "reusable", "threshold-closer"],
    notes: "Material: 100% organic New Zealand wool · Diameter: ~7cm each · Lifespan: 1000+ cycles · Usage: 3 for small load, 5–6 for full load",
    available: true,
    shopifyHandle: "reusable-organic-wool-dryer-balls",
    variants: [
      { id: "wool-dryer-ball-1pc", label: "One Piece", price: 3.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59258095763537" },
      { id: "wool-dryer-ball-3pack", label: "3-Pack", price: 8.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59258095763537" }
    ],
    includes: ["1 × Organic wool dryer ball"],
    crossSells: ["cotton-lavender-sachet-bag", "coral-fleece-throw-blanket", "knit-nap-blanket"],
  }];

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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-gather_87a9bb21_7f1ded38_dde5a3ac.jpg",
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/collection-dwell-hero-c5XLa39hG9yv5HoqPXHuY7_050c45ee.jpg",
    products: [],
  }];

// Populate collection products (show all products, including sold-out)
COLLECTIONS.forEach((col) => {
  col.products = PRODUCTS.filter(
    (p) => p.collectionSlug === col.slug
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
    .map((ref) => PRODUCTS.find((p) => p.slug === ref || p.id === ref))
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
