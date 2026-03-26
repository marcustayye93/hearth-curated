// HEARTH CURATED — Product & Collection Data
// CRO-audited: editorial names, variant-level pricing, cross-sell mappings
// Currency: SGD. All prices end in .00

export interface Variant {
  id: string;
  label: string;
  price: number;
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  price: number; // base / default variant price
  collection: string;
  collectionSlug: string;
  image: string;
  tags: string[];
  notes?: string;
  variants?: Variant[];
  crossSells?: string[]; // product IDs for "You may also like"
  available: boolean; // false = all variants unavailable in Shopify
  hookLine?: string; // one-line descriptor for product cards
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: Product[];
}

const FREE_SHIPPING_THRESHOLD = 75;
export { FREE_SHIPPING_THRESHOLD };

export const PRODUCTS: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // GATHER — The Art of the Table
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gather-1",
    slug: "moroccan-mandorla-coaster-set",
    name: "Moroccan Mandorla Coaster Set",
    headline: "The Quiet Detail",
    hookLine: "Eight wooden coasters with Moroccan mandorla patterns.",
    description:
      "A set of eight wooden coasters printed with Moroccan mandorla patterns — the kind of small, considered detail that quietly transforms a coffee table. Each coaster is 10cm in diameter and just 3mm thin, light enough to stack neatly and substantial enough to protect any surface. The natural wood backing adds warmth to the geometric patterns.",
    price: 24.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["coasters", "moroccan", "wood", "tabletop"],
    notes: "Set of 8 · 10cm diameter · Natural wood backing",
    available: true,
    crossSells: ["gather-3", "gather-7", "adorn-8"],
  },
  {
    id: "gather-2",
    slug: "acacia-serving-bowl",
    name: "Acacia Serving Bowl",
    headline: "Carved from a Single Piece",
    hookLine: "Japanese-inspired acacia bowl — no two are identical.",
    description:
      "Carved from a single piece of acacia wood, this bowl carries the quiet authority of natural grain — no two are identical. The Japanese-inspired silhouette is generous enough for a family salad yet refined enough to display on an open shelf. Acacia is naturally antibacterial and remarkably durable, developing a richer patina with each use.",
    price: 36.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80",
    tags: ["bowl", "acacia", "wood", "japanese"],
    notes: "Solid acacia · Hand-wash · Develops patina",
    available: true,
    variants: [
      { id: "gather-2-s", label: "Small (12×6cm)", price: 36.0, available: true },
      { id: "gather-2-m", label: "Medium (14×7.5cm)", price: 42.0, available: true },
      { id: "gather-2-std", label: "Standard (16×7.5cm)", price: 48.0, available: true },
      { id: "gather-2-l", label: "Large (18×7.5cm)", price: 56.0, available: true },
      { id: "gather-2-xl", label: "Serving (20×7.5cm)", price: 62.0, available: true },
      { id: "gather-2-xxl", label: "Statement (24×8cm)", price: 78.0, available: true },
    ],
    crossSells: ["gather-3", "nourish-9", "gather-7"],
  },
  {
    id: "gather-3",
    slug: "wooden-serving-tray",
    name: "Wooden Serving Tray",
    headline: "The Centrepiece of the Ritual",
    hookLine: "Solid wood tray with integrated handles for morning tea or evening gatherings.",
    description:
      "A generous serving tray with integrated handles, crafted from solid wood with a natural grain finish. Whether carrying morning tea to the garden or presenting cheese and fruit for an evening gathering, this tray becomes the quiet centrepiece of the ritual.",
    price: 52.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
    tags: ["tray", "wood", "serving", "hosting"],
    notes: "Natural grain · Integrated handles · 3 sizes",
    available: true,
    variants: [
      { id: "gather-3-s", label: "Small (33×22cm)", price: 52.0, available: true },
      { id: "gather-3-m", label: "Medium (40×28cm)", price: 62.0, available: true },
      { id: "gather-3-l", label: "Large (43×33cm)", price: 72.0, available: true },
    ],
    crossSells: ["gather-1", "gather-2", "gather-10"],
  },
  {
    id: "gather-4",
    slug: "nordic-espresso-cup-saucer",
    name: "Nordic Espresso Cup & Saucer",
    headline: "Studio Pottery for Every Morning",
    hookLine: "Ceramic cup and saucer with the character of Scandinavian studio pottery.",
    description:
      "A ceramic espresso cup and saucer set with the understated character of Scandinavian studio pottery. The slightly irregular glaze and organic form give each piece the feeling of being handmade. The 220ml capacity is sized for a proper espresso or a small cortado.",
    price: 36.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    tags: ["cup", "saucer", "ceramic", "espresso", "nordic"],
    notes: "220ml · Handmade character · Ceramic",
    available: true,
    variants: [
      { id: "gather-4-a", label: "Style A", price: 36.0, available: true },
      { id: "gather-4-b", label: "Style B", price: 36.0, available: true },
    ],
    crossSells: ["gather-5", "gather-6", "gather-8"],
  },
  {
    id: "gather-5",
    slug: "japanese-stoneware-mug",
    name: "Japanese Stoneware Mug",
    headline: "The Satisfying Heft",
    hookLine: "High-fired stoneware with reactive glaze — in grey or apricot.",
    description:
      "Fired at high temperature in the tradition of Japanese stoneware, this mug has the satisfying heft and tactile warmth that mass-produced ceramics cannot replicate. The reactive glaze creates subtle colour variations that deepen with use. Microwave and oven safe.",
    price: 42.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["mug", "stoneware", "japanese", "coffee"],
    notes: "Reactive glaze · Microwave safe · 300ml or 600ml",
    available: true,
    variants: [
      { id: "gather-5-gs", label: "Grey / Small (300ml)", price: 42.0, available: true },
      { id: "gather-5-gl", label: "Grey / Large (600ml)", price: 48.0, available: true },
      { id: "gather-5-as", label: "Apricot / Small (300ml)", price: 42.0, available: true },
      { id: "gather-5-al", label: "Apricot / Large (600ml)", price: 48.0, available: true },
    ],
    crossSells: ["gather-4", "gather-8", "gather-9"],
  },
  {
    id: "gather-6",
    slug: "vintage-japanese-ceramic-mug",
    name: "Vintage Japanese Ceramic Mug",
    headline: "An Intentional Tuesday Morning",
    hookLine: "A 200ml ceramic mug with vintage Japanese character.",
    description:
      "A 200ml ceramic mug with a vintage Japanese aesthetic — the kind of vessel that makes even an ordinary Tuesday morning feel intentional. The compact size is designed for concentrated coffee or a small matcha.",
    price: 38.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tags: ["mug", "ceramic", "japanese", "vintage"],
    notes: "200ml · Vintage glaze · Compact",
    available: true,
    crossSells: ["gather-5", "gather-4", "gather-8"],
  },
  {
    id: "gather-7",
    slug: "hand-painted-ceramic-oil-cruet",
    name: "Hand-Painted Ceramic Oil Cruet",
    headline: "A Counter-Top Heirloom",
    hookLine: "Mediterranean-inspired motifs with drip-free pouring.",
    description:
      "Each oil cruet is hand-painted with Mediterranean-inspired motifs — olive branches, lemons, and wildflowers — making it as much a display piece as a kitchen tool. The ceramic body keeps oil cool and protected from light, while the narrow spout provides precise, drip-free pouring.",
    price: 52.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["oil", "cruet", "ceramic", "hand-painted"],
    notes: "Hand-painted · Drip-free spout · 3 colours",
    available: true,
    variants: [
      { id: "gather-7-bk", label: "Black", price: 52.0, available: true },
      { id: "gather-7-gn", label: "Green", price: 52.0, available: true },
      { id: "gather-7-rd", label: "Red", price: 52.0, available: true },
    ],
    crossSells: ["gather-2", "nourish-9", "gather-3"],
  },
  {
    id: "gather-8",
    slug: "vacuum-sealed-glass-canister",
    name: "Vacuum-Sealed Glass Canister",
    headline: "Freshness, Engineered",
    hookLine: "Pump-seal canister that keeps coffee and tea at peak freshness.",
    description:
      "A borosilicate glass canister with a vacuum-seal mechanism that extracts air with a simple pump, keeping coffee beans, loose-leaf tea, or whole spices at peak freshness for weeks longer than conventional storage.",
    price: 28.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
    tags: ["canister", "glass", "vacuum", "storage"],
    notes: "Borosilicate glass · Vacuum pump · 4 sizes",
    available: true,
    variants: [
      { id: "gather-8-500", label: "500ml", price: 28.0, available: true },
      { id: "gather-8-900", label: "900ml", price: 34.0, available: true },
      { id: "gather-8-1200", label: "1200ml", price: 38.0, available: true },
      { id: "gather-8-1800", label: "1800ml", price: 44.0, available: true },
    ],
    crossSells: ["gather-9", "gather-5", "nourish-1"],
  },
  {
    id: "gather-9",
    slug: "borosilicate-vacuum-canister",
    name: "Borosilicate Vacuum Canister",
    headline: "Laboratory Precision, Kitchen Beauty",
    hookLine: "Lab-grade glass meets kitchen-counter aesthetics.",
    description:
      "Laboratory-grade borosilicate glass meets kitchen-counter aesthetics in this vacuum-sealed canister. A built-in pump removes air to create an airtight seal that preserves the volatile oils in coffee, the fragrance of loose tea, and the crunch of raw sugar.",
    price: 32.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["canister", "borosilicate", "vacuum", "storage"],
    notes: "Lab-grade glass · Airtight pump · 4 sizes",
    available: true,
    variants: [
      { id: "gather-9-500", label: "500ml", price: 32.0, available: true },
      { id: "gather-9-900", label: "900ml", price: 38.0, available: true },
      { id: "gather-9-1200", label: "1200ml", price: 42.0, available: true },
      { id: "gather-9-1800", label: "1800ml", price: 48.0, available: true },
    ],
    crossSells: ["gather-8", "gather-5", "nourish-1"],
  },
  {
    id: "gather-10",
    slug: "waffle-weave-cotton-dish-cloths",
    name: "Waffle Weave Cotton Dish Cloths",
    headline: "The Fabric of Daily Ritual",
    hookLine: "Pure cotton, waffle-woven — softer with every wash.",
    description:
      "Pure cotton, waffle-woven for superior absorption and a texture that improves with every wash. The waffle weave dries faster than flat cotton, resists odour, and develops a soft, lived-in hand over time. Set of three in a single tone.",
    price: 28.0,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["cloths", "cotton", "waffle", "kitchen"],
    notes: "100% cotton · Set of 3 · Machine washable",
    available: true,
    variants: [
      { id: "gather-10-grey", label: "Grey", price: 28.0, available: true },
      { id: "gather-10-green", label: "Green", price: 28.0, available: true },
      { id: "gather-10-pink", label: "Blush", price: 28.0, available: true },
    ],
    crossSells: ["nourish-9", "nourish-7", "gather-7"],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ADORN — Objects of Intention
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "adorn-1",
    slug: "woven-bamboo-table-lamp",
    name: "Woven Bamboo Table Lamp",
    headline: "Dappled Light, Handwoven",
    hookLine: "Hand-woven bamboo lamp casting warm, dappled light.",
    description:
      "Hand-woven from natural bamboo, this table lamp casts a warm, dappled light through its lattice shade — the kind of ambient glow that transforms a bedside table or reading nook into a sanctuary. Each lamp is slightly different, a consequence of the handcraft.",
    price: 78.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["lamp", "bamboo", "handwoven", "lighting"],
    notes: "Natural bamboo · Hand-woven · 2 shapes",
    available: true,
    variants: [
      { id: "adorn-1-lantern-eu", label: "Lantern — EU Plug", price: 78.0, available: true },
      { id: "adorn-1-lantern-us", label: "Lantern — US Plug", price: 78.0, available: true },
      { id: "adorn-1-column-eu", label: "Column — EU Plug", price: 82.0, available: true },
      { id: "adorn-1-column-us", label: "Column — US Plug", price: 82.0, available: true },
    ],
    crossSells: ["adorn-2", "adorn-8", "adorn-10"],
  },
  {
    id: "adorn-2",
    slug: "fireplace-aroma-diffuser",
    name: "Fireplace Aroma Diffuser",
    headline: "The Comfort of a Hearth",
    hookLine: "Ceramic diffuser with flickering LED glow and essential oil dispersion.",
    description:
      "A ceramic diffuser designed to evoke the quiet comfort of a fireplace — the warm LED glow flickers behind a miniature hearth facade while essential oils disperse into the room. Waterless ultrasonic technology means no filters, no residue, and automatic shut-off.",
    price: 62.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["diffuser", "aroma", "fireplace", "ceramic"],
    notes: "Waterless ultrasonic · Auto shut-off · 2 colours",
    available: true,
    variants: [
      { id: "adorn-2-bk", label: "Black", price: 62.0, available: true },
      { id: "adorn-2-wh", label: "White", price: 62.0, available: true },
    ],
    crossSells: ["adorn-9", "adorn-8", "adorn-1"],
  },
  {
    id: "adorn-3",
    slug: "silence-figurine",
    name: "Silence Figurine",
    headline: "The Art of Stillness",
    hookLine: "Resin sculpture in the universal gesture of silence.",
    description:
      "A resin sculpture of a figure in quiet contemplation — hand raised to lips in the universal gesture of silence. The matte finish and clean lines give it the presence of a gallery piece at a fraction of the scale.",
    price: 22.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["sculpture", "resin", "figurine", "decor"],
    notes: "Matte resin · Multiple finishes · Singles & trio sets",
    available: false,
    variants: [
      { id: "adorn-3-gold", label: "Gold — Single", price: 22.0, available: false },
      { id: "adorn-3-silver", label: "Silver — Single", price: 22.0, available: false },
      { id: "adorn-3-sand", label: "Sandstone — Single", price: 22.0, available: false },
      { id: "adorn-3-gold-set", label: "Gold — Trio Set", price: 56.0, available: false },
      { id: "adorn-3-silver-set", label: "Silver — Trio Set", price: 56.0, available: false },
      { id: "adorn-3-sand-set", label: "Sandstone — Trio Set", price: 56.0, available: false },
      { id: "adorn-3-black-set", label: "Black — Trio Set", price: 56.0, available: false },
    ],
    crossSells: ["adorn-4", "adorn-5", "adorn-8"],
  },
  {
    id: "adorn-4",
    slug: "thinker-sculpture",
    name: "Thinker Sculpture",
    headline: "Lost in Thought",
    hookLine: "Minimalist sandstone resin interpretation of Rodin's Thinker.",
    description:
      "A minimalist interpretation of Rodin's Thinker, rendered in resin with a sandstone finish that gives it the tactile quality of carved stone. The Nordic-inspired simplification strips the figure to its essential gesture.",
    price: 52.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["sculpture", "thinker", "resin", "sandstone"],
    notes: "Sandstone resin · 3 sizes",
    available: true,
    variants: [
      { id: "adorn-4-s", label: "Small", price: 52.0, available: true },
      { id: "adorn-4-m", label: "Medium", price: 58.0, available: true },
      { id: "adorn-4-l", label: "Large", price: 64.0, available: true },
    ],
    crossSells: ["adorn-3", "adorn-5", "adorn-8"],
  },
  {
    id: "adorn-5",
    slug: "moroccan-decorative-wall-plate",
    name: "Moroccan Decorative Wall Plate",
    headline: "A Painted Mural in Metal",
    hookLine: "Aluminium wall plate with hand-detailed Moroccan patterns.",
    description:
      "An aluminium wall plate with hand-detailed Moroccan floral and geometric patterns. The flat profile sits flush against the wall, creating the effect of a painted mural with the permanence of metal.",
    price: 22.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["plate", "moroccan", "wall-art", "aluminium"],
    notes: "Aluminium · 20×20cm · Flush mount",
    available: true,
    crossSells: ["adorn-4", "adorn-3", "gather-1"],
  },
  {
    id: "adorn-6",
    slug: "rechargeable-ambient-table-lamp",
    name: "Rechargeable Ambient Table Lamp",
    headline: "Cordless, Considered Light",
    hookLine: "Touch-sensitive cordless lamp with three brightness levels.",
    description:
      "A cordless table lamp with a rechargeable battery and touch-sensitive dimming — three brightness levels that transition from focused reading light to a soft ambient glow. No cords, no clutter.",
    price: 38.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["lamp", "rechargeable", "cordless", "ambient"],
    notes: "USB-C · Touch dimming · 3 levels",
    available: true,
    crossSells: ["adorn-1", "adorn-2", "adorn-8"],
  },
  {
    id: "adorn-7",
    slug: "motion-sensing-cabinet-light",
    name: "Motion-Sensing Cabinet Light",
    headline: "Illumination on Arrival",
    hookLine: "Slim rechargeable light bar with built-in motion sensor.",
    description:
      "A slim, rechargeable light bar with a built-in motion sensor that illuminates the moment you open a wardrobe, kitchen cabinet, or pantry door. USB-C charging, magnetic mount, no tools required.",
    price: 18.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["light", "cabinet", "motion-sensor", "rechargeable"],
    notes: "USB-C · Magnetic mount · 5 lengths",
    available: true,
    variants: [
      { id: "adorn-7-s10", label: "Silver / 10cm", price: 18.0, available: true },
      { id: "adorn-7-s20", label: "Silver / 20cm", price: 22.0, available: true },
      { id: "adorn-7-s30", label: "Silver / 30cm", price: 26.0, available: true },
      { id: "adorn-7-s40", label: "Silver / 40cm", price: 30.0, available: true },
      { id: "adorn-7-s50", label: "Silver / 50cm", price: 34.0, available: true },
      { id: "adorn-7-b10", label: "Black / 10cm", price: 18.0, available: true },
      { id: "adorn-7-b20", label: "Black / 20cm", price: 22.0, available: true },
      { id: "adorn-7-b30", label: "Black / 30cm", price: 26.0, available: true },
      { id: "adorn-7-b40", label: "Black / 40cm", price: 30.0, available: true },
      { id: "adorn-7-b50", label: "Black / 50cm", price: 34.0, available: true },
    ],
    crossSells: ["adorn-6", "adorn-1", "adorn-2"],
  },
  {
    id: "adorn-8",
    slug: "ceramic-incense-holder",
    name: "Ceramic Incense Holder",
    headline: "A Ritual in Porcelain",
    hookLine: "Porcelain holder with ash-catching tray — four glazes.",
    description:
      "A porcelain incense holder with an integrated ash-catching tray — minimal, functional, and small enough to place on a windowsill, a bedside table, or a bathroom shelf.",
    price: 14.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["incense", "ceramic", "porcelain", "holder"],
    notes: "Porcelain · Ash catcher · 4 glazes",
    available: true,
    variants: [
      { id: "adorn-8-ivory", label: "Ivory", price: 14.0, available: true },
      { id: "adorn-8-sage", label: "Sage", price: 14.0, available: true },
      { id: "adorn-8-charcoal", label: "Charcoal", price: 14.0, available: true },
      { id: "adorn-8-sand", label: "Sand", price: 14.0, available: true },
    ],
    crossSells: ["adorn-9", "adorn-2", "bloom-2"],
  },
  {
    id: "adorn-9",
    slug: "handmade-soy-wax-ceramic-candle",
    name: "Handmade Soy Wax Ceramic Candle",
    headline: "The Vessel Remains",
    hookLine: "220g hand-poured candle in a ceramic vessel that outlasts the wax.",
    description:
      "A 220g candle poured by hand into a pure white ceramic vessel that remains beautiful long after the wax has burned. The ceramic vessel, once empty, becomes a small planter, a brush holder, or a quiet object in its own right.",
    price: 62.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["candle", "soy-wax", "ceramic", "handmade"],
    notes: "220g · Hand-poured · Reusable vessel",
    available: true,
    variants: [
      { id: "adorn-9-camellia", label: "Camellia", price: 62.0, available: true },
      { id: "adorn-9-jade", label: "Jade Dragon Tea", price: 62.0, available: true },
      { id: "adorn-9-sandalwood", label: "Sandalwood", price: 62.0, available: true },
      { id: "adorn-9-peach", label: "Peach", price: 62.0, available: true },
    ],
    crossSells: ["adorn-8", "adorn-2", "adorn-1"],
  },
  {
    id: "adorn-10",
    slug: "nordic-ceramic-vase",
    name: "Nordic Ceramic Vase",
    headline: "Three Sizes, One Statement",
    hookLine: "Matte ceramic vase with organic Scandinavian silhouette.",
    description:
      "A ceramic vase with a matte finish and organic silhouette inspired by Scandinavian studio pottery. Available in three sizes that group beautifully together on a mantelpiece, a shelf, or a dining table centrepiece.",
    price: 28.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["vase", "ceramic", "nordic", "matte"],
    notes: "Matte finish · 3 sizes · Scandinavian design",
    available: true,
    variants: [
      { id: "adorn-10-petite", label: "Petite", price: 28.0, available: true },
      { id: "adorn-10-classic", label: "Classic", price: 32.0, available: true },
      { id: "adorn-10-statement", label: "Statement", price: 36.0, available: true },
    ],
    crossSells: ["bloom-2", "bloom-3", "adorn-8"],
  },
  {
    id: "adorn-11",
    slug: "frameless-mirror-panel",
    name: "Frameless Mirror Panel",
    headline: "Expanding Light",
    hookLine: "Self-adhesive shatter-resistant mirror that trims to fit.",
    description:
      "A frameless, self-adhesive mirror panel that transforms any flat surface into a reflective accent. The flexible soft-glass material is shatter-resistant and can be trimmed to fit unusual spaces.",
    price: 26.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["mirror", "self-adhesive", "frameless", "wall"],
    notes: "20×40 inch · Shatter-resistant · Trimmable",
    available: false,
    variants: [
      { id: "adorn-11-single", label: "Single Panel", price: 26.0, available: false },
      { id: "adorn-11-double", label: "Double Panel", price: 44.0, available: false },
    ],
    crossSells: ["adorn-5", "adorn-1", "adorn-6"],
  },
  {
    id: "adorn-12",
    slug: "midnight-marine-eau-de-parfum",
    name: "Midnight Marine — Eau de Parfum",
    headline: "An Olfactive Journey",
    hookLine: "Aquatic fragrance with bergamot, coconut, and amber — 50ml.",
    description:
      "An aquatic fragrance that opens with the bright citrus of bergamot, deepens into warm coconut and cedarwood, and settles into a base of amber and musk. The Arabian perfumery tradition favours concentration and longevity — this 50ml eau de parfum delivers both.",
    price: 42.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    tags: ["fragrance", "perfume", "aquatic", "arabian"],
    notes: "Bergamot · Coconut · Amber · 50ml EDP",
    available: false,
    crossSells: ["adorn-9", "adorn-8", "adorn-2"],
  },
  {
    id: "adorn-13",
    slug: "wabi-sabi-ceramic-dispenser",
    name: "Wabi-Sabi Ceramic Dispenser",
    headline: "Beauty in Imperfection",
    hookLine: "450ml ceramic dispenser with deliberate wabi-sabi irregularity.",
    description:
      "A 450ml ceramic dispenser with the deliberate imperfection of wabi-sabi — the Japanese philosophy that finds beauty in irregularity. The matte glaze and organic form transform a bathroom or kitchen counter from functional to intentional.",
    price: 42.0,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["dispenser", "ceramic", "wabi-sabi", "bathroom"],
    notes: "450ml · Matte glaze · Pump included",
    available: true,
    variants: [
      { id: "adorn-13-single", label: "Single", price: 42.0, available: true },
      { id: "adorn-13-pair", label: "Pair", price: 72.0, available: true },
    ],
    crossSells: ["adorn-8", "adorn-9", "adorn-10"],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // BLOOM — Everlasting Greenery
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "bloom-1",
    slug: "faux-daisy-eucalyptus-arrangement",
    name: "Faux Daisy & Eucalyptus Arrangement",
    headline: "Perpetual Bloom",
    hookLine: "Pre-arranged bouquet with a realism that requires a second glance.",
    description:
      "A pre-arranged bouquet of faux daisies and eucalyptus leaves with a realism that requires a second glance. No water, no wilting, no guilt — just the quiet presence of greenery in a room that needs it.",
    price: 32.0,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    tags: ["flowers", "faux", "eucalyptus", "arrangement"],
    notes: "Faux silk · 3 colour palettes · Vase-ready",
    available: false,
    variants: [
      { id: "bloom-1-colour", label: "Colourful", price: 32.0, available: false },
      { id: "bloom-1-autumn", label: "Deep Autumn", price: 32.0, available: false },
      { id: "bloom-1-orange", label: "Orange", price: 32.0, available: false },
    ],
    crossSells: ["bloom-3", "adorn-10", "bloom-4"],
  },
  {
    id: "bloom-2",
    slug: "dried-cotton-stem",
    name: "Dried Cotton Stem",
    headline: "Understated Warmth",
    hookLine: "A single stem of dried cotton bolls — the stylist's secret.",
    description:
      "A single stem of dried cotton bolls — the kind of understated botanical accent that interior stylists reach for when a space needs warmth without colour. Place three in a tall vase for a minimal arrangement.",
    price: 9.0,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80",
    tags: ["cotton", "dried", "stem", "botanical"],
    notes: "Natural dried · Single stem · Pairs beautifully in threes",
    available: true,
    crossSells: ["adorn-10", "bloom-3", "bloom-4"],
  },
  {
    id: "bloom-3",
    slug: "faux-olive-branch",
    name: "Faux Olive Branch — 113cm",
    headline: "A Mediterranean Grove, Indoors",
    hookLine: "113cm silk olive branch with silvery-green shimmer.",
    description:
      "A 113cm faux olive branch with silk leaves that capture the silvery-green shimmer of a Mediterranean grove. The wired stem bends to hold any shape, and the leaves are dust-resistant for years of maintenance-free beauty.",
    price: 22.0,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    tags: ["olive", "faux", "branch", "silk"],
    notes: "113cm · Wired stem · Dust-resistant silk",
    available: true,
    crossSells: ["adorn-10", "bloom-2", "bloom-4"],
  },
  {
    id: "bloom-4",
    slug: "pampas-grass-bouquet",
    name: "Pampas Grass Bouquet",
    headline: "Bohemian Warmth, Naturally Dried",
    hookLine: "Natural dried pampas and bunny tail stems in warm neutrals.",
    description:
      "A curated bouquet of natural dried pampas grass and bunny tail stems in warm, neutral tones. Stands 30–45cm tall and requires no water. Available in three sizes.",
    price: 24.0,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80",
    tags: ["pampas", "dried", "bouquet", "boho"],
    notes: "Natural dried · 30–45cm tall · 3 sizes",
    available: true,
    variants: [
      { id: "bloom-4-petite", label: "Petite (30 stems)", price: 24.0, available: true },
      { id: "bloom-4-classic", label: "Classic (80 stems)", price: 34.0, available: true },
      { id: "bloom-4-grand", label: "Grand (120 stems)", price: 44.0, available: true },
    ],
    crossSells: ["adorn-10", "bloom-3", "bloom-2"],
  },
  {
    id: "bloom-5",
    slug: "cedar-wreath",
    name: "Cedar Wreath — 40cm",
    headline: "Everlasting Evergreen",
    hookLine: "40cm artificial cedar wreath — one purchase for years of display.",
    description:
      "A 40cm artificial cedar wreath with a density and colour depth that reads as freshly cut. Unlike a fresh wreath, it will not shed, dry out, or need replacing.",
    price: 32.0,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    tags: ["wreath", "cedar", "artificial", "evergreen"],
    notes: "40cm diameter · Year-round display · No maintenance",
    available: true,
    crossSells: ["bloom-3", "bloom-4", "adorn-10"],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // NOURISH — The Ritual of Cooking
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "nourish-1",
    slug: "kitchen-shears-magnetic-case",
    name: "Kitchen Shears with Magnetic Case",
    headline: "Precision, Considered",
    hookLine: "Stainless steel shears with a magnetic case that mounts anywhere.",
    description:
      "All-purpose stainless steel kitchen shears with a magnetic case that keeps them within reach and off the counter. The separable blades come apart for thorough cleaning.",
    price: 36.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["shears", "scissors", "stainless", "magnetic"],
    notes: "Stainless steel · Separable blades · Magnetic case",
    available: true,
    crossSells: ["nourish-9", "nourish-7", "gather-10"],
  },
  {
    id: "nourish-2",
    slug: "compartment-meal-container",
    name: "Compartment Meal Container",
    headline: "The Considered Lunch",
    hookLine: "Leak-proof compartment container for those who refuse a sad desk lunch.",
    description:
      "A compartmentalised meal container designed for the person who refuses to eat a sad desk lunch. The leak-proof condiment section keeps dressing separate until the moment you are ready to eat.",
    price: 42.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["container", "meal-prep", "lunch", "leak-proof"],
    notes: "Leak-proof · Compartmentalised · Dishwasher safe",
    available: true,
    crossSells: ["nourish-1", "gather-10", "nourish-9"],
  },
  {
    id: "nourish-3",
    slug: "stainless-steel-peeler",
    name: "Stainless Steel Peeler",
    headline: "The Long, Continuous Stroke",
    hookLine: "Ergonomic peeler with blade geometry for effortless strokes.",
    description:
      "A stainless steel peeler with a blade geometry designed for long, continuous strokes. The ergonomic handle sits naturally in the hand.",
    price: 14.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["peeler", "stainless", "kitchen", "tool"],
    notes: "Stainless steel · Ergonomic grip",
    available: false,
    variants: [
      { id: "nourish-3-a", label: "Style A", price: 14.0, available: false },
      { id: "nourish-3-b", label: "Style B", price: 14.0, available: false },
    ],
    crossSells: ["nourish-4", "nourish-1", "nourish-9"],
  },
  {
    id: "nourish-4",
    slug: "multi-function-grater",
    name: "Multi-Function Grater",
    headline: "Three Blades, One Handle",
    hookLine: "Interchangeable blades — julienne, ribbon, and standard peel.",
    description:
      "A multi-function grater and peeler with interchangeable stainless steel blades — julienne, ribbon, and standard peel — all housed in a single ergonomic handle.",
    price: 14.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["grater", "peeler", "multi-function", "kitchen"],
    notes: "3 interchangeable blades · Stainless steel",
    available: false,
    variants: [
      { id: "nourish-4-a", label: "Style A", price: 14.0, available: false },
      { id: "nourish-4-b", label: "Style B", price: 14.0, available: false },
      { id: "nourish-4-duo", label: "Duo Pack", price: 24.0, available: false },
    ],
    crossSells: ["nourish-3", "nourish-1", "nourish-9"],
  },
  {
    id: "nourish-5",
    slug: "cherry-stone-fruit-pitter",
    name: "Cherry & Stone Fruit Pitter",
    headline: "The Clean Pit",
    hookLine: "Single-press pitter with splash guard — no crushed fruit.",
    description:
      "A single-press fruit pitter that removes cherry and olive stones cleanly, without crushing the fruit. The splash guard keeps juice off your clothes.",
    price: 28.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["pitter", "cherry", "kitchen", "tool"],
    notes: "Splash guard · Food-grade · Dishwasher safe",
    available: true,
    crossSells: ["nourish-1", "nourish-9", "gather-10"],
  },
  {
    id: "nourish-6",
    slug: "airtight-pantry-container",
    name: "Airtight Pantry Container — 2.5L",
    headline: "Sealed Freshness",
    hookLine: "Moisture-proof 2.5L container for pantry staples.",
    description:
      "A 2.5-litre airtight container with a moisture-proof seal designed for pantry staples. Stackable, BPA-free, and sized to fit standard pantry shelves.",
    price: 24.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["container", "airtight", "pantry", "storage"],
    notes: "2.5L · BPA-free · Stackable",
    available: true,
    crossSells: ["nourish-10", "gather-8", "gather-9"],
  },
  {
    id: "nourish-7",
    slug: "collapsible-silicone-containers",
    name: "Collapsible Silicone Containers",
    headline: "Flat When Empty, Full When Needed",
    hookLine: "Containers that flatten to half height when empty.",
    description:
      "Collapsible silicone containers that flatten to half their height when empty. Microwave-safe, freezer-safe, dishwasher-safe, with a snap-lock lid.",
    price: 12.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["container", "silicone", "collapsible", "storage"],
    notes: "Silicone · Snap-lock · Microwave & freezer safe",
    available: false,
    variants: [
      { id: "nourish-7-yellow", label: "Yellow — Single", price: 12.0, available: false },
      { id: "nourish-7-green", label: "Green — Single", price: 12.0, available: false },
      { id: "nourish-7-red", label: "Red — Single", price: 12.0, available: false },
      { id: "nourish-7-brown", label: "Brown — Single", price: 12.0, available: false },
      { id: "nourish-7-set", label: "Set of 4", price: 38.0, available: false },
    ],
    crossSells: ["nourish-6", "nourish-2", "gather-10"],
  },
  {
    id: "nourish-8",
    slug: "stainless-steel-chopping-board",
    name: "Stainless Steel Chopping Board",
    headline: "The Hygienic Foundation",
    hookLine: "Double-sided steel board that never harbours bacteria.",
    description:
      "A double-sided stainless steel chopping board with anti-slip silicone edges. The non-porous steel does not harbour bacteria, odours, or stains. Dishwasher safe.",
    price: 52.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["chopping-board", "stainless", "kitchen", "hygienic"],
    notes: "Double-sided · Anti-slip · Dishwasher safe",
    available: true,
    variants: [
      { id: "nourish-8-std", label: "Standard", price: 52.0, available: true },
      { id: "nourish-8-thick", label: "Thickened", price: 78.0, available: true },
    ],
    crossSells: ["nourish-12", "nourish-1", "nourish-9"],
  },
  {
    id: "nourish-9",
    slug: "microwave-steamer-cover",
    name: "Microwave Steamer Cover",
    headline: "Elegance in Utility",
    hookLine: "10-inch cover that steams and protects in one.",
    description:
      "A 10-inch microwave cover that does double duty as a water steamer. The vented design traps moisture to revive leftovers while keeping your microwave spotless.",
    price: 32.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["microwave", "steamer", "cover", "kitchen"],
    notes: "10 inch · Vented · BPA-free",
    available: false,
    variants: [
      { id: "nourish-9-gr", label: "Green / Round", price: 32.0, available: false },
      { id: "nourish-9-gyr", label: "Grey / Round", price: 32.0, available: false },
      { id: "nourish-9-gd", label: "Green / Diamond", price: 32.0, available: false },
      { id: "nourish-9-gyd", label: "Grey / Diamond", price: 32.0, available: false },
    ],
    crossSells: ["nourish-1", "nourish-8", "gather-10"],
  },
  {
    id: "nourish-10",
    slug: "teak-carving-board",
    name: "Teak Carving Board",
    headline: "The Heirloom Board",
    hookLine: "Solid teak, one inch thick — develops a honeyed patina over years.",
    description:
      "A solid teak cutting board, one inch thick, with the density and natural oil content that has made teak the material of choice for serious kitchens. Naturally antimicrobial, resists warping, and develops a rich, honeyed patina over years of use.",
    price: 88.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["cutting-board", "teak", "wood", "premium"],
    notes: "Solid teak · 1 inch thick · Antimicrobial",
    available: true,
    variants: [
      { id: "nourish-10-s", label: "Standard (13.3×9.5\")", price: 88.0, available: true },
      { id: "nourish-10-l", label: "Large (16.5×11.8\")", price: 118.0, available: true },
    ],
    crossSells: ["nourish-9", "nourish-1", "nourish-14"],
  },
  {
    id: "nourish-11",
    slug: "rapid-defrosting-board",
    name: "Rapid Defrosting Board",
    headline: "Five Times Faster",
    hookLine: "Aluminium board that thaws frozen food without electricity.",
    description:
      "An aluminium defrosting board that thaws frozen meat, fish, and poultry up to five times faster than a countertop — without electricity, hot water, or a microwave.",
    price: 22.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["defrosting", "aluminium", "kitchen", "tool"],
    notes: "Aluminium · No electricity · 5× faster",
    available: true,
    crossSells: ["nourish-10", "nourish-8", "nourish-1"],
  },
  {
    id: "nourish-12",
    slug: "acacia-magnetic-knife-block",
    name: "Acacia Magnetic Knife Block",
    headline: "Blades on Display",
    hookLine: "Solid acacia with rare-earth magnets for a full knife set.",
    description:
      "A magnetic knife block carved from solid acacia wood, with embedded rare-earth magnets strong enough to hold a full set of kitchen knives. The open design keeps blades visible, accessible, and properly aired.",
    price: 98.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["knife-block", "acacia", "magnetic", "kitchen"],
    notes: "Solid acacia · Rare-earth magnets · Holds full set",
    available: false,
    crossSells: ["nourish-10", "nourish-1", "nourish-8"],
  },
  {
    id: "nourish-13",
    slug: "magnetic-spice-tins",
    name: "Magnetic Spice Tins",
    headline: "Spices Within Reach",
    hookLine: "Magnetic tins that mount to any metal surface.",
    description:
      "Magnetic spice tins that mount directly to a fridge, a metal backsplash, or the included iron mounting sheet. The airtight seal preserves freshness, and the clear window lets you identify contents at a glance.",
    price: 16.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["spice", "tins", "magnetic", "storage"],
    notes: "Airtight · Clear window · Magnetic mount",
    available: true,
    variants: [
      { id: "nourish-13-single", label: "Single Tin", price: 16.0, available: true },
      { id: "nourish-13-set", label: "Set of 6 + Mounting Sheet", price: 52.0, available: true },
    ],
    crossSells: ["nourish-6", "nourish-14", "gather-8"],
  },
  {
    id: "nourish-14",
    slug: "acacia-salt-pepper-mill",
    name: "Acacia Salt & Pepper Mill",
    headline: "The Ceramic Grind",
    hookLine: "Acacia wood mill with adjustable ceramic grinding mechanism.",
    description:
      "An acacia wood salt or pepper mill with an adjustable ceramic grinding mechanism — the material that professional chefs prefer because it does not corrode and maintains a consistent grind indefinitely.",
    price: 28.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["mill", "salt", "pepper", "acacia"],
    notes: "Ceramic grinder · Adjustable · 3 sizes + base",
    available: true,
    variants: [
      { id: "nourish-14-base", label: "Wooden Display Base", price: 16.0, available: true },
      { id: "nourish-14-6", label: "6-Inch Mill", price: 28.0, available: true },
      { id: "nourish-14-8", label: "8-Inch Mill", price: 34.0, available: true },
      { id: "nourish-14-10", label: "10-Inch Mill", price: 38.0, available: true },
    ],
    crossSells: ["nourish-13", "nourish-10", "nourish-9"],
  },
  {
    id: "nourish-15",
    slug: "acacia-wooden-utensil-set",
    name: "Acacia Wooden Utensil Set",
    headline: "The Considered Kitchen",
    hookLine: "Satin-smooth acacia utensils that never scratch non-stick.",
    description:
      "A set of acacia wood cooking utensils — spatula, turner, serving spoon, and more — with a satin-smooth finish that will never scratch a non-stick pan. Acacia is naturally antimicrobial and heat-resistant.",
    price: 56.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["utensils", "acacia", "wood", "cooking"],
    notes: "Antimicrobial · Heat-resistant · Multiple set sizes",
    available: true,
    variants: [
      { id: "nourish-15-5", label: "5-Piece Set", price: 48.0, available: true },
      { id: "nourish-15-6", label: "6-Piece Set", price: 52.0, available: true },
      { id: "nourish-15-7", label: "7-Piece Set (Recommended)", price: 56.0, available: true },
      { id: "nourish-15-9", label: "9-Piece Set", price: 72.0, available: true },
      { id: "nourish-15-10", label: "10-Piece Set", price: 78.0, available: true },
    ],
    crossSells: ["nourish-10", "nourish-14", "nourish-8"],
  },
  {
    id: "nourish-16",
    slug: "electronic-precision-measuring-spoon",
    name: "Electronic Precision Measuring Spoon",
    headline: "Precision by the Gram",
    hookLine: "Digital spoon scale for exact measurements up to 800g.",
    description:
      "A digital measuring spoon scale that weighs ingredients directly as you scoop — no separate bowl, no guesswork. Accurate to 0.1g for spices and 1g for larger quantities.",
    price: 22.0,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["scale", "measuring", "digital", "precision"],
    notes: "0.1g precision · LCD display · Tare function",
    available: true,
    crossSells: ["nourish-14", "nourish-13", "nourish-15"],
  },
];

