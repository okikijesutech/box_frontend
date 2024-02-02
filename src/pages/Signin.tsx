import axios from "axios";
import { useState, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/merchant/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center py-[12%] overflow-y-hidden bg-green-300'>
      <h1 className='text-2xl'>
        <a href='/'>IN_BOX</a>
      </h1>
      <h2 className='text-md my-3'>Sign In</h2>
      <div className='border-[1px] border-gray-800 rounded-[15px] px-4 py-3 shadow-md'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            placeholder='Benny'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none'
          />
          <label htmlFor='password'>Password</label>
          <div className='w-full'>
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
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
            type='submit'
            className='rounded-[10px] bg-green-900 w-3/4 mx-auto px-3 py-2 mb-[10px]'
          >
            Sign In
          </button>
        </form>
        <a href='/forgotten_password' className='text-green-900 text-sm'>
          Forgotten password
        </a>
        <p className='text-sm'>
          Don't have a merchant account?{"  "}
          <a href='/signup' className='text-green-900'>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
