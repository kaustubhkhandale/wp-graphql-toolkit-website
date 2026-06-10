import type { Metadata } from "next";
import { Article, CardGrid, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Contact and Support | WP GraphQL Toolkit", description: "Get support for WP GraphQL Toolkit." };

export default function ContactPage() {
  return <ContentPage><PageHero eyebrow="Contact and support" title="Bring the details. We will help untangle the query." intro="Start with the documentation and troubleshooting checklist. For product support, include enough context to reproduce the problem without sharing secrets." actions={[{ href: "/docs", label: "Read documentation" }, { href: "/status", label: "Check status guide" }]} />
    <CardGrid items={[
      { label: "Product help", title: "Support request", body: "Report unexpected Toolkit behavior with versions, steps, and sanitized logs." },
      { label: "Security", title: "Security report", body: "Report potential vulnerabilities privately. Do not publish exploit details before a fix is available." },
      { label: "Business", title: "Licensing and partnerships", body: "Discuss team licensing, integrations, implementation, and partnership opportunities." },
    ]} />
    <Article notice="A live support form or support email has not yet been configured in this website repository. Add a verified support channel before publishing the site." sections={[
      { title: "Include In A Support Request", bullets: ["WordPress, PHP, WPGraphQL, Toolkit, and relevant extension versions", "Expected behavior and actual behavior", "Minimal reproduction steps", "Sanitized error messages and logs", "Whether the issue occurs with other plugins disabled", "Hosting or proxy details relevant to GraphQL requests"] },
      { title: "Protect Sensitive Data", body: ["Never send passwords, application passwords, access tokens, private keys, database exports, customer data, or unredacted production logs. Replace domain names and identifiers when they are not required to reproduce the issue."] },
      { title: "Scope Of Support", body: ["Toolkit support can help with product behavior and documented compatibility. Custom schema design, frontend implementation, third-party extension bugs, and hosting configuration may require separate development or provider support."] },
    ]} />
  </ContentPage>;
}
