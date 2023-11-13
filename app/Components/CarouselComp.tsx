"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  const slideImages = [
    { id: 1, src: "/dog.jpg", alt: "Dog Image" },
    { id: 2, src: "/puppies.jpg", alt: "Cat Image" },
    { id: 3, src: "/dog.jpg", alt: "Bird Image" },
    // Add more slide images as needed
  ];

  return (
    <div className="max-w-[300px] mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
      >
        {slideImages.map((slide) => (
          <div key={slide.id}>
            <Image width={300} height={225} src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
