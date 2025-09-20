// src/Admin/components/crud/CrudDashboard.jsx
import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { CrudForm } from "./CrudForm";
import { useTranslation } from "react-i18next";

export const CrudDashboard = ({
  entityName,
  fields,
  getItems,
  createItem,
  updateItem,
  deleteItem,
}) => {
  const { t } = useTranslation("global");
  const [items, setItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Carga inicial de datos
    const fetchData = async () => {
      // Por ahora, simulamos los datos. Aquí iría la llamada a getItems.
      const data = await getItems();
      setItems(data);
    };
    fetchData();
  }, [getItems]);

  const handleCreate = () => {
    setSelectedItem(null);
    setIsFormOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    // Llama a la función de la API para eliminar y luego actualiza el estado
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSave = async (item) => {
    if (item.id) {
      // Actualiza un ítem existente
      const updatedItem = await updateItem(item);
      setItems(items.map((i) => (i.id === updatedItem.id ? updatedItem : i)));
    } else {
      // Crea un nuevo ítem
      const newItem = await createItem(item);
      setItems([...items, newItem]);
    }
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <h2>{t(`${entityName}.title`)}</h2>
      <button onClick={handleCreate}>{t(`${entityName}.createButton`)}</button>

      {isFormOpen ? (
        <CrudForm
          fields={fields}
          item={selectedItem}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <DataTable
          data={items}
          fields={fields}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};
