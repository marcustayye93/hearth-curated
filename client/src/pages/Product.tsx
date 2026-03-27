// HEARTH CURATED — Product Detail Page (CRO Optimised)
// Design: Aesop-style — large image left, editorial text right
// Above-fold: Add to Cart CTA, variant selector, price
// Below-fold: Trust signals, "You May Also Like" cross-sells
// Mobile: Sticky bottom Add to Cart bar

import { useState, useMemo } from "react";
import { Link, useParams } from "wouter";
import { ShoppingBag, Truck, Shield, RotateCcw, ChevronDown } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProductBySlug, getCrossSells, type Variant, getShopifyVariantGid } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import SEOHead from "@/components/SEOHead";

export default function Product() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const { addItem } = useCart();

  // Variant state
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    () => product?.variants?.find((v) => v.available) ?? product?.variants?.[0]
  );

  const currentPrice = selectedVariant?.price ?? product?.price ?? 0;
  const isAvailable = selectedVariant
    ? selectedVariant.available
    : product?.available ?? false;

  // Cross-sells
  const crossSells = useMemo(
    () => (product ? getCrossSells(product) : []),
    [product]
  );

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

  const handleAddToCart = () => {
    if (!isAvailable || !product) return;
    const variantGid = getShopifyVariantGid(product, selectedVariant);
    if (variantGid) addItem(variantGid, 1);
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.hookLine || product.description || `${product.name} from Hearth Curated`,
    image: product.image,
    brand: { "@type": "Brand", name: "Hearth Curated" },
    offers: {
      "@type": "Offer",
      price: currentPrice.toFixed(2),
      priceCurrency: "USD",
      availability: isAvailable
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--hc-parchment)" }}>
      <SEOHead
        title={`${product.name} — Hearth Curated`}
        description={product.hookLine || product.description || `Shop ${product.name} at Hearth Curated. Curated objects for the intentional home.`}
        canonicalPath={`/products/${product.slug}`}
        ogImage={product.image}
        ogImageAlt={product.name}
        ogType="product"
        jsonLd={productJsonLd}
      />
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
        <section className="py-10 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
              {/* ── IMAGE ──────────────────────────────────────── */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!isAvailable && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(28,16,8,0.4)" }}
                  >
                    <span
                      className="text-xs tracking-widest uppercase px-4 py-2"
                      style={{
                        backgroundColor: "var(--hc-parchment)",
                        color: "var(--hc-espresso)",
                        fontFamily: "'Karla', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Returning Soon
                    </span>
                  </div>
                )}
              </div>

              {/* ── INFO / CTA ─────────────────────────────────── */}
              <div className="flex flex-col">
                <p className="hc-eyebrow mb-3">{product.collection}</p>
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl mb-2 leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
                >
                  {product.name}
                </h1>
                <p
                  className="text-lg mb-5"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-sienna)", fontStyle: "italic" }}
                >
                  {product.headline}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <span
                    className="text-2xl"
                    style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)" }}
                  >
                    ${currentPrice.toFixed(2)}
                  </span>
                </div>

                {/* ── VARIANT SELECTOR ─────────────────────────── */}
                {product.variants && product.variants.length > 1 && (
                  <div className="mb-6">
                    <p
                      className="text-xs tracking-widest uppercase mb-3"
                      style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
                    >
                      {selectedVariant?.label ?? "Select option"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => {
                        const isSelected = selectedVariant?.id === variant.id;
                        return (
                          <button
                            key={variant.id}
                            onClick={() => setSelectedVariant(variant)}
                            disabled={!variant.available}
                            className="px-4 py-2.5 text-xs tracking-wide transition-all duration-200"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              border: `1px solid ${isSelected ? "var(--hc-espresso)" : "var(--hc-stone)"}`,
                              backgroundColor: isSelected ? "var(--hc-espresso)" : "transparent",
                              color: isSelected ? "var(--hc-parchment)" : variant.available ? "var(--hc-espresso)" : "var(--hc-stone)",
                              opacity: variant.available ? 1 : 0.5,
                              textDecoration: variant.available ? "none" : "line-through",
                            }}
                          >
                            {variant.label}
                            {variant.price !== product.price && (
                              <span className="ml-1 opacity-70">
                                · ${variant.price.toFixed(0)}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── ADD TO CART ──────────────────────────────── */}
                <button
                  onClick={handleAddToCart}
                  disabled={!isAvailable}
                  className="w-full flex items-center justify-center gap-2 mb-4 transition-all duration-200"
                  style={{
                    backgroundColor: isAvailable ? "var(--hc-espresso)" : "var(--hc-stone)",
                    color: "var(--hc-parchment)",
                    fontFamily: "'Karla', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "1rem 2rem",
                    border: "none",
                    cursor: isAvailable ? "pointer" : "not-allowed",
                  }}
                >
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  <span>{isAvailable ? "Add to Bag" : "Returning Soon"}</span>
                </button>

                {/* Shipping note */}
                <p
                  className="text-xs text-center mb-6"
                  style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                >
                  Complimentary shipping on orders over $60
                </p>

                <hr className="hc-divider mb-6" />

                {/* ── DESCRIPTION ─────────────────────────────── */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--hc-espresso)", fontFamily: "'Karla', sans-serif" }}
                >
                  {product.description}
                </p>

                {product.notes && (
                  <div className="mb-6">
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

                {/* ── TRUST SIGNALS ────────────────────────────── */}
                <div
                  className="grid grid-cols-3 gap-4 py-5 mt-auto"
                  style={{ borderTop: "1px solid var(--hc-stone)" }}
                >
                  {[
                    { icon: Truck, label: "Free shipping over $60" },
                    { icon: Shield, label: "Secure checkout" },
                    { icon: RotateCcw, label: "Easy returns" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-1.5">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        style={{ color: "var(--hc-sienna)" }}
                      />
                      <span
                        className="text-[10px] tracking-wide uppercase leading-tight"
                        style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── YOU MAY ALSO LIKE ────────────────────────────────────────── */}
        {crossSells.length > 0 && (
          <section
            className="py-16 md:py-24"
            style={{ borderTop: "1px solid var(--hc-stone)" }}
          >
            <div className="container">
              <p className="hc-eyebrow mb-8">You may also like</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {crossSells.map((rel) => (
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
                    {rel.hookLine && (
                      <p
                        className="text-xs mb-1.5 leading-relaxed line-clamp-2"
                        style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
                      >
                        {rel.hookLine}
                      </p>
                    )}
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

      {/* Spacer for sticky mobile bar */}
      <div className="h-20 md:hidden" />

      {/* ── STICKY MOBILE ADD TO CART ──────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3"
        style={{
          backgroundColor: "var(--hc-parchment)",
          borderTop: "1px solid var(--hc-stone)",
          boxShadow: "0 -4px 20px rgba(28,16,8,0.08)",
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className="text-sm leading-tight"
              style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)", fontWeight: 400 }}
            >
              {product.name}
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-sienna)" }}
            >
              ${currentPrice.toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!isAvailable}
            className="shrink-0 flex items-center gap-2 px-5 py-3"
            style={{
              backgroundColor: isAvailable ? "var(--hc-espresso)" : "var(--hc-stone)",
              color: "var(--hc-parchment)",
              fontFamily: "'Karla', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: isAvailable ? "pointer" : "not-allowed",
            }}
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            <span>{isAvailable ? "Add to Bag" : "Returning Soon"}</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
