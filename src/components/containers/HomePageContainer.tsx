"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const HomePageContainer = () => {
  const t = useTranslations("homepage");
  const locale = useLocale();

  const isNovember2024 = () => {
    const now = new Date();
    return (
      now.getFullYear() === 2024 &&
      (now.getMonth() === 9 || now.getMonth() === 10)
    ); // November is 10 (0-indexed)
  };

  return (
    <motion.section
      id="homepage"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="flex overflow-x-hidden pt-20 xl:pt-48 bg-white pb-4"
    >
      <div className="container mx-auto flex flex-col mt-32 xl:mt-0 items-center">
        <h1 className="h1 mb-6 self-center uppercase">
          {t.rich("title", { br: () => <br /> })}
        </h1>
        <h2 className="h3 mb-6 self-center">
          {t.rich("subtitle", { br: () => <br /> })}
        </h2>
        <div className="flex flex-col xl:flex-row h-full gap-4 pt-[12px] xl:pt-[60px]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-full flex flex-col items-center"
          >
            <p className="lead max-w-xl mx-auto text-center">
              {t.rich("description", { br: () => <br /> })}
            </p>
            {isNovember2024() && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary text-red-500 p-4 rounded-lg mb-6 mt-4 mx-4 xl:mx-12 text-center shadow-md flex flex-col gap-2"
              >
                <p className="font-bold h2">{t("grandOpeningOffer")}</p>
                {/* <p className="text-xl">{t("offerDescription")}</p> */}
              </motion.div>
            )}

            <div className="flex flex-row xl:flex-col items-center gap-2 max-w-max mx-auto xl:mx-0">
              <Link
                className="btn"
                href={`/${locale}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(
                    "reservationIframe28380"
                  );
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.scrollY - 210;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {t("button")}
              </Link>
              <Link className="btn" href={`/${locale}/price`}>
                {t("price")}
              </Link>
              <Link className="btn" href={`/${locale}/directions`}>
                {t("directions")}
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="w-full"
          >
            <iframe
              width="100%"
              src="https://varaa.timma.fi/reservation/nalabeauty"
              id="reservationIframe28380"
              className="border h-[616px]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePageContainer;
