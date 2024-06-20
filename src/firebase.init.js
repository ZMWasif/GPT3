// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_v4EHclOQsNp6MXzIozf7WDfe5hMyV0w",

  authDomain: "email-password-auth-a6e2f.firebaseapp.com",

  projectId: "email-password-auth-a6e2f",

  storageBucket: "email-password-auth-a6e2f.appspot.com",

  messagingSenderId: "818400090688",

  appId: "1:818400090688:web:b7349c7ee8519e3a929da5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
