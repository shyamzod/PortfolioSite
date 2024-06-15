"use client";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
export default function Navbar() {
  async function logoutHandler() {}

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href="/"
          >
            <img
              src="https://www.shutterstock.com/image-vector/tie-list-job-listing-icon-260nw-1487331803.jpg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              My Portfolio
            </span>
          </a>
          <div>
            <button className="relative border hover:border-green-600 duration-500 group cursor-pointer text-green-50  overflow-hidden h-8 w-42 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold transform transition-transform hover:scale-125">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-green-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">
                <div className="flex flex-row space-x-1 items-center">
                  <p>Contact Me</p> <FaUser className="text-md" />
                </div>
              </p>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
