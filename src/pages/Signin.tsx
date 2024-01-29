import axios from "axios";
import { useEffect, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    axios.post("localhost:3000", { email: email, password: password }).then();
  });
  const handleSingin = () => {};
  return (
    <div className='flex flex-col items-center justify-center py-[12%] overflow-y-hidden bg-green-300'>
      <h1 className='text-2xl'>
        <a href='/'>IN_BOX</a>
      </h1>
      <h2 className='text-md my-3'>Sign In</h2>
      <div className='border-[1px] border-gray-800 rounded-[15px] px-4 py-3'>
        <form className='flex flex-col '>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            placeholder='Benny'
            id='email'
            onChange={() => setEmail}
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            onChange={() => setPassword}
            id='password'
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:border-b-2 focus:outline-none'
          />

          <button
            onClick={handleSingin}
            className='rounded-[10px] bg-green-900 w-3/4 mx-auto px-3 py-2 mb-[10px]'
          >
            <a href='/merchant'>Sign In</a>
          </button>
        </form>
        <a href='/forgotten_password' className='text-green-900 text-sm'>
          Forgotten password
        </a>
        <p className='text-sm'>
          Don't have a merchant accout you can ?{"  "}
          <a href='/signup' className='text-green-900'>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
