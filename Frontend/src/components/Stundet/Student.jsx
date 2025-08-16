import React, { useEffect, useState } from 'react';
import './Student.css';
import AdminSideBar from '../SideBar/AdminSideBar';
import feedbackImg from '../../assets/feedback.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Student() {
  const [session, setSession] = useState({
    name: "",  // Default empty
    year_class: "",
    attendance: 0, // Default to 0 to prevent feedback button from showing initially
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('https://feeback-systeam.onrender.com/feedback/teachers', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")} ` },
        });

        if (response.data) {
          setSession({
            name: response.data.name || "Unknown Student",
            year_class: response.data.year_class || "N/A",
            attendance: response.data.attendance || 0,
          });
        }
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentData();
  }, []);

  useEffect(() => {
    const attendanceCircle = document.getElementById('attendanceCircle');
    if (attendanceCircle) {
      attendanceCircle.style.strokeDashoffset = 100 - session.attendance;
    }
  }, [session.attendance]);

  return (
    <>
      <section>
        <div className="grid md:grid-cols-6 grid-cols-1 p-2">
          <div>
            <AdminSideBar />
          </div>

          <div className="Student-dash col-span-5 md:col-start-2 py-4 md:px-10 px-4">
            <div className="mb-10">
              <p className="text-2xl font-serif font-bold">Welcome, {session.name}</p>
              <p className="text-lg font-semibold">Class: {session.year_class}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              {/* Attendance Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-center justify-center">
                <div>
                  <h2 className="text-xl font-bold mb-2">Attendance</h2>
                  <div className="flex justify-center items-center">
                    <div className="relative w-24 h-24">
                      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#d1d5db" strokeWidth="4" />
                        <circle
                          id="attendanceCircle"
                          cx="18"
                          cy="18"
                          r="15.9155"
                          fill="none"
                          stroke="#00293B"
                          strokeWidth="4"
                          strokeDasharray="100, 100"
                          strokeDashoffset="100"
                          strokeLinecap="round"
                          className="transition-[stroke-dashoffset] duration-1000 delay-[2s] ease-out"
                        />
                      </svg>
                      <div className="flex justify-center items-center absolute inset-0 text-xl font-bold">
                        {session.attendance}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Button (Hidden if attendance < 60%) */}
              {session.attendance >= 70 ? (
                <NavLink to="/student-feedback">
                  <div className="bg-gray-100 py-9 flex justify-center items-center rounded-lg shadow-2xl hover:bg-[#c56e6eb0] hover:text-white w-full h-full">

                    <div>
                      <img src={feedbackImg} alt="feedback" className="w-22" />
                      <p className="font-bold text-center">FEEDBACK</p>
                    </div>

                  </div>
                </NavLink>
              ):(
              <div className="bg-gray-100 py-9 flex justify-center items-center rounded-lg shadow-2xl hover:bg-[#c56e6eb0] hover:text-white w-full h-full">

                <div className='flex flex-col justify-center items-center px-2'>
                  <img src={feedbackImg} alt="feedback" className="w-22" />
                  <p className="font-bold text-center text-[#de2626]">Your Not eligible to give feedbackbecause you have less than 60% attendance</p>
                </div>

              </div>
                            )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}