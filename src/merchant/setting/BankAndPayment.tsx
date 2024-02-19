import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const BankAndPayment = () => {
  const { accessToken, user } = useAuth();
  const [merchant, setMerchant] = useState("");
  const [accName, setAccName] = useState("");
  const [accNo, setAccNo] = useState("");

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
        setMerchant(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, [accessToken, user]);
  return (
    <MerchantLayout>
      <SettingLayout>
        <div>
          <form action='' className='flex flex-col'>
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
      </SettingLayout>
    </MerchantLayout>
  );
};

export default BankAndPayment;
