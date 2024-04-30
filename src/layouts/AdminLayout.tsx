import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <main className='p-6'>{children}</main>
    </div>
  );
};

export default AdminLayout;
