import { ContentPage, PageHero } from "@/components/site/ContentPage";

export default function NotFound() {
  return <ContentPage><PageHero eyebrow="404" title="This route is not in the schema." intro="The page may have moved, the URL may be incomplete, or the field simply does not exist." actions={[{ href: "/", label: "Return home" }, { href: "/docs", label: "Open documentation" }]} /></ContentPage>;
}
