// HEARTH CURATED — Search Dialog
// Quick product search with keyboard shortcut (Cmd/Ctrl+K)
// Uses cmdk for fuzzy matching against static product catalog

import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { Search, ArrowRight } from "lucide-react";
import { PRODUCTS, COLLECTIONS } from "@/lib/products";
import { useCurrency } from "@/contexts/CurrencyContext";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const { formatPrice } = useCurrency();
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();

  // Reset query when dialog opens
  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  // Keyboard shortcut: Cmd/Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  const handleNavigate = useCallback(
    (path: string) => {
      onOpenChange(false);
      navigate(path);
    },
    [navigate, onOpenChange]
  );

  // Filter products by query
  const normalizedQuery = query.toLowerCase().trim();
  const filteredProducts = normalizedQuery.length > 0
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.collection.toLowerCase().includes(normalizedQuery) ||
          p.hookLine?.toLowerCase().includes(normalizedQuery) ||
          p.tags?.some((t) => t.toLowerCase().includes(normalizedQuery))
      ).slice(0, 8)
    : [];

  const filteredCollections = normalizedQuery.length > 0
    ? COLLECTIONS.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.tagline.toLowerCase().includes(normalizedQuery)
      )
    : [];

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[300] transition-opacity duration-200"
        style={{ backgroundColor: "rgba(28,16,8,0.5)" }}
        onClick={() => onOpenChange(false)}
      />

      {/* Dialog */}
      <div
        className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[301] w-[90vw] max-w-lg"
        style={{
          backgroundColor: "var(--hc-parchment)",
          boxShadow: "0 20px 60px rgba(28,16,8,0.2)",
        }}
      >
        {/* Search input */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: "1px solid var(--hc-stone)" }}
        >
          <Search size={16} strokeWidth={1.5} style={{ color: "var(--hc-sienna)", flexShrink: 0 }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, collections..."
            autoFocus
            className="flex-1 bg-transparent outline-none text-sm"
            style={{
              fontFamily: "'Karla', sans-serif",
              color: "var(--hc-espresso)",
            }}
          />
          <kbd
            className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] tracking-wider uppercase"
            style={{
              fontFamily: "'Karla', sans-serif",
              color: "var(--hc-stone)",
              border: "1px solid var(--hc-stone)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {normalizedQuery.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
              >
                Start typing to search
              </p>
            </div>
          ) : filteredProducts.length === 0 && filteredCollections.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <p
                className="text-sm mb-1"
                style={{ color: "var(--hc-espresso)", fontFamily: "'Libre Baskerville', serif" }}
              >
                No results found
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--hc-sienna)", fontFamily: "'Karla', sans-serif" }}
              >
                Try a different search term
              </p>
            </div>
          ) : (
            <>
              {/* Collections */}
              {filteredCollections.length > 0 && (
                <div className="px-5 pt-4 pb-2">
                  <p
                    className="text-[10px] tracking-widest uppercase mb-3"
                    style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                  >
                    Collections
                  </p>
                  {filteredCollections.map((col) => (
                    <button
                      key={col.slug}
                      onClick={() => handleNavigate(`/collections/${col.slug}`)}
                      className="w-full flex items-center justify-between py-2.5 group transition-opacity hover:opacity-70"
                    >
                      <span
                        className="text-sm"
                        style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)" }}
                      >
                        {col.name}
                      </span>
                      <ArrowRight size={14} strokeWidth={1.5} style={{ color: "var(--hc-stone)" }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Products */}
              {filteredProducts.length > 0 && (
                <div
                  className="px-5 pt-4 pb-4"
                  style={filteredCollections.length > 0 ? { borderTop: "1px solid var(--hc-stone)" } : {}}
                >
                  <p
                    className="text-[10px] tracking-widest uppercase mb-3"
                    style={{ color: "var(--hc-stone)", fontFamily: "'Karla', sans-serif" }}
                  >
                    Products
                  </p>
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleNavigate(`/products/${product.slug}`)}
                      className="w-full flex items-center gap-3 py-2.5 group transition-opacity hover:opacity-70"
                    >
                      <div
                        className="w-10 h-12 shrink-0 overflow-hidden"
                        style={{ backgroundColor: "var(--hc-sand)" }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p
                          className="text-sm leading-snug"
                          style={{ fontFamily: "'Libre Baskerville', serif", color: "var(--hc-espresso)" }}
                        >
                          {product.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-sienna)" }}
                        >
                          {product.collection} · {formatPrice(product.price, { compact: true })}
                        </p>
                      </div>
                      {!product.available && (
                        <span
                          className="text-[10px] tracking-wider uppercase px-2 py-0.5"
                          style={{
                            fontFamily: "'Karla', sans-serif",
                            color: "var(--hc-stone)",
                            border: "1px solid var(--hc-stone)",
                          }}
                        >
                          Sold Out
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
