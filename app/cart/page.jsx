"use client";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../Components/SimilarProducts";
import Product from "../Components/Product";
import CartItem from "../Components/CartItem"; // Make sure to import CartItem component

export default function Cart() {
  const Product = {
    id: 1,
    name: "Pet Bed",
    src: "/dog.jpg",
    price: 2999, // Price in cents (2999 cents = $29.99)
    description: "Cozy pet bed for your furry friend's comfort.",
  };

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
        <div className="text-2xl font-font my-4">Shopping Cart</div>
        <div className="relative flex items-baseline justify-between gap-2">
          <div className="w-[65%]">
            <CartItem key={Product.id} product={Product} />
          </div>

          <div className="md:w-[33%] absolute top-0 right-0 m-2">
            <div className="bg-white p-4 border">
              <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                Go to Checkout
              </button>

              <div className="flex items-center justify-between mt-4 text-sm mb-1">
                <div>item (3)</div>
                <div>$13.99</div>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm mb-1">
                <div>Shipping:</div>
                <div>Free</div>
              </div>

              <div className="border-b border-gray-300 flex items-center justify-between mt-4 text-sm mb-1" />
              <div>Subtotal</div>
              <div>$13.99</div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </MainLayout>
  );
}
