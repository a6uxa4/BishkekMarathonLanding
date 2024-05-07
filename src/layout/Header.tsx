"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { NavbarTop } from "./Navbar";

export const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <header className="w-full h-fit fixed bg-customBlack z-50 sm:hidden">
        <NavbarTop />
        <div className="w-full h-[67px] container py-4 mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between">
            <Image src="/icon/Logo.png" alt="logo" width={128} height={26} />
          </div>
          <div className="relative inset-x-0 z-20 w-auto h-[67px] px-6 py-4 flex items-center justify-end">
            <div className="flex flex-row mx-6">
              <span className="group my-2 text-customWhite mx-10 font-light text-lg transition duration-200 cursor-pointer">
                Расписание
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-customGreen mt-[1px]"></span>
              </span>
              <span className="group my-2 text-customWhite mx-10 font-light text-lg transition duration-200 cursor-pointer">
                Цели
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-customGreen mt-[1px]"></span>
              </span>
              <span className="group my-2 text-customWhite mx-10 font-light text-lg transition duration-200 cursor-pointer">
                О нас
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-customGreen mt-[1px]"></span>
              </span>
            </div>
            <button className="overflow-hidden relative w-[199px] font-light text-lg h-8 border border-customGreen bg-black text-white rounded-md cursor-pointer z-10 group">
              Записаться
              <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customWhite rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-300 duration-700 origin-right"></span>
              <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customGreen rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-right"></span>
              <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customRed rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-300 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-[20%] right-[20%] z-10">
                Записаться
              </span>
            </button>
          </div>
        </div>
        <motion.div
          className="fixed left-0 right-0 h-1 bg-customGreen top-[102px]"
          style={{ scaleX }}
        />
      </header>
      <header className="w-full h-[46px] fixed bg-customWhite z-50 hidden sm:block">
        <div className="w-full h-[46px] container py-4 mx-auto flex justify-between items-center px-5">
          <div className="flex items-center justify-between bg-customBlack">
            <Image src="/icon/Logo.png" alt="logo" width={86} height={16} />
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-[48px] h-[33px] flex items-center justify-center gap-1">
              <span>RU</span>
              <div className="w-[1px] h-full border"></div>
              <span>EN</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
        <motion.div
          className="fixed left-0 right-0 h-[3px] bg-customRed top-[44px]"
          style={{ scaleX }}
        />
      </header>
    </>
  );
};
