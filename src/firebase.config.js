// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfSfJU5j7KMcZvcxTv5PDygPn-Prtr9nc",
  authDomain: "house-marketplace-app-85d89.firebaseapp.com",
  projectId: "house-marketplace-app-85d89",
  storageBucket: "house-marketplace-app-85d89.appspot.com",
  messagingSenderId: "905468120994",
  appId: "1:905468120994:web:487ccf09d9b7acd8e8acfb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
