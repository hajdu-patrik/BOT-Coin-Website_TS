import Router from "next/router";
import React from "react";
import Image from "next/image";

export default function FourOhFour() {
  const [timer, setTimer] = React.useState<number>(5);

  //Countdown
  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  //Move to the main page
  React.useEffect(() => {
    setTimeout(() => {
      Router.back();
    }, 5000);
  }, []);

  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center">
      <Image
        src="/images/404.png"
        width={700}
        height={500}
        alt="404"
        draggable="false"
        className="select-none"
      />
      <p className=" mirrortext | sm:tex-[1.6em] select-none text-[4vw] md:text-[1.8em] lg:text-[2em] xl:text-[2.2em] 2xl:text-[2.4em]">
        Automatically redirected in{" "}
        <span className="timer font-hs font-semibold ">{timer}</span> seconds
        <span className="font-hs font-semibold ">...</span>
      </p>
    </div>
  );
}
