import React from 'react';

const DomainsSupport = () => {
    const domains = [
        {
            title: "Computer Science",
            clients: "113+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        },
        {
            title: "Information Systems",
            clients: "123+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
            )
        },
        {
            title: "Cloud Computing",
            clients: "113+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19c.3 0 .5 0 .8-.1A4.5 4.5 0 0 0 17.5 10c-.2 0-.5 0-.7.1a7 7 0 1 0-11.7 6.4"></path>
                    <path d="M12 11v8"></path>
                    <polyline points="9 16 12 19 15 16"></polyline>
                </svg>
            )
        },
        {
            title: "Artificial Intelligence",
            clients: "113+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2z"></path>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 5 0v-15A2.5 2.5 0 0 0 14.5 2z"></path>
                    <path d="M12 10h5"></path>
                    <path d="M7 10h5"></path>
                    <path d="M12 14h5"></path>
                    <path d="M7 14h5"></path>
                </svg>
            )
        },
        {
            title: "Supply Chain",
            clients: "113+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            )
        },
        {
            title: "Bio Informatics",
            clients: "123+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3.32-3.32a5 5 0 0 0-7.07-7.07l-2.01 2"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3.32 3.32a5 5 0 0 0 7.07 7.07l2.01-2"></path>
                </svg>
            )
        },
        {
            title: "Bio Technology",
            clients: "113+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v8"></path>
                    <path d="M14 2v8"></path>
                    <path d="M8 8h8"></path>
                    <path d="M16 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8z"></path>
                </svg>
            )
        },
        {
            title: "Environmental Science",
            clients: "113+ Clients",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d75a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20a7 7 0 0 1-7-7c0-3.87 3.13-7 7-7 3.33 0 6.13 2.33 6.84 5.43"></path>
                    <path d="M11 13c0-3.87 3.13-7 7-7"></path>
                    <path d="M18 13v7"></path>
                    <path d="M14 16h8"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="domains-section">
            <div className="container">
                <div className="domains-header">
                    <div className="domains-badge">DOMAINS</div>
                    <h2>Domains We Support</h2>
                </div>

                <div className="domains-grid">
                    {domains.map((domain, i) => (
                        <div key={i} className="domain-card">
                            <div className="domain-arrow">↗</div>
                            <div className="domain-icon">{domain.icon}</div>
                            <h3>{domain.title}</h3>
                            <p>{domain.clients}</p>
                        </div>
                    ))}
                </div>

                <div className="domains-footer">
                    <button className="btn-view-more">View More Domains ↗</button>
                </div>
            </div>
        </section>
    );
};

export default DomainsSupport;
