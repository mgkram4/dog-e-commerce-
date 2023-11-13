"use client";

import { Products } from "@prisma/client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CheckoutItem({ product }: { product: Products }) {
  const pathnamme = usePathname();
  return (
    <div className="flex flex-col  mb-2 border p-4 rounded-xl">
      <Image
        alt="Product Image"
        width={100}
        height={50}
        className="rounded cursor-pointer"
        src={product.src}
      />
      <div className="overflow-hidden pl-2">
        <div className="font-semibold">{product.name}</div>
        <div className="font-bold text-lg">
          ${((product?.price * 1.2) / 100).toFixed(2)}
        </div>
      </div>

      <div className="text-sm mt-2">
        {product?.description.substring(0, 150)}...
      </div>

      {pathnamme == "/cart" ? (
        <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer"></div>
      ) : null}
    </div>
  );
}
