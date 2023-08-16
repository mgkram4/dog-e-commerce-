import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function TopMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] px-4">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-sm text-[#333333] space-x-4 py-2"
        >
          <li className="relative">
            <div
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              <div>Login</div>
              <BsChevronDown />
            </div>

            {isDropdownOpen && (
              <div className="absolute bg-white w-[200px] text-[#333333] z-40 top-[32px] left-0 border shadow-lg">
                <div className="flex items-center justify-start gap-2 p-3">
                  <Image
                    width={50}
                    height={50}
                    src="/dog.jpg"
                    alt="Profile Image"
                  />
                  <div className="font-bold text-sm">John Weeks</div>
                </div>

                <div className="border-b">
                  <ul className="bg-white">
                    <li className="py-2 px-4 w-full hover:underline cursor-pointer">
                      <Link href="/orders">My Orders</Link>
                    </li>
                    <li className="py-2 px-4 w-full hover:underline cursor-pointer">
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="hover:underline cursor-pointer">Daily Deals</li>
          <li className="hover:underline cursor-pointer">Help & Contact</li>
        </ul>

        <ul
          id="TopMenuRight"
          className="flex items-center text-sm text-[#333333] space-x-4 py-2"
        >
          <li className="relative">
            <div className="flex items-center">
              <AiOutlineShoppingCart size={22} />
              <div className="absolute top-0 right-[-5px] -mt-1 bg-red-500 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center">
                3
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
