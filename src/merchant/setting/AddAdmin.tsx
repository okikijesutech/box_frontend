import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const admins = [
  {
    name: "sly",
    id: 1,
  },
  {
    name: "fly",
    id: 2,
  },
  {
    name: "ply",
    id: 3,
  },
  {
    name: "gly",
    id: 4,
  },
];

const AddAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { accessToken } = useAuth();
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await axios.get("http://localhost:3000/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setAllUsers(response.data);
    };
    fetchAllUsers();
  }, [accessToken]);
  return (
    <MerchantLayout>
      <SettingLayout>
        <div className='flex '>
          <div className='flex-1 px-4'>
            <form action='' className='flex flex-col'>
              <label htmlFor='email'>search by email</label>
              <input
                type='email'
                name=''
                id='email'
                onChange={(e) => setSearch(e.target.value)}
                className='border-b-2 border-black focus:outline-none'
              />
              <button type='submit'>Add Admin</button>
            </form>
          </div>
          <div className='flex-1'>
            <h4>Existing Admins</h4>
            {admins.map((admin) => (
              <div key={admin.id} className='flex'>
                <p>{admin.name}</p>
                <button className='bg-red-800 rounded-full px-3 py-2 text-white ml-5'>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </SettingLayout>
    </MerchantLayout>
  );
};

export default AddAdmin;
