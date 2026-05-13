import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#e4dcf5] bg-white shadow-sm transition-all duration-300 hover:border-[#c8bde6] hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex self-start bg-[#7b6bb2]/10 text-[#7b6bb2] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
          {post.category}
        </span>

        <h3 className="mt-3 font-sans font-semibold text-[clamp(1.35rem,2.5vw,1.65rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
          {post.title}
        </h3>

        <p className="mt-3 font-sans font-light leading-relaxed text-[#5c5470] text-[0.95rem] line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-3 text-xs text-[#8a8a8a]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#8a8a8a]" />
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} de leitura
          </span>
        </div>
      </div>
    </Link>
  );
}
