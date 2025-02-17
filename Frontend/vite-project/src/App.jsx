import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Loginpage from "./Pages/loginpage"
import Navbar from "./Pages/Navbar"
import Login from "./Components/login"
import Signup from "./Components/signup"

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
      
  )
}

export default App;
