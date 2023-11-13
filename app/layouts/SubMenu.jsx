import React from "react";

export default function SubHeader() {
  const menuItems = [
    { id: 1, name: "Dogs" },
    { id: 2, name: "Cats" },
    { id: 3, name: "Birds" },
    { id: 4, name: "Fish" },
    { id: 5, name: "Small Pets" },
    { id: 6, name: "Accessories" },
    { id: 7, name: "Toys" },
    { id: 8, name: "Healthcare" },
    { id: 9, name: "Grooming" },
    { id: 10, name: "Sales" },
  ];

  return (
    <div className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul className="flex flex-wrap items-center justify-center text-[13px] text-[#33333] px-2 py-2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="px-2 py-1 md:px-3 md:py-0 hover:underline cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
