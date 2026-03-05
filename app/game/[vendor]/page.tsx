"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getVendorById } from "@/lib/vendors";
import ProgressBar from "@/components/ProgressBar";
import ScoreDisplay from "@/components/ScoreDisplay";
import TurnCard from "@/components/TurnCard";

const difficultyColors: Record<string, string> = {
  easy: "#30d1bf",
  medium: "#ffcb77",
  hard: "#f7758b",
};

export default function GamePage({
  params,
}: {
  params: { vendor: string };
}) {
  const { vendor: vendorId } = params;
  const router = useRouter();
  const vendor = getVendorById(vendorId);

  const [currentTurn, setCurrentTurn] = useState(0); // 0-indexed
  const [score, setScore] = useState(0);
  const [showFight, setShowFight] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowFight(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-arcade text-sm text-[#f7758b]">VENDOR NOT FOUND</p>
      </div>
    );
  }

  function handleAnswer(points: 0 | 5 | 10) {
    const newScore = score + points;
    setScore(newScore);

    const nextTurn = currentTurn + 1;
    if (nextTurn >= vendor!.turns.length) {
      router.push(`/results/${vendorId}?score=${newScore}`);
    } else {
      setCurrentTurn(nextTurn);
    }
  }

  const turn = vendor.turns[currentTurn];
  const diffColor = difficultyColors[vendor.difficulty];

  return (
    <div className="min-h-screen px-4 py-6">
      {/* FIGHT! overlay */}
      <AnimatePresence>
        {showFight && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#323234]/90"
          >
            <span
              className="font-arcade text-5xl sm:text-7xl"
              style={{ color: "#cee12f", textShadow: `0 0 40px #cee12f` }}
            >
              FIGHT!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[720px] mx-auto">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 mb-6">
          {/* Vendor nameplate */}
          <div>
            <div
              className="inline-block font-arcade text-[8px] px-2 py-1 mb-1 border"
              style={{
                color: diffColor,
                borderColor: diffColor,
                backgroundColor: `${diffColor}18`,
              }}
            >
              {vendor.difficulty.toUpperCase()}
            </div>
            <h1 className="font-arcade text-base sm:text-lg text-[#f6f6f7] leading-tight">
              {vendor.name}
            </h1>
          </div>

          {/* Score */}
          <ScoreDisplay score={score} />
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <ProgressBar current={currentTurn + 1} total={vendor.turns.length} />
        </div>

        {/* Turn card */}
        <AnimatePresence mode="wait">
          <TurnCard
            key={currentTurn}
            turn={turn}
            vendorName={vendor.name}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
