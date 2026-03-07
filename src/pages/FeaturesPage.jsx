import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <Navbar />
            <div className="container" style={{ padding: '120px 6vw', minHeight: '80vh' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '40px' }}>Features</h1>
                <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div className="feature-item" style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>🚀 Automated Applications</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>We send out 20-25 tailored applications every single day, keeping your job search active while you focus on interviews.</p>
                    </div>
                    <div className="feature-item" style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>📝 Resume Tailoring</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Our AI-driven system optimizes your resume for every single job description, ensuring you pass through ATS every time.</p>
                    </div>
                    <div className="feature-item" style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>📊 Real-time Dashboard</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Track every application, interview status, and recruiter response in one high-performance dashboard.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
