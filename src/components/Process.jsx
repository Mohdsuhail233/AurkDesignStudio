import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Process.css';

export default function Process() {
    const { ref: headerRef, inView: headerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: gridRef, inView: gridInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            number: "01",
            title: "Consultation & Vision"
        },
        {
            number: "02",
            title: "Design & Planning"
        },
        {
            number: "03",
            title: "Project Coordination & Execution"
        },
        {
            number: "04",
            title: "The Final Reveal & Beyond"
        }
    ];

    return (
        <section className="process-section">
            <div className="process-container">
                <header 
                    ref={headerRef}
                    className={`process-header ${headerInView ? 'is-visible' : ''}`}
                >
                    <h2 className="process-main-title">FROM CONCEPT<br />TO COMPLETION</h2>
                </header>

                <div 
                    ref={gridRef} 
                    className={`process-grid ${gridInView ? 'is-visible' : ''}`}
                >
                    {steps.map((step, index) => (
                        <div key={index} className="process-card">
                            <span className="process-number">{step.number}</span>
                            <h3 className="process-step-title">{step.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


