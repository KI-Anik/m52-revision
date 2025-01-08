// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAxmO9MvD__DbTyg_VGT4OqTSeYjLTtc",
  authDomain: "m52-news-portal.firebaseapp.com",
  projectId: "m52-news-portal",
  storageBucket: "m52-news-portal.firebasestorage.app",
  messagingSenderId: "788003449908",
  appId: "1:788003449908:web:947eb14a40890de162ae61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app