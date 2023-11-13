"use client";

import React from "react"; // Make sure to import React
import Image from "next/image";
import Link from "next/link";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";

export default function SimilarProduct() {
  const Products = [
    {
      id: 1,
      name: "Pet Bed",
      src: "/dog.jpg",
      price: 2999, // Price in cents (2999 cents = $29.99)
      description: "Cozy pet bed for your furry friend's comfort.",
    },
    {
      id: 2,
      name: "Dog Leash",
      src: "/dog.jpg",
      price: 1499, // Price in cents (1499 cents = $14.99)
      description: "Durable leash for walking your dog in style.",
    },
    {
      id: 3,
      name: "Cat Toy Set",
      src: "/cat.jpg", // Corrected image path for cat
      price: 999, // Price in cents (999 cents = $9.99)
      description: "Entertaining toy set to keep your cat active and happy.",
    },
  ];

  return (
    <div className="">
      <div className="border-b py-1 max-w-[1200px] mx-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 mt-4">
            Similar sponsored items
          </div>

          {Products.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {Products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader size={30} className="text-blue-400 animate-spin" />
                Loading Products...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
