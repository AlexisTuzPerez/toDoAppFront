import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';





import SignIn from './auth/SignIn.jsx';
import SignUp from './auth/SignUp.jsx';

import Demo from "./demo/Demo.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={< SignUp/>} />

        <Route path="/demo" element={<Demo />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
