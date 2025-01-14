import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className=" bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
