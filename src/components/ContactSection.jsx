import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const ContactSection = () => {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState({ loading: false, success: false, error: null });
    const [geolocation, setGeolocation] = useState({ city: '', location: '' });
    const [affiliate, setAffiliate] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneCode: '+1',
        phoneNumber: '',
        city: '',
        message: ''
    });

    // Check for affiliate ref in URL or sessionStorage
    useEffect(() => {
        const ref = searchParams.get('ref') || sessionStorage.getItem('affiliate_ref');
        
        // Persist ref to sessionStorage so it survives in-page navigation
        if (searchParams.get('ref')) {
            sessionStorage.setItem('affiliate_ref', searchParams.get('ref'));
        }

        if (ref) {
            const checkAffiliate = async () => {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('id, full_name')
                    .eq('affiliate_code', ref)
                    .single();
                
                if (data) {
                    setAffiliate(data);
                }
            };
            checkAffiliate();
        }

        // Get Geolocation
        const fetchGeo = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setGeolocation({
                    city: data.city || '',
                    location: `${data.city || ''}, ${data.region || ''}, ${data.country_name || ''}`
                });
                if (data.city) {
                  setFormData(prev => ({ ...prev, city: data.city }));
                }
            } catch (err) {
                console.error("Geo fetch failed", err);
            }
        };
        fetchGeo();
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const { error } = await supabase
                .from('leads')
                .insert([{
                    full_name: formData.name,
                    email: formData.email,
                    phone: `${formData.phoneCode} ${formData.phoneNumber}`,
                    city: formData.city,
                    message: formData.message,
                    location: geolocation.location,
                    source: affiliate ? affiliate.full_name : 'nexaropros main page',
                    affiliate_id: affiliate ? affiliate.id : null
                }]);

            if (error) throw error;
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', phoneCode: '+1', phoneNumber: '', city: '', message: '' });
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
                        {status.success ? (
                            <div className="success-message" style={{ textAlign: 'center', padding: '40px' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                                <h3>Thank you!</h3>
                                <p>We've received your request and will get back to you shortly.</p>
                                <button 
                                    className="btn-send" 
                                    onClick={() => setStatus({ ...status, success: false })}
                                    style={{ marginTop: '20px' }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Name *</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name" 
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            <select 
                                                name="phoneCode"
                                                value={formData.phoneCode}
                                                onChange={handleChange}
                                                style={{ width: '80px', borderRadius: '8px', border: '1.5px solid #eee', fontSize: '0.9rem', cursor: 'pointer' }}
                                            >
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
                                                <option value="+92">🇵🇰 +92</option>
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
                                            <input 
                                                type="tel" 
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder="Enter phone" 
                                                required 
                                                style={{ flex: 1 }} 
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email" 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>City *</label>
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Enter city" 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Write Message</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message (optional)" 
                                        rows="4"
                                    ></textarea>
                                </div>

                                {status.error && (
                                    <div className="error-message" style={{ color: '#ff4d4f', marginBottom: '15px', fontSize: '0.9rem' }}>
                                        Error: {status.error}
                                    </div>
                                )}

                                <button type="submit" className="btn-send" disabled={status.loading}>
                                    {status.loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

