// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy4Q9BzhuYbZSmohav8wVHp4Xuxv6y4U8",
  authDomain: "flower-shop-24dac.firebaseapp.com",
  projectId: "flower-shop-24dac",
  storageBucket: "flower-shop-24dac.firebasestorage.app",
  messagingSenderId: "59740289041",
  appId: "1:59740289041:web:e49e21e6d0ddd41d2319b0"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };