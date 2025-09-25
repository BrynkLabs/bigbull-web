"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface InfiniteScrollCardsProps {
  images: string[];
  scrollSpeed?: number; 
  reverse?: boolean; 
}

const InfiniteScrollCards: React.FC<InfiniteScrollCardsProps> = ({
  images,
  scrollSpeed = 60,
  reverse = false,
}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedEvents = [...images, ...images];

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight / 2);
    }
  }, []);

  return (
    <div className="min-w-[200.95px] sm:min-w-[329.5px] transform rotate-[11.63deg] -mt-[50px]">
      <div
        className="overflow-hidden relative"
        style={{
          height: `calc(100% + 50px)`,
        }}
      >
        <div
          ref={containerRef}
          className="flex flex-col gap-4 animate-scroll"
          style={{
            animation: `${scrollSpeed}s linear infinite scrollAnimation ${
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
        @keyframes scrollAnimation {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-${containerHeight}px);
          }
        }

        .animate-scroll {
          animation-play-state: running;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollCards;
