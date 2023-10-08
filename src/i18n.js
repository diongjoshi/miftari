import { initReactI18next } from "react-i18next";
import en from "./lng/en-us.json";
import sq from "./lng/sq.json";
import i18next from "i18next";

const storedLanguage = localStorage.getItem("lng") || "sq";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    sq: {
      translation: sq,
    },
  },
  lng: storedLanguage,
});

localStorage.setItem("lng", storedLanguage);

export default i18next;
