// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg4UvJVARzyCncgDJZS1xt5uqQ_2YcqqI",
  authDomain: "projetomovel-176fd.firebaseapp.com",
  projectId: "projetomovel-176fd",
  storageBucket: "projetomovel-176fd.appspot.com",
  messagingSenderId: "1316195336",
  appId: "1:1316195336:web:30f5a5f0aadd10030c55bd",
  measurementId: "G-W7HV4MDDCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)