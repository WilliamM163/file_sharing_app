import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const base_url = import.meta.env.VITE_API_URL;
        const response = await fetch(`${base_url}/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }

        // Successfull Response
        const { accessToken } = await response.json();
        localStorage.setItem("accessToken", accessToken);

        // Navigate to home page
        navigate('/home');
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Don't have an account? Register here</Link>
        </>
    );
}

export default Login;