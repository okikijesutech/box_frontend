import MerchantLayout from "../../layouts/MerchantLayout";
import SettingLayout from "../../layouts/SettingLayout";

const admins = [
  {
    name: "sly",
    id: 1,
  },
  {
    name: "fly",
    id: 2,
  },
  {
    name: "ply",
    id: 3,
  },
  {
    name: "gly",
    id: 4,
  },
];

const AddAdmin = () => {
  return (
    <MerchantLayout>
      <SettingLayout>
        <div className='flex '>
          <div className='flex-1 px-4'>
            <form action='' className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name=''
                id='email'
                className='border-b-2 border-black focus:outline-none'
              />
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                className='border-b-2 border-black focus:outline-none'
              />
            </form>
          </div>
          <div className='flex-1'>
            <h4>Existing Admins</h4>
            {admins.map((admin) => (
              <div key={admin.id} className='flex'>
                <p>{admin.name}</p>
                <button className='bg-red-800 rounded-full px-3 py-2 text-white ml-5'>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </SettingLayout>
    </MerchantLayout>
  );
};

export default AddAdmin;
