import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";

const BankAndPayment = () => {
  return (
    <MerchantLayout>
      <SettingLayout>
        <div>
          <form action='' className='flex flex-col'>
            <label htmlFor=''>Account Name</label>
            <input type='text' />
            <label htmlFor=''>Accoun No.</label>
            <input type='text' />
          </form>
        </div>
      </SettingLayout>
    </MerchantLayout>
  );
};

export default BankAndPayment;
