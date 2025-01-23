"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ContactPageContainer = () => {
  const t = useTranslations("contact");

  return (
    <motion.section
      id="contact"
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
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between h-full  xl:bg-transparent pt-4 rounded">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">{t("title")}</h3>
            <div className="flex flex-col items-start gap-12 mx-4">
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9 text-primary">
                  <img src={"/assets/contact/clock.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">{t("openingHoursTitle")}</h4>
                  <p className="leading-relaxed">
                    {t.rich("openingHours", { br: () => <br /> })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9">
                  <img src={"/assets/contact/pin.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">{t("addressTitle")}</h4>
                  <p className="leading-relaxed">
                    {t.rich("address", { br: () => <br /> })}
                  </p>
                  <p className="mt-4">{t("description")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9">
                  <img src={"/assets/contact/phone.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">{t("telTitle")}</h4>
                  <div className="pt-1 flex-1">{t("tel")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9">
                  <img src={"/assets/contact/email.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">{t("emailTitle")}</h4>
                  <div className="flex flex-col gap-1">{t("email")}</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="self-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.5937594870645!2d24.94473611309218!3d60.17090384327021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcdda102ddf%3A0x5af05f16a1fb4447!2sVuorikatu%208%2C%2000100%20Helsinki!5e0!3m2!1sen!2sfi!4v1737661386908!5m2!1sen!2sfi"
              className="w-[360px] h-[360px] xl:w-[420px] xl:h-[450px]"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPageContainer;
