import Container from "./Container";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

export default function PageHero({
  title,
  text,
  crumbs,
}: {
  title: string;
  text?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-white/80">{text}</p>}
      </Container>
    </section>
  );
}
