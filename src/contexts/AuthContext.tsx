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

// Define the context type combining AuthTokens with functions to manipulate them
interface AuthContextType extends AuthTokens {
  setAuthTokens: (tokens: AuthTokens) => void;
  clearAuthTokens: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | null>(null);

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // State to manage access and refresh tokens
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // Function to set authentication tokens
  const setAuthTokens = ({ accessToken, refreshToken }: AuthTokens) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  // Function to clear authentication tokens
  const clearAuthTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
  };

  // Provide authentication context to children components
  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, setAuthTokens, clearAuthTokens }}
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
