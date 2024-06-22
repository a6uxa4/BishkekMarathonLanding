import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Conditions = () => {
  const t = useTranslations("CONDITIONS");

  const DATA = ["SLUG_1", "SLUG_2", "SLUG_3"];

  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center snap-center sm:hidden">
        <div className="w-1/2 h-full bg-customBlack text-customWhite flex items-center justify-center p-16">
          <ul className="w-full h-full flex flex-col items-start justify-around">
            {DATA.map((item, index) => (
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
                {t(item)}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 h-full bg-conditions relative flex items-center justify-center bg-no-repeat bg-cover bg-center">
          <h1 className="absolute z-20 text-customWhite text-[46px] font-bold leading-5">
            {t("TITLE")}
          </h1>
        </div>
      </section>
      <section className="w-screen h-[460px] hidden sm:block">
        <div className="w-full h-[220px] bg-conditionsM"></div>
        <div className="w-full h-[240px] bg-customBlack flex flex-col items-center py-5">
          <h1 className="text-customWhite text-[22px] font-semibold">
            {t("TITLE")}
          </h1>
          <ul className="w-full h-full px-8 flex flex-col gap-5">
            {DATA.map((item, index) => (
              <motion.li
                className="text-[14px] font-extralight text-customGreen border-b py-2 border-customGreen"
                key={index}
                variants={{
                  initial: {
                    opacity: 0,
                    x: 20,
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
                {t(item)}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
