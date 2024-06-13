import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import './signup.css';
import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyword, setKeyword] = useState('');
    const [gender, setGender] = useState('Male');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [workingHours, setWorkingHours] = useState('');
    const [role, setRole] = useState('patient'); // Default role is 'patient'
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const isDoctor = role === "patient" ? 0 : 1;
        e.preventDefault();
        // Check for empty fields
        if (isDoctor && (!firstName || !lastName || !email || !password || !workingHours)) {
            setErrorMessage('Please fill in all required fields.');
            return; // Stop execution
        }
        if (!isDoctor && (!firstName || !lastName || !email || !password || !phone || !address)) {
            setErrorMessage('Please fill in all required fields.');
            return; // Stop execution
        }
        // Additional validation for dentist role
        if (role === 'dentist' && !keyword.toLowerCase().includes('doc')) {
            setErrorMessage('Keyword for dentist is not correct');
            return; // Stop execution
        }
        try {
            if (isDoctor) {
                const response = await fetch('/auth/signup/dentist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        firstName,
                        lastName,
                        workingHours
                    })
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('User signed up successfully:', data);
                navigate('/login')
            }
            else {

                const response = await fetch('/auth/signup/patient', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        firstName,
                        lastName,
                        birthDate,
                        phone,
                        gender,
                        address

                    })
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('User signed up successfully:', data);
                navigate('/login')
            }

           
        } catch (error) {
            console.error('Error signing up user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Signup</h2>

            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="form-input"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="form-input"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-input"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-input"
            />

            <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select">
                <option value="patient">Patient</option>
                <option value="dentist">Dentist</option>
            </select>

            {role === 'dentist' && (
                <>
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Keyword"
                        className="form-input"
                    />
                    <input
                        type="text"
                        value={workingHours}
                        onChange={(e) => setWorkingHours(e.target.value)}
                        placeholder="Working Hours"
                        className="form-input"
                    />
                </>
            )}

            {role === 'patient' && (
                <>
                    <DatePicker
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date)}
                        className="form-datepicker"
                        placeholderText="Birth Date"
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="form-input"
                    />
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        className="form-input"
                    />
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </>
            )}

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="form-button">Signup</button>
        </form>
    );
};
export default Signup;
