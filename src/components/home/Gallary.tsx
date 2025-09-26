"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";

const images: string[] = [
  "gallary-img-1.png",
  "gallary-img-2.png",
  "gallary-img-3.png",
  "gallary-img-4.png",
  "gallary-img-5.png",
];

const Gallary = ({}) => {
  return (
    <section className="mt-[51px] sm:mt-[100px]">
       <h2 className="uppercase font-[700] sm:text-[40px] text-[24px] mb-[24px] sm:mb-[50px] text-center " style={{fontFamily: "TT-Supermolot-Neue-Trial-Expanded"}}>Gallery</h2>
      <Marquee
        className="absolute bottom-0 left-0 w-full bg-black text-white py-3 px-6 z-20"
        autoFill={true}
        speed={100}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              className="relative ms-[4.68px] sm:mx-[8px] w-[176.5px] border sm:w-[300px] border-x-[5px] sm:border-x-[8px] border-t-[5px] border-b-[15px] sm:border-t-[8px] sm:border-b-[26px] h-[240px] sm:h-[410px] bg-white "
              key={`gallary-img-${index}`}
            >
              <Image
                fill
                alt={`Gallary Image ${image}`}
                src={`/images/home/${image}`}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Gallary;
