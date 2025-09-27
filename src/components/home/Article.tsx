import Image from "next/image";
import React from "react";

const Article = () => {
  return (
    <section className="mt-[16px] sm:mt-[150px] flex justify-center px-4">
      <article className="max-w-[755px] w-full p-[12px] bg-white flex flex-col sm:flex-row gap-[32px] sm:gap-[44px] items-center">
        {/* Image Section */}
        <div className="relative w-full sm:w-[270.88px] aspect-[270.88/300] flex-shrink-0">
          <Image
            fill
            src="/images/home/wow-img.png"
            alt="Wow Image"
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-[12px] sm:gap-[16px] flex-1">
          <div className="bg-black h-[8px] w-[32.14px]" />
          <h2
            style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
            className="text-[20px] sm:text-[23.25px] font-bold  text-black uppercase leading-[28.8px]"
          >
            25,000 sq. ft. premium nightclub
          </h2>
          <p
            className="text-[12.59] sm:text-[14px] leading-[20px] font-[400] break-words text-black text-justify"
            style={{ fontFamily: "TT-Supermolot-Neue-Trial" }}
          >
            With a world-renowned Funktion One line array sound system, offering
            a
            <span className="text-[#79A105]">
              &nbsp;360-degree immersive sound experience.&nbsp;
            </span>
            The club is outfitted with&nbsp;
            <span className="text-[#79A105]">
              80 hydraulic motors and an automated mesh LED ceiling,&nbsp;
            </span>
            setting a new benchmark in nightclub production.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Article;
