import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onClick = async (e) => {
        const response = await fetch('http://localhost:3000/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, password, password2 })
        });
        console.log(response);
    }

    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <input type="password" placeholder="Confirm Password" value={password2} onChange={e => setPassword2(e.target.value)} />
            <br />
            <button onClick={onClick}>Login</button>
            <br />
            <Link to="/login">Have an account? Login here</Link>
        </div>
    );
}

export default Register;