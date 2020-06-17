import React from 'react';
import './Slide.css'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';


export default function Slide(props) {
    return (
        <div className="Slide">
            <Home {...props}/>,
            <About />,
            <Portfolio />,
            <Contact />
        </div>
    )
}