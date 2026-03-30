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
            <div className="container" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="process-header" style={{ marginBottom: '60px' }}>
                    <div className="process-badge">PROCESS</div>
                    <h2 className="process-title">Your Job Hunt Starts Here</h2>
                    <p className="subtitle">
                        A simple 3-step process that helps you apply to more jobs, stay consistent, and increase your chances of getting interviews
                    </p>
                </div>

                <div className="process-steps-container" style={{ minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
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
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{step.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#666' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
