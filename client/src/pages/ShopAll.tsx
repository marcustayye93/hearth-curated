// HEARTH CURATED — Shop All Page
// Shows all available products across all collections
// Same editorial grid style as Collection pages

import { Link } from "wouter";
import { Plus } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAvailableProducts, COLLECTIONS, type Product, getShopifyVariantGid } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.available) return;
    const defaultVariant = product.variants?.find((v) => v.available);
    const variantGid = getShopifyVariantGid(product, defaultVariant);
    if (variantGid) addItem(variantGid, 1);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block hc-product-card"
    >
      {/* Image */}
      <div className="overflow-hidden mb-4 relative" style={{ aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hc-product-img"
          loading="lazy"
          decoding="async"
          width={800}
          height={1067}
        />
        {/* Quick Add button — desktop hover */}
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
        {product.hookLine && (
          <p
            className="text-xs mb-1.5 leading-relaxed line-clamp-2"
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

export default function ShopAll() {
  const allProducts = getAvailableProducts();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts =
    activeFilter === "all"
      ? allProducts
      : allProducts.filter((p) => p.collectionSlug === activeFilter);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
      <SEOHead
        title="Shop All — Hearth Curated"
        description="Browse our full collection of curated home objects. Kitchen tools, home fragrance, botanicals, lighting, and soft furnishings — chosen for quiet utility and considered design."
        canonicalPath="/shop"
        ogImageAlt="Shop All — Hearth Curated"
      />
      <Nav />

      <main className="flex-1">
        {/* ── PAGE HEADER ──────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ borderBottom: "1px solid var(--hc-stone)" }}
        >
          <div className="container">
            <p className="hc-eyebrow mb-3">All Objects</p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                color: "var(--hc-espresso)",
                fontWeight: 400,
              }}
            >
              Shop All
            </h1>
            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl"
              style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
            >
              Every object in our collection, chosen against three criteria: it must solve a genuine
              problem, it must look as good in person as it does in photos, and it must feel like a
              discovery.
            </p>
          </div>
        </section>

        {/* ── FILTER BAR ───────────────────────────────────────────── */}
        <section className="py-6" style={{ borderBottom: "1px solid var(--hc-stone)" }}>
          <div className="container">
            <div className="flex items-center gap-6 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveFilter("all")}
                className="text-xs tracking-widest uppercase whitespace-nowrap pb-1 transition-all duration-200"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: activeFilter === "all" ? "var(--hc-espresso)" : "var(--hc-sienna)",
                  borderBottom: activeFilter === "all" ? "1.5px solid var(--hc-espresso)" : "1.5px solid transparent",
                  fontWeight: activeFilter === "all" ? 600 : 400,
                }}
              >
                All ({allProducts.length})
              </button>
              {COLLECTIONS.map((col) => {
                const count = allProducts.filter((p) => p.collectionSlug === col.slug).length;
                return (
                  <button
                    key={col.slug}
                    onClick={() => setActiveFilter(col.slug)}
                    className="text-xs tracking-widest uppercase whitespace-nowrap pb-1 transition-all duration-200"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      color: activeFilter === col.slug ? "var(--hc-espresso)" : "var(--hc-sienna)",
                      borderBottom: activeFilter === col.slug ? "1.5px solid var(--hc-espresso)" : "1.5px solid transparent",
                      fontWeight: activeFilter === col.slug ? 600 : 400,
                    }}
                  >
                    {col.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS GRID ────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
              >
                {filteredProducts.length} {filteredProducts.length === 1 ? "object" : "objects"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
