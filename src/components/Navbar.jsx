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
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: 32, height: 32, background: '#ff5f53', borderRadius: '6px', transform: 'rotate(-10deg)', marginRight: '8px' }}></div>
                Nexora Protech Solution
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
                <Link to="/login" className="btn-login" style={{ textDecoration: 'none' }}>Login</Link>
                <Link to="/signup" className="btn-signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
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
                        <Link to="/login" className="btn-login" onClick={closeMenu}>Login</Link>
                        <Link to="/signup" className="btn-signup" onClick={closeMenu}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

