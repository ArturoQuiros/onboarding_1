import React from "react";

export const Header = () => {
  const styles = {
    header: {
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
    },
    logo: {
      width: "120px",
      height: "auto",
    },
    title: {
      color: "rgb(232, 26, 59)",
      fontFamily: "Trebuchet MS, sans-serif",
      fontSize: "20px",
      marginLeft: "20px", // separación flexible
    },
  };

  return (
    <header style={styles.header}>
      <img
        src="https://cdn.bdo.global/images/bdo_logo/1.0.0/bdo_logo_color.png"
        alt="BDO logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>Costa Rica</h1>
    </header>
  );
};
