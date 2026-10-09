import { buildMetadata } from "@/lib/metadata";
import { categories } from "@/config/categories";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import CtaSection from "@/components/CtaSection";

export const metadata = buildMetadata({
  title: "Wholesale Services | AM TRADE SUPPLIES LTD",
  description:
    "Explore wholesale drinks, cooking oils, flour and confectionery from AM TRADE SUPPLIES LTD, supplying UK trade customers from Stoke-On-Trent.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Wholesale Services"
        text="Four product categories, supplied in trade quantities to UK businesses."
        crumbs={[{ label: "Services" }]}
      />
      <Section>
        <h2 className="mb-8 text-3xl font-bold text-navy">Wholesale Product Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </Section>
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">How Trade Supply Works</h2>
          <ol className="mt-6 space-y-4 text-lg text-slate-600">
            <li><h3 className="inline font-bold text-navy">1. Get in touch. </h3>Tell us which products your business needs.</li>
            <li><h3 className="inline font-bold text-navy">2. Discuss your order. </h3>We talk through availability, quantities and arrangements.</li>
            <li><h3 className="inline font-bold text-navy">3. Agree the details. </h3>Pricing and delivery are confirmed with you directly.</li>
          </ol>
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
