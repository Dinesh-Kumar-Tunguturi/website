import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-brand">
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: 32, height: 32, background: '#ff5f53', borderRadius: '6px', transform: 'rotate(-10deg)', marginRight: '8px' }}></div>
                BrandLyft
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/#pricing" onClick={() => window.location.replace('/#pricing')}>Pricing</Link>
                <Link to="/#faq" onClick={() => window.location.replace('/#faq')}>FAQ</Link>
            </div>

            <div className="nav-auth">
                <Link to="/login" className="btn-login" style={{ textDecoration: 'none' }}>Login</Link>
                <Link to="/signup" className="btn-signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
