import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

// Reusable scroll reveal block
const FadeInBlock = ({ children, delay = 0, className = "" }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div
            ref={ref}
            className={`fade-up-element ${inView ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <section className="about-hero">
                <FadeInBlock>
                    <h1 className="about-title">About Us</h1>
                </FadeInBlock>
                <FadeInBlock delay={0.2}>
                    <p className="about-subtitle">Explore our philosophy, mission, and the people behind the designs.</p>
                </FadeInBlock>
            </section>

            <section className="about-section-block">
                <FadeInBlock delay={0.1} className="about-block-content">
                    <h2>Who We Are</h2>
                    <p>
                        At Aurk Design Studio, we believe that design is not just about making things look good, but about creating spaces that resonate with the soul. We are a collective of passionate architects, dynamic interior designers, and visionary planners. We specialize in bringing luxury and functionality together in a seamless harmony.
                    </p>
                    <p>
                        From high-end residential estates to cutting-edge corporate offices, our multidisciplinary team treats every project as a unique masterpiece, tailored carefully to our client's vision and lifestyle.
                    </p>
                </FadeInBlock>
                <FadeInBlock delay={0.3} className="about-block-image scale-reveal">
                    <img src="/images/house.jpg" alt="Who we are" />
                </FadeInBlock>
            </section>

            <section className="about-section-block reverse">
                <FadeInBlock delay={0.1} className="about-block-content">
                    <h2>Company Mission</h2>
                    <p>
                        Our mission is simple: To craft environments that inspire, comfort, and elevate human experiences. We strive to push the boundaries of modern architecture and interior design by integrating sustainable practices, cutting-edge technology, and timeless aesthetics.
                    </p>
                    <p>
                        We are committed to delivering excellence, transparent collaboration, and an unwavering attention to detail in every single project.
                    </p>
                </FadeInBlock>
                <FadeInBlock delay={0.3} className="about-block-image scale-reveal">
                    <img src="/images/kitchen.webp" alt="Company Mission" />
                </FadeInBlock>
            </section>

            <section className="about-section-block">
                <FadeInBlock delay={0.1} className="about-block-content">
                    <h2>Our Founder</h2>
                    <p>
                        Mohammad Afzal is a passionate Civil Engineer and interior designer specializing in luxury residences and retail showrooms. With a skilled team, he handles turn-key projects in collaboration with a family-owned construction business.
                    </p>
                    <p>
                        Holding a degree in Civil Engineering With three years of experience,he has refined skills in interior detailing, and large-scale project management.
                    </p>
                </FadeInBlock>

                <FadeInBlock delay={0.3} className="about-block-image scale-reveal founder-image-block">
                    <img src="/images/founder.PNG" alt="Mohammad Afzal" />
                </FadeInBlock>
            </section>
        </div>
    );
}
