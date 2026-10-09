import type { MetadataRoute } from "next";
import { categories } from "@/config/categories";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Absolute URLs are required; return nothing until the domain is configured.
  if (!siteConfig.siteUrl) return [];
  const paths = [
    "/", "/services", ...categories.map((c) => c.href),
    "/about", "/contact", "/wholesale-portal",
  ];
  return paths.map((p) => ({ url: `${siteConfig.siteUrl}${p}` }));
}
