"use client";

import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Fragment } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { COUNTRY } from "@/utils/constants";
import { useTranslations } from "next-intl";

export const NavbarTop = () => {
  const pathName = usePathname();
  const { replace } = useRouter();

  const t = useTranslations("NAVBAR");

  return (
    <Navbar
      shouldHideOnScroll
      className="w-full h-[35px] flex items-center justify-center bg-customWhite"
    >
      <NavbarContent justify="start" className="w-full h-[35px]">
        <NavbarItem>
          <Link
            className="flex items-center justify-center gap-3"
            href="tel:+996500337433"
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
            +996 500 337 433
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center" className="w-full h-[35px]">
        <NavbarItem>
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
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="w-full h-[35px]">
        <NavbarItem className="flex items-center justify-center gap-3">
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
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="w-full h-[20px] ml-10">
        <NavbarItem className="tabs relative flex items-center justify-center">
          {COUNTRY.map((tab, index) => (
            <Fragment key={index}>
              <input
                type="radio"
                id={`radio-${tab.lang}`}
                name="tabs"
                onChange={() => replace(tab.lang)}
                className="hidden"
              />
              <label
                htmlFor={`radio-${tab.lang}`}
                className={`tab flex items-center justify-center w-12 font-normal cursor-pointer transition-colors duration-150 z-40 ${
                  tab.lang === "/ru" ? "border-l-1" : ""
                }`}
              >
                {tab.name}
              </label>
            </Fragment>
          ))}
          <span
            className={clsx(
              "glider absolute top-0 left-0 h-full w-12 bg-customGreen transition-transform duration-250",
              {
                "rounded-tl-full rounded-bl-full": pathName === "/en",
                "rounded-tr-full rounded-br-full": pathName === "/ru",
              }
            )}
            style={{
              transform: `translateX(${pathName === "/en" ? 0 : 1 * 100}%)`,
            }}
          ></span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
