import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // ✅ CSS file import करो

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/signup", {
                name,
                email,
                password
            });

            setMessage(response.data.message);

            if (response.status === 200 && response.data.token) {
                localStorage.setItem("token", response.data.token);
                window.location.href = "http://localhost:3001";
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Signup failed. Please try again.");
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Create Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Signup</button>
                </form>
                {message && <p className="signup-message">{message}</p>}
            </div>
        </div>
    );
}

export default Signup;
