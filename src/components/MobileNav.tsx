import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import Socials from "./Socials";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

type MobileNavProps = {
  setMobileNav: (value: boolean) => void;
  switchLanguage: () => void;
  locale: string;
};

const MobileNav = ({
  setMobileNav,
  switchLanguage,
  locale,
}: MobileNavProps) => {
  const pathname = usePathname();
  const t = useTranslations("navigation");

  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <IoCloseOutline
        onClick={() => setMobileNav(false)}
        className="text-4xl cursor-pointer text-accent"
      />
      <ul className="flex flex-col gap-10 text-white text-xl">
        {t
          .raw("links")
          .map((link: { name: string; href: string }, idx: number) => (
            <Link
              key={idx}
              href={`/${locale}${link.href}`}
              className={`${
                pathname === `/${locale}${link.href}` &&
                "border-b-2 border-accent"
              } uppercase`}
            >
              {link.name}
            </Link>
          ))}
        <LanguageSwitcher
          switchLanguage={switchLanguage}
          containerStyles="self-start"
        />
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
