import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <div className="w-full mx-0 mb-2 md:w-2/4 lg:w-1/4  ">
      <div className="bg-white flex items-center shadow-xl">
        <input
          className="w-full px-6 text-gray-700 leading-tight focus:outline-none text-xs md:text-sm lg:text-lg"
          id="search"
          type="text"
          placeholder="Search by name"
        />

        <div className="p-4">
          <button className="bg-secondary text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
