import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
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
                                    <div style={{ display: 'flex', gap: '5px' }}>
                                        <select defaultValue="+1" style={{ width: '80px', borderRadius: '8px', border: '1.5px solid #eee', fontSize: '0.9rem', cursor: 'pointer' }}>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+1">🇨🇦 +1</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+33">🇫🇷 +33</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+55">🇧🇷 +55</option>
                                            <option value="+7">🇷🇺 +7</option>
                                            <option value="+27">🇿🇦 +27</option>
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+39">🇮🇹 +39</option>
                                            <option value="+52">🇲🇽 +52</option>
                                            <option value="+60">🇲🇾 +60</option>
                                            <option value="+62">🇮🇩 +62</option>
                                            <option value="+64">🇳🇿 +64</option>
                                            <option value="+66">🇹🇭 +66</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+90">🇹🇷 +90</option>
                                            <option value="+92">🇵🇰 +9 Pakistan</option>
                                            <option value="+94">🇱🇰 +94</option>
                                            <option value="+351">🇵🇹 +351</option>
                                            <option value="+353">🇮🇪 +353</option>
                                            <option value="+358">🇫🇮 +358</option>
                                            <option value="+41">🇨🇭 +41</option>
                                            <option value="+420">🇨🇿 +420</option>
                                            <option value="+45">🇩🇰 +45</option>
                                            <option value="+46">🇸🇪 +46</option>
                                            <option value="+47">🇳🇴 +47</option>
                                            <option value="+48">🇵🇱 +48</option>
                                            <option value="+84">🇻🇳 +84</option>
                                            <option value="+966">🇸🇦 +966</option>
                                        </select>
                                        <input type="tel" placeholder="Enter phone" required style={{ flex: 1 }} />
                                    </div>
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
