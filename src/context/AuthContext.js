import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import PropTypes from "prop-types";


const AuthContext = createContext();



export function AuthProvider({children}){



    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate


    useEffect(()=>{
        verifyAuth();
    },[])

    const verifyAuth = async () =>{
        try {
            const response = await axios.get('http://localhost:8080/api/auth/authenticate',{
                withCredential: true
            })

            setUser(response.data.user)

        }catch  {
            setUser(null)

        } finally{
            setLoading(false)
        }
    }

    const login = async () =>{
        try{
            await axios.post('http://localhost:8080/api/auth/authenticate',{
                withCredential: true
            })


            await verifyAuth()
            navigate("/demo")



        } catch(error){
            console.log("Login failed", error)
            throw error

        } 
    }

    return(
        <AuthContext.Provider value ={{user, loading, login, verifyAuth}}>
            {children}
        </AuthContext.Provider>
    )



}


AuthProvider.propTypes ={
    children: PropTypes.any.isRequired

}


export const useAuth = () => useContext(AuthContext)