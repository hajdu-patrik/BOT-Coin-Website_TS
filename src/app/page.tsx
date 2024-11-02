"use client";
import React from "react";
import Processing from "./(components)/processing";
import MobileHeader from "./(components)/head/mobile/mobilheader";
import Header from "./(components)/head/header";
import Line from "./(components)/line/line";
import Botenomics from "./(components)/body/main/botenomics/botenomics";
import Seeders from "./(components)/body/main/seeders/seeders";
import Dailydrip from "./(components)/body/main/dailydrip";
import Social from "./(components)/body/main/social/social";
import Popup from "./(components)/popup/popup";
import Footer from "./(components)/footer/footer";
import { Transition } from "@headlessui/react";
import Main from "./(components)/body/main/main";
//import RootLayout from "./layout";
export default function Home() {
  //SFX timer
  const [timer, setTimer] = React.useState<number>(5);
  const [isTransitionComplete, setIsTransitionComplete] =
    React.useState<boolean>(false);
  const [isIntroPageComplete, setisIntroPageComplete] =
    React.useState<boolean>(false);
  //Countdown
  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  //Trigger Transition
  React.useEffect(() => {
    if (timer === 5) {
      setisIntroPageComplete(true);
    }
    if (timer === 0) {
      setIsTransitionComplete(true);
    }
  }, [timer]);
  return (
    <>
      {timer > 0 ? (
        <Transition
          show={isIntroPageComplete}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Processing />
        </Transition>
      ) : (
        <div className="relative">
          <MobileHeader />
          <Header />
          <Transition
            show={isTransitionComplete}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Main />
            <Line />
            <Botenomics />
            <Line />
            <Seeders />
            <Line />
            <Dailydrip />
            <Line />
            <Social />
            <Footer />
          </Transition>
          <Popup />
        </div>
      )}
    </>
  );
}
