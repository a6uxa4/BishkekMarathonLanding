export const Goals = () => {
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center sm:hidden">
        <div className="w-[50%] h-full bg-customBlack relative flex items-center justify-center">
          <h1 className="text-customWhite text-[46px] font-bold w-[300px]">
            ЦЕЛИ МАРАФОНА
          </h1>
        </div>
        <div className="w-[50%] h-full bg-customRed relative flex items-center justify-start px-10">
          <ul className="flex flex-col gap-5 text-customWhite text-lg">
            <li>&#10003; Повышение квалификации специалистов.</li>
            <li>&#10003; Популяризация массового любительского спорта.</li>
            <li>&#10003; Благотворительность.</li>
            <li>&#10003; Разработка стратегий продвижения спорта.</li>
            <li>&#10003; Поддержка программ развития молодежи через спорт.</li>
            <li>&#10003; Укрепление базового уровня бега и легкой атлетики.</li>
            <li>&#10003; Инвестиции в спортивные объекты и инфраструктуру.</li>
            <li>
              &#10003; Пропаганда здорового образа жизни и спортивных ценностей.
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full h-[635px] hidden sm:block">
        <div className="w-full h-[145px] bg-customBlack pl-5 pr-24 flex items-center">
          <h1 className="text-customWhite text-[26px] font-bold">
            ЦЕЛИ МАРАФОНА
          </h1>
        </div>
        <div className="w-full h-[490px] bg-customRed px-5 flex items-center justify-center">
          <ul className="flex flex-col gap-5 text-customWhite text-sm">
            <li>&#10003; Повышение квалификации специалистов.</li>
            <li>&#10003; Популяризация массового любительского спорта.</li>
            <li>&#10003; Благотворительность.</li>
            <li>&#10003; Разработка стратегий продвижения спорта.</li>
            <li>&#10003; Поддержка программ развития молодежи через спорт.</li>
            <li>&#10003; Укрепление базового уровня бега и легкой атлетики.</li>
            <li>&#10003; Инвестиции в спортивные объекты и инфраструктуру.</li>
            <li>
              &#10003; Пропаганда здорового образа жизни и спортивных ценностей.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
