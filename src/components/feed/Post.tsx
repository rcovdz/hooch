import { TypeToast } from "@/components/icons";
import { ImgComp, PostImg, PostVideo } from "@/components/ui";
import { PostInteractions } from "./";
import { imagekit } from "@/lib/utils";
import { IDetailResponse } from "@/types/mediaDetails";

const Post = async () => {
  const getFileDetails = async (fieldId: string): Promise<IDetailResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fieldId, function (err, res) {
        if (err) reject(err);
        else resolve(res as IDetailResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("687fe3cc5c7cd75eb85de61c");

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
          {fileDetails && fileDetails.fileType === "image" ? (
            <div className="my-3 overflow-hidden rounded-md">
              <PostImg
                src={fileDetails.url}
                w={fileDetails.height}
                h={fileDetails.height}
                alt="Post Image"
                initialSensitive={fileDetails.customMetadata?.sensitive}
                className={`rounded-md`}
              />
            </div>
          ) : (
            <div className="my-3 overflow-hidden rounded-md">
              <PostVideo
                src={fileDetails.url}
                w={fileDetails.width}
                h={fileDetails.height}
                alt="Post Video"
                className={`rounded-md`}
              />
            </div>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
