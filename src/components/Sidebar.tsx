import { Link } from "react-router-dom";
import { FaUser, FaUserTie, FaEye, FaGear } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='bg-green-600 w-[200px] text-white h-[100vh] px-6 py-4'>
      <div>
        <Link to='/'>
          <p>IN_BOX</p>
        </Link>
      </div>
      <ul className='text-[24px] mt-5'>
        <li className='flex items-center'>
          <FaEye size={24} style={{ marginRight: "15px" }} />
          <Link to='/admin'>Overview</Link>
        </li>
        <li className='flex items-center mt-2'>
          <FaUser size={24} style={{ marginRight: "15px" }} />
          <Link to='/admin/users'>Users</Link>
        </li>
        <li className='flex items-center mt-2'>
          <FaUserTie size={24} style={{ marginRight: "15px" }} />
          <Link to='/admin/merchants'>Merchants</Link>
        </li>
        <li className='flex items-center mt-2'>
          <FaGear size={24} style={{ marginRight: "15px" }} />
          <Link to='/admin/setting'>Setting</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
