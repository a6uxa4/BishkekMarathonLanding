"use client";

import { About } from "@/screens/About";
import { Intro } from "@/screens/Intro";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

function Image({ id }: { id: number }) {
  return (
    <section
      className={clsx(
        "w-[100vw] h-[100vh] flex justify-center items-center snap-center"
      )}
    >
      <div>Page {id}</div>
    </section>
  );
}
export default function Home() {
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState<number>(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  return (
    <main
      className={clsx(
        "flex w-svw min-h-screen flex-col items-center justify-between",
        {
          "overflow-auto": scrollValue >= 3244,
        }
      )}
    >
      <Intro />
      <About />
      {[1, 2, 3, 4].map((image) => (
        <Image id={image} key={image} />
      ))}
    </main>
  );
}
