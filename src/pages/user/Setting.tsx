import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import { Link } from "react-router-dom";

const Setting = () => {
  // Sample user profile data for demonstration
  const [profile, setProfile] = useState({
    username: "john_doe",
    email: "john@example.com",
    fullName: "John Doe",
    bio: "Software developer passionate about coding!",
    avatar: "https://via.placeholder.com/150", // URL to user's avatar image
  });

  // Function to handle updating profile data
  // const updateProfile = (updatedProfile) => {
  //   setProfile(updatedProfile);
  //   // Here you can add logic to send updated profile data to a server
  // };

  return (
    <div className='bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen'>
      <UserLayout />
      <div className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-4'>Settings</h1>
          {/* Navbar */}
          <nav className='bg-gray-800 rounded-lg px-4 py-2 mb-4'>
            <ul className='flex space-x-4'>
              <li>
                <Link to='#' className='text-white hover:text-gray-200'>
                  Profile
                </Link>
              </li>
              <li>
                <Link to='#' className='text-white hover:text-gray-200'>
                  Debit Card
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Profile Settings */}
        <div className='bg-white rounded-lg shadow-lg p-4 mb-4'>
          <h2 className='text-xl font-semibold mb-2'>Profile Settings</h2>
          <form>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-semibold mb-2'
                htmlFor='username'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400'
                value={profile.username}
                readOnly
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-semibold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400'
                value={profile.email}
                readOnly
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 font-semibold mb-2'
                htmlFor='fullName'
              >
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400'
                value={profile.fullName}
                readOnly
              />
            </div>
            {/* <div className='mb-4'>
              <label
                className='block text-gray-700 font-semibold mb-2'
                htmlFor='bio'
              >
                Bio
              </label>
              <textarea
                id='bio'
                className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400'
                // rows='3'
                value={profile.bio}
                readOnly
              />
            </div> */}
            <div className='flex items-center justify-end'>
              <button
                type='button'
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                onClick={() => console.log("Edit profile")}
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
