import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Company.css";
import { useTranslation } from "react-i18next";

const Company = () => {
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

  return (
    <>
      <div className="container">
        <div className="contact">
          <motion.div
            ref={titlesRef}
            className="contact-titles"
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ width: "25%" }}
          >
            <div className="contact-subtitle">
              <span className="contact-title-line"></span>
              <span style={{ fontWeight: "700" }}>{t("WhoAreWe")}</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
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
                {t("WordOur")}
              </span>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {t("WordCompany")}
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={boxesRef}
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="about-company"
            style={{ width: "75%" }}
          >
            <p className="about-company__paragraph">
              <b
                style={{ color: "var(--secondary-red-color)", fontWeight: 500 }}
              >
                {t("EstablishedTitle")}
              </b>
              {t("EstablishedText")}
            </p>
            <p className="about-company__paragraph">
              {t("WithOverTwoDecades")}
            </p>
          </motion.div>
        </div>
        <div className="contact">
          <motion.div
            ref={titlesRef}
            className="contact-titles"
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ width: "25%" }}
          >
            <div className="contact-subtitle">
              <span className="contact-title-line"></span>
              <span style={{ fontWeight: "700" }}>{t("WhyChooseUs")}</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
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
                {t("MissionOurWord")}
              </span>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {t("MissionMissionWord")}
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={boxesRef}
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="about-company"
            style={{ width: "75%" }}
          >
            <p className="about-company__paragraph">
              {t("At")}{" "}
              <b
                style={{ color: "var(--secondary-red-color)", fontWeight: 500 }}
              >
                Miftari Commerce
              </b>{" "}
              , {t("OurMissionParagraph")}
            </p>
            <p className="about-company__paragraph">
              {t("OurMissionParagraph2")}
            </p>
            <p className="about-company__paragraph">
              {t("OurMissionParagraph3")}
            </p>
          </motion.div>
        </div>
        <div className="contact">
          <motion.div
            ref={titlesRef}
            className="contact-titles"
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{ width: "25%" }}
          >
            <div className="contact-subtitle">
              <span className="contact-title-line"></span>
              <span style={{ fontWeight: "700" }}>{t("Employees")}</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
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
                {t("StaffOurWord")}
              </span>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {t("StaffStaffWord")}
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={boxesRef}
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="about-company"
            style={{ width: "75%", marginBottom: "100px" }}
          >
            <p className="about-company__paragraph">{t("StaffParagraph")}</p>
            <p></p>
            <p className="about-company__paragraph">
              <b style={{ fontWeight: "600", color: "#000" }}>
                {t("StaffParagraph2Title")}:{" "}
              </b>
              {t("StaffParagraph2")}
            </p>
            <p className="about-company__paragraph">
              <b style={{ fontWeight: "600", color: "#000" }}>
                {t("StaffParagraph3Title")}{" "}
              </b>
              {t("StaffParagraph3")}
            </p>
            <p className="about-company__paragraph">
              <b style={{ fontWeight: "600", color: "#000" }}>
                {t("StaffParagraph4Title")}{" "}
              </b>
              {t("StaffParagraph4")}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Company;
