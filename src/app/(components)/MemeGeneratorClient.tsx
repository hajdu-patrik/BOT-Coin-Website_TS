"use client";
import { Transition } from "@headlessui/react";
import React from "react";
import { MemeEditor } from "./MemeEditor";
import Link from "next/link";
import Footer from "./footer/footer";
import { Button } from "./ui/Button";

async function fetchMemeTemplates() {
  const memeTemplatesReq = await fetch(
    // A hiba javítása: relatív útvonal használata a lokális API-hoz
    "/api/meme-templates"
  );
  const memeTemplates = await memeTemplatesReq.json();
  return memeTemplates;
}

export default function MemeGeneratorClient() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [memeTemplates, setMemeTemplates] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const templates = await fetchMemeTemplates();
      setMemeTemplates(templates);
      setIsOpen(true);
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="flex select-none flex-col items-center justify-center gap-8 py-6 text-[1.2em] sm:flex-row md:gap-16 md:text-[1.4em] lg:text-[1.6em] xl:text-[1.8em] 2xl:text-[2em]">
        <h1 className="text-center">Bot Meme Generator</h1>
        <Link href="/">
          <Button variant="cta">Website</Button>
        </Link>
      </header>
      <main className="2xl:min-h-auto mx-auto min-h-screen max-w-[90%]">
        <Transition
          as="div"
          show={isOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Content to be transitioned */}
          {memeTemplates.length > 0 && <MemeEditor templates={memeTemplates} />}
        </Transition>
      </main>
      <Footer />
    </>
  );
}
