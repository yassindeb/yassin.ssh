import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getNavElements } from "./constants";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export { cn, getNavElements };
