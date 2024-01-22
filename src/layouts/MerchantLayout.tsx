import { ReactNode } from "react";
import MerchantSidebar from "../components/MerchantSidebar";

interface MerchantLayoutProps {
  children: ReactNode;
}

const MerchantLayout: React.FC<MerchantLayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <MerchantSidebar />
      <main className='px-6 py-4'>{children}</main>
    </div>
  );
};

export default MerchantLayout;
