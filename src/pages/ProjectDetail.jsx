import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './ProjectDetail.css';

import { projectList } from '../constants/data';

const DetailImage = ({ src, alt }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`detail-image-wrapper ${inView ? 'is-visible' : ''}`}>
            <img src={src} alt={alt} loading="lazy" width="800" height="600" />
        </div>
    );
};

export default function ProjectDetail() {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const project = projectList[id] || projectList[0];

    return (
        <div className="project-detail-page">
            <Helmet>
                <title>{project.title} — Interior Design Project | Aurk Design Studio</title>
                <meta name="description" content={`${project.description} View this luxury ${project.title.toLowerCase()} interior design project by Aurk Design Studio.`} />
                <link rel="canonical" href={`https://aurkdesignstudio.vercel.app/portfolio/${id}`} />
                <meta property="og:title" content={`${project.title} — Interior Design Project | Aurk Design Studio`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:url" content={`https://aurkdesignstudio.vercel.app/portfolio/${id}`} />
                <meta property="og:image" content={`https://aurkdesignstudio.vercel.app${project.img}`} />
                <meta property="og:type" content="article" />
            </Helmet>

            <section className="project-detail-section">
                <div className="project-detail-header">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>

                <div className="project-detail-images">
                    {project.images.map((img, idx) => (
                        <DetailImage key={idx} src={img} alt={`${project.title} luxury interior design — view ${idx + 1} by Aurk Design Studio`} />
                    ))}
                </div>

                <div className="back-link-wrapper">
                    <Link to="/portfolio" className="btn btn-dark">Back to Portfolio</Link>
                </div>
            </section>
        </div>
    );
}
