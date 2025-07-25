import Link from "next/link";
import { Logo, ImgComp } from "@/shared/components/ui";
import { menuActions } from "../config/navigation";

const Navbar = () => {
  return (
    <nav className="xs:top-0 xs:sticky xs:flex-col xs:bg-transparent xs:pt-5 xs:pb-8 xs:justify-between xs:h-screen xxl:pt-12 fixed right-0 bottom-0 left-0 z-99 flex justify-center bg-black/80 py-2">
      {/*  */}
      <div className="xs:flex-col xs:gap-5 flex w-full justify-around">
        <Link href="/" className="xs:px-4 xxl:px-2 xs:flex hidden">
          <Logo />
        </Link>
        {menuActions.map(
          ({ id, to, icon, title, display, style, displayIcon }) => (
            <div
              key={id}
              className={`xxl:justify-normal flex justify-center font-bold md:justify-normal xl:justify-center ${display}`}
            >
              <Link
                href={to}
                className={`flex w-fit items-center justify-center gap-5 rounded-full p-3 ${style}`}
              >
                <span className={`xs:size-7 xxl size-5 ${displayIcon}`}>
                  {icon}
                </span>
                <span className="xxl:inline hidden md:inline xl:hidden">
                  {title}
                </span>
              </Link>
            </div>
          ),
        )}
      </div>
      {/*  */}
      <div className="xxl:justify-between xxl:hover:bg-menuHover xxl:p-3 md:hover:bg-menuHover xs:flex xxl:gap-10 xxl:cursor-pointer mx-auto hidden w-fit items-center justify-center rounded-full md:cursor-pointer md:justify-between md:gap-5 md:p-3 xl:cursor-default xl:justify-center xl:p-0 xl:hover:bg-transparent">
        <div className="flex items-center gap-2">
          <div className="xxl:size-10 xs:flex relative hidden size-15 cursor-pointer overflow-hidden rounded-full md:size-10 xl:size-15">
            <ImgComp
              src="imgs/pp.jpg"
              w={90}
              h={90}
              alt="Profile Picture"
              tr={true}
            />
          </div>
          <div className="xxl:flex hidden flex-col md:flex xl:hidden">
            <span className="leading-4 font-bold">Jane Doe</span>
            <span className="leading-4">@janedoe</span>
          </div>
        </div>
        <div className="xxl:inline mb-2 hidden leading-0 font-extrabold md:inline xl:hidden">
          ...
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
