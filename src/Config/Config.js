import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQVENsl495G1jNiYxTdTLGDHcSGqC_vrE",
  authDomain: "web-vidio-belajar.firebaseapp.com",
  projectId: "web-vidio-belajar",
  storageBucket: "web-vidio-belajar.appspot.com",
  messagingSenderId: "355604307463",
  appId: "1:355604307463:web:b4d846d3f74d60ec4a14a2",
  measurementId: "G-LHLFE33KBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;