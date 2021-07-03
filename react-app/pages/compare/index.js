import { useTranslation } from "react-i18next";

export default function Compare() {
  const { t } = useTranslation();

  return <div>{t("home-hello")}</div>;
}
