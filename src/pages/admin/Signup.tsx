import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/admin", {
        name: name,
        email: email,
        password: password,
      });
      console.log(res.data);
      navigate("/admin");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-300'>
      <h1 className='text-3xl font-bold mb-6'>IN_BOX</h1>
      <h2 className='text-xl mb-4'>Sign up</h2>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-6'>
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
              className='mt-1 p-2 block w-full rounded-md border-gray-300 focus:outline-none'
            />
          </div>
          <div>
            <label htmlFor='email' className='block font-medium text-gray-700'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 p-2 block w-full rounded-md border-gray-300 focus:outline-none'
            />
          </div>
          <div className='relative'>
            <label
              htmlFor='password'
              className='block font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 p-2 block w-full rounded-md border-gray-300 focus:outline-none'
            />
            <button
              type='button'
              onClick={() => {
                setPasswordVisible(!passwordVisible);
              }}
              className='absolute inset-y-0 right-0 top-7 flex items-center px-3 text-gray-600'
            >
              {passwordVisible ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
            </button>
          </div>
          <button
            className='w-full bg-green-700 text-white rounded-md py-2'
            onClick={handleSignUp}
            disabled={isLoading}
          >
            {isLoading ? "Signing up ..." : "Sign Up"}
          </button>
        </form>
        <div className='mt-4'>
          <p className='text-sm'>
            Already have a merchant account?{" "}
            <Link to='//admin/signin' className='text-green-700'>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
