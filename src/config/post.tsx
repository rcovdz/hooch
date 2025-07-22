import { CommentIcon, ToastIcon, LikeIcon } from "@/components/icons";
import { IPostActions } from "@/types/post";

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
    count: 157,
    hoverClass: "group-hover:fill-primary",
    colorProp: "fill",
    colorValue: "white",
  },
  {
    id: 3,
    Icon: LikeIcon,
    count: 157,
    hoverClass: "group-hover:stroke-accent",
    colorProp: "stroke",
    colorValue: "white",
  },
];
