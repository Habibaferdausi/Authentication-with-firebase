import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const login = (email, password) => {};

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
