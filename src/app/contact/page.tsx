import { buildMetadata } from "@/lib/metadata";
import { fullAddressLines, siteConfig } from "@/config/site";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "Contact Us | AM TRADE SUPPLIES LTD",
  description:
    "Contact AM TRADE SUPPLIES LTD, Unit 60, Bucknall Old Road, Stoke-On-Trent, ST1 2AG, for UK wholesale trade enquiries.",
  path: "/contact",
});

const fieldClass =
  "mt-1 w-full rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-slate-500 disabled:cursor-not-allowed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Trade enquiries for drinks, cooking oils, flour and confectionery."
        crumbs={[{ label: "Contact Us" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy">Our Details</h2>
            <div className="mt-6 rounded-xl border border-slate-200 bg-surface p-6">
              <h3 className="text-xl font-bold text-navy">{siteConfig.name}</h3>
              <address className="mt-3 text-lg not-italic text-slate-700">
                {fullAddressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
                <span className="block">{siteConfig.address.country}</span>
              </address>
            </div>
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-6">
              <h3 className="text-xl font-bold text-navy">More Ways to Reach Us</h3>
              <p className="mt-2 text-slate-600">
                Further contact details will be added here soon.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy">Enquiry Form</h2>
            <p role="status" className="mt-4 rounded-md border border-accent bg-accent/15 px-4 py-3 text-navy">
              <strong>Not yet active.</strong> This form cannot send messages until a submission method is set up.
            </p>
            <form className="mt-6 space-y-4" aria-describedby="form-note">
              <fieldset disabled className="space-y-4">
                <legend className="sr-only">Enquiry form (inactive)</legend>
                <div>
                  <label htmlFor="name" className="font-medium text-navy">Name</label>
                  <input id="name" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="business" className="font-medium text-navy">Business name</label>
                  <input id="business" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="message" className="font-medium text-navy">Your enquiry</label>
                  <textarea id="message" rows={5} className={fieldClass} />
                </div>
                <button type="button" className="cursor-not-allowed rounded-md bg-slate-300 px-6 py-3 font-semibold text-slate-600">
                  Send Enquiry (inactive)
                </button>
              </fieldset>
              <p id="form-note" className="text-sm text-slate-500">
                Form fields are disabled for now.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
