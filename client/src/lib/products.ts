// HEARTH CURATED — Product & Collection Data
// All 20 products from V4 expansion report across 4 collections

export interface Product {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  price: number;
  collection: string;
  collectionSlug: string;
  image: string; // placeholder — will be replaced with real product images
  tags: string[];
  notes?: string; // Aesop-style scent/attribute notes
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: Product[];
}

export const PRODUCTS: Product[] = [
  // ── GATHER ──────────────────────────────────────────────────────────────
  {
    id: "gather-1",
    slug: "microwave-splatter-cover",
    name: "Microwave Splatter Cover",
    headline: "Elegance in Utility",
    description:
      "The most practical tools should still be beautiful. This splatter cover protects your microwave interior while doubling as a water steamer, locking in moisture to revive leftovers to their original texture. Designed with a minimalist aesthetic and heat-resistant materials, it is a quiet workhorse that maintains the pristine condition of your kitchen.",
    price: 18.99,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["kitchen", "microwave", "steamer"],
    notes: "BPA-free · Heat-resistant · Dishwasher safe",
  },
  {
    id: "gather-2",
    slug: "kitchen-scissors",
    name: "Kitchen Scissors",
    headline: "Precision, Considered",
    description:
      "All-purpose stainless steel kitchen scissors with a Japanese-inspired design that photographs beautifully and performs with quiet authority. Separable blades for thorough cleaning. The kind of tool that earns a permanent place on your counter.",
    price: 12.99,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80",
    tags: ["kitchen", "scissors", "tools"],
    notes: "Stainless steel · Separable blades · All-purpose",
  },
  {
    id: "gather-3",
    slug: "stainless-peeler-knife-set",
    name: "Stainless Steel Peeler Knife Set",
    headline: "The Art of Preparation",
    description:
      "A two-piece stainless steel peeler and paring knife set with an editorial quality that elevates the act of preparation. Multi-function construction that does more than you expect — the kind of kitchen tool that generates genuine appreciation.",
    price: 16.99,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["kitchen", "peeler", "knife"],
    notes: "Stainless steel · 2-piece set · Multi-function",
  },
  {
    id: "gather-4",
    slug: "stainless-cutting-board-set",
    name: "Stainless Steel Cutting Board Set",
    headline: "The Foundation of the Kitchen",
    description:
      "A three-piece set of food-grade stainless steel cutting boards in small, medium, and large. Metal cutting boards are more hygienic and durable than plastic — a premium kitchen category with strong editorial appeal. The set format creates genuine value and makes for a considered gift.",
    price: 17.50,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["kitchen", "cutting board", "set"],
    notes: "Food-grade stainless · 3 sizes · Dishwasher safe",
  },
  {
    id: "gather-5",
    slug: "mason-jar-side-opening",
    name: "Mason Jar — Side Opening",
    headline: "The Considered Vessel",
    description:
      "A mason jar with a side-opening door that solves the perennial problem of dressing at the bottom. The side door allows you to access the contents without tipping the jar — an unexpectedly elegant solution. Inherently photogenic and deeply aligned with the artisan, farmhouse-modern aesthetic.",
    price: 14.99,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
    tags: ["kitchen", "jar", "salad"],
    notes: "Glass · Side-opening door · Airtight seal",
  },
  {
    id: "gather-6",
    slug: "apple-corer-peeler",
    name: "Apple Corer & Peeler",
    headline: "The Satisfying Spiral",
    description:
      "A 2-in-1 stainless steel apple corer and peeler that creates a perfect spiral peel in one fluid motion. The visual result is inherently shareable — the kind of kitchen gadget that makes you want to use it again immediately. The stainless steel construction and clean design align with the Hearth Curated kitchen aesthetic.",
    price: 22.99,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    tags: ["kitchen", "apple", "peeler", "corer"],
    notes: "Stainless steel · Spiral peel · 2-in-1",
  },
  {
    id: "gather-7",
    slug: "electric-omelet-maker",
    name: "Electric Flip Omelet Maker",
    headline: "The Breakfast Ritual",
    description:
      "A compact electric appliance that flips to cook both sides of an omelet simultaneously — the perfect omelet, every time. The flip mechanism creates inherently shareable video content. Lightweight, compact, and highly giftable. A breakfast ritual product that aligns with Hearth Curated's morning routine content angle.",
    price: 24.95,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
    tags: ["kitchen", "electric", "omelet", "breakfast"],
    notes: "Non-stick · Compact · 2-sided cooking",
  },
  {
    id: "gather-8",
    slug: "peeler-bottle-opener",
    name: "Peeler & Bottle Opener",
    headline: "Dual Purpose, Single Object",
    description:
      "A 2-in-1 fruit and vegetable peeler with an integrated bottle opener, finished with a warm wooden handle. The wooden handle and botanical aesthetic elevate a utilitarian object into something worth displaying. The kind of kitchen tool that earns a quiet compliment from guests.",
    price: 9.99,
    collection: "GATHER",
    collectionSlug: "gather",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    tags: ["kitchen", "peeler", "bottle opener", "wood"],
    notes: "Wooden handle · 2-in-1 · Stainless blade",
  },
  // ── ADORN ──────────────────────────────────────────────────────────────
  {
    id: "adorn-1",
    slug: "midnight-marine-parfum",
    name: "Midnight Marine Eau de Parfum",
    headline: "An Olfactive Journey",
    description:
      "A unisex Arabian fragrance with bergamot, coconut, and amber — the anchor product of the ADORN collection. The combination of a premium-sounding name, luxury Arabian fragrance heritage, and an accessible price point creates a compelling perceived value gap. Customers feel they are accessing a luxury fragrance at an accessible price.",
    price: 18.99,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80q=80",
    tags: ["fragrance", "perfume", "arabian", "unisex"],
    notes: "Bergamot · Coconut · Amber · 50ml",
  },
  {
    id: "adorn-2",
    slug: "gold-musk-parfum",
    name: "Gold Musk Eau de Parfum",
    headline: "Warmth, Distilled",
    description:
      "The warmer, more intimate counterpart to Midnight Marine. Gold Musk and Midnight Marine complement each other as a day/evening fragrance pair — a natural bundle opportunity. The gold packaging photographs exceptionally well against Hearth Curated's warm palette. Arabian musk fragrances have a devoted following among customers who associate them with warmth, luxury, and intimacy.",
    price: 24.99,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    tags: ["fragrance", "perfume", "musk", "arabian"],
    notes: "Gold musk · Warm amber · Sandalwood · 50ml",
  },
  {
    id: "adorn-3",
    slug: "only-sunshine-fragrance",
    name: "Only Sunshine — Tropical Fragrance",
    headline: "A Bottled Escape",
    description:
      "The hero fragrance in the ADORN collection at $68.00 — the aspirational purchase that anchors the collection's premium positioning. A premium fragrance brand with strong upward momentum. At $68, this is the discovery fragrance for the Hearth Curated customer who prides herself on finding things before they go mainstream.",
    price: 68.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
    tags: ["fragrance", "perfume", "tropical", "premium"],
    notes: "Tropical florals · Warm base · 50ml",
  },
  {
    id: "adorn-4",
    slug: "mirror-sticker",
    name: "Self-Adhesive Mirror Film",
    headline: "Expanding Light",
    description:
      "Light is the most vital element of any space. Our self-adhesive mirror film offers a simple, elegant way to bounce natural light into dark corners and visually expand your room. With a frameless, minimal design, it integrates seamlessly into any aesthetic, transforming a flat wall into a dynamic reflection of your home.",
    price: 11.69,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    tags: ["decor", "mirror", "wall", "home"],
    notes: "20×40 inch · Flexible film · Cut to size",
  },
  {
    id: "adorn-5",
    slug: "diffuser-oil",
    name: "Highly Scented Diffuser Oil",
    headline: "The Invisible Architecture of a Room",
    description:
      "A high-volume, high-growth home fragrance product that complements the perfumes in ADORN. Diffuser oils are a repeat-purchase category — once a customer buys a diffuser, they return for refills. The $35.99 price point is strong for a consumable, and the 43% growth rate shows the category is expanding.",
    price: 35.99,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    tags: ["fragrance", "diffuser", "home", "scent"],
    notes: "16oz · Highly concentrated · Reed diffuser compatible",
  },
  // ── BLOOM ──────────────────────────────────────────────────────────────
  {
    id: "bloom-1",
    slug: "artificial-daisy-eucalyptus",
    name: "Faux Daisy & Eucalyptus Stems",
    headline: "Perpetual Bloom",
    description:
      "The beauty of nature, captured in a permanent state of grace. These incredibly lifelike artificial flowers bring warmth and texture to any room without the need for maintenance. The eucalyptus pairing elevates it beyond a generic artificial flower — arranged in a simple vase, they offer a quiet, enduring elegance that softens the hard lines of modern interiors.",
    price: 14.80,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800https://images.unsplash.com/photo-1487530811015-780f2b0e9b4e?w=800&q=80q=80",
    tags: ["botanical", "flowers", "artificial", "eucalyptus"],
    notes: "Faux daisy · Eucalyptus leaves · Vase-ready",
  },
  {
    id: "bloom-2",
    slug: "guava-seeds",
    name: "Guava Seeds — Grow Your Own",
    headline: "The Patience of Growth",
    description:
      "There is a unique satisfaction in cultivating life from a single seed. Our premium guava seeds offer the opportunity to grow a lush, fruit-bearing plant within your own home or garden. A daily practice in patience and care, watching these seeds sprout and thrive connects you to the slow, rewarding rhythms of nature.",
    price: 9.99,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
    tags: ["seeds", "garden", "grow", "botanical"],
    notes: "Premium seeds · Indoor & outdoor · Kraft packet",
  },
  {
    id: "bloom-3",
    slug: "raised-garden-bed",
    name: "Metal Raised Garden Bed",
    headline: "A Permanent Garden",
    description:
      "The galvalume metal construction is premium and durable, and the product has strong visual appeal for garden content. Raised garden beds are one of the fastest-growing garden categories. The metal construction signals permanence and quality compared to plastic alternatives.",
    price: 48.72,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    tags: ["garden", "planter", "metal", "outdoor"],
    notes: "Galvalume steel · 60×60×20cm · Outdoor",
  },
  // ── NOURISH ──────────────────────────────────────────────────────────────
  {
    id: "nourish-1",
    slug: "birria-spice-bombs",
    name: "Birria Seasoning Spice Bombs",
    headline: "The Secret Ingredient",
    description:
      "Concentrated seasoning in bomb form — customers feel they have found a secret ingredient. The Birria trend has been one of the most sustained food trends on TikTok. The bomb format is inherently shareable — the moment of dropping it into a pot creates compelling content. Strong gifting potential as a kitchen discovery item.",
    price: 19.99,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    tags: ["food", "seasoning", "spice", "birria"],
    notes: "Concentrated · Dissolves in cooking · Authentic blend",
  },
  {
    id: "nourish-2",
    slug: "caramel-protein-coffee",
    name: "Caramel Protein Iced Coffee",
    headline: "The Functional Morning Ritual",
    description:
      "A premium protein coffee at $39.95 — the highest-priced food product in the selection. The combination of protein and coffee appeals to the health-conscious home cook who wants their morning ritual to be both pleasurable and functional. Strong repeat-purchase potential.",
    price: 39.95,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    tags: ["coffee", "protein", "drink", "caramel"],
    notes: "Premium whey protein · Caramel flavour · 500g",
  },
  {
    id: "nourish-3",
    slug: "natural-decaf-iced-coffee",
    name: "All Natural Decaf Iced Coffee",
    headline: "The Calm Morning",
    description:
      "The decaf iced coffee trend is driven by customers who want the ritual of coffee without the caffeine anxiety. The all natural positioning adds a wellness halo. The 126% growth rate and 20% commission make this the strongest artisan food product in the dataset.",
    price: 25.00,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    tags: ["coffee", "decaf", "natural", "drink"],
    notes: "All natural · Decaffeinated · 500g",
  },
  {
    id: "nourish-4",
    slug: "freeze-dried-ice-cream",
    name: "Freeze Dried Ice Cream Bites",
    headline: "A Playful Indulgence",
    description:
      "Freeze-dried ice cream is a genuinely novel food category. Lightweight, ships easily, and has strong gifting potential. Positioned as a playful indulgence in NOURISH — the product that makes the collection feel approachable rather than austere. The novelty factor and satisfying crunch texture create compelling content.",
    price: 14.99,
    collection: "NOURISH",
    collectionSlug: "nourish",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    tags: ["food", "ice cream", "freeze dried", "snack"],
    notes: "Strawberry shortcake · Freeze-dried · Giftable",
  },
];

