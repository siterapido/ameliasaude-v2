"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blog";
import { PostCard } from "@/components/blog/PostCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Pagination } from "@/components/blog/Pagination";

const POSTS_PER_PAGE = 6;

function BlogPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const categoryParam = searchParams.get("category");
  const tagParam = searchParams.get("tag");

  const filteredPosts = useMemo(() => {
    let posts: BlogPost[] = [...blogPosts];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.content.some((p) => p.toLowerCase().includes(q))
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

  const listPosts = paginatedPosts;

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
        <section className="pt-16 pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main content */}
              <div className="flex-1 lg:max-w-[68%]">
                {paginatedPosts.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="text-gray-600">
                      Nenhum resultado encontrado para &quot;{searchQuery || categoryParam || tagParam}&quot;.
                    </p>
                    <button
                      onClick={() => handleSearch("")}
                      className="mt-4 text-[#7b6bb2] hover:underline text-sm"
                    >
                      Limpar filtros
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      {listPosts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                      ))}
                    </div>

                    <Pagination currentPage={page} totalPages={totalPages} />
                  </>
                )}
              </div>

              {/* Sidebar */}
              <div className="hidden lg:block lg:w-[32%]">
                <div className="sticky top-24">
                  <BlogSidebar
                    activeCategory={categoryParam || undefined}
                    onSearch={handleSearch}
                    searchQuery={searchQuery}
                  />
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <BlogPageContent />
    </Suspense>
  );
}
