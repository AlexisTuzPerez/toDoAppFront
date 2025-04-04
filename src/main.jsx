import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';

import LogIn from './auth/LogIn.jsx';
import Register from './auth/Register.jsx';

import ProtectedRoute from './auth/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import Dashboard from "./dashboard/Dashboard.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={ <ProtectedRoute > <Dashboard /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)




/* 

things to do:





*/