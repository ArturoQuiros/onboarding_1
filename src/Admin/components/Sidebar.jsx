import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router"; // Importamos el componente Link
import {
  BsArrowBarLeft,
  BsList,
  BsHouse,
  BsInfoCircle,
  BsGear,
  BsEnvelope,
} from "react-icons/bs";
import { UIContext } from "../../Context/UIContext";

export const Sidebar = () => {
  const { t } = useTranslation("global");
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UIContext);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredToggle, setHoveredToggle] = useState(false);

  const styles = {
    sidebar: {
      position: "fixed",
      top: "60px",
      left: 0,
      height: "calc(100vh - 60px)",
      width: isSidebarOpen ? "220px" : "70px",
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
      justifyContent: isSidebarOpen ? "flex-end" : "center",
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
      color: "#fff",
      // Estilos para eliminar el estilo de enlace predeterminado
      textDecoration: "none",
    },
    menuItemHover: {
      background: "rgba(255, 255, 255, 1)",
      boxShadow: "0 2px 12px rgba(232,28,59,0.12)",
      transform: "translateX(4px)",
      color: "rgb(232, 26, 59)",
    },
    icon: {
      fontSize: "22px",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
      minWidth: "22px",
      textAlign: "center",
    },
    text: {
      opacity: isSidebarOpen ? 1 : 0,
      transition: "opacity 0.3s cubic-bezier(.4,0,.2,1)",
      marginLeft: isSidebarOpen ? "0" : "-12px",
      pointerEvents: isSidebarOpen ? "auto" : "none",
    },
  };

  const menuItems = [
    // El "path" es la ruta a la que navega
    { icon: <BsHouse />, label: t("sidebar.home"), path: "/admin" },
    {
      icon: <BsInfoCircle />,
      label: t("sidebar.countries"),
      path: "/admin/countries",
    },
    { icon: <BsGear />, label: t("sidebar.staff"), path: "/admin/staff" },
    {
      icon: <BsEnvelope />,
      label: t("sidebar.customers"),
      path: "/admin/customers",
    },
  ];

  return (
    <div style={styles.sidebar}>
      <button
        style={styles.toggleButton}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onMouseEnter={() => setHoveredToggle(true)}
        onMouseLeave={() => setHoveredToggle(false)}
        aria-label={isSidebarOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isSidebarOpen ? <BsArrowBarLeft /> : <BsList />}
      </button>
      <div style={styles.menu}>
        {menuItems.map((item, idx) => (
          // Usamos Link para navegar a la ruta definida en el objeto
          <Link
            to={item.path}
            key={idx}
            style={styles.menuItem}
            onMouseEnter={() => setHoveredItem(idx)}
            onMouseLeave={() => setHoveredItem(null)}
            tabIndex={0}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span style={styles.text}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
