const logout = (navigate, setIsAuth) => {
    localStorage.removeItem('accessToken');
    navigate('/');
    setIsAuth(false);
}

export default logout;