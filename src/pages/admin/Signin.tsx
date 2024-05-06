import { useState, FormEvent } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  // const { setAuthTokens, setUser } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setErrorEmail("Email required");
      isValid = false;
    } else {
      setErrorEmail("");
    }
    if (!password) {
      setErrorPassword("Password required");
      isValid = false;
    } else {
      setErrorPassword("");
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3000/admin/login", {
        email,
        password,
      });
      const { accessToken, refreshToken, user, message } = response.data;
      // setAuthTokens({ accessToken, refreshToken }), setUser(user);
      toast.success(message || "you've logged in successfully");
      navigate("/admin");
    } catch (error: any) {
      console.log(error.response?.data.message);
      toast.error(error.response?.data.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-300'>
      <ToastContainer />
      <h1 className='text-3xl font-bold mb-6'>
        <Link to='/'>IN_BOX</Link>
      </h1>
      <h2 className='text-xl mb-4'>Sign In</h2>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-6'>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <label htmlFor='email' className='block font-medium text-gray-700'>
            {" "}
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 p-2 block w-full rounded-md border-gray-300 ${
              errorEmail ? "border-red-500" : ""
            }`}
          />
          {errorEmail && <p className='text-red-500 text-sm'>{errorEmail}</p>}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 p-2 block w-full rounded-md border-gray-300 ${
                errorPassword ? "border-red-500" : ""
              }`}
            />
            <button
              type='button'
              onClick={() => setPasswordVisible(!passwordVisible)}
              className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 top-7'
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errorPassword && (
              <p className='text-red-500 text-sm'>{errorPassword}</p>
            )}
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button
            type='submit'
            className='w-full bg-green-700 text-white rounded-md py-2'
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Log in"}
          </button>
        </form>
        <div className='mt-4'>
          <a href='/forgotten_password' className='text-green-700 text-sm'>
            Forgotten password
          </a>
          <p className='text-sm mt-1'>
            Don't have a merchant account?{" "}
            <Link to='/admin/signup' className='text-green-700'>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
