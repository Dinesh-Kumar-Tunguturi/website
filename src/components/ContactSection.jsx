import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <h2>Still Confused About Your Next Step?</h2>
                    <p>Let us make it simple. Drop us a message — and we will help you figure it out.</p>
                </div>

                <div className="contact-card">
                    <div className="contact-visual">
                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Person working" />
                    </div>
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name *</label>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input type="tel" placeholder="Enter your phone" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>

                            <div className="form-group">
                                <label>City *</label>
                                <input type="text" placeholder="Enter city" required />
                            </div>

                            <div className="form-group">
                                <label>Write Message</label>
                                <textarea placeholder="Enter your message (optional)" rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn-send">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
