"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoCloseOutline } from "react-icons/io5";
import Socials from "./Socials";
import { useTranslations } from "next-intl";

type MobileNavProps = {
  setMobileNav: (value: boolean) => void;
};

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  const pathName = usePathname();
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
              href={`${process.env.NEXT_PUBLIC_BASE_URL}${link.href}`}
              className={`${
                pathName === link.href && "border-b-2 border-accent"
              } uppercase`}
            >
              {link.name}
            </Link>
          ))}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