export const COLLECTIONS: Collection[] = [
  {
    slug: "gather",
    name: "GATHER",
    tagline: "The Art of the Table",
    description:
      "Kitchen tools and tabletop accessories for the intentional host. These are the objects you reach for when you cook and when you host — each one chosen for its quiet utility and considered design.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-gather_87a9bb21.jpg",
    products: PRODUCTS.filter((p) => p.collectionSlug === "gather"),
  },
  {
    slug: "adorn",
    name: "ADORN",
    tagline: "Objects of Intention",
    description:
      "Home fragrance, decorative objects, and display pieces. These are the objects that make a space feel considered — nothing functional, nothing edible. Purely objects that transform the atmosphere of a room through scent, light, or visual presence.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-adorn_18502690.jpg",
    products: PRODUCTS.filter((p) => p.collectionSlug === "adorn"),
  },
  {
    slug: "bloom",
    name: "BLOOM",
    tagline: "Everlasting Greenery",
    description:
      "Botanicals, florals, plants, and garden accessories. Living and living-adjacent objects that bring the outside in. Every product in this collection relates to plants, flowers, seeds, or garden cultivation.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-bloom_bb15969d.jpg",
    products: PRODUCTS.filter((p) => p.collectionSlug === "bloom"),
  },
  {
    slug: "nourish",
    name: "NOURISH",
    tagline: "The Ritual of Cooking",
    description:
      "Artisan food and drink for the intentional cook. Consumables and ingredients that transform the act of cooking from a task into a ritual — each one chosen for its provenance, flavour, and story.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-nourish-9ACpb36EeNaEewRWfkFqCs.webp",
    products: PRODUCTS.filter((p) => p.collectionSlug === "nourish"),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
