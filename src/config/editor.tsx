import { OriginalIcon, WideIcon, SquareIcon } from "@/components/icons";
import { IEditorActions } from "@/types/editor";

export const editorActions: IEditorActions[] = [
  { id: 1, Icon: OriginalIcon, key: "original", label: "Original" },
  { id: 2, Icon: WideIcon, key: "wide", label: "Wide" },
  { id: 3, Icon: SquareIcon, key: "square", label: "Square" },
];
