import React from 'react';
import { Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import HODDashboard from './components/HODDashboard/HODDashboard';
import Student from './components/Stundet/Student';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path="/student-feedback" element={<StudentDashboard />} />
            <Route path='/student-dashboard' element={<Student />} />
            <Route path='/hod-dashboard' element={<HODDashboard />} />
        </Routes>
    );
}

export default App;
