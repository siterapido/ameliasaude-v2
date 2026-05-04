"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export function Pagination({ currentPage, totalPages, baseUrl = "/blog" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(
        <Link
          key={1}
          href={getPageUrl(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4dcf5] font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          1
        </Link>
      );
      if (start > 2) {
        pages.push(<span key="ellipsis1" className="px-2">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`flex h-10 w-10 items-center justify-center rounded-full font-sans text-sm transition-colors duration-200 ${
            i === currentPage
              ? "bg-[#7b6bb2] text-white"
              : "border border-[#e4dcf5] text-[#5c5470] hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
          }`}
        >
          {i}
        </Link>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(<span key="ellipsis2" className="px-2">...</span>);
      }
      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(totalPages)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4dcf5] font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          {totalPages}
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-2 rounded-full border border-[#e4dcf5] px-4 py-2 font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </Link>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-2 rounded-full border border-[#e4dcf5] px-4 py-2 font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          Próxima
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}