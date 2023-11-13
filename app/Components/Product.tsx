"use client";

import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl">
      <Link href={`/product/${product.id}`} className="block">
        {product?.src && (
          <Image
            alt="Product Image"
            width={100}
            height={50}
            className="rounded cursor-pointer"
            src={product.src}
          />
        )}
      </Link>
      <div className="pt-2 px-1">
        <Link
          href={`/product/${product.id}`}
          className="block font-semibold text-[15px] hover:underline"
        >
          {product?.title}
        </Link>
        <p className="text-sm text-gray-500">{product?.description}</p>
        <div className="font-extrabold mt-1">
          ${(product?.price / 100).toFixed(2)}
        </div>
        <div className="flex items-center text-[12px] text-gray-500 mt-1">
          <div className="line-through">
            ${((product?.price * 1.2) / 100).toFixed(2)}
          </div>
          <div className="px-1">-</div>
          <div className="line-through">20%</div>
        </div>
      </div>
    </div>
  );
}
