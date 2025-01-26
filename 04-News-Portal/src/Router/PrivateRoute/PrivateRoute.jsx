import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);

  const location = useLocation();

  if (loader) {
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner text-primary loading-lg "></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location} to={"/login"}></Navigate>;
};

export default PrivateRoute;
