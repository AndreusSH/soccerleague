import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, getRedirectResult} from "firebase/auth";
import { useEffect, useState } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
 import { getDatabase, ref, onValue } from "firebase/database";
 import "firebase/storage";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs yo
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0JV_IkqSr8YEmx4bmmKrwWqCk9tgWoRc",
    authDomain: "nysl-progressive-app.firebaseapp.com",
    databaseURL: "https://nysl-progressive-app-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "nysl-progressive-app",
    storageBucket: "nysl-progressive-app.appspot.com",
    messagingSenderId: "723786057687",
    appId: "1:723786057687:web:5fdf775edd1b13fe8fad92",
    measurementId: "G-PVZEZ6X0LV"
  };
  

  
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
 //const auth = getAuth(firebaseApp);

export const database = getDatabase(firebaseApp);

export const storage = getStorage(firebaseApp);


export const signInWithGooglePopup = async () =>  {
  const provider = new GoogleAuthProvider();
  try{
    const session = await signInWithPopup(auth, provider);
    //console.log(session, "sessione!")
    return session.user;
  }
  catch(error){
    console.log(error);
  }

}
 

export const signOutGoogle = async ()=>{
  try {
    await signOut(auth);
    console.log("User signed out!");
 
} catch (error) {
    console.error("Error signing out: ", error);
    }
} 

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (devMode) {
      console.log(`loading ${path}`);
    }
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        if (devMode) {
          console.log(val, "val");
          //return val;
        }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      },
    );
  }, [path, transform]);
 

  return [data, loading, error];
};
