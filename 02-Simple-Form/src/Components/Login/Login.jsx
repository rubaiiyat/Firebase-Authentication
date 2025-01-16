import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../Firebase/Firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError("");
    setLoginSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess("LOGIN SUCCESSFULL");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError("Incorrect username or password");
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    setLoginError("");
    setLoginSuccess("");

    if (!email) {
      setLoginError("Enter the valid email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLoginError("Enter the valid email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log("Please check your email");
        setLoginSuccess("Please check your email inbox");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-96 mx-auto">
      <h1 className="text-red-400 mt-2 mb-2">{loginError}</h1>
      <h1 className="text-green-400 mt-2 mb-2">{loginSuccess}</h1>
      <form onSubmit={handleLoginForm}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          ref={emailRef}
          className="input input-bordered input-primary w-full mb-3"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            className="input input-bordered input-primary w-full "
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 text-xl hover:text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="mt-2 text-start text-white">
          <a href="" onClick={handleForgotPassword} className="">
            Forgot Password?
          </a>
        </div>
        <button className="btn btn-primary mt-3 w-full text-xl text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
