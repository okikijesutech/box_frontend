import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { FaEdit } from "react-icons/fa";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [merchantType, setMerchantType] = useState("");
  const [shopName, setShopName] = useState("");
  const [modal, setModal] = useState(false);
  const { accessToken, user } = useAuth();

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
        setMerchantType(response.data.merchantType);
      } catch (e) {
        console.log(e);
      }
    };
    fetchuser();
  }, [accessToken, user]);

  const handleUpdate = async () => {
    try {
      const update = await axios.put(
        `http://localhost:3000/merchant/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          shopName: shopName,
          name: name,
          merchantType: merchantType,
        }
      );
      console.log(update);
    } catch (e) {
      console.log(e);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <MerchantLayout>
      <div>
        <SettingLayout>
          <div className='p-4 mt-6 rounded-md max-w-[600px] ml-[45px] bg-green-600'>
            <div>
              <div className='flex items-center justify-between'>
                <h4>{name}</h4>
              </div>
              <div className='flex items-center justify-between'>
                <p>{email}</p>
              </div>
              <div className='flex items-center justify-between'>
                <p>{shopName}</p>
                <button onClick={() => setModal(true)}>
                  <FaEdit />
                </button>
              </div>
              <p></p>
            </div>
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
              <select
                name=''
                id='merchantType'
                onChange={(e) => setMerchantType(e.target.value)}
              >
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
          {modal && <Modal closeModal={closeModal} />}
        </SettingLayout>
      </div>
    </MerchantLayout>
  );
};

const Modal = ({ closeModal }: any) => {
  return (
    // <div className='bg-green-500 w-[300px] h-[300px] absolute top-[100px] left-[600px]'>
    //   <button onClick={closeModal}>
    //     <svg
    //       className='h-6 w-6'
    //       fill='none'
    //       viewBox='0 0 24 24'
    //       stroke='currentColor'
    //     >
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth='2'
    //         d='M6 18L18 6M6 6l12 12'
    //       />
    //     </svg>
    //   </button>

    //   <h1>update text</h1>
    // </div>
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen px-4'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          onClick={closeModal}
        ></div>
        <div className='relative bg-white rounded-lg max-w-md p-6'>
          <div className='absolute top-0 right-0'>
            <button
              className='text-gray-500 hover:text-gray-700'
              onClick={closeModal}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <h1 className='text-xl font-bold mb-4'>Update text</h1>
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
