// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAscF4gW19w1wiAYTsyJA864n6-Kjahns8",
  authDomain: "email-password-authentic-b771f.firebaseapp.com",
  projectId: "email-password-authentic-b771f",
  storageBucket: "email-password-authentic-b771f.firebasestorage.app",
  messagingSenderId: "38705480592",
  appId: "1:38705480592:web:8a3e4c83b62d4a10ace915",
  measurementId: "G-379F8MW8ZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
