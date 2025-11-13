"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // or replace with your pixel-art icon

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 bg-yellow-300 border-4 border-black text-black p-3 md:p-4 shadow-[4px_4px_0px_#000] hover:bg-yellow-400 active:translate-y-0.5 transition-all duration-200 ease-out
        ${
          visible
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      style={{
        fontFamily: "'Press Start 2P', cursive",
        transitionProperty: "opacity, transform",
      }}
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}
