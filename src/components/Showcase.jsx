import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Showcase.css';

import { showcaseData } from '../constants/data';

const BentoItem = ({ children, className, delay }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });


    return (
        <div 
            ref={ref} 
            className={`bento-item ${className} ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default function Showcase() {
    const { ref: headerRef, inView: headerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="why-choose-us" id="why-choose-us">
            <div 
                ref={headerRef}
                className={`why-header ${headerInView ? 'is-visible' : ''}`}
            >
                <h2>WHY CHOOSE US?</h2>
            </div>
            
            <div className="bento-grid">
                {showcaseData.map((item, idx) => (
                    <BentoItem key={idx} className={item.className} delay={item.delay}>
                        {item.type === 'text' ? (
                            <div className="card-inner">
                                <div className="dot-icon"></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ) : (
                            <img src={item.img} alt={item.alt} />
                        )}
                    </BentoItem>
                ))}
            </div>

        </section>
    );
}


