"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
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
      <div className="container mx-auto flex flex-col items-center py-12">
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
          {/* <p className="lead max-w-[600px] mx-auto xl:mx-0 mb-14 self-center">
            {t("description")}
          </p> */}

          {[1, 2, 3].map((pointNumber) => (
            <motion.div
              key={pointNumber}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2 + pointNumber * 0.2,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={`flex flex-col ${
                pointNumber % 2 === 0 ? "xl:flex-row-reverse" : "xl:flex-row"
              } items-center justify-between w-full mb-16 last:mb-0`}
            >
              <div className="w-full xl:w-1/2 mb-8 xl:mb-0">
                <TreatmentDetail pointNumber={pointNumber} />
              </div>
              <div
                className={`w-full xl:w-1/2 ${
                  pointNumber % 2 === 0 ? "xl:pr-8" : "xl:pl-8"
                } flex justify-center xl:justify-start`}
              >
                <img
                  src={`./assets/treatments/img${pointNumber}.jpg`}
                  alt={`Treatment ${pointNumber}`}
                  className="w-[500px] h-[400px] rounded-lg object-cover"
                />
              </div>
            </motion.div>
          ))}
          <h2 className="my-2 h4">{t("buttonDescription")}</h2>
          <button className="btn mx-auto xl:mx-0"> {t("button")}</button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TreatmentsPageContainer;
