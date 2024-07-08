// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern---blog-37a33.firebaseapp.com",
  projectId: "mern---blog-37a33",
  storageBucket: "mern---blog-37a33.appspot.com",
  messagingSenderId: "112383257361",
  appId: "1:112383257361:web:3d8fb94c4e5bb91552bab0",
  measurementId: "G-P33WEDZJ88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);