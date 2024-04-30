import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className='px-[10%]'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
