import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Software Engineer @ Google",
        content: "The consistency is what changed the game for me. Apply Wizz didn't just apply once; they kept my profile active every single day until I landed my dream role.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Data Scientist @ Meta",
        content: "I was skeptical about automated applications, but the tailoring here is incredible. Every application felt like I had spent an hour on it myself.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Product Designer @ Airbnb",
        content: "The interview alerts are so timely. I used to miss LinkedIn messages all the time, but with this system, I was always first to respond to recruiters.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 4,
        name: "Marcus Thorne",
        role: "DevOps Engineer @ Amazon",
        content: "Zero inbox noise, just high-quality leads. They found roles in domains I hadn't even considered. Truly personalized service.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <div className="testimonials-badge">TESTIMONIALS</div>
                    <h2>Success Stories That Inspire</h2>
                    <p className="subtitle">Join thousands of professionals who accelerated their careers with our strategic support.</p>
                </div>

                <div className="testimonial-stack-container">
                    <div className="testimonial-stack-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[index].id}
                                className="testimonial-card-active"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className="quote-icon">“</div>
                                <p className="testimonial-content">{testimonials[index].content}</p>
                                <div className="testimonial-user">
                                    <img src={testimonials[index].avatar} alt={testimonials[index].name} className="user-avatar" />
                                    <div className="user-info">
                                        <h4>{testimonials[index].name}</h4>
                                        <span>{testimonials[index].role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Visual stacks behind the active card */}
                        <div className="testimonial-card-stack stack-1"></div>
                        <div className="testimonial-card-stack stack-2"></div>
                    </div>

                    <div className="testimonial-controls">
                        <button onClick={prevTestimonial} className="control-btn">←</button>
                        <div className="pagination">
                            {testimonials.map((_, i) => (
                                <div key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}></div>
                            ))}
                        </div>
                        <button onClick={nextTestimonial} className="control-btn">→</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
