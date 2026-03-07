import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
    const faqs = [
        {
            q: "How many applications do you send daily?",
            a: "Depending on your plan, we send between 20-25 high-quality, tailored applications every single business day."
        },
        {
            q: "Is my personal data secure?",
            a: "Absolutely. We use enterprise-grade encryption and never share your data with third parties beyond the actual job applications."
        },
        {
            q: "Can I choose which companies you apply to?",
            a: "Yes! You can set specific domain, location, and salary preferences in your dashboard, or blacklist certain companies."
        },
        {
            q: "What if I don't get any interviews?",
            a: "We offer a consultation to refine your profile if you don't see results within the first 30 days. Your success is our mission."
        }
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <div className="faq-badge">FAQ</div>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQSection;
