import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axios.post("http://localhost:3000/merchant", {
        name: name,
        email: email,
        shopName: shopName,
        password: password,
      });
      console.log(res.data);
    } catch (error) {
      console.log();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center py-[7%] overflow-y-hidden bg-green-300'>
      <h1 className='text-2xl'>IN_BOX</h1>
      <h2 className='text-md my-3'>Sign up</h2>
      <div className='border-[1px] border-gray-800 rounded-[15px] px-4 py-3'>
        <form className='flex flex-col '>
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
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:border-b-2 focus:outline-none'
          />
          <button
            className='rounded-[10px] bg-green-900 px-3 py-2 w-3/4 mx-auto mb-[10px]'
            onClick={handleSignUp}
          >
            Sign Up
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
