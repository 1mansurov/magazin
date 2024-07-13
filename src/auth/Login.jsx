
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData);
                setError(errorData.message || 'Network response was not ok');
                return;
            }
    
            const data = await response.json();
            console.log('Success:', data);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

const {t} = useTranslation()
    

    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("Login")}</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">{t("Email")}</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">{t("Password")}</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">{t("Login")}</button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                {t("question")} <Link to='/auth/register' className="text-blue-500 hover:underline">{t("register")}</Link>
            </p>
        </div>
    );
};

export default Login;
