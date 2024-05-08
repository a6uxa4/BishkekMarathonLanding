import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export const Help = () => {
  const t = useTranslations("HELP");

  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center relative sm:hidden">
        <div className="absolute text-customBlack z-20 text-[36px] uppercase top-[150px]">
          {t("TITLE")}
        </div>
        <div className="w-[50%] h-full bg-customGreen flex flex-col items-start justify-center gap-5 mt-5">
          <div className="w-full h-[42px] bg-customWhite flex items-center justify-start text-[26px] px-14 uppercase">
            {t("DESCRIBTION_1")}
          </div>
          <p className="text-[24px] font-light w-[80%] pl-14">
            {t("PARAGRAPH_1")}
          </p>
        </div>
        <div className="w-[50%] h-full bg-customWhite flex flex-col items-start justify-center gap-5 mt-5">
          <div className="w-full h-[42px] bg-customGreen flex items-center justify-start text-[26px] px-14 uppercase">
            {t("DESCRIBTION_2")}
          </div>
          <p className="text-[24px] font-light w-[80%] pl-14">
            {t("PARAGRAPH_2")}
          </p>
        </div>
      </section>
      <section className="w-full h-fit bg-customWhite hidden sm:block">
        <h1 className="text-customBlack text-[26px] font-bold uppercase pl-5 pr-10 mt-[20px]">
          {t("TITLE")}
        </h1>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={t("DESCRIBTION_1")}
            className="px-2"
          >
            {t("PARAGRAPH_1")}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={t("DESCRIBTION_2")}
            className="px-2"
          >
            {t("PARAGRAPH_2")}
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};
