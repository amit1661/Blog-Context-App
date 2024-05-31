import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div>
      <NavLink
        className={"font-bold text-xl underline"}
        to={`/blog/${post.id}`}
      >
        <span>{post.title}</span>
      </NavLink>
      <p>
        By <span>{post.author}</span>
        on
        <NavLink
          className={"font-bold px-1 underline"}
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
        >
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p> Posted on {post.date} </p>
      <p className="text-md mt-[14px] font-medium"> {post.content}</p>
      <div className="w-full flex gap-x-4 flex-wrap mt-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            className={"font-bold text-blue-400 px-1 underline"}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
          >
            <span>{`  #${tag}   `}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
