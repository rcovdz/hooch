import { Feed, Share } from "@/components/feed";
import Link from "next/link";

export default function Home() {
  return (
    <div className="xxl:pt-11 pt-4">
      <div className="text-font flex justify-between gap-2 font-bold">
        <Link
          className="border-primary flex flex-1 items-center justify-center rounded-[15px] border-b-2 bg-white p-3"
          href="/"
        >
          Feed
        </Link>
        <Link
          className="flex flex-1 items-center justify-center rounded-[15px] border-b-2 bg-white p-3"
          href="/"
        >
          Mates
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
