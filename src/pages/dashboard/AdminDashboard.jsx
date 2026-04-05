import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { supabase } from '../../lib/supabase';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalLeads: 0,
        todayLeads: 0,
        monthLeads: 0,
        totalInfluencers: 0
    });


    const [dailyStats, setDailyStats] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

            const [
              { count: totalCount },
              { count: todayCount },
              { count: monthCount },
              { count: influencerCount },
              { data: lastLeads }
            ] = await Promise.all([
                supabase.from('leads').select('*', { count: 'exact', head: true }),
                supabase.from('leads').select('*', { count: 'exact', head: true }).gte('created_at', today.toISOString()),
                supabase.from('leads').select('*', { count: 'exact', head: true }).gte('created_at', startOfMonth.toISOString()),
                supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'influencer'),
                supabase.from('leads').select('created_at').order('created_at', { ascending: false }).limit(1000)
            ]);

            // Calculate daily stats for last 7 days
            const dayCounts = {};
            for (let i = 0; i < 7; i++) {
              const d = new Date();
              d.setDate(d.getDate() - i);
              dayCounts[d.toLocaleDateString()] = 0;
            }

            lastLeads?.forEach(l => {
              const dateStr = new Date(l.created_at).toLocaleDateString();
              if (dayCounts[dateStr] !== undefined) {
                dayCounts[dateStr]++;
              }
            });

            const dailyData = Object.entries(dayCounts).map(([date, count]) => ({ date, count }));

            setStats({
                totalLeads: totalCount || 0,
                todayLeads: todayCount || 0,
                monthLeads: monthCount || 0,
                totalInfluencers: influencerCount || 0
            });
            setDailyStats(dailyData);

        };

        fetchStats();
    }, []);



    return (
        <DashboardLayout role="admin">
            <div className="stats-grid">
                <StatCard title="Total Leads" value={stats.totalLeads} icon="📥" color="#3b82f6" />
                <StatCard title="Today's Leads" value={stats.todayLeads} icon="🔥" color="#ef4444" />
                <StatCard title="This Month" value={stats.monthLeads} icon="📅" color="#10b981" />
                <StatCard title="Active Influencers" value={stats.totalInfluencers} icon="🎨" color="#8b5cf6" />
            </div>

            <div className="dashboard-sections">
                <div className="section-card">
                    <h3>Lead Velocity (Last 7 Days)</h3>
                    <div className="daily-stats-table">
                      {dailyStats.map(ds => (
                        <div key={ds.date} className="daily-stat-row">
                          <span className="date">{ds.date}</span>
                          <div className="bar-container">
                            <div className="bar" style={{ width: `${Math.min(100, (ds.count / (stats.totalLeads || 1)) * 1000)}%` }}></div>
                          </div>
                          <span className="count">{ds.count} leads</span>
                        </div>
                      ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 32px;
                    margin-bottom: 40px;
                }
                .section-card {
                    background: white;
                    padding: 32px;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .section-card h3 { margin-bottom: 24px; color: #1e293b; font-size: 1.25rem; font-weight: 700; }
                .daily-stats-table { display: flex; flex-direction: column; gap: 16px; }
                .daily-stat-row { display: flex; align-items: center; gap: 16px; }
                .daily-stat-row .date { width: 120px; font-size: 0.9rem; color: #64748b; }
                .daily-stat-row .bar-container { flex: 1; height: 12px; background: #f1f5f9; border-radius: 6px; overflow: hidden; }
                .daily-stat-row .bar { height: 100%; background: #3b82f6; border-radius: 6px; }
                .daily-stat-row .count { width: 80px; text-align: right; font-weight: 600; font-size: 0.9rem; color: #1e293b; }
            `}</style>

        </DashboardLayout>
    );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="stat-card" style={{ borderColor: color }}>
    <div className="stat-header">
      <span className="stat-title">{title}</span>
      <span className="stat-icon" style={{ backgroundColor: `${color}20`, color }}>{icon}</span>
    </div>
    <div className="stat-value">{value}</div>
    <style jsx>{`
      .stat-card {
        background: white;
        padding: 32px;
        border-radius: 20px;
        border: 1px solid #e2e8f0;
        border-left-width: 6px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s;
      }
      .stat-card:hover { transform: translateY(-4px); }
      .stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
      .stat-title { color: #64748b; font-weight: 600; font-size: 1rem; }
      .stat-icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-size: 1.25rem; }
      .stat-value { font-size: 2.5rem; font-weight: 700; color: #1e293b; }
    `}</style>
  </div>
);

export default AdminDashboard;
