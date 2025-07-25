"use client";

import { ImageType } from "@/types/image";
import { Image } from "@imagekit/next";

const ImgComp = ({ src, w, h, alt, className, tr }: ImageType) => {
  return (
    <Image
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
      src={src}
      width={w}
      height={h}
      alt={alt}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      className={className}
    />
  );
};

export default ImgComp;
