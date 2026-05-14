"use client";

import Link from "next/link";

interface Category {
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
}

export function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7b6bb2] mb-3">
        Categorias
      </h3>
      <div className="space-y-1">
        <Link
          href="/blog"
          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
            !activeCategory
              ? "bg-[#7b6bb2] text-white font-medium"
              : "text-gray-600 hover:bg-gray-50 hover:text-[#7b6bb2]"
          }`}
        >
          Todas
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/blog?category=${encodeURIComponent(cat.name)}`}
            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
              activeCategory === cat.name
                ? "bg-[#7b6bb2] text-white font-medium"
                : "text-gray-600 hover:bg-gray-50 hover:text-[#7b6bb2]"
            }`}
          >
            {cat.name} ({cat.count})
          </Link>
        ))}
      </div>
    </div>
  );
}
