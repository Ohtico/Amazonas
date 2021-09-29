import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBI4XK2WuGC6wq61tsVl8TU0MfBL2J2OrU",
  authDomain: "as-5c5e0.firebaseapp.com",
  projectId: "as-5c5e0",
  storageBucket: "as-5c5e0.appspot.com",
  messagingSenderId: "259574371043",
  appId: "1:259574371043:web:a94b5d2f746b35772aebd6"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const db = getFirestore(app);

export {
  app,
  google,
  facebook,
  db
}