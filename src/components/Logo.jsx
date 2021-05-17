import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
    return <div className="logo-container">
        <Link to="/">
            <h1 className="logo">MMF</h1>
        </Link>
    </div>
}

export default Logo;