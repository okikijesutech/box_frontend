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
        <div>
          <div>
            <div className='flex items-center justify-between'>
              <p>{user?.accName || "Add account Name"}</p>
              <button onClick={() => setModal(true)}>
                <FaEdit />
              </button>
            </div>
            <div className='flex items-center justify-between'>
              <p>{user?.accNo || "Add account number"}</p>
              <button onClick={() => setModal(true)}>
                <FaEdit />
              </button>
            </div>

            <p></p>
          </div>
          <form action='' onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor=''>Account Name</label>
            <input
              type='text'
              value={accName}
              onChange={(e) => setAccName(e.target.value)}
            />
            <label htmlFor=''>Accoun No.</label>
            <input
              type='text'
              value={accNo}
              onChange={(e) => setAccNo(e.target.value)}
            />
            <button type='submit'>Update</button>
          </form>
        </div>
        {modal && <Modal closeModal={closeModal} />}
      </SettingLayout>
    </MerchantLayout>
  );
};

const Modal = ({ closeModal }: any) => {
  return (
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

export default BankAndPayment;
