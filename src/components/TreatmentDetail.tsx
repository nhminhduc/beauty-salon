import { useTranslations } from "next-intl";

const TreatmentDetail = ({ pointNumber }: { pointNumber: number }) => {
  const t = useTranslations("treatments");
  return (
    <div key={pointNumber} className="w-full mb-10 last:mb-0 text-center">
      <h3 className="text-2xl font-semibold mb-4 flex items-center place-content-center	">
        {t(`point${pointNumber}.title`)}
      </h3>
      <p className="text-[15px]">{t(`point${pointNumber}.description`)}</p>
    </div>
  );
};

export default TreatmentDetail;
