import React from 'react';
import './Nav.css';

export default function Nav(props) {
    function handleClick(e) {
        e.preventDefault();
        // vars to hold prev and next current button
        const currentButton = document.querySelector('.current-button');
        const nextPage = e.target.classList[0]
        props.setCurrentPage(nextPage)
        props.changePage(nextPage)
        // toggle current button
        currentButton.classList.toggle('current-button')
        e.target.classList.toggle('current-button')
    }

    return (
        <div className="Nav">
            <div className="link-container">
                <button className="Home home-nav-button nav-button current-button" onClick={handleClick}>HOME</button>
                <button className="About about-nav-button nav-button" onClick={handleClick}>ABOUT</button>
                <button className="Portfolio port-nav-button nav-button" onClick={handleClick}>PORTFOLIO</button>
                <button className="Contact contact-nav-button nav-button" onClick={handleClick}>CONTACT</button>
            </div>
        </div>
    );
}