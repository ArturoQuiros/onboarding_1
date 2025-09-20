import "./App.css";
import { Landing } from "./Landing/pages/Landing";
import { Routes, Route } from "react-router";
import { Admin } from "./Admin/pages/admin";

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
