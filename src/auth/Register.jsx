
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        isAdmin: false,
        street: '',
        apartment: '',
        zip: '',
        city: '',
        country: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            setSuccess('Registration successful!');
            navigate('/auth')
            setError('');
        } catch (error) {
            console.error('Error:', error);
            setError('Registration failed. Please check your input and try again.');
            setSuccess('');
        }
    };
    const {t} = useTranslation()

    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100 p-[50px] " >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("Register")}</h2>

                {[t("name"), t("Email"), t("Password"), t("phone"), t("street"), t("apartment"), 'zip', t("city"), t("country")].map((field) => (
                    <div className="mb-4" key={field}>
                        <label htmlFor={field} className="block text-gray-700 mb-2 capitalize">
                            {field}
                        </label>
                        <input
                            type={field === 'password' ? 'password' : 'text'}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="isAdmin"
                        name="isAdmin"
                        checked={formData.isAdmin}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="isAdmin" className="text-gray-700">Admin</label>
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">{t("Register")}</button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                {t("question")} <Link to='/auth' className="text-blue-500 hover:underline">{t("here")}</Link>
            </p>
        </div>
    );
};

export default Register;
