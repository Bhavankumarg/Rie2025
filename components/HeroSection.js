"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

const images = [
  "/home/fresh_prespectives.png",
  "/home/meaningful_networking.png",
  "/home/trecking.png",
  "/home/cheers.png",
  "/home/dance.png",
  "/home/discuss.png",
  // "/home/game_changing_ideas.png",
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-20 py-14 bg-[#150539]">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-left md:pl-8">
        <Image
          src="/home/remix.png"
          alt="Logo"
          className="mb-4"
          width={300}
          height={300}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-white">January 9-12, 2025</h1>
        <p className="mt-4 text-lg md:text-xl text-white pt-6 md:pt-8 w-96">
          Immerse Yourself In a Multiverse of Creativity, Culture, and Community.
        </p>
        <button className="mt-4 p-2 bg-[#EC3C70] w-36 text-white">Register</button>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div className="min-w-full" key={index}>
                <Image
                  src={src}
                  
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                  width={600}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
