import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Intro.css';

import { introData } from '../constants/data';

export default function Intro() {
    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Trigger when 20% of image is in view
    });

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div
                    ref={imageRef}
                    className={`about-image-column ${imageInView ? 'animate-slide-right' : 'hidden-left'}`}
                >
                    <div className="about-image-wrapper">
                        <img
                            src={introData.image}
                            alt="Aurk Design Studio"
                            className="about-image"
                        />
                    </div>
                    <p className="about-image-caption">
                        Take a glimpse into our world of creativity and innovation.
                    </p>
                </div>

                <div
                    ref={textRef}
                    className={`about-text-column ${textInView ? 'animate-slide-left' : 'hidden-right'}`}
                >
                    <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', marginBottom: '1.5rem', color: '#333' }}>{introData.title}</h2>
                    <p className="about-description">
                        {introData.description}
                    </p>
                    <Link to="/about" className="btn" style={{ alignSelf: 'flex-start', marginTop: '1rem', textDecoration: 'none' }}>View More</Link>
                    <div className="about-bottom-line" style={{ marginTop: '3rem' }}></div>
                </div>
            </div>
        </section>
    );
}
