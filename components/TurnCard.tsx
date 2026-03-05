"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Turn, ResponseOption } from "@/lib/vendors";
import { getScoreColor, getScoreLabel } from "@/lib/scoring";

interface TurnCardProps {
  turn: Turn;
  vendorName: string;
  onAnswer: (points: 0 | 5 | 10) => void;
}

export default function TurnCard({ turn, vendorName, onAnswer }: TurnCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [advancing, setAdvancing] = useState(false);

  useEffect(() => {
    setSelected(null);
    setRevealed(false);
    setAdvancing(false);
  }, [turn.turnNumber]);

  function handleSelect(idx: number, option: ResponseOption) {
    if (selected !== null) return;
    setSelected(idx);
    setRevealed(true);

    setTimeout(() => {
      setAdvancing(true);
      setTimeout(() => {
        onAnswer(option.points);
      }, 300);
    }, 2200);
  }

  function getOptionStyle(idx: number, option: ResponseOption) {
    if (!revealed) {
      return "border-white/20 bg-[#3a3a3c] hover:border-[#6c40ed] hover:bg-[#6c40ed]/10 cursor-pointer";
    }
    if (idx === selected) {
      if (option.points === 10)
        return "border-[#cee12f] bg-[#cee12f]/15 cursor-default";
      if (option.points === 5)
        return "border-[#30d1bf] bg-[#30d1bf]/15 cursor-default";
      return "border-[#f7758b] bg-[#f7758b]/15 cursor-default";
    }
    return "border-white/10 bg-[#2a2a2c] opacity-40 cursor-default";
  }

  return (
    <motion.div
      key={turn.turnNumber}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: advancing ? 0 : 1, x: advancing ? -60 : 0 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="w-full"
    >
      {/* Round label */}
      <div className="text-center mb-6">
        <span className="font-arcade text-[10px] text-[#6c40ed] tracking-widest">
          ROUND {turn.turnNumber}
        </span>
      </div>

      {/* Rep speech bubble */}
      <div className="mb-6">
        <div className="font-arcade text-[8px] text-white/40 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#f7758b] rounded-full animate-pulse" />
          SALES REP [{vendorName.toUpperCase()}]
        </div>
        <div className="relative bg-[#3a3a3c] border-2 border-[#f7758b]/60 p-4 ml-3">
          {/* Bubble tail */}
          <div className="absolute -left-[9px] top-5 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-[#f7758b]/60 border-b-[8px] border-b-transparent" />
          <p className="font-mono-body text-sm text-[#f6f6f7] leading-relaxed">
            &ldquo;{turn.repMessage}&rdquo;
          </p>
        </div>
      </div>

      {/* Response options */}
      <div className="space-y-3">
        <div className="font-arcade text-[8px] text-white/40 mb-3">
          YOUR MOVE:
        </div>
        {turn.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx, option)}
            disabled={selected !== null}
            className={`
              w-full text-left border-2 p-4 transition-all duration-150
              ${getOptionStyle(idx, option)}
            `}
          >
            <div className="flex items-start gap-3">
              <span className="font-arcade text-[9px] text-white/30 mt-0.5 shrink-0">
                {String.fromCharCode(65 + idx)}.
              </span>
              <p className="font-mono-body text-sm leading-relaxed">
                {option.text}
              </p>
            </div>

            {/* Reveal feedback */}
            <AnimatePresence>
              {revealed && idx === selected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  className="mt-3 pt-3 border-t border-white/15"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-arcade text-[10px]"
                      style={{ color: getScoreColor(option.points) }}
                    >
                      {getScoreLabel(option.points)}
                    </span>
                    <span
                      className="font-arcade text-[10px]"
                      style={{ color: getScoreColor(option.points) }}
                    >
                      +{option.points}
                    </span>
                  </div>
                  <p className="font-mono-body text-xs text-white/70 leading-relaxed italic">
                    {option.feedback}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      {/* Advance hint */}
      {revealed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center font-arcade text-[8px] text-white/30 mt-6 animate-blink"
        >
          {turn.turnNumber < 6 ? "NEXT ROUND..." : "CALCULATING RESULT..."}
        </motion.p>
      )}
    </motion.div>
  );
}
