"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { NavbarTop } from "./Navbar";
import clsx from "clsx";
import { useState } from "react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { NAV_LINKS } from "@/utils/constants";
import { useActiveSectionContext } from "@/providers/ActiveSection";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const Header = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const t = useTranslations("HEADER");

  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathName = usePathname();
  const { replace } = useRouter();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <header className="w-full h-fit fixed bg-customBlack z-50 sm:hidden">
        <NavbarTop />
        <div className="w-full h-[67px] container py-4 mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between">
            <Image src="/icon/Logo.png" alt="logo" width={128} height={26} />
          </div>
          <div className="relative inset-x-0 z-20 w-auto h-[67px] px-6 py-4 flex items-center justify-end">
            <div className="flex flex-row mx-6">
              {NAV_LINKS.map((item) => (
                <Link
                  href={item.hash}
                  onClick={() => {
                    setActiveSection(item.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  key={item.name}
                  className="group my-2 text-customWhite mx-10 font-light text-lg transition duration-200 cursor-pointer"
                >
                  {t(item.name)}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-customGreen mt-[1px]"></span>
                </Link>
              ))}
            </div>
            <button className="overflow-hidden relative w-[199px] font-light text-lg h-8 border border-customGreen bg-black text-white rounded-md cursor-pointer z-10 group">
              Записаться
              <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customWhite rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-300 duration-700 origin-right"></span>
              <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customGreen rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-right"></span>
              <span className="absolute w-[204px] h-32 -top-8 -left-2 bg-customRed rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-300 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-[20%] right-[20%] z-10">
                Записаться
              </span>
            </button>
          </div>
        </div>
        <motion.div
          className="fixed left-0 right-0 h-1 bg-customGreen top-[102px]"
          style={{ scaleX }}
        />
      </header>
      <header className="w-full h-[46px] fixed bg-customWhite z-50 hidden sm:block">
        <div className="w-full h-[46px] container py-4 mx-auto flex justify-between items-center px-5">
          <div className="flex items-center justify-between">
            <Image src="/icon/LogoDark.png" alt="logo" width={86} height={16} />
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-[48px] h-[33px] flex items-center justify-center gap-1 cursor-pointer">
              <span
                onClick={() => replace("/ru")}
                className={clsx("p-1 rounded-sm", {
                  "bg-[gray]/20": pathName === "/ru",
                })}
              >
                RU
              </span>
              <div className="w-[1px] h-full border"></div>
              <span
                onClick={() => replace("/en")}
                className={clsx("p-1 rounded-sm", {
                  "bg-[gray]/20": pathName === "/en",
                })}
              >
                EN
              </span>
            </div>
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              className="w-5 h-5 flex flex-col justify-around relative z-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={clsx("w-full h-[2px] bg-customBlack rounded", {
                  "rotate-45 absolute": isOpen,
                })}
              />
              <div
                className={clsx("w-full h-[2px] bg-customBlack rounded", {
                  hidden: isOpen,
                })}
              />
              <div
                className={clsx("w-full h-[2px] bg-customBlack rounded", {
                  "rotate-[-45deg] absolute": isOpen,
                })}
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="fixed left-0 right-0 h-[3px] bg-customRed top-[44px]"
          style={{ scaleX }}
        />
        <div
          className={clsx(
            "w-[100vw] bg-white h-[300px] z-30 absolute top-0 transition-all px-5 py-5",
            {
              "!h-0 top-[-300px]": !isOpen,
            }
          )}
        >
          <div
            className={clsx("transition-all duration-200", {
              "opacity-0": !isOpen,
            })}
          >
            <div className="w-full h-full uppercase flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.hash}
                  onClick={() => {
                    setActiveSection(item.name);
                    setTimeOfLastClick(Date.now());
                    setIsOpen(false);
                  }}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </div>
          <Divider className="my-4" />
          <div className="w-full h-full flex flex-col items-start justify-start gap-2">
            <Link
              className="flex items-center justify-center gap-3"
              href="tel:+996707877745"
            >
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
            </Link>
            <Link
              className="flex items-center justify-center gap-3"
              href="mailto:bishkekmarathon@gmail.com"
            >
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
            </Link>
            <div className="flex items-center justify-center gap-3">
              {t("SOCIAL")}
              <Link
                href="https://www.instagram.com/bishkek.marathon/"
                target="_blank"
              >
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
          </div>
        </div>
      </header>
    </>
  );
};
