"use client";

import { useTranslations } from "next-intl";
import ModalVideo from "@/components/ModalVideo";

const DirectionsPage = () => {
  const t = useTranslations("directions");

  return (
    <section className="pt-48 pb-4 bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="h1 text-center mb-12 uppercase">{t("title")}</h1>
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{t("fromMetro")}</h2>
          <p className="mb-4">{t("metroDescription")}</p>
          <ModalVideo url={t("metroUrl")} />
        </div>
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{t("fromKaisaniemi")}</h2>
          <p className="mb-4">{t("kaisaniemiDescription")}</p>
          <ModalVideo url={t("kaisaniemiUrl")} />
        </div>
      </div>
    </section>
  );
};

export default DirectionsPage;
