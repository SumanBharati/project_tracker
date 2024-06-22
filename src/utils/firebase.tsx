// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXwgol7Q1CLIhYeffWM3O2i0YBqQvykLg",
  authDomain: "tracker-e0f0a.firebaseapp.com",
  projectId: "tracker-e0f0a",
  storageBucket: "tracker-e0f0a.appspot.com",
  messagingSenderId: "395639408265",
  appId: "1:395639408265:web:42fcc264b7c33ab0f02858",
  measurementId: "G-GBHKSXJ3HM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);