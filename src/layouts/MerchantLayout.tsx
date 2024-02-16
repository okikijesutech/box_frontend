import { ReactNode } from "react";
import MerchantSidebar from "../components/MerchantSidebar";

interface MerchantLayoutProps {
  children: ReactNode;
}

const MerchantLayout: React.FC<MerchantLayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <MerchantSidebar />
      <div>
        <div className='p-4 bg-slate-500 w-[1350px] flex items-center justify-between'>
          <div className=''>
            <h3>User Name</h3>
          </div>
          <div className=''>
            <button type='button' className=' px-3 py-2 bg-red-950 rounded-md'>
              Logout
            </button>
          </div>
        </div>
        <main className='px-6 py-4'>{children}</main>
      </div>
    </div>
  );
};

export default MerchantLayout;
