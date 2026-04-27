import React from 'react';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Aurk Design Studio | Luxury Interior Design & Architecture</title>
                <meta name="description" content="Aurk Design Studio creates luxury interior designs, bespoke furniture, and architectural masterpieces. 25+ projects completed with 5+ years of experience. Get a free consultation today." />
                <link rel="canonical" href="https://aurkdesignstudio.vercel.app/" />
                <meta property="og:title" content="Aurk Design Studio | Luxury Interior Design & Architecture" />
                <meta property="og:description" content="We craft extraordinary spaces — luxury interiors, bespoke furniture, and architectural design. From concept to reality with innovation and precision." />
                <meta property="og:url" content="https://aurkdesignstudio.vercel.app/" />
                <meta property="og:type" content="website" />
            </Helmet>
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
