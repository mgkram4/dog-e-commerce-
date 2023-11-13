"use client";

import { useCart } from "@/app/context/cart";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Product({ params }: any) {
  const cart = useCart();
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

  const product = Products.find((item) => item.id === Number(params.id));

  const handleCartButtonClick = () => {
    if (cart.isItemAdded) {
      cart.removeFromCart(product);
      toast.info("Removed from cart", { autoClose: 300 });
    } else {
      cart.addToCart(product);
      toast.success("Added to cart", { autoClose: 3000 });
    }
  };

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row px-4 py-10">
          <div className="md:w-1/3 md:pr-8">
            {product?.src ? (
              <Image
                width={200}
                height={200}
                className="rounded-lg"
                src={product.src}
                alt={product.name}
              />
            ) : (
              <div className="w-[40%]"></div>
            )}
          </div>
          <div className="md:w-2/3 px-4 mt-4 md:mt-0">
            <div className="font-bold text-xl">{product?.name}</div>
            <div className="text-sm text-gray-700 pt-2">
              Brand new - Full Warranty
            </div>
            <div className="border-b py-1">
              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:{" "}
                  <span className="font-bold text-[17px] ml-2">New</span>
                </div>
              </div>
            </div>
            <div className="border-b py-1">
              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:{" "}
                    {product?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        USD ${(product.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button
                    onClick={handleCartButtonClick}
                    className={`text-white bg-blue-500 py-2 px-4 md:px-6 rounded-full cursor-pointer ${
                      cart && cart.isItemAdded
                        ? "bg-yellow-400 hover:bg-yellow-600"
                        : "bg-blue-400 hover:bg-blue-600"
                    }`}
                  >
                    {cart && cart.isItemAdded
                      ? "Remove From Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
              <div className="py-1">
                <div className="pt-3">
                  <div className="font-semibold pb-1">Description: </div>
                  <div className="font-semibold ">{product?.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
