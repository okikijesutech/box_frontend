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
} from "./pages/merchant";
import { Admin, Users, Merchants, Setting } from "./pages/admin";
import {
  AddAdmin,
  AddProduct,
  BankAndPayment,
  ChatPage,
  Merchant,
  Product,
  Settings,
  Order,
  Community,
} from "./pages/merchant/product";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";

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
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/add_product",
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
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/settings/add_admin",
    element: <AddAdmin />,
  },
  {
    path: "/settings/bankandpayment",
    element: <BankAndPayment />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/community",
    element: <Community />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
