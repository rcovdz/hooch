import Link from "next/link";
import Logo from "../../public/Logo";
import { MenuList } from "@/constants/MenuList";
import ImgComp from "./ImgComp";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex h-full flex-col justify-between pt-4 pb-8">
      {/* MENU */}
      <div className="flex flex-col gap-5">
        {/* LOGO */}
        <Link href="/" className="xs:px-4 xxl:px-2">
          <Logo />
        </Link>
        {/* MENU ITEMS */}
        {MenuList.map((item) => (
          <div key={item.id} className="xxl:justify-normal flex justify-center">
            <Link href={item.to} className={item.class}>
              <span className={item.iconClass}>{item.icon}</span>
              <span className="xxl:inline hidden">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
      {/* USER */}
      <div className="xxl:justify-between xxl:hover:bg-menuHover xxl:p-3 flex items-center justify-center rounded-full">
        <div className="flex items-center gap-2">
          <div className="xxl:size-10 relative size-12 overflow-hidden rounded-full">
            <ImgComp
              src="imgs/pp.jpg"
              w={50}
              h={50}
              alt="Profile Picture"
              tr={true}
            />
          </div>
          <div className="xxl:flex hidden flex-col">
            <span className="leading-4">Jane Doe</span>
            <span className="leading-4">@janedoe</span>
          </div>
        </div>
        <div className="xxl:inline mb-2 hidden cursor-pointer leading-0 font-extrabold">
          ...
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
