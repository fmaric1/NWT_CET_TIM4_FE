import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Records = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await api.get('/appointment_handler/appointments/myappointments');
                setRecords(response.data);
            } catch (error) {
                console.error('Error fetching records', error);
            }
        };

        fetchRecords();
    }, []);

    return (
        <div>
            <h2>Records</h2>
            <ul>
                {records.map(record => (
                    <li key={record.id}>{record.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default Records;
