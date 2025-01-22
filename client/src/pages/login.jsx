import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClick = async (e) => {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        });
        console.log(response);
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={onClick}>Login</button>
            <br />
            <Link to="/register">Don't have an account? Register here</Link>
        </div>
    );
}

export default Login;