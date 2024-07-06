// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHUUcsiG-fBMQaE35uFfYIpVC_HVc7kA8",
  authDomain: "reactportfoliodashboard.firebaseapp.com",
  projectId: "reactportfoliodashboard",
  storageBucket: "reactportfoliodashboard.appspot.com",
  messagingSenderId: "54489340174",
  appId: "1:54489340174:web:678340c774bc1b7c57df5f",
  measurementId: "G-9DGY75CJFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 
const provider = new GoogleAuthProvider();
export const storage = getStorage(app); // for storing our imgs
export const db = getFirestore(app) // database for storing all the collections of the portfolios
//firestore is for storing structured data like user profiles 
//firebase storage is for uploading stuff like images and auth related to it
export const signInWithGoogle = () => signInWithPopup(auth , provider);
