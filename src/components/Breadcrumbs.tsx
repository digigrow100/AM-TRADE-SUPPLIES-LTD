import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-accent">Home</Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {c.href ? (
              <Link href={c.href} className="hover:text-accent">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-white">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
