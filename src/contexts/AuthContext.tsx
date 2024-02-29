import axios from "axios";
import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

// Define props types for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Define types for authentication tokens
interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

interface UserData {
  id: string;
  email: string;
  name: string;
  shopName: string;
  merchantType: string;
}

// Define the context type combining AuthTokens with functions to manipulate them
interface AuthContextType extends AuthTokens {
  user: UserData | null;
  setAuthTokens: (tokens: AuthTokens) => void;
  setUser: (user: UserData) => void;
  clearAuthTokens: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | null>(null);

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // State to manage access and refresh tokens
  const [accessToken, setAccessToken] = useState<string | null>(
    sessionStorage.getItem("accessToken") as string | null
  );
  const [refreshTokenState, setRefreshToken] = useState<string | null>(
    sessionStorage.getItem("refreshToken") as string | null
  );
  const [user, setUserState] = useState<UserData | null>(
    JSON.parse(sessionStorage.getItem("user") ?? "null")
  );

  useEffect(() => {
    const validateAccessToken = async () => {
      try {
        if (!accessToken) {
          clearAuthTokens(); // Clear tokens if accessToken is missing
          return;
        }

        // Check if accessToken is still valid
        await axios.get("http://localhost:3000/merchant", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        // If accessToken is valid, do nothing
      } catch (error: any) {
        console.error("Error validating access token:", error);

        if (
          error.response &&
          error.response.status === 401 &&
          refreshTokenState
        ) {
          // If accessToken is invalid and refreshToken is available, use refreshToken to get a new accessToken
          await refreshAccessToken();
        } else {
          clearAuthTokens(); // Clear tokens if validation fails or refreshToken is not available
        }
      }
    };

    validateAccessToken();
  }, [accessToken, refreshTokenState]);

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/merchant/refresh-token",
        {
          refreshTokenState,
        }
      );
      setAccessToken(response.data.accessToken);
    } catch (error: unknown) {
      console.error("Error refreshing access token:", error);
      clearAuthTokens(); // Clear tokens if refresh fails
    }
  };

  // Function to set authentication tokens
  const setAuthTokens = ({ accessToken, refreshToken }: AuthTokens) => {
    sessionStorage.setItem("accessToken", accessToken || "");
    sessionStorage.setItem("refreshToken", refreshToken || "");
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const setUser = (userData: UserData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUserState(userData);
  };

  // Function to clear authentication tokens
  const clearAuthTokens = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("user");
    setAccessToken(null);
    setRefreshToken(null);
    setUserState(null);
  };

  // const refreshToken = async () => {
  //   await refreshAccessToken();
  // };

  // Provide authentication context to children components
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken: refreshTokenState,
        user,
        setAuthTokens,
        setUser,
        clearAuthTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook to consume authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
