import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from "../Utilities/firebase";

const SignUp = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  return <div className=""></div>;
};

export default SignUp;
