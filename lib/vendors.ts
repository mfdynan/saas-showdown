export type ResponseOption = {
  text: string;
  points: 0 | 5 | 10;
  feedback: string;
};

export type Turn = {
  turnNumber: number;
  repMessage: string;
  options: [ResponseOption, ResponseOption, ResponseOption];
};

export type Vendor = {
  id: string;
  name: string;
  difficulty: "easy" | "medium" | "hard";
  playbookUrl: string;
  tagline: string;
  turns: [Turn, Turn, Turn, Turn, Turn, Turn];
};

export const vendors: Vendor[] = [
  {
    id: "zoom",
    name: "Zoom",
    difficulty: "hard",
    playbookUrl: "https://www.tropicapp.io/playbooks/zoom",
    tagline: "They'll dangle AI add-ons and bundle pressure.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Great news — we're offering a 20% discount if you sign before end of quarter. I can only hold this for 48 hours.",
        options: [
          {
            text: "We appreciate the offer, but our procurement process takes longer than 48 hours. What's the actual last day you can extend this pricing?",
            points: 10,
            feedback:
              "Calls the deadline bluff and anchors on a real date. Artificial urgency is one of the oldest sales tactics — never accept it at face value.",
          },
          {
            text: "We need to review internally first, but we're interested.",
            points: 5,
            feedback:
              "Neutral, but doesn't challenge the false urgency. You've bought yourself time but left the pressure tactic intact.",
          },
          {
            text: "That's great timing — let's move forward.",
            points: 0,
            feedback:
              "Accepts artificial urgency without questioning it. You just handed them a free negotiating chip.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "I'm seeing you're on our base plan. If you upgrade to Zoom One, you get phone, whiteboard, and AI Companion bundled — much better value.",
        options: [
          {
            text: "We only need video conferencing right now. Can you price the base plan separately so we can compare against the bundle?",
            points: 10,
            feedback:
              "Unbundles and controls the comparison. Never let the vendor define value by what they package together.",
          },
          {
            text: "What's the price difference between the two?",
            points: 5,
            feedback:
              "Gets info but doesn't push back on the bundling tactic. You're still in their frame.",
          },
          {
            text: "The bundle does sound more complete — what would that cost?",
            points: 0,
            feedback:
              "Walks into the upsell. You've validated the bundle before understanding what you actually need.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "We typically don't discount more than 20%, but given your size I can see if I can get to 25%.",
        options: [
          {
            text: "We've benchmarked similar deals at 30%+ for our seat count. Let's start there.",
            points: 10,
            feedback:
              "Uses market data to anchor higher. Leading with benchmarks resets the anchor point in your favor.",
          },
          {
            text: "We'd love 25% — can you confirm that in writing?",
            points: 5,
            feedback:
              "Accepts without pushing further. Getting it in writing is smart, but you left discount on the table.",
          },
          {
            text: "25% is better than I expected — let's do it.",
            points: 0,
            feedback:
              "Leaves significant discount on the table. Their 'we typically don't' is a setup for exactly this moment.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "We'd love to lock in a 3-year agreement. I can sweeten the deal with free onboarding services if you commit.",
        options: [
          {
            text: "We prefer 1-year terms until we've validated the platform. We'd reconsider multi-year after year one with a price lock guarantee.",
            points: 10,
            feedback:
              "Protects optionality, offers conditional path to longer term. Always validate before committing years.",
          },
          {
            text: "What's the price difference between 1-year and 3-year?",
            points: 5,
            feedback:
              "Reasonable question but doesn't establish your position first. Information without a stance gives them the upper hand.",
          },
          {
            text: "3 years with free onboarding sounds like a deal.",
            points: 0,
            feedback:
              "Commits long-term for a low-value concession. Onboarding is cheap for them, expensive for you to undo.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Your renewal is coming up in 30 days. I wanted to make sure you had everything you needed to continue without a gap in service.",
        options: [
          {
            text: "Thanks for the heads up. We're evaluating Zoom alongside two alternatives before renewing. Can you send your best renewal offer by end of week?",
            points: 10,
            feedback:
              "Creates competitive pressure at renewal. Renewal is your best leverage moment — never signal intent to renew early.",
          },
          {
            text: "We plan to renew — can you send over the renewal paperwork?",
            points: 5,
            feedback:
              "Confirms intent too early. You've just told them there's no competitive risk.",
          },
          {
            text: "Yes, please send the renewal doc — we don't want any service interruption.",
            points: 0,
            feedback:
              "Signals fear of lapsing, kills all leverage. They now know you'll sign anything to avoid disruption.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "I can offer a 5% loyalty discount on renewal, but only if we close by Friday.",
        options: [
          {
            text: "5% isn't meaningful for a renewal at this seat count. We'd need 15%+ to stay off the market. Happy to sign Friday if we get there.",
            points: 10,
            feedback:
              "Counter-anchors with urgency mirroring. You're using their deadline against them while setting a real target.",
          },
          {
            text: "Can you do 10%?",
            points: 5,
            feedback:
              "Negotiates, but undershoots. You gave them a number first, and it's not aggressive enough.",
          },
          {
            text: "5% works — let's sign.",
            points: 0,
            feedback:
              "Accepts first offer at renewal. 5% is an insult on a renewal — loyalty discounts start at 15%.",
          },
        ],
      },
    ],
  },
  {
    id: "splunk",
    name: "Splunk",
    difficulty: "easy",
    playbookUrl: "https://www.tropicapp.io/playbooks/splunk",
    tagline: "Data ingestion pricing is their pressure point — use it.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Our pricing is based on data ingestion volume. Based on your current usage, I'd recommend the 50GB/day tier.",
        options: [
          {
            text: "Can you show us actual usage data from our trial? We want to right-size the tier before committing.",
            points: 10,
            feedback:
              "Data-driven pushback before committing to a tier. Never accept a vendor's tier recommendation without your own data.",
          },
          {
            text: "What happens if we go over 50GB?",
            points: 5,
            feedback:
              "Good risk question, but still accepts their framing. Overage rates are critical but so is the tier selection.",
          },
          {
            text: "50GB sounds right — what's the annual cost?",
            points: 0,
            feedback:
              "Accepts their recommendation without validation. You might be buying a tier too large or too small.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Splunk is the industry standard for SIEM. Switching costs would be high if you chose a competitor.",
        options: [
          {
            text: "We've also been evaluating Elastic and Cribl, which have significantly lower ingestion costs at scale. We'd want pricing that reflects that competition.",
            points: 10,
            feedback:
              "Names competitors, invokes alternatives. FUD about switching costs disappears when you have real alternatives in play.",
          },
          {
            text: "We're aware of alternatives but Splunk is our preference.",
            points: 5,
            feedback:
              "Shows preference, weakens leverage. Telling them you prefer them before negotiating is a mistake.",
          },
          {
            text: "You're right — the switching cost is a real concern for us.",
            points: 0,
            feedback:
              "Agrees with their FUD. You've handed them the single most powerful negotiating card: inertia.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "I can offer a pre-pay discount if you purchase 2 years of ingestion credits upfront.",
        options: [
          {
            text: "We'd consider prepay only with a usage rollover clause and a price cap on year 3. Without those, upfront commitment creates too much risk.",
            points: 10,
            feedback:
              "Converts concession into conditions. Prepay only makes sense with rollover and price protections.",
          },
          {
            text: "What's the discount amount?",
            points: 5,
            feedback:
              "Neutral inquiry — gets info but doesn't protect against the risks of prepaying unused credits.",
          },
          {
            text: "Prepaying 2 years for a discount sounds good to us.",
            points: 0,
            feedback:
              "Commits without protecting against over-buy risk. Prepaid credits you don't use are free money for Splunk.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Our enterprise tier includes premium support at no extra charge — that's a $30K value.",
        options: [
          {
            text: "We use shared support today with no issues. We'd rather reduce the base price than receive support we don't need.",
            points: 10,
            feedback:
              "Declines the phantom add-on. Vendor-stated value of bundled support is almost always inflated.",
          },
          {
            text: "What does premium support include exactly?",
            points: 5,
            feedback:
              "Questions it, but entertains the framing. You're still accepting their $30K valuation as the anchor.",
          },
          {
            text: "Premium support at no extra charge is a nice perk.",
            points: 0,
            feedback:
              "Accepts the anchor value as real. That $30K figure is marketing — it costs them almost nothing to include.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Most of our customers move to cloud-first SIEM. Can we discuss migrating your deployment to Splunk Cloud?",
        options: [
          {
            text: "We'll evaluate migration as a separate decision on our timeline. For now, we're focused on the renewal terms for our current deployment.",
            points: 10,
            feedback:
              "Redirects to the active deal. Never let a vendor open a new sales cycle mid-negotiation.",
          },
          {
            text: "We'd be open to hearing more about Splunk Cloud.",
            points: 5,
            feedback:
              "Entertains a new scope, loses focus. You've now split your attention across two deals.",
          },
          {
            text: "Cloud migration sounds interesting — what would that look like?",
            points: 0,
            feedback:
              "Opens a new sales cycle mid-negotiation. You've given them a chance to reset pricing from scratch.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "I can hold current pricing through Friday, but after that our Q1 price increase takes effect — roughly 8%.",
        options: [
          {
            text: "Price increase pressure won't accelerate our process. If the increase is real, we'd want it contractually locked out for the term regardless of when we sign.",
            points: 10,
            feedback:
              "Neutralizes the tactic, demands contractual protection. Legitimate price increases can be locked out contractually.",
          },
          {
            text: "Can you document that price increase?",
            points: 5,
            feedback:
              "Challenges, but still partially capitulates to urgency. Documentation is smart but doesn't protect you from the tactic.",
          },
          {
            text: "Let's sign before Friday then.",
            points: 0,
            feedback:
              "Closes on their timeline, not yours. The price increase may not even be real — you'll never know now.",
          },
        ],
      },
    ],
  },
  {
    id: "slack",
    name: "Slack",
    difficulty: "hard",
    playbookUrl: "https://www.tropicapp.io/playbooks/slack",
    tagline: "Salesforce ownership means bundling pressure — resist the platform play.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Now that Slack is part of Salesforce, we're seeing a lot of customers move to the Salesforce + Slack bundle for a unified workspace. Are you currently using Salesforce?",
        options: [
          {
            text: "Yes, but we evaluate each tool independently. We'd want Slack pricing to stand on its own merits before considering any bundle.",
            points: 10,
            feedback:
              "Separates the deals, protects against forced bundling. Never let a parent company use one product to pull another.",
          },
          {
            text: "We use Salesforce — what does the bundle pricing look like?",
            points: 5,
            feedback:
              "Engages the bundle without pushing back. You've signaled interest in the bundle before understanding the standalone value.",
          },
          {
            text: "A unified workspace sounds efficient — tell us more.",
            points: 0,
            feedback:
              "Walks into the platform pitch. You're now negotiating for a bundle you didn't come in for.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Your team is on Pro plan. Most teams your size upgrade to Business+ for unlimited message history — it's only $X more per seat.",
        options: [
          {
            text: "Our team doesn't need unlimited history for compliance reasons. Can you price a message retention add-on separately instead?",
            points: 10,
            feedback:
              "Reframes the need, breaks the upsell. Unlimited history is expensive — if you don't need it, don't pay for it.",
          },
          {
            text: "How much more is Business+ per seat annually?",
            points: 5,
            feedback:
              "Quantifies without challenging the premise. 'Only $X more' per seat adds up fast at scale.",
          },
          {
            text: "Unlimited history does sound like something we'd use.",
            points: 0,
            feedback:
              "Validates the upsell before checking if you actually need it. This is how budgets balloon.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "End of quarter is next week. I can lock in your current per-seat rate if we expand licenses now.",
        options: [
          {
            text: "We're not adding seats under quarter-end pressure. If the rate is competitive, it'll still be competitive next month. What's your best rate regardless of timing?",
            points: 10,
            feedback:
              "Kills the urgency and demands rate decoupling. Quarter-end pressure is their problem, not yours.",
          },
          {
            text: "How many seats would trigger the better rate?",
            points: 5,
            feedback:
              "Engages but doesn't challenge the tactic. You're still operating inside their urgency frame.",
          },
          {
            text: "We could probably pull in the expansion if the price is right.",
            points: 0,
            feedback:
              "Accepts urgency framing. You've told them they can accelerate your procurement with a small concession.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Slack Connect lets your teams collaborate externally with partners and clients — it's a huge productivity unlock. We'd recommend adding it.",
        options: [
          {
            text: "We'd want to pilot Slack Connect before paying for it. Can you include a 90-day trial in the contract?",
            points: 10,
            feedback:
              "Demands proof before paying. Never add features without validating they'll actually be used.",
          },
          {
            text: "What's the additional cost for Slack Connect?",
            points: 5,
            feedback:
              "Evaluates but entertains the expansion. You're one step from saying yes without a trial.",
          },
          {
            text: "Slack Connect sounds really useful for our external work.",
            points: 0,
            feedback:
              "Validates the add-on without scrutiny. Enthusiasm before pricing is a negotiator's trap.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "We've built advanced AI features into Slack — summarization, drafts, and workflow automation. This is available in our AI add-on for $X/seat.",
        options: [
          {
            text: "We're not ready to pay for AI features that are still maturing. We'd expect these to be included at no additional cost as the product evolves. This shouldn't be an add-on.",
            points: 10,
            feedback:
              "Challenges AI pricing as a standalone SKU. AI features are rapidly becoming table stakes — don't pay a premium for them.",
          },
          {
            text: "Can we trial the AI features before deciding?",
            points: 5,
            feedback:
              "Reasonable, but still accepts the premium framing. A trial is better than buying blind, but you haven't challenged the model.",
          },
          {
            text: "AI-powered summarization would be really valuable for our team.",
            points: 0,
            feedback:
              "Enthusiastic acceptance of a premium add-on. You've just validated an extra charge for a feature that will eventually be standard.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "To finalize, I can offer 12% off if we expand to 300 seats on a 2-year term.",
        options: [
          {
            text: "Our current user count is 220. We won't pay for 80 phantom seats. We'd sign 2 years at 220 seats for 18% off with a true-up only clause.",
            points: 10,
            feedback:
              "Rejects seat inflation, counter-anchors discount, sets true-up terms. Phantom seats are pure margin for them.",
          },
          {
            text: "Can we do 220 seats at 12%?",
            points: 5,
            feedback:
              "Right-sizes seats but doesn't push the discount. You fixed one problem but left money on the table.",
          },
          {
            text: "12% off on 300 seats — let's move forward.",
            points: 0,
            feedback:
              "Accepts seat count inflation. You're paying for 80 seats you don't have, which is a 36% overpayment on headcount.",
          },
        ],
      },
    ],
  },
  {
    id: "salesforce",
    name: "Salesforce",
    difficulty: "easy",
    playbookUrl: "https://www.tropicapp.io/playbooks/salesforce",
    tagline: "The king of artificial complexity — simplify and anchor early.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "I've put together a proposal that includes Sales Cloud, Service Cloud, and Einstein AI. This is how most of our customers in your segment get the most value.",
        options: [
          {
            text: "We only need Sales Cloud right now. Please price that standalone. We'll evaluate additional clouds separately after deployment.",
            points: 10,
            feedback:
              "Scope control — reject the mega-bundle. Every cloud they add multiplies complexity and price.",
          },
          {
            text: "What's the price breakdown per cloud?",
            points: 5,
            feedback:
              "Disaggregates, but still entertains the full bundle. You're evaluating a scope you didn't define.",
          },
          {
            text: "The full suite sounds like it covers all our needs.",
            points: 0,
            feedback:
              "Accepts scope you didn't ask for. Salesforce proposals include everything — strip it down to what you need.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "List price is $150/seat/month, but I've been authorized to offer a 20% discount if we move quickly.",
        options: [
          {
            text: "20% off list is the starting point in every Salesforce deal. We're benchmarking at 40%+ off for our seat count. Let's work from there.",
            points: 10,
            feedback:
              "Anchors aggressively based on market knowledge. Nobody pays list at Salesforce — 20% off is their opening move, not their best.",
          },
          {
            text: "Can we get 25% instead?",
            points: 5,
            feedback:
              "Negotiates but anchors too low. 25% is still far below what Salesforce routinely offers.",
          },
          {
            text: "20% off is a good discount — let's review the contract.",
            points: 0,
            feedback:
              "Accepts a standard offer as special. That 20% was authorized before they even met you.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "I'd recommend locking in a 3-year term — it protects your pricing and gives us room to add value over time.",
        options: [
          {
            text: "We'll do 1 year with an option for multi-year if we meet our adoption milestones. We want contractual exit rights before committing to 3 years.",
            points: 10,
            feedback:
              "Conditions the multi-year on performance. Salesforce CRM is worthless if adoption fails — don't lock in before you know.",
          },
          {
            text: "What's the savings on a 3-year vs 1-year deal?",
            points: 5,
            feedback:
              "Evaluates without committing a position. Information is useful but you haven't established your stance.",
          },
          {
            text: "3 years makes sense if we're going all in on Salesforce.",
            points: 0,
            feedback:
              "Signals long-term commitment before negotiation is done. You've removed the multi-year concession from the table.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "There will be a platform fee in addition to per-seat pricing. It's standard across all enterprise contracts.",
        options: [
          {
            text: "Platform fees aren't standard — they're negotiable. We'd want that removed or credited toward implementation services.",
            points: 10,
            feedback:
              "Challenges 'standard' framing directly. 'Standard' in Salesforce deals means 'we get away with it often.'",
          },
          {
            text: "What's the platform fee amount?",
            points: 5,
            feedback:
              "Questions it but doesn't push back. Getting the number is step one — rejecting it is step two.",
          },
          {
            text: "That makes sense — what's the total cost with the platform fee included?",
            points: 0,
            feedback:
              "Normalizes the add-on. You've accepted an invented fee without any resistance.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Your implementation will go faster with Salesforce Professional Services. I can include a discounted PS package.",
        options: [
          {
            text: "We're using a certified SI partner for implementation. We don't need PS included in this contract. Please remove it and reduce the base price accordingly.",
            points: 10,
            feedback:
              "Declines the margin-rich PS add-on. Salesforce PS is one of their highest-margin revenue lines — push it out.",
          },
          {
            text: "What's the PS package cost?",
            points: 5,
            feedback:
              "Questions but doesn't redirect. You're evaluating something you don't need with a better alternative.",
          },
          {
            text: "Including PS would help us get up and running faster.",
            points: 0,
            feedback:
              "Accepts a high-margin add-on. Salesforce PS is expensive — your SI partner will do it better for less.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "I can get you to 35% off list if you sign today — otherwise I need executive approval to maintain this rate.",
        options: [
          {
            text: "We've reached the point where we need to see the best number in writing, unconditionally. Artificial approval pressure won't change our timeline.",
            points: 10,
            feedback:
              "Calls the escalation bluff. 'Executive approval' is a classic tactic to create false scarcity — don't buy it.",
          },
          {
            text: "Can we have until end of week?",
            points: 5,
            feedback:
              "Pushes back on timing but not the tactic. You've bought a few days but the pressure is still on.",
          },
          {
            text: "If today is the deadline, we can make it work.",
            points: 0,
            feedback:
              "Capitulates to manufactured urgency. There is no executive approval risk — this is theater.",
          },
        ],
      },
    ],
  },
  {
    id: "rippling",
    name: "Rippling",
    difficulty: "medium",
    playbookUrl: "https://www.tropicapp.io/playbooks/rippling",
    tagline: "Modular pricing is their strength — make it your leverage.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Rippling is a unified platform — HR, IT, and Finance in one. You'll save on multiple point solutions by consolidating here.",
        options: [
          {
            text: "We're evaluating HR separately from IT. Give us pricing for HR Core only, and we'll revisit other modules in 6 months after deployment.",
            points: 10,
            feedback:
              "Phases the deal, prevents forced bundling. Evaluate one module at a time and expand on your terms.",
          },
          {
            text: "What's included in each module?",
            points: 5,
            feedback:
              "Gets details but stays in their frame. You're learning about scope you may not need.",
          },
          {
            text: "A unified HR and IT platform sounds very appealing.",
            points: 0,
            feedback:
              "Signals multi-module interest prematurely. You've told them you want the full platform before negotiating.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Our per-employee pricing scales down significantly at 500+ employees. You're right at the threshold.",
        options: [
          {
            text: "We're at 480 employees. We'd want tier pricing at 500-level applied now, with a true-up in Q2 when we expect to hit that threshold.",
            points: 10,
            feedback:
              "Uses near-threshold status as leverage. Being close to a pricing tier is negotiating capital — use it.",
          },
          {
            text: "How much cheaper is the 500-employee tier?",
            points: 5,
            feedback:
              "Asks the right question, no position. Information without action is just research.",
          },
          {
            text: "We're close — how do we get to the 500-employee tier?",
            points: 0,
            feedback:
              "Tips your hand on headcount trajectory. Now they know you'll hit 500 soon — leverage gone.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "If you include Rippling Finance, we can offer 20% off the full suite.",
        options: [
          {
            text: "We have a Finance system we're happy with. We're not adding modules to hit a bundle threshold. Price HR Core competitively on its own.",
            points: 10,
            feedback:
              "Refuses to buy scope they don't need for a discount. Bundle discounts only make sense if you need the bundle.",
          },
          {
            text: "What would Finance add for us specifically?",
            points: 5,
            feedback:
              "Curious, not committed. But asking about it opens a door you may not want open.",
          },
          {
            text: "20% off the full suite is compelling — let's look at adding Finance.",
            points: 0,
            feedback:
              "Expands scope for a discount. You're now paying for two modules when you only need one.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Implementation and onboarding is $5,000. It's standard for our platform migrations.",
        options: [
          {
            text: "We'd expect implementation to be waived at our contract size. This should be included, not a separate line item.",
            points: 10,
            feedback:
              "Anchors on deal size to remove the fee. Implementation fees are almost always negotiable at any meaningful contract size.",
          },
          {
            text: "Can we negotiate the implementation fee?",
            points: 5,
            feedback:
              "Signals flexibility but starts from their number. You asked to negotiate but didn't stake a position.",
          },
          {
            text: "$5,000 for implementation sounds reasonable.",
            points: 0,
            feedback:
              "Accepts without challenge. Implementation is a margin-rich add-on — it should be free at this spend level.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "We'd love a 2-year commitment to unlock our best pricing.",
        options: [
          {
            text: "We'd do 2 years if you include a price freeze for year 2 and a penalty-free exit clause for material changes to the product.",
            points: 10,
            feedback:
              "Conditions the multi-year on protections. Never commit long-term without price freezes and exit rights.",
          },
          {
            text: "What's the year 2 price difference?",
            points: 5,
            feedback:
              "Evaluates multi-year without conditions. You're weighing cost without weighing risk.",
          },
          {
            text: "2 years with better pricing works for us.",
            points: 0,
            feedback:
              "Commits without price protections. Year 2 could see a steep increase with no recourse.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "If you sign this week, I can include a dedicated CSM at no extra cost.",
        options: [
          {
            text: "We'd prefer a reduction in PEPM pricing over a dedicated CSM. Can we swap that concession for $2 less per employee per month?",
            points: 10,
            feedback:
              "Converts a service add-on into hard savings. A CSM costs them little — $2/PEPM is real money at scale.",
          },
          {
            text: "What does a dedicated CSM actually include?",
            points: 5,
            feedback:
              "Evaluates but doesn't redirect. You're considering a soft perk when you could be getting hard savings.",
          },
          {
            text: "A dedicated CSM sounds like great support — let's go ahead.",
            points: 0,
            feedback:
              "Accepts a soft concession over a monetary one. CSMs are great, but they don't reduce your invoice.",
          },
        ],
      },
    ],
  },
  {
    id: "retool",
    name: "Retool",
    difficulty: "medium",
    playbookUrl: "https://www.tropicapp.io/playbooks/retool",
    tagline: "Usage-based pricing needs tight guardrails.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Retool is priced per editor — the people building apps. Viewers are free. Most companies find this very cost-effective.",
        options: [
          {
            text: "We have 8 editors today but that could change as adoption grows. Can we cap editor pricing and get unlimited editors above a threshold?",
            points: 10,
            feedback:
              "Anticipates growth and caps cost upfront. Editor counts grow — protect yourself before they do.",
          },
          {
            text: "How do you define an editor vs. a viewer?",
            points: 5,
            feedback:
              "Clarifies definitions — good, but passive. Definitions matter but so does what happens when you exceed current counts.",
          },
          {
            text: "Free viewers is great — 8 editors works for now.",
            points: 0,
            feedback:
              "Accepts current scope without thinking ahead. 'For now' is expensive when editor counts triple.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Our Business plan includes SSO and audit logs, which you'll need for compliance.",
        options: [
          {
            text: "SSO and audit logs are table stakes features that shouldn't gate pricing tiers. We'd want them included in any plan we sign.",
            points: 10,
            feedback:
              "Refuses to pay for compliance features as a premium. Security and compliance features should never be tier-gated.",
          },
          {
            text: "What's the price difference between plans?",
            points: 5,
            feedback:
              "Evaluates tiers without challenging the structure. You're accepting that compliance costs extra.",
          },
          {
            text: "If we need SSO, we'll need to upgrade — understood.",
            points: 0,
            feedback:
              "Accepts the tier lock-in. You've been maneuvered into a more expensive tier by basic security requirements.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "We offer cloud, on-prem, and hybrid deployment. Enterprise customers often go hybrid for data security.",
        options: [
          {
            text: "We're cloud-only. Please price accordingly — we don't want to pay for infrastructure options we won't use.",
            points: 10,
            feedback:
              "Eliminates scope creep from deployment options. Don't pay for optionality you've already decided against.",
          },
          {
            text: "What's the pricing difference across deployment models?",
            points: 5,
            feedback:
              "Inquires but opens a conversation you may not need. Now they think hybrid is on the table.",
          },
          {
            text: "Hybrid does sound more secure for our data.",
            points: 0,
            feedback:
              "Unnecessarily introduces complexity and cost. Hybrid means on-prem costs plus cloud costs.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "We'd love to include a Retool training package — 5 days of live training for your team.",
        options: [
          {
            text: "Our developers are self-sufficient with documentation. We'd rather apply that budget toward a lower per-editor rate.",
            points: 10,
            feedback:
              "Converts a soft add-on to hard cost reduction. Training is cheap for them and costly in contract value for you.",
          },
          {
            text: "What's the training package cost?",
            points: 5,
            feedback:
              "Questions it but doesn't redirect. You're pricing something you should be replacing with a discount.",
          },
          {
            text: "5 days of live training would be really helpful for our team.",
            points: 0,
            feedback:
              "Enthusiastically accepts a billable add-on. This training should be free or converted into pricing.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "We're launching Retool AI next quarter — if you commit now, you'll be locked into current pricing before the AI feature premium kicks in.",
        options: [
          {
            text: "We won't pay for features not yet launched. If AI features are added, we'd want them included at no premium under our contract's product update clause.",
            points: 10,
            feedback:
              "Protects against future feature upsells in contract. Locking in to avoid a future price for an unlaunched product is a trap.",
          },
          {
            text: "When exactly is the AI launch and what will it cost?",
            points: 5,
            feedback:
              "Gets info but doesn't protect yourself. Timeline and price data is useful, but you haven't secured protection.",
          },
          {
            text: "Locking in before the AI premium sounds smart.",
            points: 0,
            feedback:
              "Buys into manufactured urgency around an unlaunched product. The AI premium may never materialize — or may be waivable.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "We can do 15% off annual if you commit to 50 editors on a 2-year contract.",
        options: [
          {
            text: "We're at 8 editors today. We won't pre-buy 42 editors. We'd sign 2 years at our actual editor count with a step-down price at 20, 35, and 50 editor thresholds.",
            points: 10,
            feedback:
              "Rejects seat overcommit, negotiates volume tiers. 42 phantom editors is a massive overpay — build tiers instead.",
          },
          {
            text: "Can we do 20 editors instead of 50?",
            points: 5,
            feedback:
              "Right-sizes but undersells the concession. 20 editors is still 12 too many — and no tiers.",
          },
          {
            text: "50 editors on a 2-year plan works if the discount is there.",
            points: 0,
            feedback:
              "Pre-buys for seats you don't need. You're paying 6x your actual usage from day one.",
          },
        ],
      },
    ],
  },
  {
    id: "okta",
    name: "Okta",
    difficulty: "easy",
    playbookUrl: "https://www.tropicapp.io/playbooks/okta",
    tagline: "Their MAU model can balloon — pin usage definitions early.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Okta's pricing is based on monthly active users. Based on your headcount, you're looking at our Workforce Identity plan.",
        options: [
          {
            text: "Before we discuss pricing, we need clarity on how Okta defines an 'active user' — login threshold, service accounts, etc. This definition drives our cost model.",
            points: 10,
            feedback:
              "Nails down the definition before accepting the pricing model. MAU definitions can vary wildly — nail this down first.",
          },
          {
            text: "How does the MAU count work in practice?",
            points: 5,
            feedback:
              "Good question, but reactive. You're asking after accepting the plan recommendation.",
          },
          {
            text: "Workforce Identity sounds right for our use case.",
            points: 0,
            feedback:
              "Accepts without understanding how you'll be counted. MAU surprises at billing time are expensive.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Adding Customer Identity (CIAM) alongside Workforce would give you one identity platform for employees and customers.",
        options: [
          {
            text: "We have no customer-facing application today. We'd want Workforce Identity only, with a contractual option to add CIAM in year 2 at current pricing.",
            points: 10,
            feedback:
              "Separates the products and protects future pricing. CIAM is a completely different product — don't bundle what you don't need.",
          },
          {
            text: "What would CIAM add to our current setup?",
            points: 5,
            feedback:
              "Curious but opens the door. You're evaluating a product for a use case that doesn't exist yet.",
          },
          {
            text: "Having one identity platform does make sense long-term.",
            points: 0,
            feedback:
              "Buys into the expansion too early. 'Long-term' is a dangerous word when negotiating today's contract.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Our Advanced Server Access add-on is critical for your DevOps team's compliance posture.",
        options: [
          {
            text: "Our DevOps team uses VPN and bastion hosts today. We'd want a free trial of Advanced Server Access before adding it to the contract.",
            points: 10,
            feedback:
              "Demands proof of value before paying. 'Critical' is a sales word — test it before you buy it.",
          },
          {
            text: "What does Advanced Server Access include?",
            points: 5,
            feedback:
              "Evaluates but doesn't push back. Understanding what it includes is one step — validating you need it is another.",
          },
          {
            text: "Compliance is important for our DevOps team — what's the cost?",
            points: 0,
            feedback:
              "Accepts their framing of the need. You've agreed you need it before even understanding what it does.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "We recommend a 3-year commitment for price stability, especially with anticipated MAU growth.",
        options: [
          {
            text: "We'll do 1 year initially, with an option for multi-year renewal contingent on MAU accuracy and actual platform reliability. We need to see actual usage data first.",
            points: 10,
            feedback:
              "Conditions multi-year on performance evidence. MAU-based pricing with unknown growth is a 3-year risk, not a benefit.",
          },
          {
            text: "What's the discount on 3 years?",
            points: 5,
            feedback:
              "Evaluates without establishing position. Price information is useful but you've opened the 3-year door.",
          },
          {
            text: "3-year price stability sounds like a smart hedge.",
            points: 0,
            feedback:
              "Commits without performance evidence. If MAU counts balloon, you're locked into a bad deal for 3 years.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Our Professional Services team can help you implement MFA and SSO across your app stack.",
        options: [
          {
            text: "We'll manage implementation internally with your documentation. We want PS cost removed and applied to a lower per-user rate.",
            points: 10,
            feedback:
              "Rejects PS, converts to pricing. Internal implementation is almost always cheaper and just as good.",
          },
          {
            text: "How long does the PS engagement usually take?",
            points: 5,
            feedback:
              "Curious, not committed. Timeline questions are fine, but they don't push back on the cost.",
          },
          {
            text: "Having Okta PS handle the MFA rollout would be easier.",
            points: 0,
            feedback:
              "Accepts a high-margin services add-on. 'Easier' has a price — and it's usually not worth it.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "To close this quarter, I can offer a 10% discount on the annual contract.",
        options: [
          {
            text: "We've benchmarked Okta deals at 20–25% off for our user tier. 10% isn't competitive. We'd like to get to 20% to sign this quarter.",
            points: 10,
            feedback:
              "Counter with market benchmark and mirrors their urgency. Always lead with benchmarks — 10% is an insult at any meaningful scale.",
          },
          {
            text: "Can we get to 15%?",
            points: 5,
            feedback:
              "Pushes but undershoots. 15% is better, but still below what comparable deals get.",
          },
          {
            text: "10% works for us — let's finalize.",
            points: 0,
            feedback:
              "Accepts first offer. 10% off at Okta is their floor, not their ceiling.",
          },
        ],
      },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    difficulty: "easy",
    playbookUrl: "https://www.tropicapp.io/playbooks/github",
    tagline: "Actions minutes and storage are the hidden cost — cap them.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "GitHub Enterprise gives you GHES or GitHub.com Enterprise Cloud — most companies your size go cloud.",
        options: [
          {
            text: "We're evaluating GitHub.com Enterprise Cloud. Before pricing, we need to understand Actions minutes, Packages storage, and Advanced Security pricing separately.",
            points: 10,
            feedback:
              "Disaggregates the bundle before pricing. Actions overages and storage are where GitHub hides real cost.",
          },
          {
            text: "What's included in Enterprise Cloud vs GHES?",
            points: 5,
            feedback:
              "Clarifies but stays in their frame. You're learning about options rather than defining your scope.",
          },
          {
            text: "Cloud makes sense for us — what's the price?",
            points: 0,
            feedback:
              "Jumps to price without understanding all cost drivers. You'll hit overage surprises within months.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "GitHub Advanced Security adds secret scanning and code scanning for all your repos.",
        options: [
          {
            text: "Advanced Security is priced per active committer, not per seat — we need to audit committer counts before accepting any pricing on this.",
            points: 10,
            feedback:
              "Controls the cost driver definition. 'Active committer' is a specific definition — audit it before you accept pricing.",
          },
          {
            text: "What's the cost of Advanced Security per user?",
            points: 5,
            feedback:
              "Asks but accepts the pricing structure. You're evaluating cost without challenging how it's measured.",
          },
          {
            text: "Security features sound essential for our engineering team.",
            points: 0,
            feedback:
              "Enthusiastically accepts a premium add-on. Essential or not — make them earn the add-on price.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Copilot Business is $19/seat/month. For your 80 developers, it's an obvious productivity investment.",
        options: [
          {
            text: "Copilot is a separate evaluation. We're negotiating Enterprise licenses today. Bundle discounts are only interesting if Copilot pricing is independently competitive.",
            points: 10,
            feedback:
              "Keeps the two negotiations separate. Don't let a Copilot discount subsidize a bad Enterprise deal.",
          },
          {
            text: "Can you discount Copilot if we bundle it with Enterprise?",
            points: 5,
            feedback:
              "Engages the bundle. Bundling isn't inherently bad but make sure each element is priced right.",
          },
          {
            text: "Copilot for 80 developers sounds like a clear win.",
            points: 0,
            feedback:
              "Expands scope mid-negotiation. You've increased deal size before locking the existing terms.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Multi-year commits on GitHub Enterprise give you predictable budget and lock in this year's pricing.",
        options: [
          {
            text: "We'll commit 1 year now. We'd need usage data on Actions minutes and storage overages before committing to multi-year — those are our unknown cost risk.",
            points: 10,
            feedback:
              "Conditions multi-year on understanding true cost. Actions minutes and storage overages are the real budget risk.",
          },
          {
            text: "What's the discount for committing 2 years?",
            points: 5,
            feedback:
              "Evaluates without position. You've opened multi-year before resolving the overage risk question.",
          },
          {
            text: "Multi-year makes sense for a platform like GitHub.",
            points: 0,
            feedback:
              "Commits without cost visibility. GitHub Actions overages can double your annual bill.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Our Customer Success team offers onboarding and migration support included in your first year.",
        options: [
          {
            text: "We'll manage migration internally. If that support is included, we'd like its value reflected in a lower seat price rather than as a bundled service.",
            points: 10,
            feedback:
              "Converts bundled services to hard pricing. If they're including it anyway, get the dollar value applied to price.",
          },
          {
            text: "What does the onboarding support involve?",
            points: 5,
            feedback:
              "Evaluates but doesn't redirect. You're learning about something you should be monetizing.",
          },
          {
            text: "Included onboarding support is really helpful.",
            points: 0,
            feedback:
              "Accepts without questioning its pricing impact. 'Included' often means baked into an inflated seat price.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "I can hold this pricing through end of month, but after that our annual price increase may apply.",
        options: [
          {
            text: "Price increase threats won't affect our timeline. We'd want a contractual price hold for 2 years regardless of when we sign, or we'll evaluate GitLab more seriously.",
            points: 10,
            feedback:
              "Invokes competitor and demands price protection. Mentioning GitLab is the single most effective thing you can do in a GitHub negotiation.",
          },
          {
            text: "Can you extend the hold another 2 weeks?",
            points: 5,
            feedback:
              "Pushes back on timing, not the tactic. Two more weeks doesn't solve the price protection problem.",
          },
          {
            text: "Let's sign before end of month then.",
            points: 0,
            feedback:
              "Accepts manufactured urgency. The price increase is almost certainly not real — you'll never know now.",
          },
        ],
      },
    ],
  },
  {
    id: "fivetran",
    name: "Fivetran",
    difficulty: "hard",
    playbookUrl: "https://www.tropicapp.io/playbooks/fivetran",
    tagline: "MAR pricing makes costs unpredictable — build in caps and credits.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Fivetran is priced on Monthly Active Rows — the number of rows synced or updated in a month. It's transparent and usage-based.",
        options: [
          {
            text: "MAR can grow unpredictably as data volumes scale. Before any pricing discussion, we need a clear cap mechanism and what happens when we exceed our tier.",
            points: 10,
            feedback:
              "Surfaces the cost risk in the pricing model upfront. MAR is 'transparent' until your data doubles — cap it early.",
          },
          {
            text: "How do you calculate monthly active rows?",
            points: 5,
            feedback:
              "Good clarifying question, but reactive. Understanding the calculation matters but so does the risk of uncapped growth.",
          },
          {
            text: "Usage-based sounds fair — what's the cost per MAR tier?",
            points: 0,
            feedback:
              "Accepts the model without understanding risk. Usage-based pricing is only fair when you understand your usage.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "We have connectors for 500+ data sources. Your competitors are already using Fivetran at scale.",
        options: [
          {
            text: "Connector breadth is valuable but we only need 12 connectors today. We'd want pricing tied to our active connectors, not the full catalog.",
            points: 10,
            feedback:
              "Scopes to actual need, rejects breadth pricing. You're paying for the connectors you use, not a catalog.",
          },
          {
            text: "Which connectors are most commonly used by companies like us?",
            points: 5,
            feedback:
              "Engages but stays in their frame. Social proof from competitors doesn't determine your pricing.",
          },
          {
            text: "500+ connectors and competitor validation — sounds like the right platform.",
            points: 0,
            feedback:
              "Accepts social proof without scrutiny. Competitors using Fivetran doesn't mean you're getting a competitive price.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "I'd recommend our Enterprise plan for priority support and transformations. It's what high-growth companies need.",
        options: [
          {
            text: "We're a mid-market company, not high-growth enterprise. We'd want the Standard plan with an option to upgrade, not to pay for enterprise features we won't use.",
            points: 10,
            feedback:
              "Rejects aspirational upsell. 'High-growth' is a flattering label attached to an expensive tier.",
          },
          {
            text: "What's the price difference between Standard and Enterprise?",
            points: 5,
            feedback:
              "Evaluates tiers without establishing position. You're comparing options without rejecting the premise.",
          },
          {
            text: "Enterprise support sounds like the right long-term investment.",
            points: 0,
            feedback:
              "Accepts the tier without evaluating fit. 'Long-term investment' is how you end up overpaying for years.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Fivetran Transformations powered by dbt let you run transformations inside our platform for additional value.",
        options: [
          {
            text: "We already run dbt Cloud independently. We'd want transformations excluded from pricing to avoid paying for capability we have elsewhere.",
            points: 10,
            feedback:
              "Protects against double-paying. Never pay twice for the same capability.",
          },
          {
            text: "How does in-platform dbt compare to running it ourselves?",
            points: 5,
            feedback:
              "Evaluates but opens the upsell. If you already have dbt, there's no comparison needed.",
          },
          {
            text: "In-platform transformations would simplify our stack.",
            points: 0,
            feedback:
              "Embraces an add-on you already have. Stack simplification is a great sales pitch — check if you actually need it.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "End of quarter is in 2 weeks. I can hold this proposal pricing until then.",
        options: [
          {
            text: "We're also evaluating Airbyte and Census for this use case. If Fivetran wants to compete, send your best offer by end of this week — not next.",
            points: 10,
            feedback:
              "Names alternatives and accelerates on your terms. You've flipped the urgency — now they're on your timeline.",
          },
          {
            text: "We'll try to move by end of quarter.",
            points: 5,
            feedback:
              "Accommodates their deadline. You've accepted their timeline without using your leverage.",
          },
          {
            text: "End of quarter works for us — let's finalize.",
            points: 0,
            feedback:
              "Accepts their urgency framing completely. You had leverage — you just gave it back.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "For a 2-year commitment, I can offer 15% off and 20% more MAR included at no extra cost.",
        options: [
          {
            text: "15% off and extra MARs sounds better than it is if costs balloon in year 2. We'd want a hard cost cap, overage credits, and the right to renegotiate if actual MAR use exceeds 150% of forecast.",
            points: 10,
            feedback:
              "Converts the deal into a protected MAR structure. Extra MARs are worthless without an overage safety net.",
          },
          {
            text: "Can we get 20% off on the 2-year term?",
            points: 5,
            feedback:
              "Pushes the discount but ignores the MAR risk. A better discount on a bad structure is still a bad deal.",
          },
          {
            text: "15% off plus more MARs is a good deal — let's sign.",
            points: 0,
            feedback:
              "Accepts without protecting against overage risk. Year 2 MAR overages could eliminate the 15% savings entirely.",
          },
        ],
      },
    ],
  },
  {
    id: "docusign",
    name: "DocuSign",
    difficulty: "hard",
    playbookUrl: "https://www.tropicapp.io/playbooks/docusign",
    tagline: "Envelope overages will cost you — negotiate buckets carefully.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "DocuSign is priced on annual envelopes. Based on your team size, I'd recommend starting at 5,000 envelopes per year.",
        options: [
          {
            text: "We need to audit our actual envelope usage before agreeing to a tier. Can you share data from our trial account to right-size this?",
            points: 10,
            feedback:
              "Anchors on data before committing to a volume. Never accept a recommended envelope tier without your own usage data.",
          },
          {
            text: "What happens if we go over 5,000 envelopes?",
            points: 5,
            feedback:
              "Good risk question, but accepts the recommendation. Overage rates matter, but so does whether 5,000 is right.",
          },
          {
            text: "5,000 envelopes sounds right — what's the annual cost?",
            points: 0,
            feedback:
              "Accepts their recommendation without validation. If you're wrong, you'll pay overage rates for excess or waste money on unused envelopes.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Our Business Pro plan adds payment collection, signer attachments, and comments. It's our most popular plan.",
        options: [
          {
            text: "Popularity doesn't mean fit. We only need basic eSignature. We'd want Standard plan pricing — can you give us that?",
            points: 10,
            feedback:
              "Pushes back on 'most popular' framing, stays scoped. Most popular means most revenue for them — not most appropriate for you.",
          },
          {
            text: "What's the price difference between Standard and Business Pro?",
            points: 5,
            feedback:
              "Compares tiers but doesn't establish position. You're evaluating options you may not need.",
          },
          {
            text: "Business Pro does sound more complete.",
            points: 0,
            feedback:
              "Walks into the upsell. 'More complete' costs more — don't pay for completeness you won't use.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Our CLM (contract lifecycle management) platform integrates with DocuSign eSignature — I'd recommend evaluating it while we're talking.",
        options: [
          {
            text: "We're not evaluating CLM today — that's a separate initiative on a different timeline. Let's focus on eSignature pricing.",
            points: 10,
            feedback:
              "Scope control — keeps the meeting on track. CLM is a 6-figure decision that deserves its own process.",
          },
          {
            text: "What does the CLM integration look like?",
            points: 5,
            feedback:
              "Engages a new sales cycle. You're now in two conversations instead of one.",
          },
          {
            text: "CLM would actually be useful for our legal team.",
            points: 0,
            feedback:
              "Opens a new, high-value sale. You've handed them a second deal at the worst possible time.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "A 3-year commitment protects you from future price increases, which are expected in our enterprise tier.",
        options: [
          {
            text: "We'll sign 1 year, and we want a contractual right of first refusal at current pricing for year 2. We won't commit 3 years before validating actual envelope usage.",
            points: 10,
            feedback:
              "Protects optionality without multi-year risk. One year of real usage data is worth more than the multi-year 'protection.'",
          },
          {
            text: "What's the price difference for 3 vs 1 year?",
            points: 5,
            feedback:
              "Evaluates without committing a position. Good information to have, but you've opened the door.",
          },
          {
            text: "3-year price protection sounds smart.",
            points: 0,
            feedback:
              "Commits long-term without usage data. You might be locking in the wrong envelope tier for 3 years.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Salesforce + DocuSign integration is used by 80% of our enterprise customers. Are you on Salesforce?",
        options: [
          {
            text: "Salesforce integration is table stakes — it shouldn't add to the cost. We'd want that included without a connector surcharge.",
            points: 10,
            feedback:
              "Prevents the integration from becoming a billable add-on. Integrations with major CRMs should be standard, not billable.",
          },
          {
            text: "What does the Salesforce integration require technically?",
            points: 5,
            feedback:
              "Evaluates but entertains a separate cost. Technical requirements are useful but don't address pricing.",
          },
          {
            text: "We are on Salesforce — a native integration would be great.",
            points: 0,
            feedback:
              "Opens the door to an integration upsell. Enthusiasm about integrations tends to cost money.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage: "I can do 10% off if we sign by Friday.",
        options: [
          {
            text: "10% off a list price that's already inflated doesn't move the needle. We've benchmarked similar deals at 25% off with rollover envelopes. That's where we need to be to close.",
            points: 10,
            feedback:
              "Anchors with market data and adds envelope rollover demand. 25% off plus rollover is a real DocuSign deal — 10% is theater.",
          },
          {
            text: "Can we get to 15%?",
            points: 5,
            feedback:
              "Negotiates but anchors too low. 15% is better but still below what comparable deals get.",
          },
          {
            text: "10% off by Friday — let's do it.",
            points: 0,
            feedback:
              "Accepts first offer with manufactured urgency. You paid list + 10%, which is still a bad DocuSign deal.",
          },
        ],
      },
    ],
  },
  {
    id: "clari",
    name: "Clari",
    difficulty: "hard",
    playbookUrl: "https://www.tropicapp.io/playbooks/clari",
    tagline: "They'll sell the AI dream — get ROI commitments in writing.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Clari's Revenue Platform gives you forecast accuracy, pipeline inspection, and conversation intelligence in one place.",
        options: [
          {
            text: "We're specifically evaluating forecast accuracy for our CRO. Can you price the forecasting module standalone before we discuss the full platform?",
            points: 10,
            feedback:
              "Scopes to the specific need, avoids platform buy-in. Don't let platform bundling hide per-feature pricing.",
          },
          {
            text: "What does the full platform include?",
            points: 5,
            feedback:
              "Gets details but stays in their frame. You're learning about a broader scope than you defined.",
          },
          {
            text: "A unified revenue platform sounds like exactly what we need.",
            points: 0,
            feedback:
              "Enthusiastically accepts the platform pitch. You've validated the full bundle before seeing any pricing.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Our AI-powered forecast accuracy has been shown to reduce forecast error by 30% on average.",
        options: [
          {
            text: "Average benchmarks aren't our benchmark. We'd want a 90-day pilot with measurable accuracy goals tied to our specific sales data before we commit to annual pricing.",
            points: 10,
            feedback:
              "Demands validated, company-specific proof. Averages hide variance — get a pilot with your actual data.",
          },
          {
            text: "Can you share case studies for companies our size?",
            points: 5,
            feedback:
              "Asks for evidence but accepts the claim. Case studies are better than averages — but still not your data.",
          },
          {
            text: "30% improvement in forecast accuracy would be a game-changer for our CRO.",
            points: 0,
            feedback:
              "Accepts vendor statistics at face value. Every vendor's AI reduces forecast error by 30% — in their own case studies.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Clari Copilot adds AI conversation intelligence — call recording, coaching, and deal risk alerts. Most customers bundle it.",
        options: [
          {
            text: "We already have Gong for conversation intelligence. Adding Clari Copilot would create overlap and increase cost. We're not interested in bundling.",
            points: 10,
            feedback:
              "Invokes existing tool, blocks the bundle. Never pay twice for the same capability — use your existing tool as leverage.",
          },
          {
            text: "How does Clari Copilot compare to Gong?",
            points: 5,
            feedback:
              "Evaluates but opens a replacement conversation. Comparing them implies you might switch — which could be costly.",
          },
          {
            text: "AI coaching and deal risk alerts sound very useful.",
            points: 0,
            feedback:
              "Entertains redundant tooling. You're about to pay for Gong and Clari Copilot simultaneously.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Pricing is based on seats — primarily for your CRO, VPs, and front-line managers. It's a relatively small user count.",
        options: [
          {
            text: "Small user count with high per-seat pricing is still an expensive commitment. We'd want per-seat costs capped as we add managers and a free tier for read-only executive users.",
            points: 10,
            feedback:
              "Prevents seat creep and adds executive access. 'Small' user count at $X00/seat adds up fast.",
          },
          {
            text: "What's the per-seat cost for different roles?",
            points: 5,
            feedback:
              "Evaluates but no position. Good information, but you haven't pushed back on the model.",
          },
          {
            text: "If it's just for leadership, the seat count is small anyway.",
            points: 0,
            feedback:
              "Accepts the framing that small count = acceptable cost. Small count, high price = same problem.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Our implementation team gets you live in 30 days — it's included in your first year.",
        options: [
          {
            text: "If implementation is included, we want that cost transparently broken out and applied to year 2 pricing when it renews. Don't absorb it into a higher base price.",
            points: 10,
            feedback:
              "Prevents implementation costs from being baked into renewal pricing. 'Included' in year 1 often means 'baked in' forever.",
          },
          {
            text: "What does 30-day implementation include?",
            points: 5,
            feedback:
              "Evaluates without protecting future pricing. Scope is useful but the real risk is year 2 price inflation.",
          },
          {
            text: "30-day implementation included is a great deal.",
            points: 0,
            feedback:
              "Accepts without understanding the pricing implication. 'Included' services get absorbed into base price at renewal.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "We're at end of quarter. If you sign this week, I can offer 20% off and a dedicated executive sponsor.",
        options: [
          {
            text: "20% off is a start, but we'd need 30% to sign this week. The executive sponsor is a nice gesture — but we'd rather have a guaranteed SLA for forecast model accuracy.",
            points: 10,
            feedback:
              "Pushes the discount and trades a soft perk for a contractual commitment. Convert soft perks into hard SLAs whenever possible.",
          },
          {
            text: "Can you get to 25%?",
            points: 5,
            feedback:
              "Pushes but undershoots. 25% is better, but you haven't addressed the soft perk issue.",
          },
          {
            text: "20% off with an exec sponsor — that's a compelling offer.",
            points: 0,
            feedback:
              "Accepts the first offer plus a low-value add-on. Executive sponsors cost Clari nothing and deliver uncertain value.",
          },
        ],
      },
    ],
  },
  {
    id: "asana",
    name: "Asana",
    difficulty: "medium",
    playbookUrl: "https://www.tropicapp.io/playbooks/asana",
    tagline: "Seat creep is real — define users and guests upfront.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Asana is priced per seat. Full members get full access; guests can view projects for free. Most teams grow into 2-3x their initial seat count.",
        options: [
          {
            text: "We want to lock in pricing on a per-seat basis now with a defined guest user policy. If seat count grows, we need guaranteed pricing tiers, not market rate.",
            points: 10,
            feedback:
              "Anchors future seat growth in the contract. 2-3x growth at market rate could triple your bill.",
          },
          {
            text: "How are guests vs. members counted?",
            points: 5,
            feedback:
              "Good clarifying question, no position. Definitions matter, but so does what happens when you scale.",
          },
          {
            text: "Guests being free is a nice feature — what's the seat pricing?",
            points: 0,
            feedback:
              "Moves to price without addressing growth risk. In 18 months you'll be renegotiating from zero leverage.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Asana Intelligence adds AI-powered task creation, goal summarization, and workflow automation. It's an add-on per seat.",
        options: [
          {
            text: "AI features at an additional per-seat charge will be a budget issue for us. We'd expect AI functionality to be included in any enterprise tier we sign.",
            points: 10,
            feedback:
              "Refuses to pay separately for AI. AI features are rapidly commoditizing — push back on the add-on model.",
          },
          {
            text: "What's the cost of the AI add-on per seat?",
            points: 5,
            feedback:
              "Evaluates but doesn't challenge the model. You're pricing a fee you should be refusing.",
          },
          {
            text: "AI-powered workflow automation would be really useful.",
            points: 0,
            feedback:
              "Enthusiastically accepts the add-on. Your enthusiasm just validated a per-seat AI charge.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Our Business plan includes portfolios and workload management — critical for ops teams.",
        options: [
          {
            text: "We're in PMO and marketing, not ops. We'd like to understand what Premium covers vs. Business so we only pay for what we'll actually use.",
            points: 10,
            feedback:
              "Scopes to actual use case, questions tier jump. Their 'critical for ops' framing doesn't apply to your team.",
          },
          {
            text: "What does Business add over Premium?",
            points: 5,
            feedback:
              "Evaluates, no position. You're comparing tiers without establishing whether you need the upgrade.",
          },
          {
            text: "Portfolios and workload management sound like useful features.",
            points: 0,
            feedback:
              "Accepts business use case as your own. Features sound useful until you see the price difference.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Committing to 2 years locks in pricing and comes with a dedicated CSM.",
        options: [
          {
            text: "1-year first, with a contractual option to renew at current rates. We'd want the dedicated CSM regardless of term length — it shouldn't be a 2-year-only perk.",
            points: 10,
            feedback:
              "Decouples the CSM from the term length. CSM access shouldn't be a ransom for a longer term.",
          },
          {
            text: "What does the dedicated CSM do for us?",
            points: 5,
            feedback:
              "Evaluates the perk, no position. The CSM is their tool to make 2 years seem appealing.",
          },
          {
            text: "2 years with a dedicated CSM sounds worth it.",
            points: 0,
            feedback:
              "Commits to term for a soft add-on. CSMs can leave, get reassigned, or provide minimal value.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Asana integrates with 200+ tools including Slack, Jira, and Salesforce. No extra cost.",
        options: [
          {
            text: "We need the Slack and Salesforce integrations specifically — can you confirm both are included at no additional charge and will remain so at renewal?",
            points: 10,
            feedback:
              "Gets contractual confirmation on integrations. 'No extra cost today' doesn't mean 'no extra cost at renewal.'",
          },
          {
            text: "Are all integrations truly free?",
            points: 5,
            feedback:
              "Checks but doesn't anchor in the contract. Free now doesn't guarantee free later.",
          },
          {
            text: "200+ integrations is a great selling point.",
            points: 0,
            feedback:
              "Takes a sales point at face value. Integration count is a vanity metric — lock in the ones you need.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "I can do 15% off if we lock in 50 seats on an annual plan by end of month.",
        options: [
          {
            text: "We're at 35 seats. We'd sign 35 at 20% off with a pre-agreed step-up price when we add seats, rather than committing to 15 phantom seats.",
            points: 10,
            feedback:
              "Right-sizes seats, improves discount, gets future pricing. Three wins in one response.",
          },
          {
            text: "Can we do 35 seats at 15%?",
            points: 5,
            feedback:
              "Right-sizes but doesn't push the discount. You fixed the seat problem but left 5% on the table.",
          },
          {
            text: "50 seats at 15% off — let's do it.",
            points: 0,
            feedback:
              "Over-commits on seat count. 15 phantom seats at Asana pricing adds up fast.",
          },
        ],
      },
    ],
  },
  {
    id: "adobe",
    name: "Adobe",
    difficulty: "easy",
    playbookUrl: "https://www.tropicapp.io/playbooks/adobe",
    tagline: "Bundling is their playbook — Creative Cloud doesn't mean every seat needs every app.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "Adobe Creative Cloud for Teams gives everyone access to all 20+ apps. It's our most popular offering.",
        options: [
          {
            text: "We only need Photoshop and Acrobat for 15 people, and Premiere for 3. Can you price individual app licenses rather than the full Creative Cloud bundle?",
            points: 10,
            feedback:
              "Deconstructs the bundle to actual need. Most teams need 2-3 apps — don't pay for 20+.",
          },
          {
            text: "What apps are included in Creative Cloud for Teams?",
            points: 5,
            feedback:
              "Inventories the bundle but doesn't push back. You're learning what's included rather than what you need.",
          },
          {
            text: "All 20+ apps for the whole team sounds comprehensive.",
            points: 0,
            feedback:
              "Accepts a bundle that includes much you don't need. Comprehensive ≠ cost-effective.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Adobe Stock is $30/asset but comes bundled at a big discount with Creative Cloud Enterprise.",
        options: [
          {
            text: "We use Getty Images for stock already. We're not interested in Adobe Stock. Please remove it from the proposal and reduce pricing accordingly.",
            points: 10,
            feedback:
              "Cleanly rejects a redundant add-on. Never pay for a second stock library when you have one that works.",
          },
          {
            text: "How many stock assets would be included?",
            points: 5,
            feedback:
              "Evaluates but entertains the add-on. Asset counts are irrelevant if you already have Getty.",
          },
          {
            text: "Adobe Stock bundled in is useful for marketing.",
            points: 0,
            feedback:
              "Accepts a redundant service. Now you're paying for Getty and Adobe Stock.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Acrobat Sign is included in the Enterprise tier — useful for contracts and HR workflows.",
        options: [
          {
            text: "We use DocuSign for eSignature. We don't need Acrobat Sign. We'd want it excluded from scope and priced out of our contract.",
            points: 10,
            feedback:
              "Prevents paying for a tool you've already standardized. Every redundant tool is a budget drain and a security surface.",
          },
          {
            text: "How does Acrobat Sign compare to DocuSign?",
            points: 5,
            feedback:
              "Opens a replacement conversation you don't need. You have DocuSign — stick with it.",
          },
          {
            text: "Having Acrobat Sign as an option could be useful.",
            points: 0,
            feedback:
              "Keeps a redundant tool in scope. 'As an option' still shows up on the invoice.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Adobe offers a 3-year VIP enterprise agreement with the best discounts.",
        options: [
          {
            text: "We'd consider 3 years only if Adobe's pricing is competitive on a per-app basis and includes a price-lock guarantee and right to reduce licenses at each annual renewal.",
            points: 10,
            feedback:
              "Conditions the long-term on flexibility terms. 3-year Adobe agreements without reduction rights are a trap.",
          },
          {
            text: "What's the discount for 3 years vs. 1 year?",
            points: 5,
            feedback:
              "Evaluates without a position. You're comparing options without setting terms.",
          },
          {
            text: "3-year enterprise agreements offer the best value — that sounds right for us.",
            points: 0,
            feedback:
              "Commits to 3 years without flexibility terms. Headcount changes in year 2 could leave you paying for unused licenses.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Adobe Learning & Development resources can accelerate your team's creative output — bundled for free in Enterprise.",
        options: [
          {
            text: "We don't need Adobe L&D. Please remove it from scope and apply that value to a lower seat rate instead.",
            points: 10,
            feedback:
              "Refuses bundled services, converts to pricing. 'Free' L&D has a cost — it's in your seat rate.",
          },
          {
            text: "What does the L&D package include?",
            points: 5,
            feedback:
              "Evaluates but entertains the add-on. If you don't need training, don't learn about it — negotiate it away.",
          },
          {
            text: "Free L&D resources would be great for our design team.",
            points: 0,
            feedback:
              "Accepts a low-value add-on enthusiastically. That 'free' L&D is priced into your contract.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "I can offer 18% off if we sign before the fiscal quarter ends.",
        options: [
          {
            text: "We've seen Adobe Creative Cloud discounts up to 30% for comparable seat counts. 18% isn't competitive. We'd need 25%+ to move before quarter end.",
            points: 10,
            feedback:
              "Anchors with market benchmark, mirrors urgency. 30% off is achievable at Adobe for any meaningful seat count.",
          },
          {
            text: "Can we get to 22%?",
            points: 5,
            feedback:
              "Negotiates but undershoots. 22% is better but still below the 25-30% range that's achievable.",
          },
          {
            text: "18% is a solid discount — let's finalize.",
            points: 0,
            feedback:
              "Accepts first offer. 18% sounds good until you see what comparable deals close at.",
          },
        ],
      },
    ],
  },
  {
    id: "1password",
    name: "1Password",
    difficulty: "medium",
    playbookUrl: "https://www.tropicapp.io/playbooks/1password",
    tagline: "Families plans and guest users are cost traps — define them upfront.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "1Password Business is priced per user per month. Every team member gets a personal Families account included — that's usually a big selling point.",
        options: [
          {
            text: "We'd prefer a lower per-user rate without the Families accounts — not all employees want or need them, and we shouldn't pay for unused entitlements.",
            points: 10,
            feedback:
              "Declines the bundled consumer product. Families accounts inflate price — strip them for a lower base rate.",
          },
          {
            text: "How much does the Families account add to the per-user cost?",
            points: 5,
            feedback:
              "Questions it but stays in their frame. Good to know the cost — better to negotiate it away.",
          },
          {
            text: "Families accounts included is a nice perk for employees.",
            points: 0,
            feedback:
              "Accepts a bundled add-on that inflates price. Nice perk, but you're paying for it in every invoice.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "1Password Extended Access Management gives you visibility into all the apps employees use — shadow IT detection.",
        options: [
          {
            text: "We're evaluating EAM as a separate category. We'd want 1Password core password management priced independently first.",
            points: 10,
            feedback:
              "Keeps scope focused. EAM is a different product category — evaluate it separately on its merits.",
          },
          {
            text: "What does Extended Access Management include?",
            points: 5,
            feedback:
              "Curious but opens a new sales conversation. You've given them a second pitch while the first isn't done.",
          },
          {
            text: "Shadow IT detection would be useful for our IT team.",
            points: 0,
            feedback:
              "Expands scope mid-negotiation. Shadow IT detection is a legitimate need — don't conflate it with your current negotiation.",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "We offer a Business Starter tier, Business, and Enterprise. Most companies your size are on Business.",
        options: [
          {
            text: "What are the specific feature differences between Business and Enterprise for a 150-person company? We'd want to validate that Business covers our security requirements before committing to a tier.",
            points: 10,
            feedback:
              "Demands specific comparison rather than accepting a recommendation. 'Most companies your size' is a sales heuristic, not a fit analysis.",
          },
          {
            text: "What does Enterprise add over Business?",
            points: 5,
            feedback:
              "Evaluates tiers but no position. Good question, but you've opened the Enterprise door without cause.",
          },
          {
            text: "If most companies our size use Business, that's probably right for us.",
            points: 0,
            feedback:
              "Accepts a recommendation based on social proof. 'Most companies' is a sales tactic, not a needs assessment.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "Multi-year deals get you the best pricing. I can hold this rate for 2 years.",
        options: [
          {
            text: "We'd do 2 years with a price freeze and a right to reduce license count by 10% in year 2 without penalty — especially as we might adjust headcount.",
            points: 10,
            feedback:
              "Conditions multi-year on pricing protection and downscale flexibility. Headcount changes are real — protect against paying for departed employees.",
          },
          {
            text: "What's the savings on 2 vs 1 year?",
            points: 5,
            feedback:
              "Evaluates without position. Price information is useful but you've opened the multi-year door.",
          },
          {
            text: "2-year pricing stability sounds smart.",
            points: 0,
            feedback:
              "Commits without protections. Stability is nice until you need to reduce headcount.",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "We recently added Insights — a reporting dashboard for security admins. It's included in Enterprise.",
        options: [
          {
            text: "We're on Business tier. If Insights is an Enterprise feature, we'd want it included as part of our deal given our seat count, not as a reason to upgrade.",
            points: 10,
            feedback:
              "Converts a tier-gate feature into a concession. At 150 seats, you have enough leverage to get Enterprise features at Business pricing.",
          },
          {
            text: "Is Insights available on Business?",
            points: 5,
            feedback:
              "Asks the right question, no leverage applied. You know the answer — now use it.",
          },
          {
            text: "Security reporting dashboards would be useful for our admin.",
            points: 0,
            feedback:
              "Entertains the upgrade. Usefulness doesn't justify an upgrade — negotiate the feature down.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage: "I can offer 10% off for an annual commitment today.",
        options: [
          {
            text: "10% is below market for password management at our scale. We'd expect 20% minimum. We're also evaluating Dashlane and Bitwarden — would appreciate a competitive offer by end of week.",
            points: 10,
            feedback:
              "Names competitors, sets deadline, anchors at 20%. Bitwarden and Dashlane are credible alternatives — use them.",
          },
          {
            text: "Can we get to 15%?",
            points: 5,
            feedback:
              "Negotiates but undershoots. 15% is better but below the 20% that's achievable.",
          },
          {
            text: "10% off for annual sounds fair.",
            points: 0,
            feedback:
              "Accepts first offer. 10% is their opening move, not their best.",
          },
        ],
      },
    ],
  },
  {
    id: "15five",
    name: "15Five",
    difficulty: "hard",
    playbookUrl: "https://www.tropicapp.io/playbooks/15five",
    tagline: "Performance management upsells are their specialty — control the scope.",
    turns: [
      {
        turnNumber: 1,
        repMessage:
          "15Five is a complete performance management platform — OKRs, 1-on-1s, engagement surveys, and performance reviews all in one.",
        options: [
          {
            text: "We're specifically looking for a continuous feedback and check-in tool. We'd want the Engage module priced standalone before evaluating the full suite.",
            points: 10,
            feedback:
              "Scopes to specific need. The full platform sounds great — but you're buying one module, not four.",
          },
          {
            text: "What does the full platform include?",
            points: 5,
            feedback:
              "Evaluates but stays in their frame. You're learning about scope you may not need.",
          },
          {
            text: "An all-in-one performance platform sounds ideal.",
            points: 0,
            feedback:
              "Accepts the full platform pitch. You've validated scope you didn't come in for.",
          },
        ],
      },
      {
        turnNumber: 2,
        repMessage:
          "Our Transform module includes manager coaching tools and 360 reviews — critical for your HR strategy.",
        options: [
          {
            text: "We do 360 reviews annually in a separate tool. We'd want Transform excluded from scope and not priced in.",
            points: 10,
            feedback:
              "Blocks a redundant add-on. If you have a 360 tool, don't pay twice.",
          },
          {
            text: "How does Transform compare to standalone 360 tools?",
            points: 5,
            feedback:
              "Opens a replacement conversation. You're now evaluating switching costs instead of just saying no.",
          },
          {
            text: "360 reviews inside 15Five would simplify our process.",
            points: 0,
            feedback:
              "Embraces the add-on. Simplification has a per-employee price — is it worth it?",
          },
        ],
      },
      {
        turnNumber: 3,
        repMessage:
          "Most customers use all three modules — Engage, Perform, and Transform. It's where you get the most ROI.",
        options: [
          {
            text: "We've seen 'most customers' claims before. We'd want a 90-day pilot on Engage before committing to any additional modules.",
            points: 10,
            feedback:
              "Challenges social proof and gates expansion. Pilot first, expand later — on your terms.",
          },
          {
            text: "Can you share data on adoption rates by module?",
            points: 5,
            feedback:
              "Asks for evidence but entertains the claim. Data is better than an anecdote but still not your proof.",
          },
          {
            text: "If most customers use all three, maybe we should too.",
            points: 0,
            feedback:
              "Accepts the social proof argument. Most customers also pay more than they need to.",
          },
        ],
      },
      {
        turnNumber: 4,
        repMessage:
          "15Five is priced per employee, not per manager. That makes it different from competitive pricing models.",
        options: [
          {
            text: "Per-employee pricing at scale gets expensive quickly. We'd want a tiered rate that steps down at 250 and 500 employees, with a committed rate for growth above our current count.",
            points: 10,
            feedback:
              "Anticipates scale cost and demands tiering. Per-employee pricing without tiers penalizes growth.",
          },
          {
            text: "What's the per-employee rate?",
            points: 5,
            feedback:
              "Gets the number, no position. Useful information but no leverage applied.",
          },
          {
            text: "Per-employee pricing sounds more fair than per-manager.",
            points: 0,
            feedback:
              "Accepts the pricing model without scrutiny. 'More fair' isn't the same as 'right for your budget.'",
          },
        ],
      },
      {
        turnNumber: 5,
        repMessage:
          "Our customer success team assigns a dedicated HR consultant to help you build your performance program. Included in the first year.",
        options: [
          {
            text: "We have an internal HR team that will own the program. We'd rather have the consultant value reflected in a lower per-employee rate than as a bundled service in year one.",
            points: 10,
            feedback:
              "Converts bundled service to hard savings. A consultant you won't use is money you could have saved.",
          },
          {
            text: "What does the HR consultant involvement look like?",
            points: 5,
            feedback:
              "Evaluates but doesn't redirect. Understanding scope is good, but converting it is better.",
          },
          {
            text: "A dedicated HR consultant to help us build the program is really valuable.",
            points: 0,
            feedback:
              "Accepts the soft add-on enthusiastically. They'll bill that consultant cost into your year 2 renewal.",
          },
        ],
      },
      {
        turnNumber: 6,
        repMessage:
          "To finalize, I can offer 15% off on an annual plan for 200 employees.",
        options: [
          {
            text: "We're at 175 employees. We won't pre-buy 25 seats. We'd sign at 175 employees, 20% off, with a pre-negotiated rate for seats 176–250 already written into the contract.",
            points: 10,
            feedback:
              "Right-sizes, improves discount, locks in growth pricing. Three wins in one move.",
          },
          {
            text: "Can we do 175 seats at 15%?",
            points: 5,
            feedback:
              "Right-sizes but doesn't improve the discount. You fixed one problem and left another.",
          },
          {
            text: "200 employees at 15% — that works for us.",
            points: 0,
            feedback:
              "Over-commits on headcount. You'll pay for 25 phantom employees until you hit 200.",
          },
        ],
      },
    ],
  },
];

export function getVendorById(id: string): Vendor | undefined {
  return vendors.find((v) => v.id === id);
}
