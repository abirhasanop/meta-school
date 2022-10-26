// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmjvlfHUv0oWQ57RBhBkOA5mkZbTQ_DhA",
    authDomain: "assignment-10-d5ca4.firebaseapp.com",
    projectId: "assignment-10-d5ca4",
    storageBucket: "assignment-10-d5ca4.appspot.com",
    messagingSenderId: "150562586978",
    appId: "1:150562586978:web:8d9efa3a336f77ff34ac3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app