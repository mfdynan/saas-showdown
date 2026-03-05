"use client";

import Link from "next/link";
import { Vendor } from "@/lib/vendors";
import { Grade } from "@/lib/scoring";

interface ResultsCTAProps {
  vendor: Vendor;
  grade: Grade;
  score: number;
}

export default function ResultsCTA({ vendor }: ResultsCTAProps) {
  return (
    <div className="border-2 border-[#6c40ed] bg-[#6c40ed]/10 p-6 text-center">
      <p className="font-arcade text-[8px] text-[#6c40ed] mb-3 tracking-widest">
        UNLOCK YOUR EDGE
      </p>
      <h2 className="font-arcade text-sm text-[#cee12f] leading-relaxed mb-2">
        Get the full {vendor.name} negotiation playbook
      </h2>
      <p className="font-mono-body text-sm text-white/70 mb-6 leading-relaxed">
        Learn every tactic, counter, and benchmark to use in your next renewal.
      </p>
      <a
        href="https://www.tropicapp.io/kits/negotiation-playbook"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          bg-[#6c40ed] text-white
          font-arcade text-[10px]
          px-6 py-4
          border-2 border-[#6c40ed]
          hover:bg-[#cee12f] hover:text-[#323234] hover:border-[#cee12f]
          transition-colors duration-150
          leading-none
        "
      >
        Download Free Playbook &rarr;
      </a>

      <div className="mt-6 pt-6 border-t border-white/10">
        <Link
          href="/"
          className="
            inline-block
            font-arcade text-[9px] text-white/40
            hover:text-[#cee12f]
            transition-colors
          "
        >
          &larr; Try another vendor
        </Link>
      </div>
    </div>
  );
}
