import type { Metadata } from "next";
import { Article, ContentPage, PageHero } from "@/components/site/ContentPage";

export const metadata: Metadata = {
  title: "Changelog | WP GraphQL Toolkit",
  description: "Release notes for Headless GraphQL Toolkit through version 1.1.4.",
};

export default function ChangelogPage() {
  return <ContentPage><PageHero eyebrow="Changelog" title="What is new in Headless GraphQL Toolkit." intro="A complete record of plugin improvements and fixes through the latest release." actions={[
    { href: "/download-plugin/headless-graphql-toolkit-1.1.4.zip", label: "Download version 1.1.4" },
  ]} />
    <Article notice="Latest release: version 1.1.4, published June 11, 2026." sections={[
      { title: "1.1.4 - June 11, 2026", bullets: ["Added clear clipboard feedback and tooltips for icon actions.", "Improved Query Builder field layout to prevent label overlap.", "Removed the unused Author URI."] },
      { title: "1.1.3 - June 10, 2026", bullets: ["Updated the Visit plugin site link to the official plugin website."] },
      { title: "1.1.2 - June 10, 2026", bullets: ["Prepared the plugin for WordPress.org directory review.", "Removed unfinished premium AI controls from the free plugin.", "Updated public naming, metadata, privacy disclosures, and package contents."] },
      { title: "1.1.1 - June 10, 2026", bullets: ["Added a safe uninstall data preference that preserves plugin data by default.", "Added explicit cleanup of saved queries, favorites, categories, and settings when administrators enable uninstall deletion.", "Included uninstall.php and server-side settings support in marketplace packages."] },
      { title: "1.1.0 - June 9, 2026", bullets: ["Added schema-aware Playground field suggestions with keyboard and mouse interactions.", "Added query saving from Query Builder and Playground.", "Redesigned Saved Queries, Templates, Schema Explorer, and shared page headers.", "Added WPGraphQL compatibility checks, diagnostics, and automated release quality tests."] },
      { title: "1.0.0 - Initial Development Release", bullets: ["Published the initial development release of Headless GraphQL Toolkit."] },
    ]} />
  </ContentPage>;
}
