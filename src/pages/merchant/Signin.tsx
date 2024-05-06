import { useState, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { setAuthTokens, setUser } = useAuth();

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
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
      const response = await axios.post(
        "http://localhost:3000/merchant/login",
        {
          email,
          password,
        }
      );
      const { accessToken, refreshToken, user, message } = response.data;
      setAuthTokens({ accessToken, refreshToken });
      setUser(user);
      toast.success(message);
      navigate("/merchant_dashboard");
    } catch (error: any) {
      setError("Invalid email or password");
      console.error("Error signing in:", error);
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
          <div>
            <label htmlFor='email' className='block font-medium text-gray-700'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 p-2 block w-full rounded-md border-gray-300 ${
                emailError ? "border-red-500" : ""
              }`}
            />
            {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 p-2 block w-full rounded-md border-gray-300 ${
                passwordError ? "border-red-500" : ""
              }`}
            />
            <button
              type='button'
              onClick={() => {
                setPasswordVisible(!passwordVisible);
              }}
              className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 top-7'
            >
              {passwordVisible ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
            </button>
            {passwordError && (
              <p className='text-red-500 text-sm'>{passwordError}</p>
            )}
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button
            type='submit'
            className='w-full bg-green-700 text-white rounded-md py-2'
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Sign In"}
          </button>
        </form>
        <div className='mt-4'>
          <a href='/forgotten_password' className='text-green-700 text-sm'>
            Forgotten password
          </a>
          <p className='text-sm mt-1'>
            Don't have a merchant account?{" "}
            <a href='/signup' className='text-green-700'>
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
