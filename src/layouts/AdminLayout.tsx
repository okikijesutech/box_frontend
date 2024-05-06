import { ReactNode, useState, useEffect } from "react";
// import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  // const { clearAuthTokens, user } = useAuth();
  const navigate = useNavigate();

  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/admin/signin");
  //   } else {
  //     console.log(user);
  //     setIsUserDataLoaded(true);
  //   }
  // }, []);

  // const handleLogOut = () => {
  //   clearAuthTokens();
  //   navigate("/");
  // };

  return (
    <div className='flex h-screen'>
      <div className='flex flex-col md:flex-row h-screen'>
        <Sidebar />
        <div className='flex flex-col flex-1 min-w-0'>
          <div className='bg-slate-500 p-4 md:pl-0 md:pr-6 flex items-center justify-between'>
            <div>
              {/* <h3 className='text-white'>{user ? user?.name : "Guest"}</h3> */}
            </div>
            <div>
              <button
                type='button'
                // onClick={handleLogOut}
                className='px-3 py-2 bg-red-950 rounded-md text-white'
              >
                Logout
              </button>
            </div>
          </div>
          <main className='p-6'>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
