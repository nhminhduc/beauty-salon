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
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contact Info</h3>
            <div className="flex flex-col items-start gap-12 mx-4">
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9">
                  <img src={"./assets/contact/pin.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">
                    {t.rich("address", { br: () => <br /> })}
                  </p>
                  <p className="mt-4">{t("description")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9">
                  <img src={"./assets/contact/phone.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone Number</h4>
                  <div className="pt-1 flex-1">{t("tel")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-9 h-9">
                  <img src={"./assets/contact/email.svg"} alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email Address</h4>
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
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="self-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.3006683095946!2d24.93632793088503!3d60.16867200681712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcc936d1fdd%3A0xd1d3d77114c834aa!2sForum!5e0!3m2!1sen!2sfi!4v1729337912179!5m2!1sen!2sfi"
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
