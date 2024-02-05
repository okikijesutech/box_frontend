import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import axios from "axios";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [merchant, setMerchant] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user", {});
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  });
  useEffect(() => {
    const fetchMerchant = async () => {
      try {
        const response = await axios.get("http://localhost:3000/merchant");
        setMerchant(response.data);
      } catch (error) {}
    };
    fetchMerchant();
  });
  return (
    <AdminLayout>
      <h1 className='text-[48px]'>Overview</h1>
      <div className='flex flex-wrap justify-center items-center mt-5'>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Total Users</h4>
          <p className='font-semibold text-[24px]'>{users.length}</p>
        </div>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Total Merchants</h4>
          <p className='font-semibold text-[24px]'>{merchant.length}</p>
        </div>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Total Transaction</h4>
          <p className='font-semibold text-[24px]'>100M</p>
        </div>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Active Users</h4>
          <p className='font-semibold text-[24px]'>560M</p>
        </div>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Active Merchants</h4>
          <p className='font-semibold text-[24px]'>450k</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
