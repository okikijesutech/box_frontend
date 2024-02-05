import { ReactNode } from "react";

interface SettingLayout {
  children: ReactNode;
}

const SettingLayout: React.FC<SettingLayout> = ({ children }) => {
  return (
    <div>
      <div>
        <ul className='flex'>
          <li className='mr-5'>
            <a href='/merchant/settings'>Basic Info</a>
          </li>
          <li className='mr-5'>
            <a href='/merchant/settings/add_admin'>Add Admin</a>
          </li>
          <li className='mr-5'>
            <a href='/merchant/settings/bankandpayment'>Bank and Payment </a>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SettingLayout;
