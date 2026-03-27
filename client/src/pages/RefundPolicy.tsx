// HEARTH CURATED — Refund Policy
// Aligned with: actual dropshipping model, worldwide shipping, consumer protection standards
// Covers: returns, refunds, damaged items, lost packages, exchanges

import LegalPageLayout, { PolicySection } from "@/components/LegalPageLayout";

export default function RefundPolicy() {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="Our commitment to making things right if your order doesn't meet expectations."
      seoTitle="Refund Policy — Hearth Curated"
      seoDescription="Hearth Curated's refund and returns policy. Learn about our 30-day return window, refund process, and how we handle damaged or lost items."
      canonicalPath="/refund-policy"
      lastUpdated="27 March 2026"
    >
      <PolicySection title="1. Our Commitment" delay={0.05}>
        <p>
          We want you to be completely satisfied with every purchase from Hearth
          Curated. If something isn't right — whether the item arrived damaged,
          doesn't match its description, or simply isn't what you expected — we
          will work with you to find a fair resolution.
        </p>
      </PolicySection>

      <PolicySection title="2. Return Eligibility" delay={0.1}>
        <p>
          You may request a return or refund within{" "}
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            30 days
          </strong>{" "}
          of receiving your order. To be eligible for a return, the item must be
          unused, in its original condition, and in its original packaging where
          applicable.
        </p>
        <p>
          The following items are{" "}
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            not eligible
          </strong>{" "}
          for return:
        </p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>Items that have been used, washed, or altered</li>
          <li>Perishable goods, including artisan food products</li>
          <li>Items marked as "Final Sale" at the time of purchase</li>
          <li>Gift cards</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. How to Request a Return" delay={0.15}>
        <p>
          To initiate a return, please contact us at{" "}
          <a
            href="mailto:hello@hearthcurated.com"
            style={{ color: "var(--hc-espresso)", textDecoration: "underline" }}
          >
            hello@hearthcurated.com
          </a>{" "}
          with the following information:
        </p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>Your order number</li>
          <li>The item(s) you wish to return</li>
          <li>The reason for your return</li>
          <li>Photographs of the item (required for damaged or defective items)</li>
        </ul>
        <p>
          We will review your request and respond within 2 business days with
          instructions on how to proceed.
        </p>
      </PolicySection>

      <PolicySection title="4. Damaged or Defective Items" delay={0.2}>
        <p>
          If your item arrives damaged, defective, or materially different from
          its description on our Site, we will offer you a{" "}
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            full refund including any shipping costs
          </strong>{" "}
          — or a replacement, at your preference. You will not be required to
          return the damaged item in most cases.
        </p>
        <p>
          Please report damaged or defective items within 7 days of delivery,
          including clear photographs showing the damage. This helps us improve
          our packaging and work with our fulfilment partners to prevent future
          issues.
        </p>
      </PolicySection>

      <PolicySection title="5. Lost Packages" delay={0.25}>
        <p>
          If your order has not arrived within the estimated delivery window
          (7–15 business days for Asia-Pacific, 15–25 business days for
          international destinations), please contact us. We will investigate
          with our shipping partners and, if the package is confirmed lost,
          offer you a full refund or replacement at no additional cost.
        </p>
        <p>
          Please allow up to the maximum estimated delivery time before
          reporting a lost package, as international shipments may occasionally
          experience delays due to customs processing.
        </p>
      </PolicySection>

      <PolicySection title="6. Change of Mind Returns" delay={0.3}>
        <p>
          If you simply change your mind about a purchase, you may return the
          item within 30 days of delivery provided it meets the eligibility
          criteria in Section 2. For change-of-mind returns:
        </p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>Return shipping costs are the responsibility of the buyer</li>
          <li>
            The original shipping fee (if any) is non-refundable
          </li>
          <li>
            A refund will be issued once we receive confirmation that the item
            has been shipped back, or upon receipt of the returned item
          </li>
        </ul>
        <p>
          Due to the nature of international shipping, we recommend contacting
          us before returning an item so we can provide the most efficient
          return instructions for your location.
        </p>
      </PolicySection>

      <PolicySection title="7. Refund Process" delay={0.35}>
        <p>
          Once your return is approved, refunds will be processed to your
          original payment method. Please allow the following timeframes:
        </p>
        <div
          className="overflow-x-auto mt-4 mb-4"
          style={{ border: "1px solid var(--hc-stone)" }}
        >
          <table className="w-full text-sm" style={{ fontFamily: "'Karla', sans-serif" }}>
            <thead>
              <tr style={{ backgroundColor: "var(--hc-espresso)" }}>
                <th
                  className="text-left px-5 py-3 text-xs tracking-widest uppercase"
                  style={{ color: "var(--hc-parchment)", fontWeight: 500 }}
                >
                  Stage
                </th>
                <th
                  className="text-left px-5 py-3 text-xs tracking-widest uppercase"
                  style={{ color: "var(--hc-parchment)", fontWeight: 500 }}
                >
                  Timeframe
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Return review & approval", "1–2 business days"],
                ["Refund processed", "3–5 business days after approval"],
                ["Refund appears on your statement", "5–10 business days (varies by bank)"],
              ].map(([stage, time], i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: "1px solid var(--hc-stone)",
                    backgroundColor: i % 2 === 0 ? "transparent" : "rgba(196,185,170,0.08)",
                  }}
                >
                  <td className="px-5 py-3" style={{ color: "var(--hc-espresso)" }}>
                    {stage}
                  </td>
                  <td className="px-5 py-3" style={{ color: "var(--hc-sienna)" }}>
                    {time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          If you have not received your refund within the timeframes above,
          please check with your bank or payment provider first, then contact us
          at hello@hearthcurated.com for assistance.
        </p>
      </PolicySection>

      <PolicySection title="8. Exchanges" delay={0.4}>
        <p>
          We do not offer direct exchanges at this time. If you would like a
          different item, size, or variant, please return the original item for
          a refund and place a new order. This ensures the fastest processing
          time for you.
        </p>
      </PolicySection>

      <PolicySection title="9. Partial Refunds" delay={0.45}>
        <p>
          In certain situations, we may offer a partial refund at our
          discretion. This may apply to:
        </p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>Items returned with visible signs of use or wear</li>
          <li>Items returned without original packaging</li>
          <li>Items returned after the 30-day window but within 60 days (considered on a case-by-case basis)</li>
        </ul>
      </PolicySection>

      <PolicySection title="10. Consumer Protection Rights" delay={0.5}>
        <p>
          Nothing in this policy is intended to limit or exclude any consumer
          rights that cannot be excluded or limited under applicable law. If you
          are a consumer in the European Union, United Kingdom, Australia, or
          other jurisdiction with mandatory consumer protection laws, your
          statutory rights remain unaffected by this policy.
        </p>
        <p>
          For EU consumers: you have a statutory right to withdraw from a
          distance purchase within 14 days of receiving the goods, without
          giving any reason. This right is in addition to the 30-day return
          window described above.
        </p>
      </PolicySection>

      <PolicySection title="11. Contact Us" delay={0.55}>
        <p>
          For any questions about returns, refunds, or this policy, please
          contact us:
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            Email:
          </strong>{" "}
          <a
            href="mailto:hello@hearthcurated.com"
            style={{ color: "var(--hc-espresso)", textDecoration: "underline" }}
          >
            hello@hearthcurated.com
          </a>
        </p>
        <p>
          We aim to respond to all enquiries within 2 business days. Our goal is
          to resolve every issue fairly and promptly.
        </p>
      </PolicySection>
    </LegalPageLayout>
  );
}
