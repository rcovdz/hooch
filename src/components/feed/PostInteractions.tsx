"use client";

import { CommentIcon, LikeIcon, ToastIcon } from "@/components/icons";
import PostInfo from "./PostInfo";

const PostInteractions = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-5">
        {/* COMMENT */}
        <div className="group flex cursor-pointer items-center gap-1">
          <CommentIcon
            stroke="white"
            className="group-hover:stroke-primary transition ease-in"
          />
          <span className="font-semibold text-white">157</span>
        </div>
        {/* TOAST */}
        <div className="group flex cursor-pointer items-center gap-1">
          <ToastIcon
            className="group-hover:fill-primary transition ease-in"
            fill="white"
          />
          <span className="font-semibold text-white">43</span>
        </div>
        {/* LIKE */}
        <div className="group flex cursor-pointer items-center gap-1">
          <LikeIcon
            stroke="white"
            className="group-hover:stroke-accent transition ease-in"
          />
          <span className="font-semibold text-white">293</span>
        </div>
      </div>
      <div className="flex items-center">
        <PostInfo />
      </div>
    </div>
  );
};

export default PostInteractions;
