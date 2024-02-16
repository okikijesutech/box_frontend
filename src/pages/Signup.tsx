import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/merchant", {
        name: name,
        email: email,
        shopName: shopName,
        password: password,
      });
      console.log(res.data);
      navigate("/merchant");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center py-[7%] overflow-y-hidden bg-green-300'>
      <h1 className='text-2xl'>IN_BOX</h1>
      <h2 className='text-md my-3'>Sign up</h2>
      <div className='border-[1px] border-gray-800 rounded-[15px] px-4 py-3 shadow-md'>
        <form className='flex flex-col'>
          <label htmlFor='email'>Name</label>
          <input
            type='text'
            placeholder='Benny'
            id='name'
            onChange={(e) => setName(e.target.value)}
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none'
          />
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            placeholder='Benny'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none'
          />
          <label htmlFor='email'>Shop Name</label>
          <input
            type='text'
            placeholder='Benny'
            id='shopName'
            onChange={(e) => setShopName(e.target.value)}
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none'
          />

          <label htmlFor='password'>Password</label>
          <div>
            <input
              type={passwordVisible ? "text" : "password"}
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:border-b-2 focus:outline-none'
            />
            <button
              type='button'
              onClick={() => {
                setPasswordVisible(!passwordVisible);
              }}
            >
              {passwordVisible ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
            </button>
          </div>

          <button
            className='rounded-[10px] bg-green-900 px-3 py-2 w-3/4 mx-auto mb-[10px]'
            onClick={handleSignUp}
            disabled={isLoading}
          >
            {isLoading ? "Signing up ..." : "Sign Up"}
          </button>
        </form>
        <a href='' className='text-green-900 text-sm'>
          Forgotten password
        </a>
        <p className='text-sm'>
          Already have a merchant accout you can ?{"  "}
          <a href='/signin' className='text-green-900'>
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
