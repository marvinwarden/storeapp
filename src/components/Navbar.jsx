import React from "react";
import './Navbar.css';
import Cart from "./Cart";
import { useEffect } from 'react'

function Navbar() {

    const navbarControl = () => {

        let navBar = document.querySelector(".nav-container");
        let logo = document.querySelector(".nav-logo");
        let navLink = document.querySelectorAll(".nav-links");
        let loginLink = document.querySelector(".login-section");

        if (window.scrollY > 50) {
            navBar.classList.add("nav-left");
            logo.classList.add("nav-logo-left");
            navLink[0].classList.add("nav-links-left")
            navLink[1].classList.add("nav-links-left")
            loginLink.classList.add("login-left")


        } else {
            navBar.classList.remove("nav-left");
            logo.classList.remove("nav-logo-left");
            navLink[0].classList.remove("nav-links-left")
            navLink[1].classList.remove("nav-links-left")
            loginLink.classList.remove("login-left")

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarControl)
        return () => window.removeEventListener('scroll', navbarControl)
    }, [])


    return <div className="nav-container" >
        <h1 className="nav-logo nav-logo-left">MMF</h1>
        <button className="nav-links" src="/mens" >MENS</button>
        <button className="nav-links" src="/ladies" >LADIES</button>
        <div className="login-section">
            <a className="nav-login" href="/login" >Sign Up / login</a>
            <Cart />
        </div>
    </div>

}

export default Navbar;