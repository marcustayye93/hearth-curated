// HEARTH CURATED — Cart Drawer
// Design: Slide-in from right, espresso header, free shipping bar,
// item list with quantity controls, cross-sell recommendations, checkout CTA.
// No rounded corners. Editorial typography.

import { X, Minus, Plus, ShoppingBag, Truck, ArrowRight, Loader2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";
import { getShopifyVariantGid } from "@/lib/products";

export default function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    amountToFreeShipping,
    hasFreeShipping,
    freeShippingThreshold,
    isOpen,
    isLoading,
    closeCart,
    removeItem,
    updateQuantity,
    nudgeItems,
    getCartCrossSells,
    addItem,
    goToCheckout,
  } = useCart();

  const crossSells = getCartCrossSells();
  const shippingProgress = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(28,16,8,0.5)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
        }}
        onClick={closeCart}
      />

      {/* Drawer panel */}
      <div
        className="fixed top-0 right-0 z-[201] h-full w-full sm:w-[420px] flex flex-col transition-transform duration-400 ease-out"
        style={{
          backgroundColor: "var(--hc-parchment)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: isOpen ? "-8px 0 40px rgba(28,16,8,0.15)" : "none",
        }}
      >
        {/* ── HEADER ──────────────────────────────────────── */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{
            backgroundColor: "var(--hc-espresso)",
            color: "var(--hc-parchment)",
          }}
        >
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
            >
              Your Bag ({itemCount})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1 transition-opacity hover:opacity-70"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── FREE SHIPPING BAR ───────────────────────────── */}
        <div
          className="px-6 py-3"
          style={{ borderBottom: "1px solid var(--hc-stone)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Truck size={14} strokeWidth={1.5} style={{ color: "var(--hc-sienna)" }} />
            <span
              className="text-xs"
              style={{ fontFamily: "'Karla', sans-serif", color: "var(--hc-espresso)" }}
            >
              {hasFreeShipping
                ? "You've unlocked complimentary shipping"
                : `$${amountToFreeShipping.toFixed(0)} away from complimentary shipping`}
            </span>
          </div>
          <div
            className="w-full h-1 overflow-hidden"
            style={{ backgroundColor: "var(--hc-sand)" }}
          >
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{
                width: `${shippingProgress}%`,
                backgroundColor: hasFreeShipping
                  ? "var(--hc-sienna)"
                  : "var(--hc-espresso)",
              }}
            />
          </div>
        </div>

        {/* ── SCROLLABLE CONTENT ──────────────────────────── */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag
                size={40}
                strokeWidth={1}
                style={{ color: "var(--hc-stone)" }}
                className="mb-4"
              />
              <p
                className="text-sm mb-2"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-espresso)",
                }}
              >
                Your bag is empty
              </p>
              <p
                className="text-xs mb-6"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sienna)",
                }}
              >
                Begin with something considered.
              </p>
              <button onClick={closeCart} className="hc-btn-primary text-xs">
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              {/* Cart items */}
              <div className="px-6 py-4">
                {items.map((item) => (
                  <div
                    key={item.lineId}
                    className="flex gap-4 py-4"
                    style={{ borderBottom: "1px solid var(--hc-stone)" }}
                  >
                    {/* Image */}
                    <Link
                      href={`/products/${item.productHandle}`}
                      onClick={closeCart}
                      className="shrink-0"
                    >
                      <div
                        className="w-20 h-24 overflow-hidden"
                        style={{ backgroundColor: "var(--hc-sand)" }}
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ShoppingBag size={20} strokeWidth={1} style={{ color: "var(--hc-stone)" }} />
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link
                          href={`/products/${item.productHandle}`}
                          onClick={closeCart}
                        >
                          <p
                            className="text-sm leading-snug mb-0.5 hover:opacity-70 transition-opacity"
                            style={{
                              fontFamily: "'Libre Baskerville', serif",
                              color: "var(--hc-espresso)",
                              fontWeight: 400,
                            }}
                          >
                            {item.name}
                          </p>
                        </Link>
                        {item.variantLabel && (
                          <p
                            className="text-xs"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              color: "var(--hc-sienna)",
                            }}
                          >
                            {item.variantLabel}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div
                          className="flex items-center"
                          style={{ border: "1px solid var(--hc-stone)" }}
                        >
                          <button
                            onClick={() =>
                              updateQuantity(item.lineId, item.quantity - 1)
                            }
                            className="w-10 h-10 flex items-center justify-center hover:bg-[var(--hc-sand)] transition-colors"
                            aria-label="Decrease quantity"
                            disabled={isLoading}
                          >
                            <Minus size={14} strokeWidth={1.5} />
                          </button>
                          <span
                            className="w-8 h-10 flex items-center justify-center text-xs"
                            style={{ fontFamily: "'Karla', sans-serif" }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.lineId, item.quantity + 1)
                            }
                            className="w-10 h-10 flex items-center justify-center hover:bg-[var(--hc-sand)] transition-colors"
                            aria-label="Increase quantity"
                            disabled={isLoading}
                          >
                            <Plus size={14} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Price + remove */}
                        <div className="flex items-center gap-3">
                          <span
                            className="text-sm"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              color: "var(--hc-espresso)",
                              fontWeight: 500,
                            }}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeItem(item.lineId)}
                            disabled={isLoading}
                            className="text-xs underline transition-opacity hover:opacity-60"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              color: "var(--hc-sienna)",
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── CROSS-SELL / NUDGE ─────────────────────── */}
              {(crossSells.length > 0 || nudgeItems.length > 0) && (
                <div
                  className="px-6 py-5"
                  style={{
                    backgroundColor: "var(--hc-warm-white, #FAF8F4)",
                    borderTop: "1px solid var(--hc-stone)",
                    borderBottom: "1px solid var(--hc-stone)",
                  }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      color: "var(--hc-sienna)",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                    }}
                  >
                    {!hasFreeShipping
                      ? "Add to unlock free shipping"
                      : "You may also like"}
                  </p>
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {(!hasFreeShipping ? nudgeItems : crossSells)
                      .slice(0, 3)
                      .map((product) => (
                        <button
                          key={product.id}
                          onClick={() => {
                            const defaultVariant = product.variants?.find(
                              (v) => v.available
                            );
                            const gid = getShopifyVariantGid(product, defaultVariant);
                            if (gid) addItem(gid, 1);
                          }}
                          className="shrink-0 w-24 text-left group"
                        >
                          <div
                            className="w-24 h-28 overflow-hidden mb-2"
                            style={{ backgroundColor: "var(--hc-sand)" }}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <p
                            className="text-[10px] leading-tight mb-0.5 line-clamp-2"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              color: "var(--hc-espresso)",
                            }}
                          >
                            {product.name}
                          </p>
                          <p
                            className="text-[10px] flex items-center gap-1"
                            style={{
                              fontFamily: "'Karla', sans-serif",
                              color: "var(--hc-sienna)",
                            }}
                          >
                            + ${product.price.toFixed(0)}
                            <Plus size={10} />
                          </p>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* ── FOOTER / CHECKOUT ───────────────────────────── */}
        {items.length > 0 && (
          <div
            className="px-6 py-5"
            style={{
              borderTop: "1px solid var(--hc-stone)",
              backgroundColor: "var(--hc-parchment)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  color: "var(--hc-sienna)",
                  fontWeight: 500,
                }}
              >
                Subtotal
              </span>
              <span
                className="text-lg"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  color: "var(--hc-espresso)",
                }}
              >
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p
              className="text-xs mb-4 text-center"
              style={{
                fontFamily: "'Karla', sans-serif",
                color: "var(--hc-stone)",
              }}
            >
              Shipping calculated at checkout
            </p>
            <button
              className="w-full hc-btn-primary flex items-center justify-center gap-2"
              onClick={goToCheckout}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
