"use client";

import Link from "next/link";

interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7b6bb2] mb-3">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="rounded-full border border-[#e4dcf5] px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#7b6bb2] hover:bg-[#7b6bb2] hover:text-white"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
