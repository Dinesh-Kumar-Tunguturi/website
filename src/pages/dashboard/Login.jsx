import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Fetch profile to determine role
            const { data: profile } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', data.user.id)
                .single();

            if (profile?.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/portal');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Nexaro Pros</h1>
                <p>Dashboard Login</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="admin@example.com"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="••••••••"
                            required 
                        />
                    </div>
                    {error && <div className="error-text">{error}</div>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Sign In'}
                    </button>
                    <div className="login-footer">
                        <a href="/">Back to Website</a>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .login-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    padding: 20px;
                }
                .login-card {
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
                    width: 100%;
                    max-width: 400px;
                    text-align: center;
                }
                h1 { margin-bottom: 8px; color: #1e293b; font-size: 2rem; }
                p { color: #64748b; margin-bottom: 32px; }
                .form-group { text-align: left; margin-bottom: 20px; }
                label { display: block; margin-bottom: 8px; font-weight: 500; color: #475569; }
                input {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 1rem;
                    transition: border-color 0.2s;
                }
                input:focus { outline: none; border-color: #3b82f6; }
                button {
                    width: 100%;
                    padding: 14px;
                    background: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 10px;
                    transition: background 0.2s;
                }
                button:hover { background: #2563eb; }
                button:disabled { background: #94a3b8; }
                .error-text { color: #ef4444; font-size: 0.875rem; margin-bottom: 16px; }
                .login-footer { margin-top: 24px; font-size: 0.875rem; }
                .login-footer a { color: #64748b; text-decoration: none; }
                .login-footer a:hover { color: #3b82f6; }
            `}</style>
        </div>
    );
};

export default Login;
