
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
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedEvents = [...images, ...images, ...images];

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        const singleSetHeight = containerRef.current.scrollHeight / 3;
        setContainerHeight(singleSetHeight);
        setIsReady(true);
      }
    };

    const timer = setTimeout(calculateHeight, 100);
    
    window&&window.addEventListener('resize', calculateHeight);
    
    return () => {
      clearTimeout(timer);
      window&&window.removeEventListener('resize', calculateHeight);
    };
  }, [images]);

  // Don't render animation until height is calculated
  if (!isReady) {
    return (
      <div className="min-w-[200.95px] sm:min-w-[329.5px] transform rotate-[11.63deg] -mt-[50px]">
        <div className="overflow-hidden relative" style={{ height: `calc(100% + 50px)` }}>
          <div ref={containerRef} className="flex flex-col gap-4">
            {duplicatedEvents.map((image, index) => (
              <div
                key={index}
                className="relative w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/home/${image}`}
                  alt={`image-${index}`}
                  width={329}
                  height={473}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
          className="flex flex-col gap-4"
          style={{
            animation: `scrollAnimation ${scrollSpeed}s linear infinite ${
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
                src={`/images/home/${image}`}
                alt={`image-${index}`}
                width={329}
                height={473}
                className="w-full h-auto object-contain rounded-lg"
                priority={index < images.length}
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

        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollCards;
