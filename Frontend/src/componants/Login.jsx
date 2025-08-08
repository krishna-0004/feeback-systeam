import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import axios from "axios";

const Login = () => {
    const [prn, setPrn] = useState(""); // PRN input
    const [password, setPassword] = useState(""); // Password input
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post("http://localhost:5000/auth/login", {
                prn,  
                pass: password  
            });

            const { token, user } = response.data;
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
            console.error("Login error:", err.response?.data);
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Enter PRN" 
                    value={prn} 
                    onChange={(e) => setPrn(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

// export default Login;
