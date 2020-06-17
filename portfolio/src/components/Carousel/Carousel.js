import React from 'react';
import './Carousel.css'

import Slide from './Slide.js';

export default function Carousel(props) {
    return (
        <div className="Carousel-container">
            <Slide {...props}/>
        </div>
    );
}