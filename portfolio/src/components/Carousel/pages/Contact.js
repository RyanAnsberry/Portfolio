import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Page.css'

export default function Contact() {
    return (
        <section className="Contact page">
            <div className="contact-page-container">
                <div className="contact-links-container">
                    <a href="https://github.com/RyanAnsberry" target="_blank" rel="noopener noreferrer" className="contact-link github"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/ryan-ansberry-11a55415a/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin"><FaLinkedin/></a>
                </div>
            </div>
        </section>
    )
}