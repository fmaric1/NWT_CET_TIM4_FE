import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the token exists in local storage
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Set to true if token exists, otherwise false
    }, []);

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {isAuthenticated && <li><Link to="/MyAppointments">My Appointments</Link></li>}
                {isAuthenticated && <li><Link to="/AllAppointments">All Appointments</Link></li>}
                {isAuthenticated && <li><Link to="/records">Records</Link></li>}
                {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
                {!isAuthenticated && <li><Link to="/signup">Signup</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={() => {

                   


                    localStorage.removeItem('token'); // Remove the token on logout
                    setIsAuthenticated(false); // Update the state to reflect logout
                }}>Logout</Link></li>}
            </ul>
        </nav>
    );
};

export default Navbar;


