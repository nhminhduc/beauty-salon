"use client";

import Link from "next/link";
import Socials from "./Socials";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("navigation");
  const links = t.raw("links");
  const locale = useLocale();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "fi" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPathname;
  };

  return (
    <footer className="bg-secondary-100 py-12 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="mb-6 xl:mb-0">
            <Link
              href={`/${locale}`}
              className="text-primary-DEFAULT font-primary text-2xl xl:text-3xl"
            >
              Nala Beauty
            </Link>
          </div>
          <div className="mb-6 xl:mb-0">
            <nav>
              <ul className="flex gap-8">
                {links.map((link: { name: string; href: string }) => (
                  <li key={link.name}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-primary-DEFAULT hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Socials containerStyles="flex gap-6 text-primary-DEFAULT" />
            <LanguageSwitcher switchLanguage={switchLanguage} />
          </div>
        </div>
        <div className="border-t border-primary-DEFAULT/20 mt-8 pt-8 text-center">
          <p className="text-primary-DEFAULT/60">
            © {new Date().getFullYear()} Nala Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
