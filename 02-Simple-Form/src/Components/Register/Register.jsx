import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase/Firebase";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

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
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("Password should be contain atleast one Number ");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterError("");

        setRegisterSuccess("Account Created Successfully");
      })
      .catch((error) => {
        setRegisterError("Already Registerd using this email");
        setRegisterSuccess("");
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
