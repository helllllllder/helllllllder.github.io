import React from 'react';
import './about.css';
import mefire from './img/mefire.svg';


const About = () => (
    <section className="about-container">
        <div className="section-header">
            <h1> Sobre mim </h1>
        </div>
        <div className="about-content">
            <div className="about-img">
                <img src={mefire}/> 
            </div>
            <div className="about-text">
                <p>
                    Sou Helder de Souza. Moro em Natal, Rio Grande do Norte.<br/>Autodidata e sempre em busca de conhecimento, principalmente <br/> na área de programação e de design. Busco oportunidades para<br/>adquirir novas experiências.
                </p>
                <p>
                    Me esforço para criar produtos e experiências que tragam impacto<br/>funcional e positivo. 
                </p>
                <p>
                    Obrigado por ler, espero que possamos nos conhecer!
                </p>
                <a href="#">Meu Currículo</a>
            </div>
        </div>
    </section>
);

export default About;