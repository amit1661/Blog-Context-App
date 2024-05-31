import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error aagya in blog id wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className=" w-11/12 max-w-[670px] py-5 mx-auto  ">
        <button
          className="font-bold border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <p className="font-bold text-3xl "> Loading</p>
        </div>
      ) : blog ? (
        <div className=" w-11/12 max-w-[670px] mx-auto ">
          <BlogDetails post={blog} />
          <h2 className="font-bold text-xl mt-4 mb-5"> Related Blogs </h2>
          {relatedblogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
