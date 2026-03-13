import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const plans = [
        {
            name: "1 Monthly",
            price: "$149",
            period: "/month",
            features: [
                "20+ applications daily",
                "Career portal only",
                "Fresh listings only",
                "Early applicant advantages",
                "Strategic match-based filtering"
            ],
            recommended: false
        },
        {
            name: "2 Months",
            price: "$349",
            period: "/2 months",
            features: [
                "30+ applications daily",
                "Career portal",
                "Fresh listing",
                "Dedicated gmail to access dashboard",
                "Transparency dashboard for tracking",
                "Applications mail tracking"
            ],
            recommended: true
        },
        {
            name: "3 Months",
            price: "$549",
            period: "/3 months",
            features: [
                "30+ applications daily",
                "Career portal",
                "Fresh listing",
                "Dedicated gmail to access dashboard",
                "Transparency dashboard tracking",
                "Applied links and mails tracking",
                "Professional Portfolio"
            ],
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
                            {plan.recommended && <div className="trending-badge">MOST POPULAR</div>}
                            <div className="card-top">
                                <h3>{plan.name}</h3>
                                <div className="price">{plan.price}<span>{plan.period}</span></div>
                            </div>
                            <ul className="price-features">
                                {plan.features.map((feature, j) => (
                                    <li key={j}>
                                        <span className="check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-price-select">Get Started Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
