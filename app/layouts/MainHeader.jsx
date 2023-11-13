import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

export default function MainHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div id="MainHeader" className="border-b">
      <div className="flex flex-col items-center bg-white px-3 py-4">
        <Link href="/">
          <Image width={150} height={150} src="/puppies.jpg" alt="Test" />
        </Link>

        <div className="text-xl font-bold mt-2">Simply Pet</div>

        <div className="relative w-full mt-4">
          <div className="relative flex items-center w-full mb-2">
            <button className="flex items-center">
              <AiOutlineSearch size={22} />
            </button>
            <input
              type="text"
              placeholder="Search for Anything"
              className="w-full p-2 placeholder-gray-400 text-sm pl-3 focus:outline-none"
            />
            <button className="bg-blue-600 rounded text-sm font-semibold text-white m-2 p-2 py-2">
              Search
            </button>
            <div className="text-xs mt-2 hover:text-blue-500 cursor-pointer m-2 p-2 text-center">
              Filter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
