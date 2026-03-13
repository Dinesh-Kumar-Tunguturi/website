import React from 'react';
import { motion } from 'framer-motion';

const CompanyTicker = () => {
    const companies = [
        { name: 'Microsoft', logo: '/logos/microsoft.svg' },
        { name: 'Apple', logo: '/logos/apple.svg' },
        { name: 'Walmart', logo: '/logos/walmart.svg' },
        { name: 'Ford', logo: '/logos/ford.svg' },
        { name: 'Morgan Stanley', useText: true },
        { name: 'Adobe', logo: '/logos/adobe-after-effects-svgrepo-com.svg' },
        { name: 'Bank of America', logo: '/logos/bank-campus-court-svgrepo-com.svg' },
        { name: 'UnitedHealth Group', useText: true },
        { name: 'HCA Healthcare', useText: true },
    ];

    const tickerItems = [...companies, ...companies, ...companies];

    return (
        <div className="logo-ticker-container">
            <motion.div
                className="logo-ticker-track"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity
                }}
            >
                {tickerItems.map((company, i) => (
                    <div key={i} className="logo-item" title={company.name}>
                        {company.useText ? (
                            <span className="logo-text">{company.name}</span>
                        ) : (
                            <img src={company.logo} alt={company.name} />
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CompanyTicker;
