"use client";

import { NextUIProvider as NextProviderUI } from "@nextui-org/react";

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return <NextProviderUI>{children}</NextProviderUI>;
}
