import { useRef} from "react";

import {signup,useAuth,logout} from "./firebaseConfig"
import {
    BrowserRouter as Router,
    useNavigate,
    Link,
    Route,
    NavLink,
  } from 'react-router-dom';


function SignUp () {
  const currentUser=useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
        try{await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
              alert("Can't sign up");
          }
    }
   
      return(
              <>
          <h1>This is sign up page</h1>

              <div>
                  <div>Currently logged as:{currentUser?.email}</div>
                  <input ref={emailRef}placeholder ="Email"/>
                  <input ref={passwordRef}type = "password" placeholder ="Password"/>
              </div>

              <button onClick={handleSignup}>Sign Up</button><Link to="/Login">Have an account?</Link>



                  </>
                  )
          }

export default SignUp;