import axios from "axios";
import { useState, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

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

  // const backendUrl =
  //   process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/merchant"; // Accessing the environment variable

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
        // backendUrl + "/login",
        {
          email,
          password,
        }
      );
      const { accessToken, refreshToken, user, message } = response.data;
      setAuthTokens({ accessToken, refreshToken });
      setUser(user);
      navigate("/merchant");
      toast.success(message);
    } catch (error: any) {
      setError("Invalid email or password");
      console.error("Error signing in:", error);
      toast.error(error.response?.data.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center py-[12%] overflow-y-hidden bg-green-300'>
      <ToastContainer />
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
            className={`mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:outline-none ${
              emailError ? "border-red-500" : ""
            }`}
          />
          <label htmlFor='password'>Password</label>
          <div className='w-full flex'>
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              className={`mt-2 mb-4 border-b-2 border-green-900 bg-inherit focus:border-b-2 focus:outline-none flex-grow ${
                passwordError ? "border-red-500" : ""
              }`}
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
          {error && <p className='text-red-600 text-sm mb-2'>{error}</p>}
          <button
            type='submit'
            className='rounded-[10px] bg-green-900 w-3/4 mx-auto px-3 py-2 mb-[10px]'
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Sign In"}
          </button>
        </form>
        <a href='/forgotten_password' className='text-green-900 text-sm'>
          Forgotten password
        </a>
        <p className='text-sm'>
          Don't have a merchant account?{" "}
          <a href='/signup' className='text-green-900'>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
