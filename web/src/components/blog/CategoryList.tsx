"use client";

import Link from "next/link";

interface Category {
  name: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
  activeCategory?: string;
}

const categoryIcons: Record<string, string> = {
  "Nutrição": "🥗",
  "Exercícios": "🏃",
  "Bem-estar": "😴",
};

function getIcon(name: string): string {
  return categoryIcons[name] || "•";
}

export function CategoryList({ categories, activeCategory }: CategoryListProps) {
  return (
    <div>
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Categorias
      </h3>
      <ul className="space-y-1">
        <li>
          <Link
            href="/blog"
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 font-sans text-[0.95rem] transition-all duration-200 ${
              !activeCategory
                ? "bg-[#7b6bb2] font-medium text-white"
                : "text-[#5c5470] hover:bg-[#7b6bb2]/5 hover:text-[#7b6bb2]"
            }`}
          >
            <span>🏠</span>
            Todas
          </Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link
              href={`/blog?category=${encodeURIComponent(cat.name)}`}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 font-sans text-[0.95rem] transition-all duration-200 ${
                activeCategory === cat.name
                  ? "bg-[#7b6bb2] font-medium text-white"
                  : "text-[#5c5470] hover:bg-[#7b6bb2]/5 hover:text-[#7b6bb2]"
              }`}
            >
              <span>{getIcon(cat.name)}</span>
              {cat.name} ({cat.count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
