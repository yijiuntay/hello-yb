"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Magnifier from "@/app/components/icons/Magnifier";

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
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filtered = constituencies.filter((c) => {
    const q = query.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });

  // Helper to highlight matches
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

  return (
    <div className="relative w-full max-w-lg mx-auto px-2 sm:px-0">
      {/* Search Bar Container */}
      <div className="flex items-center border-4 border-black bg-yellow-200 text-black px-3 py-2 sm:px-4 sm:py-3 shadow-[4px_4px_0px_#000000] focus-within:bg-yellow-300 transition-all duration-150">
        <Magnifier className="mr-2 sm:mr-3 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your constituency..."
          className="w-full text-sm sm:text-base font-bold placeholder-black/50 focus:outline-none truncate"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        />
      </div>

      {/* Autocomplete Dropdown */}
      {query && (
        <ul
          className="absolute left-0 right-0 z-10 mt-2 border-4 border-black bg-yellow-100 text-black shadow-[6px_6px_0px_#000000] max-h-64 overflow-y-auto break-words sm:break-normal"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            scrollbarWidth: "thin",
            scrollbarColor: "#000 #fef08a",
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((c) => (
              <li
                key={c.id}
                onClick={() => router.push(`/constituencies/${c.id}`)}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold cursor-pointer hover:bg-yellow-300 border-b border-black last:border-b-0 transition-colors break-words sm:break-normal"
              >
                <span className="truncate block sm:inline">
                  {highlightMatch(c.code)} {highlightMatch(c.name)}
                </span>
              </li>
            ))
          ) : (
            <li className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-black/60">
              No matches found
            </li>
          )}
        </ul>
      )}

      {/* Custom Scrollbar for Webkit Browsers */}
      <style jsx>{`
        ul::-webkit-scrollbar {
          width: 8px;
        }
        ul::-webkit-scrollbar-track {
          background: #fef08a;
        }
        ul::-webkit-scrollbar-thumb {
          background-color: #000;
          border-radius: 0;
          border: 2px solid #fef08a;
        }
      `}</style>
    </div>
  );
}
