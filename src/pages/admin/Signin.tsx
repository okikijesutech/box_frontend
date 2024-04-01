import { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const { setAuthTokens, setUser } = useAuth();
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
      const response = await axios.post("localhost:3000/admin/login", {
        email,
        password,
      });
      const { accessToken, refreshToken, user, message } = response.data;
      setAuthTokens({ accessToken, refreshToken }), setUser(user);
      toast.success(message || "you've logged in successfully");
      navigate("/admin");
    } catch (error: any) {
      toast.error(error.response?.data.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-300'>
      <ToastContainer />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label> Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail && <p className='text-red-500 text-sm'>{errorEmail}</p>}
        <div>
          <label>Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordVisible ? (
            <button onClick={() => setPasswordVisible(false)}>
              {" "}
              <FaEyeSlash />
            </button>
          ) : (
            <button onClick={() => setPasswordVisible(true)}>
              <FaEye />
            </button>
          )}
          {errorPassword && (
            <p className='text-red-500 text-sm'>{errorPassword}</p>
          )}
        </div>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <button type='submit' disabled={isLoading}>
          {isLoading ? <LoadingSpinner /> : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default Signin;
