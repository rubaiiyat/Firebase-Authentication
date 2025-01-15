import React from "react";

const Register = () => {
  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log("working");
  };
  return (
    <div className="w-96 mx-auto">
      <form onClick={handleRegisterForm} action="">
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
