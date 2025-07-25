import { ReactNode } from "react";

export interface INavigation {
  id: number;
  title?: string;
  to: string;
  icon: ReactNode;
  display?: string;
  displayIcon?: string;
  style?: string;
}
