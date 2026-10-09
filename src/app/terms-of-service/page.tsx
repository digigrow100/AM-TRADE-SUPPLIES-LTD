import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import DraftNotice from "@/components/DraftNotice";

export const metadata = buildMetadata({
  title: "Terms of Service | AM TRADE SUPPLIES LTD",
  description:
    "Terms for using the AM TRADE SUPPLIES LTD website and enquiring about wholesale supply.",
  path: "/terms-of-service",
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" crumbs={[{ label: "Terms of Service" }]} />
      <Section>
        <DraftNotice />
        <Prose>
          <p>By using this website you agree to these terms. They apply to your use of the site and to enquiries made through it.</p>
          <h2>Trade Supply</h2>
          <p>{siteConfig.name} supplies goods to trade customers. Information on this website is for general guidance and is not an offer to sell.</p>
          <h2>Availability and Pricing</h2>
          <p>Product availability, prices and pack sizes change and are confirmed directly with you before any order is agreed.</p>
          <h2>Orders</h2>
          <p>This website does not take orders or payments. Any supply arrangement is agreed separately in writing.</p>
          <h2>Website Content</h2>
          <p>We take care to keep this site accurate but cannot guarantee that it is always complete or up to date.</p>
          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </Prose>
      </Section>
    </>
  );
}
