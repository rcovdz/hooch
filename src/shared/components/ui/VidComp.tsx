"use client";

import { VideoType } from "@/types/video";
import { Video } from "@imagekit/next";

const VidComp = ({ src, w, h, alt, className, tr }: VideoType) => {
  return (
    <Video
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
      src={src}
      w={w}
      h={h}
      alt={alt}
      className={className}
      tr={tr}
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
      controls
      lqip={{ active: true, quality: 20 }}
    ></Video>
  );
};

export default VidComp;
