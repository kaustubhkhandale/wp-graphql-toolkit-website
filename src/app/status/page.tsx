import type { Metadata } from "next";
import { Article, CardGrid, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Service Status | WP GraphQL Toolkit", description: "WP GraphQL Toolkit service and compatibility status." };

export default function StatusPage() {
  return <ContentPage><PageHero eyebrow="Service status" title="All documented systems are operational." intro="Toolkit primarily runs inside your WordPress environment. This page explains the components that may affect availability and how to diagnose them." />
    <CardGrid items={[
      { label: "Operational", title: "Product website", body: "Documentation, templates, legal information, and release notes are available." },
      { label: "Site dependent", title: "Schema introspection", body: "Availability depends on your WordPress endpoint, WPGraphQL, permissions, and hosting." },
      { label: "Site dependent", title: "Query previews", body: "Preview requests execute against the configured WordPress GraphQL endpoint." },
      { label: "Local", title: "Saved queries", body: "Availability depends on the Toolkit plugin, WordPress database, and user permissions." },
      { label: "Local", title: "Code export", body: "Export generation runs from the Toolkit interface and does not require a hosted API." },
      { label: "Planned", title: "License and updates", body: "Hosted license and update services will be listed here when they become part of the product." },
    ]} />
    <Article notice="This is a static status and dependency guide, not automated uptime monitoring. Do not treat it as proof of real-time availability." sections={[
      { title: "When Toolkit Appears Offline", bullets: ["Open the WordPress GraphQL endpoint directly and confirm it responds.", "Check WordPress, PHP, web server, and GraphQL logs.", "Temporarily disable caching or security rules that may block GraphQL requests.", "Confirm the current user can access Toolkit and requested content.", "Verify WPGraphQL and related extensions are active and compatible."] },
      { title: "Incident Communication", body: ["Confirmed incidents affecting hosted Toolkit services will be documented here and in the changelog once those services launch. Issues isolated to a WordPress site should be investigated with the site's hosting provider and plugin logs."] },
    ]} />
  </ContentPage>;
}
