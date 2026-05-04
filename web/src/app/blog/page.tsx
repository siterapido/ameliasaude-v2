import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Amélia Saúde",
  description:
    "Dicas, novidades e orientações para você fazer as melhores escolhas em saúde.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <section
          className="bg-white"
          style={{ padding: "clamp(5rem, 10vh, 7rem) clamp(1.5rem, 5vw, 5rem)" }}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 text-center">
              <span className="mb-5 block font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
                Blog Amélia Saúde
              </span>
              <h2 className="mx-auto max-w-[700px] font-display text-[clamp(2.5rem, 6vw, 4.5rem)] font-normal tracking-[-0.03em] leading-[1.05] text-[#7b6bb2]">
                Conteúdos para cuidar de você
              </h2>
              <p className="mx-auto mt-6 max-w-[560px] font-sans font-light leading-relaxed text-[#5c5470] text-[clamp(1.05rem, 1.6vw, 1.25rem)]">
                Dicas, novidades e orientações para você fazer as melhores escolhas em saúde.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-[#e4dcf5] bg-white shadow-sm transition-all duration-300 hover:border-[#c8bde6] hover:shadow-md"
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
                    <h3 className="mt-3 font-display text-[clamp(1.25rem, 2vw, 1.6rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
