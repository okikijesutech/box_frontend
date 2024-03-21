import { ReactNode, useEffect, useState } from "react";
import MerchantSidebar from "../components/MerchantSidebar";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface MerchantLayoutProps {
  children: ReactNode;
}

const MerchantLayout: React.FC<MerchantLayoutProps> = ({ children }) => {
  const { clearAuthTokens, user } = useAuth();
  const navigate = useNavigate();

  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    } else {
      setIsUserDataLoaded(true);
    }
  }, []);

  const handleLogOut = () => {
    clearAuthTokens();
    navigate("/");
  };

  return isUserDataLoaded ? (
    <div className='flex flex-col md:flex-row'>
      <MerchantSidebar />
      <div className='flex flex-col flex-1 min-w-0'>
        <div className='bg-slate-500 p-4 md:pl-0 md:pr-6 flex items-center justify-between'>
          <div>
            <h3 className='text-white'>{user ? user?.name : "Guest"}</h3>
          </div>
          <div>
            <button
              type='button'
              onClick={handleLogOut}
              className='px-3 py-2 bg-red-950 rounded-md text-white'
            >
              Logout
            </button>
          </div>
        </div>
        <main className='px-4 md:px-6 py-4 flex-1'>{children}</main>
      </div>
    </div>
  ) : null;
};

export default MerchantLayout;
