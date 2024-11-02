import "./index.css";
export const metadata = {
  title: "Botcoinada",
};
export default function RootLayout({
  children,
}: // title,
{
  children: React.ReactNode;
  title?: string;
}) {
  // const pageTitle = title ? metadata.title : `${title} | ${metadata.title}`;
  //const pageTitle = title ? `${title} | ${metadata.title}` : metadata.title;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="BOT, The most NPC community on Cardano; are you dumb & rich? o_o"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="revisit-after" content="1 Weeks" />
        <meta name="author" content="Cnftmart - Hajud10#1779" />
        <meta httpEquiv="Content-Type" content="text/html" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="EN" />
        <link rel="shortcut icon" href="/images/pfp.png" type="image/x-icon" />
        <title>Botcoinada {/*{pageTitle}*/}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
