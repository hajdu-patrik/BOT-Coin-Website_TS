import Image from "next/image";
import React from "react";

const Processing = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  };
  return (
    <div
      className="flex h-[100vh] w-full cursor-pointer select-none flex-col items-center justify-center"
      onClick={handlePlayAudio}
    >
      <Image
        src="/images/pfp.png"
        priority={true}
        width={500}
        height={500}
        draggable={false}
        alt="PFP"
        className="botimage aspect-square w-[12.5em] overflow-hidden rounded-full md:w-[20em] xl:w-[25em]"
      />
      <audio controls ref={audioRef} autoPlay>
        <source src="sounds/damson.ogg" type="audio/ogg" />
      </audio>
      <div className="mt-16 text-center font-wp text-2xl">
        Click anywhere to become an NPC <span className="font-hs">!</span>
      </div>
    </div>
  );
};

export default Processing;