import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import axios from "axios";

interface User {
  id: number;
  email: string;
  status: string;
  wallet: string;
}

const Merchants = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/merchant", {});
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  const handleDelete = async (id: number) => {
    try {
      axios.delete(`http://localhost:3000/merchant/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminLayout>
      <h1 className='text-[48px]'>Merchants</h1>
      <div className='overflow-x-auto overflow-y-auto'>
        <table className='min-w-full bg-white border border-gray-300'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='py-2 px-4 border-b'>Email</th>
              <th className='py-2 px-4 border-b'>Status</th>
              <th className='py-2 px-4 border-b'>Wallet Address</th>
              <th className='py-2 px-4 border-b'>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "bg-gray-50" : ""}
                >
                  <td className='py-2 px-4 border-b'>{user.email}</td>
                  <td className='py-2 px-4 border-b'>{user.status}</td>
                  <td className='py-2 px-4 border-b'>{user.wallet}</td>
                  <td className='py-2 px-4 border-b'>
                    <button
                      className='bg-red-800 p-2 rounded'
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center py-4'>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Merchants;
