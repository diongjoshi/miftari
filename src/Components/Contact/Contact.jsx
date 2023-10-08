import { useEffect, useRef } from "react";
import "./Contact.css";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const titlesRef = useRef();
  const boxesRef = useRef();
  const mapRef = useRef();
  const paragraphRef = useRef();

  const areTitlesInView = useInView(titlesRef, { once: true });
  const areBoxesInVew = useInView(boxesRef, { once: true });
  const mapInView = useInView(mapRef, { once: true });
  const paragraphInView = useInView(paragraphRef, { once: true });

  const titleControls = useAnimation();
  const boxesControls = useAnimation();
  const mapControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (areTitlesInView) {
      titleControls.start("visible");
    }

    if (areBoxesInVew) {
      boxesControls.start("visible");
    }
    if (mapInView) {
      mapControls.start("visible");
    }
    if (paragraphInView) {
      paragraphControls.start("visible");
    }
  }, [
    areTitlesInView,
    titleControls,
    areBoxesInVew,
    boxesControls,
    mapInView,
    mapControls,
    paragraphInView,
    paragraphControls,
  ]);

  const handleAddressNavigate = () => {
    window.open(
      "https://www.google.com/maps/place/Miftari+Commerce/@42.6271719,21.0864515,17z/data=!3m1!4b1!4m6!3m5!1s0x1353620be9699f91:0x42ca6c380e7762a5!8m2!3d42.627168!4d21.0890264!16s%2Fg%2F1q5gxzl0c?entry=ttu",
      "_blank"
    );
  };

  return (
    <>
      <div className="container">
        <div className="contact">
          <motion.div
            ref={titlesRef}
            className="contact-titles"
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="contact-subtitle">
              <span className="contact-title-line"></span>
              <span style={{ fontWeight: "700" }}>{t("ContactUs")}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "var(--secondary-red-color)",
                }}
              >
                {t("Contacts")}
              </span>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {t("Informations")}
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={boxesRef}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="contact-informations__boxes-container"
          >
            <div
              style={{ cursor: "pointer" }}
              className="contact-informations__boxes"
              onClick={handleAddressNavigate}
            >
              <i className="uil uil-map-marker contact-informations__boxes-icon"></i>
              <span className="contact-informations__boxes-titles">
                {t("Address")}
              </span>
              <span>Miftari Commerce, E851, Fushë Kosovë</span>
            </div>
            <div className="contact-informations__boxes">
              <i className="uil uil-envelope-open contact-informations__boxes-icon"></i>
              <span className="contact-informations__boxes-titles">Email</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="mailto:miftaricommerce@gmail.com"
                >
                  miftaricommerce@gmail.com
                </a>
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="mailto:miftaricommerce@yahoo.com"
                >
                  miftaricommerce@yahoo.com
                </a>
              </div>
            </div>
            <div className="contact-informations__boxes">
              <i className="uil uil-phone contact-informations__boxes-icon"></i>
              <span className="contact-informations__boxes-titles">
                {t("Phone")}
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="tel:+38349146105"
                >
                  +383 49 146 105 / 146 449
                </a>
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="tel: +38344146105"
                >
                  +383 44 146 105 / 146 449
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.iframe
          ref={mapRef}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mapControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.6125767501217!2d21.08645147661852!3d42.62717191818356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353620be9699f91%3A0x42ca6c380e7762a5!2sMiftari%20Commerce!5e0!3m2!1sen!2s!4v1696179532758!5m2!1sen!2s"
          width="100%"
          height="660"
          style={{ border: "0", marginTop: "60px" }}
          allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></motion.iframe>
        <div style={{ display: "flex", gap: "8rem", margin: "180px 0" }}>
          <div className="contact-titles">
            <div className="contact-subtitle">
              <span className="contact-title-line"></span>
              <span style={{ fontWeight: "700" }}>{t("WhereWeWork")}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "var(--secondary-red-color)",
                }}
              >
                {t("Workspace")}
              </span>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {t("Informations")}
              </span>
            </div>
          </div>
          <motion.p
            ref={paragraphRef}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={paragraphControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ fontSize: "26px", color: "#666", fontWeight: "300" }}
          >
            {t("Collaborate")}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Contact;
