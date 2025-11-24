"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Magnifier from "@/app/components/icons/Magnifier";
import { useLanguage } from "../context/LanguageContext";

interface Constituency {
  id: string;
  code: string;
  name: string;
}

export default function ConstituencySearch({
  constituencies,
}: {
  constituencies: Constituency[];
}) {
  const { t } = useLanguage(); // Hook
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const router = useRouter();
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = constituencies.filter((c) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });

  const highlightMatch = (text: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-300 text-black">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isFocused || filtered.length === 0) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null || prev === filtered.length - 1 ? 0 : prev + 1
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null || prev === 0 ? filtered.length - 1 : prev - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex !== null && filtered[highlightedIndex]) {
          router.push(`/constituencies/${filtered[highlightedIndex].id}`);
          setIsFocused(false);
        }
        break;
    }
  };

  useEffect(() => {
    if (highlightedIndex !== null && listRef.current) {
      const list = listRef.current.children[highlightedIndex] as HTMLElement;
      if (list) list.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  return (
    <div className="relative w-full max-w-lg mx-auto px-2 sm:px-0">
      <div className="flex items-center border-4 border-black bg-yellow-200 text-black px-3 py-2 sm:px-4 sm:py-3 shadow-[4px_4px_0px_#000000] focus-within:bg-yellow-300 transition-all duration-150">
        <Magnifier className="mr-2 sm:mr-3 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setHighlightedIndex(null);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder={t("ConstituencySearch.placeholder")}
          className="w-full text-sm sm:text-base font-bold placeholder-black/50 focus:outline-none truncate"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        />
      </div>

      {isFocused && (
        <ul
          ref={listRef}
          className="absolute left-0 right-0 z-10 mt-2 border-4 border-black bg-yellow-100 text-black shadow-[6px_6px_0px_#000000] max-h-64 overflow-y-auto break-words sm:break-normal"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            scrollbarWidth: "thin",
            scrollbarColor: "#000 #fef08a",
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((c, index) => (
              <li
                key={c.id}
                onClick={() => router.push(`/constituencies/${c.id}`)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold cursor-pointer border-b border-black last:border-b-0 transition-colors break-words sm:break-normal ${
                  index === highlightedIndex
                    ? "bg-yellow-300 text-black"
                    : "hover:bg-yellow-300"
                }`}
              >
                <span className="truncate block sm:inline">
                  {highlightMatch(c.code)} {highlightMatch(c.name)}
                </span>
              </li>
            ))
          ) : (
            <li className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-black/60">
              {t("ConstituencySearch.noMatches")}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}