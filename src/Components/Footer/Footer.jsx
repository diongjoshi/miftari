import { useTranslation } from "react-i18next";
import miftariHorizontalLogo from "../../assets/images/Miftari Horizontal Logo White.png";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleFacebookLinkClick = (e) => {
    e.preventDefault();
    window.open("https://www.facebook.com/miftaricommerce", "_blank");
  };

  const handleTelLinkClick = (e) => {
    e.preventDefault();
    window.open("https://wa.me/+38344146105", "_blank");
  };

  return (
    <>
      <section className="footer-bg">
        <footer className="footer container">
          <div className="footer__container">
            <div className="footer__logo">
              <span>
                <img src={miftariHorizontalLogo} alt="Miftari-Commerce Logo" />
              </span>
              <p>{t("YourTrustedPartner")}</p>
            </div>

            <div className="footer__logo">
              <span className="footer__titles">{t("Contacts")}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <i className="uil uil-phone contact-informations__boxes-icon"></i>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <a
                      href="tel:+38349146105"
                      style={{
                        textDecoration: "none",
                        fontSize: "19px",
                        color: "#fff",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      +383 49 146 105 / 146 449
                    </a>
                    <a
                      href="tel:+38344146105"
                      style={{
                        textDecoration: "none",
                        fontSize: "19px",
                        color: "#fff",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      +383 44 146 105 / 146 449
                    </a>
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <i className="uil uil-map-marker contact-informations__boxes-icon"></i>
                  <div>
                    <a
                      href="https://www.google.com/maps/place/Miftari+Commerce/@42.6271719,21.0864515,17z/data=!3m1!4b1!4m6!3m5!1s0x1353620be9699f91:0x42ca6c380e7762a5!8m2!3d42.627168!4d21.0890264!16s%2Fg%2F1q5gxzl0c?entry=ttu"
                      style={{
                        fontSize: "19px",
                        color: "#fff",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Miftari Commerce, E851, Fushë Kosovë
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer__logo">
              <span className="footer__titles">{t("Company")}</span>
              <ul className="footer__links">
                <li
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="uil uil-angle-right"></i> {t("Home")}
                </li>
                <li
                  onClick={() => {
                    navigate("/company");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="uil uil-angle-right"></i> {t("Company")}
                </li>
                <li>
                  <i className="uil uil-angle-right"></i> {t("Products")}
                </li>
                <li
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="uil uil-angle-right"></i> {t("Contacts")}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__developed-by">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <span
                style={{ fontSize: "19px", color: "#fff", fontWeight: "600" }}
              >
                Miftari-Commerce © {t("DevelopedBy")}
                <a
                  href="https://www.linkedin.com/in/dion-gjoshi-624813217/"
                  target="_blank"
                  rel="noreferrer"
                  className="developer"
                >
                  Dion
                </a>
              </span>
              <span
                style={{ fontSize: "19px", color: "#fff", fontWeight: "600" }}
              >
                {t("AllRights")} Copyrights 2023
              </span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <span
                onClick={handleFacebookLinkClick}
                style={{ cursor: "pointer" }}
                className="footer-background-icons"
              >
                <i className="footer__social-links uil uil-facebook-f"></i>
              </span>
              <span
                onClick={handleTelLinkClick}
                style={{ cursor: "pointer" }}
                className="footer-background-icons"
              >
                <i className="footer__social-links uil uil-whatsapp"></i>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
