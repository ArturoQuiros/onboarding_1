import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { UIContext } from "../../Context/UIContext";

export const Admin = () => {
  const { isSidebarOpen } = useContext(UIContext);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    mainContent: {
      flexGrow: 1,
      marginLeft: isSidebarOpen ? "220px" : "70px",
      padding: "20px",
      transition: "margin-left 0.3s cubic-bezier(.4,0,.2,1)",
      marginTop: "60px",
      overflowY: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <Sidebar />
      <div style={styles.mainContent}>
        <h1>ADM Dashboard</h1>
        <p>Aquí irá eventualmente un dashboard de ADM.</p>
      </div>
    </div>
  );
};
