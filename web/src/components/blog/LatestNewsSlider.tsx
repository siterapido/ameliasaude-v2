"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface LatestNewsSliderProps {
  posts: BlogPost[];
}

export function LatestNewsSlider({ posts }: LatestNewsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  // Autoplay
  useEffect(() => {
    if (posts.length <= 3 || isHovered) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const cardWidth = el.firstElementChild?.clientWidth || 320;
      const gap = 24;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [posts.length, isHovered]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 320;
    const gap = 24;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  if (posts.length === 0) return null;

  return (
    <div className="relative">
      {/* Section header */}
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--amelia-purple)]">
          <span className="h-px w-6 bg-[var(--amelia-purple)]" />
          Últimas Notícias
        </span>
        
        {/* Navigation arrows inline */}
        {posts.length > 3 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--amelia-line)] bg-white transition-all duration-200 ${
                canScrollLeft
                  ? "opacity-100 hover:bg-[var(--amelia-purple)] hover:text-white hover:border-[var(--amelia-purple)] text-[var(--amelia-purple)] cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
              disabled={!canScrollLeft}
              aria-label="Notícia anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--amelia-line)] bg-white transition-all duration-200 ${
                canScrollRight
                  ? "opacity-100 hover:bg-[var(--amelia-purple)] hover:text-white hover:border-[var(--amelia-purple)] text-[var(--amelia-purple)] cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
              disabled={!canScrollRight}
              aria-label="Próxima notícia"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Carousel container */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scrollable area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-1rem)] snap-start"
              draggable={false}
            >
              <div className="flex flex-col overflow-hidden rounded-xl border border-[var(--amelia-line)] bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    draggable={false}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex self-start bg-[var(--amelia-purple)]/10 text-[var(--amelia-purple)] rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
                    {post.category}
                  </span>

                  <h3 className="mt-2.5 font-sans font-semibold text-[1.05rem] leading-[1.2] tracking-[-0.01em] text-[var(--amelia-ink)] group-hover:text-[var(--amelia-deep)] transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 font-sans font-light leading-relaxed text-gray-500 text-[0.875rem] line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-3 flex items-center gap-2.5 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="h-0.5 w-0.5 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
