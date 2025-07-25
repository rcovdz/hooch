import { CommentIcon, ToastIcon, LikeIcon } from "@/shared/components/icons";
import { IPostActions } from "@/types/common";

export const postActions: IPostActions[] = [
  {
    id: 1,
    Icon: CommentIcon,
    count: 157,
    hoverClass: "group-hover:stroke-primary",
    colorProp: "stroke",
    colorValue: "white",
  },
  {
    id: 2,
    Icon: ToastIcon,
    count: 92,
    hoverClass: "group-hover:fill-primary",
    colorProp: "fill",
    colorValue: "white",
  },
  {
    id: 3,
    Icon: LikeIcon,
    count: 378,
    hoverClass: "group-hover:stroke-accent",
    colorProp: "stroke",
    colorValue: "white",
  },
];
