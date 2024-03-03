import { ReactNode } from "react";

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
              location.pathname === "/merchant/settings"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <a href='/merchant/settings'>Basic Info</a>
          </li>
          <li
            className={`mr-5 ${
              location.pathname === "/merchant/settings/add_admin"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <a href='/merchant/settings/add_admin'>Add Admin</a>
          </li>
          <li
            className={`mr-5 ${
              location.pathname === "/merchant/settings/bankandpayment"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <a href='/merchant/settings/bankandpayment'>Bank and Payment </a>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SettingLayout;
