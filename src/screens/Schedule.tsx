import { useSectionInView } from "@/hooks/useSectionInView";
import { useTranslations } from "next-intl";

export const Schedule = () => {
  const { ref } = useSectionInView("Расписание");
  const t = useTranslations("SCHEDULE");

  return (
    <>
      <section
        ref={ref}
        id="schedule"
        className="w-[100vw] h-[100vh] flex justify-center items-center snap-center sm:hidden"
      >
        <div className="w-[50%] h-full bg-schedule relative flex items-center justify-center bg-center bg-cover">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-customGreen text-[46px] font-extralight">
              {t("TITLE")}
            </h1>
            <span className="text-customGreen text-[40px] font-extralight">
              07.07.2024
            </span>
          </div>
        </div>
        <div className="w-[50%] h-full bg-customBlack flex items-center">
          <div className="w-full flex flex-col">
            <div className="group w-full flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
              <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
                07:00 - 07:35
              </h1>
              <p>{t("SLUG_1")}</p>
            </div>
            <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
              <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
                07:35 - 08:45
              </h1>
              <p>{t("SLUG_2")}</p>
            </div>
            <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
              <h1 className="min-w-[160px] text-customGreen group-hover:text-customBlack">
                08:45 - 09:00
              </h1>
              <p className="text-[20px]">{t("SLUG_3")}</p>
            </div>
            <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
              <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
                09:00 - 09:20
              </h1>
              <p>{t("SLUG_4")}</p>
            </div>
            <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
              <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
                11:00 - 14:30
              </h1>
              <p>{t("SLUG_5")}</p>
            </div>
            <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
              <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
                15:30
              </h1>
              <p>{t("SLUG_6")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[520px] bg-schedule bg-cover bg-center relative sm:flex flex-col items-center justify-center hidden gap-5 scroll-mt-12">
        <div className="w-full h-full absolute bg-customBlack/70"></div>
        <div className="flex items-center justify-center flex-col text-customGreen font-semibold z-20 mt-5">
          <h1 className="text-[22px]">{t("TITLE")}</h1>
          <h1 className="text-[18px]">07.07.2024</h1>
        </div>
        <div className="w-full h-full flex px-5 z-20 gap-5">
          <div className="w-[40%] h-full flex flex-col justify-around">
            <h1 className="text-customGreen">07:00 - 07:35</h1>
            <h1 className="text-customGreen">07:35 - 08:45</h1>
            <h1 className="text-customGreen">08:45 - 09:00</h1>
            <h1 className="text-customGreen">09:00 - 09:20</h1>
            <h1 className="text-customGreen">11:00 - 14:30</h1>
            <h1 className="text-customGreen">15:30</h1>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-around text-[13px]">
            <h1 className="text-customWhite">{t("SLUG_1")}</h1>
            <h1 className="text-customWhite">{t("SLUG_2")}</h1>
            <h1 className="text-customWhite text-[10px]">{t("SLUG_3")}</h1>
            <h1 className="text-customWhite">{t("SLUG_4")}</h1>
            <h1 className="text-customWhite">{t("SLUG_5")}</h1>
            <h1 className="text-customWhite">{t("SLUG_6")}</h1>
          </div>
        </div>
      </section>
    </>
  );
};
