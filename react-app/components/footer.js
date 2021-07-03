import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-8 mb-4 pt-4 flex flex-col justify-center items-center border-t">
      {t("brought-to-you-by")}{" "}
      <img src="/favicon-32x32.png" alt="Company Logo" className="mt-2 w-8" />
    </footer>
  );
}
