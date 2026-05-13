import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface HeroPostProps {
  post: BlogPost;
}

export function HeroPost({ post }: HeroPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12"
    >
      {/* Imagem */}
      <div className="w-full lg:w-[55%] overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center lg:w-[45%]">
        <span className="inline-flex self-start bg-[#7b6bb2]/10 text-[#7b6bb2] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">
          {post.category}
        </span>

        <h2 className="font-sans font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
          {post.title}
        </h2>

        <p className="mt-4 font-sans font-light text-lg leading-relaxed text-[#5c5470] line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-4 text-sm text-[#8a8a8a]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime} de leitura
          </span>
        </div>

        <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#7b6bb2] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6a5a9e]">
          Ler artigo
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
