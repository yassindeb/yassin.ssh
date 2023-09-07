"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import slugify from "slugify";
import * as constants from "../../lib/utils/constants";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export function MainNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {constants.getNavElements().map((item, index) => {
          return (
            <li key={index}>
              <Button variant="link">
                {" "}
                <a
                  href={
                    "/" +
                    slugify(item.name, {
                      replacement: "-",
                      remove: undefined,
                      lower: true,
                      strict: false,
                      locale: "vi",
                      trim: true,
                    })
                  }
                  aria-current="page"
                >
                  {item.name}
                </a>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
