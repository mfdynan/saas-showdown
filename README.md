# SaaS Showdown

**Out-negotiate the sales rep.**

An interactive negotiation training game for procurement and finance professionals. Pick a SaaS vendor, play through 6 turns of realistic negotiation scenarios against a simulated sales rep, and find out if you have what it takes.

Built by [Tropic](https://www.tropicapp.io) — the smarter way to buy SaaS.

---

## Demo

🎮 **[Play it live →](https://saas-showdown.vercel.app)**

---

## What it is

- 15 SaaS vendors (Zoom, Salesforce, Slack, GitHub, Okta, and more)
- 6 turns per game, each scored 0 / 5 / 10 points
- Instant feedback on every choice — why it was good or bad
- Final grade + personalized debrief + link to the full negotiation playbook
- Zero auth, zero database — fully static and client-side

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Animations | Framer Motion |
| Fonts | Press Start 2P + IBM Plex Mono |
| Deployment | Vercel |

---

## Design

Retro arcade fighting game aesthetic — think Street Fighter II meets SaaS procurement. The user is a fighter. The sales rep is the opponent. Every round is a negotiation move.

**Color palette:**

| Token | Hex | Usage |
|---|---|---|
| Off Black | `#323234` | Background |
| Light Grey | `#f6f6f7` | Body text |
| Keylime | `#cee12f` | 10pt hits, accents, score |
| Purple | `#6c40ed` | Primary CTAs, highlights |
| Teal | `#30d1bf` | 5pt hits, easy difficulty |
| Coral | `#f7758b` | 0pt misses, hard difficulty, rep bubble |
| Orange | `#ffcb77` | Medium difficulty |

---

## Project structure

```
/app
  page.tsx                   → Vendor selection screen
  /game/[vendor]/page.tsx    → 6-turn game loop
  /results/[vendor]/page.tsx → Score reveal + grade + CTA

/components
  VendorCard.tsx    → Filterable vendor grid cards
  TurnCard.tsx      → Rep speech bubble + response options + feedback
  ProgressBar.tsx   → Arcade-style turn progress bar
  ScoreDisplay.tsx  → Running score counter
  ResultsCTA.tsx    → Playbook download CTA

/lib
  vendors.ts   → All 15 vendors with full scenario data
  scoring.ts   → Grade thresholds + color/label helpers
```

---

## Game data model

```ts
type ResponseOption = {
  text: string;
  points: 0 | 5 | 10;
  feedback: string; // shown after selection
};

type Turn = {
  turnNumber: number;
  repMessage: string;
  options: [ResponseOption, ResponseOption, ResponseOption];
};

type Vendor = {
  id: string;
  name: string;
  difficulty: "easy" | "medium" | "hard";
  playbookUrl: string;
  tagline: string;
  turns: [Turn, Turn, Turn, Turn, Turn, Turn];
};
```

All game data is hardcoded in `/lib/vendors.ts` — no API, no database. Score is passed via URL param to the results page (`/results/[vendor]?score=X`).

---

## Scoring

| Score | Grade |
|---|---|
| 50–60 | Expert Negotiator |
| 35–49 | Solid Performer |
| 20–34 | Needs Practice |
| 0–19 | Sales Rep Won |

---

## Running locally

```bash
git clone https://github.com/mfdynan/saas-showdown.git
cd saas-showdown
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Vendors

| Vendor | Difficulty |
|---|---|
| Zoom | Hard |
| Slack | Hard |
| Fivetran | Hard |
| DocuSign | Hard |
| Clari | Hard |
| 15Five | Hard |
| Rippling | Medium |
| Retool | Medium |
| Asana | Medium |
| 1Password | Medium |
| Splunk | Easy |
| Salesforce | Easy |
| Okta | Easy |
| GitHub | Easy |
| Adobe | Easy |

---

## Adding a vendor

1. Add a new entry to the `vendors` array in `/lib/vendors.ts`
2. Follow the `Vendor` type — exactly 6 turns, exactly 3 options per turn, points must be `0 | 5 | 10`
3. That's it — the UI picks it up automatically

---

## Deploying

Deployed on Vercel with zero configuration. Push to `main` triggers a redeploy automatically.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mfdynan/saas-showdown)
