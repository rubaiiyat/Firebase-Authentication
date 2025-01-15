import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import app from "../Utilities/firebase";

const SignIn = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [userData, setUserData] = useState([]);

  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        const er = error.message;
        console.log("Error: ", er);
      });
  };

  const handleSigninWithGithub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");

        setUserData(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };
  return (
    <div>
      <div className="flex gap-5 justify-center p-5 w-4/12 mx-auto bg-base-300 mt-10 rounded-2xl shadow-xl ">
        {userData ? (
          <button
            onClick={() => handleSignOut()}
            className="flex gap-2 items-center border justify-center border-gray-950 p-3 rounded-xl bg-base-200 hover:bg-base-300 text-white"
          >
            <LuLogOut /> Sign out
          </button>
        ) : (
          <div>
            <button
              onClick={() => handleSignin()}
              className="flex gap-2 items-center border justify-center border-gray-950 p-3 rounded-xl bg-base-200 hover:bg-base-300 text-white"
            >
              <FcGoogle /> Sign in with Google
            </button>

            <button
              onClick={() => handleSigninWithGithub()}
              className="flex gap-2 items-center border justify-center border-gray-950 p-3 rounded-xl bg-base-200 hover:bg-base-300 text-white"
            >
              <FaGithub /> Sign in with Github
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-5 justify-center items-center  w-96 mx-auto mt-10 bg-base-300 rounded-2xl p-5">
        <img className="w-16 rounded-full" src={userData?.photoURL} alt="" />
        <div>
          <h1 className="font-bold text-white">
            User: {userData?.displayName}
          </h1>
          <h1>Email: {userData?.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
