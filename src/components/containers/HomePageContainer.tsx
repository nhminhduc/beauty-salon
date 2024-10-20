"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HomePageContainer = () => {
  const t = useTranslations("homepage");

  const isNovember2024 = () => {
    const now = new Date();
    return now.getFullYear() === 2024 && now.getMonth() === 9; // November is 10 (0-indexed)
  };

  return (
    <motion.section
      id="homepage"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className="flex overflow-x-hidden pt-20 xl:pt-48 bg-white pb-4"
    >
      <div className="container mx-auto flex flex-col mt-32 xl:mt-0 ">
        <h1 className="h1 mb-6 self-center uppercase">
          {t.rich("title", { br: () => <br /> })}
        </h1>
        <h2 className="h3 mb-6 self-center">
          {t.rich("subtitle", { br: () => <br /> })}
        </h2>
        <div className="flex flex-col xl:flex-row h-full">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          >
            <p className="lead max-w-xl mx-auto">{t("description")}</p>
            {isNovember2024() && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="bg-secondary text-red-500 p-4 rounded-lg mb-6 mt-4 text-center shadow-md"
              >
                <p className="font-bold text-xl">{t("grandOpeningOffer")}</p>
                <p>{t("offerDescription")}</p>
              </motion.div>
            )}

            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <button className="btn btn-lg">{t("button")}</button>
              <Link className="btn btn-lg" href="/price">
                {t("price")}
              </Link>
              {/* <div>
                <ModalVideo />
              </div> */}
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
              }}
              className="hidden xl:flex"
            >
              <img
                src={"./assets/home/img.png"}
                width={864}
                height={650}
                alt="Home Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePageContainer;
