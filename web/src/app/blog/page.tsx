"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blog";
import { SearchBar } from "@/components/blog/SearchBar";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Pagination } from "@/components/blog/Pagination";

const POSTS_PER_PAGE = 9;

function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  
  const page = parseInt(searchParams.get("page") || "1", 10);
  const categoryParam = searchParams.get("category");
  const tagParam = searchParams.get("tag");

  const filteredPosts = useMemo(() => {
    let posts: BlogPost[] = [...blogPosts];

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.content.some((p) => p.toLowerCase().includes(lowerQuery))
      );
    }

    if (categoryParam) {
      posts = posts.filter((post) => post.category === categoryParam);
    }

    if (tagParam) {
      posts = posts.filter((post) => post.tags.includes(tagParam));
    }

    return posts;
  }, [searchQuery, categoryParam, tagParam]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (categoryParam) params.set("category", categoryParam);
    if (tagParam) params.set("tag", tagParam);
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== searchQuery) {
      setSearchQuery(q || "");
    }
  }, [searchParams, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <section
          className="bg-white"
          style={{ padding: "clamp(3rem, 8vh, 5rem) clamp(1.5rem, 5vw, 5rem)" }}
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 text-center">
              <span className="mb-5 block font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
                Blog Amélia Saúde
              </span>
              <h2 className="mx-auto max-w-[700px] font-sans font-semibold text-[clamp(2.5rem, 6vw, 4.5rem)] tracking-[-0.02em] leading-[1.05] text-[#7b6bb2]">
                Conteúdos para cuidar de você
              </h2>
              <p className="mx-auto mt-4 max-w-[560px] font-sans font-light leading-relaxed text-[#5c5470] text-[clamp(1rem, 1.5vw, 1.15rem)]">
                Dicas, novidades e orientações para você fazer as melhores escolhas em saúde.
              </p>
            </div>

            <div className="mx-auto max-w-[600px] mb-12">
              <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 lg:max-w-[70%]">
                {paginatedPosts.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="font-sans text-lg text-[#5c5470]">
                      Nenhum resultado encontrado para "{searchQuery || categoryParam || tagParam}".
                    </p>
                    <button
                      onClick={() => handleSearch("")}
                      className="mt-4 font-sans text-[#7b6bb2] hover:underline"
                    >
                      Limpar filtros
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {paginatedPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                    <Pagination currentPage={page} totalPages={totalPages} />
                  </>
                )}
              </div>
              
              <div className="hidden lg:block lg:w-[30%]">
                <div className="sticky top-24">
                  <BlogSidebar activeCategory={categoryParam || undefined} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BlogContent />
    </Suspense>
  );
}