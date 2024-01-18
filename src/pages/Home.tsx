import { FaApple, FaGooglePlay } from "react-icons/fa6";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div className='px-[10%]'>
      <Navbar />
      <div className='flex flex-col items-center justify-center py-[15%]'>
        <h1 className='text-[48px] font-semibold'>Welcome to In Box</h1>
        <p className='text-[18px]'>Your one stop app for all your meals</p>
        <div className='flex items-center justify-between w-[400px] mt-5'>
          <button className='flex items-center justify-center border-[1px] px-4 py-2 border-black rounded-[15px]'>
            <FaApple size={32} />
            <div className='ml-3'>
              <p className='text-[12px] text-left'>Get it</p>
              <p className='text-[24px]'>App Store</p>
            </div>
          </button>
          <button className='flex items-center justify-center border-[1px] px-4 py-2 border-black rounded-[15px]'>
            <FaGooglePlay size={32} />
            <div className='ml-3'>
              <p className='text-[12px] text-left'>Get it</p>
              <p className='text-[24px]'>Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
