import { Link } from "react-router-dom";
import stock from "../assets/stock.jpg";

const UserNavBar = () => {
  return (
    <div className='flex justify-evenly items-center py-2'>
      <div>
        <Link to='/'>IN_BOX</Link>
      </div>
      <div>
        <Link to='/user' className='flex items-center justify-center gap-3'>
          <div className='rounded-full'>
            <img
              src={stock}
              alt=''
              className='rounded-full w-[55px] h-[55px]'
            />
          </div>
          <p>Okiki</p>
        </Link>
      </div>
      <ul className='flex gap-3 items-center'>
        <li>
          <Link to='/user_chat'>chat</Link>
        </li>
        <li>
          <Link to='/user_setting'>settings</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserNavBar;
