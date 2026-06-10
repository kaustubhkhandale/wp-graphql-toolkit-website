import type { Metadata } from "next";
import { Article, CardGrid, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Integrations | WP GraphQL Toolkit", description: "Compatible WordPress and frontend integrations." };

export default function IntegrationsPage() {
  return <ContentPage><PageHero eyebrow="Integrations" title="Use the WordPress stack you already trust." intro="Toolkit reads the schema exposed by WPGraphQL, so supported extensions and custom types appear naturally when configured correctly." />
    <CardGrid items={[
      { label: "Core", title: "WPGraphQL", body: "The required GraphQL API layer for WordPress posts, pages, users, media, taxonomies, and custom types." },
      { label: "Fields", title: "Advanced Custom Fields", body: "Explore and query ACF field groups that are exposed through a compatible WPGraphQL extension." },
      { label: "Commerce", title: "WooCommerce", body: "Build product, variation, category, cart, and customer operations exposed by your WooGraphQL setup." },
      { label: "Localization", title: "WPML and multilingual", body: "Work with translated content and language arguments when exposed by the installed GraphQL integration." },
      { label: "Frontend", title: "Next.js, Nuxt, Remix", body: "Export operations for server components, loaders, route handlers, and static generation workflows." },
      { label: "Clients", title: "Apollo, Relay, urql, fetch", body: "Use generated operations with your preferred GraphQL client or standards-based HTTP requests." },
    ]} />
    <Article notice="Compatibility depends on the schema and permissions exposed by your WordPress installation. Toolkit does not bypass extension licensing, WordPress capabilities, or endpoint security." sections={[
      { title: "Integration Principle", body: ["WP GraphQL Toolkit is schema-driven. It introspects the active endpoint rather than maintaining a hard-coded list of every possible WordPress field. This lets custom post types, taxonomies, and extension fields participate when they follow GraphQL schema conventions."] },
      { title: "Before You Connect", bullets: ["Use current versions of WordPress, WPGraphQL, Toolkit, and relevant extensions.", "Test integrations on staging before production.", "Expose only the data required by your frontend.", "Review extension-specific authentication and caching guidance."] },
      { title: "Custom Integrations", body: ["Developers can register custom GraphQL types and fields using WPGraphQL APIs. Once present in the endpoint schema, those fields can be discovered and selected in Toolkit. Clear relevant caches after changing schema registration."] },
    ]} />
  </ContentPage>;
}
