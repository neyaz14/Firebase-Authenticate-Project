// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCcrkCjub-bkDFdaZNqag7b2EwrJIfTOY",
  authDomain: "auth-ultimate-project.firebaseapp.com",
  projectId: "auth-ultimate-project",
  storageBucket: "auth-ultimate-project.firebasestorage.app",
  messagingSenderId: "1085798058608",
  appId: "1:1085798058608:web:d9c273d714426ffa1a02b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);