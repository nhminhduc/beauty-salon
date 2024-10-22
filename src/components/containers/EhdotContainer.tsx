"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const EhdotContainer = () => {
  const t = useTranslations("ehdot");

  return (
    <motion.section
      id="ehdot"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className="flex items-center overflow-x-hidden bg-white"
    >
      <div className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
          }}
          className="flex flex-col items-center"
        >
          <h2 className="h2 mb-6 text-center">{t("title")}</h2>
          <p className="text-center max-w-2xl">{t("content")}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EhdotContainer;
