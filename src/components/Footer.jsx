import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container" style={{ margin: '0 auto' }}>
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: 32, height: 32, background: '#00d75a', borderRadius: '6px', transform: 'rotate(-10deg)', marginRight: '10px' }}></div>
                            BrandLyft
                        </Link>
                        <p>Elevating your professional journey with strategic, data-driven job applications.</p>
                        <div className="social-links">
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
                    <p>© 2026 BrandLyft Inc. All rights reserved.</p>
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
