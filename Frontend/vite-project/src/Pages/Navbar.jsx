import React from 'react'

import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
        <h1><Link to="/">home</Link> </h1>
        <h1><Link to="/login">Login</Link></h1>
      
    </div>
  )
}

export default Navbar
