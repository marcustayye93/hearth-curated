// HEARTH CURATED — Product Catalog
// 82 CJ Dropshipping products across 5 collections
// Currency: SGD. All prices end in .00

export interface Variant {
  id: string;
  label: string;
  price: number;
  available: boolean;
  shopifyVariantId?: string;
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

const FREE_SHIPPING_THRESHOLD = 60;
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/0_ncwjozsyhP5y3E8JJ8wPiH_1774801348136_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9jZXJhbWljX3NlYXNvbmluZ19wb3Rfc2V0_3c8a1a1f.png",
    tags: ["seasoning", "ceramic", "bamboo", "kitchen", "storage"],
    notes: "3 pots · Bamboo lids · Acacia tray included",
    available: true,
    crossSells: ["feast-14", "feast-2", "feast-19"],
  },
  {
    id: "feast-2",
    slug: "teak-kitchen-utensil-set",
    name: "Teak Kitchen Utensil Set",
    headline: "The Natural Kitchen",
    hookLine: "Hand-finished teak utensils — spoon, ladle, turner, spatula — that never scratch non-stick.",
    description:
      "A set of hand-finished teak wood cooking utensils — spoon, ladle, turner, and spatula — each one carved from natural teak with the density and oil content that makes this wood the material of choice for serious kitchens. Teak is naturally antimicrobial, heat-resistant, and develops a rich patina over years of use.",
    price: 38.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc.jpg",
    tags: ["utensils", "teak", "wood", "cooking", "natural"],
    notes: "Teak wood · Antimicrobial · Heat-resistant",
    available: true,
    variants: [
      { id: "feast-2-4pc", label: "4-Piece Set", price: 38.00, available: true },
      { id: "feast-2-6pc", label: "6-Piece Set", price: 48.00, available: true },
      { id: "feast-2-8pc", label: "8-Piece Set", price: 58.00, available: true },
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
      { id: "feast-3-4pc", label: "Set of 4", price: 18.00, available: true },
      { id: "feast-3-8pc", label: "Set of 8", price: 32.00, available: true },
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/3_18ThCACw68b3i0I4l5lmAN_1774801327741_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9zdG9uZXdhcmVfdHJhdmVsX3RlYV9zZXQ_35929813.png",
    tags: ["tea", "stoneware", "travel", "japanese", "portable"],
    notes: "Stoneware · Nesting design · Matte glaze",
    available: true,
    variants: [
      { id: "feast-5-blk", label: "Black", price: 42.00, available: true },
      { id: "feast-5-wht", label: "White", price: 42.00, available: true },
      { id: "feast-5-grn", label: "Sage Green", price: 42.00, available: true },
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
      { id: "feast-6-sm", label: "Side Plate (18cm)", price: 22.00, available: true },
      { id: "feast-6-md", label: "Dinner Plate (25cm)", price: 28.00, available: true },
      { id: "feast-6-lg", label: "Serving Plate (30cm)", price: 36.00, available: true },
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
  },
  {
    id: "feast-8",
    slug: "acacia-serving-bowl",
    name: "Acacia Serving Bowl",
    headline: "The Honest Vessel",
    hookLine: "A hand-finished wooden bowl for fruit, salad, or simply being beautiful.",
    description:
      "A natural wooden bowl with the kind of quiet presence that makes you want to fill it with something beautiful — or leave it empty and let the grain speak for itself. Hand-finished from a single piece of solid acacia wood.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wooden-bowl-natural-TkYrmhoM7fEfyQSxASBKHJ.webp",
    tags: ["bowl", "acacia", "wood", "serving", "fruit"],
    notes: "Solid acacia · Hand-finished · Multiple sizes",
    available: true,
    variants: [
      { id: "feast-8-s", label: "Small (12×6cm)", price: 22.00, available: true },
      { id: "feast-8-m", label: "Medium (18×7.5cm)", price: 38.00, available: true },
      { id: "feast-8-l", label: "Large (24×8cm)", price: 58.00, available: true },
    ],
    crossSells: ["feast-9", "feast-10", "feast-13"],
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
      { id: "feast-9-m", label: "Medium (25cm)", price: 68.00, available: true },
      { id: "feast-9-l", label: "Large (30cm)", price: 88.00, available: true },
    ],
    crossSells: ["feast-8", "feast-10", "feast-7"],
  },
  {
    id: "feast-10",
    slug: "rustic-log-snack-plate",
    name: "Rustic Log Snack Plate",
    headline: "The Found Object",
    hookLine: "A cross-section of natural log with bark edge — for cheese, bread, or display.",
    description:
      "A small wooden plate made from a cross-section of natural log, with the bark edge preserved — the kind of object that looks like it was found on a forest walk rather than purchased.",
    price: 28.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/7_cYtwWWqJZM8E12sp1BLDSO_1774801329804_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ydXN0aWNfbG9nX3NuYWNrX3BsYXRl_3d20143b.jpg",
    tags: ["plate", "log", "rustic", "bark", "natural"],
    notes: "Natural bark edge · Each piece unique · Food-safe finish",
    available: true,
    crossSells: ["feast-8", "feast-13", "feast-19"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/8_6VSkuECuq0kltcVErW6dUK_1774801323012_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9oYW5kbWFkZS13b29kZW4tY3Vw_997b1039.png",
    tags: ["cup", "wood", "handmade", "natural", "drinking"],
    notes: "Solid wood · Handmade · Food-safe lacquer",
    available: true,
    crossSells: ["feast-5", "feast-10", "feast-8"],
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
    id: "feast-13",
    slug: "acacia-round-dish-set",
    name: "Acacia Round Dish Set",
    headline: "The Everyday Surface",
    hookLine: "Round acacia dishes in various sizes — for cheese, bread, and the small rituals of the table.",
    description:
      "A set of round acacia wood dishes in various sizes — the kind of surfaces that make even a simple piece of cheese and a few crackers feel like an occasion.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/10_28n2xiWCKeLCCtBIrAwo7f_1774801316315_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9hY2FjaWEtcm91bmQtZGlzaC1zZXQ_36f72027.jpg",
    tags: ["dish", "acacia", "wood", "round", "serving"],
    notes: "Acacia wood · Stackable · Food-safe finish",
    available: true,
    variants: [
      { id: "feast-13-15", label: "15cm", price: 18.00, available: true },
      { id: "feast-13-20", label: "20cm", price: 22.00, available: true },
      { id: "feast-13-25", label: "25cm", price: 28.00, available: true },
    ],
    crossSells: ["feast-8", "feast-10", "feast-7"],
  },
  {
    id: "feast-14",
    slug: "acacia-salt-pepper-mill",
    name: "Acacia Salt & Pepper Mill",
    headline: "The Grind That Matters",
    hookLine: "Acacia wood mills with adjustable ceramic grinders — from fine dust to coarse crack.",
    description:
      "A salt and pepper mill in acacia wood with an adjustable ceramic grinding mechanism — the kind of kitchen tool that earns its place on the counter rather than hiding in a drawer.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/13_O8zsgqgOENs4nD9bd9DMpM_1774599066542_na1fn_L2hvbWUvdWJ1bnR1L2FjYWNpYV9zYWx0X3BlcHBlcl9taWxs_154712be_141f7ec5.webp",
    tags: ["salt", "pepper", "mill", "grinder", "acacia", "wood"],
    notes: "Acacia wood · Ceramic grinder · Adjustable coarseness",
    available: true,
    variants: [
      { id: "feast-14-base", label: "Wooden Display Base", price: 30.00, available: true },
      { id: "feast-14-6", label: "6-Inch Mill", price: 48.00, available: true },
      { id: "feast-14-8", label: "8-Inch Mill", price: 58.00, available: true },
      { id: "feast-14-10", label: "10-Inch Mill", price: 66.00, available: true },
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
    price: 128.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-snack-board-JsRznA9VJK3iezhSZ3Kvvv.webp",
    tags: ["knife-block", "acacia", "magnetic", "kitchen"],
    notes: "Solid acacia · Rare-earth magnets · Holds full set",
    available: true,
    crossSells: ["feast-21", "feast-2", "feast-14"],
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
      { id: "feast-16-a", label: "Blue Floral", price: 32.00, available: true },
      { id: "feast-16-b", label: "Earth Tone", price: 32.00, available: true },
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
      { id: "feast-17-s", label: "Small (30cm)", price: 32.00, available: true },
      { id: "feast-17-l", label: "Large (40cm)", price: 38.00, available: true },
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
    price: 42.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-snack-board-JsRznA9VJK3iezhSZ3Kvvv.webp",
    tags: ["tray", "acacia", "wood", "serving"],
    notes: "Solid acacia · Food-safe finish · Raised edges",
    available: true,
    crossSells: ["feast-7", "feast-17", "feast-13"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/11_QotsYqsaHk9m1nEq9i6u5C_1774801322085_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV93b29kZW5fY29hc3Rlcl9zZXQ_2c2a3e9d.png",
    tags: ["coaster", "wood", "japanese", "minimalist", "set"],
    notes: "Set of 6 · Wooden holder included · Bevelled edges",
    available: true,
    crossSells: ["feast-11", "feast-10", "feast-5"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/12_cvC5LQj6Je7MFXqjtKtqqx_1774801329388_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9lYm9ueS1jdXR0aW5nLWJvYXJk_3b6a1a0e.png",
    tags: ["cutting-board", "ebony", "wood", "kitchen"],
    notes: "Ebony wood · Naturally antimicrobial · Dense grain",
    available: true,
    variants: [
      { id: "feast-21-s", label: "Small (25×18cm)", price: 48.00, available: true },
      { id: "feast-21-m", label: "Medium (35×25cm)", price: 68.00, available: true },
      { id: "feast-21-l", label: "Large (45×30cm)", price: 88.00, available: true },
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/14_o6LU7SQOAkKb1bj3UB7LVN_1774801330905_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9jZXJhbWljX2J1dHRlcl9kaXNo_b6f2c0e1.png",
    tags: ["butter", "dish", "ceramic", "bamboo", "kitchen"],
    notes: "Ceramic · Bamboo lid · Room temperature storage",
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/15_vrOkaxSdT80FqKNMlRWd4G_1774801330625_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9oYW5kX2NyYW5rX3Bhc3RhX21ha2Vy_a7d3b0f2.png",
    tags: ["pasta", "maker", "hand-crank", "kitchen", "cooking"],
    notes: "Chrome-plated · Adjustable thickness · Table clamp included",
    available: true,
    crossSells: ["feast-2", "feast-24", "feast-6"],
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
      { id: "feast-26-wht", label: "White", price: 32.00, available: true },
      { id: "feast-26-blk", label: "Matte Black", price: 32.00, available: true },
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
      { id: "feast-29-brn", label: "Earth Brown", price: 28.00, available: true },
      { id: "feast-29-grn", label: "Moss Green", price: 28.00, available: true },
      { id: "feast-29-blu", label: "Ocean Blue", price: 28.00, available: true },
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-5_a86e9fc8_ab47d3d0.webp",
    tags: ["mug", "stoneware", "japanese", "thick-walled"],
    notes: "Stoneware · 400ml · Keeps drinks warm",
    available: true,
    variants: [
      { id: "feast-30-wht", label: "Cream White", price: 26.00, available: true },
      { id: "feast-30-blk", label: "Charcoal Black", price: 26.00, available: true },
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
      { id: "feast-31-wht", label: "Matte White", price: 22.00, available: true },
      { id: "feast-31-gry", label: "Stone Grey", price: 22.00, available: true },
      { id: "feast-31-blk", label: "Matte Black", price: 22.00, available: true },
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/16_WTtSIJx2DZEx5SRyntRoZ8_1774801325182_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9sZWRfYXJvbWFfZGlmZnVzZXI_c8e4d1f3.png",
    tags: ["diffuser", "aroma", "led", "ultrasonic", "home-fragrance"],
    notes: "Ultrasonic · Warm LED · 300ml capacity · Auto shut-off",
    available: true,
    crossSells: ["adorn-9", "adorn-7", "bloom-1"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/17_8DmlPYi1aAbaO7EaMQZ0LI_1774801318973_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ub3JkaWMtZGVjb3JhdGl2ZS1maWd1cmluZQ_d9f5e2g4.png",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist"],
    notes: "Matte resin · Multiple poses available",
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/18_07HJGbmQvY5o3NvP86DrTI_1774801321961_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9zY3VscHR1cmFsLWdsYXNzLXZhc2U_e0g6f3h5.png",
    tags: ["vase", "glass", "sculptural", "hand-blown", "decorative"],
    notes: "Hand-blown glass · Thick base · Multiple colours",
    available: true,
    variants: [
      { id: "adorn-3-clr", label: "Clear", price: 58.00, available: true },
      { id: "adorn-3-amb", label: "Amber", price: 58.00, available: true },
      { id: "adorn-3-smk", label: "Smoke", price: 58.00, available: true },
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
      { id: "adorn-4-s", label: "Small (40×60cm)", price: 38.00, available: true },
      { id: "adorn-4-l", label: "Large (60×100cm)", price: 48.00, available: true },
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
      { id: "adorn-5-wht", label: "White", price: 18.00, available: true },
      { id: "adorn-5-snd", label: "Sand", price: 18.00, available: true },
      { id: "adorn-5-sge", label: "Sage", price: 18.00, available: true },
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
    crossSells: ["adorn-5", "adorn-3", "bloom-4"],
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
    price: 58.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-2_e58fdd57_f59ad19d.webp",
    tags: ["diffuser", "fireplace", "ceramic", "led", "aroma"],
    notes: "Ceramic · LED flame effect · Essential oil compatible",
    available: true,
    crossSells: ["adorn-1", "adorn-7", "glow-5"],
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
  },
  {
    id: "bloom-3",
    slug: "pampas-grass-bouquet",
    name: "Pampas Grass Bouquet",
    headline: "The Soft Cloud",
    hookLine: "Fluffy pampas grass stems — the effortless centrepiece that lasts forever.",
    description:
      "A bouquet of fluffy pampas grass stems in natural cream and blush tones — the kind of arrangement that looks effortlessly beautiful in any vase and never needs watering. The stems are treated to prevent shedding and maintain their soft, cloud-like appearance.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-4_755176a6_3b16a865.webp",
    tags: ["pampas", "grass", "dried", "bouquet", "natural"],
    notes: "Treated to prevent shedding · Natural tones · 60-80cm stems",
    available: true,
    variants: [
      { id: "bloom-3-s", label: "Small (5 stems)", price: 22.00, available: true },
      { id: "bloom-3-l", label: "Large (10 stems)", price: 32.00, available: true },
    ],
    crossSells: ["bloom-4", "bloom-5", "adorn-6"],
  },
  {
    id: "bloom-4",
    slug: "faux-reed-pampas-bundle",
    name: "Faux Reed & Pampas Bundle",
    headline: "The Everlasting Arrangement",
    hookLine: "A mixed bundle of faux reeds and pampas — texture and height without maintenance.",
    description:
      "A mixed bundle of faux reeds and pampas grass — combining different textures and heights for a natural-looking arrangement that never fades, never sheds, and never needs water. The stems are made from high-quality synthetic materials that are nearly indistinguishable from the real thing.",
    price: 38.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-reed-pampas-bundle_305212ec.png",
    tags: ["faux", "reed", "pampas", "bundle", "everlasting"],
    notes: "High-quality faux · Mixed textures · 70-90cm stems",
    available: true,
    crossSells: ["bloom-3", "bloom-8", "adorn-6"],
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
      { id: "bloom-6-1", label: "Single Stem", price: 12.00, available: true },
      { id: "bloom-6-3", label: "Bundle of 3", price: 18.00, available: true },
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
    crossSells: ["bloom-3", "bloom-4", "adorn-6"],
  },
  {
    id: "bloom-9",
    slug: "magnetic-levitating-planter",
    name: "Magnetic Levitating Planter",
    headline: "The Floating Garden",
    hookLine: "A planter that floats and rotates in mid-air — science meets nature.",
    description:
      "A magnetic levitating planter that suspends a small plant pot in mid-air, rotating slowly and silently above its base. The electromagnetic system is hidden inside a minimalist wooden base, and the floating pot can hold small succulents, air plants, or herbs. It is part science experiment, part living sculpture.",
    price: 78.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter_32662aeb.jpg",
    tags: ["planter", "magnetic", "levitating", "floating", "modern"],
    notes: "Electromagnetic base · Rotating · Includes pot · USB powered",
    available: true,
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
      { id: "bloom-14-m", label: "Medium (90cm)", price: 88.00, available: true },
      { id: "bloom-14-l", label: "Large (120cm)", price: 128.00, available: true },
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
    hookLine: "A vintage-style Edison bulb on a wooden base — warm amber glow for bedside or desk.",
    description:
      "A vintage-style Edison bulb lamp on a solid wooden base — the kind of light that makes a room feel like a library in a country house. The exposed filament produces a warm amber glow that is gentle on the eyes and creates a cosy atmosphere.",
    price: 48.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-vintage-night-lamp_6fa91aea.jpg",
    tags: ["lamp", "edison", "vintage", "night-light", "warm"],
    notes: "Wooden base · Edison bulb included · Dimmer switch",
    available: true,
    crossSells: ["glow-5", "glow-12", "glow-13"],
  },
  {
    id: "glow-2",
    slug: "rice-paper-table-lamp",
    name: "Rice Paper Table Lamp",
    headline: "The Soft Glow",
    hookLine: "A Japanese-inspired rice paper lamp — diffused light that softens any room.",
    description:
      "A Japanese-inspired table lamp with a rice paper shade that diffuses light into a soft, even glow. The bamboo frame gives it structure while maintaining the organic, handmade quality that makes rice paper lamps so appealing.",
    price: 58.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/rice-paper-table-lamp_ccad89a4.jpg",
    tags: ["lamp", "rice-paper", "japanese", "table", "diffused"],
    notes: "Rice paper shade · Bamboo frame · E27 bulb compatible",
    available: true,
    crossSells: ["glow-5", "glow-8", "glow-9"],
  },
  {
    id: "glow-3",
    slug: "wax-melt-aromatherapy-lamp",
    name: "Wax Melt Aromatherapy Lamp",
    headline: "The Scented Light",
    hookLine: "A ceramic lamp that melts wax melts from above — warm light and fragrance in one.",
    description:
      "A ceramic aromatherapy lamp that melts scented wax from above using a halogen bulb — combining warm, ambient light with home fragrance in a single beautiful object. The top-down heating method releases fragrance more evenly than traditional candle warmers.",
    price: 58.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-aromatherapy-lamp_a6d3abc6.png",
    tags: ["lamp", "wax-melt", "aromatherapy", "ceramic", "fragrance"],
    notes: "Ceramic · Halogen bulb · Dimmer control · Wax dish included",
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
    price: 38.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch_9241f670.jpg",
    tags: ["solar", "garden", "torch", "outdoor", "flame-effect"],
    notes: "Solar powered · Flickering flame effect · 8-10hr runtime",
    available: true,
    variants: [
      { id: "glow-4-2pk", label: "Set of 2", price: 38.00, available: true },
      { id: "glow-4-4pk", label: "Set of 4", price: 68.00, available: true },
    ],
    crossSells: ["glow-6", "bloom-7", "bloom-9"],
  },
  {
    id: "glow-5",
    slug: "japanese-bedside-lamp",
    name: "Japanese Bedside Lamp",
    headline: "The Quiet Light",
    hookLine: "A minimalist wooden lamp with fabric shade — warm, quiet light for the bedside.",
    description:
      "A minimalist bedside lamp with a solid wood base and a fabric shade — the kind of light that makes a bedroom feel calm and considered. The warm-toned shade filters the light into a soft glow that is perfect for reading or winding down.",
    price: 58.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp_1fe34f7a.png",
    tags: ["lamp", "bedside", "japanese", "wood", "fabric"],
    notes: "Solid wood base · Fabric shade · Touch dimmer",
    available: true,
    crossSells: ["glow-1", "glow-12", "glow-2"],
  },
  {
    id: "glow-6",
    slug: "solar-pathway-light",
    name: "Solar Pathway Light",
    headline: "The Garden Guide",
    hookLine: "Solar-powered pathway lights in warm white — line a path, edge a border, light a garden.",
    description:
      "Solar-powered pathway lights that provide a warm white glow along garden paths, borders, and driveways. The stainless steel and glass construction is weather-resistant, and the solar panel provides reliable illumination from dusk to dawn.",
    price: 32.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-pathway-light_b9935389.png",
    tags: ["solar", "pathway", "light", "garden", "outdoor"],
    notes: "Solar powered · Stainless steel · Warm white · Set of 4",
    available: true,
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
    price: 22.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-7_a6d7867e_421146b9.webp",
    tags: ["led", "motion-sensor", "cabinet", "rechargeable", "practical"],
    notes: "Rechargeable USB-C · Motion sensor · Warm white · Magnetic mount",
    available: true,
    variants: [
      { id: "glow-7-20", label: "20cm Strip", price: 18.00, available: true },
      { id: "glow-7-40", label: "40cm Strip", price: 22.00, available: true },
      { id: "glow-7-60", label: "60cm Strip", price: 28.00, available: true },
    ],
    crossSells: ["glow-13", "glow-1", "feast-12"],
  },
  {
    id: "glow-8",
    slug: "round-linen-table-lamp",
    name: "Round Linen Table Lamp",
    headline: "The Soft Sphere",
    hookLine: "A spherical linen shade on a ceramic base — soft, diffused light for any room.",
    description:
      "A table lamp with a round linen shade on a ceramic base — the sphere shape creates an even, diffused glow that softens any room. The natural linen texture adds warmth and visual interest, while the ceramic base provides stability and a touch of elegance.",
    price: 68.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp_03ddd497.jpg",
    tags: ["lamp", "linen", "round", "table", "ceramic"],
    notes: "Linen shade · Ceramic base · E27 bulb compatible",
    available: true,
    crossSells: ["glow-9", "glow-2", "glow-5"],
  },
  {
    id: "glow-9",
    slug: "square-linen-table-lamp",
    name: "Square Linen Table Lamp",
    headline: "The Architectural Light",
    hookLine: "A square linen shade on a wooden base — structured light with soft texture.",
    description:
      "A table lamp with a square linen shade on a solid wooden base — the geometric shape creates a more structured, architectural light than its round counterpart. The natural linen diffuses the light beautifully while the wooden base adds warmth.",
    price: 68.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp_90a4a291.jpg",
    tags: ["lamp", "linen", "square", "table", "wood"],
    notes: "Linen shade · Wooden base · E27 bulb compatible",
    available: true,
    crossSells: ["glow-8", "glow-2", "glow-5"],
  },
  {
    id: "glow-10",
    slug: "woven-bamboo-table-lamp",
    name: "Woven Bamboo Table Lamp",
    headline: "The Woven Light",
    hookLine: "A hand-woven bamboo shade that casts intricate shadow patterns on walls and ceiling.",
    description:
      "A table lamp with a hand-woven bamboo shade that casts beautiful, intricate shadow patterns on surrounding walls and ceiling. The natural bamboo has a warm golden tone, and the weave pattern creates a play of light and shadow that transforms any room.",
    price: 58.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-1_4c56282f_81e8dad6.webp",
    tags: ["lamp", "bamboo", "woven", "table", "shadow-pattern"],
    notes: "Hand-woven bamboo · Shadow patterns · E27 bulb compatible",
    available: true,
    crossSells: ["glow-11", "glow-2", "glow-8"],
  },
  {
    id: "glow-11",
    slug: "rattan-floor-lamp",
    name: "Rattan Floor Lamp",
    headline: "The Standing Light",
    hookLine: "A tall rattan floor lamp — warm, textured light that fills a room.",
    description:
      "A tall floor lamp with a hand-woven rattan shade — the kind of light that fills a room with warm, textured illumination. The natural rattan creates a beautiful pattern of light and shadow, and the sturdy metal base keeps it stable.",
    price: 128.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/rattan-floor-lamp_789cc7f0.png",
    tags: ["lamp", "rattan", "floor", "tall", "woven"],
    notes: "Hand-woven rattan · Metal base · 150cm tall · E27 bulb",
    available: true,
    crossSells: ["glow-10", "glow-8", "glow-2"],
  },
  {
    id: "glow-12",
    slug: "ceramic-bedside-lamp",
    name: "Ceramic Bedside Lamp",
    headline: "The Glazed Glow",
    hookLine: "A ceramic lamp with reactive glaze — each one unique, warm light for the bedside.",
    description:
      "A ceramic bedside lamp with a reactive glaze that creates unique colour variations on every piece — no two are exactly alike. The linen shade softens the light into a warm glow, and the ceramic base has a satisfying weight that keeps it stable.",
    price: 68.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp_4d19a161.png",
    tags: ["lamp", "ceramic", "bedside", "reactive-glaze", "unique"],
    notes: "Reactive glaze · Linen shade · Each piece unique",
    available: true,
    variants: [
      { id: "glow-12-snd", label: "Sand", price: 68.00, available: true },
      { id: "glow-12-sge", label: "Sage", price: 68.00, available: true },
      { id: "glow-12-blu", label: "Ocean Blue", price: 68.00, available: true },
    ],
    crossSells: ["glow-5", "glow-1", "glow-8"],
  },
  {
    id: "glow-13",
    slug: "mushroom-night-light",
    name: "Mushroom Night Light",
    headline: "The Forest Glow",
    hookLine: "A whimsical mushroom-shaped night light — soft LED glow for hallways and children's rooms.",
    description:
      "A whimsical mushroom-shaped night light with a soft LED glow — the kind of object that makes a hallway, a bathroom, or a child's room feel magical. The silicone cap is soft to the touch and the warm light is gentle enough to sleep by.",
    price: 22.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-night-light_bd345808.png",
    tags: ["night-light", "mushroom", "led", "whimsical", "soft"],
    notes: "Silicone · USB rechargeable · Touch on/off · 3 brightness levels",
    available: true,
    crossSells: ["glow-1", "glow-7", "bloom-9"],
  },
  {
    id: "glow-14",
    slug: "artisan-table-lamp",
    name: "Artisan Table Lamp",
    headline: "The Handmade Light",
    hookLine: "A handmade ceramic and linen lamp — artisan quality, warm ambient light.",
    description:
      "A handmade table lamp with a textured ceramic base and a natural linen shade — the kind of light that looks like it was made by a potter in a small studio rather than produced in a factory. The textured surface catches light in interesting ways, and the linen shade creates a warm, even glow.",
    price: 78.00,
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
      { id: "dwell-1-s", label: "Small (120×170cm)", price: 68.00, available: true },
      { id: "dwell-1-m", label: "Medium (160×230cm)", price: 88.00, available: true },
      { id: "dwell-1-l", label: "Large (200×290cm)", price: 128.00, available: true },
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
      { id: "dwell-2-s", label: "Small (80×120cm)", price: 48.00, available: true },
      { id: "dwell-2-m", label: "Medium (120×170cm)", price: 78.00, available: true },
      { id: "dwell-2-l", label: "Large (160×230cm)", price: 118.00, available: true },
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
      { id: "dwell-4-nat", label: "Natural", price: 32.00, available: true },
      { id: "dwell-4-gry", label: "Stone Grey", price: 32.00, available: true },
      { id: "dwell-4-blsh", label: "Blush", price: 32.00, available: true },
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
      { id: "dwell-5-s", label: "Small (140×180cm)", price: 48.00, available: true },
      { id: "dwell-5-l", label: "Large (140×240cm)", price: 58.00, available: true },
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
      { id: "dwell-7-crm", label: "Cream", price: 38.00, available: true },
      { id: "dwell-7-gry", label: "Grey", price: 38.00, available: true },
      { id: "dwell-7-sge", label: "Sage", price: 38.00, available: true },
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
      { id: "dwell-8-crm", label: "Cream", price: 48.00, available: true },
      { id: "dwell-8-gry", label: "Charcoal", price: 48.00, available: true },
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
      { id: "dwell-9-crm", label: "Cream", price: 28.00, available: true },
      { id: "dwell-9-gry", label: "Grey", price: 28.00, available: true },
      { id: "dwell-9-brn", label: "Camel", price: 28.00, available: true },
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
      { id: "dwell-10-crm", label: "Cream", price: 32.00, available: true },
      { id: "dwell-10-blsh", label: "Blush", price: 32.00, available: true },
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
      { id: "dwell-12-80", label: "80cm", price: 38.00, available: true },
      { id: "dwell-12-100", label: "100cm", price: 48.00, available: true },
      { id: "dwell-12-120", label: "120cm", price: 58.00, available: true },
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
      { id: "dwell-13-crm", label: "Cream", price: 28.00, available: true },
      { id: "dwell-13-sge", label: "Sage", price: 28.00, available: true },
      { id: "dwell-13-rst", label: "Rust", price: 28.00, available: true },
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket_597daf8f.jpg",
    tags: ["blanket", "pet", "fleece", "soft", "washable"],
    notes: "Fleece · 80×120cm · Machine washable · Pet-hair resistant",
    available: true,
    variants: [
      { id: "dwell-14-s", label: "Small (60×80cm)", price: 18.00, available: true },
      { id: "dwell-14-m", label: "Medium (80×120cm)", price: 22.00, available: true },
      { id: "dwell-14-l", label: "Large (100×150cm)", price: 28.00, available: true },
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
