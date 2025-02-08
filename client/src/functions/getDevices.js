const getDevices = async () => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const base_url = import.meta.env.VITE_API_URL;

        const response = await fetch(
            `${base_url}/user/devices`,
            { headers: { 'Authorization': accessToken } }
        );

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error checking login status: ', error);
        return null;
    }

}

export default getDevices;