import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri'
import './Page.css'

export default function About() {
    return (
        <section className="About page">
            <div className="about-page-container">
                <h3 className="about-full-name">Ryan Ansberry</h3>

                <div className="about-portrait-container">
                    <div className="about-portrait-frame">
                        <img className="about-portrait-image" src="" alt="Ryan Ansberry Portrait"/>
                    </div>
                </div>

                <div className="about-information-container">
                    <div className="about-skills-container">
                        <h3 className="about-skills-header">Skills</h3> 
                        <ul className="about-skills-list">
                            <li className="about-skill">Javascript</li>
                            <li className="about-skill">React</li>
                            <li className="about-skill">Redux</li>
                            <li className="about-skill">Node</li>
                            <li className="about-skill">Python</li>
                        </ul>
                    </div>

                    <div className="about-mission-statement-container">
                        <p className="about-mission-statement">
                            Mission Statement
                        </p>
                    </div>

                </div>


                <div className="about-links-container">
                    <a href="localhost:3000" target="_blank" rel="noopener noreferrer" className="about-link resume"><RiPagesLine/></a>
                    <a href="https://github.com/RyanAnsberry" target="_blank" rel="noopener noreferrer" className="about-link github"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/ryan-ansberry-11a55415a/" target="_blank" rel="noopener noreferrer" className="about-link linkedin"><FaLinkedin/></a>
                </div>

            </div>          
        </section>
    )
}