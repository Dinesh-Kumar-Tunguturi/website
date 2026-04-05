import React, { useState } from 'react';
import PreservedLink from './PreservedLink';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav-brand">
            <PreservedLink to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <img src="/logos/logo_transparent.svg" alt="Nexaro Pro Logo" style={{ height: '55px', marginRight: '-8px' }} />
                Nexaro Pro
            </PreservedLink>

            {/* Desktop Links */}
            <div className="nav-links">
                <PreservedLink to="/">Home</PreservedLink>
                <PreservedLink to="/#about">About</PreservedLink>
                <PreservedLink to="/#why">Why Us</PreservedLink>
                <PreservedLink to="/features">Features</PreservedLink>
                <PreservedLink to="/#pricing">Pricing</PreservedLink>
                <PreservedLink to="/#faq">FAQ</PreservedLink>
            </div>

            <div className="nav-auth">
                <PreservedLink to="/#contact" className="btn-reach-out">Reach Us <span style={{ marginLeft: '8px' }}>↗</span></PreservedLink>
            </div>

            {/* Hamburger Button for Mobile */}
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <PreservedLink to="/" onClick={closeMenu}>Home</PreservedLink>
                    <PreservedLink to="/#about" onClick={closeMenu}>About</PreservedLink>
                    <PreservedLink to="/#why" onClick={closeMenu}>Why Us</PreservedLink>
                    <PreservedLink to="/features" onClick={closeMenu}>Features</PreservedLink>
                    <PreservedLink to="/#pricing" onClick={closeMenu}>Pricing</PreservedLink>
                    <PreservedLink to="/#faq" onClick={closeMenu}>FAQ</PreservedLink>
                    <div className="mobile-auth">
                        <PreservedLink to="/#contact" className="btn-reach-out" onClick={closeMenu}>Reach Us ↗</PreservedLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

