import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
       

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
