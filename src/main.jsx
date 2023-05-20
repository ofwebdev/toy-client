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
import AuthProvider from "./provider/AuthProvider.jsx";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import ToyDetails from "./components/Details/ToyDetails.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addToy",
    element: (
      <PrivateRoute>
        <AddToy />
      </PrivateRoute>
    ),
  },

  {
    path: "/view/:id",
    element: (
      <PrivateRoute>
        <ToyDetails />
      </PrivateRoute>
    ),
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
