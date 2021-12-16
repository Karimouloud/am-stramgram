// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaYRiVsAhvZD6T_kdh6Lu6fmfMADK8Qlg",
  authDomain: "am-stramgram.firebaseapp.com",
  projectId: "am-stramgram",
  storageBucket: "am-stramgram.appspot.com",
  messagingSenderId: "192115794117",
  appId: "1:192115794117:web:9433128400091296e410ac"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };