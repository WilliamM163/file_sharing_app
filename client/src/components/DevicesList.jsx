import { useState, useEffect } from 'react';
import getDevices from '../functions/getDevices';

function DevicesList() {
    const [devices, setDevices] = useState([]);

    const onClick = (id) => {
        const selectFile = document.getElementById(`DEVICE:${id}`)
        selectFile.click();
    }

    const uploadFile = (e) => {
        console.log(e.target.files);
    }

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
                <li className='tile' onClick={() => { onClick(item.id) }}>
                    <input type="file" className="input_file" id={`DEVICE:${item.id}`} onChange={uploadFile} multiple />
                    <img src={src} alt={item.type} width='75px' height='75px' />
                    {item.name}
                </li>
            )
        });
    }

    useEffect(() => {
        getDevices().then(data => {
            setDevices(data.devices);
        });
    }, []);

    return (
        <div className='container'>
            <h2 className='title'>Your Devices</h2>
            <ul className='sendList'>
                {tile(devices)}
            </ul>
        </div>
    )
}

export default DevicesList;