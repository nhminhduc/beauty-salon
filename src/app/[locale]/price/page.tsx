"use client";

import React from "react";
import { useTranslations } from "next-intl";

const PricePage = () => {
  const t = useTranslations("price");

  const services = t.raw("services");

  return (
    <section className="pt-36 pb-24 bg-secondary">
      <div className="container mt-12 xl:mt-24 mx-auto">
        <h1 className="h1 text-center mb-12">{t("title")}</h1>
        <p className="text-center mb-8 text-lg font-semibold text-red-500">
          Avaustarjouksena -50% alennus kaikista palveluistamme alkuperäisistä
          hinnoista ensimmäisen kuukauden aikana (1.11-30.11)!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(
            (
              service: {
                category: string;
                items: { name: string; price: string }[];
              },
              index: number
            ) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="h3 mb-4 text-accent">{service.category}</h2>
                <ul>
                  {service.items.map(
                    (
                      item: { name: string; price: string },
                      itemIndex: number
                    ) => (
                      <li key={itemIndex} className="flex justify-between mb-2">
                        <span>{item.name}</span>
                        <span className="font-bold">{item.price}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricePage;
