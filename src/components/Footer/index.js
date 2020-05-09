import React from 'react';
import './footer.css'
import logo from './img/logo.svg';
import github from './img/github.svg';
import instagram from './img/instagram.svg';
import linkedin from './img/linkedin.svg';

const Footer = () => (
    <footer className="footer-container">
        <div className="footer-text">
            <h1>Grato pela visita!</h1>
            <h2>Entre em contato por um dos meios a seguir.</h2>
            <a href="mailto:heldergsds@gmail.com">heldergsds@gmail.com</a>
        </div>

        <div className="footer-social">
            <img src={logo} />
            <div className = "social-content">
                <div className="social-icons">
                <a href="https://www.linkedin.com/in/helder-souza-237798169/"><img src={linkedin} alt="linkedin-footer"/></a>
                <a href="#"><img src={instagram} alt="instagram-footer"/></a>
                    <a href="https://github.com/helllllllder"><img src={github} alt="github-footer"/></a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>© Copyright 2020. Helder Souza - Fullstack software developer & Visual Designer</p>
        </div>
    </footer>

);

export default Footer;