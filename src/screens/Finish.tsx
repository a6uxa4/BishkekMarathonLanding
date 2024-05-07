export const Finish = () => (
  <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center sm:h-[375px]">
    <div className="w-[50%] h-full bg-customRed flex flex-col items-start justify-center gap-5 px-24 sm:hidden">
      <h1 className="text-customGreen text-[50px]">ФИНИШ</h1>
      <div className="flex flex-col gap-10 text-[20px] pr-24">
        <span className="text-customWhite">
          Лимит времени на прохождение марафонской дистанции -{" "}
          <span className="text-customGreen">6 часов.</span>
        </span>
        <span className="text-customWhite">
          Личный результат участника будет засчитан при пересечении{" "}
          <span className="text-customGreen">линии финиша</span>
        </span>
      </div>
    </div>
    <div className="w-[50%] h-full bg-finish bg-right object-cover bg-cover pt-3 sm:p-0 sm:w-full sm:relative">
      <div className="w-full h-full bg-customRed/30 sm:bg-customRed/60"></div>
      <div className="absolute top-10 flex-col items-start justify-center gap-5 px-4 hidden sm:flex">
        <h1 className="text-customGreen text-[28px]">ФИНИШ</h1>
        <div className="flex flex-col gap-10 text-[16px]">
          <span className="text-customWhite">
            Лимит времени на прохождение марафонской дистанции -{" "}
            <span className="text-customGreen">6 часов.</span>
          </span>
          <span className="text-customWhite">
            Личный результат участника будет засчитан при пересечении{" "}
            <span className="text-customGreen">линии финиша</span>
          </span>
        </div>
      </div>
    </div>
  </section>
);
