"use client";

import Link from "next/link";

interface TagCloudProps {
  tags: string[];
}

export function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="rounded-full border border-[#e4dcf5] px-3 py-1.5 font-sans text-xs text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:bg-[#7b6bb2]/5 hover:text-[#7b6bb2]"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}