import React from "react";
import ImgComp from "./ImgComp";
import Link from "next/link";
import {
  DotsIcon,
  CommentIcon,
  LikeIcon,
  ToastIcon,
} from "@/shared/components/icons";

const Trending = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border-2 border-white p-5">
      <h1 className="text-xl font-black text-gray-100">What&apos;s Buzzing</h1>
      {/* TREND */}
      <div className="flex gap-2">
        <div className="relative size-20 overflow-hidden rounded-2xl">
          <ImgComp src="/imgs/code.jpg" w={100} h={100} alt="Trending Image" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="leading-5.5 font-bold text-gray-100">
            Hoo.ch Summer Update
          </h2>
          <span className="leading-5.5 font-medium">Last Night</span>
          <span className="leading-5.5">@rcovdev</span>
        </div>
      </div>
      <div className="h-[2px] w-full rounded-full bg-white"></div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-100">
            Sports · Buzzing
          </span>
          <DotsIcon />
        </div>
        <h2 className="font-bold">Cristiano Ronaldo</h2>
        <span className="flex items-center gap-2">
          80k <ToastIcon className="fill-primary" />
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-100">
            Technology · Buzzing
          </span>
          <DotsIcon />
        </div>
        <h2 className="font-bold">Hoo.ch Summer Update</h2>
        <span className="flex items-center gap-2">
          120k <LikeIcon className="stroke-accent" />
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-100">
            Music · Buzzing
          </span>
          <DotsIcon />
        </div>
        <h2 className="font-bold">Kendrick Lamar</h2>
        <span className="flex items-center gap-2">
          1M <CommentIcon className="stroke-white" />
        </span>
      </div>
      <div className="h-[2px] w-full rounded-full bg-white"></div>
      <Link href="/" className="text-primary w-fit font-medium underline">
        Show More
      </Link>
    </div>
  );
};

export default Trending;
