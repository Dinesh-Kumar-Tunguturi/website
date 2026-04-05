import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { supabase } from '../../lib/supabase';

const AdminInfluencers = () => {
    const [influencers, setInfluencers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '' });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    useEffect(() => {
        const fetchInfluencers = async () => {
            const { data } = await supabase.from('profiles').select('*').eq('role', 'influencer');
            if (data) setInfluencers(data);

        };
        fetchInfluencers();
    }, []);

    const generateAffiliateCode = (name) => {
        const seed = name.toLowerCase().replace(/\s+/g, '') + Math.random().toString();
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            const char = seed.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        const hex = Math.abs(hash).toString(16) + Math.random().toString(36).substring(2, 8);
        return hex.substring(0, 12);
    };


    const handleAddInfluencer = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        const affiliateCode = generateAffiliateCode(form.name);

        // 1. Create User in Supabase Auth
        // Note: Admin can't easily create users for others without Admin Auth API.
        // We'll use the signup method which works if RLS allows or if we use the service role (which we shouldn't on client).
        // Standard approach: User signs up themselves.
        // But user asked for Admin to add them. 
        // We'll use supabase.auth.signUp with a fixed password.
        
        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: form.email,
                password: 'Created@123',
                options: {
                    data: {
                        full_name: form.name,
                        role: 'influencer',
                        affiliate_code: affiliateCode
                    }
                }
            });

            if (signUpError) throw signUpError;

            setStatus({ loading: false, success: 'Influencer added successfully! Link: ' + affiliateCode, error: null });
            setForm({ name: '', email: '' });
            // Refresh list
            const { data: updated } = await supabase.from('profiles').select('*').eq('role', 'influencer');
            if (updated) setInfluencers(updated);
        } catch (err) {
            setStatus({ loading: false, success: null, error: err.message });
        }
    };

    return (
        <DashboardLayout role="admin">
            <div className="admin-grid">
                <div className="section-card add-influencer">
                    <h3>Add New Influencer</h3>
                    <p>Enter details below. Password will be <strong>Created@123</strong></p>
                    <form onSubmit={handleAddInfluencer}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="e.g. Dinesh" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="e.g. dinesh@gmail.com" />
                        </div>
                        {status.error && <div className="error-text">{status.error}</div>}
                        {status.success && <div className="success-text">{status.success}</div>}
                        <button type="submit" disabled={status.loading}>{status.loading ? 'Adding...' : 'Generate Affiliate Link'}</button>
                    </form>
                </div>

                <div className="section-card influencers-list">
                    <h3>Active Influencers</h3>
                        <div className="influencers-grid">
                            {influencers.map(inf => (
                                <div key={inf.id} className="influencer-item">
                                    <div className="inf-header">
                                        <div className="inf-avatar">{inf.full_name?.charAt(0)}</div>
                                        <div>
                                            <div className="inf-name">{inf.full_name}</div>
                                            <div className="inf-email">{inf.email}</div>
                                        </div>
                                    </div>
                                    <div className="inf-link-box">
                                        <code>{window.location.origin}/?ref={inf.affiliate_code}</code>
                                        <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/?ref=${inf.affiliate_code}`)}>Copy</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>

            <style jsx>{`
                .admin-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 32px; }
                .section-card { background: white; padding: 32px; border-radius: 20px; border: 1px solid #e2e8f0; }
                .form-group { margin-bottom: 20px; }
                label { display: block; margin-bottom: 8px; font-weight: 500; color: #475569; font-size: 0.9rem; }
                input { width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 0.95rem; }
                button { width: 100%; padding: 14px; background: #3b82f6; color: white; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; }
                button:hover { background: #2563eb; }
                .success-text { color: #10b981; font-size: 0.875rem; margin-bottom: 16px; background: #ecfdf5; padding: 10px; border-radius: 8px; }
                .error-text { color: #ef4444; font-size: 0.875rem; margin-bottom: 16px; }
                
                .influencers-grid { display: flex; flex-direction: column; gap: 16px; }
                .influencer-item { padding: 16px; border: 1px solid #f1f5f9; border-radius: 12px; }
                .inf-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
                .inf-avatar { width: 40px; height: 40px; background: #e0f2fe; color: #0369a1; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700; }
                .inf-name { font-weight: 600; }
                .inf-email { font-size: 0.8rem; color: #64748b; }
                .inf-link-box { display: flex; gap: 10px; align-items: center; background: #f8fafc; padding: 10px; border-radius: 8px; font-size: 0.8rem; }
                .inf-link-box code { flex: 1; overflow-x: auto; color: #3b82f6; }
                .inf-link-box button { width: auto; padding: 4px 10px; font-size: 0.75rem; background: white; color: #3b82f6; border: 1px solid #3b82f6; }
                .inf-link-box button:hover { background: #3b82f6; color: white; }
                @media (max-width: 1024px) { .admin-grid { grid-template-columns: 1fr; } }
            `}</style>
        </DashboardLayout>
    );
};

export default AdminInfluencers;
