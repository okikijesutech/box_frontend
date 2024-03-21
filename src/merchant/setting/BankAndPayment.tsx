import { useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const BankAndPayment = () => {
  const [modal, setModal] = useState(false);
  const [accName, setAccName] = useState("");
  const [accNo, setAccNo] = useState("");
  const { user, accessToken } = useAuth();

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/merchant/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          accName: accName,
          accNo: accNo,
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Not submitted");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <MerchantLayout>
      <SettingLayout>
        <ToastContainer />
        <div className='mx-auto max-w-lg'>
          <div className='mb-8'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-lg font-semibold'>
                {user?.accName || "Add account Name"}
              </p>
              <button
                className='text-green-600 hover:text-green-700'
                onClick={() => setModal(true)}
              >
                <FaEdit />
              </button>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-lg font-semibold'>
                {user?.accNo || "Add account number"}
              </p>
              <button
                className='text-green-600 hover:text-green-700'
                onClick={() => setModal(true)}
              >
                <FaEdit />
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor='accName' className='text-lg font-semibold mb-1'>
              Account Name
            </label>
            <input
              type='text'
              id='accName'
              value={accName}
              onChange={(e) => setAccName(e.target.value)}
              className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
            />
            <label htmlFor='accNo' className='text-lg font-semibold mb-1'>
              Account No.
            </label>
            <input
              type='text'
              id='accNo'
              value={accNo}
              onChange={(e) => setAccNo(e.target.value)}
              className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
            />
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-4'
            >
              Update
            </button>
          </form>
        </div>
        {modal && <Modal closeModal={closeModal} />}
      </SettingLayout>
    </MerchantLayout>
  );
};

const Modal = ({ closeModal }: any) => {
  return (
    <div className='fixed z-50 inset-0 flex items-center justify-center overflow-y-auto'>
      <div className='fixed inset-0 bg-gray-500 opacity-75'></div>
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
  );
};

export default BankAndPayment;
