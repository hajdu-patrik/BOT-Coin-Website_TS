import Image from "next/image";
import React from "react";

// This divider is repeated between every section of the home page, so only
// an instance that is genuinely above the fold should ever request eager
// loading - the rest should lazy-load like any other below-the-fold image.
const Line: React.FC<{ priority?: boolean }> = ({ priority = false }) => {
  return (
    <Image
      src="/images/line.png"
      width={2000}
      height={1000}
      draggable={false}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      alt="I'm a line"
      className="w-full object-contain 2xl:h-[50vw]"
    />
  );
};

export default Line;