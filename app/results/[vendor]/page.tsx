"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { getVendorById } from "@/lib/vendors";
import { calculateGrade, MAX_SCORE } from "@/lib/scoring";
import ResultsCTA from "@/components/ResultsCTA";

function ResultsContent({ vendorId }: { vendorId: string }) {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") ?? "0", 10);
  const vendor = getVendorById(vendorId);

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-arcade text-sm text-[#f7758b]">VENDOR NOT FOUND</p>
      </div>
    );
  }

  const grade = calculateGrade(score);
  const pct = Math.round((score / MAX_SCORE) * 100);

  const arcadeColor =
    score >= 50
      ? "#cee12f"
      : score >= 35
      ? "#30d1bf"
      : score >= 20
      ? "#ffcb77"
      : "#f7758b";

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-[720px] mx-auto">
        {/* Grade reveal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="font-arcade text-[9px] text-white/40 mb-4 tracking-widest">
            GAME OVER
          </p>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
            className="mb-4"
          >
            <span
              className="font-arcade text-4xl sm:text-6xl block"
              style={{ color: arcadeColor, textShadow: `0 0 30px ${arcadeColor}` }}
            >
              {grade.arcadeText}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-arcade text-xs text-[#f6f6f7] mb-1">
              {grade.emoji} {grade.label}
            </p>
            <p className="font-mono-body text-sm text-white/60 mt-3 max-w-sm mx-auto leading-relaxed">
              {grade.message}
            </p>
          </motion.div>
        </motion.div>

        {/* Score display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-2 border-white/20 p-6 mb-6 text-center"
        >
          <p className="font-arcade text-[8px] text-white/40 mb-3">
            FINAL SCORE — {vendor.name.toUpperCase()}
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span
              className="font-arcade text-5xl"
              style={{ color: arcadeColor }}
            >
              {score}
            </span>
            <span className="font-arcade text-lg text-white/30">/ {MAX_SCORE}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/10 h-3 mb-2">
            <motion.div
              className="h-full"
              style={{ backgroundColor: arcadeColor }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="font-arcade text-[8px] text-white/30">{pct}%</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <ResultsCTA vendor={vendor} grade={grade} score={score} />
        </motion.div>
      </div>
    </div>
  );
}

export default function ResultsPage({
  params,
}: {
  params: Promise<{ vendor: string }>;
}) {
  const { vendor: vendorId } = use(params);
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-arcade text-sm text-[#cee12f] animate-blink">
            LOADING...
          </p>
        </div>
      }
    >
      <ResultsContent vendorId={vendorId} />
    </Suspense>
  );
}
