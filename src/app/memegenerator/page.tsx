import type { Metadata } from "next";
import MemeGeneratorClient from "@/app/(components)/MemeGeneratorClient";

// Built only from this page's own heading ("Bot Meme Generator") joined with
// the site's existing tagline (see src/app/layout.tsx) - no invented copy.
const MEMEGENERATOR_DESCRIPTION =
  "Bot Meme Generator. BOT, The most NPC community on Cardano; are you dumb & rich? o_o";

export const metadata: Metadata = {
  title: "Bot Meme Generator | Botcoinada",
  description: MEMEGENERATOR_DESCRIPTION,
  alternates: {
    canonical: "/memegenerator",
  },
  openGraph: {
    type: "website",
    siteName: "Botcoinada",
    title: "Bot Meme Generator | Botcoinada",
    description: MEMEGENERATOR_DESCRIPTION,
    url: "/memegenerator",
    images: [{ url: "/images/pfp.png", width: 200, height: 200 }],
  },
  twitter: {
    card: "summary",
    title: "Bot Meme Generator | Botcoinada",
    description: MEMEGENERATOR_DESCRIPTION,
    images: ["/images/pfp.png"],
  },
};

export default function MemeGenerator() {
  return <MemeGeneratorClient />;
}
