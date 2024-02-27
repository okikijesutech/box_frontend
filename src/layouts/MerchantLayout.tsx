import { ReactNode, useEffect } from "react";
import MerchantSidebar from "../components/MerchantSidebar";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface MerchantLayoutProps {
  children: ReactNode;
}

const MerchantLayout: React.FC<MerchantLayoutProps> = ({ children }) => {
  const { clearAuthTokens, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);
  const handleLogOut = () => {
    clearAuthTokens();
    navigate("/");
  };
  return (
    <div className='flex'>
      <MerchantSidebar />
      <div>
        <div className='p-4 bg-slate-500 w-[1350px] flex items-center justify-between'>
          <div className=''>
            <h3>{user ? user?.name : "Guest"}</h3>
          </div>
          <div className=''>
            <button
              type='button'
              onClick={handleLogOut}
              className=' px-3 py-2 bg-red-950 rounded-md'
            >
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
