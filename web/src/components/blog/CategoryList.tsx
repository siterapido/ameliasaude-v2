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

export function CategoryList({ categories, activeCategory }: CategoryListProps) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Categorias
      </h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="/blog"
            className={`block font-sans text-[0.95rem] transition-colors duration-200 hover:text-[#7b6bb2] ${
              !activeCategory ? "font-medium text-[#7b6bb2]" : "text-[#5c5470]"
            }`}
          >
            Todas
          </Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link
              href={`/blog?category=${encodeURIComponent(cat.name)}`}
              className={`block font-sans text-[0.95rem] transition-colors duration-200 hover:text-[#7b6bb2] ${
                activeCategory === cat.name
                  ? "font-medium text-[#7b6bb2]"
                  : "text-[#5c5470]"
              }`}
            >
              {cat.name} ({cat.count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}