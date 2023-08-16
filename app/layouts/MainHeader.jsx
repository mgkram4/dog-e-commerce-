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
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] ">
        <div className="flex items-center w-full bg-white">
          <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto ">
            <Link href="/">
              <Image width={700} height={200} src="/puppies.jpg" alt="Test" />
            </Link>

            <div className="w-full">
              <div className="relative">
                <div className="flex items-center">
                  <div className="relative flex items-center border-gray-900 w-full p-2">
                    <button className="flex items-center">
                      <AiOutlineSearch size={22} />
                    </button>

                    <input
                      type="text"
                      placeholder="Search for Anything"
                      className="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                    />
                  </div>
                  <button className="flex items-center bg-blue-600 text-sm font-semibold text-white p-[11px] ml-2 px-14">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
