"use client";

import { useTranslations } from "next-intl";

const PolicyPage = () => {
  const t = useTranslations("policy");
  return (
    <section className="pt-48 pb-4 bg-secondary">
      <div className="container mt-12 xl:mt-24 mx-auto px-4">
        <h1 className="h1 text-center mb-12 uppercase">{t("title")}</h1>

        <p className="lead mb-8">{t("intro")}</p>

        <div className="mb-8">
          <h2 className="h2 mb-4">{t("policyTitle")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("policy1")}</li>
            <li>{t("policy2")}</li>
            <li>{t("policy3")}</li>
            <li>{t("policy4")}</li>
            <li>{t("policy5")}</li>
            <li>{t("policy6")}</li>
            <li>{t("policy7")}</li>
            <li>{t("policy8")}</li>
            <li>{t("policy9")}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="h2 mb-4">{t("warrantyTitle")}</h2>
          <p className="mb-4 italic">
            {t.rich("warrantyIntro", { br: () => <br /> })}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li> {t.rich("warranty1", { br: () => <br /> })}</li>
            <li>{t("warranty2")}</li>
            <li>{t("warranty3")}</li>
            <li>{t("warranty4")}</li>
            <li>{t("warranty5")}</li>
          </ul>
          <h3 className="h3 mt-4 mb-2">{t("specialCircumstancesTitle")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("specialCircumstances1")}</li>
            <li>{t("specialCircumstances2")}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="h2 mb-4">{t("refundTitle")}</h2>
          <p className="mb-4 italic">
            {t.rich("refundIntro", { br: () => <br /> })}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="uppercase font-extrabold">
                {t("refund1Title")}
              </strong>
              <p>{t("refund1")}</p>
            </li>
            <li>
              <strong className="uppercase font-extrabold">
                {t("refund2Title")}
              </strong>
              <p>{t("refund2")}</p>
            </li>
            <li>
              <strong className="uppercase font-extrabold">
                {t("refund3Title")}
              </strong>
              <p>{t("refund3")}</p>
            </li>
            <li>
              <strong className="uppercase font-extrabold">
                {t("refund4Title")}
              </strong>
              <p>{t("refund4")}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
