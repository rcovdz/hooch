import { TypeToast } from "@/components/icons";
import { ImgComp } from "@/components/ui";
import { PostInteractions } from "./";

const Post = () => {
  return (
    <div className="text-font bg-post rounded-xl p-4">
      {/* POST TYPE */}
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
        <span>
          <TypeToast />
        </span>
        <span className="mb-1">@janedoe toasted</span>
      </div>
      {/* POST CONTAINER */}
      <div className="flex gap-4">
        {/* PROFILE */}
        <div className="relative mt-1 size-12 overflow-hidden rounded-full">
          <ImgComp
            src="/imgs/pp.jpg"
            w={100}
            h={100}
            alt="Profile Image"
            tr={true}
          />
        </div>
        {/* CONTENT */}
        <div className="flex-1">
          {/* TOP */}
          <div className="mb-1">
            <span className="text-white">@janedoe</span>
            <div className="flex gap-2 text-white">
              <h1 className="font-bold">Jane Doe</h1>
              <span className="font-bold">·</span>
              <span className="text-accent font-semibold">12 hr ago</span>
            </div>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            distinctio corrupti error mollitia eos voluptates tempore, repellat
            nam repudiandae a deserunt porro alias sint. Expedita eum error
            sapiente est nemo.
          </p>
          <ImgComp
            src="/imgs/post.jpg"
            w={600}
            h={600}
            alt="Post Image"
            className="my-3 rounded-md"
          />
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
