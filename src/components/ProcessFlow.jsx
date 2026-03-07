import React from 'react';

const ProcessFlow = () => {
    const steps = [
        {
            num: '01',
            title: 'Fill In The Required Form',
            desc: 'Filling in our application form is the gateway'
        },
        {
            num: '02',
            title: 'Submit All Your Documents',
            desc: 'Submitting all require documents promptly'
        },
        {
            num: '03',
            title: 'We Start Applying For You',
            desc: 'Succeed in the competitive world of job search'
        }
    ];

    return (
        <section className="process-section" id="process">
            <div className="process-header" style={{ marginBottom: '80px', textAlign: 'center' }}>
                <div className="process-badge" style={{ display: 'inline-block', border: '1.5px solid #111', padding: '8px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '0.8rem', marginBottom: '24px' }}>PROCESS</div>
                <h2 style={{ fontSize: '3.8rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.02em' }}>Your Job Hunt Starts Here</h2>
                <p className="subtitle" style={{ maxWidth: '650px', margin: '0 auto', color: '#666', fontSize: '1.1rem', lineHeight: 1.5 }}>
                    Let us simplify your search — from form to first interview, we handle the hustle so you do not have to.
                </p>
            </div>

            <div className="process-steps-container">
                {/* Wavy Dotted Connector SVG with flowing blue animation */}
                {/* Viewbox width adjusted to handle larger gaps consistently */}
                <svg className="process-connector" viewBox="0 0 1400 200" preserveAspectRatio="none">
                    <path
                        className="flowing-path"
                        d="M200,100 C400,10 600,190 700,100 C800,10 1000,190 1200,100"
                        stroke="#007bff"
                        strokeWidth="4"
                        strokeDasharray="14 18"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>

                {steps.map((step, i) => (
                    <div key={i} className="step-card">
                        <div className="step-circle">
                            <div className="step-indicator" style={{ top: '-15px', left: '-15px' }}>
                                {step.num}
                                <span>Step</span>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessFlow;
