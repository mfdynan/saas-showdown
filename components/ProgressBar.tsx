"use client";

interface ProgressBarProps {
  current: number; // 1-based current turn
  total: number;   // 6
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const completed = current - 1;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-arcade text-[9px] text-white/50">ROUND</span>
        <span className="font-arcade text-[9px] text-[#cee12f]">
          {current} / {total}
        </span>
      </div>
      <div className="flex gap-1.5 h-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`
              flex-1 h-full transition-all duration-300
              ${i < completed
                ? "bg-[#cee12f]"
                : i === completed
                ? "bg-[#6c40ed] animate-pulse"
                : "bg-white/15"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
