import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
            <img src={src} alt={alt} />
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
            <section className="project-detail-section">
                <div className="project-detail-header">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>

                <div className="project-detail-images">
                    {project.images.map((img, idx) => (
                        <DetailImage key={idx} src={img} alt={`${project.title} view ${idx + 1}`} />
                    ))}
                </div>

                <div className="back-link-wrapper">
                    <Link to="/portfolio" className="btn btn-dark">Back to Portfolio</Link>
                </div>
            </section>
        </div>
    );
}

