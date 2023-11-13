"use client";

import { Products } from "@prisma/client";
import Image from "next/image";

export default function CartItem({ product }: { product: Products }) {
  return (
    <div className="relative flex justify-start my-2 border w-full p-6">
      <Image
        alt="Product Image"
        width={100}
        height={50}
        className="rounded cursor-pointer"
        src={product.src}
      />
      <div className="overflow-hidden pl-2 w-full">
        <div className="flex items-center justify-betnween w-full">
          <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
            {product.name}
          </div>
          <div className="font-bold text-lg">
            ${((product?.price * 1.2) / 100).toFixed(2)}
          </div>
        </div>
        <div className="font-semibold mt-2">NEW</div>
        <div className="text-sm mt-2">
          {product?.description.substring(0, 150)}...
        </div>
        <div className="absolute right-0 bottom-0 p-4 text-sm">
          <button className="underline text-blue-500">Remove</button>
        </div>
      </div>
    </div>
  );
}
