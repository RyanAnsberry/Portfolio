import React from 'react';
import './Page.css'

export default function Home(props) {
    function handleClick(e) {
        e.preventDefault();
        props.setCurrentPage('Portfolio')
        props.changePage('Portfolio')
        const currentButton = document.querySelector('.current-button');
        const portButton = document.querySelector('.port-nav-button')
        currentButton.classList.toggle('current-button');
        portButton.classList.toggle('current-button');
    }

    return (
        <section className="Home page">
            <div className="home-text-container">
                <h1 className="home-header">Hello, I'm <span className="full-name">Ryan Ansberry.</span></h1>
                <h1 className="home-header">I'm a full-stack web developer.</h1>
                <button className="home-button" onClick={handleClick}>View My Work</button>
            </div>
        </section>
    )
}