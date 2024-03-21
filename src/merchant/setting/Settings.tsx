import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaXmark } from "react-icons/fa6";

const Modal = ({
  closeModal,
  name,
  shopName,
  merchantType,
  accessToken,
  userId,
}: any) => {
  const [newName, setNewName] = useState(name);
  const [newShopName, setNewShopName] = useState(shopName);
  const [newMerchantType, setNewMerchantType] = useState(merchantType);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/merchant/${userId}`,
        {
          name: newName,
          shopName: newShopName,
          merchantType: newMerchantType,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("Successfully updated");
      closeModal();
    } catch (error) {
      console.error("Error updating:", error);
      toast.error("Error updating");
    }
  };

  return (
    <div className='fixed z-50 inset-0 flex items-center justify-center overflow-y-auto'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75'></div>
      <div className='relative bg-white rounded-lg max-w-md p-6'>
        <div className='absolute top-0 right-0'>
          <button
            onClick={closeModal}
            className='text-gray-500 hover:text-gray-700'
          >
            <FaXmark />
          </button>
        </div>
        <h1 className='text-xl font-bold mb-4'>Update Merchant Information</h1>
        <div className='flex flex-col space-y-4'>
          <input
            type='text'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className='input-field'
          />
          <input
            type='text'
            value={newShopName}
            onChange={(e) => setNewShopName(e.target.value)}
            className='input-field'
          />
          <select
            value={newMerchantType}
            onChange={(e) => setNewMerchantType(e.target.value)}
            className='input-field'
          >
            <option value='restaurant'>Restaurant</option>
            <option value='store'>Store</option>
            <option value='service'>Service</option>
          </select>
          <button
            onClick={handleUpdate}
            className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-6 w-full'
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [merchantType, setMerchantType] = useState("");
  const [shopName, setShopName] = useState("");
  const [modal, setModal] = useState(false);
  const { accessToken, user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
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
        setMerchantType(response.data.merchantType);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [accessToken, user]);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <MerchantLayout>
      <ToastContainer />
      <SettingLayout>
        <div className='p-4 mt-6 rounded-md max-w-md ml-4 bg-green-600'>
          <div>
            <div className='flex items-center justify-between'>
              <h4 className='text-lg font-semibold'>{name}</h4>
            </div>
            <div className='flex items-center justify-between'>
              <p>{email}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='mr-2'>{shopName}</p>
              <button onClick={() => setModal(true)}>
                <FaEdit />
              </button>
            </div>
          </div>
        </div>
        {modal && (
          <Modal
            closeModal={closeModal}
            name={name}
            shopName={shopName}
            merchantType={merchantType}
            accessToken={accessToken}
            userId={user?.id}
          />
        )}
      </SettingLayout>
    </MerchantLayout>
  );
};

export default Settings;
