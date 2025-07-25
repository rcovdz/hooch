import React from "react";
import ImgComp from "./ImgComp";
import Link from "next/link";

const Recommendations = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border-2 border-white p-5">
      <h1 className="text-xl font-black text-gray-100">Find Your Spirit</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-10 overflow-hidden rounded-full">
            <ImgComp
              src="/imgs/jpp.jpg"
              w={100}
              h={100}
              alt="Profile Picture"
              tr={true}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-md leading-4 font-bold">John Doe</h2>
            <span className="text-sm leading-4 text-gray-100">@johndoe</span>
          </div>
        </div>
        <div>
          <button className="text-font rounded-full bg-white px-2 py-1 font-black">
            Follow
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-10 overflow-hidden rounded-full">
            <ImgComp
              src="/imgs/rpp.jpg"
              w={100}
              h={100}
              alt="Profile Picture"
              tr={true}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-md leading-4 font-bold">Raúl Cova</h2>
            <span className="text-sm leading-4 text-gray-100">@rcovdev</span>
          </div>
        </div>
        <div>
          <button className="text-font rounded-full bg-white px-2 py-1 font-black">
            Follow
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-10 overflow-hidden rounded-full">
            <ImgComp
              src="/imgs/app.jpg"
              w={100}
              h={100}
              alt="Profile Picture"
              tr={true}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-md leading-4 font-bold">Alondra Gálvan</h2>
            <span className="text-sm leading-4 text-gray-100">@alogalvan</span>
          </div>
        </div>
        <div>
          <button className="text-font rounded-full bg-white px-2 py-1 font-black">
            Follow
          </button>
        </div>
      </div>
      <div className="h-[2px] w-full rounded-full bg-white"></div>
      <Link href="/" className="text-primary w-fit font-medium underline">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
