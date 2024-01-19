// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "wordwave-blogapp.firebaseapp.com",
  projectId: "wordwave-blogapp",
  storageBucket: "wordwave-blogapp.appspot.com",
  messagingSenderId: "884320706246",
  appId: "1:884320706246:web:d98ac4e6a06b5b2526c1c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);