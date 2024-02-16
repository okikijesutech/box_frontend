import React, { useState, useContext, createContext, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const setAuthTokens = ({ tokens }) => {
    setAccessToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
  };

  const clearAuthTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, setAuthTokens, clearAuthTokens }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
