import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(authContext);
  const handleRegisterForm = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-white mt-5 text-center mb-5">
        Please Register
      </h1>
      <div className="card bg-base-200 w-full max-w-sm  shadow-xl mx-auto">
        <form onSubmit={handleRegisterForm} className="card-body" action="">
          <input
            type="text"
            placeholder="Full name"
            name="name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <button className="btn btn-primary mt-5 text-xl text-white">
            Register
          </button>
          <p>
            Already Registerd?{" "}
            <Link to={"/login"}>
              <span className="text-primary text-lg font-bold">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
