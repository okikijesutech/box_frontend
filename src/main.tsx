import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Contact,
  Privacy,
  Notfound,
  Signup,
  Signin,
  ForgotPassword,
} from "./pages";
import { Admin, Users, Merchants, Setting } from "./admin";
import { AddProduct, Merchant, Product, Settings } from "./merchant";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/forgotten_password",
    element: <ForgotPassword />,
  },

  // Admin Routes
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/users",
    element: <Users />,
  },
  {
    path: "/admin/merchants",
    element: <Merchants />,
  },
  {
    path: "/admin/signin",
    element: <Signin />,
  },
  {
    path: "/admin/signup",
    element: <Signup />,
  },
  {
    path: "/admin/setting",
    element: <Setting />,
  },
  // Merchant routes
  {
    path: "/merchant",
    element: <Merchant />,
  },
  {
    path: "/merchant/product",
    element: <Product />,
  },
  {
    path: "/merchant/product/add_product",
    element: <AddProduct />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/merchant/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
