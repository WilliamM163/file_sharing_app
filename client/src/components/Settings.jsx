import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Settings({ setIsAuth }) {
    const [showSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/');
        setIsAuth(false);
    }

    const closeModal = () => {
        navigate(-1);
    }
    
    useEffect(() => {
        if (location.pathname == '/settings') {
            setShowSettings(true);
        } else {
            setShowSettings(false);
        }
    }, [location]);

    if (!showSettings) return <></>

    return (
        <div className="modal">
            <div className="container">
                <header>
                    <h1>Settings</h1>
                    <img
                        src="/icons/close.svg"
                        alt="Close Modal"
                        onClick={closeModal}
                    />
                </header>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Settings;