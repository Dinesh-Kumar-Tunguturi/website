import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
    const roles = [
        "Software Engineer", "Data Scientist", "UI/UX Designer", "Product Manager",
        "Business Analyst", "DevOps Engineer", "Frontend Developer", "Marketing Specialist",
        "Systems Architect", "Data Engineer", "Operations Manager", "Cloud Specialist",
        "Security Analyst", "Full Stack Developer", "Backend Engineer", "QA Engineer",
        "Mobile Developer", "Data Analyst", "Project Manager", "Sales Representative",
        "HR Manager", "Content Creator", "Graphic Designer", "Database Administrator"
    ];

    const FeatureCard = ({ title, desc, img, badgeText }) => (
        <div className="why-card">
            <div className="why-card-dot"></div>
            <div className="why-card-content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="why-card-image">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={img} alt={title} />
            </div>
        </div>
    );

    return (
        <section className="why-section">
            <div className="container">
                <div className="why-header">
                    <div className="why-badge">Why Us</div>
                    <h2>Why Choose Nexora Protech Solution?</h2>
                    <p className="subtitle">We apply strategically, daily, and only for relevant roles — so you get interviews, not just inbox noise.</p>
                </div>

                <div className="why-bento-grid">
                    {/* Card 1: Application Engine */}
                    <motion.div 
                        className="bento-card card-small-top"
                        whileHover={{ y: -8 }}
                    >
                        <div className="why-card-dot"></div>
                        <div className="bento-content">
                            <div className="card-badge-v2">Engine</div>
                            <h3>Daily Application Engine</h3>
                            <ul className="bento-list">
                                <li><span>•</span> 25+ High-Quality Job Apps Daily</li>
                                <li><span>•</span> 24/7 Market Monitoring</li>
                                <li><span>•</span> Automated Smart-Role Matching</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card 2: Strategic Manager */}
                    <motion.div 
                        className="bento-card card-tall"
                        whileHover={{ y: -8 }}
                    >
                        <div className="why-card-dot"></div>
                        <div className="bento-content">
                            <div className="card-badge-v2">Support</div>
                            <h3>Dedicated Account Manager</h3>
                            <p style={{ marginBottom: '20px', color: '#666', lineHeight: '1.6' }}>
                                Your personal career coach who doesn't just apply, but optimizes your entire professional presence.
                            </p>
                            <ul className="bento-list" style={{ marginBottom: '30px' }}>
                                <li><span>✓</span> Resume & LinkedIn Overhaul</li>
                                <li><span>✓</span> Weekly Progress Reviews</li>
                                <li><span>✓</span> Direct Interview Scheduling</li>
                                <li><span>✓</span> Salary Negotiation Support</li>
                            </ul>
                            <div className="manager-mini-card">
                                <div className="manager-icon">🎯</div>
                                <div className="manager-mini-info">
                                    <span className="label">Next Session</span>
                                    <span className="value">1-on-1 Strategy Call</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Document Mastery */}
                    <motion.div 
                        className="bento-card card-small-bottom"
                        whileHover={{ y: -8 }}
                    >
                        <div className="why-card-dot"></div>
                        <div className="bento-content">
                            <div className="card-badge-v2">Expertise</div>
                            <h3>ATS Document Mastery</h3>
                            <ul className="bento-list">
                                <li><span>•</span> 99% ATS Pass Rate Guaranteed</li>
                                <li><span>•</span> Keyword Injection Technology</li>
                                <li><span>•</span> Professional Bio Crafting</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card 4: The Guide (Full Width) */}
                    <motion.div 
                        className="bento-card card-guide-wide"
                        whileHover={{ y: -5 }}
                    >
                        <div className="why-card-dot"></div>
                        <div className="wide-content">
                            <h3>The 2025 Masterclass: <span style={{ color: '#00d75a' }}>Job Search Mastery</span></h3>
                            <ul className="guide-list">
                                <li><span>+</span> Cracking the Hidden Job Market strategies.</li>
                                <li><span>+</span> Psychology of high-impact interview responses.</li>
                                <li><span>+</span> Building a recession-proof professional brand.</li>
                            </ul>
                            <button className="btn-know-more-small">
                                Get Full Access <span>↗</span>
                            </button>
                        </div>
                        <div className="wide-image-v2">
                            <img 
                                src="/career-success.png" 
                                alt="Career Success Success Illustration" 
                                className="illustration-img"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="roles-ticker-container">
                {/* Unified Green Ribbons with Slowed, Infinite Seamless Scroll */}
                <div className="roles-bar row-unified">
                    <motion.div
                        className="roles-track"
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 120, // Significantly slowed down for readability
                            repeat: Infinity
                        }}
                    >
                        {/* 4 sets of roles to ensure zero empty space on ultra-wide screens */}
                        {[...roles, ...roles].map((role, i) => (
                            <div key={i} className="role-pill">{role} •</div>
                        ))}
                    </motion.div>
                </div>

                <div className="roles-bar row-unified">
                    <motion.div
                        className="roles-track"
                        animate={{ x: ["-50%", 0] }}
                        transition={{
                            ease: "linear",
                            duration: 130, // Slowed down and slightly different for organic feel
                            repeat: Infinity
                        }}
                    >
                        {[...roles, ...roles].map((role, i) => (
                            <div key={i} className="role-pill">{role} •</div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
