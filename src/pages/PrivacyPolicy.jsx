import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="policy-page">
            <Navbar />
            <div className="container page-container" style={{ maxWidth: '800px' }}>
                <h1 className="page-header">Privacy Policy</h1>
                <div className="policy-content" style={{ color: '#444', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.3rem', color: '#111', marginBottom: '16px' }}>1. Data Collection</h2>
                        <p>We collect information you provide directly to us, such as your name, email, phone number, and resume data. We also collect device and usage information automatically.</p>
                    </section>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.3rem', color: '#111', marginBottom: '16px' }}>2. How We Use Data</h2>
                        <p>Your data is used solely to facilitate job applications, communicate service updates, and improve our automation algorithms. We do not sell your personal data to third parties.</p>
                    </section>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.3rem', color: '#111', marginBottom: '16px' }}>3. Data Security</h2>
                        <p>We implement enterprise-grade security measures to protect your information, including end-to-end encryption for sensitive data and regular security audits.</p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
