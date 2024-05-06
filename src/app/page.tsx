"use client";

import { About } from "@/screens/About";
import { Conditions } from "@/screens/Conditions";
import { Distance } from "@/screens/Distance";
import { Ending } from "@/screens/Ending";
import { Finish } from "@/screens/Finish";
import { Goals } from "@/screens/Goals";
import { Help } from "@/screens/Help";
import { Intro } from "@/screens/Intro";
import { Partners } from "@/screens/Partners";
import { Schedule } from "@/screens/Schedule";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState<number>(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  console.log(scrollValue)

  return (
    <main
      className={clsx(
        "flex w-svw min-h-screen flex-col items-center justify-between",
        {
          "overflow-auto": scrollValue >= 5509,
        }
      )}
    >
      <Intro />
      <About />
      <Distance />
      <Conditions />
      <Schedule />
      <Goals />
      <Help />
      <Finish />
      <Ending />
      <Partners />
    </main>
  );
}
