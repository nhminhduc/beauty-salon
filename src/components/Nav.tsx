import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const Nav = () => {
  const pathName = usePathname();
  const router = useRouter();
  const t = useTranslations("navigation");
  const [visibleSection, setVisibleSection] = useState("");

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathName === href && !visibleSection;
    }
    if (href.startsWith("#")) {
      return visibleSection === href.slice(1); // Remove the '#' from href
    }
    return pathName?.startsWith(href);
  };

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {t
          .raw("links")
          .map((link: { name: string; href: string }, idx: number) => {
            const active = isActive(link.href);
            return (
              <Link
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`${
                  active ? "border-b-2 border-accent" : ""
                } uppercase`}
              >
                {link.name}
              </Link>
            );
          })}
      </div>
    </nav>
  );
};

export default Nav;
