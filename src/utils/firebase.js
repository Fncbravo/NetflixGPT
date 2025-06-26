// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSF9at4keOWunrBBNwn4zjCU3e2G9oGDI",
  authDomain: "netflixgpt-1ba06.firebaseapp.com",
  projectId: "netflixgpt-1ba06",
  storageBucket: "netflixgpt-1ba06.firebasestorage.app",
  messagingSenderId: "805882316890",
  appId: "1:805882316890:web:7ede519225db5b2611b063",
  measurementId: "G-ESG94PST9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 