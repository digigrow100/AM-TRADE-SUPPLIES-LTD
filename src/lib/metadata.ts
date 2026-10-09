import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMeta = { title: string; description: string; path: string; noindex?: boolean };

/** Builds per-page metadata. Canonical URLs only appear once a site URL is set. */
export function buildMetadata({ title, description, path, noindex }: PageMeta): Metadata {
  const hasDomain = Boolean(siteConfig.siteUrl);
  return {
    title: { absolute: title },
    description,
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    ...(hasDomain ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_GB",
      siteName: siteConfig.name,
      ...(hasDomain ? { url: path } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
