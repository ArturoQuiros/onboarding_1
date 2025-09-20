import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { t } = useTranslation("global");
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredToggle, setHoveredToggle] = useState(false);

  const styles = {
    sidebar: {
      position: "fixed",
      top: "60px",
      left: 0,
      height: "calc(100vh - 60px)",
      width: isOpen ? "220px" : "70px",
      background: "rgb(232, 26, 59)",
      color: "#fff",
      transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingTop: "16px",
      boxShadow: "2px 0 12px rgba(0,0,0,0.15)",
      zIndex: 999,
      borderTopRightRadius: "18px",
      borderBottomRightRadius: "18px",
      overflow: "hidden",
    },
    toggleButton: {
      background: hoveredToggle
        ? "rgba(255,255,255,0.15)"
        : "rgba(255,255,255,0.08)",
      border: "none",
      color: "#fff",
      fontSize: "24px",
      cursor: "pointer",
      padding: "12px",
      width: "100%",
      textAlign: "center",
      marginBottom: "24px",
      borderRadius: "0 12px 12px 0",
      transition: "background 0.3s, box-shadow 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: isOpen ? "flex-end" : "center",
      boxShadow: hoveredToggle ? "0 4px 12px rgba(0,0,0,0.25)" : "none",
    },
    menu: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      padding: "0 8px",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "12px 10px",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
      fontSize: "16px",
      fontFamily: "Trebuchet MS, sans-serif",
      whiteSpace: "nowrap",
      background: "transparent",
      transform: "translateX(0)",
    },
    menuItemHover: {
      background: "rgba(255, 255, 255, 1)",
      boxShadow: "0 2px 12px rgba(232,28,59,0.12)",
      transform: "translateX(4px)",
    },
    icon: {
      fontSize: "22px",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
      minWidth: "22px",
      textAlign: "center",
    },
    text: {
      opacity: isOpen ? 1 : 0,
      transition: "opacity 0.3s cubic-bezier(.4,0,.2,1)",
      marginLeft: isOpen ? "0" : "-12px",
      pointerEvents: isOpen ? "auto" : "none",
    },
  };

  const menuItems = [
    { icon: "🏠", label: t("navbar.home") },
    { icon: "ℹ️", label: t("navbar.about") },
    { icon: "🛠️", label: t("navbar.services") },
    { icon: "📞", label: t("navbar.contact") },
  ];

  return (
    <div style={styles.sidebar}>
      {/* Toggle Button */}
      <button
        style={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setHoveredToggle(true)}
        onMouseLeave={() => setHoveredToggle(false)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? "←" : "☰"}
      </button>

      {/* Menu Items */}
      <div style={styles.menu}>
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              ...styles.menuItem,
              ...(hoveredItem === idx ? styles.menuItemHover : {}),
            }}
            onMouseEnter={() => setHoveredItem(idx)}
            onMouseLeave={() => setHoveredItem(null)}
            tabIndex={0}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span style={styles.text}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
