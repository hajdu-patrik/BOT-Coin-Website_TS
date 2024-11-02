import Image from "next/image";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
interface PopupObj {
  src: string;
}
const Popup: React.FC = () => {
  const [popups, setPopups] = React.useState<PopupObj[]>([
    {
      src: "/achievements/dream.png",
    },
    {
      src: "/achievements/dumb.png",
    },
    {
      src: "/achievements/invest.png",
    },
    {
      src: "/achievements/memes.png",
    },
    {
      src: "/achievements/npc.png",
    },
    {
      src: "/achievements/pump.png",
    },
    {
      src: "/achievements/smart.png",
    },
    {
      src: "/achievements/stake.png",
    },
    {
      src: "/achievements/tweet.png",
    },
  ]);
  //Intial length of array (should be 9)
  const [initialLength, setInitialLength] = React.useState<number>(
    popups.length
  );
  React.useEffect(() => {
    setInitialLength(popups.length);
  }, []);
  //Achievement timer
  const [PopUptimer, setPopUpTimer] = React.useState<number | null>(0);
  //Close Box
  const [closeBox, setCloseBox] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (popups.length > 0) {
      setTimeout(() => setCloseBox(false), 5 * 1000);
      setCloseBox(true);
    }
  }, [popups]); //Automatic closing: the website will close the box but doesn't remove it from the DOM.
  const XBox = () => {
    setCloseBox(!closeBox);
  }; //Manual closing: the user can close the box before the timer ends.
  const changeImage = 120;
  const duration = changeImage * initialLength + 1; //Every 60 seconds an achievement will appear.
  React.useEffect(() => {
    if (PopUptimer === duration) {
      setPopUpTimer(null);
    } else {
      const timerId = setTimeout(() => {
        setPopUpTimer((prevTimer) => {
          //console.log("Current timer value:", prevTimer);
          return prevTimer !== null && prevTimer + 1 > duration
            ? null
            : prevTimer !== null
            ? prevTimer + 1
            : null;
        });
      }, 1000);
      return () => {
        clearTimeout(timerId); // Cleanup the timer
      };
    }
  }, [PopUptimer]);

  //Selecting an inital image
  const [selectedImage, setSelectedImage] = React.useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * popups.length);
    return popups[randomIndex].src;
  });
  //Removing the selected image, and repetaing the process till popups array length of 0.
  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const selectRandomImage = () => {
      if (popups.length > 0) {
        setPopups((prevPopups) => {
          const randomIndex = Math.floor(Math.random() * prevPopups.length);
          const updatedPopups = [...prevPopups];
          const selectedPopup = updatedPopups.splice(randomIndex, 1)[0];
          setSelectedImage(selectedPopup.src);
          //console.log("Updated popups length:", updatedPopups.length);
          return updatedPopups;
        });
      }
    };
    if (popups.length > 0) {
      intervalId = setInterval(() => {
        selectRandomImage();
        if (popups.length === 0) {
          clearInterval(intervalId);
        }
      }, changeImage * 1000); //Every 60 seconds an achievement will appear
    }
    return () => clearInterval(intervalId);
  }, [popups]);

  return (
    <>
      {closeBox && PopUptimer! <= duration && (
        <Transition
          show={PopUptimer! > 0}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed bottom-10 left-[10%] z-[100] md:left-10">
            <audio controls autoPlay>
              <source src="sounds/achievement.ogg" type="audio/ogg" />
            </audio>
            <div className="isolate animate-bounce">
              <Image
                src={selectedImage}
                width={300}
                height={300}
                alt="Achievement"
                className="relative"
                draggable={false}
              />
              <XMarkIcon
                className="absolute right-1 top-1 aspect-square w-9 cursor-pointer text-[#c84f5f] hover:text-[#aa323b]"
                onClick={XBox}
              />
            </div>
          </div>
        </Transition>
      )}
    </>
  );
};

export default Popup;
