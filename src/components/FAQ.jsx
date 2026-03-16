import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <h3>{question}</h3>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default function FAQ() {
    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "A typical residential project can take anywhere from 4 to 12 weeks, depending on the scope of work and structural involvement. We provide a detailed timeline during the initial planning phase."
        },
        {
            question: "What is your design philosophy?",
            answer: "We focus on luxury that is lived-in. Our philosophy blends timeless aesthetics with modern functionality, ensuring every space we design is both a masterpiece and a comfort-focused home."
        },
        {
            question: "Do you handle custom furniture as well?",
            answer: "Yes, we have an in-house bespoke furniture design team that creates unique pieces tailored specifically to your space, ensuring perfect fit and finish."
        },
        {
            question: "What kind of projects do you take on?",
            answer: "We specialize in luxury residential interiors, premium corporate offices, and high-end retail showrooms. We love challenges that require deep creative thinking."
        }
    ];

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <h2>FREQUENTLY ASKED<br />QUESTIONS</h2>
                    <p>Everything you need to know about our process and services.</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
