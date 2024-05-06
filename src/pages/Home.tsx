import { FaApple, FaGooglePlay } from "react-icons/fa";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className='px-[10%]'>
      <Navbar />
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center py-[15%] text-center bg-gradient-to-b from-purple-600 to-blue-600 text-white'>
        <h1 className='text-5xl font-bold mb-4'>Welcome to In Box</h1>
        <p className='text-lg mb-6'>
          Your one-stop app for discovering delicious meals from local SMEs
        </p>
        <div className='flex items-center justify-center space-x-6'>
          <button className='flex flex-col items-center justify-center bg-white border-[1px] px-6 py-3 border-black rounded-[15px] hover:bg-gray-200 transition duration-300 ease-in-out'>
            <FaApple size={32} className='mb-2 text-gray-600' />
            <div>
              <p className='text-[14px] text-black font-semibold mb-1'>
                Available on
              </p>
              <p className='text-[18px] text-black font-semibold'>App Store</p>
            </div>
          </button>
          <button className='flex flex-col items-center justify-center bg-white border-[1px] px-6 py-3 border-black rounded-[15px] hover:bg-gray-200 transition duration-300 ease-in-out'>
            <FaGooglePlay size={32} className='mb-2 text-gray-600' />
            <div>
              <p className='text-[14px] text-black font-semibold mb-1'>
                Available on
              </p>
              <p className='text-[18px] text-black font-semibold'>
                Google Play
              </p>
            </div>
          </button>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className='bg-gray-100 py-12'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Explore Featured Products
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Featured Product Cards */}
            {/* You can add your featured product cards here */}
            <div>
              <h3>Community</h3>
            </div>
            <div>
              <h3>Marketing tools</h3>
            </div>
            <div>
              <h3>Customer service tools</h3>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center'>How It Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* How It Works Steps */}
            {/* You can add your How It Works steps here */}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className='bg-gray-100 py-12'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Hear From Our Happy Customers
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Testimonial Cards */}
            {/* You can add your testimonial cards here */}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className='bg-gray-800 text-white py-8'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>&copy; 2024 In Box. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
