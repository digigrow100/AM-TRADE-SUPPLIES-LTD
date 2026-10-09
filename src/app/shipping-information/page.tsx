import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import Button from "@/components/Button";

export const metadata = buildMetadata({
  title: "Shipping Information | AM TRADE SUPPLIES LTD",
  description:
    "Delivery and collection information for trade customers of AM TRADE SUPPLIES LTD. Arrangements are agreed per order.",
  path: "/shipping-information",
});

export default function ShippingPage() {
  return (
    <>
      <PageHero title="Shipping Information" crumbs={[{ label: "Shipping Information" }]} />
      <Section>
        <Prose>
          <p>Delivery and collection arrangements depend on the products, quantities and location involved.</p>
          <h2>Arrangements</h2>
          <ul>
            <li>Delivery or collection is agreed with you before an order is confirmed.</li>
            <li>Delivery areas, costs and timings are confirmed per order.</li>
            <li>Please check goods on receipt and tell us promptly about any problem.</li>
          </ul>
          <h2>Ask Us</h2>
          <p>Get in touch to discuss delivery for your business.</p>
          <div className="pt-2"><Button href="/contact">Contact Us</Button></div>
        </Prose>
      </Section>
    </>
  );
}
