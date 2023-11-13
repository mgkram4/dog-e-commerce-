"use client";

import Image from "next/image";
import MainLayout from "./layouts/MainLayout";
import CarouselComp from "./Components/CarouselComp";
import Product from "./Components/Product";

export default function Home() {
  const Products = [
    {
      id: 1,
      title: "Pet Bed",
      src: "/dog.jpg",
      price: 2999, // Price in cents (2999 cents = $29.99)
      description: "Cozy pet bed for your furry friend's comfort.",
    },
    {
      id: 2,
      title: "Dog Leash",
      src: "/dog.jpg",
      price: 1499, // Price in cents (1499 cents = $14.99)
      description: "Durable leash for walking your dog in style.",
    },
    {
      id: 3,
      title: "Cat Toy Set",
      src: "/dog.jpg",
      price: 999, // Price in cents (999 cents = $9.99)
      description: "Entertaining toy set to keep your cat active and happy.",
    },
  ];

  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

        <div className="grid grid-cols-3 gap-4">
          {Products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
