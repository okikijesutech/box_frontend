import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";

const UserLayout = () => {
  return (
    <>
      <UserNavBar />
      <Outlet />
    </>
  );
};

export default UserLayout;
