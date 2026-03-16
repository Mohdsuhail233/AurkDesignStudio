import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import { servicesData } from '../constants/data';

const ServiceItem = ({ svc, idx }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div 
            ref={ref} 
            className={`service-item ${inView ? 'is-visible' : ''}`}
            style={{ '--delay': `${idx * 0.2}s` }}
        >
            <div className="service-info-col">
                <h3 className="service-name">{svc.title}</h3>
                <p className="service-tagline">{svc.tagline}</p>
            </div>
            <div className="service-desc-col">
                <p>{svc.desc}</p>
            </div>
            <div className="service-icon-col">
                <div className="service-icon">
                    {svc.icon}
                </div>
            </div>
        </div>
    );
};

export default function Services() {
    const { ref: headerRef, inView: headerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: listRef, inView: listInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="services" id="services">
            <div className="services-container">
                <div 
                    ref={headerRef} 
                    className={`services-header ${headerInView ? 'is-visible' : ''}`}
                >
                    <h2 className="services-title">OUR SERVICES</h2>
                    <p className="services-subtitle">From concept to completion, we handle it all</p>
                </div>

                <div 
                    ref={listRef}
                    className={`services-list ${listInView ? 'is-visible' : ''}`}
                >
                    {servicesData.map((svc, idx) => (
                        <ServiceItem key={idx} svc={svc} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}



