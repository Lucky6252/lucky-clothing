import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}from 'firebase/firestore'
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCua-CfJwlrxJbsm-EsWqw8_mNTntnmhW4",
  authDomain: "lucky-clothing-db.firebaseapp.com",
  projectId: "lucky-clothing-db",
  storageBucket: "lucky-clothing-db.firebasestorage.app",
  messagingSenderId: "485419632028",
  appId: "1:485419632028:web:1e361bd705a75dafc1f459",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//export const signInWithRedirect = () => (auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  //create /set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdDate = new Date();

    try{
      await setDoc(userDocRef, {displayName, email, createdDate});
    }
    catch(error){
      console.log('error creating the user', error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;
};
