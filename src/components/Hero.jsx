import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const CountUp = ({ end, duration = 1500, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const startTimestamp = useRef(null);

    useEffect(() => {
        let animationFrameId;
        const step = (timestamp) => {
            if (!startTimestamp.current) startTimestamp.current = timestamp;
            const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                animationFrameId = window.requestAnimationFrame(step);
            }
        };
        animationFrameId = window.requestAnimationFrame(step);
        return () => {
            window.cancelAnimationFrame(animationFrameId);
            startTimestamp.current = null;
        };
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

import { heroData } from '../constants/data';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-wrapper">
                <img
                    src={heroData.bgImage}
                    alt="Elegant minimal interior"
                    className="hero-bg"
                />
            </div>
            <div className="hero-content">
                <div className="hero-text-block">
                    <div className="hero-stats">
                        {heroData.stats.map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <span className="stat-number">
                                    <CountUp 
                                        end={stat.value} 
                                        suffix={stat.suffix} 
                                        duration={Math.min(1000 + stat.value * 20, 1500)} 
                                    />
                                </span>
                                <div className="stat-divider"></div>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <a href="#portfolio" className="circle-btn">
                    <span>Explore<br />Our Work</span>
                </a>
            </div>

        </section>
    );
}
