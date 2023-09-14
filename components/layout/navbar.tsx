"use client";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "@radix-ui/react-toggle";
import Image from "next/image";
import { useState } from "react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

import { useTheme } from "next-themes";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="container mx-auto px-4 py-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  my-4">
        <a href="/" className="flex items-center justify-center gap-2">
          <Image
            className="hidden dark:block"
            src="/logoDark.png"
            alt="dark-mode-image"
            width={50}
            height={50}
          />
          <Image
            className="block dark:hidden"
            src="/logoWhite.png"
            alt="light-mode-image"
            width={50}
            height={50}
          />
        </a>
        <div className="flex justify-center items-center gap-4 px-4 ">
          <button
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "dark" ? (
              <SunIcon width={24} height={24} />
            ) : (
              <MoonIcon width={24} height={24} />
            )}
          </button>
          <Toggle className="md:hidden" onClick={() => setShowNav(!showNav)}>
            <HamburgerMenuIcon width={24} height={24} />
          </Toggle>
          <MainNav />
        </div>
      </div>
      {showNav && <MobileNav />}
    </nav>
  );
};
