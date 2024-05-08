import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Distance = () => {
  const t = useTranslations("ABOUT");
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center sm:hidden">
        <div className="w-[50%] h-full bg-customWhite text-customBlack flex items-center justify-center p-[60px]">
          <motion.h1
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            className="text-[52px] font-bold font-sans p-10 uppercase"
          >
            Возможность преодолеть Дистанции
          </motion.h1>
        </div>
        <div className="w-[50%] h-full">
          <div className="w-full h-[60%] flex items-center justify-center bg-customWhite">
            <motion.div
              variants={{
                initial: {
                  width: "0%",
                },
                animate: {
                  width: "100%",
                  transition: {
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              whileInView="animate"
              className="w-full h-full bg-customGreen flex items-center justify-center text-[60px] font-bold tracking-widest text-customBlack"
            >
              <motion.h1
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  animate: {
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                    },
                  },
                }}
              >
                12KM
              </motion.h1>
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  width: "0%",
                },
                animate: {
                  width: "100%",
                  transition: {
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              whileInView="animate"
              className="w-full h-full bg-customRed flex items-center justify-center text-[60px] font-bold tracking-widest text-customWhite"
            >
              <motion.h1
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  animate: {
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                    },
                  },
                }}
              >
                5KM
              </motion.h1>
            </motion.div>
          </div>
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                y: 20,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="initial"
            whileInView="animate"
            className="w-full h-[40%] bg-customBlack flex items-center justify-center"
          >
            <h1 className="text-customWhite font-bold text-[60px] tracking-widest">
              2000 сом
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="w-[100vw] h-[400px] justify-center items-center hidden sm:flex flex-col">
        <div className="w-full h-[45%] bg-customWhite text-[28px] px-5 font-bold flex items-center pr-20 leading-9 uppercase">
          Возможность преодолеть Дистанции
        </div>
        <div className="w-full h-[30%] flex items-center justify-center">
          <div className="w-[50%] h-full bg-customGreen text-customBlack font-bold text-[30px] flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-customBlack font-bold text-[30px]"
            >
              12КМ
            </motion.h1>
          </div>
          <div className="w-[50%] h-full bg-customRed text-customWhite font-bold text-[30px] flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-customWhite font-bold text-[30px]"
            >
              5КМ
            </motion.h1>
          </div>
        </div>
        <div className="w-full h-[25%] bg-customBlack flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-customWhite font-bold text-[30px]"
          >
            2000 сом
          </motion.h1>
        </div>
      </section>
    </>
  );
};
