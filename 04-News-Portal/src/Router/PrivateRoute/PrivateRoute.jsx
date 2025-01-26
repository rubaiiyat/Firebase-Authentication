import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);

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
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
