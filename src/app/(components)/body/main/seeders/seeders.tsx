import Image from "next/image";
import {
  seederscsollection,
  seederscsollection1,
  seederscsollectionwimages,
  botimages,
} from "./seederscollection";
import React from "react";

const Seeders: React.FC = () => {
  const [open, setOpen] = React.useState<number>(1);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section id="ogholders" className="scroll-mt-[10rem] md:scroll-mt-[5rem]">
      <div className="flex select-none flex-col items-center justify-center text-center">
        <h2 className="pb-[2.8em] text-[1.8em] md:text-[2.2em] lg:text-[2.5em] xl:text-[2.7em] 2xl:text-[3em]">
          OG Holders
        </h2>
        <div className="grid grid-flow-row">
          <div className="grid grid-flow-col gap-[1em] pb-[2em] sm:gap-[2em]">
            {botimages.map((item) => (
              <a
                href="https://www.jpg.store/collection/botcoinada"
                target="_blank"
                title="JPG STORE COLLECTION"
                key={item.id}
              >
                <Image
                  src={item.src}
                  width={300}
                  height={300}
                  draggable={false}
                  alt="NFT Preview"
                  className="transition-all hover:scale-105"
                />
              </a>
            ))}
          </div>
          <div className="mt-6 grid select-none grid-flow-row place-items-center gap-[1.2em] text-center">
              {seederscsollection.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className=" px-4 w-[80vw] cursor-pointer rounded-lg border-[5px] border-black py-[0.5em] hover:font-bold md:w-[25em] text-[1em] sm:text-[1.1em] md:text-[1.3em] lg:text-[1.4em] xl:text-[1.5em] 2xl:text-[1.6em]"
                  onClick={() => handleOpen(item.id)}
                >
                  {item.head}
                </div>
                {open === item.id && (
                  <div
                    className="relative mx-2 flex h-fit w-fit cursor-pointer flex-col justify-center rounded-lg border-[5px] border-black bg-[#c2d3d2] py-4 pr-6 sm:w-[80vw] md:mx-0 md:w-[42em] md:py-[1em] md:pr-0 "
                    onClick={() => handleOpen(item.id * 0)}>
                    <ul
                      className={`${item.className} | flex h-full flex-col p-4 gap-2 justify-center text-[0.8em] sm:text-[1em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.3em] 2xl:text-[1.4em]`}
                      aria-busy={true}>
                      <div className=" flex flex-col w-full mr-[10em] leading-8">
                          <li>{item.input1}</li>
                          <li>{item.input2}</li>
                          <li>{item.input3}</li>
                          <li>{item.input4}</li>
                          <li>{item.input5}</li>
                          <li>{item.input6}</li>
                      </div>
                    </ul>
                  </div>
                )}
              </React.Fragment>
              ))}
               {seederscsollection1.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className=" px-4 w-[80vw] cursor-pointer rounded-lg border-[5px] border-black py-[0.5em] hover:font-bold md:w-[25em] text-[1em] sm:text-[1.1em] md:text-[1.3em] lg:text-[1.4em] xl:text-[1.5em] 2xl:text-[1.6em]"
                  onClick={() => handleOpen(item.id)}
                >
                  {item.head}
                </div>
                {open === item.id && (
                  <div
                    className="relative mx-2 flex h-fit w-fit cursor-pointer flex-col justify-center rounded-lg border-[5px] border-black bg-[#c2d3d2] py-4 pr-6 sm:w-[80vw] md:mx-0 md:w-[42em] md:py-[1em] md:pr-0 "
                    onClick={() => handleOpen(item.id * 0)}>
                    <ul
                      className={`${item.className} | flex h-full flex-col p-4 gap-2 justify-center text-[0.8em] sm:text-[1em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.3em] 2xl:text-[1.4em]`}
                      aria-busy={true}>
                      <div className=" flex flex-col w-full mr-[10em] leading-8">
                          <li>{item.input1}</li>
                          <li>{item.input2}</li>
                          <li>{item.input3}</li>
                      </div>
                    </ul>
                  </div>
                )}
              </React.Fragment>
              ))}
            {seederscsollectionwimages.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className="w-[80vw] cursor-pointer rounded-lg border-[5px] border-black py-[0.5em] text-[1em] hover:font-bold md:w-[25em] md:text-[1.3em] lg:text-[1.4em] xl:text-[1.5em] 2xl:text-[1.6em]"
                  onClick={() => handleOpen(item.id)}
                >
                  {item.head}
                </div>
                {open === item.id && (
                  <div
                    className="relative flex h-[52.5vw] w-[95vw] cursor-pointer flex-col justify-center rounded-lg border-[5px] border-black bg-[#c2d3d2] sm:h-[45vw] sm:w-[80vw] md:h-[20em] md:w-[42em]"
                    onClick={() => handleOpen(item.id * 0)}
                  >
                    <Image
                      src={item.src}
                      fill
                      draggable={false}
                      alt={item.alt}
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seeders;