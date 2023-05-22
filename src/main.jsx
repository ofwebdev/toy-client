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
import BlogPage from "./components/Blog/BlogPage.jsx";
import AllToys from "./components/GetToy/AllToys.jsx";
import UpdateToy from "./components/UpdateToy/UpdateToy.jsx";
import SearchToy from "./components/Serach/SearchToy.jsx";
import ViewDetails from "./components/GetToy/ViewDetails.jsx";
import MyToy from "./components/MyToys/Mytoy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/allToys",
    element: <AllToys />,
    loader: () => fetch("https://toy-store-server-ofwebdev.vercel.app/toy"),
  },

  {
    path: "/myToys",
    element: <MyToy />,
    loader: () => fetch("https://toy-store-server-ofwebdev.vercel.app/toy"),
  },

  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <ViewDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://toy-store-server-ofwebdev.vercel.app/toy/${params.id}`),
  },

  {
    path: "/updateToy/:id",
    element: <UpdateToy />,
    loader: ({ params }) =>
      fetch(`https://toy-store-server-ofwebdev.vercel.app/toy/${params.id}`),
  },
  {
    path: "/addToy",
    element: (
      <PrivateRoute>
        <AddToy />
      </PrivateRoute>
    ),
  },

  // {
  //   path: "/addToy",
  //   element: <SearchToy />,
  //   loader: ({ params }) => fetch(`https://toy-store-server-ofwebdev.vercel.app/toy/serach`),
  // },

  {
    path: "/toy/:id",
    element: (
      <PrivateRoute>
        <ToyDetails />
      </PrivateRoute>
    ),
  },

  {
    path: "/blog",
    element: <BlogPage />,
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
