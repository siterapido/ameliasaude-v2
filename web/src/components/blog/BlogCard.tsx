import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-[#e4dcf5] bg-white shadow-sm transition-all duration-300 hover:border-[#c8bde6] hover:shadow-md"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-7">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7b6bb2]">
          {post.category}
        </span>
        <h3 className="mt-3 font-sans font-medium text-[clamp(1.1rem, 2vw, 1.25rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="mt-4 font-sans font-light leading-relaxed text-[#5c5470] text-[0.95rem] line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 border-t border-[#e4dcf5] pt-4 font-sans text-[11px] text-[#8a8a8a]">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-[#8a8a8a]" />
          <span>{post.readTime} de leitura</span>
        </div>
      </div>
    </Link>
  );
}