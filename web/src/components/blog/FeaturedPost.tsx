import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="py-4">
          <span className="inline-block rounded-full bg-[#7b6bb2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#7b6bb2]">
            {post.category}
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors">
            {post.title}
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
