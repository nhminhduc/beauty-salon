import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

type NavProps = {
  switchLanguage: () => void;
};
const Nav = ({ switchLanguage }: NavProps) => {
  const t = useTranslations("navigation");
  const locale = useLocale();

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
