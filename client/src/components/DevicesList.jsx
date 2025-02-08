import { useState, useEffect } from 'react';
import getDevices from '../functions/getDevices';

function DevicesList() {
    const [devices, setDevices] = useState([]);

    const tile = (sendList) => {
        const deviceType = {
            'LAPTOP': '/icons/devices/laptop.svg',
            'PHONE': '/icons/devices/phone.svg',
            'TABLET': '/icons/devices/tablet.svg',
    
            getIcon(deviceType) {
                return this[deviceType] || '/icons/devices/other.svg';
            }
        }
        
        return sendList.map(item => {
            const src = deviceType.getIcon(item.type);
            return (
                <div>
                    <img src={src} alt={item.type} />
                    {item.name}
                </div>
            )
        });
    }

    useEffect(() => {
        getDevices().then(data => {
            setDevices(data.devices);
        });
    }, []);

    return (
        <div>
            <h2>Your Devices</h2>
            {tile(devices)}
        </div>
    )
}

export default DevicesList;