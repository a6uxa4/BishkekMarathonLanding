import { motion } from "framer-motion";

export const Conditions = () => {
  const data = [
    "Удостоверение личности",
    "Участие в забеге осуществляется с 15 лет",
    "Стартовый взнос 2000",
  ];
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center">
      <div className="w-[50%] h-full bg-customBlack text-customWhite flex items-center justify-center p-[59px]">
        <ul className="w-full h-full flex flex-col items-start justify-around">
          {data.map((item, index) => (
            <motion.li
              className="text-[26px] font-extralight text-customGreen border-b py-2 border-customGreen cursor-pointer"
              key={index}
              variants={{
                initial: {
                  opacity: 0,
                  x: 50,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.5 * index,
                  },
                },
              }}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="w-[50%] h-full bg-conditions relative flex items-center justify-center">
        <h1 className="absolute z-20 text-customWhite text-[46px] font-bold leading-5">
          Для участия необходимо
        </h1>
        <div className="w-full h-full bg-customGreen opacity-30"></div>
      </div>
    </section>
  );
};
