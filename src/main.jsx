import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChatContextProvider } from "./context/ChatContext";
import { VerticalNavContextProvider } from "./context/VerticalNavContext";

createRoot(document.getElementById("root")).render(
  <VerticalNavContextProvider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </VerticalNavContextProvider>
);
