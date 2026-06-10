import Link from "next/link";
import styles from "./SiteChrome.module.css";

const footerGroups = [
  ["Product", ["/#features", "Features"], ["/integrations", "Integrations"], ["/templates", "Templates"], ["/#pricing", "Pricing"]],
  ["Support", ["/docs", "Documentation"], ["/status", "API Status"], ["/contact", "Contact"], ["/changelog", "Changelog"]],
  ["Legal", ["/privacy", "Privacy Policy"], ["/terms", "Terms of Service"]],
] as const;

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">WP GraphQL Toolkit</Link>
      <nav className={styles.nav}>
        <Link href="/#features">Features</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/templates">Templates</Link>
        <Link href="/changelog">Changelog</Link>
        <Link className={styles.cta} href="/#pricing">Get Started</Link>
      </nav>
      <Link className={styles.mobileCta} href="/docs">Docs</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <Link className={styles.brand} href="/">WP GraphQL Toolkit</Link>
        <p>Visual tooling for building reliable headless WordPress experiences with WPGraphQL.</p>
      </div>
      {footerGroups.map(([title, ...links]) => (
        <div key={title}>
          <h3>{title}</h3>
          {links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
      ))}
      <div className={styles.copyright}>© 2026 WP GraphQL Toolkit. WordPress and WPGraphQL are trademarks of their respective owners.</div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <div className={styles.shell}><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
