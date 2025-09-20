// src/Admin/pages/Countries.jsx
import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { UIContext } from "../../Context/UIContext";
import { CrudDashboard } from "../components/CrudDashboard"; // Importación del componente genérico

export const Countries = () => {
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

  // --- CONFIGURACIÓN ESPECÍFICA PARA PAÍSES ---
  // Funciones simuladas de la API (en una app real harían llamadas HTTP)
  const getCountries = async () => [
    { id: 1, name: "Costa Rica" },
    { id: 2, name: "México" },
    { id: 3, name: "Colombia" },
  ];

  const createCountry = async (country) => {
    console.log("Creando país:", country);
    return { ...country, id: Date.now() };
  };

  const updateCountry = async (country) => {
    console.log("Actualizando país:", country);
    return country;
  };

  const deleteCountry = async (id) => {
    console.log("Eliminando país con ID:", id);
    return true;
  };

  // Definición de los campos de la tabla y el formulario
  const countryFields = [
    { key: "id", labelKey: "countries.table.id", type: "text" },
    { key: "name", labelKey: "countries.table.name", type: "text" },
  ];
  // ---------------------------------------------

  return (
    <div style={styles.container}>
      <Navbar />
      <Sidebar />
      <div style={styles.mainContent}>
        {/* Usamos el componente genérico y le pasamos la configuración */}
        <CrudDashboard
          entityName="countries"
          fields={countryFields}
          getItems={getCountries}
          createItem={createCountry}
          updateItem={updateCountry}
          deleteItem={deleteCountry}
        />
      </div>
    </div>
  );
};
