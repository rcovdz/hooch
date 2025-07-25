"use client";

import PostInfo from "./PostInfo";
import { postActions } from "../config/post";

const PostInteractions = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-5">
        {postActions.map(
          ({ id, Icon, count, hoverClass, colorProp, colorValue }) => (
            <div
              key={id}
              className="group flex cursor-pointer items-center gap-1"
            >
              <Icon
                {...{ [colorProp]: colorValue }}
                className={`${hoverClass} transition ease-in`}
              />
              <span className="font-semibold text-white">{count}</span>
            </div>
          ),
        )}
      </div>
      <div className="flex items-center">
        <PostInfo />
      </div>
    </div>
  );
};

export default PostInteractions;
