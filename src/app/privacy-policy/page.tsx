import { buildMetadata } from "@/lib/metadata";
import { fullAddressOneLine, siteConfig } from "@/config/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import DraftNotice from "@/components/DraftNotice";

export const metadata = buildMetadata({
  title: "Privacy Policy | AM TRADE SUPPLIES LTD",
  description:
    "How AM TRADE SUPPLIES LTD handles personal information on this website.",
  path: "/privacy-policy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <Section>
        <DraftNotice />
        <Prose>
          <p>{siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This page explains how we handle personal information on this website.</p>
          <h2>Who We Are</h2>
          <p>{siteConfig.name}, {fullAddressOneLine}.</p>
          <h2>Information We Collect</h2>
          <p>This website does not currently collect personal information through forms or accounts. If you contact us by other means, we will use the details you give us to respond to your enquiry.</p>
          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to trade enquiries.</li>
            <li>To manage our business relationship with you.</li>
            <li>To meet our legal obligations.</li>
          </ul>
          <h2>Your Rights</h2>
          <p>Under UK data protection law you may have rights to access, correct or delete your personal information. Please contact us at the address above to exercise them.</p>
          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. The latest version will always be on this page.</p>
        </Prose>
      </Section>
    </>
  );
}
