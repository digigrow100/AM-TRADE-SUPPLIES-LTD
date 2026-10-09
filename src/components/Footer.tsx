import Link from "next/link";
import { categories } from "@/config/categories";
import { legalNav, mainNav, portalNav } from "@/config/navigation";
import { fullAddressLines, siteConfig } from "@/config/site";
import Container from "./Container";

export default function Footer() {
  const quickLinks = [...mainNav.map(({ label, href }) => ({ label, href })), portalNav];
  return (
    <footer className="bg-navy text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-3 text-sm">{siteConfig.tagline}.</p>
          <address className="mt-4 text-sm not-italic">
            {fullAddressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="block">{siteConfig.address.country}</span>
          </address>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Our Products</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.href}><Link href={c.href} className="hover:text-accent">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Information</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {legalNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm">
        <Container>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
