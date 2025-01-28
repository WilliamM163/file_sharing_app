import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><a href="Logout">Logout</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;