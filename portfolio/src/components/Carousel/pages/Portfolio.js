import React from 'react';
import './Page.css'

import ProjectCard from './ProjectCard.js';

export default function Portfolio() {
    return (
        <section className="Portfolio page">
            <div className="portfolio-page-container">
                <div className="portfolio-project-slide">
                    <h1 className="portfolio-projects-header">My Projects</h1>
                    <div className="portfolio-projects-container">
                        <ProjectCard title="Title" thumbnail="" description="Description" tech={["React", "React-Router", "Redux"]} deployed="" repo="" achievements={["Did it", "Good Stuff"]}/>
                    </div>
                </div>
            </div>        
        </section>
    )
}