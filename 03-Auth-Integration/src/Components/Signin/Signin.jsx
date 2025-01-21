import React, { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { singInUser } = useContext(authContext);
  const navigate = useNavigate();
  const handleSignInForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-white mt-10 font-bold">Please Sign in</h1>
      <div className="hero">
        <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl mt-5">
          <form onSubmit={handleSignInForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white text-xl">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
