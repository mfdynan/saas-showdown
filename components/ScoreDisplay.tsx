"use client";

interface ScoreDisplayProps {
  score: number;
  max?: number;
}

export default function ScoreDisplay({ score, max = 60 }: ScoreDisplayProps) {
  return (
    <div className="text-right">
      <div className="font-arcade text-[8px] text-white/40 mb-1">SCORE</div>
      <div className="font-arcade text-lg text-[#cee12f] tabular-nums">
        {String(score).padStart(2, "0")}
        <span className="text-white/20 text-xs">/{max}</span>
      </div>
    </div>
  );
}
