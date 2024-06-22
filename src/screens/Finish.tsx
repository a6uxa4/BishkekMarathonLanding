import { useTranslations } from "next-intl";

export const Finish = () => {
  const t = useTranslations("FINISH");
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center sm:h-[375px] sm:snap-align-none">
      <div className="w-[50%] h-full bg-customRed flex flex-col items-start justify-center gap-5 px-24 sm:hidden">
        <h1 className="text-customGreen text-[50px]">{t("TITLE")}</h1>
        <div className="flex flex-col gap-10 text-[20px] pr-24">
          <span className="text-customWhite">
            {t("DESCRIBTION_1")}{" "}
            <span className="text-customGreen">{t("SLUG_1")}</span>
          </span>
          <span className="text-customWhite">
            {t("DESCRIBTION_2")}{" "}
            <span className="text-customGreen">{t("SLUG_2")}</span>
          </span>
        </div>
      </div>
      <div className="w-[50%] h-full bg-finish bg-right object-cover bg-cover pt-3 sm:p-0 sm:w-full sm:relative">
        <div className="absolute top-10 flex-col items-start justify-center gap-5 px-4 hidden sm:flex">
          <h1 className="text-customGreen text-[28px]">{t("TITLE")}</h1>
          <div className="flex flex-col gap-10 text-[16px]">
            <span className="text-customWhite">
              {t("DESCRIBTION_1")}{" "}
              <span className="text-customGreen">{t("SLUG_1")}</span>
            </span>
            <span className="text-customWhite">
              {t("DESCRIBTION_2")}{" "}
              <span className="text-customGreen">{t("SLUG_2")}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
