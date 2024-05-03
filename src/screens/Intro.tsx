import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

export const Intro = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center bg-banner bg-cover bg-center">
      <motion.article
        className="flex flex-col items-center justify-center gap-5"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="text-[80px] font-bold text-center text-customWhite tracking-wider top-[-18vw]"
        >
          BISHKEK МАРАФОН
        </motion.h1>
        <div className="flex items-center gap-5">
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              },
            }}
            className="text-[28px] font-bold text-center text-customGreen tracking-wider top-[-18vw]"
          >
            АЛА-АРЧА
          </motion.h1>
          <motion.div
            initial={{ width: "10px" }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.5 }}
            className="h-0 border-[3px] rounded-sm border-customWhite"
          ></motion.div>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -15 },
              visible,
            }}
            className="text-[28px] font-bold text-center text-customGreen tracking-wider top-[-18vw]"
          >
            02.06.2024
          </motion.h1>
        </div>
        <button className="overflow-hidden relative w-[189px] font-light text-lg h-10 border border-customGreen text-white rounded-md cursor-pointer z-10 group">
          Подробнее
          <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customWhite rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-300 duration-700 origin-right"></span>
          <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customGreen rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-right"></span>
          <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customRed rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-300 origin-right"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-[20%] right-[20%] z-10">
            Подробнее
          </span>
        </button>
      </motion.article>
    </section>
  );
};
