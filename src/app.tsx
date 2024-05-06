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
import {
  UserChat,
  UserLanding,
  UserSetting,
  UserSignin,
  UserSignup,
} from "./pages/user";
import StoreFront from "./pages/user/StoreFront";
import ProfileImage from "./pages/merchant/ProfileImage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Landing Page routes*/}
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/forgotten_password' element={<ForgotPassword />} />
        {/** Admin routes */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/merchant' element={<Merchants />} />
        <Route path='/admin/signin' element={<AdminSignin />} />
        <Route path='/admin/signup' element={<AdminSignup />} />
        <Route path='/admin/setting' element={<Setting />} />
        {/* merchant  routes    */}
        <Route path='/merchant_dashboard' element={<Merchant />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/add_product' element={<AddProduct />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/settings/add_admin' element={<AddAdmin />} />
        <Route path='/settings/bankandpayment' element={<BankAndPayment />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/order' element={<Order />} />
        <Route path='/community' element={<Community />} />
        <Route path='/profile_image' element={<ProfileImage />} />
        {/** user routes */}
        <Route path='/user_signin' element={<UserSignin />} />
        <Route path='/user_signup' element={<UserSignup />} />
        <Route path='/user' element={<UserLanding />} />
        <Route path='/merchant/:id' element={<StoreFront />} />
        <Route path='/user_chat' element={<UserChat />} />
        <Route path='/user_setting' element={<UserSetting />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
