import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = { themeColor: "#0b2545" };

export const metadata: Metadata = {
  ...(siteConfig.siteUrl ? { metadataBase: new URL(siteConfig.siteUrl) } : {}),
  title: {
    default: `${siteConfig.name} | UK Wholesale Supplier`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

// Only verified details are included: name and postal address.
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.unit}, ${siteConfig.address.street}`,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.countryCode,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-navy">
          Skip to content
        </a>
        <JsonLd data={organisationSchema} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
