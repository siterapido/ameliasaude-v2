import { getCategories, getAllTags } from "@/data/blog";
import { SearchInput } from "./SearchInput";
import { CategoryFilter } from "./CategoryFilter";
import { TagList } from "./TagList";

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
      <SearchInput onSearch={onSearch} initialValue={searchQuery} />
      <div className="h-px bg-[#e4dcf5]" />
      <CategoryFilter categories={categories} activeCategory={activeCategory} />
      <div className="h-px bg-[#e4dcf5]" />
      <TagList tags={tags} />
    </aside>
  );
}
