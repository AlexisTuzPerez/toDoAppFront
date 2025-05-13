// src/context/AuthContext.jsx
import axios from 'axios';
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


const BaseURL = import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {

        verifyAuth();
    }, []);

    const verifyAuth = async () => {
        try {

            const axiosInstance = axios.create({
                baseURL: BaseURL,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await axiosInstance.get('/auth/verifyAuth');
            
            if (response.data && response.data.user && response.data.user.email) {

                setUser(response.data.user.email);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Error verifying authentication:', error);
            console.error('Error details:', {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data
            });
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
    
            const axiosInstance = axios.create({
                baseURL: BaseURL,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            const response = await axiosInstance.post('/auth/authenticate', credentials);

            const cookieHeader = response.headers['set-cookie'];

            const cookies = document.cookie.split(';');

            const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token=')); 

            if (!tokenCookie && cookieHeader) {
                const cookieMatch = cookieHeader.match(/token=([^;]+)/);
                if (cookieMatch) {
                    const tokenValue = cookieMatch[1];
                    document.cookie = `token=${tokenValue}; path=/; SameSite=Lax`;
                }
            }

            if (response.status === 200) {


                await verifyAuth();

                navigate("/dashboard");
            } else {

                throw new Error(`Login failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('Login failed:', error);
            console.error('Error details:', {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data
            });
            throw error;
        }
    };



    const register = async (credentials) => {

        try{
            await axios.post(BaseURL+'/auth/register', credentials,{
                withCredentials: true
            })

        } catch (error){
            console.log("Error in the registration", error)
            throw error
        }
    }

    const logout = async () =>{
        try {
            await axios.post(BaseURL+'/auth/logout', {
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