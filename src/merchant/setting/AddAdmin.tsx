import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import "./scroll.css";

interface User {
  id: string;
  email: string;
  // Add other properties if available in your user object
}

const AddAdmin = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  // const [errorMessage, setErrorMessage] = useState("");
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

  const handleAddAdmin = async (userId: any) => {
    try {
      if (!userId) console.log("Invalid user ID");

      axios.post(
        "http://localhost:3000/admin/add-admin",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (search.trim() === "") {
    //   setFilteredUsers([]);
    //   setErrorMessage("Input an Email you want to add");
    // } else {
    //   const filtered = allUsers.filter((user) =>
    //     user.email.toLowerCase().includes(search.toLowerCase())
    //   );
    //   if (filtered.length === 0) {
    //     setFilteredUsers([]);
    //     setErrorMessage("Email not found.");
    //   } else {
    //     setFilteredUsers(filtered);
    //     setErrorMessage("");
    //   }
    // }
    setFilteredUsers(
      allUsers.filter((user) =>
        user.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allUsers]);

  return (
    <MerchantLayout>
      <SettingLayout>
        <div className='flex '>
          <div className='flex-1 px-4'>
            <form className='flex flex-col'>
              <label htmlFor='email'>search by email</label>
              <input
                type='email'
                name=''
                id='email'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border-b-2 border-black focus:outline-none'
              />
            </form>
            <h4>Search Results</h4>
            {/* {errorMessage && <p>{errorMessage}</p>} */}
            <ul className='max-h-[100px] overflow-y-auto custom-scrollbar'>
              {filteredUsers.map((user) => (
                <li key={user.id} className='flex'>
                  <p>{user.email}</p>
                  <button
                    className='bg-blue-500 rounded-full px-3 py-2 text-white ml-5'
                    onClick={() => handleAddAdmin(user.id)}
                  >
                    Add to Admin
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h4>Existing Merchant</h4>
          </div>
        </div>
      </SettingLayout>
    </MerchantLayout>
  );
};

export default AddAdmin;
