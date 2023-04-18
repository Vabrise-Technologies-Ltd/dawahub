// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


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
// initializeApp(firebaseConfig);
const db = getFirestore()
const app = initializeApp(firebaseConfig);


export { db, app }
