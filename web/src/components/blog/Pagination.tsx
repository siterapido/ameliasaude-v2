"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();
  
  if (totalPages <= 1) return null;

  const buildUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `/blog?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={buildUrl(currentPage - 1)}
          className="px-4 py-2 rounded-lg border border-[#e4dcf5] text-sm text-gray-600 hover:bg-[#7b6bb2] hover:text-white hover:border-[#7b6bb2] transition-colors"
        >
          Anterior
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={buildUrl(page)}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            page === currentPage
              ? "bg-[#7b6bb2] text-white"
              : "border border-[#e4dcf5] text-gray-600 hover:bg-[#7b6bb2] hover:text-white hover:border-[#7b6bb2]"
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={buildUrl(currentPage + 1)}
          className="px-4 py-2 rounded-lg border border-[#e4dcf5] text-sm text-gray-600 hover:bg-[#7b6bb2] hover:text-white hover:border-[#7b6bb2] transition-colors"
        >
          Próxima
        </Link>
      )}
    </div>
  );
}
