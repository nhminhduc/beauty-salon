"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "fi" : "en";
    // const basePath =
    //   process.env.NODE_ENV === "production" ? "/beauty-salon" : "";
    const newPathname = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
    window.location.href = newPathname;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="pb-6 xl:pb-[24px] fixed z-40 w-full bg-white">
      <div className="bg-secondary-100 mb-6 xl:mb-[24px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal">
              <div className="flex items-center gap-2 text-primary">
                <FaPhoneAlt className="text-primary" />
                <span>
                  <Link href={`tel:${t("tel")}`} className="text-primary">
                    {t("tel")}
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <IoMdMail className="text-primary" />
                <span>
                  <Link href={`mailto:${t("email")}`} className="text-primary">
                    {t("email")}
                  </Link>
                </span>
              </div>
            </div>
            <Socials containerStyles="hidden text-primary text-lg xl:flex gap-6 justify-center" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Link
            href="/"
            className="text-primary-DEFAULT font-primary text-2xl xl:text-3xl"
          >
            <img
              src="/assets/logo.svg"
              className="w-[80px] xl:w-[120px] h-auto"
            />
          </Link>
        </div>
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="xl:hidden cursor-pointer"
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          ref={mobileNavRef}
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav
            setMobileNav={setMobileNav}
            switchLanguage={switchLanguage}
            locale={locale}
          />
        </motion.div>
        <div className="hidden xl:block">
          <Nav switchLanguage={switchLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
