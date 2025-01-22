import { Link } from 'react-router-dom';

function Home() {
    return (
    <div>
        <h1>Home</h1>
        <ul>
            <li><Link to="/login">Login Here</Link></li>
            <li><Link to="/register">Register Here</Link></li>
        </ul>
    </div>
    );
}

export default Home;