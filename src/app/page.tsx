import type { Metadata } from "next";
import HomeClient from "./(components)/HomeClient";

// Description reuses the hero paragraph that already appears on this page
// (see src/app/(components)/body/main/main.tsx) instead of inventing new copy.
const HOME_DESCRIPTION =
  "Be a part of this wonderful BOT society, our goal is to show that it is indeed good to live as an NPC, because it can be done richly...";

export const metadata: Metadata = {
  title: "Botcoinada",
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Botcoinada",
    title: "Botcoinada",
    description: HOME_DESCRIPTION,
    url: "/",
    images: [{ url: "/images/pfp.png", width: 200, height: 200 }],
  },
  twitter: {
    card: "summary",
    title: "Botcoinada",
    description: HOME_DESCRIPTION,
    images: ["/images/pfp.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
