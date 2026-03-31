// HEARTH CURATED — Collection Page (CRO Optimised)
// Design: Editorial grid, collection hero, product listing with hook lines
// Quick-add button on hover, product count, curated sort order

import { useState } from "react";
import { Link, useParams, useLocation } from "wouter";
import { Plus, ChevronDown } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCollectionBySlug, COLLECTIONS, type Product, getShopifyVariantGid } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import SEOHead from "@/components/SEOHead";

type SortOption = "curated" | "price-asc" | "price-desc" | "name-asc";

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();
  const [, navigate] = useLocation();
  const hasMultipleVariants = (product.variants?.length ?? 0) > 1;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.available) return;
    if (hasMultipleVariants) {
      // Navigate to PDP so customer can choose a variant
      navigate(`/products/${product.slug}`);
      return;
    }
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
          className={`w-full h-full object-cover hc-product-img${!product.available ? " hc-sold-out-img" : ""}`}
          loading="lazy"
          decoding="async"
          width={800}
          height={1067}
        />
        {/* Quick Add button — desktop hover (available only) */}
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
            <span>{hasMultipleVariants ? "Choose Option" : "Quick Add"}</span>
          </button>
        )}
        {/* Sold-out diagonal ribbon */}
        {!product.available && <div className="hc-sold-out-ribbon" />}
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
            ? `From ${formatPrice(product.price, { compact: true })}`
            : formatPrice(product.price, { compact: true })}
        </p>
      </div>
    </Link>
  );
}

function SortableProductGrid({ products }: { products: Product[] }) {
  const [sortBy, setSortBy] = useState<SortOption>("curated");
  const [sortOpen, setSortOpen] = useState(false);

  const sortLabels: Record<SortOption, string> = {
    curated: "Curated",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    "name-asc": "Name: A to Z",
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      default:
        return 0; // curated = original order
    }
  });

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
        >
          {products.length} {products.length === 1 ? "object" : "objects"}
        </p>
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
          >
            Sort: {sortLabels[sortBy]}
            <ChevronDown size={12} strokeWidth={1.5} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
          </button>
          {sortOpen && (
            <div
              className="absolute right-0 top-full mt-2 py-2 z-20 min-w-[180px]"
              style={{
                backgroundColor: "var(--hc-parchment)",
                border: "1px solid var(--hc-stone)",
                boxShadow: "0 4px 16px rgba(28,16,8,0.08)",
              }}
            >
              {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => { setSortBy(option); setSortOpen(false); }}
                  className="w-full text-left px-4 py-2 text-xs tracking-wide transition-colors hover:opacity-60"
                  style={{
                    fontFamily: "'Karla', sans-serif",
                    color: sortBy === option ? "var(--hc-espresso)" : "var(--hc-sienna)",
                    fontWeight: sortBy === option ? 600 : 400,
                  }}
                >
                  {sortLabels[option]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

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
      <SEOHead
        title={`${collection.name} Collection — ${collection.tagline}`}
        description={`${collection.description} Shop ${collection.products.length} curated objects in the ${collection.name} collection at Hearth Curated.`}
        canonicalPath={`/collections/${collection.slug}`}
        ogImage={collection.image}
        ogImageAlt={`${collection.name} Collection — Hearth Curated`}
      />
      <Nav />

      <main className="flex-1">
        {/* ── COLLECTION HERO ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ height: "60vh", minHeight: "320px" }}>
          <img
            src={collection.image}
            alt={collection.name}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
                {collection.products.length} {collection.products.length === 1 ? "object" : "objects"}
              </p>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS GRID ────────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SortableProductGrid products={collection.products} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {COLLECTIONS.filter((c) => c.slug !== collection.slug).map((col) => (
                <Link key={col.slug} href={`/collections/${col.slug}`} className="group block">
                  <div className="overflow-hidden mb-4 hc-product-card" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover hc-product-img"
                      loading="lazy"
                      decoding="async"
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
