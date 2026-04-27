import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
                <img src={proj.img} alt={`${proj.title} — luxury interior design project by Aurk Design Studio`} loading="lazy" width="600" height="400" />
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
            <Helmet>
                <title>Portfolio | Aurk Design Studio — Our Design Projects & Showcase</title>
                <meta name="description" content="Explore Aurk Design Studio's portfolio of luxury interior design projects — offices, master bedrooms, living rooms, modular kitchens, showrooms, and salons. See our showcase of design excellence." />
                <link rel="canonical" href="https://aurkdesignstudio.vercel.app/portfolio" />
                <meta property="og:title" content="Portfolio | Aurk Design Studio" />
                <meta property="og:description" content="Explore our showcase of luxury interior design projects — offices, bedrooms, living rooms, kitchens, showrooms, and more." />
                <meta property="og:url" content="https://aurkdesignstudio.vercel.app/portfolio" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section className="portfolio-section">
                <h1 className="portfolio-title">OUR SHOWCASE OF<br />DESIGN EXCELLENCE</h1>

                <div className="project-grid">
                    {projectList.map((proj, idx) => (
                        <PortfolioItem key={idx} proj={proj} idx={idx} />
                    ))}
                </div>
            </section>
        </div>
    );
}
