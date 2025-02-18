import React, { useState } from "react";
import Login from "../components/loginpage"
import Signup from '../components/signuppage'


function Loginpage() {
   const [sign,setSign]= useState(true)
    const handleClick=()=>{
        setSign(!sign)
        console.log(sign)
    }


 
  return (
    <div>
         {sign?<Login x={handleClick}/>: <Signup x={handleClick}/>}
         
    </div>
    
    
  );
}






export default Loginpage;



