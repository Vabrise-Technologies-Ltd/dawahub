// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAknM7OKdQSCfz5vNo9thTXdy4ma4OfRVI",
  authDomain: "dawahub-b7bfe.firebaseapp.com",
  projectId: "dawahub-b7bfe",
  storageBucket: "dawahub-b7bfe.appspot.com",
  messagingSenderId: "493438551696",
  appId: "1:493438551696:web:f7351d2a321d4d061e3a15",
  measurementId: "G-E6YH1W6G3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  { app }