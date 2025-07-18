import HomeIcon from "../../public/icons/HomeIcon";
import LikesIcon from "../../public/icons/LikesIcon";
import MessagesIcon from "../../public/icons/MessagesIcon";
import NotificationsIcon from "../../public/icons/NotificationsIcon";
import PostIcon from "../../public/icons/PostIcon";
import ProfileIcon from "../../public/icons/ProfileIcon";

const contClass =
  "hover:bg-menuHover flex w-fit items-center justify-center gap-5 rounded-full p-3";

const iconClass = "xs:size-7 size-5";

export const MenuList = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: <HomeIcon />,
    class: contClass,
    iconClass: iconClass,
  },
  {
    id: 2,
    title: "Notifications",
    to: "/",
    icon: <NotificationsIcon />,
    class: contClass,
    iconClass: iconClass,
  },
  {
    id: 3,
    title: "Messages",
    to: "/",
    icon: <MessagesIcon />,
    class: contClass,
    iconClass: iconClass,
  },
  {
    id: 4,
    title: "Likes",
    to: "/",
    icon: <LikesIcon />,
    class: contClass,
    iconClass: iconClass,
  },
  {
    id: 5,
    title: "Profile",
    to: "/",
    icon: <ProfileIcon />,
    class: contClass,
    iconClass: iconClass,
  },
  {
    id: 6,
    title: "Post",
    to: "/",
    icon: <PostIcon />,
    class:
      "bg-white text-black xxl:px-20 flex w-fit items-center justify-center gap-5 rounded-full p-3 font-bold",
    iconClass: "xs:size-7 size-5 xxl:hidden",
  },
];
