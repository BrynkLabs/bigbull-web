import React from "react";
import InfiniteScrollCards from "./InfiniteScrollCards";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-black pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0 flex h-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center justify-center">
        {new Array(4).fill(0).map((_, index) => {
          const quarter = Math.floor(images.length / 4);
          const start = index * quarter;
          const end = start + quarter;

          return (
            <InfiniteScrollCards
              key={index}
              images={images.slice(start, end)}
              scrollSpeed={50 + index * 10}
              reverse={false}
            />
          );
        })}
      </div>
    </section>
  );
};

const images = [
  "2c1876bbfe1656e842d8b2494a1506f25878e487.png",
  "6bc891e60357ff5669f555df9d969106b3bff73a.png",
  "6ce4fba934081bcdd02de8cc313eb6cec92c0394.png",
  "7b25284405d3bc808e45aa6a181e9417a8c9607a.png",
  "20f0db5f4c446ebd70750ca9b36195cfc45f53aa.png",
  "819af5f24eaae0cd6bb099cb21e682ee106e4bea.png",
  "26558bc9e2ee97d1154ad3b37eee577ca286e101.png",
  "139662b7d7e0d150cd5291ba8c63612f2c6b12c7.png",
  "479056af9d2f8bf74a2c9067fcae0bbb2dfc3728.png",
  "357045101ddda3274627694cd74d7844677dfbe0.png",
  "b14e71b65dc72b4d71782576b10dabe1b03b4536.png",
  "cf801e0de40ffe52284ccb9f69a1cac2bd67ccb8.png",
  "dd73b6105093f4395b4bbf35766c672024b8c4ef.png",
  "e3923a94b113dccad438a97d736b1bc063335614.png",
  "eb2a3277fd6c89febafaef097a0818a209fc2384.png",
  "ff1bcf544c3ebfaf068cfd7a49f64fb2f92b9b38.png",
];

export default Hero;