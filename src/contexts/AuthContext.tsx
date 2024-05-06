import axios from "axios";
import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

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
  accName: string;
  accNo: string;
}

interface AuthContextType extends AuthTokens {
  user: UserData | null;
  setAuthTokens: (tokens: AuthTokens) => void;
  setUser: (user: UserData) => void;
  clearAuthTokens: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
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
          clearAuthTokens();
          return;
        }

        await axios.get("http://localhost:3000/merchant", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      } catch (error: any) {
        console.error("Error validating access token:", error);

        if (
          error.response &&
          error.response.status === 401 &&
          refreshTokenState
        ) {
          await refreshAccessToken();
        } else {
          clearAuthTokens();
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
          refreshToken: refreshTokenState,
        }
      );
      setAuthTokens({
        accessToken: response.data.accessToken,
        refreshToken: refreshTokenState,
      });
    } catch (error: unknown) {
      console.error("Error refreshing access token:", error);
      clearAuthTokens();
    }
  };

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

  const clearAuthTokens = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("user");
    setAccessToken(null);
    setRefreshToken(null);
    setUserState(null);
  };

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
