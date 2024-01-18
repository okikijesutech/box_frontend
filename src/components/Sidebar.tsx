import { FaUser, FaUserTie, FaEye } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div className='bg-green-600 w-[200px] text-white h-[100vh] px-6'>
      <div>
        <p>IN_BOX</p>
      </div>
      <ul className='text-[24px] mt-5'>
        <li className='flex items-center'>
          <FaEye size={24} style={{ marginRight: "15px" }} />
          <a href='/admin'>Overview</a>
        </li>
        <li className='flex items-center mt-2'>
          <FaUser size={24} style={{ marginRight: "15px" }} />
          <a href='/admin/users'>Users</a>
        </li>
        <li className='flex items-center mt-2'>
          <FaUserTie size={24} style={{ marginRight: "15px" }} />
          <a href='/admin/merchants'>Merchants</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
