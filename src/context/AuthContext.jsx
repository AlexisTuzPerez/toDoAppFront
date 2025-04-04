// src/context/AuthContext.jsx
import axios from 'axios';
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Fixed: Added parentheses

    useEffect(() => {
        verifyAuth();
    }, []);

    const verifyAuth = async () => {

        try {
            const response = await axios.get('http://localhost:8080/api/verifyAuth', {
                withCredentials: true // Fixed: Correct property name
            });
            setUser(response.data);


        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {

        try {
            await axios.post('http://localhost:8080/api/auth/authenticate', credentials, {
                withCredentials: true 
            });
            await verifyAuth();
            navigate("/dashboard");
        } catch (error) {
            console.log("Login failed", error);
            throw error;
        }
    };


    const register = async (credentials) => {
        console.log(credentials)
        try{
            await axios.post('http://localhost:8080/api/auth/register', credentials,{
                withCredentials: true
            })

        } catch (error){
            console.log("Error in the registration", error)
            throw error
        }
    }

    const logout = async () =>{
        try {
            await axios.post('http://localhost:8080/api/auth/logout',{}, {
                withCredentials: true
            })
            setUser(null)
            localStorage.clear()




        } catch (error){
            console.log("Error in the logout", error)
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, login,register, verifyAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useAuth = () => useContext(AuthContext);