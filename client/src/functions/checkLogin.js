const checkLogin = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const base_url = import.meta.env.VITE_API_URL;

        const response = await fetch(`${base_url}/user/validate`, {
            method: 'POST',
            headers: { 'Authorization': accessToken }
        });
        console.log(response);
        console.log(response.ok);
        
        return response.ok;
    } catch (error) {
        console.error('Error checking login status: ', error);
        return false;
    }
}

export default checkLogin;