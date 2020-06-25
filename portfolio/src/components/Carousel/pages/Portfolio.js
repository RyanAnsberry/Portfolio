import React from 'react';
import './Page.css'

import ProjectCard from './ProjectCard.js';

export default function Portfolio() {
    return (
        <section className="Portfolio page">
            <div className="portfolio-page-container">
                <h1 className="portfolio-projects-header">Portfolio</h1>
                <div className="portfolio-project-slide">
                    <div className="portfolio-projects-container">
                        <ProjectCard title="Title" thumbnail="" description="Description" tech={["React", "React-Router", "Redux"]} deployed="" repo="" achievements={["Did it", "Good Stuff"]}/>
                        <ProjectCard title="Title" thumbnail="" description="Description" tech={["React", "React-Router", "Redux"]} deployed="" repo="" achievements={["Did it", "Good Stuff"]}/>
                        <ProjectCard title="Title" thumbnail="" description="Description" tech={["React", "React-Router", "Redux"]} deployed="" repo="" achievements={["Did it", "Good Stuff"]}/>

                    </div>
                </div>
            </div>        
        </section>
    )
}