import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const Settings = () => {
  const { accessToken, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [merchantType, setMerchantType] = useState("");
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/merchant/${user?.id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setEmail(response.data.email);
        setName(response.data.name);
        setShopName(response.data.shopName);
      } catch (e) {
        console.log(e);
      }
    };
    fetchuser();
  }, [accessToken, user]);

  const handleUpdate = async () => {
    try {
      const update = await axios.putForm(
        `http://localhost:3000/merchant/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          email: email,
          shopName: shopName,
          name: name,
        }
      );
      console.log(update);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MerchantLayout>
      <div>
        <SettingLayout>
          <div className='p-4 mt-6 rounded-md max-w-[600px] ml-[45px] bg-green-600'>
            <form onSubmit={handleUpdate} className='flex flex-col '>
              <label htmlFor=''>email</label>
              <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor=''>name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor='shopName'>Shop Name</label>
              <input
                type='text'
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                name=''
                id='shopName'
              />
              <label htmlFor='merchantType'>Merchant Type</label>
              <select name='' id='merchantType'>
                <option value='resturant'>Resturant</option>
                <option value='convineceStore'>Convinece Store</option>
                <option value='Barber'>Barber</option>
              </select>
              <button
                type='submit'
                className='bg-green-800 rounded-lg mt-6 px-3 py-2 w-[125px] mx-auto'
              >
                update
              </button>
            </form>
            <h3>{shopName}</h3>
          </div>
        </SettingLayout>
      </div>
    </MerchantLayout>
  );
};

export default Settings;
