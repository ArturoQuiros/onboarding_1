import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

export const Admin = () => {
  // El estado del sidebar vive aquí
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    mainContent: {
      flexGrow: 1,
      // El margen se ajusta dinámicamente según el estado
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
      {/* Le pasamos el estado y la función para cambiarlo al Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div style={styles.mainContent}>
        <h1>Contenido del CRUD</h1>
        <p>
          Aquí irá la tabla de datos, formularios y otras herramientas de
          administración.
        </p>
      </div>
    </div>
  );
};
