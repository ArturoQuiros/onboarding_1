import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";
import { LanguageContext } from "../../Context/LanguageContext";

export const Navbar = () => {
  const { i18n } = useTranslation("global");
  const { setLanguage } = useContext(LanguageContext);

  const styles = {
    navbar: {
      backgroundColor: "white",
      padding: "10px 20px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
    },
    logo: {
      width: "120px",
      height: "auto",
    },
    title: {
      color: "rgb(232, 26, 59)",
      fontFamily: "Trebuchet MS, sans-serif",
      fontSize: "20px",
      marginLeft: "20px",
    },
    menu: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "20px",
    },
    langButton: {
      color: "rgb(232, 26, 59)",
      backgroundColor: "transparent",
      border: "1px solid rgb(232, 26, 59)",
      borderRadius: "4px",
      padding: "6px 10px",
      marginRight: "10px",
      fontSize: "16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "background-color 0.2s, color 0.2s",
      // Agrega esto para eliminar el contorno del navegador
      outline: "none",
    },
    langButtonHover: {
      backgroundColor: "rgb(232, 26, 59)",
      color: "white",
    },
  };

  const [hovered, setHovered] = useState(null);

  const handleLanguageToggle = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    setLanguage(newLang);
  };

  return (
    <nav style={styles.navbar}>
      <img
        src="https://cdn.bdo.global/images/bdo_logo/1.0.0/bdo_logo_color.png"
        alt="BDO logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>Costa Rica</h1>
      <div style={styles.menu}>
        <button
          type="button"
          style={{
            ...styles.langButton,
            ...(hovered === "lang" ? styles.langButtonHover : {}),
          }}
          onMouseEnter={() => setHovered("lang")}
          onMouseLeave={() => setHovered(null)}
          onClick={handleLanguageToggle}
          title="Cambiar idioma"
        >
          <BsTranslate style={{ fontSize: "20px" }} />
          <span>{i18n.language === "es" ? "EN" : "ES"}</span>
        </button>
      </div>
    </nav>
  );
};
