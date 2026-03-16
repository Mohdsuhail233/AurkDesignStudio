import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Process from '../components/Process';
import Showcase from '../components/Showcase';
import Projects from '../components/Projects';
import FAQ from '../components/FAQ';

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Intro />
            <Services />
            <Process />
            <Showcase />
            <Projects />
            <FAQ />
        </React.Fragment>
    );
}


