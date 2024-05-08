import type { Metadata } from "next";
import "./globals.css";

import { Layout } from "@/layout";
import { NextUIProvider } from "@/providers/NextUI";
import ActiveSectionContextProvider from "@/providers/ActiveSection";

export const metadata: Metadata = {
  title: "Bishkek Marathon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <ActiveSectionContextProvider>
            <Layout>{children}</Layout>
          </ActiveSectionContextProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
