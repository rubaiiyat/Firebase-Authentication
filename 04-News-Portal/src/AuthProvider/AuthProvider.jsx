import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
