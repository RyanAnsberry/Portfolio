import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Page.css'

export default function Contact() {
    return (
        <section className="Contact page">
            <div className="contact-page-container">
                <h1 className="contact-header">CONTACT</h1>
                <div className="contact-email-prompt-container">
                    <h3 className="contact-email-header">Email: <span className="contact-my-email">ryanansberry@gmail.com</span></h3>
                    <form className="contact-email-form">
                        <input className="contact-email-input" placeholder="example@gmail.com..."></input>
                        <input className="contact-email-body"></input>
                        <button type="submit" className="contact-email-submit">Submit</button>
                    </form>
                </div>
                <div className="contact-links-container">
                    <a href="https://github.com/RyanAnsberry" target="_blank" rel="noopener noreferrer" className="contact-link github"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/ryan-ansberry-11a55415a/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin"><FaLinkedin/></a>
                </div>
            </div>
        </section>
    )
}