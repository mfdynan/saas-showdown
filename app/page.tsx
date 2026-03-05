"use client";

import { useState } from "react";
import { vendors } from "@/lib/vendors";
import VendorCard from "@/components/VendorCard";

type Filter = "all" | "easy" | "medium" | "hard";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "easy", label: "EASY" },
  { value: "medium", label: "MED" },
  { value: "hard", label: "HARD" },
];

export default function HomePage() {
  const [filter, setFilter] = useState<Filter>("all");

  const displayed =
    filter === "all" ? vendors : vendors.filter((v) => v.difficulty === filter);

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-arcade text-[9px] text-[#6c40ed] tracking-widest mb-4">
            TROPIC PRESENTS
          </p>
          <h1 className="font-arcade text-2xl sm:text-3xl text-[#cee12f] leading-tight mb-4">
            SAAS
            <br />
            SHOWDOWN
          </h1>
          <p className="font-mono-body text-base text-white/70 max-w-md mx-auto leading-relaxed">
            Out-negotiate the sales rep.
          </p>
          <p className="font-mono-body text-sm text-white/50 max-w-md mx-auto mt-2 leading-relaxed">
            6 rounds. Real tactics. Pick your opponent.
          </p>

          {/* VS divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-arcade text-xs text-[#f7758b]">VS</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </div>

        {/* Difficulty filter */}
        <div className="flex gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`
                font-arcade text-[9px] px-3 py-2 border transition-colors duration-100
                ${
                  filter === f.value
                    ? "border-[#cee12f] bg-[#cee12f]/10 text-[#cee12f]"
                    : "border-white/20 text-white/40 hover:border-white/40 hover:text-white/70"
                }
              `}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto font-mono-body text-xs text-white/30 self-center">
            {displayed.length} vendor{displayed.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Vendor grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayed.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        {/* Bottom hint */}
        <p className="text-center font-arcade text-[8px] text-white/20 mt-10">
          INSERT COIN TO CONTINUE
        </p>
      </div>
    </div>
  );
}
