import { getAuth, onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import Home from "./Home";
import {signup,logout,useAuth,login}from "./firebaseConfig"
import { useRef, useState} from "react";
import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from 'react-router-dom';

import React from 'react';
  
function Login () {
    const currentUser=useAuth();
    const [error,setError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

     
    async function handleLogin() {
        if(emailRef.current.value.length<1){
            setError ("please enter email");
            return;
        }
        try{
            await login(emailRef.current.value, passwordRef.current.value);
            
        } catch {
              alert("Account not found");
          }
    }

    return(
    <>
        <h1>This is Login page</h1>
        <h1>Deployment test</h1>
            <div>
                <div>Currently logged in as: {currentUser?.email}</div>
                    <input ref={emailRef}placeholder ="Email"/>
                    <input ref={passwordRef}type = "password" placeholder ="Password"/>
                <div>
                    {error&&(
                        <h1>{error}</h1>
                    )}

                </div>
                   
            </div>
        <button onClick={handleLogin}>Log in</button><Link to="/signup">Don't have an account?</Link>
    </>
    )
}

export default Login;
