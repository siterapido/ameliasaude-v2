"use client";

import { useState } from "react";
import { Search } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8a8a]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artigos..."
        className="w-full rounded-xl border border-[#e4dcf5] bg-white py-3 pl-11 pr-4 font-sans text-[0.95rem] text-[#1a1a1a] placeholder-[#8a8a8a] transition-colors duration-200 focus:border-[#7b6bb2] focus:outline-none focus:ring-2 focus:ring-[#7b6bb2]/20"
      />
    </form>
  );
}
