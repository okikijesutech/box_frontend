import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    axios.post("localhost:3000", { email: email }).then();
  };

  return (
    <div className='bg-green-300 my-[10%]'>
      <div className='max-w-[500px] mx-auto '>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center border-[1px] border-gray-800 rounded-[15px] px-4 py-3'
        >
          <label htmlFor='email'>Input your Email</label>
          <input
            type='email'
            id='email'
            placeholder='email'
            className='mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none'
            onChange={() => setEmail}
          />
          <button type='submit'>Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
