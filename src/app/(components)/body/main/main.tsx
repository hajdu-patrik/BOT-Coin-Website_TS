import Image from "next/image";
import Link from "next/link";

const Main: React.FC = () => {
  return (
    <article className="flex flex-col items-center justify-around">
      <Link href={"/memegenerator"}>
        {/* This goes to the meme generator */}
        <h1 className="relative z-10 cursor-pointer pt-8 text-center text-[1.2em] sm:-text-[1.3em] md:text-[1.4em] lg:text-[1.6em] xl:text-[1.8em] 2xl:text-[2em]">
          Meme Generator
        </h1>
      </Link>
      <Image
        src="/images/bot.gif"
        width={500}
        height={500}
        draggable={false}
        priority={true}
        alt="BOT.gif"
        className="mt-[-2em] select-none object-contain opacity-30"
      />
      <div className="relative mt-[-2em] flex flex-col justify-evenly md:flex-row md:px-[2em]">
        <p className="max-w-[50vh] select-none self-center px-2 pb-[2em] pt-[1em] text-justify text-[1.2em] md:self-start md:px-0 md:pb-[0em] md:text-[1.3em] lg:text-[1.4em] xl:text-[1.5em] 2xl:text-[1.6em]">
          Be a part of this wonderful BOT society, our goal is to show that it
          is indeed good to live as an NPC, because it can be done richly...
        </p>
        <div>
          <Image
            src="/images/days.png"
            width={250}
            height={250}
            draggable={false}
            alt="Days"
            className="absolute left-[-1.2em] top-[20em] select-none object-contain sm:left-0 md:top-[12em]"
          />
          <Image
            src="/images/days.png"
            width={250}
            height={250}
            draggable={false}
            alt="Days"
            className="mirror | absolute right-[25%] top-[12em] hidden select-none object-contain md:block"
          />
        </div>
        <Image
          src="/images/belike.png"
          width={400}
          height={400}
          draggable={false}
          alt="Be Like a BOT"
          className="relative select-none object-contain"
        />
      </div>
    </article>
  );
};

export default Main;
