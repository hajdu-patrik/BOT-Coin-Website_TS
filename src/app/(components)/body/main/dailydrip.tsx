import Image from "next/image";
import React from "react";

const Dailydrip: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetHeight = getWindowHeight() * 5.5;
      const isScrollWithinRange = scrollPosition >= targetHeight;
      setIsVisible(isScrollWithinRange);
    };
    const getWindowHeight = () => {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      );
    };
    const handleResize = () => {
      const targetHeight = getWindowHeight() * 5.5;
      setIsVisible(window.scrollY >= targetHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getResponsiveHeight = (baseHeight: number): string => {
    const windowHeight = window.innerHeight;
    const desiredHeight = Math.floor(windowHeight * (baseHeight / 100));
    return `${desiredHeight}px`;
  };

  const drips = [
    {
      src: "/images/hoodfront.png",
      alt: "Hoodie Front Side",
      classnames: `${
        isVisible
          ? "xl:appear xl:duration-500"
          : "xl:transition-all xl:opacity-0"
      }`,
      height: getResponsiveHeight(80),
    },
    {
      src: "/images/dance.gif",
      alt: "Dancing Image",
      classnames: "",
      height: getResponsiveHeight(80),
    },
    {
      src: "/images/hoodback.png",
      alt: "Hoodie Back Side",
      classnames: `${
        isVisible ? "xl:appear" : "xl:transition-all xl:opacity-0"
      }`,
      height: getResponsiveHeight(80),
    },
  ];

  return (
    <section id="dailydrip" className="scroll-mt-[1.8rem] md:scroll-mt-[13rem]">
      <div className="flex flex-col items-center justify-around pb-[3em] text-center">
        <h2 className="select-none pb-[3em] text-[1.8em] md:text-[2.2em] lg:text-[2.5em] xl:text-[2.7em] 2xl:text-[3em]">
          Daily Drip
        </h2>
        <div className="grid md:grid-flow-col">
          {drips.map((item, index) => (
            <React.Fragment key={index}>
              <Image
                src={item.src}
                width={500}
                height={500}
                draggable={false}
                alt={item.alt}
                className={`${item.classnames} md:-w-[500px] md:-h-[500px] h-[${item.height}] aspect-square w-[400px] object-contain`}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dailydrip;