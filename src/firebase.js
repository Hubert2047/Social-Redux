// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
} from 'firebase/auth'
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
    apiKey: 'AIzaSyDj8vHRmIyCd-O1vAjIVi5D-V5Md6SOvfI',
    authDomain: 'social-redux-toolkit.firebaseapp.com',
    databaseURL:
        'https://social-redux-toolkit-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'social-redux-toolkit',
    storageBucket: 'social-redux-toolkit.appspot.com',
    messagingSenderId: '158736182497',
    appId: '1:158736182497:web:157da89bf961598d321ba0',
    measurementId: 'G-NH95KHGSFP',
}
/// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => console.log(result.user))
        .catch((err) => console.log(err))
}
