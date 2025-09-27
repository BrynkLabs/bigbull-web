import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-32 flex flex-col justify-center gap-[32] text-center text-white"
      style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
    >
      <div className="flex flex-col gap-[33] items-center">
        <Image
          src="/images/big-bull-light-logo.png"
          height={80.72}
          width={154.71}
          alt="Big Bull company light logo"
        />
        <div className="h-[8] w-[32] bg-white" />
      </div>
      <div className="flex flex-col gap-[24] items-center">
        <div className="flex gap-[16]">
          <a
            href={"https://wa.me/919078814462"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/layout/social-whatsapp.svg"
              height={28}
              width={28}
              alt="WhatsApp icon to contact Big Bull"
            />
          </a>
          <a
            href={"https://www.instagram.com/bigbull.hyd/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/layout/social-instagram.svg"
              height={28}
              width={28}
              alt="Instagram icon for Big Bull Hyd profile"
            />
          </a>
        </div>
        <div className="flex flex-col-reverse sm:flex-col gap-[24] items-center">
          <div className="flex flex-col items-center gap-[10]">
            <p className="font-semibold text-[11] sm:text-[14]">
              © 2025 BIG BULL
            </p>

            <address className="font-medium text-[11] sm:text-[14]">
              For any queries, call{" "}
              <span className="whitespace-nowrap">
                <a href="tel:+919078814462">+91 9078814462</a>
              </span>
            </address>
          </div>
          <div className="flex flex-col items-center gap-[4]">
            <p className="font-regular leading-[1.5] text-[12] tracking-[2px]">
              Powered By
            </p>
              <a href="https://brynklab.com" rel="noopener noreferrer">
                <div className="relative w-[142.61] h-[27.56] sm:w-[197.03] sm:h-[37.71]">
                  <Image
                    src="/images/layout/brynk-labs-light-logo.png"
                    fill
                    className="Object-contain"
                    alt="rynk Labs light logo"
                  />
                </div>
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
