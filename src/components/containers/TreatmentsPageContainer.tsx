"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TreatmentDetail from "../TreatmentDetail";

const TreatmentsPageContainer = () => {
  const t = useTranslations("treatments");

  return (
    <motion.section
      id="treatments"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className="flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex flex-col items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center xl:items-start text-center xl:text-left w-full max-w-4xl mx-auto"
        >
          <h2 className="h2 mb-6 mx-auto max-w-[540px] self-center xl:max-w-none">
            {t("title")}
          </h2>
          <p className="lead max-w-[600px] mx-auto xl:mx-0 mb-14 self-center">
            {t("description")}
          </p>

          {[1, 2, 3].map((pointNumber) => (
            <TreatmentDetail key={pointNumber} pointNumber={pointNumber} />
          ))}

          {/* <button className="btn mx-auto xl:mx-0"> {t("button")}</button> */}
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="hidden xl:flex w-[384px] h-[534px] relative mt-10"
        >
          <Image
            src={"/assets/treatments/img.jpg"}
            fill
            quality={100}
            alt=""
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TreatmentsPageContainer;
