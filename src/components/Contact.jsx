import React from "react";
import "./Contact.css";

function Contact() {
    return <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <form action="#" method="POST">
            <div className="names">
                <input className="fname" type="text" name="fname" placeholder="First Name"></input>
                <input className="lname" type="text" name="lname" placeholder="Last Name"></input>
            </div>
            <input type="email" name="email" placeholder="Email"></input>
            <input type="tel" name="tel" placeholder="Contact Number"></input>
            <select name="enquiry" placeholder="Please select an option">
                <option >Please select an option</option>
                <option name="complaints" value="complaints">Complaints</option>
                <option name="general-enquiry" value="general-enquiry">General Enquiry</option>
                <option name="returns">Returns</option>
            </select>
            <textarea name="message" rows="10" cols="50" placeholder="How can we help you?" ></textarea>
            <button className="login-button register-btn" type="submit">SUBMIT</button>
        </form>
    </div>
}

export default Contact;