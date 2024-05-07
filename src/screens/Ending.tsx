export const Ending = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center bg-ending object-cover bg-no-repeat bg-cover">
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[643px] h-[495px] bg-customGreen rounded-sm px-12 py-20">
          <p className="text-[24px] font-light">
            Мы уверены, что наше мероприятие станет значимым событием для города
            и его жителей, способствуя укреплению общественного здоровья,
            развитию спортивной культуры и привлечению туристов.
          </p>
          <br />
          <br />
          <br />
          <br />
          <p className="text-[24px] font-light">Скорее записывайтесь!</p>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <button className="overflow-hidden relative w-[260px] font-light text-lg h-10 border border-customGreen text-white rounded-md cursor-pointer z-10 group">
          Записаться на марафон
          <span className="absolute w-[267px] h-32 -top-8 -left-2 bg-customWhite rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-300 duration-700 origin-right"></span>
          <span className="absolute w-[267px] h-32 -top-8 -left-2 bg-customGreen rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-right"></span>
          <span className="absolute w-[267px] h-32 -top-8 -left-2 bg-customRed rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-300 origin-right"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-[10%] right-[10%] z-10">
            Записаться на марафон
          </span>
        </button>
      </div>
    </section>
  );
};
