import React from 'react';
import './projects.css';
import img1 from './img/project-img1.png'

const Projects = () => (
    <section className="projects-container">
        <div className="section-header">
            <h1> Projetos </h1>
        </div>
        <div className="project-item">
            <img src={img1} alt="Project 1"/>
            <div className="item-desc-text">
                <h2>
                    Nome do Projeto
                </h2>
                <p>
                    Back-end<span className="separator"></span>2019
                </p>
                <a href="" className="orange-link">Ver Projeto -></a>
            </div>
        </div>
        <div className="project-item">
            <img src={img1} alt="Project 1"/>
            <div className="item-desc-text">
                <h2>
                    Nome do Projeto
                </h2>
                <p>
                    Back-end<span className="separator"></span>2019
                </p>
                <a href="" className="orange-link">Ver Projeto -></a>
            </div>
        </div>
    </section>
);

export default Projects;