import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logout from "../functions/logout";
import registerDevice from "../functions/registerDevice";

function SettingsModal({ setIsAuth }) {
    const [showSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
                <h2>Register a new device</h2>
                <input type="text" placeholder="Device Name" name="Device Name" />
                <br />
                <select name="Device Type">
                    <option value=""></option>
                    <option value="LAPTOP">Laptop</option>
                    <option value="PHONE">Phone</option>
                    <option value="TABLET">Tablet</option>
                    <option value="OTHER">Other</option>
                </select>
                <br />
                <button onClick={() => registerDevice()}>Register Device</button>
                <br />
                <h2>Logout</h2>
                <button onClick={() => logout(navigate, setIsAuth)}>Logout</button>
            </div>
        </div>
    )
}

export default SettingsModal;