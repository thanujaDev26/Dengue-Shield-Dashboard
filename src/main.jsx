import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Authentications/AuthContext.jsx";
import DarkModeWrapper from "./components/DarkModeTheme/DarkModeWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AuthProvider>
        <DarkModeWrapper>
          <App />
        </DarkModeWrapper>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
