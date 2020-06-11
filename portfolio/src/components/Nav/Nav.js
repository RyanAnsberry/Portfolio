import React from 'react';
import './Nav.css';

export default function Nav() {
    function handleClick(e) {
        e.preventDefault();
        // vars to hold prev and next current button
        const currentButton = document.querySelector('.current-button');
        const nextPage = e.target
        // toggle current button
        currentButton.classList.toggle('current-button')
        nextPage.classList.toggle('current-button')
    }

    return (
        <div className="Nav">
            <div className="link-container">
                <button className="nav-button current-button" onClick={handleClick}>HOME</button>
                <button className="nav-button" onClick={handleClick}>ABOUT</button>
                <button className="nav-button" onClick={handleClick}>PORTFOLIO</button>
                <button className="nav-button" onClick={handleClick}>CONTACT</button>
            </div>
        </div>
    );
}