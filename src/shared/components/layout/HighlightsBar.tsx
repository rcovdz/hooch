import Link from "next/link";
import { Recommendations, Search, Trending } from "../ui";

const HighlightsBar = () => {
  return (
    <div className="xxl:pt-8 sticky top-0 flex h-max w-full flex-col gap-4 xl:pt-4">
      <Search />
      <Trending />
      <Recommendations />
      <div className="flex flex-wrap gap-x-4 text-sm text-gray-100">
        <Link href="/" className="underline">
          Roadmap
        </Link>
        <Link href="/" className="underline">
          Suggestion Box
        </Link>
        <Link href="/" className="underline">
          Blend In
        </Link>
        <Link href="/" className="underline">
          Taproom
        </Link>
        <Link href="/" className="underline">
          Help
        </Link>
      </div>
    </div>
  );
};

export default HighlightsBar;
