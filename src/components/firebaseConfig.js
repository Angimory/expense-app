import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged, signOut,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { getStorage } from "firebase/storage";
import 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0MvvGNAWOGukhUo4aQXf-GpNYImm879I",
    authDomain: "expense-82359.firebaseapp.com",
    projectId: "expense-82359",
    storageBucket: "expense-82359.appspot.com",
    messagingSenderId: "355014313959",
    appId: "1:355014313959:web:255888e7bbdad7855d5f42",
    measurementId: "G-707X3VJH5F"
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth();
export function logout(){
  return signOut(auth);
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
}
export function useAuth(){
  const[currentUser,setCurrentUser]=useState();

  useEffect(()=>{
    const unsub =onAuthStateChanged(auth,user=>setCurrentUser(user));

    return unsub;
  }, []);
  return currentUser
}

export default firebaseConfig;