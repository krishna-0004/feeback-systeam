import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [prn, setPrn] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const responce = await axios.post("http://localhost:5000/auth/login", {
        prn,
        pass: password
      });

      const { token, user } = responce.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      if (user.role === "student") {
        navigate("/student-dashboard");
      } else if (user.role === "hod") {
        navigate("/hod-dashboard");
      } else {
        setError("Invalid role");
      }
    } catch (err) {
      console.error("Login error: ", err.responce?.data);;
      setError(err.responce?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="bg-image">
    <div className='login-container'>
        <div className='container'>
          <h2 className='text-4xl text-[#dc2626] font-bold uppercase'>LOGIN</h2>
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <label>PRN</label>
            <input type="text" placeholder="Enter Your PRN" value={prn} onChange={(e) => setPrn(e.target.value)} className="p-2 border rounded" />
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" />
            <button type="submit" className="p-2 bg-[#dc2626] rounded-2xl hover:bg-[#dc2626d4] text-white">Login</button>
          </form>
          {error && <p className='error-message'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;