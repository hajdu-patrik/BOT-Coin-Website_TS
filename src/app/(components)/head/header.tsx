const Tab = dynamic(() => import("../head/tab"));
import { tabcollection, tabcollection2 } from "./tabcollection";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header id="home">
      <div className="relative z-50 hidden select-none items-center justify-center pt-8 md:flex">
        {/* Tabs */}
        <ul
          role="list"
          className="flex items-center space-x-16 text-[1.2em] md:text-[1.3em] lg:text-[1.4em] xl:text-[1.5em] 2xl:text-[1.6em]"
          aria-busy="true"
        >
          {/* Tabs that mark a page */}
          {tabcollection.map((item, index) => (
            <Tab anchor={item.anchor} tabname={item.tabname} key={index} />
          ))}
          <a href="#header">
            <button aria-label="BOT Logo">
              <Image
                src="/images/pfp.png"
                priority={true}
                width={75}
                height={75}
                draggable={false}
                alt="BOT Logo"
              />
            </button>
          </a>
          {tabcollection2.map((item, index) => (
            <Tab anchor={item.anchor} tabname={item.tabname} key={index} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;