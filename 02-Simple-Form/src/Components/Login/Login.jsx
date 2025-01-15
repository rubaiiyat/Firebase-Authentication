import React from "react";

const Login = () => {
  return (
    <div className="w-96 mx-auto">
      <form action="">
        <input
          type="email"
          placeholder="Enter your email"
          name="password"
          className="input input-bordered input-primary w-full mb-3"
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          className="input input-bordered input-primary w-full "
        />

        <button className="btn btn-primary mt-3 w-full text-xl text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
