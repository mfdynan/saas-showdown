export type Grade = {
  label: string;
  emoji: string;
  message: string;
  arcadeText: string;
};

export const MAX_SCORE = 60;

export function calculateGrade(score: number): Grade {
  if (score >= 50) {
    return {
      label: "Expert Negotiator",
      emoji: "🏆",
      message:
        "You out-negotiated the sales rep at every turn. Procurement teams like yours save companies millions.",
      arcadeText: "WINNER",
    };
  } else if (score >= 35) {
    return {
      label: "Solid Performer",
      emoji: "💼",
      message:
        "You held your ground on the big moments. A few more tactics and you'd be untouchable.",
      arcadeText: "GOOD FIGHT",
    };
  } else if (score >= 20) {
    return {
      label: "Needs Practice",
      emoji: "📚",
      message:
        "The rep got a few points on you. Study the playbook and you'll come back stronger.",
      arcadeText: "ROUND LOST",
    };
  } else {
    return {
      label: "Sales Rep Won",
      emoji: "😬",
      message:
        "The sales rep walked away happy. Download the playbook — you need it.",
      arcadeText: "K.O.",
    };
  }
}

export function getScoreColor(points: 0 | 5 | 10): string {
  if (points === 10) return "#cee12f"; // keylime
  if (points === 5) return "#30d1bf"; // teal
  return "#f7758b"; // coral
}

export function getScoreLabel(points: 0 | 5 | 10): string {
  if (points === 10) return "PERFECT";
  if (points === 5) return "SOLID";
  return "MISS";
}
