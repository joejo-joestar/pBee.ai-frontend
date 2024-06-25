import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BaseRoute from "./routes/BaseRoute";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BaseRoute />
  </React.StrictMode>,
);
