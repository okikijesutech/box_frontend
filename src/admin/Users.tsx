import { useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import axios from "axios";

const users = [
  {
    email: "aodfdasdf@email.com",
    status: "Active",
    Wallet: "3456t3434t344",
    id: 1,
  },
  {
    email: "aodfdasdf@email.com",
    status: "Active",
    Wallet: "3456t3434t344",
    id: 2,
  },
  {
    email: "aodfdasdf@email.com",
    status: "Active",
    Wallet: "3456t3434t344",
    id: 3,
  },
  {
    email: "aodfdasdf@email.com",
    status: "Inactive",
    Wallet: "3456t3434t344",
    id: 4,
  },
  {
    email: "aodfdasdf@email.com",
    status: "Active",
    Wallet: "3456t3434t344",
    id: 5,
  },
];

const Users = () => {
  useEffect(() => {
    axios.get("localhost:3000", {}).then();
  });
  return (
    <AdminLayout>
      <h1 className='text-[48px]'>Users</h1>
      <div className='overflow-x-auto overflow-y-auto flex justify-center items-center'>
        <table className='min-w-full bg-white border border-gray-300'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='py-2 px-4 border-b'>Email</th>
              <th className='py-2 px-4 border-b'>Status</th>
              <th className='py-2 px-4 border-b'>Wallet Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className='py-2 px-4 border-b'>{user.email}</td>
                <td className='py-2 px-4 border-b'>{user.status}</td>
                <td className='py-2 px-4 border-b'>{user.Wallet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Users;
