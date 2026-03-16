import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

import { projectList } from '../constants/data';

const PortfolioItem = ({ proj, idx }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Link 
            ref={ref}
            to={`/portfolio/${idx}`} 
            className={`project-card ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${0.4 + (idx % 2) * 0.2}s` }}

        >
            <div className="project-image-wrapper">
                <img src={proj.img} alt={proj.title} />
            </div>
            <div className="project-info">
                <h3 className="project-title-text">{proj.title}</h3>
            </div>
        </Link>
    );
};


export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-page">
            <section className="portfolio-section">
                <h2 className="portfolio-title">OUR SHOWCASE OF<br />DESIGN EXCELLENCE</h2>

                <div className="project-grid">
                    {projectList.map((proj, idx) => (
                        <PortfolioItem key={idx} proj={proj} idx={idx} />
                    ))}
                </div>
            </section>
        </div>
    );
}

