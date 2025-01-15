import React from "react";

const Register = () => {
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("working");
    console.log(email, password);
  };

  return (
    <div className="w-96 mx-auto">
      <form onSubmit={handleRegisterForm}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
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
