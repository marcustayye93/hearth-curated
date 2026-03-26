// HEARTH CURATED — Collection Page
// Design: Editorial grid, collection hero, product listing with filters

import { Link, useParams } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCollectionBySlug, COLLECTIONS } from "@/lib/products";

export default function Collection() {
  const params = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(params.slug);

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
        <Nav />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="hc-eyebrow mb-4">Collection not found</p>
            <Link href="/" className="hc-btn-primary">Return Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
      <Nav />

      <main className="flex-1">
        {/* ── COLLECTION HERO ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ height: "60vh", minHeight: "400px" }}>
          <img
            src={collection.image}
            alt={collection.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(28,16,8,0.75) 0%, rgba(28,16,8,0.2) 60%, transparent 100%)" }}
          />
          <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
            <div className="container">
              <p className="hc-eyebrow mb-3" style={{ color: "rgba(196,185,170,0.9)" }}>
                {collection.tagline}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400 }}
              >
                {collection.name}
              </h1>
            </div>
          </div>
        </section>

        {/* ── COLLECTION DESCRIPTION ───────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{ borderBottom: "1px solid var(--hc-stone)" }}
        >
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl"
                style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
              >
                {collection.description}
              </p>
              <p
                className="text-xs tracking-widest uppercase shrink-0"
                style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
              >
                {collection.products.length} objects
              </p>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS GRID ────────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {collection.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group block hc-product-card"
                >
                  {/* Image */}
                  <div className="overflow-hidden mb-4" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hc-product-img"
                    />
                  </div>
                  {/* Info */}
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
                    {product.notes && (
                      <p
                        className="text-xs mb-2 leading-relaxed"
                        style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
                      >
                        {product.notes}
                      </p>
                    )}
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
                    >
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── OTHER COLLECTIONS ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "var(--hc-espresso)" }}
        >
          <div className="container">
            <p className="hc-eyebrow mb-8" style={{ color: "var(--hc-stone)" }}>
              Explore More
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {COLLECTIONS.filter((c) => c.slug !== collection.slug).map((col) => (
                <Link key={col.slug} href={`/collections/${col.slug}`} className="group block">
                  <div className="overflow-hidden mb-4 hc-product-card" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover hc-product-img"
                    />
                  </div>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                  >
                    {col.tagline}
                  </p>
                  <h3
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-parchment)", fontWeight: 400 }}
                  >
                    {col.name}
                  </h3>
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
