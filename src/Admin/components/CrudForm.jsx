// src/Admin/components/crud/CrudForm.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const CrudForm = ({ fields, item, onSave, onCancel }) => {
  const { t } = useTranslation("global");
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Si se pasa un 'item', llenamos el formulario con sus datos
    if (item) {
      setFormData(item);
    } else {
      // Si es un nuevo ítem, inicializamos el formulario con campos vacíos
      const initialData = {};
      fields.forEach((field) => {
        initialData[field.key] = "";
      });
      setFormData(initialData);
    }
  }, [item, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
        {item ? t("common.edit") : t("common.create")}
      </h3>
      {fields.map((field) => (
        <div key={field.key} style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            {t(field.labelKey)}
          </label>
          <input
            type={field.type || "text"}
            name={field.key}
            value={formData[field.key] || ""}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      ))}
      <button
        type="submit"
        style={{
          marginRight: "10px",
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {t("common.save")}
      </button>
      <button
        type="button"
        onClick={onCancel}
        style={{
          padding: "10px 15px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {t("common.cancel")}
      </button>
    </form>
  );
};
