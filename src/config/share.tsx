import { PhotoIcon, VideoIcon, VisibilityIcon } from "@/components/icons";
import { IShareActions } from "@/types/share";

export const shareActions: IShareActions[] = [
  { id: 1, icon: <PhotoIcon />, label: "Photo" },
  { id: 2, icon: <VideoIcon />, label: "Video" },
  { id: 3, icon: <VisibilityIcon />, label: "Visibility" },
];
