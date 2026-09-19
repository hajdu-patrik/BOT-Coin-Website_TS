import type { Metadata } from "next";
import "./index.css";

const SITE_URL = "https://bot-coin.vercel.app";
const SITE_NAME = "Botcoinada";
// Existing site tagline, previously a manual <meta name="description">.
const SITE_DESCRIPTION =
  "BOT, The most NPC community on Cardano; are you dumb & rich? o_o";
// Social links already rendered on the page (see (components)/body/main/social/social.tsx).
const SOCIAL_LINKS = ["https://twitter.com/botcoinada", "https://discord.gg/botcoin"];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Cnftmart - Hajud10#1779" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    shortcut: "/images/pfp.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: "/images/pfp.png", width: 200, height: 200 }],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/pfp.png"],
  },
  other: {
    "revisit-after": "1 Weeks",
    rating: "general",
    distribution: "global",
    language: "EN",
  },
};

// Facts already present on the site: the name/description above (root <head>)
// and the social links rendered in the Social section of the home page.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/pfp.png`,
    sameAs: SOCIAL_LINKS,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap"
          rel="stylesheet"
        />
        {/* The intro splash intentionally shows for a few seconds before the
            real content mounts (see HomeClient) - preload what that content
            needs so it isn't ALSO stuck behind a fresh network fetch once it
            finally renders. */}
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/fonts/wp.ttf"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="image" href="/images/bot.gif" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
