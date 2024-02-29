import { ReactNode } from "react";
import { FaUser, FaEye, FaCogs, FaBullseye } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode; // Explicitly define the type of the icon prop
  text: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const location = useLocation();

  return (
    <li
      className={`flex items-center mt-2 ${
        location.pathname === path
          ? "bg-white text-green-500 px-3 rounded-md"
          : ""
      }`}
    >
      {icon}
      {/* <a href={path}>{text}</a> */}
      <Link to={path} className='ml-2'>
        {text}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className='bg-green-600 w-[200px] text-white h-[100vh] px-6 py-4'>
      <div>
        <a href='/'>
          <p>IN_BOX</p>
        </a>
        <p>Merchant Dashboard</p>
      </div>
      <ul className='text-[24px] mt-5'>
        <SidebarItem
          icon={<FaEye size={24} style={{ marginRight: "15px" }} />}
          text='Overview'
          path='/merchant'
        />
        <SidebarItem
          icon={<FaUser size={24} style={{ marginRight: "15px" }} />}
          text='Products'
          path='/merchant/product'
        />
        <SidebarItem
          icon={<FaCogs size={24} style={{ marginRight: "15px" }} />}
          text='Setting'
          path='/merchant/settings'
        />
        <SidebarItem
          icon={<FaBullseye size={24} style={{ marginRight: "15px" }} />}
          text='Chats'
          path='/merchant/chat'
        />
      </ul>
    </div>
  );
};

export default Sidebar;
