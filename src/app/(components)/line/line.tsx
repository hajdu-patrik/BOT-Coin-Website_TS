import Image from "next/image";
import React from "react";

const Line: React.FC = () => {
  return (
    <Image
      src="/images/line.png"
      width={2000}
      height={1000}
      draggable={false}
      priority={true}
      alt="I'm a line"
      className="w-full object-contain 2xl:h-[50vw]"
    />
  );
};

export default Line;