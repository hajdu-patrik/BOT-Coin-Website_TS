import React from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(true);
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
export default useOutsideClick;