import { getCategories, getAllTags } from "@/data/blog";
import { CategoryList } from "./CategoryList";
import { TagCloud } from "./TagCloud";
import { SearchBar } from "./SearchBar";

interface BlogSidebarProps {
  activeCategory?: string;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function BlogSidebar({ activeCategory, onSearch, searchQuery }: BlogSidebarProps) {
  const categories = getCategories();
  const tags = getAllTags();

  return (
    <aside className="space-y-8">
      <SearchBar onSearch={onSearch} initialValue={searchQuery} />
      <CategoryList categories={categories} activeCategory={activeCategory} />
      <TagCloud tags={tags} />
    </aside>
  );
}