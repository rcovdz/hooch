import {
  PhotoIcon,
  PollIcon,
  VideoIcon,
  VisibilityIcon,
} from "@/components/icons";
import { ImgComp } from "@/components/ui";

const Share = () => {
  return (
    <div className="my-3 flex gap-3 rounded-xl border-2 p-4">
      {/* PROFILE IMG */}
      <div className="relative size-12 overflow-hidden rounded-full">
        <ImgComp w={100} h={100} alt="Profile Picture" src="/imgs/pp.jpg" />
      </div>
      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-3">
        {/* INPUT */}
        <div className="relative">
          <textarea
            className="bg-post w-full resize-none overflow-hidden rounded-xl p-3 outline-none"
            placeholder="Hoo.ch about it..."
            rows={1}
          />
        </div>
        {/* ACTIONS */}
        <div className="flex gap-2 rounded-xl">
          <div className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2">
            <PhotoIcon />
            <span className="hidden md:flex">Photo</span>
          </div>
          <div className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2">
            <VideoIcon />
            <span className="hidden md:flex">Video</span>
          </div>
          <div className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2">
            <PollIcon />
            <span className="hidden md:flex">Poll</span>
          </div>
          <div className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2">
            <VisibilityIcon />
            <span className="hidden md:flex">Visibility</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
