// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2-giszZXM_REbi0cBuSm4_-zKR5NKQuY",
    authDomain: "social-6acda.firebaseapp.com",
    projectId: "social-6acda",
    storageBucket: "social-6acda.appspot.com",
    messagingSenderId: "324823272485",
    appId: "1:324823272485:web:a559c5baa9aceb88f403cc",
    measurementId: "G-76JERGXEPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);