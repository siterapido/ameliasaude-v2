import { getCategories, getAllTags } from "@/data/blog";
import { CategoryList } from "./CategoryList";
import { TagCloud } from "./TagCloud";

interface BlogSidebarProps {
  activeCategory?: string;
}

export function BlogSidebar({ activeCategory }: BlogSidebarProps) {
  const categories = getCategories();
  const tags = getAllTags();

  return (
    <aside className="space-y-10">
      <CategoryList categories={categories} activeCategory={activeCategory} />
      <TagCloud tags={tags} />
    </aside>
  );
}