// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgoqPbDiyg27-2zXgdB6maAAmAyJ42S3k",
  authDomain: "simple-firebase-authenti-6c69c.firebaseapp.com",
  projectId: "simple-firebase-authenti-6c69c",
  storageBucket: "simple-firebase-authenti-6c69c.firebasestorage.app",
  messagingSenderId: "769136848594",
  appId: "1:769136848594:web:c0eae5a609e01afc5f870b",
  measurementId: "G-16JDZ17NMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

// project-769136848594
