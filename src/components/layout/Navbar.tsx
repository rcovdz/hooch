import Link from "next/link";
import { Logo, ImgComp } from "@/components/ui";
import { menuActions } from "@/config/navigation";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <Link href="/" className="xs:px-4 xxl:px-2">
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
      {/* USER */}
      <div className="xxl:justify-between xxl:hover:bg-menuHover xxl:p-3 flex items-center justify-center gap-5 rounded-full">
        <div className="flex items-center gap-2">
          <div className="xxl:size-10 relative size-12 overflow-hidden rounded-full">
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
