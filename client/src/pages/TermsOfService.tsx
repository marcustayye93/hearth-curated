// HEARTH CURATED — Terms of Service
// Standard e-commerce terms covering: use of site, purchases, IP, liability, governing law

import LegalPageLayout, { PolicySection } from "@/components/LegalPageLayout";

export default function TermsOfService() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="The terms and conditions governing your use of our website and services."
      seoTitle="Terms of Service — Hearth Curated"
      seoDescription="Read the terms and conditions for using the Hearth Curated website and purchasing our products."
      canonicalPath="/terms-of-service"
      lastUpdated="27 March 2026"
    >
      <PolicySection title="1. Agreement to Terms" delay={0.05}>
        <p>
          These Terms of Service ("Terms") govern your access to and use of the
          Hearth Curated website at hearthcurated.com (the "Site") and any
          purchases you make through the Site. By accessing or using the Site,
          you agree to be bound by these Terms. If you do not agree to these
          Terms, you must not use the Site.
        </p>
        <p>
          We reserve the right to update or modify these Terms at any time
          without prior notice. Your continued use of the Site following any
          changes constitutes acceptance of the revised Terms. Please review
          these Terms periodically.
        </p>
      </PolicySection>

      <PolicySection title="2. Eligibility" delay={0.1}>
        <p>
          You must be at least 16 years of age to use this Site. By using the
          Site and agreeing to these Terms, you represent and warrant that you
          are at least 16 years old and have the legal capacity to enter into a
          binding agreement.
        </p>
      </PolicySection>

      <PolicySection title="3. Products and Pricing" delay={0.15}>
        <p>
          All product descriptions, images, and specifications on our Site are
          provided for informational purposes and are as accurate as possible.
          However, we do not warrant that product descriptions, colours, or
          other content on the Site are accurate, complete, or error-free.
          Actual product colours may vary slightly due to monitor settings and
          photography.
        </p>
        <p>
          All prices are displayed in Singapore Dollars (SGD) unless otherwise
          stated. We reserve the right to change prices at any time without
          prior notice. Prices do not include customs duties or import taxes for
          international orders, which are the responsibility of the buyer.
        </p>
        <p>
          In the event of a pricing error, we reserve the right to cancel any
          orders placed at the incorrect price. If your order is cancelled due
          to a pricing error, we will issue a full refund.
        </p>
      </PolicySection>

      <PolicySection title="4. Orders and Payment" delay={0.2}>
        <p>
          When you place an order through our Site, you are making an offer to
          purchase the selected products. We reserve the right to accept or
          decline your order for any reason, including product availability,
          errors in product or pricing information, or suspected fraudulent
          activity.
        </p>
        <p>
          Payment is processed at the time of order through Shopify Payments or
          other accepted payment methods displayed at checkout. You agree to
          provide current, complete, and accurate billing and payment
          information. All transactions are processed in Singapore Dollars (SGD).
        </p>
        <p>
          Order confirmation does not constitute acceptance of your order. Your
          order is accepted when we dispatch the products and send you a
          shipping confirmation email.
        </p>
      </PolicySection>

      <PolicySection title="5. Shipping and Delivery" delay={0.25}>
        <p>
          We ship to destinations worldwide. Shipping rates and estimated
          delivery times are displayed on our{" "}
          <a
            href="/shipping-returns"
            style={{ color: "var(--hc-espresso)", textDecoration: "underline" }}
          >
            Shipping & Returns
          </a>{" "}
          page and at checkout. Delivery times are estimates only and are not
          guaranteed.
        </p>
        <p>
          Risk of loss and title for items purchased from us pass to you upon
          delivery of the items to the shipping carrier. We are not responsible
          for delays caused by shipping carriers, customs processing, or events
          beyond our reasonable control.
        </p>
        <p>
          If your order is lost in transit, please contact us within 30 days of
          the estimated delivery date. We will work with the shipping carrier to
          locate your package or arrange a replacement or refund.
        </p>
      </PolicySection>

      <PolicySection title="6. Returns and Refunds" delay={0.3}>
        <p>
          Our returns and refund policy is detailed on our{" "}
          <a
            href="/refund-policy"
            style={{ color: "var(--hc-espresso)", textDecoration: "underline" }}
          >
            Refund Policy
          </a>{" "}
          page, which forms part of these Terms. By making a purchase, you agree
          to the terms of our refund policy.
        </p>
      </PolicySection>

      <PolicySection title="7. Intellectual Property" delay={0.35}>
        <p>
          All content on the Site — including text, graphics, logos, images,
          photographs, product descriptions, page layouts, and software — is the
          property of Hearth Curated or its content suppliers and is protected
          by international copyright, trademark, and other intellectual property
          laws.
        </p>
        <p>
          You may not reproduce, distribute, modify, create derivative works
          from, publicly display, or otherwise use any content from the Site
          without our prior written consent, except for personal, non-commercial
          use in connection with browsing or purchasing products.
        </p>
        <p>
          The Hearth Curated name, logo, and all related names, logos, product
          and service names, designs, and slogans are trademarks of Hearth
          Curated. You must not use such marks without our prior written
          permission.
        </p>
      </PolicySection>

      <PolicySection title="8. User Conduct" delay={0.4}>
        <p>
          You agree to use the Site only for lawful purposes and in accordance
          with these Terms. You agree not to:
        </p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>Use the Site in any way that violates any applicable law or regulation</li>
          <li>Attempt to gain unauthorised access to any part of the Site, other accounts, or computer systems</li>
          <li>Use any automated means (bots, scrapers, spiders) to access the Site or collect data</li>
          <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
          <li>Place fraudulent orders or provide false information</li>
        </ul>
      </PolicySection>

      <PolicySection title="9. Disclaimer of Warranties" delay={0.45}>
        <p>
          The Site and all products are provided on an "as is" and "as
          available" basis without any warranties of any kind, either express or
          implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
        <p>
          We do not warrant that the Site will be uninterrupted, secure, or
          error-free, that defects will be corrected, or that the Site or the
          servers that make it available are free of viruses or other harmful
          components.
        </p>
      </PolicySection>

      <PolicySection title="10. Limitation of Liability" delay={0.5}>
        <p>
          To the fullest extent permitted by applicable law, Hearth Curated
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, including but not limited to loss
          of profits, data, use, or goodwill, arising out of or in connection
          with your use of the Site or purchase of products.
        </p>
        <p>
          Our total liability to you for any claim arising out of or relating to
          these Terms or your use of the Site shall not exceed the total amount
          you paid to us for the specific product(s) giving rise to the claim.
        </p>
      </PolicySection>

      <PolicySection title="11. Indemnification" delay={0.55}>
        <p>
          You agree to indemnify, defend, and hold harmless Hearth Curated and
          its officers, directors, employees, and agents from and against any
          claims, liabilities, damages, losses, and expenses, including
          reasonable legal fees, arising out of or in any way connected with
          your access to or use of the Site, your violation of these Terms, or
          your violation of any rights of a third party.
        </p>
      </PolicySection>

      <PolicySection title="12. Third-Party Links" delay={0.6}>
        <p>
          The Site may contain links to third-party websites or services that
          are not owned or controlled by Hearth Curated. We have no control
          over, and assume no responsibility for, the content, privacy policies,
          or practices of any third-party websites or services. You access
          third-party sites at your own risk.
        </p>
      </PolicySection>

      <PolicySection title="13. Governing Law and Disputes" delay={0.65}>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the Republic of Singapore, without regard to its conflict of
          law provisions. Any disputes arising out of or relating to these Terms
          or your use of the Site shall be subject to the exclusive jurisdiction
          of the courts of Singapore.
        </p>
        <p>
          Before initiating any formal legal proceedings, you agree to first
          attempt to resolve any dispute informally by contacting us at
          hello@hearthcurated.com. We will make reasonable efforts to resolve
          the dispute within 30 days.
        </p>
      </PolicySection>

      <PolicySection title="14. Severability" delay={0.7}>
        <p>
          If any provision of these Terms is held to be invalid, illegal, or
          unenforceable, the remaining provisions shall continue in full force
          and effect. The invalid or unenforceable provision shall be modified
          to the minimum extent necessary to make it valid and enforceable.
        </p>
      </PolicySection>

      <PolicySection title="15. Contact Us" delay={0.75}>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
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
      </PolicySection>
    </LegalPageLayout>
  );
}
