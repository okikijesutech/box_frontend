import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SettingLayout {
  children: ReactNode;
}

const SettingLayout: React.FC<SettingLayout> = ({ children }) => {
  return (
    <div>
      <div>
        <ul className='flex'>
          <li
            className={`mr-5 ${
              location.pathname === "/settings"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <Link to='/settings'>Basic Info</Link>
          </li>
          <li
            className={`mr-5 ${
              location.pathname === "/settings/add_admin"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <Link to='/settings/add_admin'>Add Admin</Link>
          </li>
          <li
            className={`mr-5 ${
              location.pathname === "/settings/bankandpayment"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <Link to='/settings/bankandpayment'>Bank and Payment </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SettingLayout;
