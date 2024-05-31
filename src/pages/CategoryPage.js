import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div className=" w-11/12 max-w-[670px] py-5 mx-auto ">
        <button
          className="font-bold border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2 className="font-bold text-xl pt-3">
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
