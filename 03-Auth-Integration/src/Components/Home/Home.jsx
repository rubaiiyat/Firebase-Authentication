import React, { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Home = () => {
  const authInfo = useContext(authContext);
  console.log(authInfo.name);
  return (
    <div>
      <h1>This is Home Page</h1>
      <h1>{authInfo.name}</h1>
    </div>
  );
};

export default Home;
