import {signup,useAuth,logout, storage} from "./firebaseConfig"
import {
    useNavigate
}from "react-router-dom"

//TODO: Add, edit, delete city data
//TODO: link when adding
// const db = getFirestore();


const Home=()=> {
    // if (currentUser==null){
    //     {handleLogOut}
    // }
    const navigate=useNavigate();
    const currentUser=useAuth();
    //TODO: make it so when you go in the website you are logged out
    async function handleLogOut(){
        try{
            await logout();
            navigate("/login");
        }catch{
            alert("Error!");
        }
    }
  

 
   

    return (
    <>
        <h1>This is Home page</h1>
        <br></br>
        <div className="App">
        </div>
        {currentUser &&
             <button onClick={handleLogOut}>Log out</button>
        }
       
    </>
    )
}

export default Home;