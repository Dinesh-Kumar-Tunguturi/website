import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <img src="/logos/logo_transparent.svg" alt="Nexaro Pro Logo" style={{ height: '55px', marginRight: '-8px' }} />
                Nexaro Pro
            </Link>

            {/* Desktop Links */}
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/#about" onClick={() => { window.location.replace('/#about'); closeMenu(); }}>About</Link>
                <Link to="/#why" onClick={() => { window.location.replace('/#why'); closeMenu(); }}>Why Us</Link>
                <Link to="/features">Features</Link>
                <Link to="/#pricing" onClick={() => { window.location.replace('/#pricing'); closeMenu(); }}>Pricing</Link>
                <Link to="/#faq" onClick={() => { window.location.replace('/#faq'); closeMenu(); }}>FAQ</Link>
            </div>

            <div className="nav-auth">
                <Link to="/#contact" onClick={() => { window.location.hash = 'contact'; closeMenu(); }} className="btn-reach-out">Reach Us <span style={{ marginLeft: '8px' }}>↗</span></Link>
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
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/#about" onClick={() => { window.location.replace('/#about'); closeMenu(); }}>About</Link>
                    <Link to="/#why" onClick={() => { window.location.replace('/#why'); closeMenu(); }}>Why Us</Link>
                    <Link to="/features" onClick={closeMenu}>Features</Link>
                    <Link to="/#pricing" onClick={() => { window.location.replace('/#pricing'); closeMenu(); }}>Pricing</Link>
                    <Link to="/#faq" onClick={() => { window.location.replace('/#faq'); closeMenu(); }}>FAQ</Link>
                    <div className="mobile-auth">
                        <Link to="/#contact" className="btn-reach-out" onClick={() => { window.location.hash = 'contact'; closeMenu(); }}>Reach Us ↗</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

