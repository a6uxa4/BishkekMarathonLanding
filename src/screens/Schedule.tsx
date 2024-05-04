export const Schedule = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center">
      <div className="w-[50%] h-full bg-schedule relative flex items-center justify-center bg-center bg-cover">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-customGreen text-[46px] font-extralight">
            Расписание на
          </h1>
          <span className="text-customGreen text-[40px] font-extralight">
            02.06.2024
          </span>
        </div>
      </div>
      <div className="w-[50%] h-full bg-customBlack flex items-center">
        <div className="w-full flex flex-col">
          <div className="group w-full flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
            <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
              07:00 - 07:35
            </h1>
            <p>Открытие</p>
          </div>
          <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
            <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
              07:35 - 08:45
            </h1>
            <p>Разминка перед стартом</p>
          </div>
          <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
            <h1 className="min-w-[160px] text-customGreen group-hover:text-customBlack">
              08:45 - 09:00
            </h1>
            <p className="text-[20px]">
              ГИМН КР с участием Кыргызской национальной консерватории им. К.
              Молдобасанова.
            </p>
          </div>
          <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
            <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
              09:00 - 09:20
            </h1>
            <p>Старт с разных дистанций</p>
          </div>
          <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
            <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
              11:00 - 14:30
            </h1>
            <p>Награждение</p>
          </div>
          <div className="group flex items-center p-3 text-[25px] gap-[100px] pl-20 hover:bg-customWhite transition-all duration-300 cursor-pointer text-customWhite hover:text-customBlack">
            <h1 className="w-[160px] text-customGreen group-hover:text-customBlack">
              15:30
            </h1>
            <p>Закрытие</p>
          </div>
        </div>
      </div>
    </section>
  );
};
