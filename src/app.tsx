import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  Contact,
  Privacy,
  Notfound,
  Signup,
  Signin,
  ForgotPassword,
} from "./pages/merchant";
import {
  Admin,
  Users,
  Merchants,
  Setting,
  AdminSignin,
  AdminSignup,
} from "./pages/admin";
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

const app = () => {
  const router = createBrowserRouter([
    createRoutesFromElements(<Route index element={} />),
  ]);
  return <RouterProvider router={router} />;
};

export default app;
