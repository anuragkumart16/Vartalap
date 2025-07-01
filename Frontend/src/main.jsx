import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChatContextProvider } from "./context/ChatContext";
import { VerticalNavContextProvider } from "./context/VerticalNavContext";
import Auth from "./pages/Auth.jsx";
import { AuthProvider } from "./context/AuthContext";
import { OverlayContextProvider } from "./context/OverlayContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <OverlayContextProvider>
      <VerticalNavContextProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </VerticalNavContextProvider>
    </OverlayContextProvider>
  </AuthProvider>
);
