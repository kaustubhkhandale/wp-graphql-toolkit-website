import type { Metadata } from "next";
import { Article, CardGrid, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Documentation | WP GraphQL Toolkit", description: "Install, configure, and use WP GraphQL Toolkit." };

export default function DocsPage() {
  return <ContentPage><PageHero eyebrow="Documentation" title="Build reliable WPGraphQL queries, visually." intro="A practical guide to connecting WordPress, exploring your schema, generating queries, testing results, and exporting frontend-ready code." actions={[{ href: "#quick-start", label: "Quick start" }, { href: "/templates", label: "Browse templates" }]} />
    <CardGrid items={[
      { label: "01", title: "Connect WordPress", body: "Point Toolkit at a WordPress installation with WPGraphQL enabled." },
      { label: "02", title: "Explore the schema", body: "Browse posts, pages, taxonomies, custom types, and extension fields." },
      { label: "03", title: "Build and preview", body: "Select fields visually, provide arguments, and verify live response data." },
      { label: "04", title: "Save and organize", body: "Keep useful queries reusable and understandable across projects." },
      { label: "05", title: "Export code", body: "Move validated operations into Next.js, React, Nuxt, Apollo, or Relay." },
      { label: "06", title: "Troubleshoot safely", body: "Diagnose authentication, schema, CORS, and plugin compatibility issues." },
    ]} />
    <Article sections={[
      { title: "Quick Start", body: ["Install and activate WPGraphQL on your WordPress site, then install and activate WP GraphQL Toolkit. Open the Toolkit workspace from WordPress admin and confirm the schema explorer loads."], bullets: ["Use a staging site while testing new queries.", "Confirm custom post types are configured to show in GraphQL.", "Only expose fields and operations your frontend needs."] },
      { title: "Build Your First Query", body: ["Choose a root field such as posts, pages, or products. Add arguments, select nested fields, preview the response, then save or export the operation."], code: `query LatestPosts {\n  posts(first: 10, where: { status: PUBLISH }) {\n    nodes {\n      id\n      slug\n      title\n      excerpt\n    }\n  }\n}` },
      { title: "Schema Explorer", body: ["The explorer reflects the schema currently exposed by your WordPress endpoint. If a type or field is missing, check its WordPress registration and the plugin that exposes it to WPGraphQL."], bullets: ["ACF fields require a compatible WPGraphQL ACF integration.", "WooCommerce fields require the relevant WPGraphQL WooCommerce extension.", "Multilingual fields depend on the selected multilingual integration."] },
      { title: "Authentication", body: ["Public queries use the permissions exposed by your GraphQL endpoint. Queries for drafts, private content, mutations, or protected data require an authenticated WordPress user and a supported authentication method."], bullets: ["Never place administrator credentials or long-lived secrets in browser code.", "Use server-side requests for privileged operations.", "Apply least-privilege WordPress roles and capabilities."] },
      { title: "Exporting Queries", body: ["Export validated operations as GraphQL documents or code-friendly strings. Keep the query separate from presentation components and regenerate frontend types when your schema changes."], code: `const response = await fetch(process.env.WORDPRESS_GRAPHQL_URL!, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ query: LatestPosts }),\n});` },
      { title: "Troubleshooting", bullets: ["Schema not loading: verify the endpoint, WPGraphQL activation, permissions, and server logs.", "Field missing: confirm the field is exposed to GraphQL and clear schema or object caches.", "Preview unauthorized: authenticate with an account that has the required capability.", "Frontend request blocked: configure CORS carefully or proxy through your server.", "Unexpected null values: inspect field resolvers, publication status, and viewer permissions."] },
    ]} />
  </ContentPage>;
}
