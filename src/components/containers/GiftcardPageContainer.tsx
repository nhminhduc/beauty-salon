"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const GiftcardPageContainer = () => {
  const t = useTranslations("giftcard");
  return (
    <motion.section
      id="giftcard"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className="flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex py-12">
        <div className="w-full h-full flex flex-col xl:flex-row justify-between">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
            className="relative w-[304px] h-[200px] xl:w-[384px] xl:h-[200px] mb-8 xl:mb-0 mx-auto xl:mx-0"
          >
            <img
              src={"/assets/giftcard/img.jpg"}
              alt=""
              className="object-contain w-full h-full"
            />
          </motion.div>{" "}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              {t("title")}
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GiftcardPageContainer;
