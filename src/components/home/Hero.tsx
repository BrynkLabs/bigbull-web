"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import InfiniteScrollCards from "./InfiniteScrollCards";

const images: string[] = [
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

const Hero: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const fourth = Math.ceil(images.length / 4);

  const firstPart = images.slice(0, fourth);
  const secondPart = images.slice(fourth, 2 * fourth);
  const thirdPart = images.slice(2 * fourth, 3 * fourth);
  const fourthPart = images.slice(3 * fourth);
  const loop = [firstPart, secondPart, thirdPart, fourthPart];

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes subtleVibration {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(2px, -2px) rotate(-0.4deg);
          }
          50% {
            transform: translate(-2px, 2px) rotate(0.4deg);
          }
          75% {
            transform: translate(2px, 2px) rotate(-0.4deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        .vibrate-slow {
          animation: subtleVibration 4s infinite ease-in-out;
        }
      `}</style>

      <div className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 flex h-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center bg-black opacity-40 z-[10] justify-center"/>
        <div className="absolute inset-0 flex h-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center justify-center">
          {new Array(4).fill(0).map((_, index) => {
            return (
              <InfiniteScrollCards
                key={index}
                images={loop[index]}
                scrollSpeed={50 + index * 10}
                reverse={index % 2 == 1}
              />
            );
          })}
        </div>
        <div className="relative z-40 flex flex-col items-center mt-[160px] min-h-screen text-center px-6">
          {/* Heading */}
          <div className="relative inline-block px-6 py-4">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-4 z-10">
              <div className="w-[700px] h-[400px] rounded-full bg-black opacity-90 blur-2xl"></div>
            </div>

            <div className="flex flex-col gap-[25px] justify-center items-center z-30">
              <h1
                className={`relative z-30 uppercase text-white leading-[31px] sm:leading-[46px]  text-3xl sm:text-[25px] tracking-wider md:text-3xl lg:text-5xl font-bold mb-8 transition-all duration-1000 ${
                  isAnimated
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-125"
                }`}
                style={{
                  animation: isAnimated
                    ? "zoomOutUp 0.8s ease-out 0.2s both"
                    : "none",
                  fontFamily: "TT-Supermolot-Neue-Trial-Extended",
                }}
              >
                <span className="text-[#C5F832]">Big Bull: </span>
                Hyderabad&apos;s <br /> Ultimate Immersive Club <br />{" "}
                Experience
              </h1>
              <div className="relative w-full h-full">
                <div className="absolute z-30 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[250px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="830"
                    height="830"
                    viewBox="0 0 830 830"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_216_11048)">
                      <circle cx="415" cy="415" r="201" fill="#C5F832" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_216_11048"
                        x="0"
                        y="0"
                        width="830"
                        height="830"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="107"
                          result="effect1_foregroundBlur_216_11048"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <Image
                  src="/images/home/big-bull-logo.png"
                  className="z-30 absolute top-0 left-1/2 transform -translate-x-1/2"
                  height={400}
                  width={400}
                  alt="Big Bull logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        className="absolute bottom-0 left-0 w-full bg-black text-white py-3 px-6 z-20"
        autoFill={true}
        speed={100}
      >
        <div className="flex items-center space-x-2 mx-6">
          <Image
            src={"/images/big-bull-logo-1.png"}
            alt="Big Bull Image"
            width={44}
            height={44}
          />
          <h2
            className="relative text-white text-lg md:text-xl lg:text-3xl font-[600]"
            style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
          >
            THE FUTURE OF CLUBBING
          </h2>
        </div>
      </Marquee>
    </>
  );
};

export default Hero;
