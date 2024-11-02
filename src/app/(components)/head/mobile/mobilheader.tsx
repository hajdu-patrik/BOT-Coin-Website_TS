import React from "react";
import useOutsideClick from "./Sidebarclose";
import { tabcollection, tabcollection2 } from "../tabcollection";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/solid";

const MobileHeader: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [showText, setShowText] = React.useState<boolean>(false);
  const handleSidebarButton = () => {
    setOpen((open) => !open);
  };
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => {
    setOpen(false);
  });

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (open) {
      timeoutId = setTimeout(() => {
        setShowText(true);
      }, 50);
    } else {
      setShowText(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [open]);

  return (
    <div className="sticky inset-0 z-[100] flex md:hidden">
      <nav
        className={`${
          open
            ? "fixed bottom-0 m-0 h-screen w-[80%] p-5 pt-10"
            : "h-screen w-0"
        } absolute inset-0 pt-5 duration-300`}
        ref={menuRef}
        id="mobileheader"
      >
        <button onClick={handleSidebarButton} aria-label="menu">
          {!open ? (
            <Bars3Icon className="ml-5 h-9 w-9 font-[800] shadow-2xl" />
          ) : (
            <XMarkIcon className="ml-2 h-9 w-9 font-[800] shadow-2xl" />
          )}
        </button>
        <ul
          className={`mt-[8vw] flex flex-col overflow-hidden text-xl font-medium text-white`}
          role="list"
        >
          <li>
            <a href="#home">
              <HomeIcon className="h-16 w-16 cursor-pointer py-2 px-4 text-[#111218] transition-all hover:scale-[1.05] hover:font-semibold" />
            </a>
          </li>
          <li>
            {tabcollection.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <a
                    href={item.anchor}
                    className="mb-2 flex items-center border-none py-2 px-4 text-xl text-[#111218]"
                  >
                    <span
                      className={`cursor-pointer font-[600] transition-all hover:scale-[1.05] hover:font-semibold ${
                        showText ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.tabname}
                    </span>
                  </a>
                </React.Fragment>
              );
            })}
            {tabcollection2.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <a
                    href={item.anchor}
                    className="mb-2 flex items-center border-none py-2 px-4 text-xl text-[#111218]"
                  >
                    <span
                      className={`cursor-pointer font-[600] transition-all hover:scale-[1.05] hover:font-semibold ${
                        showText ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.tabname}
                    </span>
                  </a>
                </React.Fragment>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;