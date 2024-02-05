import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";

const Settings = () => {
  return (
    <MerchantLayout>
      <div>
        <SettingLayout>
          <div>
            <form action=''>
              <label htmlFor='shopName'>Shop Name</label>
              <input type='text' name='' id='shopName' />
              <label htmlFor='merchantType'>Merchant Type</label>
              <select name='' id='merchantType'>
                <option value='resturant'>Resturant</option>
                <option value='convineceStore'>Convinece Store</option>
                <option value='Barber'>Barber</option>
              </select>
            </form>
          </div>
        </SettingLayout>
      </div>
    </MerchantLayout>
  );
};

export default Settings;
