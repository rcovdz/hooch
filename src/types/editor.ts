import { ElementType } from "react";

export interface IEditorActions {
  id: number;
  Icon: ElementType;
  key: "original" | "wide" | "square";
  label: string;
}
