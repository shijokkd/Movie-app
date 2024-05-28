import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Navebar() {
  return (
    <>
      <div className=" max-w-[1640px] mx-auto flex justify-between p-4 bg-blue-400">
        <div className=" w-screen bg-blue-400 p-2 font-serif text-xl flex justify-around ">
          <div>D-MOVIES</div>
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
            <FaSearch size={25} />
            <input
              className=" bg-transparent p-2 focus:outline-none w-full"
              type="text"
              placeholder="search movies"
            />
          </div>

          <div className="">
            <ul className=" flex justify-around gap-8">
              <li>home</li>
              <li>product add</li>
              <li>about</li>
              <li>logout</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navebar;
