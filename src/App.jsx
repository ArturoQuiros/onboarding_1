import React from "react";
import { Routes, Route } from "react-router"; // Importa de react-router-dom
import { Landing } from "./Landing/pages/Landing";
import { Admin } from "./Admin/pages/admin"; // La "A" mayúscula es importante
import { Countries } from "./Admin/pages/Countries";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/countries" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
