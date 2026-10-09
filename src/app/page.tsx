import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { categories } from "@/config/categories";
import { siteConfig } from "@/config/site";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import FeatureCard from "@/components/FeatureCard";
import CtaSection from "@/components/CtaSection";

export const metadata = buildMetadata({
  title: "AM TRADE SUPPLIES LTD | UK Wholesale Drinks, Oils, Flour & Confectionery",
  description:
    "AM TRADE SUPPLIES LTD is a Stoke-On-Trent wholesaler supplying drinks, cooking oils, flour and confectionery to UK trade customers.",
  path: "/",
});

const reasons = [
  { title: "Trade Customers", text: "We supply businesses such as shops, caterers and food producers." },
  { title: "Four Product Categories", text: "Drinks, cooking oils, flour and confectionery from one supplier." },
  { title: "Bulk Quantities", text: "Order in trade quantities that suit your business." },
  { title: "Direct Contact", text: "Speak to us about availability and arrangements for your order." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              UK Wholesale Supplier
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Wholesale Supplies for UK Trade Customers
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              {siteConfig.name} supplies drinks, cooking oils, flour and confectionery in trade quantities.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/services">Explore Our Services</Button>
              <Button href="/contact" variant="outlineLight">Contact Us</Button>
            </div>
          </div>
          <Image
            src="/images/hero.svg"
            alt="Illustration of stacked wholesale goods on a pallet"
            width={900}
            height={700}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-xl"
          />
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-dark">About Us</p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Your Trade Supply Partner</h2>
          <p className="mt-4 text-lg text-slate-600">
            {siteConfig.name} is based in Stoke-On-Trent. We supply wholesale goods to UK businesses.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Our focus is simple: useful products, clear communication and trade-friendly supply.
          </p>
          <div className="mt-6"><Button href="/about" variant="outline">Learn More About Us</Button></div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Core Product Categories"
          title="What We Supply"
          text="Four wholesale categories for trade customers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why Trade With Us" title="Why Trade With AM TRADE SUPPLIES LTD" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <FeatureCard key={r.title} {...r} index={i} />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
