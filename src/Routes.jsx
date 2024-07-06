import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


const Routers = () => {
  const user = false; // for testing purposes

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login/>}
      />
      <Route
        path="/"
        element={user ? <Home/> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default Routers;
