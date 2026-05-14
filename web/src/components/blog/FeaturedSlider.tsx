"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedSliderProps {
  posts: BlogPost[];
}

export function FeaturedSlider({ posts }: FeaturedSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = useCallback((index: number) => {
    if (index < 0) {
      setCurrentIndex(posts.length - 1);
    } else if (index >= posts.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  }, [posts.length]);

  const next = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (isHovered || posts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, posts.length]);

  if (posts.length === 0) return null;

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post) => (
            <div key={post.slug} className="w-full flex-shrink-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-2 h-[300px] md:h-[340px]">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center bg-[#f8f6ff] p-6 md:p-8">
                    <span className="inline-flex self-start rounded-full bg-[#7b6bb2]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7b6bb2]">
                      {post.category}
                    </span>

                    <h2 className="mt-3 text-xl md:text-2xl font-semibold leading-tight text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span>{post.readTime} de leitura</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {posts.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-[#7b6bb2] hover:bg-[#7b6bb2] hover:text-white transition-all duration-200"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-[#7b6bb2] hover:bg-[#7b6bb2] hover:text-white transition-all duration-200"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {posts.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#7b6bb2]"
                  : "w-2 bg-[#e4dcf5] hover:bg-[#c8bde6]"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
