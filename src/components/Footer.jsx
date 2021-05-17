import React from "react";
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return <div className="footer">
        <a className="contact" href="/contact" >CONTACT US</a>
        <div className="social-links-container">
            <a className="social" href="http://" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a className="social" href="http://" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a className="social" href="http://" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a className="social" href="http://" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        </div>
    </div>
}

export default Footer;