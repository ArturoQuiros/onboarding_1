// src/Admin/components/crud/DataTable.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export const DataTable = ({ data, fields, onEdit, onDelete }) => {
  const { t } = useTranslation("global");

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          {fields.map((field) => (
            <th
              key={field.key}
              style={{
                padding: "12px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              {t(field.labelKey)}
            </th>
          ))}
          <th
            style={{
              padding: "12px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            {t("common.actions")}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
            {fields.map((field) => (
              <td
                key={field.key}
                style={{ padding: "12px", border: "1px solid #ddd" }}
              >
                {item[field.key]}
              </td>
            ))}
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>
              <button
                onClick={() => onEdit(item)}
                style={{ marginRight: "8px" }}
              >
                {t("common.edit")}
              </button>
              <button
                onClick={() => onDelete(item.id)}
                style={{ color: "red" }}
              >
                {t("common.delete")}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
