import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Page.css'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = e => {
        e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <section className="Contact page">
                <div className="contact-page-container">

                    <h1 className="contact-header">CONTACT</h1>

                    <form className="contact-form">

                        <div className="contact-form-group contact-name">
                            <label className="contact-form-label">Name</label>
                            <input name="name" type="text" className="contact-form-input" value={this.state.name} onChange={this.handleChange} />
                        </div>

                        <div className="contact-form-group contact-email">
                            <label className="contact-form-label">Email</label>
                            <input name="email" type="text" className="contact-form-input" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="contact-form-group contact-message">
                            <label className="contact-form-label">Message</label>
                            <textarea name="message" type="text" className="contact-form-textarea" value={this.state.message} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="contact-form-submit-button">Submit</button>

                    </form>

                    <div className="contact-links-container">
                        <a href="https://github.com/RyanAnsberry" target="_blank" rel="noopener noreferrer" className="contact-link github"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/ryan-ansberry-11a55415a/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin"><FaLinkedin/></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;