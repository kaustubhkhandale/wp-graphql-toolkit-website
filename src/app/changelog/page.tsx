import type { Metadata } from "next";
import { Article, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = { title: "Changelog | WP GraphQL Toolkit", description: "Product changes and release notes." };

export default function ChangelogPage() {
  return <ContentPage><PageHero eyebrow="Changelog" title="What is new in WP GraphQL Toolkit." intro="Release notes for the Toolkit experience. Dates and versions below establish the initial public roadmap and should be updated with every shipped release." />
    <Article notice="This changelog currently documents the website's initial product scope. Replace planned entries with verified release notes as plugin builds are published." sections={[
      { title: "0.1.0 - Initial Preview", body: ["Initial product website and preview documentation published on June 10, 2026."], bullets: ["Visual query builder product flow", "Schema explorer and live preview concepts", "Saved query and export workflows", "Starter query templates", "Documentation, integrations, status, privacy, and terms pages"] },
      { title: "Planned - Plugin Preview", bullets: ["Connect to the active WPGraphQL schema", "Select fields and arguments visually", "Preview query responses", "Save and organize reusable operations", "Export GraphQL documents and frontend-ready snippets"] },
      { title: "Release Policy", body: ["Release notes should identify added capabilities, compatibility changes, migrations, security fixes, deprecations, and known limitations. Security-sensitive details may be delayed until users have had time to update."] },
    ]} />
  </ContentPage>;
}
