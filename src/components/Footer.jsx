import React from 'react';
import PreservedLink from './PreservedLink';

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container-full" style={{ padding: '0 5vw' }}>
                <div className="footer-top">
                    <div className="footer-brand">
                        <PreservedLink to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <img src="/logos/logo_transparent.svg" alt="Nexaro Pro Logo" style={{ height: '55px', marginRight: '-5px' }} />
                            Nexaro Pro
                        </PreservedLink>
                        <p>Elevating your professional journey with strategic, data-driven job applications.</p>
                        <PreservedLink to="/#contact" className="btn-reach-out" style={{ width: 'max-content', marginTop: '10px' }}>
                            Reach Us <span style={{ marginLeft: '8px' }}>↗</span>
                        </PreservedLink>
                        <div className="social-links" style={{ marginTop: '20px' }}>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">ig</a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <PreservedLink to="/features">Features</PreservedLink>
                            <PreservedLink to="/#pricing">Pricing</PreservedLink>
                            <a href="#">API</a>
                        </div>
                        <div className="footer-col">
                            <h4>Company</h4>
                            <PreservedLink to="/#about">About</PreservedLink>
                            <a href="#">Careers</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="footer-col">
                            <h4>Support</h4>
                            <PreservedLink to="/#faq">FAQ</PreservedLink>
                            <PreservedLink to="/#contact">Contact</PreservedLink>
                            <PreservedLink to="/privacy">Privacy</PreservedLink>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Nexaro Pro Inc. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <PreservedLink to="/terms">Terms of Service</PreservedLink>
                        <PreservedLink to="/privacy">Cookies Policy</PreservedLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
