import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);

  if (loader) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/signin"}></Navigate>;
};

export default PrivateRoute;
