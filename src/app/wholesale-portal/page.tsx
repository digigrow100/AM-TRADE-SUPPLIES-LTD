import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

export const metadata = buildMetadata({
  title: "Wholesale Portal | AM TRADE SUPPLIES LTD",
  description:
    "Information about the AM TRADE SUPPLIES LTD wholesale portal for trade customers. The portal is not yet available; get in touch to discuss your needs.",
  path: "/wholesale-portal",
});

const planned = [
  { title: "Trade Information", text: "A single place for trade customer information." },
  { title: "Product Categories", text: "Clear overviews of our four wholesale categories." },
  { title: "Account Enquiries", text: "A simple route to start a conversation with us." },
];

export default function PortalPage() {
  return (
    <>
      <PageHero
        title="Wholesale Portal"
        text="A dedicated area for trade customers."
        crumbs={[{ label: "Wholesale Portal" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p role="status" className="rounded-md border border-accent bg-accent/15 px-4 py-3 text-navy">
            <strong>Coming soon.</strong> There is no online ordering or customer login at this time.
          </p>
          <h2 className="mt-8 text-3xl font-bold text-navy">Trade Customers</h2>
          <p className="mt-4 text-lg text-slate-600">
            We plan to offer a wholesale portal in future. For now, please contact us directly to discuss your trade requirements.
          </p>
          <div className="mt-6"><Button href="/contact">Contact Us</Button></div>
        </div>
      </Section>
      <Section tone="light">
        <h2 className="mb-8 text-center text-3xl font-bold text-navy">What to Expect</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {planned.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
    </>
  );
}
