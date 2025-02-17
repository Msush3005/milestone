import React from 'react'
import Login from '../Components/login'
import Signup from '../Components/signup'


function Loginpage() {
  const [sign,setsign]=useState(true)
  const handleClick=()=>{
    setsign(!sign)
    console.log(sign)
  }
  return (
    <div>
        {sign? <Login x={handleClick}/>:<Signup x={handleClick}/>}
    </div>
  )
}

export default Loginpage;
