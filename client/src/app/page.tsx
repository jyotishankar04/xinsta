import Posts from "@/components/feed/posts";
import RightSidebar from "@/components/rightSidebar/rightSidebar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="container w-full h-full grid grid-cols-8 md:grid-cols-3 xl:grid-cols-4">
      <div className="relative xl:px-10 ">
        <Sidebar />
      </div>
      <div className="md:col-span-2 col-span-7  h-full w-full">
        <Posts />
      </div>
      <div className="w-full px-10 xl:block hidden">
        <RightSidebar />
      </div>
    </div>
  );
}
