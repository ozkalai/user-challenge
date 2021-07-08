import React, { useEffect, useState } from "react";
import Navigation from "../src/components/navigation";
import UserList from "../src/components/user-list";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const results = filteredData.filter((user) => {
    return user.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-main min-h-screen">
      <Navigation />
      <div className="w-11/12 flex flex-col my-10 items-center sm:flex-row sm:justify-between mx-auto sm:w-11/12 md:my-10 ">
        <div
          className=" font-bold text-xl md:text-2xl lg:text-3xl w-1/2 flex my-4 md:my-0 justify-center sm:justify-start items-center md:justify-start 
         text-secondary"
        >
          USER LIST
        </div>
        <div className="w-full mx-0 mb-2 md:w-2/4 lg:w-1/4  ">
          <div className="bg-white flex items-center shadow-xl">
            <input
              className="w-full px-6 text-gray-700 leading-tight focus:outline-none text-xs md:text-sm lg:text-lg"
              id="search"
              type="text"
              placeholder="Search by name"
              onChange={handleOnChange}
              value={searchTerm}
            />

            <div className="p-4">
              <button className="bg-secondary text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
                <AiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserList
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        results={results}
      />
    </div>
  );
}
