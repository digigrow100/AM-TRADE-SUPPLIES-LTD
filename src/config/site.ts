/**
 * Central business configuration.
 * Update details here and they flow through the header, footer, contact page,
 * metadata and structured data.
 */

export const siteConfig = {
  name: "AM TRADE SUPPLIES LTD",
  shortName: "AM Trade Supplies",
  tagline: "UK wholesale supplier for trade customers",
  description:
    "AM TRADE SUPPLIES LTD supplies wholesale drinks, cooking oils, flour and confectionery to trade customers from Stoke-On-Trent.",
  address: {
    unit: "Unit 60",
    street: "Bucknall Old Road",
    city: "Stoke-On-Trent",
    postcode: "ST1 2AG",
    country: "United Kingdom",
    countryCode: "GB",
  },
  /**
   * Add real details here when confirmed. While these are empty, nothing is
   * shown on the website and no contact links are rendered.
   */
  contact: {
    phone: "",
    email: "",
  },
  /**
   * Set NEXT_PUBLIC_SITE_URL (e.g. https://www.example.co.uk) once the live
   * domain is confirmed. Canonical URLs, the sitemap and structured data URLs
   * switch on automatically when it is present.
   */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, ""),
} as const;

export const fullAddressLines = [
  `${siteConfig.address.unit}, ${siteConfig.address.street}`,
  siteConfig.address.city,
  siteConfig.address.postcode,
];

export const fullAddressOneLine = `${siteConfig.address.unit}, ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.postcode}`;
