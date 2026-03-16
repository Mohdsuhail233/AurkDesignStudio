import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleScrollLink = (e, id) => {
        closeMenu();
        if (window.location.pathname === '/') {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <Link
                to="/"
                className="logo-link"
                onClick={() => {
                    closeMenu();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <div className="logo">
                    <img src="/images/AurkLogo.png" alt="Aurk Design Studio" className="header-logo-img" />
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="nav-links">
                <Link to="/about" className="nav-item">About</Link>
                <a href="/#services" className="nav-item" onClick={(e) => handleScrollLink(e, 'services')}>Services</a>
                <Link to="/portfolio" className="nav-item">Portfolio</Link>
                <a href="/#contact" className="nav-item" onClick={(e) => handleScrollLink(e, 'contact')}>Contact</a>
            </nav>

            {/* Mobile Toggle */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'is-active' : ''}`}>
                <nav className="mobile-nav-links">
                    <Link to="/" className="mobile-nav-item" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}>
                        Home <span>01</span>
                    </Link>
                    <Link to="/about" className="mobile-nav-item" onClick={closeMenu}>
                        About Us <span>02</span>
                    </Link>
                    <Link to="/portfolio" className="mobile-nav-item" onClick={closeMenu}>
                        Portfolio <span>03</span>
                    </Link>
                    <a href="/#services" className="mobile-nav-item" onClick={(e) => handleScrollLink(e, 'services')}>
                        Services <span>04</span>
                    </a>
                    <a href="/#contact" className="mobile-nav-item" onClick={(e) => handleScrollLink(e, 'contact')}>
                        Contact <span>05</span>
                    </a>
                </nav>

                <div className="mobile-menu-footer">
                    <p>aurkdesignstudio@gmail.com</p>
                    <div className="mobile-socials">
                        <a href="https://www.instagram.com/AurkDesignStudio">Instagram</a>
                        <a href="https://www.linkedin.com/company/aurkdesignstudio/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </header>
    );
}


