// HEARTH CURATED — Product Detail Page
// Design: Aesop-style — large image left, editorial text right
// No add-to-cart (static site) — "Discover" CTA links to collection

import { Link, useParams } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProductBySlug, PRODUCTS } from "@/lib/products";

export default function Product() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
        <Nav />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="hc-eyebrow mb-4">Product not found</p>
            <Link href="/" className="hc-btn-primary">Return Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Related products — same collection, excluding current
  const related = PRODUCTS.filter(
    (p) => p.collectionSlug === product.collectionSlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
      <Nav />

      <main className="flex-1">
        {/* ── BREADCRUMB ───────────────────────────────────────────────── */}
        <div
          className="py-4"
          style={{ borderBottom: "1px solid var(--hc-stone)" }}
        >
          <div className="container">
            <nav
              className="flex items-center gap-2 text-xs tracking-wide"
              style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
            >
              <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
              <span style={{ color: "var(--hc-stone)" }}>·</span>
              <Link href={`/collections/${product.collectionSlug}`} className="hover:opacity-70 transition-opacity">
                {product.collection}
              </Link>
              <span style={{ color: "var(--hc-stone)" }}>·</span>
              <span style={{ color: "var(--hc-espresso)" }}>{product.name}</span>
            </nav>
          </div>
        </div>

        {/* ── PRODUCT LAYOUT ───────────────────────────────────────────── */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <p className="hc-eyebrow mb-4">{product.collection}</p>
                <h1
                  className="text-3xl md:text-4xl mb-3 leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                >
                  {product.name}
                </h1>
                <p
                  className="text-xl mb-6"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-sienna)", fontStyle: "italic" }}
                >
                  {product.headline}
                </p>

                <hr className="hc-divider mb-6" />

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
                >
                  {product.description}
                </p>

                {product.notes && (
                  <div className="mb-8">
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                    >
                      Details
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
                    >
                      {product.notes}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-2xl"
                    style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)" }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <Link
                  href={`/collections/${product.collectionSlug}`}
                  className="hc-btn-primary text-center"
                >
                  View Full Collection
                </Link>

                <p
                  className="text-xs mt-4 text-center"
                  style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                >
                  Complimentary shipping on orders over $75
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS ─────────────────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="py-16 md:py-24"
            style={{ borderTop: "1px solid var(--hc-stone)" }}
          >
            <div className="container">
              <p className="hc-eyebrow mb-8">From the same collection</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="group block hc-product-card"
                  >
                    <div className="overflow-hidden mb-4" style={{ aspectRatio: "3/4" }}>
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover hc-product-img"
                      />
                    </div>
                    <p
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
                    >
                      {rel.collection}
                    </p>
                    <h3
                      className="text-sm md:text-base mb-1"
                      style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                    >
                      {rel.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
                    >
                      ${rel.price.toFixed(2)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
