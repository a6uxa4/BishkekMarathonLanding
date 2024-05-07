import { motion } from "framer-motion";
import Image from "next/image";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export const About = () => {
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center relative sm:hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute text-customGreen z-20 text-[48px] font-bold bottom-32"
        >
          ALA-ARCHA
        </motion.h1>
        <div className="w-[50%] h-full bg-customBlack text-customWhite flex items-center justify-center p-[59px]">
          <p className="leading-14 text-[28px] font-extralight">
            Маршрут полумарафона пройдет в живописном национальном парке
            Ала-Арча. Участники смогут вдохнуть свежий горный воздух, делая этот
            маршрут не только спортивным вызовом, но и настоящим праздником для
            души.
          </p>
        </div>
        <motion.div
          className="w-[50%] h-full"
          variants={{
            initial: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask },
            animate: {
              WebkitMaskImage: visibleMask,
              maskImage: visibleMask,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
        >
          <Image
            className="w-full h-full object-fill"
            width="500"
            height="500"
            src={`/images/About.webp`}
            alt=""
          />
        </motion.div>
      </section>
      <section className="w-[100vw] h-[350px] hidden sm:flex relative">
        <div className="w-full h-full absolute z-20 flex flex-col items-start justify-center px-5 gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-customGreen text-[18px] font-bold"
          >
            ALA-ARCHA
          </motion.h1>
          <p className="leading-14 text-[14px] font-light text-customWhite">
            Маршрут полумарафона пройдет в живописном национальном парке
            Ала-Арча. Участники смогут вдохнуть свежий горный воздух, делая этот
            маршрут не только спортивным вызовом, но и настоящим праздником для
            души.
          </p>
        </div>
        <div className="w-[40%] h-full bg-customBlack text-customWhite flex items-center justify-center p-[59px]"></div>
        <motion.div
          className="w-[60%] h-full"
          variants={{
            initial: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask },
            animate: {
              WebkitMaskImage: visibleMask,
              maskImage: visibleMask,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
        >
          <Image
            className="w-full h-full object-fill"
            width="500"
            height="500"
            src={`/images/About.webp`}
            alt=""
          />
        </motion.div>
      </section>
    </>
  );
};
