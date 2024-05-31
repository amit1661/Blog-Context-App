import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className=" w-11/12 max-w-[670px] flex flex-col gap-y-7 py-3 mx-auto  items-center  ">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="min-h-[80vh] w-full flex justify-center items-center">
            No Blogs Found !
          </p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}
