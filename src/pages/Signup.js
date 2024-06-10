import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyword, setKeyword] = useState('');
    const [role, setRole] = useState('patient'); // Default role is 'patient'
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check for empty fields
        if (!firstName || !lastName || !email || !password) {
            setErrorMessage('Please fill in all required fields.');
            return; // Stop execution
        }
        // Additional validation for dentist role
        if (role === 'dentist' && !keyword.toLowerCase().includes('doc')) {
            setErrorMessage('Keyword for dentist is not correct');
            return; // Stop execution
        }
        try {
            await api.post(`/user_handler/users/${role}`, { email, password, firstName, lastName, keyword });
            navigate('/login');
        } catch (error) {
            console.error('Signup failed', error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>

            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="patient">Patient</option>
                <option value="dentist">Dentist</option>
            </select>

            {role === 'dentist' && (
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Keyword"
                />
            )}

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
