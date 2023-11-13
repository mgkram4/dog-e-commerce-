"use client";

import Image from "next/image";
import Link from "next/link";

export default function TextInput({
  string,
  placeholder,
  error,
  onUpdate,
}: any) {
  return (
    <>
      <input
        className="w-full bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none"
        value={string || ""}
        onChange={(event) => onUpdate(event.target.value)} // Keep this line
        type="text"
        autoComplete="off"
      />

      <div className="text-red-500 text-[14px] font-semibold">
        {error ? error : null}
      </div>
    </>
  );
}
