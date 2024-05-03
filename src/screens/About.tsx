"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export const About = () => {
  const [viewImage, setViewImage] = useState(false);

  return (
    <motion.section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute text-customGreen z-20 text-[48px] font-bold bottom-32"
      >
        ALA-ARCHA
      </motion.h1>
      <div className="w-[50%] h-full bg-customBlack text-customWhite flex items-center justify-center p-[59px]">
        <p className="leading-14 text-[28px] font-extralight">
          Маршрут полумарафона пройдет в живописном национальном парке Ала-Арча.
          Участники смогут вдохнуть свежий горный воздух, делая этот маршрут не
          только спортивным вызовом, но и настоящим праздником для души.
        </p>
      </div>
      <motion.div
        className="w-[50%] h-full"
        initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
        animate={
          viewImage && { WebkitMaskImage: visibleMask, maskImage: visibleMask }
        }
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          className="w-full h-full object-fill"
          width="500"
          height="500"
          src={`/images/About.webp`}
          alt=""
          onLoad={() => setViewImage(true)}
        />
      </motion.div>
    </motion.section>
  );
};
