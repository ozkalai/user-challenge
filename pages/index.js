import React, { useEffect } from "react";
import Navigation from "../src/components/navigation";
import UserList from "../src/components/user-list";
import Search from "../src/components/search";

export default function Home() {
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
        <Search />
      </div>
      <UserList />
      <div className="w-full h-20 bg-main"></div>
    </div>
  );
}
