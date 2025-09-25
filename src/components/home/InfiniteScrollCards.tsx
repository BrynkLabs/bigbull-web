"use client";
import Image from "next/image";
import React from "react";

interface InfiniteScrollCardsProps {
  images: string[];
  scrollSpeed?: number; // seconds for full scroll
  reverse?: boolean; // scroll direction
}

const InfiniteScrollCards: React.FC<InfiniteScrollCardsProps> = ({
  images,
  scrollSpeed,
  reverse,
}) => {
  const duplicatedEvents = [...images, ...images, ...images];

  const cardWidth = 329.5; // desktop width
  const rotationAngle = 11.63; // degrees
  const extraHeight = Math.ceil(cardWidth * Math.sin((rotationAngle * Math.PI) / 180));

  return (
    <div className="min-w-[200.95px] sm:min-w-[329.5px] transform rotate-[11.63deg] -mt-[50px]">
      {/* Outer container to prevent clipping */}
      <div
        className="overflow-hidden relative"
        style={{
          height: `calc(100% + ${extraHeight}px)`, // Add extra height to avoid clipping
        }}
      >
        <div
          className="flex flex-col gap-4 animate-vertical-scroll"
          style={{
            animation: `vertical-scroll ${scrollSpeed || 60}s linear infinite ${
              reverse ? "reverse" : ""
            }`,
          }}
        >
          {duplicatedEvents.map((image, index) => (
            <div
              key={index}
              className="relative w-full rounded-lg overflow-hidden"
            >
              <Image
                src={`/home/${image}`}
                alt={`image-${index}`}
                width={329}
                height={473}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes vertical-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-${images.length * 400 + extraHeight}px);
          }
        }

        .animate-vertical-scroll {
          animation: vertical-scroll 60s linear infinite;
        }

        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollCards;
