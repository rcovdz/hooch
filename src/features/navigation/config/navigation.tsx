import {
  BuzzIcon,
  HomeIcon,
  LikesIcon,
  NotificationsIcon,
  PostIcon,
  ProfileIcon,
  MobileSearchIcon,
} from "@/shared/components/icons";
import { INavigation } from "@/types/common";

export const menuActions: INavigation[] = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: <HomeIcon />,
    style: "hover:bg-menuHover",
  },
  {
    id: 2,
    title: "Notifications",
    to: "/notifications",
    icon: <NotificationsIcon />,
    style: "hover:bg-menuHover",
  },
  {
    id: 3,
    title: "Search",
    to: "/search",
    icon: <MobileSearchIcon />,
    display: "xl:hidden",
    style: "hover:bg-menuHover",
  },
  {
    id: 4,
    title: "Likes",
    to: "/likes",
    icon: <LikesIcon />,
    style: "hover:bg-menuHover",
  },
  {
    id: 5,
    title: "Profile",
    to: "/profile",
    icon: <ProfileIcon />,
    style: "hover:bg-menuHover",
  },
  {
    id: 6,
    title: "Buzzing",
    to: "/buzzing",
    icon: <BuzzIcon />,
    display: "xl:hidden",
    style: "hover:bg-menuHover",
  },
  {
    id: 7,
    title: "Post",
    to: "/post",
    icon: <PostIcon />,
    display: "hidden xs:flex",
    displayIcon: "xxl:hidden md:hidden xl:flex",
    style: "bg-white text-font text-lg xxl:w-full xl:w-fit md:w-full",
  },
];