// ═══════════════════════════════════════════════════════════════════════
// COLLECTIONS
// ═══════════════════════════════════════════════════════════════════════

export const COLLECTIONS: Collection[] = [
  {
    slug: "gather",
    name: "GATHER",
    tagline: "The Art of the Table",
    description:
      "Kitchen tools and tabletop accessories for the intentional host. These are the objects you reach for when you cook and when you host — each one chosen for its quiet utility and considered design.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-gather_87a9bb21.jpg",
    products: [],
  },
  {
    slug: "adorn",
    name: "ADORN",
    tagline: "Objects of Intention",
    description:
      "Home fragrance, decorative objects, and display pieces. These are the objects that make a space feel considered — purely objects that transform the atmosphere of a room through scent, light, or visual presence.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-adorn_18502690.jpg",
    products: [],
  },
  {
    slug: "bloom",
    name: "BLOOM",
    tagline: "Everlasting Greenery",
    description:
      "Botanicals, florals, plants, and garden accessories. Living and living-adjacent objects that bring the outside in. Every product in this collection relates to plants, flowers, seeds, or garden cultivation.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-bloom_bb15969d.jpg",
    products: [],
  },
  {
    slug: "nourish",
    name: "NOURISH",
    tagline: "The Ritual of Cooking",
    description:
      "Artisan food, drink, and cookware for the intentional cook. Consumables and ingredients that transform the act of cooking from a task into a ritual — each one chosen for its provenance, flavour, and story.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-nourish-9ACpb36EeNaEewRWfkFqCs.webp",
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
