import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CtaSection from "@/components/CtaSection";

export const metadata = buildMetadata({
  title: "About Us | AM TRADE SUPPLIES LTD",
  description:
    "Learn about AM TRADE SUPPLIES LTD, a Stoke-On-Trent wholesale supplier of drinks, cooking oils, flour and confectionery for UK trade customers.",
  path: "/about",
});

const values = [
  { title: "Clear Communication", text: "We keep conversations about stock and orders simple and direct." },
  { title: "Trade Focus", text: "Our service is built around business customers." },
  { title: "Honest Information", text: "We only make claims we can stand behind." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        text="A UK wholesale supplier serving trade customers."
        crumbs={[{ label: "About Us" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 text-lg text-slate-600">
          <h2 className="text-3xl font-bold text-navy">Who We Are</h2>
          <p>{siteConfig.name} is a wholesale business based in Stoke-On-Trent, Staffordshire.</p>
          <p>We supply drinks, cooking oils, flour and confectionery to shops, caterers, food producers and other trade customers.</p>
          <h2 className="pt-4 text-3xl font-bold text-navy">What We Do</h2>
          <p>We help businesses source the products they sell and use in trade quantities. Speak to us about what you need and we will discuss what is available.</p>
        </div>
      </Section>
      <Section tone="light">
        <SectionHeading title="How We Work" />
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <FeatureCard key={v.title} {...v} />
          ))}
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
