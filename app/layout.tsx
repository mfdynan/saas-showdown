import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Showdown — Out-negotiate the sales rep",
  description:
    "An interactive negotiation training game for procurement and finance professionals. Pick a SaaS vendor and battle the sales rep, turn by turn.",
  openGraph: {
    title: "SaaS Showdown — Out-negotiate the sales rep",
    description:
      "An interactive negotiation training game for procurement and finance professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 py-4 px-4 text-center">
            <p className="text-xs text-white/40 font-mono-body">
              Built by{" "}
              <a
                href="https://www.tropicapp.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cee12f] hover:underline"
              >
                Tropic
              </a>{" "}
              — the smarter way to buy SaaS.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
