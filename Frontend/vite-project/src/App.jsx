import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Loginpage from "./pages/Loginpagepage"
import Navbar from "./pages/Navbarpage";
import Login from "./components/loginpage";
import Signup from "./components/signuppage";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;