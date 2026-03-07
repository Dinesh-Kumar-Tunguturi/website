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
                    <h2>Why Choose Apply Wizz?</h2>
                    <p className="subtitle">We apply strategically, daily, and only for relevant roles — so you get interviews, not just inbox noise.</p>
                </div>

                <div className="why-grid-top">
                    <FeatureCard
                        title="Consistency That Delivers"
                        desc="We apply to 20-25 fresh job openings every single day, handpicked from trusted career portals and matched to your profile."
                        img="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                        badgeText="Real Jobs, Applied Daily"
                    />
                    <FeatureCard
                        title="Tailored, Not Spammy"
                        desc="Every resume is tailored, every application is tracked, and every opportunity is selected with care — aiming winners, hitting winner."
                        img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                        badgeText="Real Jobs, Applied Daily"
                    />
                </div>

                <div className="why-wide-card">
                    <div className="why-card-dot"></div>
                    <div className="wide-content">
                        <h3>The 2025 Guide to Smarter <span style={{ color: '#00d75a' }}>Job Hunting</span></h3>
                        <ul className="guide-list">
                            <li><span>+</span> Start by understanding the fundamental concepts of talent acquisition.</li>
                            <li><span>+</span> Discover guidance on crafting clear and compelling job descriptions that accurately reflect.</li>
                            <li><span>+</span> Practical tips for conducting effective interviews, including types of interview questions.</li>
                        </ul>
                        <button className="btn-know-more-small">Know more ↗</button>
                    </div>
                    <div className="wide-image">
                        <div className="guide-book-cover">
                            <div className="book-stars">✦ ✦<br />✦ ✦</div>
                            <div className="book-bottom">
                                <p>HOW TO <span>GET HIRED</span> BY TOP COMPANIES IN THE WORLD</p>
                            </div>
                        </div>
                    </div>
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
