// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "logofy-8d11c.firebaseapp.com",
  projectId: "logofy-8d11c",
  storageBucket: "logofy-8d11c.firebasestorage.app",
  messagingSenderId: "830677016822",
  appId: "1:830677016822:web:3ab813b17a61cb1fed0cd7",
  measurementId: "G-9H9Y5C0F1J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
