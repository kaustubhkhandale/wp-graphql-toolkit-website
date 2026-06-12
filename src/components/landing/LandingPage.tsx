import Image from "next/image";
import Link from "next/link";
import styles from "./LandingPage.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const features = [
  ["{ }", "Visual Query Builder", "Point and click to build complex queries. We handle nesting and fragments for you."],
  ["T", "Prebuilt Templates", "Start from battle-tested query patterns for posts, pages, and custom post types."],
  ["S", "Schema Explorer", "Browse your entire WordPress schema without leaving the toolkit interface."],
  [">", "GraphQL Playground", "Test your queries instantly with live WordPress data to verify results."],
  ["Q", "Saved Queries", "Organize and store your most-used queries in custom folders for team sharing."],
  ["EX", "Export Center", "Export to JavaScript, TypeScript, or direct Apollo and Relay fragments."],
];

const steps = [
  ["Choose Template", "Start from a blank query or a curated base."],
  ["Select Fields", "Check boxes for the data you need."],
  ["Generate", "Optimized GraphQL is created instantly."],
  ["Preview", "Verify the output with live data."],
  ["Export", "Paste into your Next.js or Nuxt app."],
];

const faqs = [
  ["Does this support custom ACF fields?", "Absolutely. If fields are exposed to WPGraphQL, Toolkit detects them, parses their types, and lets you build queries for them visually."],
  ["Is the code exported production-ready?", "Yes. Export standard GraphQL syntax to .graphql files or string templates for Apollo, Relay, and native fetch requests."],
  ["Does it work with multisite?", "Yes. WP GraphQL Toolkit is compatible with WordPress Multisite installations, so you can manage queries across your network."],
];

function ButtonLink({ children, secondary = false, href = "../../../download-plugin/headless-graphql-toolkit-1.1.4.zip" }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <Link className={secondary ? styles.secondaryButton : styles.primaryButton} href={href}>{children}</Link>;
}

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.brand} href="/">WP GraphQL Toolkit</Link>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link><Link href="#features">Features</Link><Link href="#pricing">Pricing</Link><Link href="/docs">Docs</Link>
        <ButtonLink>Get Started Free</ButtonLink>
      </div>
      <Link className={styles.mobileCta} href="#pricing">Get Started</Link>
    </nav>
  );
}

function BrowserFrame({ src, alt, priority = false, wide = false }: { src: string; alt: string; priority?: boolean; wide?: boolean }) {
  return (
    <div className={`${styles.browser} ${wide ? styles.wideBrowser : ""}`}>
      <div className={styles.browserBar}><span /><span /><span /><code>localhost:3000/wp-admin/toolkit</code></div>
      <Image className={styles.browserImage} src={`${basePath}${src}`} alt={alt} width={512} height={512} priority={priority} />
    </div>
  );
}

function Hero() {
  return (
    <header className={`${styles.section} ${styles.hero}`}>
      <div className={styles.heroGlow} />
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>The visual workspace for WPGraphQL</p>
        <h1>Build WPGraphQL Queries Visually.<br /><span>Ship Headless WordPress Faster.</span></h1>
        <p>Generate, preview, save, and export production-ready WPGraphQL queries without manually writing GraphQL code.</p>
        <div className={styles.buttonRow}><ButtonLink>Get Started Free</ButtonLink><ButtonLink secondary href="https://www.youtube.com/watch?v=R6rsmwmTAJc">View Demo Video</ButtonLink></div>
      </div>
      <BrowserFrame src="/stitch/dashboard-layout.png" alt="WP GraphQL Toolkit dashboard" priority wide />
    </header>
  );
}

