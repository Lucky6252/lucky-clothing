import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCua-CfJwlrxJbsm-EsWqw8_mNTntnmhW4",
  authDomain: "lucky-clothing-db.firebaseapp.com",
  projectId: "lucky-clothing-db",
  storageBucket: "lucky-clothing-db.firebasestorage.app",
  messagingSenderId: "485419632028",
  appId: "1:485419632028:web:1e361bd705a75dafc1f459",
};

// Initialize Firebase
const firebaseAoo = initializeApp(firebaseConfig);
