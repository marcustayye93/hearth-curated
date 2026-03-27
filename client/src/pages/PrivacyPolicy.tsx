// HEARTH CURATED — Privacy Policy
// Compliant with: GDPR (EU), CCPA (California), PDPA (Singapore)
// Tailored to: Shopify-based e-commerce, no direct data collection beyond checkout

import LegalPageLayout, { PolicySection } from "@/components/LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      seoTitle="Privacy Policy — Hearth Curated"
      seoDescription="Hearth Curated's privacy policy. Learn how we collect, use, store, and protect your personal data when you shop with us."
      canonicalPath="/privacy-policy"
      lastUpdated="27 March 2026"
    >
      <PolicySection title="1. Introduction" delay={0.05}>
        <p>
          Hearth Curated ("we," "us," or "our") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your personal information when you visit our website at
          hearthcurated.com (the "Site") or make a purchase from us.
        </p>
        <p>
          By accessing or using our Site, you agree to the collection and use of
          information in accordance with this policy. If you do not agree with
          the terms of this policy, please do not access the Site.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect" delay={0.1}>
        <p>
          We collect information that you provide directly to us, information
          collected automatically when you use our Site, and information from
          third-party sources.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            Information you provide:
          </strong>{" "}
          When you make a purchase, create an account, subscribe to our
          newsletter, or contact us, you may provide your name, email address,
          shipping address, billing address, phone number, and payment
          information. Payment details are processed securely by Shopify Payments
          and are never stored on our servers.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            Information collected automatically:
          </strong>{" "}
          When you visit our Site, we automatically collect certain information
          about your device, including your IP address, browser type, operating
          system, referring URLs, and browsing behaviour on our Site. We collect
          this information using cookies and similar tracking technologies.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            Information from third parties:
          </strong>{" "}
          We may receive information about you from third-party services such as
          Shopify (our e-commerce platform), payment processors, and analytics
          providers.
        </p>
      </PolicySection>

      <PolicySection title="3. How We Use Your Information" delay={0.15}>
        <p>We use the information we collect to:</p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>Process and fulfil your orders, including shipping and payment processing</li>
          <li>Communicate with you about your orders, including order confirmations and shipping updates</li>
          <li>Send you marketing communications, if you have opted in (you may unsubscribe at any time)</li>
          <li>Improve our Site, products, and services through analytics and usage data</li>
          <li>Detect, prevent, and address fraud or other illegal activities</li>
          <li>Comply with legal obligations and enforce our terms</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Cookies and Tracking Technologies" delay={0.2}>
        <p>
          We use cookies and similar technologies to enhance your browsing
          experience, analyse Site traffic, and understand where our visitors
          come from. Cookies are small data files placed on your device when you
          visit our Site.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            Essential cookies
          </strong>{" "}
          are necessary for the Site to function properly, including maintaining
          your shopping cart and processing checkout. These cannot be disabled.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            Analytics cookies
          </strong>{" "}
          help us understand how visitors interact with our Site. We use this
          data to improve our services. You may disable analytics cookies through
          your browser settings without affecting your ability to use the Site.
        </p>
        <p>
          Most web browsers allow you to control cookies through their settings.
          Please note that disabling certain cookies may affect the functionality
          of our Site.
        </p>
      </PolicySection>

      <PolicySection title="5. How We Share Your Information" delay={0.25}>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with the following categories of
          service providers who assist us in operating our business:
        </p>
        <ul
          className="list-disc pl-6 space-y-2"
          style={{ color: "var(--hc-sienna)" }}
        >
          <li>
            <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>E-commerce platform:</strong>{" "}
            Shopify, which hosts our store and processes transactions
          </li>
          <li>
            <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>Payment processors:</strong>{" "}
            Secure third-party payment providers that handle your payment information
          </li>
          <li>
            <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>Shipping carriers:</strong>{" "}
            Fulfilment partners who deliver your orders
          </li>
          <li>
            <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>Analytics providers:</strong>{" "}
            Services that help us understand Site usage and improve our offerings
          </li>
        </ul>
        <p>
          We may also disclose your information if required by law, regulation,
          legal process, or governmental request, or to protect our rights,
          privacy, safety, or property.
        </p>
      </PolicySection>

      <PolicySection title="6. Data Retention" delay={0.3}>
        <p>
          We retain your personal information for as long as necessary to fulfil
          the purposes for which it was collected, including to satisfy legal,
          accounting, or reporting requirements. Order records are retained for a
          minimum of six years to comply with tax and accounting obligations.
        </p>
        <p>
          If you request deletion of your personal data, we will honour your
          request within 30 days, subject to any legal obligations that require
          us to retain certain information.
        </p>
      </PolicySection>

      <PolicySection title="7. Your Rights" delay={0.35}>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            For all customers:
          </strong>{" "}
          You have the right to access the personal information we hold about
          you, request correction of inaccurate data, and request deletion of
          your personal data. You may also unsubscribe from marketing
          communications at any time by clicking the "unsubscribe" link in any
          email.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            For EU/EEA residents (GDPR):
          </strong>{" "}
          You have the right to data portability, the right to restrict
          processing, and the right to object to processing. You also have the
          right to lodge a complaint with your local data protection authority.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            For California residents (CCPA):
          </strong>{" "}
          You have the right to know what personal information we collect, the
          right to request deletion, and the right to opt out of the sale of
          personal information. We do not sell personal information.
        </p>
        <p>
          <strong style={{ color: "var(--hc-espresso)", fontWeight: 600 }}>
            For Singapore residents (PDPA):
          </strong>{" "}
          You have the right to access and correct your personal data held by
          us. You may withdraw consent for the collection, use, or disclosure of
          your personal data at any time by contacting us.
        </p>
      </PolicySection>

      <PolicySection title="8. Data Security" delay={0.4}>
        <p>
          We implement appropriate technical and organisational measures to
          protect your personal information against unauthorised access,
          alteration, disclosure, or destruction. Our Site uses SSL/TLS
          encryption for all data transmission, and payment information is
          processed through PCI-DSS compliant payment processors.
        </p>
        <p>
          While we strive to protect your personal information, no method of
          transmission over the Internet or electronic storage is completely
          secure. We cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="9. International Data Transfers" delay={0.45}>
        <p>
          Your information may be transferred to and processed in countries
          other than your country of residence, including Singapore and the
          United States, where our service providers operate. These countries may
          have data protection laws that differ from those in your jurisdiction.
          By using our Site, you consent to such transfers.
        </p>
        <p>
          Where required by applicable law, we ensure that appropriate
          safeguards are in place to protect your personal information during
          international transfers.
        </p>
      </PolicySection>

      <PolicySection title="10. Children's Privacy" delay={0.5}>
        <p>
          Our Site is not intended for individuals under the age of 16. We do
          not knowingly collect personal information from children. If we become
          aware that we have collected personal data from a child under 16, we
          will take steps to delete that information promptly.
        </p>
      </PolicySection>

      <PolicySection title="11. Changes to This Policy" delay={0.55}>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable law. We will notify you of any material
          changes by posting the updated policy on this page with a revised
          "Last updated" date. Your continued use of the Site after any changes
          constitutes your acceptance of the updated policy.
        </p>
      </PolicySection>

      <PolicySection title="12. Contact Us" delay={0.6}>
        <p>
          If you have questions about this Privacy Policy, wish to exercise your
          data rights, or have concerns about how we handle your personal
          information, please contact us at:
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
          We will respond to all legitimate requests within 30 days. In certain
          circumstances, we may need to request additional information to verify
          your identity before processing your request.
        </p>
      </PolicySection>
    </LegalPageLayout>
  );
}
