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
        <div className='p-4 bg-slate-500 w-[1350px]'>User Name</div>
        <main className='px-6 py-4'>{children}</main>
      </div>
    </div>
  );
};

export default MerchantLayout;
