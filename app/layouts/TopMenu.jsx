import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUser } from "../context/user";
import { useCart } from "../context/cart";

export default function TopMenu() {
  const user = useUser();
  const cart = useCart(); // Change "useCart" to "cart"

  const [isMenu, setIsMenu] = useState(false);

  const isLoggedIn = () => {
    if (user && user.id) {
      return (
        <button
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}
          className="flex items-center gap-2 hover:underline cursor-pointer"
        >
          <div>Hi, {user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        href="/auth"
        className="flex items-center gap-2 hover:underline cursor-pointer"
      >
        <div>Login</div>
        <BsChevronDown />
      </Link>
    );
  };

  return (
    <div id="TopMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-[11px] text-[#333333] px-2 h-8"
        >
          <li className="relative px-3">
            {isLoggedIn()}

            <div
              id="AuthDropdown"
              className={`
                        absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg
                        ${isMenu ? "visible" : "hidden"}
                    `}
            >
              <div>
                <div className="flex items-center justify-start gap-1 p-3">
                  <img width={50} src={user?.picture} alt="User" />{" "}
                  {/* Add alt attribute */}
                  <div className="font-bold text-[13px]">{user?.name}</div>
                </div>
              </div>

              <div className="border-b" />

              <ul className="bg-white">
                <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                  <Link href="/orders">My orders</Link>
                </li>
                <li
                  onClick={() => {
                    user.signOut();
                    setIsMenu(false);
                  }}
                  className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </li>
          <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="hover:underline cursor-pointer">Help & Contact</li>
        </ul>

        <ul
          id="TopMenuRight"
          className="flex items-center text-sm text-[#333333] space-x-4 py-2"
        >
          <li className="relative">
            <div className="flex items-center">
              <AiOutlineShoppingCart size={22} />
              {cart?.count > 0 ? (
                <div className="absolute top-0 right-[-5px] -mt-1 bg-red-500 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center">
                  {cart.count}
                </div>
              ) : null}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
