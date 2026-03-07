import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const plans = [
        {
            name: "Starter",
            price: "$29",
            features: ["20 Applications / Month", "Resume Optimization", "Email Support", "Standard Dashboard"],
            recommended: false
        },
        {
            name: "Pro",
            price: "$79",
            features: ["Unlimited Applications", "Personal Career Coach", "Interview Strategy", "Priority Support"],
            recommended: true
        },
        {
            name: "Enterprise",
            price: "$199",
            features: ["Dedicated Hiring Team", "Direct Referral Network", "Salary Negotiation", "Lifetime Support"],
            recommended: false
        }
    ];

    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <div className="pricing-badge">PRICING</div>
                    <h2>Level Up Your Search</h2>
                    <p>Choose the plan that fits your career goals.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                            {plan.recommended && <div className="trending-badge">BEST VALUE</div>}
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}<span>/mo</span></div>
                            <ul className="price-features">
                                {plan.features.map((feature, j) => (
                                    <li key={j}>✓ {feature}</li>
                                ))}
                            </ul>
                            <button className="btn-price-select">Get Started</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
