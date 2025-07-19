"use client";

import { Image, ImageKitProvider } from "@imagekit/next";

type ImageType = {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const ImgComp = ({ src, w, h, alt, className, tr }: ImageType) => {
  return (
    <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>
      <Image
        src={src}
        width={w}
        height={h}
        alt={alt}
        {...(tr
          ? { transformation: [{ width: `${w}`, height: `${h}` }] }
          : { width: w, height: h })}
        className={className}
      />
    </ImageKitProvider>
  );
};

export default ImgComp;
