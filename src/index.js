import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter 
    basename="react-mesto-auth">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
