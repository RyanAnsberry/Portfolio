import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
import './Page.css';

export default function ProjectCard(props) {
    return (
        <div className="project-card-container">
            <div className="project-card-overview">
                <h1 className="project-card-title">{props.title}</h1>
                <div className="project-card-thumbnail-frame">
                    <img className="project-card-thumbnail" src={props.thumbnail} alt={props.title}/>
                </div>
            </div>

            <div className="project-card-information">
                <div className="project-card-description-container">
                    <h3 className="project-card-description-header">Description:</h3>
                    <p className="project-card-description-text">{props.description}</p>
                </div>
                <div className="project-card-tech-container">
                    <h3 className="project-card-tech-header">Technical:</h3>
                    <ul className="project-card-tech-list">
                        {props.tech.map(tech => 
                            <li className="project-card-tech" key={tech}>{tech}</li>
                        )}
                    </ul>
                </div> 
            </div>

            <div className="project-card-achievements-container">
                <h3 className="project-card-achievements-header">Achievements:</h3>
                <ul className="project-card-achievement-list">
                    {props.achievements.map(achievement => 
                        <li className="project-card-achievement" key={achievement}>{achievement}</li>
                    )}
                </ul>
            </div>

            <div className="project-card-links-container">
                <a href={props.deployed} className="project-card-link"><FaPlay/></a>
                <a href={props.repo} className="project-card-link"><FaGithub/></a>
            </div>
        </div>
    )
}