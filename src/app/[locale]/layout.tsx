import "../globals.css";

import { Layout } from "@/layout";
import { NextUIProvider } from "@/providers/NextUI";
import ActiveSectionContextProvider from "@/providers/ActiveSection";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const viewport = "width=device-width, initial-scale=1";

export async function generateMetadata({ params }: any) {
  const metadataBase = new URL("https://bishkekmarathon.run");

  const commonMetadata = {
    metadataBase,
    link: [
      {
        rel: "canonical",
        href: `https://bishkekmarathon.run/${params.locale}`,
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
    meta: [{ name: "author", content: "Bishkek Marathon Team" }],
  };

  if (params.locale === "ru") {
    return {
      ...commonMetadata,
      metadataBase,
      title: "Бишкек Марафон",
      description:
        "Отправляйтесь в незабываемое приключение по сердцу Бишкека с Бишкекским марафоном! Присоединяйтесь к нам в захватывающем путешествии по живописным улицам столицы Кыргызстана, где участники испытают дух захватывающего пейзажа, культурные достопримечательности и энергичную атмосферу. Независимо от того, являетесь ли вы опытным бегуном или новичком, здесь найдется дистанция для каждого. С нашими беспрепятственными регистрацией, обновлениями в реальном времени и интерактивными картами наш марафон обещает гладкое и динамичное испытание как для участников, так и для зрителей. Завяжите шнурки, дайте волю своему внутреннему атлету и оставьте незабываемые впечатления на Бишкекском марафоне!",
      keywords:
        "Бишкек Марафон, Кыргызстан бег, марафон 2024, бег в Центральной Азии, спортивные события Бишкека, полумарафон, 12к забег, городской марафон, фитнес челлендж, беговое сообщество, bishkek marathon, бишкек марафон сайт, bishkek.marathon.run, регистрация на марафон, дата бишкекского марафона, маршрут марафона в Бишкеке, как подготовиться к марафону, марафон для начинающих, результаты марафона, марафон Кыргызстан, Марафон бишкеке, Марафон бишкек, Бишкек Марафон, Бишкек марафон 2024, Марафон на горы, Ала арча бег",
      openGraph: {
        title:
          "Бишкек Марафон 2024 - Главное беговое событие года в Кыргызстане",
        description:
          "Присоединяйтесь к тысячам бегунов на улицах Бишкека. Марафон, полумарафон и 12К дистанции. Регистрация открыта!",
        images: [
          {
            url: "/images/Ending.webp",
            width: 1200,
            height: 630,
            alt: "Бишкек Марафон 2024",
          },
        ],
      },
    };
  }
  if (params.locale === "en") {
    return {
      metadataBase,
      title: "Bishkek Marathon",
      description:
        "Embark on an unforgettable adventure through the heart of Bishkek with the Bishkek Marathon! Join us for a thrilling journey through the vibrant streets of Kyrgyzstan's capital, where participants will experience breathtaking scenery, cultural landmarks, and a spirited atmosphere. Whether you're a seasoned runner or a beginner, there's a distance for everyone to conquer. With seamless registration, real-time race updates, and interactive maps, our marathon promises a smooth and dynamic experience for participants and spectators alike. Lace up your shoes, unleash your inner athlete, and make lasting memories at the Bishkek Marathon!",
      keywords:
        "Bishkek Marathon, Kyrgyzstan running, 2024 marathon, Central Asia run, Bishkek sports events, half marathon, 10k run, city marathon, fitness challenge, running community, bishkek marathon website, bishkek.marathon.run, marathon registration, Bishkek marathon date, Bishkek marathon route, how to prepare for a marathon, beginner's marathon guide, marathon results, Kyrgyzstan marathon, Marathon Bishkek, Marathon Bishkek, Bishkek Marathon, Bishkek Marathon 2024, Marathon on the Mountains, Ala Archa Running",
      openGraph: {
        title: "Bishkek Marathon 2024 - Kyrgyzstan's Biggest Running Event",
        description:
          "Join thousands of runners on the streets of Bishkek. Marathon, half-marathon, and 10K distances available. Registration now open!",
        images: [
          {
            url: "/images/Ending.webp",
            width: 1200,
            height: 630,
            alt: "Bishkek Marathon 2024",
          },
        ],
      },
    };
  }
  return {
    ...commonMetadata,
    metadataBase,
    title: "Бишкек Марафон",
    description:
      "Отправляйтесь в незабываемое приключение по сердцу Бишкека с Бишкекским марафоном! Присоединяйтесь к нам в захватывающем путешествии по живописным улицам столицы Кыргызстана, где участники испытают дух захватывающего пейзажа, культурные достопримечательности и энергичную атмосферу. Независимо от того, являетесь ли вы опытным бегуном или новичком, здесь найдется дистанция для каждого. С нашими беспрепятственными регистрацией, обновлениями в реальном времени и интерактивными картами наш марафон обещает гладкое и динамичное испытание как для участников, так и для зрителей. Завяжите шнурки, дайте волю своему внутреннему атлету и оставьте незабываемые впечатления на Бишкекском марафоне!",
    keywords:
      "Бишкек Марафон, Кыргызстан бег, марафон 2024, бег в Центральной Азии, спортивные события Бишкека, полумарафон, 10к забег, городской марафон, фитнес челлендж, беговое сообщество, bishkek marathon, бишкек марафон сайт, bishkek.marathon.run, регистрация на марафон, дата бишкекского марафона, маршрут марафона в Бишкеке, как подготовиться к марафону, марафон для начинающих, результаты марафона, марафон Кыргызстан",
    openGraph: {
      title: "Бишкек Марафон 2024 - Главное беговое событие года в Кыргызстане",
      description:
        "Присоединяйтесь к тысячам бегунов на улицах Бишкека. Марафон, полумарафон и 12К дистанции. Регистрация открыта!",
      images: [
        {
          url: "/images/Ending.webp",
          width: 1200,
          height: 630,
          alt: "Бишкек Марафон 2024",
        },
      ],
    },
  };
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
