import { Feed, Share } from "@/features/feed";
import { Topbar } from "@/features/navigation";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="xs:pt-0 xs:pb-0 pt-28 pb-18">
        <Share />
        <Feed />
      </div>
    </>
  );
}
