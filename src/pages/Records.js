import React, { useEffect, useState } from 'react';
import './Records.css';

const Records = () => {
    const [record, setRecord] = useState(null);

    useEffect(() => {
        fetchRecord();
    }, []);

    const fetchRecord = async () => {
        try {
            const response = await fetch('http://localhost:8091/records/patient');
            const data = await response.json();
            setRecord(data);
        } catch (error) {
            console.error('Failed to fetch record:', error);
        }
    };

    return (
        <div className="record-page">
            <h2>My Record</h2>
            {record ? (
                <div className="record-details">
                    <p><strong>First Name:</strong> {record.firstName}</p>
                    <p><strong>Last Name:</strong> {record.lastName}</p>
                    <p><strong>Email:</strong> {record.email}</p>
                    <p><strong>Phone:</strong> {record.phone}</p>
                    <p><strong>Address:</strong> {record.address}</p>
                    <p><strong>Gender:</strong> {record.gender}</p>
                    <p><strong>Birth Date:</strong> {record.birthDate}</p>

                    <h3>Files</h3>
                    <ul className="files-list">
                        {record.files && record.files.length > 0 ? (
                            record.files.map((file, index) => (
                                <li key={index}>
                                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                                        <img src={file.url} alt={`File ${index + 1}`} />
                                    </a>
                                </li>
                            ))
                        ) : (
                            <p>No files available</p>
                        )}
                    </ul>
                </div>
            ) : (
                <p>Loading record...</p>
            )}
        </div>
    );
};

export default Records;
