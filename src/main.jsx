import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./components/NotFound/Notfound.jsx";
import AddToy from "./components/AddToy/AddToy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addToy",
    element: <AddToy></AddToy>,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
