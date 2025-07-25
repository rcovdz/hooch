import Link from "next/link";
import { Logo, ImgComp } from "@/shared/components/ui";
import { menuActions } from "../config/navigation";

const Navbar = () => {
  return (
    <nav className="xs:top-0 xs:sticky xs:flex-col xs:bg-transparent xs:pt-5 xs:pb-8 xs:justify-between xs:h-screen xxl:pt-12 fixed right-0 bottom-0 left-0 z-99 flex justify-center bg-black/70 py-2">
      {/*  */}
      <div className="xs:flex-col xs:gap-5 flex w-full justify-around">
        <Link href="/" className="xs:px-4 xxl:px-2 xs:flex hidden">
          <Logo />
        </Link>
        {menuActions.map(({ id, to, contClass, iconClass, icon, title }) => (
          <div
            key={id}
            className="xxl:justify-normal flex justify-center font-bold"
          >
            <Link href={to} className={contClass}>
              <span className={iconClass}>{icon}</span>
              <span className="xxl:inline hidden">{title}</span>
            </Link>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="xxl:justify-between xxl:hover:bg-menuHover xxl:p-3 xs:flex hidden w-full items-center justify-center gap-5 rounded-full">
        <div className="flex items-center gap-2">
          <div className="xxl:size-10 xs:flex relative hidden size-12 overflow-hidden rounded-full">
            <ImgComp
              src="imgs/pp.jpg"
              w={90}
              h={90}
              alt="Profile Picture"
              tr={true}
            />
          </div>
          <div className="xxl:flex hidden flex-col">
            <span className="leading-4 font-bold">Jane Doe</span>
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
