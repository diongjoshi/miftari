import "./Navbar.css";

import miftariHorizontalLogo from "../../assets/images/Miftari Horizontal Logo.png";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <span
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
            className="navbar__logo"
          >
            <img src={miftariHorizontalLogo} alt="Miftari-Commerce Logo" />
          </span>
          <ul className="navbar__list">
            <li
              className={activeLink === "/" ? "active" : ""}
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
            >
              {t("Home")}
            </li>
            <li
              className={activeLink === "/company" ? "active" : ""}
              onClick={() => {
                navigate("/company");
                scrollToTop();
              }}
            >
              {t("Company")}
            </li>
            <li>{t("Products")}</li>
            <li
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
            >
              {t("Contacts")}
            </li>
          </ul>
          {/* <LanguageSelect /> */}
          <LanguageSelector />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
