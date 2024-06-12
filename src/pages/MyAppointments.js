import React, { useEffect, useState } from 'react';
import './Appointments.css';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newAppointment, setNewAppointment] = useState({
        date: '',
        time: '',
        reason: '',
    });

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:8091/appointments/patient');
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Failed to fetch appointments:', error);
        }
    };

    const handleNewAppointmentChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreateAppointment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8091/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAppointment),
            });
            if (response.ok) {
                fetchAppointments();
                setShowPopup(false);
                setNewAppointment({ date: '', time: '', reason: '' });
            } else {
                console.error('Failed to create appointment');
            }
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    return (
        <div className="appointments-page">
            <h2>My Appointments</h2>
            <button onClick={() => setShowPopup(true)}>Create New Appointment</button>
            <ul className="appointments-list">
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        <p><strong>Date:</strong> {appointment.date}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                        <p><strong>Reason:</strong> {appointment.reason}</p>
                    </li>
                ))}
            </ul>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Create New Appointment</h3>
                        <form onSubmit={handleCreateAppointment}>
                            <input
                                type="date"
                                name="date"
                                value={newAppointment.date}
                                onChange={handleNewAppointmentChange}
                                required
                            />
                            <input
                                type="time"
                                name="time"
                                value={newAppointment.time}
                                onChange={handleNewAppointmentChange}
                                required
                            />
                            <textarea
                                name="reason"
                                value={newAppointment.reason}
                                onChange={handleNewAppointmentChange}
                                placeholder="Reason for appointment"
                                required
                            ></textarea>
                            <button type="submit">Create Appointment</button>
                            <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAppointments;
