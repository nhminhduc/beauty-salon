import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations("navigation");

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {t
          .raw("links")
          .map((link: { name: string; href: string }, idx: number) => (
            <Link key={idx} href={link.href} className={`uppercase`}>
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Nav;
