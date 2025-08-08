import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import SGULogo from '../../assets/sgu_logo.png'
import CQLogo from '../../assets/codequell.png'

function LandingPage() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    return (
        <>
          <div className="-mt-3">
          <div className='bg-image pt-2.5'>
                <nav className='nav-landing '>
                    <div className="nav-container">
                        <div className="logo">
                            <img src={SGULogo}
                                alt="SGU Logo" />
                        </div>
                        <div className="nav-links">
                            <button onClick={goToLogin} className="login-btn">Login</button>
                        </div>
                    </div>
                </nav>

                <main>
                    <div className="content">
                        <h1 className='text-[#dc2626] text-5xl font-bold'>SGU FEEDBACK PORTAL</h1>
                        <div className="developed-by">
                            <p>DEVELOPED BY</p>
                            <div className="logo-container">
                                <img src={CQLogo} alt="CodeQuell" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
          </div>
        </>
    );
}

export default LandingPage;