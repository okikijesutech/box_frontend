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
        {modal && <Modal />}
      </SettingLayout>
    </MerchantLayout>
  );
};

const Modal = () => {
  return (
    <div>
      <p>Add bank modal</p>
    </div>
  );
};

export default BankAndPayment;
