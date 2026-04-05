import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { supabase } from '../../lib/supabase';

const AdminLeads = () => {
    const [leads, setLeads] = useState([]);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        source: ''
    });
    const [sources, setSources] = useState([]);

    useEffect(() => {
        const fetchFilters = async () => {
            const { data } = await supabase.from('leads').select('source');
            const uniqueSources = [...new Set(data?.map(l => l.source) || [])];
            setSources(uniqueSources);
        };
        fetchFilters();
    }, []);

    useEffect(() => {
        const fetchLeads = async () => {

            let query = supabase.from('leads').select('*').order('created_at', { ascending: false });

            if (filters.startDate) query = query.gte('created_at', filters.startDate);
            if (filters.endDate) query = query.lte('created_at', filters.endDate + 'T23:59:59');
            if (filters.source) query = query.eq('source', filters.source);

            const { data, error } = await query;
            if (data) setLeads(data);

        };
        fetchLeads();
    }, [filters]);

    return (
        <DashboardLayout role="admin">
            <div className="filters-bar section-card">
                <div className="filter-group">
                    <label>Start Date</label>
                    <input type="date" value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} />
                </div>
                <div className="filter-group">
                    <label>End Date</label>
                    <input type="date" value={filters.endDate} onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} />
                </div>
                <div className="filter-group">
                    <label>Source</label>
                    <select value={filters.source} onChange={(e) => setFilters({ ...filters, source: e.target.value })}>
                        <option value="">All Sources</option>
                        {sources.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <button className="btn-reset" onClick={() => setFilters({ startDate: '', endDate: '', source: '' })}>Reset</button>
            </div>

            <div className="leads-table-container section-card">
                    <table className="leads-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Source</th>
                                <th>Location</th>
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
                                    <td>{lead.email}</td>
                                    <td>{lead.phone}</td>
                                    <td><span className="badge-source">{lead.source}</span></td>
                                    <td>{lead.location || '-'}</td>
                                    <td>{lead.city || '-'}</td>
                                </tr>
                            )) : <tr><td colSpan="7" style={{ textAlign: 'center', padding: '40px' }}>No leads found matching your filters.</td></tr>}
                        </tbody>
                    </table>
            </div>

            <style jsx>{`
                .filters-bar {
                    display: flex;
                    gap: 24px;
                    align-items: flex-end;
                    margin-bottom: 32px;
                    flex-wrap: wrap;
                }
                .filter-group { display: flex; flex-direction: column; gap: 8px; }
                .filter-group label { font-size: 0.875rem; color: #64748b; font-weight: 500; }
                .filter-group input, .filter-group select {
                    padding: 10px 14px;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    background: white;
                }
                .btn-reset {
                    padding: 10px 24px;
                    background: #f1f5f9;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-weight: 500;
                    height: 44px;
                }
                .btn-reset:hover { background: #e2e8f0; }
                .section-card {
                    background: white;
                    padding: 32px;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .leads-table-container { overflow-x: auto; }
                .leads-table { width: 100%; border-collapse: collapse; text-align: left; }
                .leads-table th { padding: 16px; border-bottom: 2px solid #f1f5f9; color: #64748b; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; }
                .leads-table td { padding: 16px; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 0.9rem; }
                .badge-source {
                    background: #eff6ff;
                    color: #3b82f6;
                    padding: 4px 10px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
            `}</style>
        </DashboardLayout>
    );
};

export default AdminLeads;
