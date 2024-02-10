import { useEffect, useState } from "react";
import MerchantLayout from "../layouts/MerchantLayout";
import axios from "axios";

const Merchant = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const fetchuser = async () => {
        const response = await axios.get("http://localhost:3000/user");
        setUsers(response.data);
      };
      fetchuser();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <MerchantLayout>
      <h1 className='text-[48px]'>Overview</h1>
      <div className='flex flex-wrap justify-center items-center mt-5'>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Total Users</h4>
          <p className='font-semibold text-[24px]'>{users.length || 0}</p>
        </div>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Total Transaction</h4>
          <p className='font-semibold text-[24px]'>100M</p>
        </div>
        <div className='w-[350px] bg-slate-400 rounded-md px-5 py-2 mr-5 mt-5'>
          <h4 className='font-semibold text-[32px]'>Active Users</h4>
          <p className='font-semibold text-[24px]'>560M</p>
        </div>
      </div>
    </MerchantLayout>
  );
};

export default Merchant;
