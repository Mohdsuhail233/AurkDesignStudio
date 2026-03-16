import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

import { projectList } from '../constants/data';

const ProjectCard = ({ proj, idx }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Link 
            ref={ref}
            to={`/portfolio/${idx}`} 
            className={`project-card ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${idx * 0.1}s` }}
        >
            <div className="project-image-wrapper">
                <img src={proj.img} alt={proj.title} />
            </div>
            <div className="project-info">
                <span className="project-label">Project 0{idx + 1}</span>
                <p className="project-title-text">{proj.title}</p>
            </div>
        </Link>
    );
};

export default function Projects() {
    const { ref: headerRef, inView: headerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="home-projects" id="portfolio">
            <div 
                ref={headerRef}
                className={`projects-header-wrapper ${headerInView ? 'is-visible' : ''}`}
            >
                <div className="projects-header-left">
                    <h2 className="portfolio-title">MORE THAN<br />MEETS THE EYE</h2>
                    <p className="portfolio-subtitle">Explore our portfolio of stunning interiors</p>
                </div>
                <div className="projects-header-right">
                    <p>We take pride in our diverse portfolio, showcasing a range of unique and sophisticated interiors. Each project reflects our commitment to creativity, quality, and client satisfaction.</p>
                </div>
            </div>
            
            <div className="project-grid">
                {projectList.slice(0, 3).map((proj, idx) => (
                    <ProjectCard key={idx} proj={proj} idx={idx} />
                ))}
            </div>

            <div className="projects-footer">
                <Link to="/portfolio" className="btn-pill">Our Projects</Link>
            </div>
        </section>

    );
}


