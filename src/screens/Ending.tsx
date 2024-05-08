import Image from "next/image";
import Link from "next/link";

export const Ending = () => {
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center snap-center bg-ending object-cover bg-no-repeat bg-cover sm:hidden">
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-[643px] h-[495px] bg-customGreen rounded-sm px-12 py-20">
            <p className="text-[24px] font-light">
              Мы уверены, что наше мероприятие станет значимым событием для
              города и его жителей, способствуя укреплению общественного
              здоровья, развитию спортивной культуры и привлечению туристов.
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
      <section className="w-full h-[610px] hidden sm:block">
        <div className="w-full h-[50%] bg-ending bg-cover flex flex-col items-start justify-center pl-4">
          <p className="text-[14px] font-light text-customWhite">
            Мы уверены, что наше мероприятие станет значимым событием для города
            и его жителей, способствуя укреплению общественного здоровья,
            развитию спортивной культуры и привлечению туристов.
          </p>
          <br />
          <br />
          <p className="text-[14px] font-light text-customWhite">
            Скорее записывайтесь!
          </p>
        </div>
        <div className="w-full h-[50%] bg-customBlack flex flex-col items-center justify-center gap-8 text-customWhite">
          <h1 className="font-bold">Контакты</h1>
          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +996 707 877 745
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            bishkekmarathon@gmail.com
          </div>
          <div className="flex items-center justify-center gap-3">
            Мы в соц. сетях
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </Link>
          </div>
          <Image src="/icon/Logo.png" alt="logo" width={86} height={16} />
        </div>
      </section>
    </>
  );
};
