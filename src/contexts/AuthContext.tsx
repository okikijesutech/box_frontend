import React, { useState, useContext, createContext, ReactNode } from "react";

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
    localStorage.getItem("accessToken") ?? null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refreshToken") ?? null
  );
  const [user, setUserState] = useState<UserData | null>(
    JSON.parse(localStorage.getItem("user") ?? "null")
  );

  // Function to set authentication tokens
  const setAuthTokens = ({ accessToken, refreshToken }: AuthTokens) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const setUser = (userData: UserData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUserState(userData);
  };

  // Function to clear authentication tokens
  const clearAuthTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setAccessToken(null);
    setRefreshToken(null);
    setUserState(null);
  };

  // Provide authentication context to children components
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
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
