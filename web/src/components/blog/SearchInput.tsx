"use client";

import { useState } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchInput({ onSearch, initialValue = "" }: SearchInputProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artigos..."
        className="w-full rounded-xl border border-[#e4dcf5] bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#7b6bb2] focus:outline-none focus:ring-2 focus:ring-[#7b6bb2]/20 transition-colors"
      />
    </form>
  );
}
