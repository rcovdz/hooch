import HomeIcon from "@/components/icons/sidebar/HomeIcon";
import LikesIcon from "@/components/icons/sidebar/LikesIcon";
import MessagesIcon from "@/components/icons/sidebar/MessagesIcon";
import NotificationsIcon from "@/components/icons/sidebar/NotificationsIcon";
import PostIcon from "@/components/icons/sidebar/PostIcon";
import ProfileIcon from "@/components/icons/sidebar/ProfileIcon";
import { NavigationItem, navigationStyles } from "@/types/navigation";

const { containerClass, iconClass } = navigationStyles;

export const menuItems: NavigationItem[] = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: <HomeIcon />,
    class: containerClass,
    iconClass: iconClass,
  },
  {
    id: 2,
    title: "Notifications",
    to: "/notifications",
    icon: <NotificationsIcon />,
    class: containerClass,
    iconClass: iconClass,
  },
  {
    id: 3,
    title: "Messages",
    to: "/messages",
    icon: <MessagesIcon />,
    class: containerClass,
    iconClass: iconClass,
  },
  {
    id: 4,
    title: "Likes",
    to: "/likes",
    icon: <LikesIcon />,
    class: containerClass,
    iconClass: iconClass,
  },
  {
    id: 5,
    title: "Profile",
    to: "/profile",
    icon: <ProfileIcon />,
    class: containerClass,
    iconClass: iconClass,
  },
  {
    id: 6,
    title: "Post",
    to: "/post",
    icon: <PostIcon />,
    class:
      "bg-white text-font flex w-fit xxl:w-full items-center justify-center gap-5 rounded-full p-3",
    iconClass: "xs:size-7 size-5 xxl:hidden",
  },
];
