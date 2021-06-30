import React from "react";
import './Navbar.css';


function Navbar() {


    return <div className="nav-container" >
        <h1 className="nav-logo">MMF</h1>
        <button className="nav-links" src="/mens" >MENS</button>
        <button className="nav-links" src="/ladies" >LADIES</button>
        <div className="login-left">
            <a className="nav-login" href="/login" >Sign Up</a>
            <a className="nav-login" href="/login" >Login</a>
        </div>
    </div>

}

export default Navbar;