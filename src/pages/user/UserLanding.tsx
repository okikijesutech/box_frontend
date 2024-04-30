import { Link } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import stock from "../../assets/stock.jpg";

const stores = [
  { name: "BNXN", img: stock, id: "1" },
  { name: "BUJU", img: stock, id: "2" },
  { name: "BURNA", img: stock, id: "3" },
  { name: "RUGER", img: stock, id: "4" },
  { name: "FIRE", img: stock, id: "5" },
  { name: "SPY", img: stock, id: "6" },
  { name: "SONY", img: stock, id: "7" },
  { name: "AI", img: stock, id: "8" },
  { name: "STAR", img: stock, id: "9" },
];

const UserLanding = () => {
  return (
    <div className='bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen'>
      <UserLayout />
      <h1 className='text-center text-2xl my-3'>
        Welcome to In Box - Your one stop shop for all your favorite SMES
        businesses
      </h1>
      <div className='mx-auto max-w-screen-lg p-6 rounded-lg shadow-lg'>
        <h3 className='text-center mb-4 text-lg'>
          Which business would you be supporting today?
        </h3>
        <ul className='flex gap-3 p-4 overflow-x-auto'>
          {stores.map((store) => (
            <li
              key={store.id}
              className='border-2 border-black p-2 rounded-md flex flex-col items-center'
            >
              <Link to={`/merchant/${store.id}`} className='cursor-pointer'>
                <div className='w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2'>
                  <img
                    src={store.img}
                    alt={`Logo for ${store.name}`}
                    className='w-full h-full object-cover rounded-full'
                  />
                  {/* Image can be added here */}
                </div>
                <h3 className='text-center'>{store.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserLanding;
