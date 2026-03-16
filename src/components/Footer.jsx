import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-top-section">
                <div className="footer-philosophy">
                    <p>
                        At AURK, we excel in creating extraordinary spaces tailored to your unique needs. 
                        Leveraging our international design experience and a highly skilled team, 
                        we offer designing consultancy and seamless turnkey solutions that ensure 
                        exceptional quality and efficiency. From concept to reality, we craft your 
                        dream space with innovation, precision, and unparalleled craftsmanship.
                    </p>
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/company/aurkdesignstudio/" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        <a href="https://www.instagram.com/AurkDesignStudio" aria-label="Instagram"><Instagram size={18} /></a>
                    </div>
                </div>

                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li><a href="/#home">Home <ArrowUpRight size={14} /></a></li>
                        <li><Link to="/about">About Us <ArrowUpRight size={14} /></Link></li>
                        <li><Link to="/portfolio">Portfolio <ArrowUpRight size={14} /></Link></li>
                        <li><a href="/#services">Services <ArrowUpRight size={14} /></a></li>
                        <li><a href="/#faq">FAQ <ArrowUpRight size={14} /></a></li>
                        <li><a href="#contact">Contact <ArrowUpRight size={14} /></a></li>
                    </ul>
                </nav>
            </div>

            <div className="footer-main-logo">
                <img src="/images/AurkLogo.png" alt="Aurk Design Studio" className="footer-logo-img" />
            </div>

            <div className="footer-bottom-row">
                <div className="footer-bottom-left">
                    <div className="footer-contact-info">
                        <div className="contact-item">
                            <span className="contact-label">Email:</span>
                            <a href="mailto:aurkdesignstudio@gmail.com">aurkdesignstudio@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">Phone:</span>
                            <a href="tel:+919871759196">+91 98717 59196</a>
                        </div>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy <ArrowUpRight size={12} /></a>
                        <Link to="/terms">Terms and Condition <ArrowUpRight size={12} /></Link>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>Designed & Managed by <a href="https://www.instagram.com/devnDex" target="_blank" rel="noopener noreferrer" className="devndex-link">DevnDex</a></p>
                    <p>&copy; {new Date().getFullYear()} Aurk Design Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

