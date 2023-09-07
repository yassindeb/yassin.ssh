"use client";
"use client";
import { Button } from "@/components/ui/button";
import slugify from "slugify";
import * as constants from "../../lib/utils/constants";

export function MobileNav() {
  return (
    <div className="mr-4 md:hidden w-screen items-center justify-center bg-secondary">
      {/* <ul className="sm:hidden lex h-screen flex-col items-center justify-between gap-5">
        <li>about</li>
        <li>about</li>
        <li>about</li>
        <li>about</li>
      </ul> */}
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
