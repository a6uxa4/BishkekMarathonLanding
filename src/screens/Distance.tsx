import { motion } from "framer-motion";

export const Distance = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center">
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
        <div className="w-full flex items-center justify-between bg-customWhite">
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
            className="w-full h-[480px] bg-customGreen flex items-center justify-center text-[60px] font-bold tracking-widest text-customBlack"
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
                  delay: 1,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            className="w-full h-[480px] bg-customRed flex items-center justify-center text-[60px] font-bold tracking-widest text-customWhite"
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
          className="w-full h-[310px] bg-customBlack flex items-center justify-center text-customWhite font-bold text-[60px] tracking-widest"
        >
          2000 сом
        </motion.div>
      </div>
    </section>
  );
};
