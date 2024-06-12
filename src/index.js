import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllAppointments from './pages/AllAppointments';
import MyAppointments from './pages/MyAppointments';
import Records from './pages/Records';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import './index.css'; // Import your CSS file here

ReactDOM.render(
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myappointments" element={<MyAppointments />} />
            <Route path="/allappointments" element={<AllAppointments />} />
            <Route path="/records" element={<Records />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
