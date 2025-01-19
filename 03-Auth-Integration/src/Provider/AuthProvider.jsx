import React, { createContext } from "react";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = { name: "Abir Rubaiyat" };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
