// HEARTH CURATED — Home Page
// Design: Aesop / Nomos Rituals inspired editorial luxury
// Sections: Hero (full-bleed image + text), Collections grid (2×2 asymmetric),
//           Brand manifesto (text-heavy editorial), Featured products (horizontal scroll),
//           Editorial feature (split image/text), Footer

import { Link } from "wouter";
import { Plus } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COLLECTIONS, PRODUCTS, type Product, getShopifyVariantGid } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import SEOHead from "@/components/SEOHead";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/hero-banner-v2-WGnoQge2ivaCcYKVnDSYX9.webp";

// Top 8 available products for featured section
const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.available).slice(0, 8);

function FeaturedCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants?.find((v) => v.available);
    const variantGid = getShopifyVariantGid(product, defaultVariant);
    if (variantGid) addItem(variantGid, 1);
  };
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block hc-product-card"
    >
      <div className="overflow-hidden mb-4 relative" style={{ aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hc-product-img"
        />
        {product.available && (
          <button
            onClick={handleQuickAdd}
            className="hc-quick-add absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            style={{
              backgroundColor: "var(--hc-espresso)",
              color: "var(--hc-parchment)",
              fontFamily: "'Karla', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <Plus size={12} strokeWidth={2} />
            <span>Quick Add</span>
          </button>
        )}
      </div>
      <div>
        <p
          className="text-xs tracking-widest uppercase mb-1"
          style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
        >
          {product.collection}
        </p>
        <h3
          className="text-sm md:text-base mb-1 leading-snug"
          style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
        >
          {product.name}
        </h3>
        {product.hookLine && (
          <p
            className="text-xs mb-2 leading-relaxed line-clamp-2"
            style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
          >
            {product.hookLine}
          </p>
        )}
        <p
          className="text-sm font-medium"
          style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
        >
          {product.variants && product.variants.length > 1
            ? `From $${product.price.toFixed(0)}`
            : `$${product.price.toFixed(0)}`}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
      <SEOHead
        title="Hearth Curated — Objects for the Intentional Home"
        description="A curated selection of kitchen tools, home fragrance, botanicals, and artisan food — chosen for quiet utility and considered design. Free shipping over $75."
        canonicalPath="/"
        ogImage={HERO_IMAGE}
        ogImageAlt="Hearth Curated — handcrafted kitchen and home objects"
      />
      <Nav />

      <main className="flex-1">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden" style={{ height: "85vh", minHeight: "480px" }}>
          <img
            src={HERO_IMAGE}
            alt="Hearth Curated — Objects for the intentional home"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle dark overlay on left for text legibility */}
          {/* Gradient overlay — wider on mobile for text legibility */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(28,16,8,0.55) 0%, rgba(28,16,8,0.1) 55%, transparent 100%)" }}
          />
          {/* Additional bottom gradient for mobile */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "linear-gradient(to top, rgba(28,16,8,0.6) 0%, rgba(28,16,8,0.2) 50%, transparent 100%)" }}
          />

          {/* Hero text — left aligned */}
          <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
            <div className="container">
              <div className="max-w-lg">
                <p className="hc-eyebrow mb-4" style={{ color: "rgba(242,237,228,0.8)" }}>
                  New Arrivals — Spring 2026
                </p>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight"
                  style={{ color: "var(--hc-parchment)", fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
                >
                  Objects for the<br />Intentional Home
                </h1>
                <p
                  className="text-sm md:text-base mb-6 sm:mb-8 leading-relaxed max-w-sm"
                  style={{ color: "rgba(242,237,228,0.85)", fontFamily: "'Karla', sans-serif" }}
                >
                  A curated selection of kitchen tools, home fragrance, botanicals, and artisan food — chosen for quiet utility and considered design.
                </p>
                <Link href="/collections/gather" className="hc-btn-primary">
                  Explore Collections
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLLECTIONS GRID ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "var(--hc-parchment)" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="hc-eyebrow mb-3">Our Collections</p>
                <h2
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                >
                  Four Worlds,<br />One Home
                </h2>
              </div>
              <p
                className="text-sm max-w-xs leading-relaxed"
                style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
              >
                Each collection is a distinct world — chosen for its coherence, not its breadth.
              </p>
            </div>

            {/* Asymmetric 2×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {COLLECTIONS.map((col, i) => (
                <Link key={col.slug} href={`/collections/${col.slug}`} className="group block relative overflow-hidden hc-product-card">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: i % 2 === 0 ? "4/5" : "4/3" }}
                  >
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover hc-product-img"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                      style={{ background: "linear-gradient(to top, rgba(28,16,8,0.7) 0%, rgba(28,16,8,0.1) 50%, transparent 100%)" }}
                    />
                    {/* Text */}
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <p className="hc-eyebrow mb-1.5" style={{ color: "rgba(196,185,170,0.9)" }}>
                        {col.tagline}
                      </p>
                      <h3
                        className="text-2xl md:text-3xl mb-3"
                        style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400 }}
                      >
                        {col.name}
                      </h3>
                      <span
                        className="text-xs tracking-widest uppercase border-b pb-0.5 transition-colors duration-200 group-hover:border-opacity-100"
                        style={{
                          color: "var(--hc-parchment)",
                          fontFamily: "'Karla', sans-serif",
                          borderColor: "rgba(242,237,228,0.5)",
                        }}
                      >
                        Explore {col.products.length} objects →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRAND MANIFESTO ──────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--hc-espresso)" }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="hc-eyebrow mb-8" style={{ color: "var(--hc-stone)" }}>
                Our Philosophy
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8"
                style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400, fontStyle: "italic" }}
              >
                "The home is not a backdrop.<br />It is a practice."
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-4 max-w-xl mx-auto"
                style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif" }}
              >
                Hearth Curated exists for those who believe that the objects they choose for their homes are a quiet autobiography. We source from makers and suppliers who share our conviction that utility and beauty are not in opposition — that the most practical tools should still be beautiful.
              </p>
              <p
                className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif" }}
              >
                Every product in our collection is chosen against three criteria: it must solve a genuine problem, it must photograph beautifully, and it must feel like a discovery.
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ────────────────────────────────────────── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "var(--hc-parchment)" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="hc-eyebrow mb-3">Featured Objects</p>
                <h2
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                >
                  New &amp; Notable
                </h2>
              </div>
              <Link
                href="/collections/gather"
                className="text-xs tracking-widest uppercase border-b pb-0.5 self-start md:self-auto"
                style={{
                  color: "var(--hc-espresso)",
                  fontFamily: "'Karla', sans-serif",
                  borderColor: "var(--hc-stone)",
                }}
              >
                View all objects →
              </Link>
            </div>

            {/* Product grid — 4 columns on desktop, 2 on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {FEATURED_PRODUCTS.map((product) => (
                <FeaturedCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ── EDITORIAL SPLIT — GATHER feature ─────────────────────────── */}
        <section
          className="py-0 md:py-0 overflow-hidden"
          style={{ backgroundColor: "var(--hc-parchment-dark, #E8E0D4)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-gather_87a9bb21.jpg"
                alt="GATHER Collection"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            {/* Text */}
            <div className="flex items-center px-8 md:px-16 py-16 md:py-20" style={{ backgroundColor: "var(--hc-espresso)" }}>
              <div className="max-w-sm">
                <p className="hc-eyebrow mb-4" style={{ color: "var(--hc-stone)" }}>
                  GATHER — The Art of the Table
                </p>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400 }}
                >
                  Tools that make cooking feel like a ritual
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "var(--hc-sand)", fontFamily: "'Karla', sans-serif" }}
                >
                  Cooking is not merely sustenance. It is a daily practice of attention and care. The GATHER collection brings together kitchen tools and tabletop accessories chosen for their quiet utility and considered design.
                </p>
                <Link href="/collections/gather" className="hc-btn-outline" style={{ borderColor: "rgba(196,185,170,0.5)", color: "var(--hc-parchment)" }}>
                  Explore GATHER
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── EDITORIAL SPLIT — ADORN feature (reversed) ───────────────── */}
        <section className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Text — left on desktop */}
            <div
              className="flex items-center px-8 md:px-16 py-16 md:py-20 order-2 md:order-1"
              style={{ backgroundColor: "var(--hc-parchment)" }}
            >
              <div className="max-w-sm">
                <p className="hc-eyebrow mb-4">ADORN — Objects of Intention</p>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                >
                  Scent is the invisible architecture of a room
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
                >
                  The ADORN collection brings together home fragrance, decorative objects, and display pieces — each one chosen to transform the atmosphere of a room through scent, light, or visual presence.
                </p>
                <Link href="/collections/adorn" className="hc-btn-primary">
                  Explore ADORN
                </Link>
              </div>
            </div>
            {/* Image — right on desktop */}
            <div className="relative overflow-hidden order-1 md:order-2" style={{ minHeight: "300px" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-adorn_18502690.jpg"
                alt="ADORN Collection"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </section>

        {/* ── BLOOM + NOURISH — side by side ───────────────────────────── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "var(--hc-parchment)" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  slug: "bloom",
                  name: "BLOOM",
                  tagline: "Everlasting Greenery",
                  copy: "Botanicals, florals, plants, and garden accessories. Living and living-adjacent objects that bring the outside in.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-bloom_bb15969d.jpg",
                },
                {
                  slug: "nourish",
                  name: "NOURISH",
                  tagline: "The Ritual of Cooking",
                  copy: "Artisan food and drink for the intentional cook. Consumables and ingredients that transform cooking from a task into a ritual.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458969613/5KGFFWkvMdM9vM3nKPm88B/collection-nourish-9ACpb36EeNaEewRWfkFqCs.webp",
                },
              ].map((col) => (
                <Link key={col.slug} href={`/collections/${col.slug}`} className="group block">
                  <div className="overflow-hidden mb-6 hc-product-card" style={{ aspectRatio: "4/5" }}>
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover hc-product-img"
                    />
                  </div>
                  <p className="hc-eyebrow mb-2">{col.tagline}</p>
                  <h3
                    className="text-2xl md:text-3xl mb-3"
                    style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                  >
                    {col.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif", maxWidth: "340px" }}
                  >
                    {col.copy}
                  </p>
                  <span
                    className="text-xs tracking-widest uppercase border-b pb-0.5"
                    style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif", borderColor: "var(--hc-stone)" }}
                  >
                    Explore {col.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