function ProblemSection() {
  return (
    <section className={`${styles.section} ${styles.altSection}`}>
      <div className={styles.twoColumn}>
        <div>
          <p className={styles.eyebrow}>A better workflow</p>
          <h2>Stop writing the same GraphQL queries again and again.</h2>
          <p className={styles.muted}>Manual query building is error-prone and time-consuming. Stop context-switching between GraphiQL and your IDE just to find one field ID.</p>
          <ul className={styles.problemList}><li>No more schema guessing games</li><li>No more syntax errors in production</li><li>No more messy query documentation</li></ul>
        </div>
        <div className={styles.compareStack}>
          <article className={`${styles.card} ${styles.goodCard}`}><span className={styles.cardLabel}>WITH TOOLKIT</span><p>Select fields, see live previews, and export with one click.</p><code>getPosts(first: 10) {"{ ... }"} <b>OK</b></code></article>
          <article className={`${styles.card} ${styles.dimCard}`}><span className={styles.cardLabel}>WITHOUT TOOLKIT</span><p>Wrestle with nested fragments and accidental circular dependencies.</p><code>query {"{ nodes { id ... } }"}</code></article>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>Everything in one place</p><h2>Master WPGraphQL without the busywork.</h2></div>
      <div className={styles.featureGrid}>{features.map(([icon, title, copy]) => <article className={styles.card} key={title}><span className={styles.icon}>{icon}</span><h3>{title}</h3><p className={styles.muted}>{copy}</p></article>)}</div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className={`${styles.section} ${styles.altSection}`}>
      <div className={styles.showcaseRow}><BrowserFrame src="/stitch/query-builder.png" alt="Visual query builder interface" /><div><p className={styles.eyebrow}>Visual builder</p><h2>Building queries should not require a map.</h2><p className={styles.muted}>Explore your schema in a clean hierarchy. Select what you need and watch the optimized query generate in real time.</p></div></div>
      <div className={`${styles.showcaseRow} ${styles.reverse}`}><BrowserFrame src="/stitch/schema-explorer.png" alt="WPGraphQL schema explorer" /><div><p className={styles.eyebrow}>Schema explorer</p><h2>A developer-first view of your WordPress data.</h2><p className={styles.muted}>Browse ACF fields, WooCommerce products, and custom post types with intelligent tooltips and type definitions.</p></div></div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <>
      <section className={styles.section}><div className={styles.sectionHeading}><p className={styles.eyebrow}>Simple by design</p><h2>From idea to production in seconds.</h2></div><div className={styles.steps}>{steps.map(([title, copy], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p className={styles.muted}>{copy}</p></article>)}</div></section>
      <section className={`${styles.section} ${styles.flowSection}`}><h2>Seamless end-to-end workflow</h2><div className={styles.flow}><code>WordPress</code><b>-&gt;</b><code>WPGraphQL</code><b>-&gt;</b><strong>WP GraphQL Toolkit</strong><b>-&gt;</b><code>Next.js / Remix</code></div></section>
    </>
  );
}

function PriceCard({ name, price, items }: { name: string; price: string; items: string[] }) {
  return <article className={styles.priceCard}><div className={styles.priceTitle}><div><h3>{name}</h3><p><strong>{price}</strong> while in development</p></div></div><ul>{items.map(item => <li key={item}>+ {item}</li>)}</ul><ButtonLink>Download Plugin</ButtonLink></article>;
}

function PricingSection() {
  return (
    <section className={styles.section} id="pricing"><div className={styles.sectionHeading}><p className={styles.eyebrow}>Free while we build</p><h2>Explore the toolkit at no cost.</h2></div><div className={styles.pricingGrid}><PriceCard name="Free" price="$0" items={["Visual Query Builder", "Full Schema Explorer", "Basic Code Export", "Standard Templates"]} /></div></section>
  );
}

function FaqSection() {
  return <section className={`${styles.section} ${styles.altSection}`} id="faq"><div className={styles.sectionHeading}><p className={styles.eyebrow}>FAQ</p><h2>Developer questions.</h2></div><div className={styles.faqs}>{faqs.map(([question, answer], index) => <details className={styles.card} key={question} open={index === 0}><summary>{question}<span>+</span></summary><p className={styles.muted}>{answer}</p></details>)}</div></section>;
}

function FinalCta() {
  return <section className={`${styles.section} ${styles.cta}`}><p className={styles.eyebrow}>Build with confidence</p><h2>Build headless WordPress projects faster.</h2><p className={styles.muted}>Join developers who have reclaimed their time by ditching manual query writing.</p><div className={styles.buttonRow}><ButtonLink>Get Started Free</ButtonLink><ButtonLink secondary href="/docs">Documentation</ButtonLink></div></section>;
}

function Footer() {
  const groups = [
    ["Product", [["/#features", "Features"], ["/integrations", "Integrations"], ["/templates", "Templates"], ["/#pricing", "Pricing"]]],
    ["Support", [["/docs", "Documentation"], ["/status", "API Status"], ["/contact", "Contact"], ["/changelog", "Changelog"]]],
    ["Legal", [["/privacy", "Privacy Policy"], ["/terms", "Terms of Service"]]],
  ];
  return <footer className={styles.footer}><div><Link className={styles.brand} href="/">WP GraphQL Toolkit</Link><p>Empowering developers to build the future of headless WordPress.</p></div>{groups.map(([title, links]) => <div key={title as string}><h3>{title as string}</h3>{(links as string[][]).map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</div>)}</footer>;
}

export function LandingPage() {
  return <main className={styles.page}><Navigation /><Hero /><ProblemSection /><FeaturesSection /><ProductShowcase /><WorkflowSection /><PricingSection /><FaqSection /><FinalCta /><Footer /></main>;
}
