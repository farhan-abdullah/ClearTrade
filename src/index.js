import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import RootLayout from "./layout/RootLayout";

library.add(faHouse, faUser);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Contiene l'infrastruttura condivisa (es. Navbar, Outlet)
    children: [
      { index: true, element: <HomePage /> },
      // { path: "about", element: <About /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
