import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logout from "../functions/logout";
import registerDevice from "../functions/registerDevice";

function SettingsModal({ setIsAuth }) {
    const [showSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const deviceNameInput = useRef(null);
    const deviceTypeInput = useRef(null);

    const closeModal = () => navigate(-1);

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
                <h2>Devices</h2>
                <div className="device_settings">
                    <div>
                        <p>Register a Device</p>
                        <input type="text" placeholder="Device Name" name="Device Name" ref={deviceNameInput} />
                        <br />
                        <select name="Device Type" placeholder="Device Type" ref={deviceTypeInput} >
                            <option value="LAPTOP">Laptop</option>
                            <option value="PHONE">Phone</option>
                            <option value="TABLET">Tablet</option>
                            <option value="OTHER">Other</option>
                        </select>
                        <br />
                        <button onClick={() => registerDevice(deviceNameInput.current.value, deviceTypeInput.current.value)}>Register Device</button>
                    </div>
                    <div>
                        <p>My device</p>
                        <select name="Select My Device" >

                        </select>
                        <br />
                        <button>Confirm</button>
                    </div>
                </div>
                <br />
                <h2>Logout</h2>
                <button onClick={() => logout(navigate, setIsAuth)}>Logout</button>
            </div>
        </div>
    )
}

export default SettingsModal;