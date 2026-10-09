import { buildMetadata } from "@/lib/metadata";
import { getCategory } from "@/config/categories";
import CategoryPage from "@/components/CategoryPage";

const category = getCategory("drinks")!;

export const metadata = buildMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: category.href,
});

export default function Page() {
  return <CategoryPage category={category} />;
}
