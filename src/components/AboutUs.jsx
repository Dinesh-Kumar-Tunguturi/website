import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container about-container">
                {/* Left Side: Images & Play Button */}
                <div className="about-visuals">
                    <div className="image-stack">
                        <motion.div
                            className="main-image-circle"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Team collaborating" />

                            {/* Circular Watch Video Badge */}
                            <div className="video-badge-wrapper">
                                <div className="video-badge-text">
                                    <svg viewBox="0 0 100 100">
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                        <text font-size="12" font-weight="700">
                                            <textPath xlinkHref="#circlePath">
                                                WATCH THE VIDEO RIGHT NOW • WATCH THE VIDEO RIGHT NOW •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="play-button">
                                    <svg viewBox="0 0 24 24" fill="#00d75a">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="secondary-image-circle"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Professional man" />
                        </motion.div>
                    </div>

                    {/* Decorative dots grid from image */}
                    <div className="dots-decoration"></div>
                </div>

                {/* Right Side: Content */}
                <div className="about-content">
                    <div className="about-badge">ABOUT US</div>
                    <h2>Empowering Careers Through Personalized, Inclusive Job Applications</h2>
                    <p>
                        This job application service takes the burden off job seekers by applying to relevant openings on their behalf — consistently and strategically, so they can focus on preparing for interviews, not hunting for jobs.
                    </p>

                    <ul className="about-list">
                        <li>
                            <div className="check-icon">✓</div>
                            We handpick jobs based on your goals and background
                        </li>
                        <li>
                            <div className="check-icon">✓</div>
                            20–25 real-time applications sent every day
                        </li>
                        <li>
                            <div className="check-icon">✓</div>
                            You receive progress updates and interview alerts
                        </li>
                    </ul>

                    <motion.button
                        className="btn-know-more"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Know more ↗
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
