import { Post } from "./";

const Feed = () => {
  return (
    <div className="flex flex-col gap-3">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
