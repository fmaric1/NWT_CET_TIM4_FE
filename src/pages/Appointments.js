import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        try {
            const response = await fetch('http://localhost:8091/myappointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Login succesfull', data.token);
            localStorage.setItem(token, data.token)
            navigate('/');
        } catch (error) {
            console.error('Login failed: ', error);
        }

        fetchAppointments();
    }, []);

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>{appointment.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default Appointments;
