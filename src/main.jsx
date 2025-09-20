// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// Importa ambos proveedores de contexto
import { LanguageProvider } from "./Context/LanguageContext.jsx";
import { UIProvider } from "./Context/UIContext.jsx";

import esGlobal from "./Translations/es/global.json";
import enGlobal from "./Translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  resources: {
    es: { global: esGlobal },
    en: { global: enGlobal },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <LanguageProvider>
          {/* Aquí el UIProvider envuelve el resto de la aplicación */}
          <UIProvider>
            <App />
          </UIProvider>
        </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
