import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

const Nav = () => {
  const router = useRouter();
  const t = useTranslations("navigation");

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.hash &&
        target.origin + target.pathname === window.location.href
      ) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.includes("#")) {
      e.preventDefault();
      router.push(href);
    }
  };
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {t
          .raw("links")
          .map((link: { name: string; href: string }, idx: number) => (
            <Link
              key={idx}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`uppercase`}
            >
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Nav;
