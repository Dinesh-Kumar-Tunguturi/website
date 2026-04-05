import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { supabase } from '../../lib/supabase';

const InfluencerDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [profile, setProfile] = useState(null);
    const [filters, setFilters] = useState({ startDate: '', endDate: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    useEffect(() => {
        const fetchLeads = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;


            let query = supabase.from('leads').select('*').eq('affiliate_id', user.id).order('created_at', { ascending: false });

            if (filters.startDate) query = query.gte('created_at', filters.startDate);
            if (filters.endDate) query = query.lte('created_at', filters.endDate + 'T23:59:59');

            const { data } = await query;
            if (data) setLeads(data);

        };
        fetchLeads();
    }, [filters]);

    return (
        <DashboardLayout role="influencer">
            {profile && (
                <div className="portal-header section-card">
                  <div className="portal-welcome">
                    <div>
                      <h2>Welcome Back, {profile.full_name}!</h2>
                      <p>Track your referrals and leads here.</p>
                    </div>
                    <div className="affiliate-link-card">
                      <div className="label">Your Affiliate Link:</div>
                      <div className="link-box">
                        <code>{window.location.origin}/?ref={profile.affiliate_code}</code>
                        <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/?ref=${profile.affiliate_code}`)}>Copy</button>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            <div className="filters-bar section-card">
                <div className="filter-group">
                    <label>Start Date</label>
                    <input type="date" value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} />
                </div>
                <div className="filter-group">
                    <label>End Date</label>
                    <input type="date" value={filters.endDate} onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} />
                </div>
                <button className="btn-reset" onClick={() => setFilters({ startDate: '', endDate: '' })}>Reset</button>
                <div className="leads-count">Total Leads: <strong>{leads.length}</strong></div>
            </div>

            <div className="leads-table-container section-card">
                    <table className="leads-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.length > 0 ? leads.map(lead => (
                                <tr key={lead.id}>
                                    <td 
                                        title={`US (ET): ${new Date(lead.created_at).toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })}`}
                                        style={{ cursor: 'help', whiteSpace: 'nowrap' }}
                                    >
                                        {new Date(lead.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })}
                                    </td>

                                    <td>{lead.full_name}</td>
                                    <td>{lead.city || '-'}</td>
                                </tr>
                            )) : <tr><td colSpan="3" style={{ textAlign: 'center', padding: '40px' }}>No leads yet. Share your link to get started!</td></tr>}
                        </tbody>
                    </table>
            </div>

            <style jsx>{`
                .portal-header { margin-bottom: 32px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; }
                .portal-welcome { display: flex; justify-content: space-between; align-items: center; gap: 40px; }
                .affiliate-link-card { background: rgba(255, 255, 255, 0.1); padding: 16px; border-radius: 12px; min-width: 300px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
                .affiliate-link-card .label { font-size: 0.75rem; text-transform: uppercase; margin-bottom: 8px; opacity: 0.9; font-weight: 600; }
                .link-box { display: flex; gap: 10px; align-items: center; }
                .link-box code { font-size: 0.85rem; background: rgba(0, 0, 0, 0.2); padding: 8px; border-radius: 6px; flex: 1; overflow-x: auto; color: #fff; }
                .link-box button { background: white; border: none; padding: 8px 16px; border-radius: 6px; color: #3b82f6; font-weight: 600; cursor: pointer; transition: 0.2s; }
                .link-box button:hover { background: #f1f5f9; }

                .filters-bar { display: flex; gap: 24px; align-items: flex-end; margin-bottom: 32px; flex-wrap: wrap; position: relative; }
                .filter-group { display: flex; flex-direction: column; gap: 8px; }
                .filter-group label { font-size: 0.875rem; color: #64748b; font-weight: 500; }
                .filter-group input { padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; }
                .btn-reset { padding: 10px 24px; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; height: 44px; font-weight: 500; }
                .leads-count { margin-left: auto; font-size: 1.1rem; color: #1e293b; }

                .section-card { background: white; padding: 32px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
                .leads-table-container { overflow-x: auto; }
                .leads-table { width: 100%; border-collapse: collapse; text-align: left; }
                .leads-table th { padding: 16px; border-bottom: 2px solid #f1f5f9; color: #64748b; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; }
                .leads-table td { padding: 16px; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 0.9rem; }
                @media (max-width: 768px) { .portal-welcome { flex-direction: column; align-items: stretch; gap: 20px; text-align: center; } .leads-count { margin: 0 auto; } }
            `}</style>
        </DashboardLayout>
    );
};

export default InfluencerDashboard;
