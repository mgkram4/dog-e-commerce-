"use client";

import CartItem from "../Components/CartItem";
import CheckoutItem from "../Components/CheckoutItem";
import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

export default function Checkout() {
  const Product = {
    id: 1,
    name: "Pet Bed",
    src: "/dog.jpg",
    price: 2999, // Price in cents (2999 cents = $29.99)
    description: "Cozy pet bed for your furry friend's comfort.",
  };

  return (
    <MainLayout>
      <div className="mt-4 max-w-[1100px] mx-auto px-4">
        <div className="text-xl font-bold mt-4 mb-4">Checkout</div>
        <div className="bg-white rounded-lg p-4 border mb-4">
          <div className="text-lg font-semibold mb-2">Shipping Address</div>
          <ul className="text-sm mt-2 space-y-1">
            <li>Name: test</li>
            <li>Address: test</li>
            <li>Zip Code: test</li>
            <li>City: test</li>
            <li>Country: test</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg">
          <CheckoutItem key={Product.id} product={Product} />
        </div>
        <div className="bg-white rounded-lg mt-4">
          <div className="p-4">
            <div className="flex items-baseline justify-between text-sm mb-1">
              <div>Items (3)</div>
              <div>13</div>
            </div>
            <div className="flex items-center justify-between text-sm mb-2">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="border-t border-gray-300 mb-2" />
            <div className="flex items-center justify-between my-2">
              <div className="font-semibold">Order total</div>
              <div className="text-xl font-semibold">13</div>
            </div>
            <form className="mt-2">
              <div
                id="card-element"
                className="border border-gray-500 p-2 rounded-sm"
              />
              <p
                id="card-error"
                role="alert"
                className="text-red-700 text-center font-semibold mt-2"
              >
                {/* Your error message goes here */}
              </p>
              <button className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full">
                Confirm and pay
              </button>
            </form>
          </div>

          <div className="flex items-center p-4 justify-center gap-2 border-t">
            <Image
              width={150}
              height={150}
              src="/puppies.jpg"
              alt="Test"
              className="rounded-xl"
            />
            <div className="font-semibold">Simply Pet</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
