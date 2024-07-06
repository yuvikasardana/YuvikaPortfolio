//use effect hoook to handle changing of the authentication
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../Login";
import Home from "./home";

const Dashboard = () => {
const [user, setUser] = useState(null);

const auth = getAuth()

useEffect(()=>{
onAuthStateChanged(auth, (user)=>{
    if(user){
        setUser(user);
    }else{
        setUser(null);
    }
})
}, [])


return (
    <div className="dashboard">
       {user ? <Home/> : <Login/>}
       

    </div>
)
}

export default Dashboard;
