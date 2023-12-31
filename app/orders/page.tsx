"use client";

// Import necessary modules
import { CiDeliveryTruck } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "../layouts/MainLayout";

// Define the Orders component
export default function Orders() {
  // Sample orders data
  const orders = [
    {
      id: 1,
      stripe_id: 12121212,
      name: "test",
      address: "test",
      zipcode: "test",
      city: "test",
      country: "test",
      total: 0,
      orderItem: [
        {
          id: 1,
          title: "Pet Bed", // Change 'name' to 'title'
          src: "/dog.jpg", // Change 'src' to 'url'
        },
      ],
    },
  ];

  // Render the component
  return (
    <MainLayout>
      <div className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
        <div className="bg-white w-full p-6 min-h-[150px]">
          <div className="flex items-center text-xl">
            <CiDeliveryTruck className="text-green-500" size={35} />
            <span className="pl-4">Orders</span>
          </div>

          {orders.length < 1 ? (
            <div className="flex items-center justify-center">
              You have no order history
            </div>
          ) : null}

          {orders.map((order) => (
            <div key={order?.id} className="text-sm pl-[50px]">
              <div className="border-b py-1">
                <div className="pt-2">
                  <span className="font-bold mr-2">Stripe ID:</span>
                  {order?.stripe_id}
                </div>

                <div className="pt-2">
                  <span className="font-bold mr-2">Delivery Address:</span>
                  {order?.name}, {order?.address}, {order?.zipcode},{" "}
                  {order?.city}, {order?.country}
                </div>

                <div className="pt-2">
                  <span className="font-bold mr-2">Total:</span>$
                  {order?.total / 100}
                </div>

                <div className="flex items-center gap-4">
                  {order?.orderItem.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <Link
                        href="#"
                        // Change the href value to an appropriate link or an empty string
                        className="py-1 hover:underline text-blue-500 font-bold"
                      >
                        <Image
                          className="rounded"
                          width={120}
                          height={120}
                          src={item.src}
                          alt={item.title}
                        />
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
