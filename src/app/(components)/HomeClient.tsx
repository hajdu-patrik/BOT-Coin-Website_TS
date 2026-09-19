"use client";
import React from "react";
import Processing from "./processing";
import MobileHeader from "./head/mobile/mobilheader";
import Header from "./head/header";
import Line from "./line/line";
import Botenomics from "./body/main/botenomics/botenomics";
import Seeders from "./body/main/seeders/seeders";
import Dailydrip from "./body/main/dailydrip";
import Social from "./body/main/social/social";
import Popup from "./popup/popup";
import Footer from "./footer/footer";
import { Transition } from "@headlessui/react";
import Main from "./body/main/main";
export default function HomeClient() {
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
          as="div"
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
            as="div"
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
