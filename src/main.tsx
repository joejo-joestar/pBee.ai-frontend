import React from "react";
import ReactDOM from "react-dom/client";
import App from "@c/App/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pricing from "@r/Pricing";
import MoreAboutUs from "@p/MoreAboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/moreaboutus",
    element: <MoreAboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
