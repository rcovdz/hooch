"use client";

import { Logo } from "@/shared/components/ui";
import Link from "next/link";
import { useState, useEffect } from "react";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos < 150);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`text-font xs:static xs:p-0 xs:bg-transparent xs:rounded-xl fixed top-0 right-0 left-0 z-99 flex flex-col items-center justify-between gap-3 rounded-b-xl bg-black/70 p-3 font-bold transition-transform duration-600 ease-in ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="xs:hidden">
        <Logo />
      </div>
      <div className="flex w-full gap-2">
        <Link
          className="border-primary flex flex-1 items-center justify-center rounded-[15px] border-b-2 bg-white p-3"
          href="/"
        >
          Feed
        </Link>
        <Link
          className="flex flex-1 items-center justify-center rounded-[15px] border-b-2 bg-white p-3"
          href="/"
        >
          Mates
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
