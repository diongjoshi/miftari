import { Select } from "antd";
import i18next from "i18next";

import albanianIcon from "../../../assets/images/albanian-icon.png";
import englishIcon from "../../../assets/images/english-icon.png";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation();

  const options = [
    {
      value: "sq",
      label: (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "20px" }}
              src={albanianIcon}
              alt="Albanian Icon"
            />
            <span>{t("Albanian")}</span>
          </div>
        </>
      ),
    },
    {
      value: "en-us",
      label: (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "20px" }}
              src={englishIcon}
              alt="English Icon"
            />
            <span>{t("English")}</span>
          </div>
        </>
      ),
    },
  ];

  const language = localStorage.getItem("lng");

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);

    localStorage.setItem("lng", lng);
  };

  return (
    <>
      <Select
        bordered={false}
        value={language}
        style={{
          width: 120,
        }}
        onChange={(e) => changeLanguage(e)}
        options={options}
      />
    </>
  );
};

export default LanguageSelector;
