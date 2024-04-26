"use client";

import clsx from "clsx";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function Image({ id }: { id: number }) {
  return (
    <section
      className={clsx(
        "w-[100vw] h-[100vh] flex justify-center items-center relative !snap-center"
      )}
    >
      <div>HELLO {id}</div>
    </section>
  );
}
export default function Home() {
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState<number>(1);

  useEffect(() => {
    const updateScrollValue = () => setScrollValue(scrollY.get());
    const unsubscribe = scrollY.onChange(updateScrollValue);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between p-24 bg-white",
        {
          "overflow-auto": scrollValue >= 3244,
        }
      )}
    >
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image} />
      ))}
      <section
        className={clsx(
          "w-[100vw] h-[100vh] flex justify-center items-center relative"
        )}
      >
        <div>HELLO 6</div>
      </section>
    </main>
  );
}
