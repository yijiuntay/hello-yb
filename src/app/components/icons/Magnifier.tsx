import React from "react";

export default function Magnifier({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square" // adds a pixelated vibe
      strokeLinejoin="miter"
      className={className}
    >
      {/* Lens */}
      <rect x="2" y="2" width="14" height="14" rx="3" ry="3" fill="none" />
      {/* Handle */}
      <rect
        x="13"
        y="13"
        width="8"
        height="2"
        transform="rotate(45 13 13)"
        fill="none"
      />
      {/* Optional cross lines to enhance pixelated feel */}
      <line x1="5" y1="5" x2="11" y2="5" />
      <line x1="5" y1="5" x2="5" y2="11" />
    </svg>
  );
}
