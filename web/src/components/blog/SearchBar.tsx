"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artigos..."
        className="flex-1 rounded-full border border-[#e4dcf5] px-5 py-3 font-sans text-[0.95rem] text-[#1a1a1a] placeholder-[#8a8a8a] focus:border-[#7b6bb2] focus:outline-none focus:ring-2 focus:ring-[#7b6bb2]/20"
      />
      <button
        type="submit"
        className="rounded-full bg-[#7b6bb2] px-6 py-3 font-sans text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6a5a9e]"
      >
        Buscar
      </button>
    </form>
  );
}