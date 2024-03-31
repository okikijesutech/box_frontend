import { ReactNode } from "react";
import {
  FaUser,
  FaEye,
  FaCogs,
  FaBullseye,
  FaList,
  FaUsers,
} from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../pages/merchant/setting/scroll.css";

interface SidebarItemProps {
  icon: ReactNode; // Explicitly define the type of the icon prop
  text: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const location = useLocation();

  return (
    <li
      className={`flex items-center mt-2 mr-3 ${
        location.pathname.startsWith(path)
          ? "bg-white text-green-500 px-3 rounded-md"
          : ""
      }`}
    >
      {icon}
      <Link to={path} className='ml-2'>
        {text}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='bg-green-600 w-full md:w-[240px] text-white h-full md:h-[100vh] px-6 py-4'>
        <div>
          <Link to='/'>
            <p>IN_BOX</p>
          </Link>
          <p>{user ? "Merchant Dashboard" : "Guest Dashboard"}</p>
        </div>

        <ul className='text-[24px] mt-5 flex lg:flex-col overflow-x-auto custom-scrollbar'>
          <SidebarItem
            icon={<FaEye size={24} style={{ marginRight: "15px" }} />}
            text='Overview'
            path='/merchant'
          />
          <SidebarItem
            icon={<FaList size={24} style={{ marginRight: "15px" }} />}
            text='Order'
            path='/order'
          />
          <SidebarItem
            icon={<FaUser size={24} style={{ marginRight: "15px" }} />}
            text='Products'
            path='/product'
          />
          <SidebarItem
            icon={<FaBullseye size={24} style={{ marginRight: "15px" }} />}
            text='Chats'
            path='/chat'
          />
          <SidebarItem
            icon={<FaUsers size={24} style={{ marginRight: "15px" }} />}
            text='Community'
            path='/community'
          />
          <SidebarItem
            icon={<FaCogs size={24} style={{ marginRight: "15px" }} />}
            text='Setting'
            path='/settings'
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
