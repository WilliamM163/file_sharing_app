import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/not_found';
import checkLogin from './functions/checkLogin';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLogin().then(response => {
      setIsAuth(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  return (
    <div className="App">
      <Routes>
        {/* Protected Routes */}
        <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
