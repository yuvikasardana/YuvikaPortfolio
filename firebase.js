// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwanYz2nJRY87rxomQLqQmEzSau8sfiu8",
  authDomain: "yuvikaportfolio.firebaseapp.com",
  databaseURL: "https://yuvikaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yuvikaportfolio",
  storageBucket: "yuvikaportfolio.appspot.com",
  messagingSenderId: "329793259050",
  appId: "1:329793259050:web:9bb146ae9880dc73aca553",
  measurementId: "G-XLLV80RBZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);