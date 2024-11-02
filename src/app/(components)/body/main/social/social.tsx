import Image from "next/image";
//import Socialmodal from "./socialmodal";

const Social: React.FC = () => {
  return (
    <>
      <div id="social" className=" scroll-mt-[2rem] ">
        <div className=" flex select-none flex-col items-center justify-center text-center ">
          <h2 className="pb-[3.5em] text-[1.8em] md:text-[2.2em] lg:text-[2.5em] xl:text-[2.7em] 2xl:text-[3em] ">
            Social
          </h2>
          <div className="flex flex-col md:flex-row  gap-[15rem] pb-[12em]">
            <a href="https://twitter.com/botcoinada" target="_blank">
              <Image
                src="/images/twitter.png"
                width={200}
                height={200}
                draggable={false}
                title="Botcoinada Twitter Profile"
                alt="Botcoinada Twitter Profile"
                className="h-[140px] w-[140px] object-contain md:h-[200px] md:w-[200px]"
              />
            </a>
            <a href="https://discord.gg/botcoin" target="_blank">
              <Image
              src="/images/discord.png"
              width={200}
              height={200}
              draggable={false}
              alt="Discord"
              className="h-[140px] w-[140px] object-contain md:h-[200px] md:w-[200px]"
              />
            </a>
            {/* <Socialmodal/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;