"use client";

import Link from "next/link";
import { Vendor } from "@/lib/vendors";

const difficultyConfig = {
  easy: {
    label: "EASY",
    color: "#30d1bf",
    border: "border-[#30d1bf]",
    bg: "bg-[#30d1bf]/10",
    text: "text-[#30d1bf]",
  },
  medium: {
    label: "MEDIUM",
    color: "#ffcb77",
    border: "border-[#ffcb77]",
    bg: "bg-[#ffcb77]/10",
    text: "text-[#ffcb77]",
  },
  hard: {
    label: "HARD",
    color: "#f7758b",
    border: "border-[#f7758b]",
    bg: "bg-[#f7758b]/10",
    text: "text-[#f7758b]",
  },
};

export default function VendorCard({ vendor }: { vendor: Vendor }) {
  const diff = difficultyConfig[vendor.difficulty];

  return (
    <Link href={`/game/${vendor.id}`} className="group block">
      <div
        className={`
          relative bg-[#3a3a3c] border-2 ${diff.border}
          p-5 h-full
          transition-all duration-150
          group-hover:bg-[#42424a]
          group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]
          group-hover:shadow-[4px_4px_0px_0px_${diff.color}]
        `}
        style={{
          "--hover-shadow": `4px 4px 0px 0px ${diff.color}`,
        } as React.CSSProperties}
      >
        {/* Difficulty badge */}
        <div
          className={`
            inline-block px-2 py-1 mb-3
            font-arcade text-[8px]
            ${diff.bg} ${diff.text} border ${diff.border}
          `}
        >
          {diff.label}
        </div>

        {/* Vendor name */}
        <h3 className="font-arcade text-sm text-[#f6f6f7] leading-relaxed mb-3 group-hover:text-[#cee12f] transition-colors">
          {vendor.name}
        </h3>

        {/* Tagline */}
        <p className="font-mono-body text-xs text-white/60 leading-relaxed">
          {vendor.tagline}
        </p>

        {/* Fight prompt */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <span className="font-arcade text-[9px] text-[#6c40ed] group-hover:text-[#cee12f] transition-colors">
            FIGHT &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
