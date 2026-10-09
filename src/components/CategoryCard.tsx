import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/config/categories";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={category.href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image
          src={category.image}
          alt=""
          width={800}
          height={600}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-navy">{category.name}</h3>
        <p className="mt-2 flex-1 text-slate-600">{category.summary}</p>
        <Link
          href={category.href}
          className="mt-4 inline-flex items-center font-semibold text-navy hover:text-accent-dark"
        >
          View {category.name}
          <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}
