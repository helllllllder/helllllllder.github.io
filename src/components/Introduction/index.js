import React from 'react';
import './intro.css';

import github from './icons/github.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';


const Introduction = () => (
    <section className="introduction">
            <div className="intro-description">
                <h1>Helder Souza,</h1>
                <p className="orange-text">Fullstack Software developer e Visual designer</p>
                <p>Autodidata, sempre em busca de conhecimento<br/>sobre coisas novas sobre desenvolvimento e design.</p>
            </div>
            <div className="intro-social">
                <div class="social-item">
                <a href="https://www.linkedin.com/in/helder-souza-237798169/"><img src={linkedin} alt="linkedin"/></a>
                </div>
                <div class="social-item">
                    <a href="https://github.com/helllllllder"><img src={github} alt="github"/></a>
                </div>
                <div class="social-item">
                    <a href=""><img src={instagram} alt="instagram"/></a>
                </div>
                
            </div>
    </section>
);

export default Introduction;