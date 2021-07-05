import React, { useEffect } from "react";
import Navigation from "../src/components/navigation";
import UserList from "../src/components/user-list";
import Search from "../src/components/search";

export default function Home() {
  return (
    <div className="bg-main">
      <Navigation />
      <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between px-4 2xl:px-24 xl:px-5 lg:px-5 md:px-16 mx-4 md:mt-10 md:mb-10 ">
        <div
          className=" font-bold text-xl   md:text-2xl lg:text-3xl w-1/2 flex my-4 md:my-0 justify-center items-center md:justify-start 
         text-black"
        >
          USER LIST
        </div>
        <Search />
      </div>
      <UserList />
    </div>
  );
}
