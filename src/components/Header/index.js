import React from 'react';
import logo from '../../logo.svg';


import './header.css';

const Header = () => (
    <header id="main-header" className="menu">
        <div className="menu-logo">
            <a href="#"><img src={logo} alt="Logo"/></a>
        </div>
        <nav className="menu-nav">
            <ul>
                <li><a href="https://www.linkedin.com/in/helder-souza-237798169/">Linkedin</a></li>
                <li><a href="#">Currículo</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;