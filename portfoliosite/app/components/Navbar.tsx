"use client";
import { useState } from "react";
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [userloggedin, SetUserLoggedIn] = useState(false);
  const [LoggedInUser, SetLoggedInUser] = useState("");
  const [LoggedInEmail, SetLoggedInUserEmail] = useState("");

  async function logoutHandler() {
    // const result = await axios.get("http://localhost:3000/user/logout", {
    //   params: { username: localStorage.getItem("UserName") },
    // });
    // const res = await result.data;
    // if (res) {
    //   localStorage.clear();
    //   SetUserLoggedIn(false);
    //   SetLoggedInUser("");
    //   SetLoggedInUserEmail("");
    // }
  }

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
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              My Portfolio
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
