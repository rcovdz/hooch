"use client";

import { useState } from "react";
import ImgComp from "./ImgComp";
import { ISensitiveMedia } from "@/types/sensitiveMedia";

const PostImg = ({
  src,
  alt,
  w,
  h,
  initialSensitive,
  className,
}: ISensitiveMedia) => {
  const [sensitive, setSensitive] = useState(initialSensitive);
  return (
    <div className="relative">
      <ImgComp
        src={src}
        alt={alt}
        w={w}
        h={h}
        className={`${className} rounded-md ${sensitive ? "blur-sm" : ""}`}
      />
      {sensitive && (
        <button
          onClick={() => {
            setSensitive(!sensitive);
          }}
          className="text-font absolute top-3 right-3 cursor-pointer rounded bg-white px-2 font-black"
        >
          View
        </button>
      )}
      {!sensitive && initialSensitive && (
        <button
          onClick={() => {
            setSensitive(!sensitive);
          }}
          className="text-font absolute top-3 right-3 cursor-pointer rounded bg-white px-2 font-black"
        >
          Hide
        </button>
      )}
    </div>
  );
};

export default PostImg;
