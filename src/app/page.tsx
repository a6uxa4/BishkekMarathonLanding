"use client";

import { About } from "@/screens/About";
import { Conditions } from "@/screens/Conditions";
import { Distance } from "@/screens/Distance";
import { Ending } from "@/screens/Ending";
import { Finish } from "@/screens/Finish";
import { Goals } from "@/screens/Goals";
import { Help } from "@/screens/Help";
import { Intro } from "@/screens/Intro";
import { Schedule } from "@/screens/Schedule";

export default function Home() {
  return (
    <main className="flex w-svw min-h-screen flex-col items-center justify-center">
      <Intro />
      <About />
      <Distance />
      {/* <Conditions />
      <Schedule />
      <Goals />
      <Help />
      <Finish />
      <Ending /> */}
    </main>
  );
}
