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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-seasoning-pot-set_ca07ef7c_f15ff217.jpg",
    tags: ["seasoning", "ceramic", "bamboo", "kitchen", "storage"],
    notes: "3 pots · Bamboo lids · Acacia tray included",
    available: true,
    crossSells: ["acacia-salt-pepper-mill", "teak-kitchen-utensil-set", "japanese-wooden-coaster-set"],
      variants: [
        { id: "ceramic-seasoning-pot-set-a", label: "Classic White", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250895978577", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/seasoning-pot-white-SbuJsUDGvhJ6sNhHsWy5Zc.webp" },
        { id: "ceramic-seasoning-pot-set-b", label: "Matte Grey", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896011345", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/seasoning-pot-grey-P7VPzDJny3JvXjdTJPmonN.webp" },
        { id: "ceramic-seasoning-pot-set-c", label: "Sage Green", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250896044113", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/seasoning-pot-sage_f335cb27.jpg" }
      ]
  },
  {
    id: "feast-2",
    slug: "teak-kitchen-utensil-set",
    name: "Teak Kitchen Utensil Set",
    headline: "The Natural Kitchen",
    hookLine: "Hand-finished teak utensils — spoons, ladles, turners, and spatulas — that never scratch non-stick.",
    description:
      "A collection of hand-finished Thailand teak wood cooking utensils — each one carved from natural teak with the density and oil content that makes this wood the material of choice for serious kitchens. Teak is naturally antimicrobial, heat-resistant, and develops a rich patina over years of use. Available as individual pieces or curated sets.",
    price: 5.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg",
    tags: ["utensils", "teak", "wood", "cooking", "natural"],
    notes: "Thailand teak · Antimicrobial · Heat-resistant",
    available: true,
    variants: [
        { id: "teak-utensil-soup-ladle", label: "Soup Ladle", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897223761" },
        { id: "teak-utensil-slotted-turner", label: "Slotted Turner", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897256529" },
        { id: "teak-utensil-2pc-set", label: "2-Piece Set", price: 8.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897289297" },
        { id: "teak-utensil-4pc-set", label: "4-Piece Set", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897322065" },
        { id: "teak-utensil-3pc-set-a", label: "3-Piece Set A", price: 10.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897354833" },
        { id: "teak-utensil-8pc-set-double", label: "8-Piece Set (2 of each)", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897387601" },
        { id: "teak-utensil-8pc-set", label: "8-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897420369" },
        { id: "teak-utensil-9pc-set", label: "9-Piece Set", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897453137" },
        { id: "teak-utensil-skimmer", label: "Skimmer Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897485905" },
        { id: "teak-utensil-4pc-set-b", label: "4-Piece Set B", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897518673" },
        { id: "teak-utensil-soup-spoon", label: "Soup Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897551441" },
        { id: "teak-utensil-strainer-spoon", label: "Strainer Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897584209" },
        { id: "teak-utensil-wok-spatula", label: "Wok Spatula", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897616977" },
        { id: "teak-utensil-flat-spatula", label: "Flat Spatula", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897649745" },
        { id: "teak-utensil-pasta-fork", label: "Pasta Fork", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897682513" },
        { id: "teak-utensil-5pc-set-b", label: "5-Piece Set B", price: 30.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897715281" },
        { id: "teak-utensil-5pc-set", label: "5-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897748049" },
        { id: "teak-utensil-10pc-set", label: "10-Piece Set", price: 36.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897780817" },
        { id: "teak-utensil-4pc-set-c", label: "4-Piece Set C", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897813585" },
        { id: "teak-utensil-7pc-set", label: "7-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897846353" },
        { id: "teak-utensil-3pc-set-b", label: "3-Piece Set B", price: 12.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897879121" },
        { id: "teak-utensil-complete-set", label: "Complete Set", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897911889" },
        { id: "teak-utensil-rice-paddle", label: "Rice Paddle", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897944657" },
        { id: "teak-utensil-serving-spoon", label: "Serving Spoon", price: 5.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897977425" },
        { id: "teak-utensil-mixing-spoon", label: "Mixing Spoon", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898010193" },
        { id: "teak-utensil-cooking-spoon", label: "Cooking Spoon", price: 4.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898042961" },
        { id: "teak-utensil-8pc-set-c", label: "8-Piece Set C", price: 34.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898075729" },
        { id: "teak-utensil-salad-server", label: "Salad Server", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/1_LOo4TvZe4CwtOLCRmkrlJ6_1774801321323_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy90ZWFrX2tpdGNoZW5fdXRlbnNpbF9zZXQ_95d7e2bc_e7ede2e3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898108497" }
      ],
    crossSells: ["ebony-cutting-board", "black-walnut-cutting-board", "ceramic-seasoning-pot-set"],
  },
  {
    id: "feast-3",
    slug: "japanese-ceramic-spoon-set",
    name: "Japanese Ceramic Spoon Set",
    headline: "The Small Ritual",
    hookLine: "Hand-glazed ceramic spoons in five artisan finishes — for condiments, tasting, and quiet beauty.",
    description:
      "A collection of Japanese-style creative ceramic spoons, each finished in a distinctive reactive glaze. From the deep Purplish Blue to the ethereal Sky, every spoon carries the subtle imperfections of handcraft. Perfect for condiments, tasting portions, or as decorative accents on a curated table.",
    price: 6.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712_88d36389.jpg",
    tags: ["spoon", "ceramic", "japanese", "condiment", "tabletop"],
    notes: "Reactive glaze · Sold individually · Dishwasher safe",
    available: true,
    shopifyHandle: "japanese-style-creative-ceramic-spoon-small-kitchen-restaurant",
    variants: [
        { id: "japanese-ceramic-spoon-purplish-blue", label: "Purplish Blue", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712_88d36389.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896830545" },
        { id: "japanese-ceramic-spoon-lunar-december", label: "Lunar December", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712_88d36389.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896896081" },
        { id: "japanese-ceramic-spoon-sky", label: "Sky", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712_88d36389.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896961617" },
        { id: "japanese-ceramic-spoon-black-rhyme", label: "Black Rhyme", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712_88d36389.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897059921" },
        { id: "japanese-ceramic-spoon-follow-the-fate", label: "Follow The Fate", price: 6.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_0vwmvyqWfusKeHnHfDXxa2_1774801314343_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9jZXJhbWljX3Nwb29uX3NldA_1b80e712_88d36389.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897092689" }],
    crossSells: ["retro-reactive-glaze-dinnerware", "stoneware-travel-tea-set", "japanese-sake-set"],
  },
  {
    id: "feast-4",
    slug: "japanese-matcha-ceremony-set",
    name: "Japanese Matcha Ceremony Set",
    headline: "The Complete Ritual",
    hookLine: "A seven-piece matcha set — bowl, whisk, holder, scoop, sieve, spoon, and caddy.",
    description:
      "A complete matcha ceremony set in seven pieces — everything you need to transform a morning cup of green tea into a meditative ritual. The bamboo chasen (whisk) has 80 fine tines for a perfect froth, the ceramic chawan (bowl) has a smooth matte finish and pouring spout, and the bamboo scoop and spoon are carved from a single piece. Available in three finishes: classic black, warm painted brown, and fresh green.",
    price: 52.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/matcha-ceremony-set-YzUfx6sWuYvgwA4dBTVmrq.webp",
    tags: ["matcha", "tea", "ceremony", "bamboo", "whisk", "ceramic", "bowl", "japanese"],
    notes: "7 pieces: bowl, whisk, holder, scoop, sieve, spoon, caddy · Gift box included",
    available: true,
    variants: [
        { id: "matcha-set-7pieces-black", label: "7-Piece Black", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-4_Clear-Glaze-_-7Pieces-Black_bef1da1f.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631316561" },
        { id: "matcha-set-7piece-painted-brown", label: "7-Piece Painted Brown", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-4_Clear-Glaze-_-7Piece-Set-Painted-In-Brow_e53651cc.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631349329" },
        { id: "matcha-set-7piece-green", label: "7-Piece Green", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-4_Clear-Glaze-_-7Piece-Set-Green_e99701aa.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631414865" }
      ],
    crossSells: ["stoneware-travel-tea-set", "japanese-stoneware-mug", "retro-reactive-glaze-dinnerware"],
  },
  {
    id: "feast-5",
    slug: "stoneware-travel-tea-set",
    name: "Stoneware Travel Tea Set",
    headline: "The Portable Ceremony",
    hookLine: "Compact stoneware teapot with one cup — ritual wherever you go.",
    description:
      "A compact stoneware tea set — one teapot and one cup — designed for the person who refuses to compromise on their tea ritual, even on the move. The teapot nests perfectly inside the cup for travel, and the matte glaze has the tactile warmth of traditional Japanese pottery. Available as the set alone or with a carry case.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kungfu-tea-black_5dfadd01_adcc3d76.jpg",
    tags: ["tea", "stoneware", "travel", "japanese", "portable"],
    notes: "Stoneware · Nesting design · Matte glaze",
    available: true,
    variants: [
        { id: "stoneware-travel-tea-set-one-pot-one-cup-with", label: "Tea Set Only (Pot + Cup + Lid)", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-5_One-Pot-One-Cup-With-Cover_a5bd3bcb.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898141265" },
        { id: "stoneware-travel-tea-set-capsule-bag", label: "Tea Set + Capsule Carry Case", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-5_Capsule-Bag_51e71d81.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898174033" },
        { id: "stoneware-travel-tea-set-travel-bag", label: "Tea Set + Padded Travel Bag", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-5_Travel-Bag_e07a1873.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898206801" }
      ],
    crossSells: ["japanese-matcha-ceremony-set", "japanese-stoneware-mug", "multi-function-grater"],
  },
  {
    id: "feast-6",
    slug: "retro-reactive-glaze-dinnerware",
    name: "Retro Reactive Glaze Dinnerware",
    headline: "The Imperfect Surface",
    hookLine: "Teal kiln-change ceramic dinnerware — plates, bowls, and mugs in a stunning reactive glaze.",
    description:
      "A collection of ceramic dinnerware finished in a striking teal reactive glaze with dark rims. The kiln-change process gives each piece a unique speckled texture that shifts from deep ocean blue to soft celadon. Available as individual pieces or curated sets of four — mix and match to build a table with character.",
    price: 10.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg",
    tags: ["plate", "bowl", "mug", "ceramic", "reactive-glaze", "dinnerware", "teal"],
    notes: "Reactive glaze · Microwave safe · Dishwasher safe",
    available: true,
    variants: [
        { id: "retro-dinnerware-dinner-plate-4pcs", label: "Dinner Plate × 4", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248630890577" },
        { id: "retro-dinnerware-bowl-4pcs", label: "Bowl × 4", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248630923345" },
        { id: "retro-dinnerware-mug-4pcs", label: "Mug × 4", price: 34.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248630956113" },
        { id: "retro-dinnerware-side-plate-4pcs", label: "Side Plate × 4", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248630988881" },
        { id: "retro-dinnerware-4pcs-set", label: "4-Piece Place Setting", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631021649" },
        { id: "retro-dinnerware-bowl-single", label: "Bowl (Single)", price: 10.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631054417" },
        { id: "retro-dinnerware-mug-single", label: "Mug (Single)", price: 12.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631087185" },
        { id: "retro-dinnerware-dinner-plate-single", label: "Dinner Plate (Single)", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631119953" },
        { id: "retro-dinnerware-side-plate-single", label: "Side Plate (Single)", price: 10.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/4_1YooHa8CNezesUVd4FKrJD_1774801329334_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qYXBhbmVzZV9pcnJlZ3VsYXJfZGlubmVyX3BsYXRl_ad130df0_f30644ed.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59248631152721" }
      ],
    crossSells: ["japanese-ceramic-spoon-set", "japanese-sake-set", "jujube-wood-serving-basin"],
  },
  {
    id: "feast-7",
    slug: "black-walnut-resin-tray",
    name: "Black Walnut Resin River Tray",
    headline: "The Dark Surface",
    hookLine: "Handcrafted walnut tray with a river of resin running through its centre — a functional work of art.",
    description:
      "A stunning serving tray carved from solid black walnut with a translucent resin river flowing through the centre. The contrast between the rich, dark wood grain and the luminous resin creates a piece that is equal parts functional tray and sculptural art. Available with clear (transparent) or blue resin, in two sizes. Each tray is unique due to the natural variations in the walnut grain.",
    price: 34.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_h5yR1lOBdACYrN0JjtB3NO_1774801355643_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFja193YWxudXRfc2VydmluZ190cmF5_b3f7bd20_edd73394.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-7-dimensions_04dfdf6e.jpg"],
    tags: ["tray", "walnut", "wood", "serving", "resin", "river", "epoxy"],
    notes: "Solid black walnut · Epoxy resin river · Food-safe finish",
    available: true,
    crossSells: ["acacia-serving-bowl", "jujube-wood-serving-basin", "acacia-wood-serving-plate"],
      variants: [
        { id: "walnut-resin-tray-transparent-29cm", label: "Clear Resin — 29cm", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_h5yR1lOBdACYrN0JjtB3NO_1774801355643_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFja193YWxudXRfc2VydmluZ190cmF5_b3f7bd20_edd73394.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901057617" },
        { id: "walnut-resin-tray-blue-29cm", label: "Blue Resin — 29cm", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_h5yR1lOBdACYrN0JjtB3NO_1774801355643_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFja193YWxudXRfc2VydmluZ190cmF5_b3f7bd20_edd73394.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901090385" },
        { id: "walnut-resin-tray-blue-36cm", label: "Blue Resin — 36cm", price: 72.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_h5yR1lOBdACYrN0JjtB3NO_1774801355643_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFja193YWxudXRfc2VydmluZ190cmF5_b3f7bd20_edd73394.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901123153" },
        { id: "walnut-resin-tray-blue-plate", label: "Blue Resin Plate", price: 34.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_h5yR1lOBdACYrN0JjtB3NO_1774801355643_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFja193YWxudXRfc2VydmluZ190cmF5_b3f7bd20_edd73394.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901155921" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/acacia-bowl-shopify_18ee8ae6.jpg",
    tags: ["bowl", "acacia", "wood", "serving", "fruit"],
    notes: "Solid acacia · Hand-finished · Dark walnut grain · Multiple sizes",
    available: true,
    variants: [
      { id: "feast-8-s", label: "Small (12×6cm)", price: 28.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59241557721169"},
      { id: "feast-8-m", label: "Medium (18×7.5cm)", price: 48.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59241557786705"},
      { id: "feast-8-l", label: "Large (24×8cm)", price: 68.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59241557852241"}],
    crossSells: ["jujube-wood-serving-basin", "acacia-wood-serving-plate", "black-walnut-resin-tray"],
  },
  {
    id: "feast-9",
    slug: "jujube-wood-serving-basin",
    name: "Jujube Wood Serving Basin",
    headline: "The Generous Bowl",
    hookLine: "A deep basin carved from solid wood — for salads, fruit, or centrepiece arrangements.",
    description:
      "A generous serving basin hand-carved from solid natural wood. Each piece is unique in shape, size, and grain pattern — no two are alike. The warm, organic form makes it equally suited to serving salads, displaying fruit, or anchoring a table as a sculptural centrepiece. Available in two diameter ranges.",
    price: 58.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/6_oWQNG9GJH3EqBrrdX5CaOs_1774801319016_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9qdWp1YmVfd29vZF9zZXJ2aW5nX2Jhc2lu_7101675f_89b5623c.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-9-dimensions_a981c7ad.jpg"],
    tags: ["basin", "jujube", "wood", "serving", "large"],
    notes: "Jujube wood · Hand-carved · Food-safe finish",
    available: true,
    variants: [
        { id: "jujube-wood-serving-basin-small", label: "Small (16–20cm diameter)", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-9_16To20Cm_d564a987.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913411153" },
        { id: "jujube-wood-serving-basin-large", label: "Large (20–24cm diameter)", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-9_20To24Cm_da21f702.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913443921" }
      ],
    crossSells: ["acacia-serving-bowl", "acacia-wood-serving-plate", "black-walnut-resin-tray"],
  },
  {
    id: "feast-10",
    slug: "acacia-wood-serving-plate",
    name: "Acacia Wood Serving Plate",
    headline: "The Quiet Surface",
    hookLine: "Hand-polished Philippine acacia plates in five shapes — for snacks, cheese, or everyday serving.",
    description:
      "Carved from solid Philippine acacia and hand-polished to a smooth, satin finish. Each plate showcases the wood’s natural grain — rich swirls of honey and walnut tones that make every piece unique. Available in five shapes and sizes, from a compact square to a generous rectangular platter. Ideal for serving snacks, cheese, bread, or as a decorative tray.",
    price: 14.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/7_cYtwWWqJZM8E12sp1BLDSO_1774801329804_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ydXN0aWNfbG9nX3NuYWNrX3BsYXRl_3d20143b_bc5f28d2.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10-dimensions_1b0a7738.jpg"],
    tags: ["plate", "acacia", "wood", "serving", "snack"],
    notes: "Philippine acacia · Hand-polished · Food-safe finish",
    available: true,
    variants: [
        { id: "acacia-plate-rectangle-25cm", label: "Rectangle (25 × 12.5cm)", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10_C_c2b53791.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913706065" },
        { id: "acacia-plate-small-square", label: "Small Square (12.5cm)", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10_E_2f6ddc86.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913738833" },
        { id: "acacia-plate-large-rectangle", label: "Large Rectangle (30 × 15cm)", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10_D_cb08a726.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913771601" },
        { id: "acacia-plate-medium-rectangle", label: "Medium Rectangle (20 × 12cm)", price: 16.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10_B_2541bd09.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913804369" },
        { id: "acacia-plate-small-rectangle", label: "Small Rectangle (15 × 10cm)", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-10_A_6f0721ee.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913837137" }
      ],
    crossSells: ["acacia-serving-bowl", "black-walnut-resin-tray", "rattan-serving-tray"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wooden-water-cup-fix_5431b50a_542dd6dd.jpg",
    tags: ["cup", "wood", "handmade", "natural", "drinking"],
    notes: "Solid wood · Handmade · Food-safe lacquer",
    available: false,
    crossSells: ["stoneware-travel-tea-set", "acacia-wood-serving-plate", "acacia-serving-bowl"],
      variants: [
        { id: "handmade-wooden-cup-wooden-cup", label: "Natural Wood", price: 22.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-11_Wooden-Cup_e4b2b791.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914328657" }
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
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/9_uPuVsVxCLyyvnnhGI2ZDy0_1774801308305_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9iYW1ib29fZ2xhc3Nfc3RvcmFnZV9jb250YWluZXI_55add6b1_042359ad.jpg",
    tags: ["container", "glass", "bamboo", "storage", "airtight"],
    notes: "Borosilicate glass · Bamboo lid · Airtight seal",
    available: true,
    variants: [
      { id: "bamboo-glass-crisper-s", label: "Small", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/9_uPuVsVxCLyyvnnhGI2ZDy0_1774801308305_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9iYW1ib29fZ2xhc3Nfc3RvcmFnZV9jb250YWluZXI_55add6b1_042359ad.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914820177" },
      { id: "bamboo-glass-crisper-m", label: "Medium", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/9_uPuVsVxCLyyvnnhGI2ZDy0_1774801308305_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9iYW1ib29fZ2xhc3Nfc3RvcmFnZV9jb250YWluZXI_55add6b1_042359ad.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914918481" },
      { id: "bamboo-glass-crisper-l", label: "Large", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/9_uPuVsVxCLyyvnnhGI2ZDy0_1774801308305_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9iYW1ib29fZ2xhc3Nfc3RvcmFnZV9jb250YWluZXI_55add6b1_042359ad.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914885713" },
      { id: "bamboo-glass-crisper-set", label: "Complete Set", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/9_uPuVsVxCLyyvnnhGI2ZDy0_1774801308305_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9iYW1ib29fZ2xhc3Nfc3RvcmFnZV9jb250YWluZXI_55add6b1_042359ad.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914852945" }],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/13_O8zsgqgOENs4nD9bd9DMpM_1774599066542_na1fn_L2hvbWUvdWJ1bnR1L2FjYWNpYV9zYWx0X3BlcHBlcl9taWxs_154712be_141f7ec5.webp",
    tags: ["salt", "pepper", "mill", "grinder", "acacia", "wood"],
    notes: "Acacia wood · Ceramic grinder · Adjustable coarseness",
    available: true,
    variants: [
      { id: "feast-14-base", label: "Wooden Display Base", price: 38.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59243760877649" },
      { id: "feast-14-6", label: "6-Inch Mill (170g)", price: 58.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59243760943185"},
      { id: "feast-14-8", label: "8-Inch Mill (190g)", price: 68.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59243760910417"},
      { id: "feast-14-10", label: "10-Inch Mill (275g)", price: 78.00, available: true , shopifyVariantId: "gid://shopify/ProductVariant/59243760975953"}],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kb-1_3e705eb9.jpg",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kb-2_9c489e93.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kb-3_d2d150f6.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kb-4_e134e00e.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/kb-5_018571d4.jpg"
    ],
    tags: ["knife-block", "acacia", "magnetic", "kitchen"],
    notes: "Solid acacia · Rare-earth magnets · Holds full set",
    available: true,
    crossSells: ["ebony-cutting-board", "teak-kitchen-utensil-set", "acacia-salt-pepper-mill"],
      variants: [
        { id: "acacia-magnetic-knife-block-yellow", label: "Natural Acacia", price: 148.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-15_Yellow_da645d16.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914951249" }
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
        { id: "hand-painted-ceramic-oil-cruet-olive-green", label: "Olive Green", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-16_Olive-Green_b3d40e52.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915541073" }
      ],
    crossSells: ["ceramic-seasoning-pot-set", "acacia-salt-pepper-mill", "retro-reactive-glaze-dinnerware"],
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
        { id: "rattan-serving-tray-brown", label: "Brown", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-17_Brown_97dee588.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250916098129" }
      ],
    crossSells: ["black-walnut-resin-tray", "acacia-serving-bowl", "acacia-salt-pepper-mill"],
  },
  {
    id: "feast-19",
    slug: "japanese-wooden-coaster-set",
    name: "Japanese Wooden Coaster Set",
    headline: "The Small Detail",
    hookLine: "Minimalist wooden coasters with a holder — the detail that completes a table.",
    description:
      "A set of six wooden coasters in a matching holder — minimalist, warm, and precisely the kind of small detail that separates a considered home from a merely furnished one. Each coaster is sanded smooth with bevelled edges that prevent cups from sliding. The coasters are waterproof-treated and come with a matching wooden holder for tidy storage.",
    price: 22.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-wooden-coaster-set_1dab6171_51b2002e.jpg",
    tags: ["coaster", "wood", "japanese", "minimalist", "set"],
    notes: "Set of 6 · Wooden holder included · Waterproof · Bevelled edges",
    available: true,
    crossSells: ["acacia-wood-serving-plate", "stoneware-travel-tea-set", "multi-function-grater"],
      variants: [
        { id: "japanese-wooden-coaster-set-beech-6-piece-set", label: "Beech 6-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-19_Beech-_-6-Piece-Set_8b16ba16.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915606609" },
        { id: "japanese-wooden-coaster-set-walnut-coaster-set-a", label: "Walnut Coaster Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-19_Walnut-_-Coaster-Set-A_f9e96031.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915934289" },
        { id: "japanese-wooden-coaster-set-walnut-6-piece-set", label: "Walnut 6-Piece Set", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-19_Walnut-_-6-Piece-Set_d6509f05.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250916065361" }
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
    notes: "Aluminium alloy · 35.5 × 20.5 × 0.3 cm · No electricity · Dishwasher safe",
    available: true,
    crossSells: ["ebony-cutting-board", "black-walnut-cutting-board", "teak-kitchen-utensil-set"],
      variants: [
        { id: "rapid-defrosting-board-1", label: "Standard (35.5 × 20.5 cm)", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-20_6Style-_-1Pc_cc2c6f47.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59256196563025" }
      ]
  },
  {
    id: "feast-21",
    slug: "ebony-cutting-board",
    name: "Ebony Cutting Board",
    headline: "The Dark Edge",
    hookLine: "Dense ebony wood cutting board with handle — naturally antimicrobial, dramatically dark.",
    description:
      "A cutting board in ebony wood with an integrated handle — one of the densest, hardest woods available. The dramatic dark colour and fine grain make it as much a display piece as a kitchen tool. Ebony is naturally antimicrobial and resists knife marks better than softer woods. Available in six sizes from 28 × 18 cm to 45 × 30 cm, all 2 cm thick.",
    price: 48.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-main_765d4900.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-handle_b115d5db.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-detail_ecb6fb8e.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-sizes_d1960837.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/cb-lifestyle_6ba64234.jpg", "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21-dimensions_486cb492.jpg"],
    tags: ["cutting-board", "ebony", "wood", "kitchen"],
    notes: "Ebony wood · Naturally antimicrobial · Dense grain",
    available: true,
    variants: [
        { id: "ebony-cutting-board-28x18", label: "28 × 18 cm", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21_Ebony-Cutting-Board-_-28X18X2.5Cm_3b5f10c1.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251311837265" },
        { id: "ebony-cutting-board-33x22", label: "33 × 22 cm", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21_Ebony-Cutting-Board-_-33X22X2.5Cm_fbc103fd.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251311870033" },
        { id: "ebony-cutting-board-36x24", label: "36 × 24 cm", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21_Ebony-Cutting-Board-_-36X24X2.5Cm_0b0b78d3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251311902801" },
        { id: "ebony-cutting-board-38x26", label: "38 × 26 cm", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21_Ebony-Cutting-Board-_-38X26X2.5Cm_cd5a9032.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251311935569" },
        { id: "ebony-cutting-board-40x28", label: "40 × 28 cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21_Ebony-Cutting-Board-_-40X28X2.5Cm_b3f7bf8c.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251311968337" },
        { id: "ebony-cutting-board-45x30", label: "45 × 30 cm", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-21_Ebony-Cutting-Board-_-45X30X2.5Cm_93240885.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251312001105" }
      ],
    crossSells: ["black-walnut-cutting-board", "teak-kitchen-utensil-set", "black-walnut-resin-tray"],
  },
  {
    id: "feast-22",
    slug: "black-walnut-cutting-board",
    name: "Black Walnut Cutting Board",
    headline: "The Workhorse",
    hookLine: "Thick black walnut board with juice groove — the board you reach for every day.",
    description:
      "A thick black walnut cutting board with a juice groove and generous proportions — the kind of board that becomes the centre of your kitchen. Black walnut is self-healing, meaning light knife marks close over time, and the deep chocolate colour hides stains gracefully.",
    price: 42.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/13_YNbiGfSvxxxG7ygySVfRs7_1774801324944_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9ibGFjay13YWxudXQtY3V0dGluZy1ib2FyZA_cba0bb79_f531457b.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-22-dimensions_01f029fc.jpg"],
    tags: ["cutting-board", "walnut", "wood", "kitchen"],
    notes: "Black walnut · Juice groove · Self-healing surface",
    available: true,
    variants: [
        { id: "black-walnut-cutting-board-round", label: "Round", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-22_Round_ed94f722.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310592081" },
        { id: "black-walnut-cutting-board-rectangular-l", label: "Rectangular Large", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-22_Rectangula-L_7266371a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310624849" },
        { id: "black-walnut-cutting-board-rectangular-s", label: "Rectangular Small", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-22_Rectangular-S_325a4b96.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310657617" }
      ],
    crossSells: ["ebony-cutting-board", "black-walnut-resin-tray", "teak-kitchen-utensil-set"],
  },
  {
    id: "feast-23",
    slug: "ceramic-butter-dish",
    name: "European Ceramic Butter Dish",
    headline: "The Soft Keeper",
    hookLine: "Hand-painted ceramic butter dish with lid — European in-glaze colour artistry for your table.",
    description:
      "A European-style ceramic butter dish with a fitted lid, crafted in pottery with delicate in-glaze colour patterns. The rectangular shape accommodates a standard butter block, and the lid keeps butter fresh at room temperature. Each piece features hand-painted botanical motifs in the European tradition. Material: Pottery. Style: European. Dishwasher safe. Approximate weight: 0.63 kg. Size: 8 inches.",
    price: 32.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-butter-dish_f1e41069_44e0112b.jpg",
    tags: ["butter", "dish", "ceramic", "european", "kitchen", "in-glaze"],
    notes: "Pottery · In-glaze colour · 8 inches · 0.63 kg · European style",
        variants: [
        { id: "ceramic-butter-dish-green-polka", label: "Green Polka", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-butter-dish_f1e41069_44e0112b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59256195940433" }
      ],
    available: true,
    crossSells: ["ceramic-seasoning-pot-set", "hand-painted-ceramic-oil-cruet", "retro-reactive-glaze-dinnerware"],
  },
  {
    id: "feast-24",
    slug: "multi-function-grater",
    name: "Multi-Function Grater",
    headline: "The Sharp Edge",
    hookLine: "Stainless steel grater with four surfaces — fine, medium, coarse, and slicer.",
    description:
      "A stainless steel box grater with four distinct surfaces — fine for hard cheese and nutmeg, medium for soft cheese and vegetables, coarse for potatoes and cabbage, and a slicer for clean, even cuts. The non-slip base and comfortable handle make it stable during use.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-10_651b26cd_f80d2ee7.webp",
    tags: ["grater", "stainless-steel", "kitchen", "multi-function"],
    notes: "Stainless steel · 4 surfaces · Non-slip base",
    available: true,
    crossSells: ["hand-crank-pasta-maker", "teak-kitchen-utensil-set", "rapid-defrosting-board"],
      variants: [
        { id: "multi-function-grater-bagged", label: "Basic Set", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-24_Bagged_bbed9d2f.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310919761" },
        { id: "multi-function-grater-two-cheese-grates-bo", label: "Double Grater Box Set", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-24_Two-Cheese-Grates-Boxed_1b52be53.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310952529" },
        { id: "multi-function-grater-single-cheese-planer", label: "Planer Box Set", price: 24.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-24_Single-Cheese-Planer-Set-Boxe_6b0d6d57.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310985297" },
        { id: "multi-function-grater-boxed", label: "Premium Box Set", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-24_Boxed_d84631ae.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251311018065" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hand-crank-pasta-maker_28d0f9c6_341df55f.jpg",
    tags: ["pasta", "maker", "hand-crank", "kitchen", "cooking"],
    notes: "Chrome-plated · Adjustable thickness · Table clamp included",
    available: true,
    crossSells: ["teak-kitchen-utensil-set", "multi-function-grater", "retro-reactive-glaze-dinnerware"],
      variants: [
        { id: "hand-crank-pasta-maker-silver", label: "Classic Silver", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/hand-crank-pasta-maker_28d0f9c6_341df55f.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251307872337" }
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
    crossSells: ["japanese-stoneware-mug", "nordic-espresso-cup-saucer", "acacia-magnetic-knife-block"],
  },
  {
    id: "feast-27",
    slug: "japanese-sake-set",
    name: "Japanese Sake Set",
    headline: "The Evening Ritual",
    hookLine: "A ceramic tokkuri and ochoko cups — for warm sake and quiet evenings.",
    description:
      "A traditional Japanese sake set in a matte ceramic glaze that feels warm in the hand. The tokkuri (pouring vessel) is designed for warming sake in a hot water bath, and the small ochoko cups encourage the Japanese practice of pouring for others. Available as a jug or individual cups.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/2_umcPIyWr84IjxiTRZVEqhg_1774599070451_na1fn_L2hvbWUvdWJ1bnR1L2phcGFuZXNlX3Nha2Vfc2V0_f12fd4f3_ecdeb8da.webp",
    tags: ["sake", "japanese", "ceramic", "set", "drinking"],
    notes: "Ceramic · 1 tokkuri + 4 cups · Microwave safe",
    available: true,
    crossSells: ["japanese-matcha-ceremony-set", "stoneware-travel-tea-set", "retro-reactive-glaze-dinnerware"],
      variants: [
        { id: "japanese-sake-set-black-gold-jug", label: "Black & Gold Sake Jug", price: 52.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-27_Black-Gold-Jug_bfa506e4.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304759377" },
        { id: "japanese-sake-set-black-gin-wine-cup", label: "Black Sake Cup", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/feast-27_Black-Gin-Wine-Cup_a0df4074.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304792145" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-6_7c8d1cb6_756ad08a.webp",
    tags: ["mug", "ceramic", "japanese", "vintage", "reactive-glaze"],
    notes: "Reactive glaze · 350ml · Microwave safe",
    available: false,
    variants: [
      { id: "vintage-japanese-ceramic-coffee-mug-cup-200ml", label: "Cup · 200ml", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-6_7c8d1cb6_756ad08a.webp", shopifyVariantId: "gid://shopify/ProductVariant/59241560014929" }],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-fix_8403f171_1f1e6e4a.jpg",
    tags: ["mug", "stoneware", "japanese", "thick-walled"],
    notes: "Stoneware · 400ml · Keeps drinks warm",
    available: true,
    variants: [
        { id: "stoneware-mug-yellow", label: "Yellow", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-fix_8403f171_1f1e6e4a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251312033873" },
        { id: "stoneware-mug-green", label: "Green", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-fix_8403f171_1f1e6e4a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251312066641" },
        { id: "stoneware-mug-khaki", label: "Khaki", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-fix_8403f171_1f1e6e4a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251312099409" },
        { id: "stoneware-mug-set", label: "Set of Three", price: 68.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-stoneware-mug-fix_8403f171_1f1e6e4a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251312132177" }
      ],
    crossSells: ["nordic-espresso-cup-saucer", "ceramic-pour-over-dripper", "bamboo-glass-storage-container"],
  },
  {
    id: "feast-31",
    slug: "nordic-espresso-cup-saucer",
    name: "Nordic Espresso Cup & Saucer",
    headline: "The Small Pleasure",
    hookLine: "A ceramic espresso cup with matching saucer — for the person who takes their coffee seriously.",
    description:
      "A ceramic espresso cup with a matching saucer in a matte Nordic glaze — the kind of set that makes a single shot of espresso feel like an event. The cup is sized for a proper double shot (80ml), and the saucer has a subtle indent that keeps the cup centred.",
    price: 18.00,
    collection: "FEAST",
    collectionSlug: "feast",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp",
    tags: ["espresso", "cup", "saucer", "ceramic", "nordic"],
    notes: "Ceramic · 80ml · Cup + saucer set",
    available: true,
    variants: [
        { id: "nordic-espresso-honey-pomelo-full", label: "Honey Pomelo — Cup, Saucer & Spoon", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312164945" },
        { id: "nordic-espresso-olive-green-full", label: "Olive Green — Cup, Saucer & Spoon", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312197713" },
        { id: "nordic-espresso-honey-pomelo-spoon", label: "Honey Pomelo — Cup & Spoon", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312230481" },
        { id: "nordic-espresso-olive-green-spoon", label: "Olive Green — Cup & Spoon", price: 26.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312263249" },
        { id: "nordic-espresso-honey-pomelo-cup", label: "Honey Pomelo — Single Cup", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312296017" },
        { id: "nordic-espresso-olive-green-cup", label: "Olive Green — Single Cup", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/gather-4_4f727665_14db9acd.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251312328785" }
      ],
    crossSells: ["japanese-stoneware-mug", "ceramic-pour-over-dripper", "black-walnut-resin-tray"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser_545cee70_f4d85c72.jpg",
    tags: ["diffuser", "aroma", "led", "ultrasonic", "home-fragrance"],
    notes: "Ultrasonic · Warm LED · 300ml capacity · Auto shut-off",
    available: true,
    crossSells: ["fireplace-aroma-diffuser", "ceramic-incense-holder", "dried-xinjiang-lavender"],
      variants: [
        { id: "led-aroma-diffuser-light-oak", label: "Light Oak", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser_545cee70_f4d85c72.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305218129" },
        { id: "led-aroma-diffuser-dark-walnut", label: "Dark Walnut", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/led-aroma-diffuser_545cee70_f4d85c72.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305250897" }
      ]
  },
  {
    id: "adorn-2",
    slug: "nordic-figurine-monochrome",
    name: "Nordic Figurine — Monochrome",
    headline: "The Quiet Companion",
    hookLine: "White resin figurine with black spots — minimalist, sculptural, and quietly bold.",
    description:
      "A minimalist decorative figurine in matte white resin with black spot detailing — the kind of object that adds personality to a shelf or mantel without demanding attention. Available in a tall, elegant silhouette or a rounded, compact form. The weight and finish give it a reassuring solidity.",
    price: 65.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist", "monochrome"],
    notes: "Matte white resin · Black spot detail · Two poses",
    variants: [
        { id: "nordic-figurine-mono-high", label: "Tall Silhouette", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309379665" },
        { id: "nordic-figurine-mono-round", label: "Round Form", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309412433" }
      ],
    available: true,
    crossSells: ["abstract-figurine", "fireplace-aroma-diffuser", "ceramic-incense-holder"],
  },
  {
    id: "adorn-2b",
    slug: "nordic-figurine-golden",
    name: "Nordic Figurine — Golden",
    headline: "The Warm Accent",
    hookLine: "Yellow resin figurine with black dot accents — a warm, playful statement piece.",
    description:
      "A minimalist decorative figurine in matte yellow resin with black dot accents — warm, playful, and quietly bold. Available in a tall, elegant silhouette or a rounded, compact form. The weight and finish give it a reassuring solidity that belies its whimsical colour.",
    price: 65.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist", "golden"],
    notes: "Matte yellow resin · Black dot detail · Two poses",
    variants: [
        { id: "nordic-figurine-gold-high", label: "Tall Silhouette", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309445201" },
        { id: "nordic-figurine-gold-round", label: "Round Form", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309477969" }
      ],
    available: true,
    crossSells: ["abstract-figurine", "led-aroma-diffuser", "macrame-wall-hanging"],
  },
  {
    id: "adorn-2c",
    slug: "nordic-figurine-blush",
    name: "Nordic Figurine — Blush",
    headline: "The Soft Statement",
    hookLine: "White resin figurine with red dot accents — soft, feminine, and subtly striking.",
    description:
      "A minimalist decorative figurine in matte white resin with red dot accents — soft, feminine, and subtly striking. Available in a tall, elegant silhouette or a rounded, compact form. The weight and finish give it a reassuring solidity.",
    price: 65.00,
    collection: "ADORN",
    collectionSlug: "adorn",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg",
    tags: ["figurine", "nordic", "decorative", "resin", "minimalist", "blush"],
    notes: "Matte white resin · Red dot detail · Two poses",
    variants: [
        { id: "nordic-figurine-blush-high", label: "Tall Silhouette", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309510737" },
        { id: "nordic-figurine-blush-round", label: "Round Form", price: 65.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/nordic-decorative-figurine_a74b89cc_6a022001.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309543505" }
      ],
    available: true,
    crossSells: ["abstract-figurine", "macrame-wall-hanging", "ceramic-incense-holder"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/19_D3IdJqGKNigmvANciogXFl_1774801330247_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9tYWNyYW1lLXdhbGwtaGFuZ2luZw_0a1f430f_00b1bc90.jpg",
    tags: ["macrame", "wall-hanging", "cotton", "textile", "bohemian"],
    notes: "Hand-knotted cotton · Wooden dowel · Multiple sizes",
    available: true,
    variants: [
        { id: "macrame-wall-hanging-beige", label: "Beige", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-4_Beige_a5fa9eb2.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308560465" }
      ],
    crossSells: ["chunky-knit-cushion-cover", "tufted-tassel-cushion", "led-aroma-diffuser"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/20_culZmmwAa0oXGnliXCigNL_1774801403133_na1fn_L2hvbWUvdWJ1bnR1L3dlYmRldi1zdGF0aWMtYXNzZXRzL25ldy1wcm9kdWN0cy9jZXJhbWljX2J1ZF92YXNl_f935a947_d7230385.jpg",
    tags: ["vase", "ceramic", "bud", "minimalist", "small"],
    notes: "Ceramic · Matte glaze · Multiple colours",
    available: false,
    variants: [
        { id: "ceramic-bud-vase-brown", label: "Earth Brown", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-5_Brown_cbe5cb87.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306463313" },
        { id: "ceramic-bud-vase-black", label: "Matte Black", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-5_Black_6834bff5.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306496081" },
        { id: "ceramic-bud-vase-green", label: "Sage Green", price: 18.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306528849", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-5-black-dNf5rN69tQ33zABp5DJ5LM_a1cae79d.jpg" },
        { id: "ceramic-bud-vase-orange", label: "Burnt Orange", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-5_Orange_4cc45b8a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306561617" }],
    crossSells: ["mixed-dried-flower-bouquet", "ceramic-incense-holder", "fireplace-aroma-diffuser"],
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
    crossSells: ["led-aroma-diffuser", "fireplace-aroma-diffuser", "dried-xinjiang-lavender"],
      variants: [
        { id: "ceramic-incense-holder-incense-stick-and-ba", label: "Stick & Backflow Set", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-7_Incense-Stick-And-Backflow-Inc_0a6c6819.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305349201" },
        { id: "ceramic-incense-holder-incense-stick", label: "Stick Holder Only", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-7_Incense-Stick_e2033ead.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305381969" }
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
        { id: "abstract-figurine-1style", label: "Thinker — Matte White", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305644113" },
        { id: "abstract-figurine-gold-1style", label: "Thinker — Gold", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305676881" },
        { id: "abstract-figurine-gold-2style", label: "Reader — Gold", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305709649" },
        { id: "abstract-figurine-gold-3style", label: "Dreamer — Gold", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305742417" },
        { id: "abstract-figurine-2style", label: "Reader — Matte White", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305775185" },
        { id: "abstract-figurine-3style", label: "Dreamer — Matte White", price: 42.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/5_vuklseE9dxJx7voH81mTnb_1774599096409_na1fn_L2hvbWUvdWJ1bnR1L3NpbGVuY2VfZmlndXJpbmU_09e5f1f5_918fb661.webp", shopifyVariantId: "gid://shopify/ProductVariant/59251305807953" }
      ],
    available: false,
    crossSells: ["macrame-wall-hanging", "fireplace-aroma-diffuser", "led-aroma-diffuser"],
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
    crossSells: ["led-aroma-diffuser", "ceramic-incense-holder", "japanese-bedside-lamp"],
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
    slug: "dried-xinjiang-lavender",
    name: "Dried Xinjiang Lavender",
    headline: "The Quiet Scent",
    hookLine: "500g of dried Xinjiang lavender buds — six grades from premium sachet-fill to everyday aromatherapy.",
    description:
      "Pure dried lavender buds harvested in Xinjiang's Yili Valley — China's lavender heartland, where altitude and climate produce some of the most aromatic lavender in the world. Each 500g bag contains loose buds only (no pouch included), perfect for filling your own sachets, pillows, bath blends, or potpourri. Six grades available, from Supreme French Blue with near-zero impurity to cost-effective A-grade for bulk filling. Pairs beautifully with our Lavender Pouch for a complete sachet set.",
    price: 12.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-main_5df44ab9.jpg",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-pile_6101d1f1.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-hand_738c8b27.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/lavender-sachet-detail3_d34e6124.jpg"
    ],
    tags: ["lavender", "xinjiang", "dried", "buds", "fragrance", "aromatherapy", "sachet-fill"],
    notes: "500g per bag · Loose buds, no pouch · Dried Xinjiang Yili Valley lavender",
    available: true,
    crossSells: ["dried-lavender-bundle", "ceramic-incense-holder", "led-aroma-diffuser"],
      variants: [
        { id: "lavender-sachet-a", label: "Supreme French Blue", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-1_A_91f68fb5.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913476689" },
        { id: "lavender-sachet-b", label: "5A French Blue", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-1_B_b205a982.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913509457" },
        { id: "lavender-sachet-c", label: "Super British Blue", price: 20.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-1_C_90a8149c.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913542225" },
        { id: "lavender-sachet-d", label: "4A French Blue", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-1_D_c2f63642.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913574993" },
        { id: "lavender-sachet-e", label: "3A French Blue", price: 14.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-1_E_bdce06bb.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913607761" },
        { id: "lavender-sachet-f", label: "A French Blue", price: 12.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-1_F_ac285d78.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250913640529" }
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
    crossSells: ["dried-xinjiang-lavender", "mixed-dried-flower-bouquet", "magnetic-levitating-planter"],
      variants: [
        { id: "dried-lavender-bundle-white", label: "White", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914263121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-white-K9rHcG9dsSMAYmSMWt9a38_dc5b54a4.jpg" },
        { id: "dried-lavender-bundle-pink", label: "Pink", price: 22.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914295889", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-lavender-pink-SuXpfeRpfycgyj3BxoMTuT_03d02831.jpg" }
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
    crossSells: ["mixed-dried-flower-bouquet", "faux-potted-arrangement", "autumn-faux-flower-bouquet"],
  },
  {
    id: "bloom-5",
    slug: "mixed-dried-flower-bouquet",
    name: "Mixed Dried Flower Bouquet",
    headline: "The Gathered Bouquet",
    hookLine: "A curated mix of dried flowers — roses, daisies, grasses, and seed pods.",
    description:
      "A curated bouquet of mixed dried flowers — roses, daisies, grasses, and seed pods — arranged with the kind of casual elegance that looks like you gathered them on a country walk. Each bouquet is slightly different, reflecting the natural variation of dried botanicals.",
    price: 36.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mixed-dried-flower-bouquet_ac1959d8_d490d298.jpg",
    tags: ["dried", "flowers", "bouquet", "mixed", "natural"],
    notes: "Naturally dried · Mixed varieties · Each bouquet unique",
    available: true,
    crossSells: ["dried-lavender-bundle", "pampas-grass-bouquet", "dried-xinjiang-lavender"],
      variants: [
        { id: "mixed-dried-flower-bouquet-champagne", label: "Champagne", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309019217", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-champagne_c7dca804.jpg" },
        { id: "mixed-dried-flower-bouquet-orange", label: "Orange", price: 36.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309051985", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-orange_bcfd0230.jpg" },
        { id: "mixed-dried-flower-bouquet-pink", label: "Pink", price: 38.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309084753", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-pink_e82108c5.jpg" },
        { id: "mixed-dried-flower-bouquet-white", label: "White", price: 36.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309117521", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-white_5162ebce.jpg" },
        { id: "mixed-dried-flower-bouquet-mix-colors-4pcs", label: "Mix Colors 4Pcs", price: 58.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309150289", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-mix-colors_8e40f9f9.jpg" },
        { id: "mixed-dried-flower-bouquet-orange-2pcs", label: "Orange 2Pcs", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309183057", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-flower-orange-2pcs_8af05a8b.jpg" }
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
        { id: "dried-cotton-stem-1", label: "Single Stem", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-6_Q1Pcs_b2689149.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59256239325265" }
      ],
    crossSells: ["pampas-grass-bouquet", "mixed-dried-flower-bouquet", "magnetic-levitating-planter"],
  },
  {
    id: "bloom-7",
    slug: "autumn-harvest-wreath",
    name: "Autumn Harvest Wreath",
    headline: "The Seasonal Circle",
    hookLine: "A circular autumn wreath of leaves, berries, pumpkins, and seed pods — for doors, walls, and mantels.",
    description:
      "A circular autumn harvest wreath featuring faux leaves, berries, pumpkins, and seed pods — the kind of seasonal decoration that transforms a front door, a wall, or a mantel into something that feels like a harvest celebration. The colours are rich and warm without being garish.",
    price: 32.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-main_415f961e.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-2_e22145e4.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-3_c6e748f2.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-detail_fc5dccfd.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wreath-close_f53b88d6.jpg", "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-7-dimensions_3b8d2fd8.jpg"],
    tags: ["wreath", "autumn", "faux", "leaves", "seasonal"],
    notes: "Faux · Circular wreath · Flexible wire base",
    available: false,
    crossSells: ["autumn-faux-flower-bouquet", "faux-potted-arrangement", "macrame-wall-hanging"],
      variants: [
        { id: "autumn-harvest-garland-pumpkin-wreath-35x35", label: "Small (35 cm)", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-7_Pumpkin-Wreath-_-35X35Cm_3a6790f6.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310788689" },
        { id: "autumn-harvest-garland-pumpkin-wreath-40x40", label: "Medium (40 cm)", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-7_Pumpkin-Wreath-_-40X40Cm_319daf72.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310821457" },
        { id: "autumn-harvest-garland-pumpkin-wreath-45x45", label: "Large (45 cm)", price: 44.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-7_Pumpkin-Wreath-_-45X45Cm_0e0952df.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310854225" }
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
    price: 22.00,
    collection: "BLOOM",
    collectionSlug: "bloom",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-arrangement_b5a53838_4d99d835.jpg",
    tags: ["reed", "dried", "tall", "natural", "architectural"],
    notes: "Naturally dried · 100-120cm tall · Bundle of 10",
    available: false,
    crossSells: ["pampas-grass-bouquet", "mixed-dried-flower-bouquet", "faux-potted-arrangement"],
      variants: [
        { id: "dried-reed-arrangement-pink-fron", label: "Pink Fron", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311050833", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-pink-fron_31b0ac2f.jpg" },
        { id: "dried-reed-arrangement-black-beans", label: "Black Beans", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311083601", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-black-beans_8ffc60ab.jpg" },
        { id: "dried-reed-arrangement-sunflower", label: "Sunflower", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311116369", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-sunflower_2b875ac8.jpg" },
        { id: "dried-reed-arrangement-pink-franca-black-be", label: "Pink Franca Black Beans", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311149137", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-pink-black_353bc751.jpg" },
        { id: "dried-reed-arrangement-pink-franca-sunflowe", label: "Pink Franca Sunflower", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311181905", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-pink-sunflower_56e844d4.jpg" },
        { id: "dried-reed-arrangement-powder-franca-sunflo", label: "Powder Franca Sunflower With B", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251311214673", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dried-reed-powder-sunflower_2d7523c2.jpg" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/magnetic-levitating-planter_32662aeb_979f6259.jpg",
    tags: ["planter", "magnetic", "levitating", "floating", "modern"],
    notes: "Electromagnetic base · Rotating · Includes pot · USB powered",
    available: true,
    variants: [
        { id: "magnetic-levitating-planter-image-uk", label: "UK Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-9_Image-_-Uk_d8778d2a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305414737" },
        { id: "magnetic-levitating-planter-image-au", label: "AU Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-9_Image-_-Au_1c1264d3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305447505" },
        { id: "magnetic-levitating-planter-image-eu", label: "EU Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-9_Image-_-Eu_aae0ce0f.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305480273" },
        { id: "magnetic-levitating-planter-image-us", label: "US Plug", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bloom-9_Image-_-Us_e6fcafa8.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305513041" }
      ],
    crossSells: ["minimalist-ceramic-planter", "faux-potted-arrangement", "mushroom-night-light"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/autumn-faux-flower-bouquet_e0c7ebe8_0b3d00a9.jpg",
    tags: ["faux", "flowers", "autumn", "bouquet", "warm-tones"],
    notes: "High-quality faux · Flexible stems · Warm palette",
    available: true,
    crossSells: ["mixed-dried-flower-bouquet", "minimalist-ceramic-planter", "pampas-grass-bouquet"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/minimalist-ceramic-planter_e69a2f89_c31d2ab2.jpg",
    tags: ["planter", "ceramic", "minimalist", "matte", "drainage"],
    notes: "Ceramic · Drainage hole · Saucer included",
    available: true,
    variants: [
      { id: "bloom-11-s", label: "Small (12cm)", price: 22.00, available: true },
      { id: "bloom-11-m", label: "Medium (16cm)", price: 32.00, available: true },
      { id: "bloom-11-l", label: "Large (20cm)", price: 42.00, available: true }],
    crossSells: ["magnetic-levitating-planter", "faux-potted-arrangement", "pampas-grass-bouquet"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/woven-hanging-planter_c4b82362_df135370.jpg",
    tags: ["planter", "hanging", "woven", "jute", "macrame"],
    notes: "Natural jute · Adjustable cord · Fits pots up to 18cm",
    available: false,
    crossSells: ["minimalist-ceramic-planter", "macrame-wall-hanging", "faux-potted-arrangement"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-potted-arrangement_28bc1a8e_4998912e.jpg",
    tags: ["faux", "potted", "arrangement", "succulents", "ceramic"],
    notes: "Faux succulents · Ceramic pot included · Ready to display",
    available: true,
    crossSells: ["faux-banyan-tree", "minimalist-ceramic-planter", "magnetic-levitating-planter"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree_5145e5a4_2db5ad93.jpg",
    tags: ["faux", "banyan", "tree", "large", "statement"],
    notes: "Realistic leaves · Shapeable branches · 120cm tall",
    available: true,
    variants: [
        { id: "faux-banyan-tree-70cm", label: "70cm", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree_5145e5a4_2db5ad93.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59244810436689" },
        { id: "faux-banyan-tree-70cm-and105cm", label: "70cm + 105cm Set", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree_5145e5a4_2db5ad93.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59244810469457" },
        { id: "faux-banyan-tree-135cm-3forks", label: "135cm — 3 Forks", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree_5145e5a4_2db5ad93.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59244810502225" },
        { id: "faux-banyan-tree-140cm-3forks", label: "140cm — 3 Forks", price: 128.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/faux-banyan-tree_5145e5a4_2db5ad93.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59244810534993" }
      ],
    crossSells: ["faux-potted-arrangement", "minimalist-ceramic-planter", "magnetic-levitating-planter"],
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
      "A vintage-style Edison G95 spiral filament bulb on a hand-cut geometric wooden base — the kind of light that makes a room feel like a library in a country house. Each faceted base is individually cut and sanded from natural hardwood, giving every piece its own subtle character. The exposed spiral filament produces a warm amber glow that is gentle on the eyes and creates a cosy atmosphere. Bulb diameter 9.5 cm, total height 17.5 cm.",
    price: 16.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-lamp-main_e7d146bb.jpg",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-lamp-main_e7d146bb.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/edison-lamp-dimensions_b5e74761.jpg"
    ],
    tags: ["lamp", "edison", "vintage", "night-light", "warm", "geometric", "wood"],
    notes: "Geometric wooden base · G95 spiral bulb · 220V · 40W warm yellow",
    shopifyHandle: "edison-vintage-bulb-small-night-lamp-japanese-atmosphere",
        variants: [
        { id: "edison-vintage-night-lamp-g95-spiral-bulb-cn", label: "CN Plug", price: 16.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-1_G95-Spiral-Bulb-_-Cn_d27ea6d6.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896207953" },
        { id: "edison-vintage-night-lamp-g95-spiral-bulb-with", label: "With Adapter Plug", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-1_G95-Spiral-Bulb-_-With-Adapter-Plug_cadc7d40.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896240721" }
      ],
    available: false,
    crossSells: ["japanese-bedside-lamp", "ceramic-bedside-lamp", "mushroom-night-light"],
  },

  {
    id: "glow-3",
    slug: "wax-melt-aromatherapy-lamp",
    name: "Wax Melt Aromatherapy Lamp",
    headline: "The Scented Light",
    hookLine: "A Japanese-style bamboo wood candle warmer — melts wax from above for warm light and fragrance in one.",
    description:
      "A Japanese-style wax melt aromatherapy lamp with a natural bamboo wood frame and white conical shade — combining warm, ambient light with home fragrance in a single beautiful object. The inverted J-shaped frame holds a halogen bulb inside the cone that gently melts scented wax in the round bamboo dish below. The top-down heating method releases fragrance more evenly than traditional candle warmers, while the warm light creates a cosy atmosphere.",
    price: 23.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-lamp-main_b7e76183.jpg",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-lamp-main_b7e76183.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/wax-melt-lamp-dimensions_d77a16f2.jpg"
    ],
    tags: ["lamp", "wax-melt", "aromatherapy", "bamboo", "fragrance", "japanese"],
    notes: "Bamboo wood frame · White cone shade · Dimmer switch · Wax dish included",
    shopifyHandle: "japanese-style-melting-wax-lamp-decoration-bedroom-creative-personality-aromatherapy-light",
        variants: [
        { id: "wax-melt-lamp-220v-asia", label: "220V (Asia)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-3_White-Cover-Dimmer-Switch-_-Mainland-220_df7017e2.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250903875665" },
        { id: "wax-melt-lamp-110v-taiwan", label: "110V (Taiwan)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-3_White-Cover-Dimmer-Switch-_-Taiwan-110V2_c5b0267b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250903908433" },
        { id: "wax-melt-lamp-220v-hk-macau", label: "220V (HK/Macau)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-3_White-Cover-Dimmer-Switch-_-Hong-Kong-An_16bed4b8.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250903941201" },
        { id: "wax-melt-lamp-110v-us-japan", label: "110V (US/Japan)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-3_White-Cover-Dimmer-Switch-_-American-And_31f79e98.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250903973969" },
        { id: "wax-melt-lamp-220v-eu-korea", label: "220V (EU/Korea)", price: 23.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-3_White-Cover-Dimmer-Switch-_-Europeankore_a2d9f90b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250904006737" }
      ],
    available: false,
    crossSells: ["led-aroma-diffuser", "ceramic-incense-holder", "ceramic-bedside-lamp"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-garden-torch_9241f670_469e1658.jpg",
    tags: ["solar", "garden", "torch", "outdoor", "flame-effect"],
    notes: "Solar powered · Flickering flame effect · 8-10hr runtime",
    available: true,
    variants: [
        { id: "solar-garden-torch-96led-1pcs", label: "96 LED — Single", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-4_96Led-_-1Pcs_f3a681f3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308593233" },
        { id: "solar-garden-torch-51led-4pc", label: "51 LED — 4 Pack", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-4_51Led-_-4Pc_9bd258cf.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308626001" },
        { id: "solar-garden-torch-96led-4pc", label: "96 LED — 4 Pack", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-4_96Led-_-4Pc_658758bb.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308658769" },
        { id: "solar-garden-torch-51led-1pcs", label: "51 LED — Single", price: 58.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-4_51Led-_-1Pcs_0a942564.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308691537" }
      ],
    crossSells: ["solar-pathway-light", "magnetic-levitating-planter", "japanese-bedside-lamp"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/japanese-bedside-lamp_1fe34f7a_aa2f8b09.jpg",
    tags: ["lamp", "bedside", "japanese", "wood", "fabric"],
    notes: "Solid wood base · Fabric shade · Touch dimmer",
    available: true,
    crossSells: ["ceramic-bedside-lamp", "mushroom-night-light", "solar-garden-torch"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/solar-pathway-light_b9935389_886018b6.jpg",
    tags: ["solar", "pathway", "light", "garden", "outdoor"],
    notes: "Solar powered · Stainless steel · Warm white",
    available: true,
    variants: [
        { id: "solar-pathway-light-warm-white-3pcs", label: "Warm White — 3 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-6_Warm-White-3Pcs_786f6df2.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250900631633" },
        { id: "solar-pathway-light-white-light-3pcs", label: "Cool White — 3 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-6_White-Light-3Pcs_b21dfbc9.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250900664401" },
        { id: "solar-pathway-light-10-pcs-white-light", label: "Cool White — 10 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-6_10-Pcs-White-Light_f2df4cb6.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250900729937" },
        { id: "solar-pathway-light-10-pcs-warm-white", label: "Warm White — 10 Pack", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-6_10-Pcs-Warm-White_20fdf565.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250900959313" }
      ],
    crossSells: ["solar-garden-torch", "magnetic-levitating-planter", "ceramic-bedside-lamp"],
  },
  {
    id: "glow-7",
    slug: "motion-sensing-cabinet-light",
    name: "Motion-Sensing Cabinet Light",
    headline: "The Invisible Helper",
    hookLine: "Rechargeable LED strips that turn on when you open a door — for wardrobes, pantries, and drawers.",
    description:
      "Rechargeable LED light strips with a built-in motion sensor — they turn on automatically when you open a wardrobe, pantry, or drawer, and turn off when you close it. The warm white light is bright enough to see clearly without being harsh. Available in Silver and Black, in lengths from 20cm to 60cm.",
    price: 18.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-7_a6d7867e_421146b9.webp",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7-dimensions_a24d5f8f.jpg"],
    tags: ["led", "motion-sensor", "cabinet", "rechargeable", "practical"],
    notes: "Rechargeable USB-C · Motion sensor · Warm white · Magnetic mount",
    available: true,
    variants: [
        { id: "cabinet-light-silver-20cm", label: "Silver — 20cm", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Silver-Tricolor-Light-_-20Cm_ddce50a3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901188689" },
        { id: "cabinet-light-silver-30cm", label: "Silver — 30cm", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Silver-Tricolor-Light-_-30Cm_73b0e36d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901221457" },
        { id: "cabinet-light-silver-40cm", label: "Silver — 40cm", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Silver-Tricolor-Light-_-40Cm_0f456497.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901254225" },
        { id: "cabinet-light-silver-50cm", label: "Silver — 50cm", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Silver-Tricolor-Light-_-60Cm_e3c03507.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901286993" },
        { id: "cabinet-light-black-20cm", label: "Black — 20cm", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Black-Tricolor-Light-_-20Cm_48ae0022.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901319761" },
        { id: "cabinet-light-black-30cm", label: "Black — 30cm", price: 22.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Black-Tricolor-Light-_-30Cm_50452046.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901352529" },
        { id: "cabinet-light-black-40cm", label: "Black — 40cm", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Black-Tricolor-Light-_-40Cm_cafd94e1.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901385297" },
        { id: "cabinet-light-black-50cm", label: "Black — 50cm", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Black-Tricolor-Light-_-60Cm_0492b48a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901418065" },
        { id: "cabinet-light-black-60cm", label: "Black — 60cm", price: 36.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-7_Black-Tricolor-Light-_-80Cm_2dc94cee.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250901549137" }
      ],
    crossSells: ["mushroom-night-light", "bamboo-glass-storage-container", "solar-garden-torch"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/round-linen-table-lamp_03ddd497_ceda7e0f.jpg",
    tags: ["lamp", "linen", "round", "table", "ceramic"],
    notes: "Linen shade · Ceramic base · E27 bulb compatible",
    available: true,
    crossSells: ["square-linen-table-lamp", "japanese-bedside-lamp", "ceramic-bedside-lamp"],
      variants: [
        { id: "round-linen-table-lamp-uk", label: "UK Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-8_Uk_ca24aa33.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915082321" },
        { id: "round-linen-table-lamp-us", label: "US Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-8_Us_a9cc0d24.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915115089" },
        { id: "round-linen-table-lamp-eu", label: "EU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-8_Eu_9223bdef.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915147857" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/square-linen-table-lamp_90a4a291_f4fafab9.jpg",
    tags: ["lamp", "linen", "square", "table", "wood"],
    notes: "Linen shade · Wooden base · E27 bulb compatible",
    available: true,
    crossSells: ["round-linen-table-lamp", "japanese-bedside-lamp", "ceramic-bedside-lamp"],
      variants: [
        { id: "square-linen-table-lamp-photo-color-uk", label: "UK Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-9_Photo-Color-_-Uk_df52dcfd.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915442769" },
        { id: "square-linen-table-lamp-photo-color-eu", label: "EU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-9_Photo-Color-_-Eu_48a52f8e.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915475537" },
        { id: "square-linen-table-lamp-photo-color-us", label: "US Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-9_Photo-Color-_-Us_5147e305.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250915508305" }
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
    price: 88.00,
    collection: "GLOW",
    collectionSlug: "glow",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/adorn-1_4c56282f_81e8dad6.webp",
    tags: ["lamp", "bamboo", "woven", "table", "shadow-pattern"],
    notes: "Hand-woven bamboo · Shadow patterns · E27 bulb compatible",
    available: true,
    crossSells: ["round-linen-table-lamp", "ceramic-bedside-lamp", "japanese-bedside-lamp"],
      variants: [
        { id: "woven-bamboo-table-lamp-18x40cm-us", label: "Tall (18×40cm) / US Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_18X40Cm-_-Us_1fae866f.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305054289" },
        { id: "woven-bamboo-table-lamp-18x40cm-eu", label: "Tall (18×40cm) / EU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_18X40Cm-_-Eu_d1d2f789.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305087057" },
        { id: "woven-bamboo-table-lamp-18x40cm-uk", label: "Tall (18×40cm) / UK Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_18X40Cm-_-Uk_4c899fb2.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305119825" },
        { id: "woven-bamboo-table-lamp-18x40cm-au", label: "Tall (18×40cm) / AU Plug", price: 98.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_18X40Cm-_-Au_8cfee22d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305152593" },
        { id: "woven-bamboo-table-lamp-23x36cm-us", label: "Wide (23×36cm) / US Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_23X36Cm-_-Us_148ee350.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305185361" },
        { id: "woven-bamboo-table-lamp-23x36cm-eu", label: "Wide (23×36cm) / EU Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_23X36Cm-_-Eu_078e4358.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305218129" },
        { id: "woven-bamboo-table-lamp-23x36cm-uk", label: "Wide (23×36cm) / UK Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_23X36Cm-_-Uk_f52bf326.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305250897" },
        { id: "woven-bamboo-table-lamp-23x36cm-au", label: "Wide (23×36cm) / AU Plug", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-10_23X36Cm-_-Au_f15b09f5.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251305283665" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/ceramic-bedside-lamp_4d19a161_7a84acae.jpg",
    tags: ["lamp", "ceramic", "bedside", "reactive-glaze", "unique"],
    notes: "Reactive glaze · Linen shade · Each piece unique",
    available: true,
    variants: [
      { id: "glow-12-snd", label: "Sand", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-12-sand-39PFucBomL5XbcAYMrdjT6.webp" },
      { id: "glow-12-sge", label: "Sage", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-12-sage-aP76kxwRt2VafGZqM2gmUd.webp" },
      { id: "glow-12-blu", label: "Ocean Blue", price: 99.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/glow-12-blue-B7USbMnm4GshmkWquj2aFq.webp" }],
    crossSells: ["japanese-bedside-lamp", "round-linen-table-lamp", "woven-bamboo-table-lamp"],
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
    crossSells: ["motion-sensing-cabinet-light", "magnetic-levitating-planter", "solar-garden-torch"],
    variants: [
      { id: "mushroom-a-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design A", shopifyVariantId: "gid://shopify/ProductVariant/59250893684817", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-a-walnut-LqSZMeWNdBamHHmbp9B85z.webp" },
      { id: "mushroom-a-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design A", shopifyVariantId: "gid://shopify/ProductVariant/59250893717585", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-a-beech-kqgZSWReF5cUEXWLo6VzUk.webp" },
      { id: "mushroom-b-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design B", shopifyVariantId: "gid://shopify/ProductVariant/59250893750353", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-b-walnut-5GmbcxoWXW5MVCXgAkgc58.webp" },
      { id: "mushroom-b-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design B", shopifyVariantId: "gid://shopify/ProductVariant/59250893783121", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-b-beech-52v4HQEb3Qf8so4fgmAttj.webp" },
      { id: "mushroom-c-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design C", shopifyVariantId: "gid://shopify/ProductVariant/59250893815889", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-c-walnut-WQ8iRqRFZCguEKWz4QzyRH.webp" },
      { id: "mushroom-c-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design C", shopifyVariantId: "gid://shopify/ProductVariant/59250893848657", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-c-beech-MmZnefoqwiP2GxwL7rH5ks.webp" },
      { id: "mushroom-d-walnut", label: "Walnut", price: 22.00, available: true, designGroup: "Design D", shopifyVariantId: "gid://shopify/ProductVariant/59250893881425", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-d-walnut-MKXfDgxbuck7ztnvgjCLXx.webp" },
      { id: "mushroom-d-beech", label: "Beech", price: 22.00, available: true, designGroup: "Design D", shopifyVariantId: "gid://shopify/ProductVariant/59250893914193", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/mushroom-design-d-beech-ga6kpMdEGFAKzTguriw4gY.webp" }],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/bohemian-area-rug_de8776fb_3196a46c.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-1-dimensions_8d5095a2.jpg"],
    tags: ["rug", "bohemian", "woven", "area", "geometric"],
    notes: "Flat-weave · Machine washable · Multiple sizes",
    available: true,
    variants: [
        { id: "bohemian-area-rug-4style-60x90cm", label: "60×90cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-1_4Style-_-60X90Cm_cf3d3bec.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897125457" },
        { id: "bohemian-area-rug-4style-80x160cm", label: "80×160cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-1_4Style-_-80X160Cm_142a3e81.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897158225" },
        { id: "bohemian-area-rug-4style-80x120cm", label: "80×120cm", price: 88.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-1_4Style-_-80X120Cm_bdbc20ac.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250897190993" }
      ],
    crossSells: ["plush-round-rug", "plush-shag-rug", "chunky-knit-cushion-cover"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg",
    tags: ["rug", "shag", "plush", "soft", "deep-pile"],
    notes: "Deep pile · Non-slip backing · Multiple sizes",
    available: true,
    variants: [
        { id: "plush-shag-rug-beige-120x160cm", label: "Beige / 120X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898763857" },
        { id: "plush-shag-rug-white-100x160cm", label: "White / 100X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250898829393" },
        { id: "plush-shag-rug-beige-50x80cm", label: "Beige / 50X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250899058769" },
        { id: "plush-shag-rug-white-50x80cm", label: "White / 50X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250899517521" },
        { id: "plush-shag-rug-white-120x160cm", label: "White / 120X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250899648593" },
        { id: "plush-shag-rug-beige-100x160cm", label: "Beige / 100X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250899681361" },
        { id: "plush-shag-rug-white-80x160cm", label: "White / 80X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250899714129" },
        { id: "plush-shag-rug-white-40x60cm", label: "White / 40X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250899746897" },
        { id: "plush-shag-rug-beige-80x160cm", label: "Beige / 80X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250900074577" },
        { id: "plush-shag-rug-beige-40x60cm", label: "Beige / 40X", price: 78.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-shag-rug_a98aa96d_96f14d39.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250900107345" }
      ],
    crossSells: ["bohemian-area-rug", "plush-round-rug", "boucle-sphere-cushion"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/diatomite-bath-mat_70379962_81507473.jpg",
    tags: ["bath-mat", "diatomite", "stone", "quick-dry", "antimicrobial"],
    notes: "Diatomite earth · Quick-dry · Antimicrobial · Non-slip",
        variants: [
        { id: "diatomite-bath-mat-grey-40x30cm", label: "Grey / 40X", price: 48.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-3_Grey-_-40X30Cm_4053128f.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250896175185" }
      ],
    available: true,
    crossSells: ["bohemian-area-rug", "plush-shag-rug", "bamboo-glass-storage-container"],
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
    available: false,
    variants: [
        { id: "linen-placemats-original-hemp-color", label: "Natural Hemp", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914361425", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-4-natural-kY8wtKLGtykFAvApg3ewiq_1900aedc.jpg" },
        { id: "linen-placemats-white-32x44cm", label: "White", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-4_White-_-32X44Cm_af879fea.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914394193" },
        { id: "linen-placemats-caramel-colour-32x44", label: "Caramel", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-4_Caramel-Colour-_-32X44Cm_cd5197b9.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59250914492497" },
        { id: "linen-placemats-grey-blue-32x44cm", label: "Grey Blue", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59250914525265", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-4-grey-jEJyQbd9cmY6DCFXCZxNDz_9489c8c1.jpg" }
      ],
    crossSells: ["retro-reactive-glaze-dinnerware", "coral-fleece-throw-blanket", "plush-round-rug"],
  },
  {
    id: "dwell-5",
    slug: "linen-tablecloth",
    name: "Linen Tablecloth",
    headline: "The Gathered Table",
    hookLine: "A washed linen tablecloth that drapes beautifully — the foundation of a considered table.",
    description:
      "A washed linen tablecloth that drapes with the kind of casual elegance that makes a table look like it belongs in a French farmhouse. The pre-washed linen is soft from the first use and develops more character with every wash. Available in two colours and eight lengths from 35×120cm to 35×350cm.",
    price: 28.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-5-dimensions_e660391c.jpg"],
    tags: ["tablecloth", "linen", "washed", "table", "dining"],
    notes: "Washed linen · Machine washable · Multiple sizes",
    available: false,
    variants: [
        { id: "linen-tablecloth-royal-gray-35x120", label: "Royal Grey / 35X120", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251307905105" },
        { id: "linen-tablecloth-royal-gray-35x160", label: "Royal Grey / 35X160", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251307937873" },
        { id: "linen-tablecloth-royal-gray-35x180", label: "Royal Grey / 35X180", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251307970641" },
        { id: "linen-tablecloth-royal-gray-35x210", label: "Royal Grey / 35X210", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308003409" },
        { id: "linen-tablecloth-royal-gray-35x240", label: "Royal Grey / 35X240", price: 44.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308036177" },
        { id: "linen-tablecloth-royal-gray-35x270", label: "Royal Grey / 35X270", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308068945" },
        { id: "linen-tablecloth-royal-gray-35x300", label: "Royal Grey / 35X300", price: 52.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308101713" },
        { id: "linen-tablecloth-royal-gray-35x350", label: "Royal Grey / 35X350", price: 58.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308134481" },
        { id: "linen-tablecloth-farrow-coffee-35x120", label: "Farrow Coffee / 35X120", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308167249" },
        { id: "linen-tablecloth-farrow-coffee-35x160", label: "Farrow Coffee / 35X160", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308200017" },
        { id: "linen-tablecloth-farrow-coffee-35x180", label: "Farrow Coffee / 35X180", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308232785" },
        { id: "linen-tablecloth-farrow-coffee-35x210", label: "Farrow Coffee / 35X210", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308265553" },
        { id: "linen-tablecloth-farrow-coffee-35x240", label: "Farrow Coffee / 35X240", price: 44.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308298321" },
        { id: "linen-tablecloth-farrow-coffee-35x270", label: "Farrow Coffee / 35X270", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308331089" },
        { id: "linen-tablecloth-farrow-coffee-35x300", label: "Farrow Coffee / 35X300", price: 52.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308363857" },
        { id: "linen-tablecloth-farrow-coffee-35x350", label: "Farrow Coffee / 35X350", price: 58.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-tablecloth_b60ca17a_f18a7b2b.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251308396625" }
      ],
    crossSells: ["retro-reactive-glaze-dinnerware", "boucle-sphere-cushion", "bohemian-area-rug"],
  },
  {
    id: "dwell-6",
    slug: "linen-table-runner",
    name: "Linen Table Runner",
    headline: "The Centre Line",
    hookLine: "A washed linen table runner — the simplest way to make a table feel dressed.",
    description:
      "A washed linen table runner — the simplest, most effective way to make a dining table feel dressed and considered. The natural linen has a beautiful drape and the frayed edges add a relaxed, lived-in quality. Available in three colours and nine lengths from 30×50cm to 30×300cm.",
    price: 18.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/linen-table-runner_cc2c966a_277a3f45.jpg",
    additionalImages: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6-dimensions_19905399.jpg"],
    tags: ["table-runner", "linen", "washed", "dining", "natural"],
    notes: "Washed linen · Machine washable · 30cm wide · 9 lengths from 50cm to 300cm",
        variants: [
        { id: "linen-runner-brown-30x50", label: "Warm Brown / 30X50", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X50_fb8e20d8.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309707345" },
        { id: "linen-runner-brown-30x120", label: "Warm Brown / 30X120", price: 24.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X120_56765c7d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309740113" },
        { id: "linen-runner-brown-30x160", label: "Warm Brown / 30X160", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X160_ca8df696.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309772881" },
        { id: "linen-runner-brown-30x180", label: "Warm Brown / 30X180", price: 30.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X180_b6305c60.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309805649" },
        { id: "linen-runner-brown-30x200", label: "Warm Brown / 30X200", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X200_12bc092d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309838417" },
        { id: "linen-runner-brown-30x220", label: "Warm Brown / 30X220", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X220_4c9e7f86.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309871185" },
        { id: "linen-runner-brown-30x240", label: "Warm Brown / 30X240", price: 36.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X240_25c09f77.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309903953" },
        { id: "linen-runner-brown-30x260", label: "Warm Brown / 30X260", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X260_069dc677.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309936721" },
        { id: "linen-runner-brown-30x300", label: "Warm Brown / 30X300", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Enjoy-Brown-_-30X300_81cc86f3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309969489" },
        { id: "linen-runner-gray-30x50", label: "Light Grey / 30X50", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X50_bf7a2c79.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310002257" },
        { id: "linen-runner-gray-30x120", label: "Light Grey / 30X120", price: 24.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X120_2cc0762e.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310035025" },
        { id: "linen-runner-gray-30x160", label: "Light Grey / 30X160", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X160_6bbd9112.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310067793" },
        { id: "linen-runner-gray-30x180", label: "Light Grey / 30X180", price: 30.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X180_91ae6d07.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310100561" },
        { id: "linen-runner-gray-30x200", label: "Light Grey / 30X200", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X200_d3edb931.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310133329" },
        { id: "linen-runner-gray-30x220", label: "Light Grey / 30X220", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X220_d8788f25.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310166097" },
        { id: "linen-runner-gray-30x240", label: "Light Grey / 30X240", price: 36.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X240_c8b0f1d5.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310198865" },
        { id: "linen-runner-gray-30x260", label: "Light Grey / 30X260", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X260_acd37505.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310231633" },
        { id: "linen-runner-gray-30x300", label: "Light Grey / 30X300", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Light-Gray-_-30X300_7c92f7e2.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310264401" },
        { id: "linen-runner-navy-30x50", label: "Navy Blue / 30X50", price: 18.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X50_cd99edc3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310297169" },
        { id: "linen-runner-navy-30x120", label: "Navy Blue / 30X120", price: 24.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X120_1e812810.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310329937" },
        { id: "linen-runner-navy-30x160", label: "Navy Blue / 30X160", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X160_f266147e.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310362705" },
        { id: "linen-runner-navy-30x180", label: "Navy Blue / 30X180", price: 30.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X180_96229efc.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310395473" },
        { id: "linen-runner-navy-30x200", label: "Navy Blue / 30X200", price: 32.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X200_017de267.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310428241" },
        { id: "linen-runner-navy-30x220", label: "Navy Blue / 30X220", price: 34.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X220_03a0262a.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310461009" },
        { id: "linen-runner-navy-30x240", label: "Navy Blue / 30X240", price: 36.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X240_2b02f5c9.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310493777" },
        { id: "linen-runner-navy-30x260", label: "Navy Blue / 30X260", price: 38.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X260_93edb5a1.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310526545" },
        { id: "linen-runner-navy-30x300", label: "Navy Blue / 30X300", price: 42.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-6_Enjoy-The-Navy-Blue-_-30X300_6672f1f8.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251310559313" }
      ],
    available: true,
    crossSells: ["retro-reactive-glaze-dinnerware", "coral-fleece-throw-blanket", "knit-nap-blanket"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/coral-fleece-throw-blanket_597daf8f_815e52b2.jpg",
    tags: ["blanket", "throw", "fleece", "coral", "soft"],
    notes: "Coral fleece · 150×200cm · Machine washable",
    available: true,
    variants: [
      { id: "dwell-7-crm", label: "Cream", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-7-cream-b9wX7dhnGgyPapEDi2QSeC_d258602e.jpg" },
      { id: "dwell-7-gry", label: "Grey", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-7-grey-FsZrVWkUD4TSfZA4EFw8Wt_6172bef5.jpg" },
      { id: "dwell-7-sge", label: "Sage", price: 38.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-7-sage-BPYwbLwCrTbx9eBXk4x5Xh_8bc4d3d7.jpg" }],
    crossSells: ["knit-nap-blanket", "chunky-knit-cushion-cover", "boucle-sphere-cushion"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-nap-blanket_b575cb1e_2b8e9e47.jpg",
    tags: ["blanket", "knit", "chunky", "nap", "textured"],
    notes: "Chunky knit · 130×170cm · Machine washable",
    available: true,
    variants: [
        { id: "knit-nap-blanket-khaki", label: "Khaki", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309215825", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-blanket-khaki-8AfvwHjXGKinttmQbqziQh_8ca25e4c.jpg" },
        { id: "knit-nap-blanket-dark-grey", label: "Dark Grey", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309248593", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-blanket-dark-grey-m8w6JACVjLFfhrFBTG9TxK_f7967b61.jpg" },
        { id: "knit-nap-blanket-light-grey", label: "Light Grey", price: 48.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251309281361", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/knit-blanket-light-grey-U2okFj6tsHro4FXFxeJ49b_c228dfb8.jpg" }
      ],
    crossSells: ["coral-fleece-throw-blanket", "chunky-knit-cushion-cover", "boucle-sphere-cushion"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/chunky-knit-cushion-cover_8caea939_cbc04b56.jpg",
    tags: ["cushion", "cover", "knit", "chunky", "textured"],
    notes: "Cotton yarn · 45×45cm · Hidden zip · Insert not included",
    available: true,
    variants: [
        { id: "chunky-knit-cushion-cover-yellow", label: "Mustard Yellow", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9_Yellow_491c2fb3.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306266705" },
        { id: "chunky-knit-cushion-cover-grey", label: "Charcoal Grey", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306299473", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9-grey-gJqKDqLHQ7MjDiqgE2oC9N_70066dfc.jpg" },
        { id: "chunky-knit-cushion-cover-dark-brown", label: "Dark Brown", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9_Dark-Brown_7178c783.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306332241" },
        { id: "chunky-knit-cushion-cover-light-brown", label: "Light Brown", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9_Light-Brown_deee7e18.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306365009" },
        { id: "chunky-knit-cushion-cover-white", label: "Cream White", price: 28.00, available: false, shopifyVariantId: "gid://shopify/ProductVariant/59251306397777", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9-cream-TMdkwyocoBL2XAiHc3L7Xt_451fbab8.jpg" },
        { id: "chunky-knit-cushion-cover-beige", label: "Natural Beige", price: 28.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-9_Beige_3cb4eecd.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306430545" }
      ],
    crossSells: ["boucle-sphere-cushion", "tufted-tassel-cushion", "pet-blanket"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg",
    tags: ["cushion", "boucle", "sphere", "round", "soft"],
    notes: "Boucle fabric · 35cm diameter · Filled",
    available: true,
    variants: [
        { id: "boucle-sphere-cushion-creamy-white-22cm", label: "Creamy White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306594385", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-10-cream-jDjVShooeVXkPZBneoGvqL.webp" },
        { id: "boucle-sphere-cushion-light-brown-22cm", label: "Light Brown", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306627153" },
        { id: "boucle-sphere-cushion-lilac-grey-22cm", label: "Lilac Grey", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306659921" },
        { id: "boucle-sphere-cushion-misty-rose-22cm", label: "Misty Rose", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306692689" },
        { id: "boucle-sphere-cushion-creamy-white-28cm", label: "Creamy White", price: 32.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251306725457", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-10-cream-jDjVShooeVXkPZBneoGvqL.webp" },
        { id: "boucle-sphere-cushion-light-brown-28cm", label: "Light Brown", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306758225" },
        { id: "boucle-sphere-cushion-lilac-grey-28cm", label: "Lilac Grey", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306790993" },
        { id: "boucle-sphere-cushion-misty-rose-28cm", label: "Misty Rose", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306823761" },
        { id: "boucle-sphere-cushion-black-22cm", label: "Black", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306856529" },
        { id: "boucle-sphere-cushion-black-28cm", label: "Black", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306889297" },
        { id: "boucle-sphere-cushion-navy-blue-22cm", label: "Navy Blue", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306922065" },
        { id: "boucle-sphere-cushion-navy-blue-28cm", label: "Navy Blue", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306954833" },
        { id: "boucle-sphere-cushion-beige-22cm", label: "Beige", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251306987601" },
        { id: "boucle-sphere-cushion-beige-28cm", label: "Beige", price: 32.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/boucle-sphere-cushion_8076d6d8_953be498.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251307020369" }
      ],
    crossSells: ["chunky-knit-cushion-cover", "tufted-tassel-cushion", "coral-fleece-throw-blanket"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/tufted-tassel-cushion_cbe1a4f2_6b522a76.jpg",
    tags: ["cushion", "tufted", "tassel", "artisan", "decorative"],
    notes: "Cotton · Tufted · Corner tassels · 45×45cm · Insert not included",
    available: true,
    crossSells: ["chunky-knit-cushion-cover", "boucle-sphere-cushion", "plush-round-rug"],
      variants: [
        { id: "tufted-tassel-cushion-beige-square-pillow", label: "Beige Square Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Beige-Square-Pillow-_-Pillowcase_ed251572.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251303809105" },
        { id: "tufted-tassel-cushion-beige-square-pillow", label: "Beige Square Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Beige-Square-Pillow-_-Pillowcase-And-Pil_26e02533.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251303841873" },
        { id: "tufted-tassel-cushion-beige-waist-pillow-p", label: "Beige Waist Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Beige-Waist-Pillow-_-Pillowcase_0792efd0.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251303874641" },
        { id: "tufted-tassel-cushion-beige-waist-pillow-p", label: "Beige Waist Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Beige-Waist-Pillow-_-Pillowcase-And-Pill_397d2188.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251303907409" },
        { id: "tufted-tassel-cushion-yellow-square-pillow", label: "Yellow Square Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Yellow-Square-Pillow-_-Pillowcase_a04dd75d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251303940177" },
        { id: "tufted-tassel-cushion-yellow-square-pillow", label: "Yellow Square Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Yellow-Square-Pillow-_-Pillowcase-And-Pi_b968f706.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251303972945" },
        { id: "tufted-tassel-cushion-yellow-waist-pillow", label: "Yellow Waist Pillow / Pillowcase", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Yellow-Waist-Pillow-_-Pillowcase_13fffa1d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304005713" },
        { id: "tufted-tassel-cushion-yellow-waist-pillow", label: "Yellow Waist Pillow / Pillowcase And Pillow Core", price: 28.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-11_Yellow-Waist-Pillow-_-Pillowcase-And-Pil_6a997d63.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304038481" }
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg",
    tags: ["rug", "round", "plush", "soft", "bedroom"],
    notes: "Deep pile · Non-slip backing · 100cm diameter",
    available: true,
    variants: [
        { id: "plush-round-rug-white-35-35cm", label: "White / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304071249" },
        { id: "plush-round-rug-hite-brown-tip-35-35", label: "Hite Brown Tip / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304104017" },
        { id: "plush-round-rug-black-35-35cm", label: "Black / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304136785" },
        { id: "plush-round-rug-lotus-root-pink-35-3", label: "Lotus Root Pink / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304169553" },
        { id: "plush-round-rug-light-gray-35-35cm", label: "Light Gray / 35*", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304202321" },
        { id: "plush-round-rug-black-50x50cm", label: "Black / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304235089" },
        { id: "plush-round-rug-black-60x60cm", label: "Black / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304267857" },
        { id: "plush-round-rug-light-gray-50x50cm", label: "Light Gray / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304300625" },
        { id: "plush-round-rug-light-gray-60x60cm", label: "Light Gray / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304333393" },
        { id: "plush-round-rug-white-50x50cm", label: "White / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304366161" },
        { id: "plush-round-rug-white-60x60cm", label: "White / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304398929" },
        { id: "plush-round-rug-hite-brown-tip-50x50", label: "Hite Brown Tip / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304431697" },
        { id: "plush-round-rug-hite-brown-tip-60x60", label: "Hite Brown Tip / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304464465" },
        { id: "plush-round-rug-lotus-root-pink-50x5", label: "Lotus Root Pink / 50X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304497233" },
        { id: "plush-round-rug-lotus-root-pink-60x6", label: "Lotus Root Pink / 60X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304530001" },
        { id: "plush-round-rug-black-40x40cm", label: "Black / 40X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304562769" },
        { id: "plush-round-rug-white-40x40cm", label: "White / 40X", price: 48.00, available: false, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/plush-round-rug_9061c6fd_c94b7257.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251304595537" }
      ],
    crossSells: ["bohemian-area-rug", "plush-shag-rug", "diatomite-bath-mat"],
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-stripe-cushion-cover_58155c0e_3ee46b61.jpg",
    tags: ["cushion", "cover", "velvet", "stripe", "luxe"],
    notes: "Velvet · Tonal stripes · 45×45cm · Hidden zip · Insert not included",
    available: false,
    variants: [
        { id: "velvet-stripe-cushion-cover-white", label: "Ivory White", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304824913", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-ivory-white-d5iEgp94Y2FG3VModWqDXj.webp" },
        { id: "velvet-stripe-cushion-cover-silver-gray", label: "Silver Grey", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304857681", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-silver-grey-RxTWphjdFomUTHZbTN5PD4_c6a09132.jpg" },
        { id: "velvet-stripe-cushion-cover-yellow", label: "Mustard Yellow", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304890449", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-mustard-yellow-gNnQVd92YVoSEfnzsT3j6E_0e74efa9.jpg" },
        { id: "velvet-stripe-cushion-cover-black", label: "Charcoal Black", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304923217", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-charcoal-black-a4v7HfH2PpSTLU3WJ6zfVv.webp" },
        { id: "velvet-stripe-cushion-cover-wine-red", label: "Wine Red", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304955985", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-wine-red-9UT7dnuPihYuYFwXbq9wvh.webp" },
        { id: "velvet-stripe-cushion-cover-blue", label: "Navy Blue", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251304988753", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-navy-blue-fYMRURuxaDzaJT4jDFAqEM.webp" },
        { id: "velvet-stripe-cushion-cover-white-and-pink-towel", label: "White & Pink Set", price: 28.00, available: true, shopifyVariantId: "gid://shopify/ProductVariant/59251305021521", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/velvet-cushion-white-pink-set-AdYgYaVB9tsUedSnpJjzTa_2353baf1.jpg" }
      ],
    crossSells: ["chunky-knit-cushion-cover", "tufted-tassel-cushion", "boucle-sphere-cushion"],
  },
  {
    id: "dwell-14",
    slug: "pet-blanket",
    name: "Pet Blanket",
    headline: "The Companion's Comfort",
    hookLine: "A soft fleece blanket sized for pets — for beds, crates, and favourite spots.",
    description:
      "A soft fleece blanket sized and designed for pets — the kind of considered object that shows the same care for your companion's comfort as your own. The fleece is machine-washable, quick-drying, and resistant to pet hair clinging. Available in two sizes.",
    price: 18.00,
    collection: "DWELL",
    collectionSlug: "dwell",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/pet-blanket_2643de40_e0d2ff1b.jpg",
    tags: ["blanket", "pet", "fleece", "soft", "washable"],
    notes: "Fleece · 80×120cm · Machine washable · Pet-hair resistant",
    available: true,
    variants: [
        { id: "pet-blanket-random-color-small-5", label: "Small (50×70cm)", price: 18.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-14_Random-Color-_-Small-50X70Cm_7b4c905d.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309314129" },
        { id: "pet-blanket-random-color-large-1", label: "Large (100×70cm)", price: 24.00, available: true, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663320869327/ATXAQqZMviwYB4q65RwV96/dwell-14_Random-Color-_-Large-100X70Cm_de3d0427.jpg", shopifyVariantId: "gid://shopify/ProductVariant/59251309346897" }
      ],
    crossSells: ["coral-fleece-throw-blanket", "knit-nap-blanket", "plush-round-rug"],
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
