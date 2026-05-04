"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

const visiblePosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section
      id="blog"
      className="relative bg-white"
      style={{ padding: "clamp(5rem, 10vh, 7rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 block font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]"
          >
            Blog Amélia Saúde
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-[700px] font-sans font-semibold text-[clamp(3rem, 8vw, 6rem)] tracking-[-0.02em] leading-[1.05] text-[#7b6bb2]"
          >
            Conteúdos para cuidar de você
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[560px] font-sans font-light leading-relaxed text-[#5c5470] text-[clamp(1.05rem, 1.6vw, 1.25rem)]"
          >
            Dicas, novidades e orientações para você fazer as melhores escolhas em saúde.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visiblePosts.map((post, i) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
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
                  <h3 className="mt-3 font-sans font-medium text-[clamp(2.1rem, 3.3vw, 2.7rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[#7b6bb2] px-8 py-3.5 font-sans text-sm font-normal tracking-wide text-[#7b6bb2] transition-colors duration-300 hover:bg-[#7b6bb2] hover:text-white"
          >
            Ver todos os artigos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
