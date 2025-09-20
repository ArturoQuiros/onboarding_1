import React from "react";
import { Routes, Route } from "react-router"; // Importa de react-router-dom
import { Landing } from "./Landing/pages/Landing";
import { Admin } from "./Admin/pages/admin";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
