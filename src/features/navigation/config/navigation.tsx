import {
  HomeIcon,
  LikesIcon,
  NotificationsIcon,
  PostIcon,
  ProfileIcon,
} from "@/shared/components/icons";
import { INavigation, navigationStyles } from "@/types/common";

const { containerClass, iconClass } = navigationStyles;

export const menuActions: INavigation[] = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: <HomeIcon />,
    contClass: containerClass,
    iconClass: iconClass,
  },
  {
    id: 2,
    title: "Notifications",
    to: "/notifications",
    icon: <NotificationsIcon />,
    contClass: containerClass,
    iconClass: iconClass,
  },
  {
    id: 3,
    title: "Notifications",
    to: "/notifications",
    icon: <NotificationsIcon />,
    contClass: containerClass,
    iconClass: iconClass,
  },
  {
    id: 4,
    title: "Likes",
    to: "/likes",
    icon: <LikesIcon />,
    contClass: containerClass,
    iconClass: iconClass,
  },
  {
    id: 5,
    title: "Profile",
    to: "/profile",
    icon: <ProfileIcon />,
    contClass: containerClass,
    iconClass: iconClass,
  },
  {
    id: 6,
    title: "Post",
    to: "/post",
    icon: <PostIcon />,
    contClass:
      "xs:bg-white text-font flex w-fit xxl:w-full items-center justify-center gap-5 rounded-full p-3",
    iconClass: "xs:size-7 size-5 xxl:hidden",
  },
];
