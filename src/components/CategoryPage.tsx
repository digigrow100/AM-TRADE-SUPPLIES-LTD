import Image from "next/image";
import type { Category } from "@/config/categories";
import PageHero from "./PageHero";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";
import CtaSection from "./CtaSection";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export default function CategoryPage({ category }: { category: Category }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: category.name,
          description: category.metaDescription,
          provider: { "@type": "Organization", name: siteConfig.name },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        }}
      />
      <PageHero
        title={category.name}
        text={category.heroText}
        crumbs={[{ label: "Services", href: "/services" }, { label: category.name }]}
      />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">{category.introHeading}</h2>
            <div className="mt-4 space-y-4 text-lg text-slate-600">
              {category.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <Image
            src={category.image}
            alt={category.imageAlt}
            width={800}
            height={600}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </Section>
      <Section tone="light">
        <SectionHeading
          title={category.rangeHeading}
          text="Ask us about current availability and pack sizes."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {category.range.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{category.bulkHeading}</h2>
          <div className="mt-4 space-y-4 text-lg text-slate-600">
            {category.bulk.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="light">
        <SectionHeading title={category.whyHeading} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {category.why.map((item, i) => (
            <FeatureCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </Section>
      <CtaSection title={`Enquire About ${category.name}`} />
    </>
  );
}
