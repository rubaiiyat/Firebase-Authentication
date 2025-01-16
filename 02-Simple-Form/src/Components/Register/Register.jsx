import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase/Firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked;
    console.log(email, password, checked);

    setRegisterError("");
    setRegisterSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be contain atleast 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Password should be contain atleast one uppercase character"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Password should be contain atleast one lowercase character"
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("Password should be contain atleast one Number ");
      return;
    } else if (!checked) {
      setRegisterError("Please accept our terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        sendEmailVerification(result.user).then((result) => {
          setRegisterSuccess(
            "Account Created Successfully. Please check your email and verify the account"
          );
        });
      })
      .catch((error) => {
        setRegisterError("Already Registerd using this email");
      });
  };

  return (
    <div className="w-96 mx-auto">
      <h1 className="text-red-400 mt-2 mb-2">{registerError}</h1>
      <h1 className="text-green-400 mt-2 mb-2">{registerSuccess}</h1>
      <form onSubmit={handleRegisterForm}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
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
            className="absolute top-3 right-3 hover:cursor-pointer hover:text-white text-2xl"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label className="flex gap-2 items-center mt-4 mb-3 cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            className="checkbox checkbox-primary"
          />
          <span className="">
            I read and agree to{" "}
            <Link
              to={"/register/terms&conditions"}
              className="text-primary  "
              href=""
            >
              <span className=" hover:text-primary">terms and conditions</span>
            </Link>
          </span>
        </label>

        <button className="btn btn-primary mt-3 w-full text-xl text-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
