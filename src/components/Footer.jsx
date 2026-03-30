import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container-full" style={{ padding: '0 5vw' }}>
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <img src="/logos/logo_transparent.svg" alt="Nexaro Pro Logo" style={{ height: '55px', marginRight: '-5px' }} />
                            Nexaro Pro
                        </Link>
                        <p>Elevating your professional journey with strategic, data-driven job applications.</p>
                        <Link to="/#contact" onClick={() => window.location.hash = 'contact'} className="btn-reach-out" style={{ width: 'max-content', marginTop: '10px' }}>
                            Reach Us <span style={{ marginLeft: '8px' }}>↗</span>
                        </Link>
                        <div className="social-links" style={{ marginTop: '20px' }}>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">ig</a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <Link to="/features">Features</Link>
                            <Link to="/#pricing" onClick={() => window.location.replace('/#pricing')}>Pricing</Link>
                            <a href="#">API</a>
                        </div>
                        <div className="footer-col">
                            <h4>Company</h4>
                            <Link to="/#about" onClick={() => window.location.replace('/#about')}>About</Link>
                            <a href="#">Careers</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="footer-col">
                            <h4>Support</h4>
                            <Link to="/#faq" onClick={() => window.location.replace('/#faq')}>FAQ</Link>
                            <Link to="/#contact" onClick={() => window.location.replace('/#contact')}>Contact</Link>
                            <Link to="/privacy">Privacy</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Nexaro Pro Inc. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/privacy">Cookies Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
