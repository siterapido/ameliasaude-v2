"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

const blogPosts = [
  {
    category: "Bem-estar",
    title: "Como escolher o plano de saúde ideal para sua família",
    excerpt: "Descubra os fatores essenciais na hora de contratar um plano que atenda às necessidades de todos.",
    date: "15 Mar 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
  },
  {
    category: "Telemedicina",
    title: "Consultas online: praticidade sem perder a qualidade",
    excerpt: "Entenda como a telemedicina está transformando o acesso à saúde no Brasil.",
    date: "12 Mar 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    category: "Prevenção",
    title: "Check-up anual: por que você não deve adiar",
    excerpt: "A prevenção é o melhor caminho para uma vida saudável. Saiba quais exames são essenciais.",
    date: "08 Mar 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
  },
];

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
            className="mx-auto max-w-[700px] font-display text-[clamp(2.5rem, 6vw, 3.75rem)] font-normal tracking-[-0.03em] leading-[1.05] text-[#7b6bb2]"
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
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
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
                <h3 className="mt-3 font-display text-[clamp(1.25rem, 2.2vw, 1.5rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
