import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="terms-page">
            <Navbar />
            <div className="container" style={{ padding: '120px 6vw', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>Terms of Service</h1>
                <div className="terms-content" style={{ color: '#444', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '16px' }}>1. Introduction</h2>
                        <p>Welcome to BrandLyft. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.</p>
                    </section>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '16px' }}>2. Service Description</h2>
                        <p>BrandLyft provides an automated job application and profile management service. We act as your authorized representative to submit applications to third-party job boards on your behalf.</p>
                    </section>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '16px' }}>3. User Responsibilities</h2>
                        <p>You are responsible for the accuracy of all information provided to us. You must maintain the security of your account and notify us immediately of any unauthorized use.</p>
                    </section>
                    <section style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '16px' }}>4. Payments and Refunds</h2>
                        <p>Subscription fees are billed in advance on a monthly or annual basis. Refunds are handled on a case-by-case basis within the first 14 days of service.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;
