import {
  AgeIcon,
  BackIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/shared/components/icons";
import { ImgComp } from "@/shared/components/ui";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="xs:pt-0 flex h-full flex-col gap-5 pt-5">
      {/* HEADER */}
      <div className="bg-post/95 xs:sticky xs:mx-auto xs:w-[95%] xs:top-0 fixed top-5 z-60 flex items-center gap-5 rounded-2xl p-5">
        <Link href="/">
          <BackIcon />
        </Link>
        <h1 className="text-xl font-black">Raúl Cova</h1>
        <AgeIcon />
        <button className="text-font rounded-full bg-white px-2 py-1 font-black">
          Follow
        </button>
      </div>
      {/* INFO */}
      <div className="xs:mt-0 relative mt-9">
        {/* COVER + PP */}
        <div className="xs:aspect-video relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl">
          <ImgComp src="/imgs/coverp.jpg" w={600} h={200} alt="Cover Picture" />
        </div>
        <div className="absolute left-5 flex aspect-square size-30 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-5 border-black/90 bg-gray-300">
          <ImgComp src="/imgs/app.jpg" w={120} h={120} alt="Cover Picture" />
        </div>
        <div className="absolute right-0 mt-3 flex w-[60%] justify-center gap-5 md:right-5 md:justify-end">
          <Link href="/">
            <YoutubeIcon />
          </Link>
          <Link href="/">
            <LinkedinIcon />
          </Link>
          <Link href="/">
            <GithubIcon />
          </Link>
          <Link href="/">
            <InstagramIcon />
          </Link>
        </div>
      </div>
      {/* DETAILS */}
      <div>
        {/* USERNAME & HANDLE */}
        <h1>Raúl Cova</h1>
        <span>@rcovdev</span>
      </div>
    </div>
  );
};

export default UserPage;
