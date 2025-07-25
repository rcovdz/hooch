import {
  PhotoIcon,
  VideoIcon,
  VisibilityIcon,
} from "@/shared/components/icons";
import { IShareActions } from "@/types/common";

export const shareActions: IShareActions[] = [
  { id: 1, icon: <PhotoIcon />, label: "Photo" },
  { id: 2, icon: <VideoIcon />, label: "Video" },
  { id: 3, icon: <VisibilityIcon />, label: "Visibility" },
];
