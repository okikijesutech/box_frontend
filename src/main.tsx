import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Contact, Privacy, Notfound } from "./pages";
import { Admin, Users, Merchants, Signup, Signin } from "./admin";
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
