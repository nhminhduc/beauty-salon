import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Nav = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "fi" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPathname; // Use window.location for a full page reload
  };

  return (
    <nav>
      <div className="container mx-auto flex gap-8 items-center">
        {t
          .raw("links")
          .map((link: { name: string; href: string }, idx: number) => (
            <Link
              key={idx}
              href={`/${locale}${link.href}`}
              className={`uppercase`}
            >
              {link.name}
            </Link>
          ))}
        <LanguageSwitcher switchLanguage={switchLanguage} />
      </div>
    </nav>
  );
};

export default Nav;
