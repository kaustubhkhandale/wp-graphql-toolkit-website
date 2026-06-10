import type { Metadata } from "next";
import { Article, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Terms of Service | WP GraphQL Toolkit", description: "Terms governing use of WP GraphQL Toolkit." };

export default function TermsPage() {
  return <ContentPage><PageHero eyebrow="Legal" title="Terms of Service" intro="Terms governing access to the WP GraphQL Toolkit website, plugin, documentation, and future hosted services. Effective June 10, 2026." />
    <Article notice="Launch checklist: these terms are a product-specific draft, not legal advice. Qualified counsel must review them and add the legal entity, jurisdiction, verified contact details, payment terms, and actual license terms before publication." sections={[
      { title: "Acceptance", body: ["By accessing or using WP GraphQL Toolkit, you agree to these terms and applicable policies. If you use the product for an organization, you represent that you have authority to accept these terms for it."] },
      { title: "Product Use", body: ["Toolkit assists with exploring schemas, generating GraphQL operations, previewing responses, organizing queries, and exporting code. You are responsible for reviewing generated output and determining whether it is appropriate, secure, and correct for your environment."] },
      { title: "Your Responsibilities", bullets: ["Comply with laws, WordPress and extension licenses, and third-party terms.", "Maintain backups and test changes before production deployment.", "Secure accounts, credentials, GraphQL endpoints, and WordPress installations.", "Avoid using the product to access data without authorization or disrupt systems.", "Review queries for performance, permissions, privacy, and data exposure."] },
      { title: "Accounts, Plans, And Payments", body: ["If accounts or paid plans are introduced, users must provide accurate information and protect account access. Pricing, billing periods, taxes, renewal, cancellation, and refund rules must be disclosed at purchase. Features and limits may differ by plan."] },
      { title: "Intellectual Property", body: ["The product, website, branding, and documentation are protected by applicable intellectual property laws. Users retain rights to their WordPress content, custom schemas, and queries, subject to third-party rights. Separate open-source or commercial license terms may govern plugin code and must be published with each distribution."] },
      { title: "Third-Party Services", body: ["Toolkit interoperates with WordPress, WPGraphQL, extensions, hosts, and frontend tools that are not controlled by the Toolkit provider. Their availability, security, licensing, and behavior are governed by their respective providers."] },
      { title: "Beta And Generated Output", body: ["Preview, beta, AI-assisted, or generated features may be incomplete or inaccurate. Generated queries and code must be reviewed and tested. Do not rely on the product as the sole safeguard for security, privacy, backups, or regulatory compliance."] },
      { title: "Warranty Disclaimer", body: ["To the maximum extent permitted by law, the product is provided as is and as available, without warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted availability, or error-free operation."] },
      { title: "Limitation Of Liability", body: ["To the maximum extent permitted by law, the provider will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, goodwill, or business interruption. Final liability caps and mandatory-law exceptions must be added by counsel."] },
      { title: "Suspension And Termination", body: ["Access may be suspended or terminated for abuse, security risk, nonpayment, legal requirements, or material breach. Users may stop using the product at any time, subject to payment and license obligations."] },
      { title: "Changes And Contact", body: ["Terms may change as the product evolves. Material changes will update the effective date and may receive additional notice. Questions should use the verified contact method published on the Contact page once configured."] },
    ]} />
  </ContentPage>;
}
