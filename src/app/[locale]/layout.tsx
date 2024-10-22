import "../globals.css";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Script from "next/script";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nala Beauty",
  description: "Nala Beauty Nails & Lashes & Pedicure",
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "fi"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang="en" className={`scroll-smooth`}>
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/2.8.3/iframeResizer.min.js"
          strategy="afterInteractive"
        />
        <Script id="iframe-resizer">
          {`iFrameResize({ checkOrigin: false }, "#reservationIframe28380");`}
        </Script>
      </head>
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
