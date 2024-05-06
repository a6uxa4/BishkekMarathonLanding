export const Goals = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center">
      <div className="w-[50%] h-full bg-customBlack relative flex items-center justify-center">
        <h1 className="text-customWhite text-[46px] font-bold w-[300px]">
          ЦЕЛИ МАРАФОНА
        </h1>
      </div>
      <div className="w-[50%] h-full bg-customRed relative flex items-center justify-center">
        <ul>
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
  );
};
