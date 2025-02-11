const registerDevice = async () => {
    const deviceName = document.querySelector('input[name="Device Name"]').value;
    const deviceType = document.querySelector('select[name="Device Type"]').value;

    try {
        const deviceID = localStorage.getItem('deviceID');
        if (deviceID) {
            alert('Device already registered');
            return;
        }

        const accessToken = localStorage.getItem('accessToken');
        const base_url = import.meta.env.VITE_API_URL;

        const response = await fetch(
            `${base_url}/user/devices`, {
                method: 'POST',
                headers: {
                    'Authorization': accessToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ deviceName, deviceType })
            });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.log(response.status);
            const data = await response.json();
            alert(data.error);
            return null;
        }
    } catch (error) {
        console.error('Error checking login status: ', error);
        return null;
    }

}

export default registerDevice;