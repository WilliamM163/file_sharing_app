import { Link } from 'react-router-dom';

import Navigation from '../components/navigation';

function Home() {
    const onSubmit = (e) => {
        const files = e.target.FileUpload.files;
        console.log(e.target.FileUpload.files);

        e.preventDefault();
    }
    
    return (
    <div>
        <Navigation />
        <h1>Home</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="FileUpload">Select a file:</label>
            <input type="file" id="FileUpload" />
            <br />
            <button type='Submit'>Send</button>
        </form>
    </div>
    );
}

export default Home;