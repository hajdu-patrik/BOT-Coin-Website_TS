import Botenomicsmodal from "./botenomicsmodal";
import { botenomicsollection } from "./botnemoicscollection";
import React from "react";
const Botenomics: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetHeight = getWindowHeight() * 0.8;
      const windowHeight = getWindowHeight();
      const isScrollWithinRange =
        scrollPosition >= targetHeight &&
        scrollPosition <= targetHeight + windowHeight + 200;
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
      const targetHeight = getWindowHeight() * 0.8;
      setIsVisible(window.scrollY >= targetHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      id="botenomics"
      className=" scroll-mt-[3.8rem] md:scroll-mt-[4rem]"
    >
      <div className="my-[2em] flex flex-col text-center">
        <h2 className="select-none pb-[2.75em] text-[1.8em] md:text-[2.2em] lg:text-[2.5em] xl:text-[2.7em] 2xl:text-[3em]">
          Botenomics
        </h2>
        <div className="flex flex-col items-center justify-evenly lg:flex-row">
          <div className="mb-[4em] text-[1.8em] md:mb-[5vw] md:pb-[5em] md:text-[2.2em] lg:pb-0 lg:text-[2.5em] xl:text-[2.7em] 2xl:text-[3em]">
            {botenomicsollection.map((item, index) => (
              <div
                className={`slide-in grid grid-flow-col gap-[2.6em] sm:gap-[5em] ${
                  isVisible ? "visible" : ""
                }`}
                key={index}
              >
                <div className={`text-left ${item.lclassNames}`}>
                  {item.left}
                </div>
                <div className={`text-right ${item.rclassNames}`}>
                  <span className={`${item.spanClass}`}>{item.span}</span>
                  {item.right}
                </div>
              </div>
            ))}
          </div>
          <Botenomicsmodal />
        </div>
      </div>
    </section>
  );
};

export default Botenomics;