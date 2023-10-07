// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNjhTzIR9BkGupThb2buVMvo74Gt-CA4",
  authDomain: "abt-chat.firebaseapp.com",
  projectId: "abt-chat",
  storageBucket: "abt-chat.appspot.com",
  messagingSenderId: "412353852930",
  appId: "1:412353852930:web:c0f5c16c3b5f6509df191b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);