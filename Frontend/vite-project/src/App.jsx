import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/loginpage"
import Navbar from "./Pages/Navbar"


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

export default App
