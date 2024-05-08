import { useSectionInView } from "@/hooks/useSectionInView";
import { useTranslations } from "next-intl";

export const Goals = () => {
  const { ref } = useSectionInView("Расписание");
  const t = useTranslations("GOALS");

  return (
    <>
      <section
        ref={ref}
        id="goals"
        className="w-[100vw] h-[100vh] flex justify-center items-center snap-center sm:hidden"
      >
        <div className="w-[50%] h-full bg-customBlack relative flex items-center justify-center">
          <h1 className="text-customWhite text-[46px] font-bold w-[300px]">
            {t("TITLE")}
          </h1>
        </div>
        <div className="w-[50%] h-full bg-customRed relative flex items-center justify-start px-10">
          <ul className="flex flex-col gap-5 text-customWhite text-lg">
            <li>&#10003; {t("SLUG_1")}</li>
            <li>&#10003; {t("SLUG_2")}</li>
            <li>&#10003; {t("SLUG_3")}</li>
            <li>&#10003; {t("SLUG_4")}</li>
            <li>&#10003; {t("SLUG_5")}</li>
            <li>&#10003; {t("SLUG_6")}</li>
            <li>&#10003; {t("SLUG_7")}</li>
            <li>&#10003; {t("SLUG_8")}</li>
          </ul>
        </div>
      </section>
      <section className="w-full h-[635px] hidden sm:block scroll-mt-12">
        <div className="w-full h-[145px] bg-customBlack pl-5 pr-24 flex items-center">
          <h1 className="text-customWhite text-[26px] font-bold">
            {t("TITLE")}
          </h1>
        </div>
        <div className="w-full h-[490px] bg-customRed px-5 flex items-center justify-center">
          <ul className="flex flex-col gap-5 text-customWhite text-sm">
            <li>&#10003; {t("SLUG_1")}</li>
            <li>&#10003; {t("SLUG_2")}</li>
            <li>&#10003; {t("SLUG_3")}</li>
            <li>&#10003; {t("SLUG_4")}</li>
            <li>&#10003; {t("SLUG_5")}</li>
            <li>&#10003; {t("SLUG_6")}</li>
            <li>&#10003; {t("SLUG_7")}</li>
            <li>&#10003; {t("SLUG_8")}</li>
          </ul>
        </div>
      </section>
    </>
  );
};
