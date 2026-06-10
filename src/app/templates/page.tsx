import type { Metadata } from "next";
import { Article, CardGrid, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Query Templates | WP GraphQL Toolkit", description: "Reusable WPGraphQL query patterns." };

export default function TemplatesPage() {
  return <ContentPage><PageHero eyebrow="Query templates" title="Start from proven query patterns." intro="Use these patterns as a starting point, then adapt fields and arguments to match the schema exposed by your WordPress site." actions={[{ href: "/docs", label: "Read documentation" }]} />
    <CardGrid items={[
      { label: "Content", title: "Latest posts", body: "Published posts with identifiers, slugs, excerpts, featured images, and pagination." },
      { label: "Routing", title: "Page by URI", body: "Resolve a WordPress page using its URI for dynamic frontend routes." },
      { label: "Navigation", title: "Menu tree", body: "Fetch menu items and parent relationships for frontend navigation." },
      { label: "Taxonomy", title: "Posts by category", body: "Filter content by category, tag, or a custom taxonomy term." },
      { label: "Search", title: "Content search", body: "Search exposed content types with pagination and result metadata." },
      { label: "Commerce", title: "Product catalog", body: "Query product listings, prices, images, and taxonomy data when WooGraphQL is active." },
    ]} />
    <Article sections={[
      { title: "Page By URI", code: `query PageByUri($uri: ID!) {\n  nodeByUri(uri: $uri) {\n    ... on Page {\n      id\n      title\n      content\n      slug\n    }\n  }\n}` },
      { title: "Paginated Posts", code: `query Posts($after: String) {\n  posts(first: 12, after: $after) {\n    pageInfo { hasNextPage endCursor }\n    nodes { id slug title excerpt }\n  }\n}` },
      { title: "Template Safety", body: ["Templates are examples, not guaranteed drop-in operations. Validate every template against your endpoint because field names, nullability, permissions, and extension behavior vary between WordPress installations."] },
    ]} />
  </ContentPage>;
}
