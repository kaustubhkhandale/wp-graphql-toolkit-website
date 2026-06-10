import Link from "next/link";
import { SiteShell } from "./SiteChrome";
import styles from "./ContentPage.module.css";

export type InfoSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  code?: string;
};

export function PageHero({ eyebrow, title, intro, actions }: { eyebrow: string; title: string; intro: string; actions?: { href: string; label: string }[] }) {
  return <header className={styles.hero}><p className={styles.eyebrow}>{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{actions && <div className={styles.actions}>{actions.map((action, index) => <Link className={index ? styles.secondary : styles.primary} href={action.href} key={action.href}>{action.label}</Link>)}</div>}</header>;
}

export function CardGrid({ items }: { items: { label?: string; title: string; body: string; href?: string }[] }) {
  return <div className={styles.grid}>{items.map(item => <article className={styles.card} key={item.title}>{item.label && <span>{item.label}</span>}<h2>{item.title}</h2><p>{item.body}</p>{item.href && <Link href={item.href}>Learn more →</Link>}</article>)}</div>;
}

export function Article({ sections, notice }: { sections: InfoSection[]; notice?: string }) {
  return <article className={styles.article}>{notice && <aside>{notice}</aside>}{sections.map(section => <section key={section.title} id={section.title.toLowerCase().replaceAll(" ", "-")}><h2>{section.title}</h2>{section.body?.map(text => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}{section.code && <pre><code>{section.code}</code></pre>}</section>)}</article>;
}

export function ContentPage({ children }: { children: React.ReactNode }) {
  return <SiteShell><div className={styles.page}>{children}</div></SiteShell>;
}
