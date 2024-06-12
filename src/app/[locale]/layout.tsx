import "../globals.css";

import { Layout } from "@/layout";
import { NextUIProvider } from "@/providers/NextUI";
import ActiveSectionContextProvider from "@/providers/ActiveSection";
import { NextIntlClientProvider, useMessages } from "next-intl";

export async function generateMetadata({ params }: any) {
  if (params.locale === "ru") {
    return {
      title: "Бишкек Марафон",
      description:
        "Отправляйтесь в незабываемое приключение по сердцу Бишкека с Бишкекским марафоном! Присоединяйтесь к нам в захватывающем путешествии по живописным улицам столицы Кыргызстана, где участники испытают дух захватывающего пейзажа, культурные достопримечательности и энергичную атмосферу. Независимо от того, являетесь ли вы опытным бегуном или новичком, здесь найдется дистанция для каждого. С нашими беспрепятственными регистрацией, обновлениями в реальном времени и интерактивными картами наш марафон обещает гладкое и динамичное испытание как для участников, так и для зрителей. Завяжите шнурки, дайте волю своему внутреннему атлету и оставьте незабываемые впечатления на Бишкекском марафоне!",
      keywords:
        "Марафон, Бег, Кыргызстан марафон, Бишкек марафон, Кыргызстан марафон 2024, Бишкек марафон 2024, Незабываемое приключение по сердцу Бишкека, Путешествии по живописным улицам столицы Кыргызстана",
    };
  }
  if (params.locale === "en") {
    return {
      title: "Bishkek Marathon",
      description:
        "Embark on an unforgettable adventure through the heart of Bishkek with the Bishkek Marathon! Join us for a thrilling journey through the vibrant streets of Kyrgyzstan's capital, where participants will experience breathtaking scenery, cultural landmarks, and a spirited atmosphere. Whether you're a seasoned runner or a beginner, there's a distance for everyone to conquer. With seamless registration, real-time race updates, and interactive maps, our marathon promises a smooth and dynamic experience for participants and spectators alike. Lace up your shoes, unleash your inner athlete, and make lasting memories at the Bishkek Marathon!",
      keywords:
        "Marathon, Running, Kyrgyzstan marathon, Bishkek marathon, Kyrgyzstan marathon 2024, Bishkek marathon 2024, Unforgettable adventure through the heart of Bishkek, Journey through the vibrant streets of Kyrgyzstan's capital",
    };
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextUIProvider>
            <ActiveSectionContextProvider>
              <Layout>{children}</Layout>
            </ActiveSectionContextProvider>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
