import { ReactNode } from "react";

export interface INavigation {
  id: number;
  title: string;
  to: string;
  icon: ReactNode;
  contClass: string;
  iconClass: string;
}

export const navigationStyles = {
  containerClass:
    "hover:bg-menuHover flex w-fit items-center justify-center gap-5 rounded-full p-3",
  iconClass: "xs:size-7 size-5",
} as const;
