import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const DashboardLayout = ({ children, role }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login');
                return;
            }

            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();

            if (!profile || (role && profile.role !== role)) {
              if (profile?.role === 'admin') navigate('/admin');
              else if (profile?.role === 'influencer') navigate('/portal');
              else navigate('/');
              return;
            }

            setUser({ ...session.user, ...profile });
            setLoading(false);
        };

        checkUser();
    }, [navigate, role]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };



    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <Link to="/">Nexaro Pros</Link>
                </div>
                <nav className="sidebar-nav">
                    {user?.role === 'admin' ? (
                        <>
                            <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>
                                <span className="icon">📊</span> Overview
                            </Link>
                            <Link to="/admin/leads" className={location.pathname === '/admin/leads' ? 'active' : ''}>
                                <span className="icon">👥</span> Leads
                            </Link>
                            <Link to="/admin/influencers" className={location.pathname === '/admin/influencers' ? 'active' : ''}>
                                <span className="icon">🎨</span> Influencers
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/portal" className={location.pathname === '/portal' ? 'active' : ''}>
                                <span className="icon">📊</span> My Leads
                            </Link>
                        </>
                    )}
                </nav>
                <div className="sidebar-footer">
                    <div className="user-info">
                        <div className="user-avatar">{user?.full_name?.charAt(0) || user?.email?.charAt(0) || '•'}</div>
                        <div className="user-details">
                            <div className="user-name">{user?.full_name || 'User'}</div>
                            <div className="user-role">{user?.role || ''}</div>
                        </div>
                    </div>
                    <button onClick={handleSignOut} className="btn-logout">Sign Out</button>
                </div>
            </aside>
            <main className="dashboard-content">
                <header className="dashboard-header">
                    <h1>{user?.role === 'admin' ? 'Admin Control Center' : 'Influencer Portal'}</h1>
                </header>
                <div className="dashboard-body">
                    {children}
                </div>
            </main>
            <style jsx>{`
                .dashboard-layout {
                    display: flex;
                    min-height: 100vh;
                    background: #f8fafc;
                }
                .sidebar {
                    width: 280px;
                    background: #0f172a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    padding: 24px;
                    gap: 32px;
                    position: sticky;
                    top: 0;
                    height: 100vh;
                }
                .sidebar-logo a {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                    letter-spacing: -1px;
                }
                .sidebar-nav {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .sidebar-nav a {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    border-radius: 10px;
                    color: #94a3b8;
                    text-decoration: none;
                    transition: all 0.2s;
                }
                .sidebar-nav a:hover {
                    background: #1e293b;
                    color: white;
                }
                .sidebar-nav a.active {
                    background: #3b82f6;
                    color: white;
                }
                .sidebar-footer {
                    border-top: 1px solid #1e293b;
                    padding-top: 24px;
                }
                .user-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 16px;
                }
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    background: #3b82f6;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .user-name { font-weight: 600; font-size: 0.9rem; }
                .user-role { font-size: 0.75rem; color: #64748b; text-transform: capitalize; }
                .btn-logout {
                    width: 100%;
                    padding: 10px;
                    background: transparent;
                    border: 1px solid #1e293b;
                    color: #94a3b8;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-logout:hover {
                    border-color: #ef4444;
                    color: #ef4444;
                }
                .dashboard-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                }
                .dashboard-header {
                    background: white;
                    padding: 24px 40px;
                    border-bottom: 1px solid #e2e8f0;
                }
                .dashboard-header h1 { font-size: 1.5rem; color: #1e293b; margin: 0; }
                .dashboard-body {
                    padding: 40px;
                    flex: 1;
                }
                @media (max-width: 1024px) {
                  .sidebar { width: 80px; padding: 16px; }
                  .sidebar-logo, .user-details, .sidebar-nav a span:not(.icon), .btn-logout { display: none; }
                }
            `}</style>
        </div>
    );
};

export default DashboardLayout;
