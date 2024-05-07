export const Help = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center relative">
      <div className="absolute text-customBlack z-20 text-[36px] uppercase top-[150px]">
        Также На Марафоне будет
      </div>
      <div className="w-[50%] h-full bg-customGreen flex flex-col items-start justify-center gap-5 mt-5">
        <div className="w-full h-[42px] bg-customWhite flex items-center justify-start text-[26px] px-14">
          МЕДИЦИНСКАЯ ПОМОЩЬ
        </div>
        <p className="text-[24px] font-light w-[80%] pl-14">
          На дистанции соревнования будут работать машины скорой помощи. На
          финише будет расположен медицинский пункт. Если кто-то из участников
          почувствует себя плохо, он всегда сможет обратиться за помощью к
          медикам, волонтёрам или любым другим сотрудникам спортивного
          мероприятия.
        </p>
      </div>
      <div className="w-[50%] h-full bg-customWhite flex flex-col items-start justify-center gap-5 mt-5">
        <div className="w-full h-[42px] bg-customGreen flex items-center justify-start text-[26px] px-14">
          ПУНКТЫ ПИТАНИЯ И ОСВЕЖЕНИЯ
        </div>
        <p className="text-[24px] font-light w-[80%] pl-14">
          На протяжении всей марафонской дистанции будут расположены пункты
          питания и освежения. Для наиболее эффективной организации они
          располагаются вдоль прямого участка дороги и все станции располагаются
          непосредственно рядом с километровыми отметками. 
        </p>
      </div>
    </section>
  );
};
