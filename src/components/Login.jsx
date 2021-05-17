import React from "react";
import "./Login.css";
import FacebookIcon from '@material-ui/icons/Facebook';

function Login() {
    return <div className="login-container">
        <div className="sign-up">
            <h1>SIGN IN</h1>
            <form action="#" method="POST">
                <input type="text" name="email" placeholder="Email"></input>
                <input type="text" name="password" placeholder="Password"></input>
                <button className="login-button sign-in-btn" type="submit">SIGN IN</button>
            </form>
            <a className="forgot-password" href="#blank">forgot your password?</a>
            <p>or</p>
            <button className="login-button fb-btn"><FacebookIcon className="fb-icon" /> SIGN IN WITH FACEBOOK</button>
        </div>
        <div className="login">
            <h1>REGISTER</h1>
            <form action="#" method="POST">
                <div className="names">
                    <input className="fname" type="text" name="fname" placeholder="First Name"></input>
                    <input className="lname" type="text" name="lname" placeholder="Last Name"></input>
                </div>
                <input type="text" name="email" placeholder="Email"></input>
                <input type="text" name="password" placeholder="Password"></input>
                <button className="login-button register-btn" type="submit">REGISTER</button>
            </form>

        </div>

    </div>
}

export default Login;
